import * as React from 'react';

/**
 * Event listing row with a date chip.
 * @startingPoint section="Club" subtitle="Event listing row with date chip" viewport="700x180"
 */
export interface EventCardProps {
  title: string;
  /** Date chip contents. */
  date: { month: string; day: string | number };
  time?: string;
  location?: string;
  /** One line of detail under the time and place. */
  description?: string;
  /** Short category label, e.g. "Workshop". */
  category?: string;
  tone?: 'brand' | 'accent';
  /** Use the poster surface (ink border + offset shadow) for signature events. */
  poster?: boolean;
  onRsvp?: () => void;
  style?: React.CSSProperties;
}
export function EventCard(props: EventCardProps): JSX.Element;
