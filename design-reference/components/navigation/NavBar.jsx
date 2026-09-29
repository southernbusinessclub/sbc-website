import React from 'react';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

function NavLink({ link, active, onNavigate, inverse }) {
  const [open, setOpen] = React.useState(false);
  const id = typeof link === 'string' ? link : link.value;
  const label = typeof link === 'string' ? link : link.label;
  const children = (typeof link === 'object' && link.children) || null;
  const childIds = children ? children.map((c) => c.value || c) : [];
  const isActive = id === active || childIds.indexOf(active) > -1;
  const base = {
    appearance: 'none', background: 'none', border: 'none', cursor: 'pointer',
    fontFamily: 'var(--font-body)', fontWeight: isActive ? 700 : 500, fontSize: 14.5,
    color: inverse ? 'var(--white)' : isActive ? 'var(--text-heading)' : 'var(--text-body)',
    padding: '4px 0', borderBottom: '2px solid ' + (isActive ? (inverse ? 'var(--yellow-500)' : 'var(--brand-primary)') : 'transparent'),
    display: 'inline-flex', alignItems: 'center', gap: 4,
  };
  if (!children) {
    return <button onClick={() => onNavigate && onNavigate(id)} style={base}>{label}</button>;
  }
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => onNavigate && onNavigate(id)} aria-haspopup="menu" aria-expanded={open} style={base}>
        {label}
        <Icon name="chevron-down" size={15} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast) var(--ease-standard)' }} />
      </button>
      {open ? (
        <div role="menu" style={{ position: 'absolute', top: '100%', left: -12, paddingTop: 10, zIndex: 40 }}>
          <div style={{ minWidth: 176, background: 'var(--surface-card)', border: 'var(--border-width) solid var(--border-hairline)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: 6, display: 'flex', flexDirection: 'column' }}>
            {children.map((c) => {
              const cid = c.value || c;
              const clabel = c.label || c;
              return (
                <button key={cid} role="menuitem" onClick={() => { setOpen(false); onNavigate && onNavigate(cid); }}
                  style={{ appearance: 'none', background: cid === active ? 'var(--surface-brand-soft)' : 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '9px 11px', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', fontWeight: cid === active ? 700 : 500, fontSize: 14.5, color: 'var(--text-heading)' }}>
                  {clabel}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function NavBar({ brand = 'Southern Business Club', links = [], active, onNavigate, action, inverse = false, style }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', padding: '18px var(--space-8)', background: inverse ? 'var(--surface-brand)' : 'var(--surface-page)', borderBottom: inverse ? 'none' : 'var(--border-width) solid var(--border-hairline)', ...style }}>
      <span
        onClick={() => onNavigate && onNavigate(links[0] && (links[0].value || links[0]))}
        style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 21, letterSpacing: '0.01em', textTransform: 'uppercase', color: inverse ? 'var(--white)' : 'var(--text-heading)', cursor: 'pointer', whiteSpace: 'nowrap' }}
      >
        {brand}
      </span>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', marginLeft: 'auto' }}>
        {links.map((l) => <NavLink key={typeof l === 'string' ? l : l.value} link={l} active={active} onNavigate={onNavigate} inverse={inverse} />)}
      </nav>
      {action ? (typeof action === 'string'
        ? <Button variant={inverse ? 'inverse' : 'primary'} size="sm">{action}</Button>
        : action) : null}
    </header>
  );
}
