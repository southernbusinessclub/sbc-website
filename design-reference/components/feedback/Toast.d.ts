import * as React from 'react';

export interface ToastProps {
  tone?: 'success' | 'info' | 'warning' | 'danger';
  title?: React.ReactNode;
  message?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;
