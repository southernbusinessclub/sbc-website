import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, selected = false, onRemove, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13.5, lineHeight: 1,
        padding: '7px 13px', borderRadius: 'var(--radius-pill)',
        border: 'var(--border-width) solid ' + (selected ? 'var(--green-500)' : 'var(--border-hairline)'),
        background: selected ? 'var(--surface-brand-soft)' : hover && interactive ? 'var(--paper-2)' : 'var(--surface-card)',
        color: selected ? 'var(--green-700)' : 'var(--text-body)',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove ? (
        <span onClick={(e) => { e.stopPropagation(); onRemove(e); }} style={{ display: 'inline-flex', cursor: 'pointer', opacity: 0.6 }}>
          <Icon name="x" size={13} />
        </span>
      ) : null}
    </span>
  );
}
