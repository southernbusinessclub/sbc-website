import React from 'react';

export function Tabs({ tabs = [], value, onChange, style }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: 'var(--border-width) solid var(--border-hairline)', ...style }}>
      {tabs.map((t) => {
        const id = typeof t === 'string' ? t : t.value;
        const label = typeof t === 'string' ? t : t.label;
        const active = id === value;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(id)}
            style={{
              appearance: 'none', background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14.5,
              color: active ? 'var(--text-heading)' : 'var(--text-muted)',
              padding: '0 0 12px', marginBottom: -1.5,
              borderBottom: '3px solid ' + (active ? 'var(--brand-primary)' : 'transparent'),
              transition: 'color var(--dur-fast) var(--ease-standard)',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
