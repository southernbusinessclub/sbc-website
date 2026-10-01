"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Icon,
  Input,
  Select,
  Switch,
  Textarea,
} from "@/components/ui";
import { TREASURER } from "@/lib/school-year";
import { submitJoinRequest } from "./actions";
import styles from "./join.module.css";

const BENEFITS = [
  "An invitation to every event",
  "Free professional headshots",
  "Mock interviews",
  "Discounts on club merch",
  "The member community and directory",
];

const INTEREST_OPTIONS = ["Networking", "Mock interviews", "Headshots"] as const;

export default function JoinPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [standing, setStanding] = useState("Freshman");
  const [major, setMajor] = useState("Business administration");
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState<Record<string, boolean>>({
    Networking: true,
    "Mock interviews": true,
    Headshots: false,
  });
  const [texts, setTexts] = useState(true);
  const [directory, setDirectory] = useState(true);
  const [notes, setNotes] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const smsBody = `Hey Sarah! This is ${first || "________"} ${last || "__________"}. I just registered for the business club. How can I get my dues to you?`;
  const smsHref = `sms:${TREASURER.tel}?&body=${encodeURIComponent(smsBody)}`;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const result = await submitJoinRequest({
      firstName: first,
      lastName: last,
      email,
      phone,
      standing,
      major,
      password,
      interests: INTEREST_OPTIONS.filter((k) => interests[k]),
      smsOptIn: texts,
      directoryOptIn: directory,
      notes,
    });

    setSubmitting(false);
    if (result.error) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <Badge tone="accent" icon="badge-check">
            Check your inbox
          </Badge>
          <h1 className={styles.successTitle}>Confirm your email, then pay Sarah</h1>
          <p className={styles.successBody}>
            We sent a confirmation link to your Southern email — click it to activate your login. An officer will
            add you to the roster shortly after. Go ahead and hand Sarah $10 cash at any event, or text her to meet
            up, so your dues are ready to record the moment you&apos;re added.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button as="a" href={smsHref} iconAfter="arrow-right" style={{ textDecoration: "none" }}>
              Text Sarah about dues
            </Button>
            <Button as="a" href="/" variant="outline" style={{ textDecoration: "none" }}>
              Back home
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className="sbc-eyebrow">Membership</div>
          <h1 className={styles.title}>Join the club</h1>
          <p className={styles.lede}>
            Two minutes now, $10 cash whenever you next see an officer. That covers the whole year.
          </p>
          <div className={styles.claimNudge}>
            <span className={styles.claimNudgeIcon}>
              <Icon name="user-check" size={18} />
            </span>
            <span className={styles.claimNudgeText}>
              Been in the club before? <Link href="/claim">Claim your account instead</Link> — your history carries
              over, and you only pay this year&apos;s $10.
            </span>
          </div>
          <form onSubmit={onSubmit}>
            <Card padding="var(--space-8)">
              <div className={styles.fieldGrid}>
                <Input label="First name" placeholder="Steve" required value={first} onChange={(e) => setFirst(e.target.value)} />
                <Input label="Last name" placeholder="Jobs" required value={last} onChange={(e) => setLast(e.target.value)} />
                <Input
                  label="Southern email"
                  icon="mail"
                  type="email"
                  placeholder="you@southern.edu"
                  required
                  wrapStyle={{ gridColumn: "1 / -1" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Phone number"
                  icon="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  hint="So we can text you event reminders and dues confirmation."
                  wrapStyle={{ gridColumn: "1 / -1" }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Select
                  label="Class standing"
                  options={["Freshman", "Sophomore", "Junior", "Senior", "Graduate"]}
                  value={standing}
                  onChange={(e) => setStanding(e.target.value)}
                />
                <Select
                  label="Major"
                  options={["Accounting", "Business administration", "Finance", "Marketing", "Not business — just interested"]}
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
                <Input
                  label="Password"
                  icon="lock"
                  type="password"
                  placeholder="At least 8 characters"
                  hint="You'll use this and your email to log in."
                  required
                  wrapStyle={{ gridColumn: "1 / -1" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className={styles.interestsBlock}>
                <div className={styles.interestsLabel}>What are you here for?</div>
                <div className={styles.interestsList}>
                  {INTEREST_OPTIONS.map((k) => (
                    <Checkbox
                      key={k}
                      label={k}
                      checked={interests[k]}
                      onChange={() => setInterests({ ...interests, [k]: !interests[k] })}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.switches}>
                <Switch label="Text me event reminders" checked={texts} onChange={() => setTexts(!texts)} />
                <Switch
                  label="Show me on the member directory (coming soon)"
                  checked={directory}
                  onChange={() => setDirectory(!directory)}
                />
              </div>

              <Textarea
                label="Anything we should know?"
                rows={3}
                wrapStyle={{ marginTop: 22 }}
                hint="Optional. Dietary needs, questions, jokes."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <div className={styles.submitRow}>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit membership"}
                </Button>
                <span className={styles.submitNote}>No payment online — $10 cash to the treasurer.</span>
              </div>
              {error ? <p className={styles.formError}>{error}</p> : null}
            </Card>
          </form>
        </div>

        <div className={styles.sidebar}>
          <Card variant="brand">
            <div className={styles.benefitsEyebrow}>$10 per school year</div>
            <ul className={styles.benefitsList}>
              {BENEFITS.map((t) => (
                <li key={t} className={styles.benefitsItem}>
                  <span className={styles.benefitsCheck}>
                    <Icon name="check" size={17} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Card>
          <Card variant="plain">
            <Badge tone="solid">Paying dues</Badge>
            <h3 className={styles.duesTitle}>Cash to Sarah</h3>
            <ol className={styles.duesSteps}>
              <li className={styles.duesStep}>
                <span className={styles.duesStepNumber}>1</span>
                <span>Submit this form. You are on the roster right away.</span>
              </li>
              <li className={styles.duesStep}>
                <span className={styles.duesStepNumber}>2</span>
                <span>Hand Sarah $10 cash at any event, or text her to meet up.</span>
              </li>
            </ol>
            <div className={styles.treasurerRow}>
              <span className={styles.treasurerIcon}>
                <Icon name="wallet" size={18} />
              </span>
              <div>
                <div className={styles.treasurerName}>{TREASURER.name}</div>
                <div className={styles.treasurerRole}>
                  {TREASURER.role} · {TREASURER.phone}
                </div>
              </div>
            </div>
            <Button as="a" href={smsHref} variant="outline" size="sm" iconAfter="arrow-right" style={{ textDecoration: "none" }}>
              Text Sarah about dues
            </Button>
          </Card>
          <Card variant="poster">
            <Badge tone="accent" icon="party-popper">
              Signature event
            </Badge>
            <h3 className={styles.posterTitle}>Taco Bell Black Tie</h3>
            <p className={styles.posterBody}>Rent the tux, take the photo, eat the tacos. Free for members. Date TBA.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
