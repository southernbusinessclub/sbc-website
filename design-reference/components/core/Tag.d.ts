import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  /** Renders a dismiss affordance. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
