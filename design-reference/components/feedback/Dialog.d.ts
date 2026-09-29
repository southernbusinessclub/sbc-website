import * as React from 'react';

export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Action row, rendered on a sunken bar. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Max width in px. Default 480. */
  width?: number;
  style?: React.CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element | null;
