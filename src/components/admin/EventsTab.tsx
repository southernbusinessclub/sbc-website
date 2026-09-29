"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button, Card, Icon, Input, Select, Switch, Tag, Textarea } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";
import styles from "./admin.module.css";

export interface EventRow {
  id: string;
  title: string;
  eventDate: string | null;
  eventTime: string | null;
  location: string | null;
  category: string | null;
  published: boolean;
  rsvpCount: number;
}

const CATEGORIES = ["Social", "Workshop", "Vespers", "Service", "Fundraiser", "Signature", "Networking"];

function formatDate(iso: string | null): string {
  if (!iso) return "TBA";
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function EventsTab({
  initialEvents,
  onNotify,
}: {
  initialEvents: EventRow[];
  onNotify: (t: { title: string; message: string }) => void;
}) {
  const [events, setEvents] = useState(initialEvents);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const togglePublished = async (event: EventRow) => {
    const next = !event.published;
    setEvents((list) => list.map((e) => (e.id === event.id ? { ...e, published: next } : e)));
    const supabase = createClient();
    await supabase.from("events").update({ published: next }).eq("id", event.id);
    onNotify({
      title: next ? "Published" : "Unpublished",
      message: `${event.title}${next ? " is live on the calendar." : " is hidden from the calendar."}`,
    });
  };

  const saveDraft = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const supabase = createClient();
    const { data, error: insertError } = await supabase
      .from("events")
      .insert({
        title,
        event_date: date || null,
        event_time: time || null,
        location: location || null,
        category,
        description: description || null,
        published: false,
      })
      .select()
      .single();

    if (insertError || !data) {
      setError(insertError?.message ?? "Something went wrong saving that event.");
      return;
    }

    setEvents((list) => [
      ...list,
      {
        id: data.id,
        title: data.title,
        eventDate: data.event_date,
        eventTime: data.event_time,
        location: data.location,
        category: data.category,
        published: data.published,
        rsvpCount: 0,
      },
    ]);
    setAdding(false);
    setTitle("");
    setDate("");
    setTime("");
    setLocation("");
    setCategory(CATEGORIES[0]);
    setDescription("");
    onNotify({ title: "Event saved as a draft", message: "Publish it when the details are locked in." });
  };

  return (
    <div>
      <div className={styles.toolbarNote}>
        <p style={{ margin: 0 }}>Unpublished events stay hidden from the public calendar until you switch them on.</p>
        <Button onClick={() => setAdding((v) => !v)}>{adding ? "Cancel" : "Add an event"}</Button>
      </div>

      {adding ? (
        <Card padding="var(--space-6)" className={styles.eventForm}>
          <h3 className={styles.eventFormTitle}>New event</h3>
          <form onSubmit={saveDraft}>
            <div className={styles.eventFormGrid3}>
              <Input label="Title" placeholder="Resume workshop" required value={title} onChange={(e) => setTitle(e.target.value)} />
              <Input label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              <Input label="Time" placeholder="5:30 PM" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className={styles.eventFormGrid2}>
              <Input
                label="Location"
                placeholder="Ruth McKee School of Business"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Select label="Category" options={CATEGORIES} value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <Textarea
              label="Description"
              placeholder="One or two sentences. This shows on the event card."
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className={styles.eventFormActions}>
              <Button type="submit">Save as draft</Button>
              <Button type="button" variant="ghost" onClick={() => setAdding(false)}>
                Cancel
              </Button>
            </div>
            {error ? <p className={styles.errorText}>{error}</p> : null}
          </form>
        </Card>
      ) : null}

      <div style={{ overflowX: "auto" }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Event</th>
              <th className={styles.th}>When</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>RSVPs</th>
              <th className={`${styles.th} ${styles.thRight}`}>Published</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => (
              <tr key={e.id}>
                <td className={styles.td}>
                  <div style={{ fontWeight: 700 }}>{e.title}</div>
                  <div className={styles.nameSub}>{e.location}</div>
                </td>
                <td className={`${styles.td} ${styles.tdMuted}`}>
                  {formatDate(e.eventDate)} · {e.eventTime ?? "TBA"}
                </td>
                <td className={styles.td}>{e.category ? <Tag>{e.category}</Tag> : null}</td>
                <td className={styles.td}>
                  <span className={styles.rsvpCell}>
                    <Icon name="users" size={15} />
                    {e.rsvpCount}
                  </span>
                </td>
                <td className={`${styles.td} ${styles.tdRight}`}>
                  <Switch checked={e.published} onChange={() => togglePublished(e)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
