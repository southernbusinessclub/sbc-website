import * as React from 'react';

/**
 * Primary action control.
 * @startingPoint section="Core" subtitle="Buttons in every variant and size" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  icon?: string;
  /** Lucide icon name rendered after the label. */
  iconAfter?: string;
  full?: boolean;
  disabled?: boolean;
  /** Render as another element, e.g. "a". */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
