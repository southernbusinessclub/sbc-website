import React from 'react';

export function Card({ children, variant = 'plain', padding = 'var(--space-6)', accent, style, ...rest }) {
  const looks = {
    plain: { background: 'var(--surface-card)', border: 'var(--border-width) solid var(--border-hairline)', boxShadow: 'var(--shadow-sm)' },
    poster: { background: 'var(--surface-card)', border: 'var(--border-width-strong) solid var(--border-strong)', boxShadow: 'var(--shadow-offset)' },
    sunken: { background: 'var(--surface-sunken)', border: 'var(--border-width) solid transparent', boxShadow: 'none' },
    brand: { background: 'var(--surface-brand)', border: 'none', color: 'var(--text-on-brand)', boxShadow: 'none' },
    accent: { background: 'var(--surface-accent)', border: 'none', color: 'var(--text-on-accent)', boxShadow: 'none' },
  }[variant];
  return (
    <div
      style={{
        borderRadius: 'var(--radius-card)', padding,
        ...looks,
        ...(accent ? { borderTop: '6px solid ' + accent } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
