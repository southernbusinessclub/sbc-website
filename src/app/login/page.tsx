"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Icon } from "@/components/ui";
import { Input } from "@/components/ui/Input";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/client";
import styles from "./login.module.css";

const POINTS: Array<{ icon: "calendar-check" | "piggy-bank" | "star" | "wallet"; text: string }> = [
  { icon: "calendar-check", text: "Every event you have attended" },
  { icon: "piggy-bank", text: "What membership has saved you" },
  { icon: "star", text: "Rate the events you attended" },
  { icon: "wallet", text: "Whether your dues are current" },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isSupabaseConfigured()) {
      setError("The club hasn't connected its account system yet — check back soon.");
      return;
    }
    setSubmitting(true);
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (signInError) {
      setError("That email and password combination didn't work.");
      return;
    }
    router.push("/account");
    router.refresh();
  };

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className="sbc-eyebrow">Members only</div>
          <h1 className={styles.title}>
            Welcome
            <br />
            back
          </h1>
          <p className={styles.lede}>
            Your dashboard has what you&apos;ve saved this year, your dues status, and the events you still owe us
            feedback on.
          </p>
          <div className={styles.pointList}>
            {POINTS.map((p) => (
              <div key={p.text} className={styles.pointItem}>
                <span className={styles.pointIcon}>
                  <Icon name={p.icon} size={18} />
                </span>
                {p.text}
              </div>
            ))}
          </div>
        </div>
        <Card padding="var(--space-8)">
          <h2 className={styles.formTitle}>Log in</h2>
          <p className={styles.formLede}>Your Southern email and the password you set.</p>
          <form onSubmit={onSubmit}>
            <div className={styles.fields}>
              <Input
                label="Southern email"
                icon="mail"
                placeholder="you@southern.edu"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                icon="lock"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error ?? undefined}
              />
            </div>
            <Button type="submit" size="lg" full style={{ marginTop: 22 }} disabled={submitting}>
              {submitting ? "Logging in…" : "Log in"}
            </Button>
          </form>
          <p className={styles.forgot}>Forgot your password?</p>
          <div className={styles.footerLinks}>
            <span>
              Been in the club before but never set a password? <Link href="/claim">Claim your account</Link>
            </span>
            <span>
              Never a member? <Link href="/join">Join the club</Link>
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
}
