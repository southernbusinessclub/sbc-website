import * as React from 'react';

/**
 * Surface container.
 * @startingPoint section="Core" subtitle="Card surfaces: plain, poster, brand" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'plain' | 'poster' | 'sunken' | 'brand' | 'accent';
  /** CSS padding value. Default var(--space-6). */
  padding?: string;
  /** Colour for a 6px top rule (use sparingly, for event categories). */
  accent?: string;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
