import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral' | 'solid';
  /** Lucide icon name shown before the label. */
  icon?: string;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
