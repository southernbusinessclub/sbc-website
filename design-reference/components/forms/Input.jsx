import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ label, hint, error, icon, id, style, wrapStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--status-danger)' : focus ? 'var(--border-brand)' : 'var(--border-hairline)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...wrapStyle }}>
      {label ? <label htmlFor={inputId} style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13.5, color: 'var(--text-heading)' }}>{label}</label> : null}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', background: 'var(--surface-card)', border: 'var(--border-width) solid ' + borderColor, borderRadius: 'var(--radius-control)', padding: '0 12px', boxShadow: focus ? '0 0 0 3px var(--green-100)' : 'none', transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)' }}>
        {icon ? <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}><Icon name={icon} size={17} /></span> : null}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', font: 'inherit', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-heading)', padding: '11px 0', ...style }}
          {...rest}
        />
      </div>
      {error ? <span style={{ fontSize: 13, color: 'var(--red-600)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{hint}</span> : null}
    </div>
  );
}
