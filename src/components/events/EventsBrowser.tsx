"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button, Card, Dialog, EventCard, Tabs, Tag } from "@/components/ui";
import { isEventUpcoming } from "@/lib/event-dates";
import { rsvpToEvent } from "@/app/events/rsvp-action";
import { ToastViewport } from "@/components/site/ToastViewport";
import { useToast } from "@/lib/useToast";
import styles from "@/app/events/events.module.css";

export interface DisplayEvent {
  id: string;
  title: string;
  date: { month: string; day: string | number };
  time: string;
  location: string;
  description?: string;
  category: string;
  topic: string;
  tone?: "brand" | "accent";
  poster?: boolean;
  /** Raw "YYYY-MM-DD", or null for a TBA event. */
  dateIso: string | null;
  /** Raw free-text admin time field. */
  timeRaw: string | null;
}

const TOPICS = ["All", "Networking", "Workshops", "Worship", "Service", "Traditions"];

export function EventsBrowser({
  upcoming,
  past,
  memberId,
  sidebar,
}: {
  upcoming: DisplayEvent[];
  past: DisplayEvent[];
  memberId: string | null;
  sidebar: ReactNode;
}) {
  const [tab, setTab] = useState("Upcoming");
  const [topic, setTopic] = useState("All");
  const [rsvpEvent, setRsvpEvent] = useState<DisplayEvent | null>(null);
  const [needsAccount, setNeedsAccount] = useState(false);
  const [busy, setBusy] = useState(false);
  const { toast, show, hide } = useToast();

  const source = tab === "Upcoming" ? upcoming : past;
  const list = topic === "All" ? source : source.filter((e) => e.topic === topic);

  const openRsvp = (e: DisplayEvent) => {
    if (!memberId) {
      setNeedsAccount(true);
      return;
    }
    setRsvpEvent(e);
  };

  const confirmRsvp = async () => {
    if (!rsvpEvent) return;
    setBusy(true);
    const result = await rsvpToEvent(rsvpEvent.id);
    setBusy(false);
    setRsvpEvent(null);
    if (result.error) {
      show({ tone: "danger", title: "Couldn't save your RSVP", message: result.error });
      return;
    }
    show({ title: "You are on the list", message: "We will text you when the date is locked in." });
  };

  return (
    <>
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
              key={e.id}
              id={e.id}
              title={e.title}
              date={e.date}
              time={e.time}
              location={e.location}
              description={e.description}
              category={e.category}
              tone={e.tone}
              poster={e.poster}
              onRsvp={tab === "Upcoming" ? () => openRsvp(e) : undefined}
              dateIso={isEventUpcoming(e.dateIso) ? e.dateIso : null}
              timeRaw={e.timeRaw}
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
        {sidebar}
      </div>

      <Dialog
        open={rsvpEvent !== null}
        title="Save your spot?"
        onClose={() => setRsvpEvent(null)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setRsvpEvent(null)}>
              Never mind
            </Button>
            <Button onClick={confirmRsvp} disabled={busy}>
              {busy ? "Saving…" : "RSVP"}
            </Button>
          </>
        }
      >
        {rsvpEvent ? <>We&apos;ll text you a reminder before {rsvpEvent.title}.</> : null}
      </Dialog>

      <Dialog
        open={needsAccount}
        title="Log in to RSVP"
        onClose={() => setNeedsAccount(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setNeedsAccount(false)}>
              Never mind
            </Button>
            <Button as="a" href="/join" onClick={() => setNeedsAccount(false)}>
              Join the club
            </Button>
          </>
        }
      >
        You need a member account to RSVP. <Link href="/login">Log in</Link> if you&apos;re already a member, or
        join to get one.
      </Dialog>

      <ToastViewport toast={toast} onClose={hide} />
    </>
  );
}
