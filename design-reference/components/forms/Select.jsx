import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, hint, options = [], id, style, wrapStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...wrapStyle }}>
      {label ? <label htmlFor={inputId} style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13.5, color: 'var(--text-heading)' }}>{label}</label> : null}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ appearance: 'none', width: '100%', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-heading)', background: 'var(--surface-card)', border: 'var(--border-width) solid ' + (focus ? 'var(--border-brand)' : 'var(--border-hairline)'), borderRadius: 'var(--radius-control)', padding: '11px 38px 11px 12px', outline: 'none', cursor: 'pointer', ...style }}
          {...rest}
        >
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 12, color: 'var(--text-muted)', pointerEvents: 'none', display: 'inline-flex' }}><Icon name="chevron-down" size={17} /></span>
      </div>
      {hint ? <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{hint}</span> : null}
    </div>
  );
}
