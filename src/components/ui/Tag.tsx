import type { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Icon } from "./Icon";
import styles from "./Tag.module.css";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  /** Renders a dismiss affordance. */
  onRemove?: (e: MouseEvent) => void;
  children?: ReactNode;
}

export function Tag({ children, selected = false, onRemove, onClick, className, ...rest }: TagProps) {
  return (
    <span
      onClick={onClick}
      className={cx(styles.tag, Boolean(onClick) && styles.interactive, selected && styles.selected, className)}
      {...rest}
    >
      {children}
      {onRemove ? (
        <button
          type="button"
          className={styles.remove}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(e);
          }}
        >
          <Icon name="x" size={13} />
        </button>
      ) : null}
    </span>
  );
}
