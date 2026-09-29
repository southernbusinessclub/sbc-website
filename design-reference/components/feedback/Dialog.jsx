import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open = true, title, children, footer, onClose, width = 480, style }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-6)', background: 'rgba(34,32,30,.45)', backdropFilter: 'blur(2px)' }} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{ width: '100%', maxWidth: width, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', border: 'var(--border-width) solid var(--border-hairline)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', ...style }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: 'var(--space-6) var(--space-6) var(--space-3)' }}>
          <h3 style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 27, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--text-heading)', margin: 0 }}>{title}</h3>
          {onClose ? <IconButton icon="x" label="Close" variant="ghost" size="sm" onClick={onClose} /> : null}
        </div>
        <div style={{ padding: '0 var(--space-6) var(--space-6)', color: 'var(--text-body)', fontSize: 15 }}>{children}</div>
        {footer ? <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)', padding: 'var(--space-4) var(--space-6)', background: 'var(--surface-sunken)' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
