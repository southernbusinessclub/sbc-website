import React from 'react';

export function Textarea({ label, hint, error, id, rows = 4, style, wrapStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--status-danger)' : focus ? 'var(--border-brand)' : 'var(--border-hairline)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...wrapStyle }}>
      {label ? <label htmlFor={inputId} style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13.5, color: 'var(--text-heading)' }}>{label}</label> : null}
      <textarea
        id={inputId}
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--text-heading)', background: 'var(--surface-card)', border: 'var(--border-width) solid ' + borderColor, borderRadius: 'var(--radius-control)', padding: '11px 12px', outline: 'none', resize: 'vertical', boxShadow: focus ? '0 0 0 3px var(--green-100)' : 'none', ...style }}
        {...rest}
      />
      {error ? <span style={{ fontSize: 13, color: 'var(--red-600)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{hint}</span> : null}
    </div>
  );
}
