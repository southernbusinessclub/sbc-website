import React from 'react';

export function Tooltip({ label, children, placement = 'top', style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
  }[placement];
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <span role="tooltip" style={{ position: 'absolute', ...pos, whiteSpace: 'nowrap', background: 'var(--surface-inverse)', color: 'var(--text-inverse)', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, padding: '6px 9px', borderRadius: 'var(--radius-sm)', opacity: show ? 1 : 0, pointerEvents: 'none', transition: 'opacity var(--dur-fast) var(--ease-standard)', zIndex: 20 }}>
        {label}
      </span>
    </span>
  );
}
