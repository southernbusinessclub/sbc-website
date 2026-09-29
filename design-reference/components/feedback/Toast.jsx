import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const tones = {
  success: { icon: 'check-circle', bar: 'var(--status-success)' },
  info: { icon: 'info', bar: 'var(--status-info)' },
  warning: { icon: 'alert-triangle', bar: 'var(--status-warning)' },
  danger: { icon: 'alert-circle', bar: 'var(--status-danger)' },
};

export function Toast({ tone = 'success', title, message, onClose, style }) {
  const t = tones[tone];
  return (
    <div role="status" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', minWidth: 280, maxWidth: 420, background: 'var(--surface-inverse)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)', boxShadow: 'var(--shadow-lg)', borderLeft: '4px solid ' + t.bar, ...style }}>
      <span style={{ color: t.bar, display: 'inline-flex', marginTop: 1 }}><Icon name={t.icon} size={19} /></span>
      <div style={{ flex: 1 }}>
        {title ? <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14.5 }}>{title}</div> : null}
        {message ? <div style={{ fontSize: 14, opacity: 0.85, marginTop: 2 }}>{message}</div> : null}
      </div>
      {onClose ? <IconButton icon="x" label="Dismiss" variant="ghost" size="sm" onClick={onClose} style={{ color: 'var(--text-inverse)' }} /> : null}
    </div>
  );
}
