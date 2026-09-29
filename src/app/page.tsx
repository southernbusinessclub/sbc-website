"use client";

import { useState } from "react";
import { Badge, Button, Card, Dialog, Icon, type IconName } from "@/components/ui";
import { Section } from "@/components/site/Section";
import { ToastViewport } from "@/components/site/ToastViewport";
import { useToast } from "@/lib/useToast";
import styles from "./home.module.css";

const PILLARS: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "calendar-days",
    title: "Events",
    body: "Mixers, service projects, fundraisers, and the one night everyone dresses up. This is where the memories come from.",
  },
  {
    icon: "briefcase",
    title: "Professional development",
    body: "Headshots, mock interviews, and practice at the things you will be judged on later — before it counts.",
  },
  {
    icon: "users",
    title: "The member community",
    body: "Forty-plus people who want to build something, and officers who will introduce you to any of them.",
  },
];

const PLANNED_EVENTS: Array<{ title: string; body: string; when: string; tone?: "brand" | "accent" | "neutral" }> = [
  {
    title: "Meet your officers",
    body: "Pop in, say hi, grab a snack. Ruth McKee School of Business, 5:30 PM.",
    when: "Sep 24",
    tone: "accent",
  },
  {
    title: "Vespers at the Schnells",
    body: "Rice bowls, yard games, worship from Professor Bellino, and worship credit.",
    when: "Oct 2",
    tone: "accent",
  },
  { title: "Taco Bell Black Tie", body: "Formalwear, fast food, and the group photo.", when: "Date TBA" },
  { title: "Headshot night", body: "Ten minutes each, edited shots back within the week.", when: "Date TBA" },
];

const STATS: Array<[string, string]> = [
  ["40+", "members"],
  ["8", "officers"],
  ["$10", "for the whole year"],
  ["1", "black-tie taco night"],
];

export default function HomePage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const { toast, show, hide } = useToast();

  const confirmRsvp = () => {
    setRsvpOpen(false);
    show({ title: "You are on the list", message: "We will text you when the date is locked in." });
  };

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroEyebrow}>Southern Adventist University</div>
            <h1 className={styles.heroTitle}>
              Business,
              <br />
              but fun
            </h1>
            <p className={styles.heroBody}>
              We run the networking nights, the interview prep, and the one black-tie dinner on campus served out of
              a Taco Bell bag. Everyone&apos;s welcome — majors optional.
            </p>
            <div className={styles.heroCtas}>
              <Button as="a" href="/join" variant="secondary" size="lg">
                Become a member
              </Button>
              <Button as="a" href="/events" variant="inverse" size="lg" iconAfter="arrow-right">
                See what&apos;s coming up
              </Button>
            </div>
          </div>
          <div className={styles.signatureCard}>
            <div className={styles.signatureEyebrow}>Signature event · Date TBA</div>
            <div className={styles.signatureTitle}>
              Taco Bell
              <br />
              Black Tie
            </div>
            <p className={styles.signatureBody}>Formalwear. Fast food. Free for members.</p>
            <Button variant="outline" onClick={() => setRsvpOpen(true)}>
              Get notified
            </Button>
          </div>
        </div>
      </section>

      <Section eyebrow="What we do" title="Three things, done well">
        <p className={styles.introText}>
          We exist to help students grow a network, make memories with friends, and walk into a career ready.
          Everything we run comes back to one of those.
        </p>
        <div className={styles.pillarGrid}>
          {PILLARS.map((p) => (
            <Card key={p.title}>
              <span className={styles.pillarIcon}>
                <Icon name={p.icon} size={22} />
              </span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarBody}>{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Calendar" title="What we're planning" className={styles.planningSection} style={{ paddingTop: 64 }}>
        <div className={styles.planningGrid}>
          {PLANNED_EVENTS.map((e) => (
            <Card key={e.title}>
              <Badge tone={e.tone ?? "neutral"}>{e.when}</Badge>
              <h3 className={styles.planningTitle}>{e.title}</h3>
              <p className={styles.planningBody}>{e.body}</p>
            </Card>
          ))}
        </div>
        <div className={styles.planningFooter}>
          <Button as="a" href="/events" variant="outline" iconAfter="arrow-right">
            Full calendar
          </Button>
          <span className={styles.planningNote}>
            Most events are in the Ruth McKee School of Business. Dates go up as soon as the officers lock them in.
          </span>
        </div>
      </Section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {STATS.map(([n, l]) => (
            <div key={l} className={styles.stat}>
              <div className={styles.statNumber}>{n}</div>
              <div className={styles.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaBanner}>
          <div>
            <h2 className={styles.ctaTitle}>Dues are $10 for the year</h2>
            <p className={styles.ctaBody}>
              Every event, free headshots, mock interviews, and a free seat at the member dinners.
            </p>
          </div>
          <Button as="a" href="/join" variant="secondary" size="lg">
            Sign me up
          </Button>
        </div>
      </section>

      <Dialog
        open={rsvpOpen}
        title="Save your spot?"
        onClose={() => setRsvpOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setRsvpOpen(false)}>
              Never mind
            </Button>
            <Button onClick={confirmRsvp}>RSVP</Button>
          </>
        }
      >
        We&apos;ll text you the details for Taco Bell Black Tie as soon as the date is locked in.
      </Dialog>

      <ToastViewport toast={toast} onClose={hide} />
    </div>
  );
}
