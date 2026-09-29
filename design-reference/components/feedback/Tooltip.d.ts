import * as React from 'react';

export interface TooltipProps {
  label: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tooltip(props: TooltipProps): JSX.Element;
