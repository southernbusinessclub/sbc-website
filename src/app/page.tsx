import { Badge, Button, Card, Icon, type IconName } from "@/components/ui";
import { HeroRsvp } from "@/components/home/HeroRsvp";
import { Section } from "@/components/site/Section";
import { getPublishedEvents } from "@/lib/get-published-events";
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

const STATS: Array<[string, string]> = [
  ["40+", "members"],
  ["8", "officers"],
  ["$10", "for the whole year"],
  ["1", "black-tie taco night"],
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

function formatWhen(eventDate: string | null): string {
  if (!eventDate) return "Date TBA";
  const d = new Date(`${eventDate}T00:00:00`);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

export default async function HomePage() {
  const events = await getPublishedEvents();
  const planned = events.slice(0, 4);

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
          <HeroRsvp />
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
        {planned.length === 0 ? (
          <Card variant="sunken">
            <p style={{ margin: 0, color: "var(--text-muted)" }}>
              Nothing published yet — check back after the next officer meeting.
            </p>
          </Card>
        ) : (
          <div className={styles.planningGrid}>
            {planned.map((e) => (
              <Card key={e.id}>
                <Badge tone={e.eventDate ? "accent" : "neutral"}>{formatWhen(e.eventDate)}</Badge>
                <h3 className={styles.planningTitle}>{e.title}</h3>
                <p className={styles.planningBody}>{e.description}</p>
              </Card>
            ))}
          </div>
        )}
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
    </div>
  );
}
