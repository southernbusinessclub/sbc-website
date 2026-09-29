import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, kebab-case (e.g. "calendar-days", "briefcase"). */
  name: string;
  /** Pixel box for the glyph. Default 20. */
  size?: number;
}
export function Icon(props: IconProps): JSX.Element;
