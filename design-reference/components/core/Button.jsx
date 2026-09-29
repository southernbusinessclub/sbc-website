import React from 'react';
import { Icon } from './Icon.jsx';

const base = {
  fontFamily: 'var(--font-body)', fontWeight: 700, lineHeight: 1,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
  border: 'var(--border-width) solid transparent', borderRadius: 'var(--radius-control)',
  cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap',
  transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
};

const sizes = {
  sm: { padding: '8px 14px', fontSize: 13.5 },
  md: { padding: '12px 20px', fontSize: 15 },
  lg: { padding: '15px 28px', fontSize: 16.5 },
};

const variants = {
  primary: { background: 'var(--brand-primary)', color: 'var(--text-on-brand)' },
  secondary: { background: 'var(--brand-secondary)', color: 'var(--text-on-accent)' },
  outline: { background: 'transparent', color: 'var(--text-heading)', borderColor: 'var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--text-link)' },
  inverse: { background: 'var(--white)', color: 'var(--green-700)' },
};

const hovers = {
  primary: { background: 'var(--brand-primary-hover)' },
  secondary: { background: 'var(--brand-secondary-hover)' },
  outline: { background: 'var(--ink-900)', color: 'var(--paper)' },
  ghost: { background: 'var(--green-100)' },
  inverse: { background: 'var(--green-100)' },
};

export function Button({
  children, variant = 'primary', size = 'md', icon, iconAfter,
  full = false, disabled = false, as = 'button', style, onClick, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...base, ...sizes[size], ...variants[variant],
        ...(hover && !disabled ? hovers[variant] : null),
        width: full ? '100%' : undefined,
        transform: press && !disabled ? 'translateY(1px)' : 'none',
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={size === 'lg' ? 19 : 17} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={size === 'lg' ? 19 : 17} /> : null}
    </Tag>
  );
}
