"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Badge, Button, Card, Icon, Input } from "@/components/ui";
import { CURRENT_SCHOOL_YEAR, TREASURER } from "@/lib/school-year";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/client";
import styles from "./claim.module.css";

type Step = "email" | "found" | "setpw" | "sent" | "notfound";

interface RosterMatch {
  member_id: string;
  first_name: string;
  last_name: string;
  major: string | null;
  standing: string | null;
  member_since: string;
  dues_paid: boolean;
}

export default function ClaimPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<Step>("email");
  const [match, setMatch] = useState<RosterMatch | null>(null);
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const pwOk = pw.length >= 8 && pw === pw2;

  const lookUp = async () => {
    setError(null);
    if (!isSupabaseConfigured()) {
      setError("The club hasn't connected its account system yet — check back soon.");
      return;
    }
    setBusy(true);
    const supabase = createClient();
    const { data, error: rpcError } = await supabase.rpc("check_roster", {
      lookup_email: email.trim(),
      lookup_school_year: CURRENT_SCHOOL_YEAR,
    });
    setBusy(false);
    if (rpcError) {
      setError(rpcError.message);
      return;
    }
    const found = data?.[0] ?? null;
    setMatch(found);
    setStep(found ? "found" : "notfound");
  };

  const finishClaim = async (e: FormEvent) => {
    e.preventDefault();
    if (!pwOk) return;
    setError(null);
    setBusy(true);

    // Same call Join uses — this creates only the login (auth.users), never
    // a members or join_requests row. check_roster already confirmed this
    // email matches a real, unclaimed roster row; /auth/confirm links the
    // two together once this signup is confirmed.
    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({ email: email.trim(), password: pw });
    setBusy(false);
    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setStep("sent");
  };

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className="sbc-eyebrow">Already a member</div>
          <h1 className={styles.title}>
            Claim your
            <br />
            account
          </h1>
          <p className={styles.lede}>
            If you&apos;ve been in the club before, you don&apos;t sign up from scratch. We have you on the roster —
            enter your Southern email, set a password, and your history carries over.
          </p>
          <div className={styles.pointList}>
            {[
              ["user-check", "We check the email against the club roster"],
              ["key-round", "You set a password once, then log in from the site like normal"],
              ["history", "Your past events and dues record carry over"],
            ].map(([icon, text]) => (
              <div key={text} className={styles.pointItem}>
                <span className={styles.pointIcon}>
                  <Icon name={icon as "user-check" | "key-round" | "history"} size={18} />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        <Card padding="var(--space-8)">
          {step === "email" ? (
            <div>
              <h2 className={styles.stepTitle}>Find me</h2>
              <p className={styles.stepLede}>Use the email you gave us when you joined.</p>
              <Input
                label="Southern email"
                icon="mail"
                type="email"
                placeholder="you@southern.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button size="lg" full style={{ marginTop: 20 }} disabled={!email.trim() || busy} onClick={lookUp}>
                {busy ? "Looking…" : "Look me up"}
              </Button>
              {error ? <p className={styles.formError}>{error}</p> : null}
              <p className={styles.center}>
                Never joined before? <a href="/join">Sign up here</a>
              </p>
            </div>
          ) : null}

          {step === "found" && match ? (
            <div>
              <span className={`${styles.stepIcon} ${styles.stepIconFound}`}>
                <Icon name="user-check" size={26} />
              </span>
              <h2 className={styles.stepTitle}>Found you</h2>
              <p className={styles.stepLede}>This is what the roster has. Confirm it&apos;s you and pick a password.</p>
              <div style={{ marginBottom: 20 }}>
                <div className={styles.row}>
                  <span className={styles.rowLabel}>Name</span>
                  <span className={styles.rowValue}>
                    {match.first_name} {match.last_name}
                  </span>
                </div>
                <div className={styles.row}>
                  <span className={styles.rowLabel}>Major</span>
                  <span className={styles.rowValue}>{match.major ?? "—"}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.rowLabel}>Class standing</span>
                  <span className={styles.rowValue}>{match.standing ?? "—"}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.rowLabel}>Member since</span>
                  <span className={styles.rowValue}>{match.member_since}</span>
                </div>
                <div className={styles.duesRow}>
                  <span className={styles.rowLabel}>Dues</span>
                  {match.dues_paid ? (
                    <Badge tone="accent" icon="badge-check">
                      Paid for {CURRENT_SCHOOL_YEAR}
                    </Badge>
                  ) : (
                    <Badge tone="neutral">Not paid for {CURRENT_SCHOOL_YEAR}</Badge>
                  )}
                </div>
              </div>
              {!match.dues_paid ? (
                <div className={styles.duesNudge}>
                  <div className={styles.duesNudgeTitle}>
                    Dues are $10 a year, and {CURRENT_SCHOOL_YEAR} isn&apos;t paid
                  </div>
                  <p className={styles.duesNudgeBody}>
                    You still get the account and your history. Hand Sarah $10 at the next event to stay a member —
                    or if you already paid her this year, text her and she&apos;ll fix the record.
                  </p>
                  <Button
                    as="a"
                    href={`sms:${TREASURER.tel}?&body=${encodeURIComponent(
                      `Hey Sarah! This is ${match.first_name} ${match.last_name}. I think I already paid my club dues but the site has me as unpaid. Can you check?`,
                    )}`}
                    variant="outline"
                    size="sm"
                    style={{ textDecoration: "none" }}
                  >
                    Text Sarah
                  </Button>
                </div>
              ) : null}
              <Button size="lg" full onClick={() => setStep("setpw")}>
                That&apos;s me — set a password
              </Button>
              <p className={styles.center}>
                Not you?{" "}
                <span
                  role="button"
                  onClick={() => {
                    setEmail("");
                    setStep("email");
                  }}
                >
                  Try another email
                </span>
              </p>
            </div>
          ) : null}

          {step === "setpw" ? (
            <div>
              <span className={`${styles.stepIcon} ${styles.stepIconSetpw}`}>
                <Icon name="key-round" size={26} />
              </span>
              <h2 className={styles.stepTitle}>Set a password</h2>
              <p className={styles.stepLede}>
                Pick a password, then click the confirmation link we send to {email} — your history carries over
                automatically.
              </p>
              <form onSubmit={finishClaim}>
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
                <Button type="submit" size="lg" full style={{ marginTop: 20 }} disabled={!pwOk || busy}>
                  {busy ? "Sending…" : "Send confirmation link"}
                </Button>
              </form>
              {error ? <p className={styles.formError}>{error}</p> : null}
            </div>
          ) : null}

          {step === "sent" ? (
            <div>
              <span className={`${styles.stepIcon} ${styles.stepIconSetpw}`}>
                <Icon name="mail" size={26} />
              </span>
              <h2 className={styles.stepTitle}>Check your email</h2>
              <p className={styles.stepLede}>
                We sent a confirmation link to {email}. Click it to finish claiming your account — your history
                carries over automatically.
              </p>
              <p className={styles.center}>
                No email after a few minutes? You may already have an account. <a href="/login">Try logging in</a>.
              </p>
            </div>
          ) : null}

          {step === "notfound" ? (
            <div>
              <span className={`${styles.stepIcon} ${styles.stepIconNotfound}`}>
                <Icon name="user-search" size={26} />
              </span>
              <h2 className={styles.stepTitle}>Not on the roster</h2>
              <p className={styles.notFoundBody}>
                We can&apos;t find <strong style={{ color: "var(--text-heading)" }}>{email}</strong>. Either you
                joined with a different email, or you&apos;ve never been a member.
              </p>
              <div className={styles.notFoundActions}>
                <Button as="a" href="/join" size="lg" full style={{ textDecoration: "none" }}>
                  Join the club — $10
                </Button>
                <Button
                  variant="outline"
                  full
                  onClick={() => {
                    setEmail("");
                    setStep("email");
                  }}
                >
                  Try a different email
                </Button>
                <Button
                  as="a"
                  href={`sms:${TREASURER.tel}?&body=${encodeURIComponent(
                    "Hey Sarah! I'm already in the business club but the site can't find me. Can you add my email?",
                  )}`}
                  variant="ghost"
                  full
                  style={{ textDecoration: "none" }}
                >
                  I&apos;m sure I&apos;m a member — text Sarah
                </Button>
              </div>
            </div>
          ) : null}
        </Card>
      </div>
    </section>
  );
}
