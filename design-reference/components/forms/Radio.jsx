import React from 'react';

export function Radio({ label, description, checked, onChange, name, value, disabled, id, style }) {
  const inputId = id || React.useId();
  return (
    <label htmlFor={inputId} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: description ? 'flex-start' : 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input id={inputId} type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ flex: '0 0 auto', width: 20, height: 20, marginTop: description ? 2 : 0, borderRadius: '50%', border: 'var(--border-width) solid ' + (checked ? 'var(--green-500)' : 'var(--ink-200)'), background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color var(--dur-fast) var(--ease-standard)' }}>
        {checked ? <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--brand-primary)' }} /> : null}
      </span>
      <span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-heading)' }}>{label}</span>
        {description ? <span style={{ display: 'block', fontSize: 13.5, color: 'var(--text-muted)', marginTop: 2 }}>{description}</span> : null}
      </span>
    </label>
  );
}
