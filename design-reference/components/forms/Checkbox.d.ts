import * as React from 'react';

export interface CheckboxProps {
  label?: React.ReactNode;
  /** Secondary line under the label. */
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
