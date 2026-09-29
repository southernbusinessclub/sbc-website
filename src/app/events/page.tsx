"use client";

import { useState } from "react";
import { Badge, Button, Card, EventCard, Icon, Dialog, Tabs, Tag } from "@/components/ui";
import { ToastViewport } from "@/components/site/ToastViewport";
import { useToast } from "@/lib/useToast";
import styles from "./events.module.css";

interface ClubEvent {
  title: string;
  date: { month: string; day: string | number };
  time: string;
  location: string;
  description?: string;
  category: string;
  topic: string;
  tone?: "brand" | "accent";
  poster?: boolean;
}

const UPCOMING: ClubEvent[] = [
  {
    title: "Meet your officers",
    date: { month: "Sep", day: 24 },
    time: "Thursday, 5:30 PM",
    location: "Ruth McKee School of Business",
    description: "Pop in, say hi, grab a snack. No program, no commitment.",
    category: "Social",
    topic: "Networking",
  },
  {
    title: "Vespers at the Schnells",
    date: { month: "Oct", day: 2 },
    time: "5:30 PM",
    location: "Prof. Ben Schnell's house · 4461 Suhrie Road, Ooltewah, TN 37363",
    description: "Rice bowls, yard games, and worship from Professor Bellino. Worship credit given.",
    category: "Vespers",
    topic: "Worship",
  },
  {
    title: "Taco Bell Black Tie",
    date: { month: "Date", day: "TBA" },
    time: "Time TBA",
    location: "Ruth McKee School of Business",
    category: "Signature",
    topic: "Traditions",
    tone: "accent",
    poster: true,
  },
  {
    title: "Headshot night",
    date: { month: "Date", day: "TBA" },
    time: "Time TBA",
    location: "Ruth McKee School of Business",
    category: "Workshop",
    topic: "Workshops",
  },
  {
    title: "Mock interview night",
    date: { month: "Date", day: "TBA" },
    time: "Time TBA",
    location: "Ruth McKee School of Business",
    category: "Workshop",
    topic: "Workshops",
  },
  {
    title: "Alumni mixer",
    date: { month: "Date", day: "TBA" },
    time: "Time TBA",
    location: "Ruth McKee School of Business",
    category: "Networking",
    topic: "Networking",
  },
  {
    title: "Service project",
    date: { month: "Date", day: "TBA" },
    time: "Time TBA",
    location: "Off campus",
    category: "Service",
    topic: "Service",
  },
];

const PAST: ClubEvent[] = [];

const TOPICS = ["All", "Networking", "Workshops", "Worship", "Service", "Traditions"];

export default function EventsPage() {
  const [tab, setTab] = useState("Upcoming");
  const [topic, setTopic] = useState("All");
  const [rsvpEvent, setRsvpEvent] = useState<ClubEvent | null>(null);
  const { toast, show, hide } = useToast();

  const source = tab === "Upcoming" ? UPCOMING : PAST;
  const list = topic === "All" ? source : source.filter((e) => e.topic === topic);

  const confirmRsvp = () => {
    setRsvpEvent(null);
    show({ title: "You are on the list", message: "We will text you when the date is locked in." });
  };

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
          <Tabs tabs={["Upcoming", "Past"]} value={tab} onChange={setTab} className={styles.tabs} />
          <div className={styles.tagRow}>
            {TOPICS.map((t) => (
              <Tag key={t} selected={topic === t} onClick={() => setTopic(t)}>
                {t}
              </Tag>
            ))}
          </div>
          <div className={styles.layout}>
            <div className={styles.list}>
              {list.map((e) => (
                <EventCard
                  key={e.title}
                  title={e.title}
                  date={e.date}
                  time={e.time}
                  location={e.location}
                  description={e.description}
                  category={e.category}
                  tone={e.tone}
                  poster={e.poster}
                  onRsvp={tab === "Upcoming" ? () => setRsvpEvent(e) : undefined}
                />
              ))}
              {list.length === 0 ? (
                <Card variant="sunken">
                  <p style={{ margin: 0, color: "var(--text-muted)" }}>
                    Nothing here yet — check back after the next officer meeting.
                  </p>
                </Card>
              ) : null}
            </div>
            <div className={styles.sidebar}>
              <Card variant="plain">
                <Badge tone="solid">Members only</Badge>
                <h3 className={styles.sidebarTitle}>Officer hours</h3>
                <p className={styles.sidebarBody}>Bring a resume, or just questions. Times posted once the semester settles.</p>
                <Button variant="ghost" size="sm" iconAfter="arrow-right">
                  Book a slot
                </Button>
              </Card>
              <Card variant="accent">
                <div className="sbc-eyebrow">Reminders</div>
                <h3 className={styles.sidebarTitle}>Get the text list</h3>
                <p className={styles.sidebarBody} style={{ margin: "0 0 14px" }}>
                  One message the morning of each event. Nothing else, ever.
                </p>
                <Button variant="outline" size="sm">
                  Add my number
                </Button>
              </Card>
              <div className={styles.sidebarNote}>
                <Icon name="map-pin" size={16} /> Most events are in the Ruth McKee School of Business.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={rsvpEvent !== null}
        title="Save your spot?"
        onClose={() => setRsvpEvent(null)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setRsvpEvent(null)}>
              Never mind
            </Button>
            <Button onClick={confirmRsvp}>RSVP</Button>
          </>
        }
      >
        {rsvpEvent ? <>We&apos;ll text you a reminder before {rsvpEvent.title}.</> : null}
      </Dialog>

      <ToastViewport toast={toast} onClose={hide} />
    </div>
  );
}
