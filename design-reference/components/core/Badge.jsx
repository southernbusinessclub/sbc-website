import React from 'react';
import { Icon } from './Icon.jsx';

const tones = {
  brand: { background: 'var(--surface-brand-soft)', color: 'var(--green-700)' },
  accent: { background: 'var(--surface-accent-soft)', color: 'var(--yellow-700)' },
  success: { background: 'var(--status-success-soft)', color: 'var(--green-600)' },
  warning: { background: 'var(--status-warning-soft)', color: 'var(--yellow-700)' },
  danger: { background: 'var(--status-danger-soft)', color: 'var(--red-600)' },
  neutral: { background: 'var(--paper-2)', color: 'var(--ink-700)' },
  solid: { background: 'var(--ink-900)', color: 'var(--paper)' },
};

export function Badge({ children, tone = 'brand', icon, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, lineHeight: 1,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        padding: '6px 10px', borderRadius: 'var(--radius-sm)',
        ...tones[tone], ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
