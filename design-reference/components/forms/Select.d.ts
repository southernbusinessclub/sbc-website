import * as React from 'react';

export interface SelectOption { value: string; label: string }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  /** Strings, or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  wrapStyle?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
