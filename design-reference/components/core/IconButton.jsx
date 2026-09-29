import React from 'react';
import { Icon } from './Icon.jsx';

const sizeMap = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, label, variant = 'outline', size = 'md', disabled, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = sizeMap[size];
  const looks = {
    solid: { background: 'var(--brand-primary)', color: 'var(--text-on-brand)', borderColor: 'transparent' },
    outline: { background: 'var(--surface-card)', color: 'var(--text-heading)', borderColor: 'var(--border-hairline)' },
    ghost: { background: 'transparent', color: 'var(--text-body)', borderColor: 'transparent' },
  }[variant];
  const hoverLook = {
    solid: { background: 'var(--brand-primary-hover)' },
    outline: { borderColor: 'var(--border-strong)' },
    ghost: { background: 'var(--paper-2)' },
  }[variant];
  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: box, height: box, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: 'var(--border-width) solid transparent', borderRadius: 'var(--radius-control)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
        ...looks, ...(hover && !disabled ? hoverLook : null), ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 22 : 19} />
    </button>
  );
}
