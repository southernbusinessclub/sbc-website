"use client";
import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Button } from "./Button";
import { Icon } from "./Icon";
import styles from "./NavBar.module.css";

export interface NavLinkItem {
  value: string;
  label: string;
  children?: Array<string | { value: string; label: string }>;
}

type Link = string | NavLinkItem;

function linkId(link: Link): string {
  return typeof link === "string" ? link : link.value;
}

function linkLabel(link: Link): string {
  return typeof link === "string" ? link : link.label;
}

function NavLink({
  link,
  active,
  onNavigate,
  inverse,
}: {
  link: Link;
  active?: string;
  onNavigate?: (value: string) => void;
  inverse?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const id = linkId(link);
  const label = linkLabel(link);
  const children = (typeof link === "object" && link.children) || null;
  const childIds = children ? children.map((c) => (typeof c === "string" ? c : c.value)) : [];
  const isActive = id === active || childIds.includes(active ?? "");

  const linkClass = cx(
    styles.navLink,
    inverse && styles.navLinkInverse,
    isActive && styles.navLinkActive,
  );

  if (!children) {
    return (
      <button onClick={() => onNavigate?.(id)} className={linkClass}>
        {label}
      </button>
    );
  }

  return (
    <div
      className={styles.navItem}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button onClick={() => onNavigate?.(id)} aria-haspopup="menu" aria-expanded={open} className={linkClass}>
        {label}
        <Icon name="chevron-down" size={15} className={cx(styles.chevron, open && styles.chevronOpen)} />
      </button>
      {open ? (
        <div role="menu" className={styles.menuAnchor}>
          <div className={styles.menu}>
            {children.map((c) => {
              const cid = typeof c === "string" ? c : c.value;
              const clabel = typeof c === "string" ? c : c.label;
              return (
                <button
                  key={cid}
                  role="menuitem"
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.(cid);
                  }}
                  className={cx(styles.menuItem, cid === active && styles.menuItemActive)}
                >
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

export interface NavBarProps {
  /** Wordmark text — the club has no logo file, so the name is set in Big Shoulders. */
  brand?: string;
  /** A link with `children` renders a caret and a hover submenu. */
  links?: Link[];
  active?: string;
  onNavigate?: (value: string) => void;
  /** Button label, or a custom node rendered at the right end. */
  action?: ReactNode;
  /** Green bar with white type. */
  inverse?: boolean;
  style?: CSSProperties;
  className?: string;
}

export function NavBar({
  brand = "Southern Business Club",
  links = [],
  active,
  onNavigate,
  action,
  inverse = false,
  style,
  className,
}: NavBarProps) {
  return (
    <header className={cx(styles.header, inverse && styles.headerInverse, className)} style={style}>
      <button
        onClick={() => links[0] && onNavigate?.(linkId(links[0]))}
        className={cx(styles.brand, inverse && styles.brandInverse)}
      >
        {brand}
      </button>
      <nav className={styles.nav}>
        {links.map((l) => (
          <NavLink key={linkId(l)} link={l} active={active} onNavigate={onNavigate} inverse={inverse} />
        ))}
      </nav>
      {action ? (typeof action === "string" ? (
        <Button variant={inverse ? "inverse" : "primary"} size="sm">
          {action}
        </Button>
      ) : (
        action
      )) : null}
    </header>
  );
}
