"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { createPortal } from "react-dom";
import { IconButton } from "./IconButton";
import styles from "./Dialog.module.css";

export interface DialogProps {
  open?: boolean;
  title?: ReactNode;
  children?: ReactNode;
  /** Action row, rendered on a sunken bar. */
  footer?: ReactNode;
  onClose?: () => void;
  /** Max width in px. Default 480. */
  width?: number;
  style?: CSSProperties;
}

export function Dialog({ open = true, title, children, footer, onClose, width = 480, style }: DialogProps) {
  // Portaled to document.body: a dialog rendered in place would sit inside
  // whatever called it, and position:fixed stops meaning "relative to the
  // viewport" the moment an ancestor (e.g. EventCard's hover transform)
  // creates its own containing block — the dialog then gets squeezed into
  // that ancestor's box instead of centering on the page. `document` only
  // exists once mounted in the browser, which also makes this SSR-safe.
  if (!open || typeof document === "undefined") return null;

  const stop = (e: MouseEvent) => e.stopPropagation();

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        onClick={stop}
        className={styles.panel}
        style={{ maxWidth: width, ...style }}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {onClose ? <IconButton icon="x" label="Close" variant="ghost" size="sm" onClick={onClose} /> : null}
        </div>
        <div className={styles.body}>{children}</div>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </div>,
    document.body,
  );
}
