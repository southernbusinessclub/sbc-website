import React from 'react';

export function Switch({ label, checked, onChange, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ flex: 'none', width: 44, height: 26, borderRadius: 'var(--radius-pill)', background: checked ? 'var(--brand-primary)' : 'var(--paper-3)', padding: 3, display: 'inline-flex', transition: 'background var(--dur-base) var(--ease-standard)' }}>
        <span style={{ flex: 'none', width: 20, height: 20, borderRadius: '50%', background: 'var(--white)', boxShadow: 'var(--shadow-sm)', transform: checked ? 'translateX(18px)' : 'translateX(0)', transition: 'transform var(--dur-base) var(--ease-spring)' }} />
      </span>
      {label ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-heading)' }}>{label}</span> : null}
    </label>
  );
}
