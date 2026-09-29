import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message — also turns the field border red. */
  error?: string;
  /** Lucide icon name shown inside the field. */
  icon?: string;
  wrapStyle?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
