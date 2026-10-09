import { Badge, Button, Card, Icon } from "@/components/ui";
import { EventsBrowser, type DisplayEvent } from "@/components/events/EventsBrowser";
import { getCurrentMember } from "@/lib/get-current-member";
import { getPublishedEvents } from "@/lib/get-published-events";
import styles from "./events.module.css";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

function toDisplayEvent(e: Awaited<ReturnType<typeof getPublishedEvents>>[number]): DisplayEvent {
  const d = e.eventDate ? new Date(`${e.eventDate}T00:00:00`) : null;
  return {
    id: e.id,
    title: e.title,
    date: d ? { month: MONTHS[d.getMonth()], day: d.getDate() } : { month: "Date", day: "TBA" },
    time: e.eventTime ?? "Time TBA",
    location: e.location ?? "",
    description: e.description ?? undefined,
    category: e.category ?? "",
    topic: e.topic ?? "",
    tone: e.isSignature ? "accent" : undefined,
    poster: e.isSignature,
    dateIso: e.eventDate,
    timeRaw: e.eventTime,
  };
}

export default async function EventsPage() {
  const [events, member] = await Promise.all([getPublishedEvents(), getCurrentMember()]);

  const todayIso = new Date().toISOString().slice(0, 10);
  const upcoming: DisplayEvent[] = [];
  const past: DisplayEvent[] = [];
  for (const e of events) {
    (e.eventDate && e.eventDate < todayIso ? past : upcoming).push(toDisplayEvent(e));
  }

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className="sbc-eyebrow">2026–27 school year</div>
          <h1 className={styles.title}>Events</h1>
          <p className={styles.lede}>
            Members are invited to everything we run. Dates are not locked in yet — sign up and we&apos;ll text you
            when they are.
          </p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.mainInner}>
          <EventsBrowser
            upcoming={upcoming}
            past={past}
            memberId={member?.id ?? null}
            sidebar={
              <div className={styles.sidebar}>
                <Card variant="plain">
                  <Badge tone="solid">Members only</Badge>
                  <h3 className={styles.sidebarTitle}>Officer hours</h3>
                  <p className={styles.sidebarBody}>
                    Bring a resume, or just questions. Times posted once the semester settles.
                  </p>
                  <Button variant="ghost" size="sm" disabled aria-disabled="true">
                    Coming soon
                  </Button>
                </Card>
                <Card variant="accent">
                  <div className="sbc-eyebrow">Reminders</div>
                  <h3 className={styles.sidebarTitle}>Get the text list</h3>
                  <p className={styles.sidebarBody} style={{ margin: "0 0 14px" }}>
                    One message the morning of each event. Nothing else, ever.
                  </p>
                  <Button variant="outline" size="sm" disabled aria-disabled="true">
                    Coming soon
                  </Button>
                </Card>
                <div className={styles.sidebarNote}>
                  <Icon name="map-pin" size={16} /> Most events are in the Ruth McKee School of Business.
                </div>
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
}
