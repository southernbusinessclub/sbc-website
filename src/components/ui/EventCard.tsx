import type { CSSProperties } from "react";
import { cx } from "@/lib/cx";
import { AddToCalendar } from "@/components/events/AddToCalendar";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card } from "./Card";
import { Icon } from "./Icon";
import styles from "./EventCard.module.css";

type Tone = "brand" | "accent";

export interface EventCardProps {
  /** Needed to build a stable calendar UID — omit to skip "Add to calendar". */
  id?: string;
  title: string;
  /** Date chip contents. */
  date: { month: string; day: string | number };
  time?: string;
  location?: string;
  /** One line of detail under the time and place. */
  description?: string;
  /** Short category label, e.g. "Workshop". */
  category?: string;
  tone?: Tone;
  /** Use the poster surface (ink border + offset shadow) for signature events. */
  poster?: boolean;
  onRsvp?: () => void;
  style?: CSSProperties;
  /** Raw "YYYY-MM-DD", for calendar export — pass only for upcoming events. */
  dateIso?: string | null;
  /** Raw free-text admin time field, for calendar export. */
  timeRaw?: string | null;
}

export function EventCard({
  id,
  title,
  date,
  time,
  location,
  description,
  category,
  tone = "brand",
  poster = false,
  onRsvp,
  style,
  dateIso,
  timeRaw,
}: EventCardProps) {
  return (
    <Card variant={poster ? "poster" : "plain"} padding="0" className={styles.eventCard} style={style}>
      <div className={styles.row}>
        <div className={cx(styles.dateChip, tone === "accent" ? styles.dateChipAccent : styles.dateChipBrand)}>
          <div className={styles.dateMonth}>{date.month}</div>
          <div className={styles.dateDay}>{date.day}</div>
        </div>
        <div className={styles.body}>
          {category ? <Badge tone={tone === "accent" ? "accent" : "brand"}>{category}</Badge> : null}
          <h3 className={cx(styles.title, category && styles.titleWithBadge)}>{title}</h3>
          <div className={styles.meta}>
            {time ? (
              <span className={styles.metaItem}>
                <Icon name="clock" size={15} />
                {time}
              </span>
            ) : null}
            {location ? (
              <span className={styles.metaItem}>
                <Icon name="map-pin" size={15} />
                {location}
              </span>
            ) : null}
          </div>
          {description ? <p className={styles.description}>{description}</p> : null}
        </div>
        {onRsvp || (id && dateIso) ? (
          <div className={styles.rsvp}>
            {onRsvp ? (
              <Button variant={tone === "accent" ? "secondary" : "outline"} size="sm" onClick={onRsvp}>
                RSVP
              </Button>
            ) : null}
            {id && dateIso ? (
              <AddToCalendar id={id} title={title} dateIso={dateIso} timeRaw={timeRaw ?? null} location={location} description={description} />
            ) : null}
          </div>
        ) : null}
      </div>
    </Card>
  );
}
