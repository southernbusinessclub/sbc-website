"use client";

import { useState } from "react";
import { Badge, Button, Card, Textarea } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";
import { Stars } from "./Stars";
import styles from "./AttendedEvents.module.css";

export interface AttendedEvent {
  id: string;
  title: string;
  category: string | null;
  is_signature: boolean;
  when: string;
}

export interface FeedbackState {
  rating: number;
  comment: string;
}

export function AttendedEvents({
  memberId,
  events,
  initialFeedback,
}: {
  memberId: string;
  events: AttendedEvent[];
  initialFeedback: Record<string, FeedbackState>;
}) {
  const [feedback, setFeedback] = useState<Record<string, FeedbackState>>(initialFeedback);
  const [open, setOpen] = useState<string | null>(null);
  const [draftNote, setDraftNote] = useState("");
  const [saving, setSaving] = useState(false);

  const upsert = async (eventId: string, rating: number, comment: string | null) => {
    const supabase = createClient();
    await supabase
      .from("event_feedback")
      .upsert({ event_id: eventId, member_id: memberId, rating, comment }, { onConflict: "event_id,member_id" });
  };

  const rate = async (eventId: string, n: number) => {
    const current = feedback[eventId];
    setFeedback({ ...feedback, [eventId]: { rating: n, comment: current?.comment ?? "" } });
    await upsert(eventId, n, current?.comment ?? null);
  };

  const startNote = (eventId: string) => {
    setDraftNote(feedback[eventId]?.comment ?? "");
    setOpen(eventId);
  };

  const saveNote = async (eventId: string) => {
    setSaving(true);
    const rating = feedback[eventId]?.rating ?? 0;
    await upsert(eventId, rating, draftNote || null);
    setFeedback({ ...feedback, [eventId]: { rating, comment: draftNote } });
    setSaving(false);
    setOpen(null);
  };

  if (events.length === 0) {
    return (
      <Card variant="sunken" className={styles.emptyRow}>
        <p className={styles.emptyText}>You haven&apos;t been to one yet. Check the calendar for what&apos;s next.</p>
        <Button as="a" href="/events" variant="outline" size="sm" iconAfter="arrow-right">
          See the calendar
        </Button>
      </Card>
    );
  }

  return (
    <div className={styles.list}>
      {events.map((e) => {
        const isOpen = open === e.id;
        const f = feedback[e.id];
        return (
          <Card key={e.id} variant={e.is_signature ? "poster" : "plain"}>
            <div className={styles.row}>
              <div className={styles.rowMeta}>
                {e.category ? <Badge tone={e.is_signature ? "accent" : "neutral"}>{e.category}</Badge> : null}
                <h3 className={styles.rowTitle}>{e.title}</h3>
                <div className={styles.rowWhen}>{e.when} · Ruth McKee School of Business</div>
              </div>
              <div className={styles.rowRight}>
                <Stars value={f?.rating ?? 0} onChange={(n) => rate(e.id, n)} />
                <Button
                  variant="ghost"
                  size="sm"
                  iconAfter={isOpen ? "chevron-up" : "chevron-down"}
                  onClick={() => (isOpen ? setOpen(null) : startNote(e.id))}
                >
                  {f?.comment ? "Edit note" : "Leave a note"}
                </Button>
              </div>
            </div>
            {isOpen ? (
              <div className={styles.noteBlock}>
                <Textarea
                  label="What worked, what didn't?"
                  rows={3}
                  value={draftNote}
                  onChange={(ev) => setDraftNote(ev.target.value)}
                  hint="Officers only. Your name is attached."
                />
                <div className={styles.noteActions}>
                  <Button size="sm" disabled={saving} onClick={() => saveNote(e.id)}>
                    {saving ? "Saving…" : "Save feedback"}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setOpen(null)}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : f?.comment ? (
              <p className={styles.savedNote}>&ldquo;{f.comment}&rdquo;</p>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
