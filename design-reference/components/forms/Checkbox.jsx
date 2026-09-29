import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, checked, onChange, disabled, id, style }) {
  const inputId = id || React.useId();
  return (
    <label htmlFor={inputId} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: description ? 'flex-start' : 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input id={inputId} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ flex: '0 0 auto', width: 20, height: 20, marginTop: description ? 2 : 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-sm)', border: 'var(--border-width) solid ' + (checked ? 'var(--green-500)' : 'var(--ink-200)'), background: checked ? 'var(--brand-primary)' : 'var(--surface-card)', color: 'var(--white)', transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)' }}>
        {checked ? <Icon name="check" size={14} /> : null}
      </span>
      <span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-heading)' }}>{label}</span>
        {description ? <span style={{ display: 'block', fontSize: 13.5, color: 'var(--text-muted)', marginTop: 2 }}>{description}</span> : null}
      </span>
    </label>
  );
}
