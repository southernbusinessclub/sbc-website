"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { EmailOtpType } from "@supabase/supabase-js";
import { Button, Card, Icon } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";
import styles from "./confirm.module.css";

type Status = "ready" | "verifying" | "success" | "already" | "invalid";

export function ConfirmCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/account";

  const [status, setStatus] = useState<Status>(tokenHash && type ? "ready" : "invalid");

  const confirm = async () => {
    if (!tokenHash || !type) return;
    setStatus("verifying");
    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });
    if (!error) {
      // The nav reads the session from a server component higher up the
      // tree — without a refresh it keeps showing signed-out after this
      // page hands off to "Go to my account" until the next full navigation.
      router.refresh();
      setStatus("success");
      return;
    }
    // A link that's already been used and one that's genuinely expired come
    // back as the same generic error from Supabase, so the only way to tell
    // them apart is whether this browser already holds a session from
    // confirming it earlier.
    const { data } = await supabase.auth.getUser();
    setStatus(data.user ? "already" : "invalid");
  };

  return (
    <Card padding="var(--space-8)" className={styles.card}>
      {status === "ready" || status === "verifying" ? (
        <>
          <span className={styles.icon}>
            <Icon name="mail" size={26} />
          </span>
          <h1 className={styles.title}>Confirm your email</h1>
          <p className={styles.lede}>
            Tap the button below to finish setting up your Southern Business Club account.
          </p>
          <Button size="lg" full disabled={status === "verifying"} onClick={confirm}>
            {status === "verifying" ? "Confirming…" : "Confirm my account"}
          </Button>
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
          <h1 className={styles.title}>You&apos;re all set</h1>
          <p className={styles.lede}>This account is already confirmed. Sign in to get to your member area.</p>
          <Button as="a" href="/login" size="lg" full style={{ textDecoration: "none" }}>
            Sign in
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
            This confirmation link is invalid or has expired. Sign up again and we&apos;ll send a new one.
          </p>
          <Button as="a" href="/join" size="lg" full style={{ textDecoration: "none" }}>
            Request a new link
          </Button>
        </>
      ) : null}
    </Card>
  );
}
