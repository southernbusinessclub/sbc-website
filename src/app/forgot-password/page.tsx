"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Button, Card, Icon, Input } from "@/components/ui";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/client";
import styles from "./forgot-password.module.css";

const RESEND_COOLDOWN_SECONDS = 60;

type Step = "form" | "sent";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<Step>("form");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendStatus, setResendStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [resendMessage, setResendMessage] = useState<string | null>(null);

  // Mirrors Join's cooldown timer: the setState lives in the timeout
  // callback, not the effect body, so this only reacts to the timer firing.
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const id = setTimeout(() => setResendCooldown((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [resendCooldown]);

  const requestReset = async (targetEmail: string) => {
    const supabase = createClient();
    return supabase.auth.resetPasswordForEmail(targetEmail);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isSupabaseConfigured()) {
      setError("The club hasn't connected its account system yet — check back soon.");
      return;
    }
    const trimmed = email.trim();
    if (!/^[a-z0-9._%+-]+@southern\.edu$/i.test(trimmed)) {
      setError("Use your @southern.edu email address.");
      return;
    }

    setSubmitting(true);
    await requestReset(trimmed);
    setSubmitting(false);

    // Same response either way, whether or not this email has an account —
    // never confirm or deny account existence here.
    setEmail(trimmed);
    setStep("sent");
    setResendCooldown(RESEND_COOLDOWN_SECONDS);
  };

  const onResend = async () => {
    if (resendCooldown > 0 || resendStatus === "sending") return;
    setResendStatus("sending");
    setResendMessage(null);
    const { error: resendError } = await requestReset(email);
    setResendCooldown(RESEND_COOLDOWN_SECONDS);
    if (resendError) {
      setResendStatus("error");
      setResendMessage(
        resendError.code === "over_email_send_rate_limit" || resendError.code === "over_request_rate_limit"
          ? "You've asked for a few too many emails — give it a bit longer and try again."
          : "That didn't go through. Try again in a moment.",
      );
      return;
    }
    setResendStatus("sent");
    setResendMessage("Sent! Give it a few minutes to land.");
  };

  return (
    <section className={styles.section}>
      <Card padding="var(--space-8)" className={styles.card}>
        {step === "form" ? (
          <>
            <h1 className={styles.title}>Forgot your password?</h1>
            <p className={styles.lede}>Enter your Southern email and we&apos;ll send you a link to reset it.</p>
            <form onSubmit={onSubmit}>
              <div className={styles.fields}>
                <Input
                  label="Southern email"
                  icon="mail"
                  type="email"
                  placeholder="you@southern.edu"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" size="lg" full style={{ marginTop: 20 }} disabled={submitting}>
                {submitting ? "Sending…" : "Send reset link"}
              </Button>
              {error ? <p className={styles.formError}>{error}</p> : null}
            </form>
            <p className={styles.center}>
              Remembered it? <Link href="/login">Log in</Link>
            </p>
          </>
        ) : (
          <>
            <span className={styles.icon}>
              <Icon name="mail" size={26} />
            </span>
            <h1 className={styles.successTitle}>Check your email</h1>
            <p className={styles.successBody}>
              If that email has an account, a reset link is on its way. It can take a few minutes to arrive, so
              check your junk or quarantine folder if you don&apos;t see it.
            </p>
            <div className={styles.resendRow}>
              <Button
                variant="outline"
                size="sm"
                disabled={resendCooldown > 0 || resendStatus === "sending"}
                onClick={onResend}
              >
                {resendStatus === "sending"
                  ? "Sending…"
                  : resendCooldown > 0
                    ? `Resend email (${resendCooldown}s)`
                    : "Resend email"}
              </Button>
              {resendMessage ? (
                <span className={resendStatus === "error" ? styles.resendError : styles.resendSuccess}>
                  {resendMessage}
                </span>
              ) : null}
            </div>
            <p className={styles.center}>
              <Link href="/login">Back to login</Link>
            </p>
          </>
        )}
      </Card>
    </section>
  );
}
