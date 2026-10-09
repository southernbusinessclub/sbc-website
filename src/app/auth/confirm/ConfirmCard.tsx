"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { EmailOtpType } from "@supabase/supabase-js";
import { Button, Card, Icon, Input } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";
import styles from "./confirm.module.css";

type Status = "ready" | "verifying" | "success" | "already" | "invalid" | "linkError" | "newpw";

export function ConfirmCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/account";
  const isRecovery = type === "recovery";

  const [status, setStatus] = useState<Status>(tokenHash && type ? "ready" : "invalid");
  const [confirmedEmail, setConfirmedEmail] = useState<string | null>(null);
  const [linking, setLinking] = useState(false);

  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [pwError, setPwError] = useState<string | null>(null);
  const [pwBusy, setPwBusy] = useState(false);
  const pwOk = pw.length >= 8 && pw === pw2;

  // No-op for a brand-new Join signup (no unclaimed roster row to find), and
  // the only thing that links a returning Claim member's confirmed login
  // back to their existing roster row (history, dues). See claim_roster()'s
  // own WHERE clause for why this is safe to call unconditionally.
  const linkRoster = async (emailToLink: string) => {
    const supabase = createClient();
    const { error } = await supabase.rpc("claim_roster", { lookup_email: emailToLink });
    return !error;
  };

  const confirm = async () => {
    if (!tokenHash || !type) return;
    setStatus("verifying");
    const supabase = createClient();
    const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });
    if (!error) {
      // The nav reads the session from a server component higher up the
      // tree — without a refresh it keeps showing signed-out after this
      // page hands off to "Go to my account" until the next full navigation.
      router.refresh();
      const userEmail = data.user?.email ?? null;
      if (type === "signup" && userEmail) {
        setConfirmedEmail(userEmail);
        const linked = await linkRoster(userEmail);
        if (!linked) {
          // A real RPC failure, not "no matching roster row" (that's just
          // false, not an error) — staying silent here would recreate the
          // exact stranded-member state this whole flow exists to avoid.
          setStatus("linkError");
          return;
        }
      }
      if (isRecovery) {
        setStatus("newpw");
        return;
      }
      setStatus("success");
      return;
    }
    // A link that's already been used and one that's genuinely expired come
    // back as the same generic error from Supabase, so the only way to tell
    // them apart is whether this browser already holds a session from
    // confirming it earlier.
    const { data: userData } = await supabase.auth.getUser();
    setStatus(userData.user ? "already" : "invalid");
  };

  const retryLink = async () => {
    if (!confirmedEmail) return;
    setLinking(true);
    const linked = await linkRoster(confirmedEmail);
    setLinking(false);
    setStatus(linked ? "success" : "linkError");
  };

  const submitNewPassword = async (e: FormEvent) => {
    e.preventDefault();
    if (!pwOk) return;
    setPwError(null);
    setPwBusy(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password: pw });
    setPwBusy(false);
    if (error) {
      setPwError(error.message);
      return;
    }
    router.refresh();
    router.push(next);
  };

  return (
    <Card padding="var(--space-8)" className={styles.card}>
      {status === "ready" || status === "verifying" ? (
        <>
          <span className={styles.icon}>
            <Icon name={isRecovery ? "key-round" : "mail"} size={26} />
          </span>
          <h1 className={styles.title}>{isRecovery ? "Reset your password" : "Confirm your email"}</h1>
          <p className={styles.lede}>
            {isRecovery
              ? "Tap the button below to verify it's you, then set a new password."
              : "Tap the button below to finish setting up your Southern Business Club account."}
          </p>
          <Button size="lg" full disabled={status === "verifying"} onClick={confirm}>
            {isRecovery
              ? status === "verifying"
                ? "Verifying…"
                : "Reset my password"
              : status === "verifying"
                ? "Confirming…"
                : "Confirm my account"}
          </Button>
        </>
      ) : null}

      {status === "newpw" ? (
        <>
          <span className={styles.icon}>
            <Icon name="key-round" size={26} />
          </span>
          <h1 className={styles.title}>Set a new password</h1>
          <p className={styles.lede}>Choose a new password for your account.</p>
          <form onSubmit={submitNewPassword}>
            <div className={styles.fields}>
              <Input
                label="New password"
                icon="lock"
                type="password"
                placeholder="At least 8 characters"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
              <Input
                label="Confirm password"
                icon="lock"
                type="password"
                value={pw2}
                onChange={(e) => setPw2(e.target.value)}
                error={pw2.length > 0 && pw !== pw2 ? "Those don't match." : undefined}
              />
            </div>
            <Button type="submit" size="lg" full style={{ marginTop: 20 }} disabled={!pwOk || pwBusy}>
              {pwBusy ? "Setting…" : "Set new password"}
            </Button>
          </form>
          {pwError ? <p className={styles.formError}>{pwError}</p> : null}
        </>
      ) : null}

      {status === "success" ? (
        <>
          <span className={`${styles.icon} ${styles.iconSuccess}`}>
            <Icon name="check-circle" size={26} />
          </span>
          <h1 className={styles.title}>You&apos;re confirmed</h1>
          <p className={styles.lede}>Your account is ready. Head to the member area to see what&apos;s there.</p>
          <Button as="a" href={next} size="lg" full style={{ textDecoration: "none" }}>
            Go to my account
          </Button>
        </>
      ) : null}

      {status === "already" ? (
        <>
          <span className={`${styles.icon} ${styles.iconSuccess}`}>
            <Icon name="badge-check" size={26} />
          </span>
          <h1 className={styles.title}>{isRecovery ? "Link already used" : "You're all set"}</h1>
          <p className={styles.lede}>
            {isRecovery
              ? "This reset link has already been used. If you already set a new password, sign in with it."
              : "This account is already confirmed. Sign in to get to your member area."}
          </p>
          <Button as="a" href="/login" size="lg" full style={{ textDecoration: "none" }}>
            Sign in
          </Button>
        </>
      ) : null}

      {status === "linkError" ? (
        <>
          <span className={`${styles.icon} ${styles.iconWarn}`}>
            <Icon name="alert-triangle" size={26} />
          </span>
          <h1 className={styles.title}>Almost there</h1>
          <p className={styles.lede}>
            Your email is confirmed, but we couldn&apos;t link your club history. Try again.
          </p>
          <Button size="lg" full disabled={linking} onClick={retryLink}>
            {linking ? "Trying…" : "Try again"}
          </Button>
        </>
      ) : null}

      {status === "invalid" ? (
        <>
          <span className={`${styles.icon} ${styles.iconWarn}`}>
            <Icon name="alert-triangle" size={26} />
          </span>
          <h1 className={styles.title}>That link didn&apos;t work</h1>
          <p className={styles.lede}>
            {isRecovery
              ? "This password reset link is invalid or has expired. Request a new one."
              : "This confirmation link is invalid or has expired. Sign up again and we'll send a new one."}
          </p>
          <Button as="a" href={isRecovery ? "/forgot-password" : "/join"} size="lg" full style={{ textDecoration: "none" }}>
            Request a new link
          </Button>
        </>
      ) : null}
    </Card>
  );
}
