import type { CSSProperties, MouseEvent, ReactNode } from "react";
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
  if (!open) return null;

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
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
    </div>
  );
}
