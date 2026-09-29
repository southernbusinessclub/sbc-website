import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Tooltip.module.css";

type Placement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  label: ReactNode;
  placement?: Placement;
  children?: ReactNode;
  style?: CSSProperties;
}

export function Tooltip({ label, children, placement = "top", style }: TooltipProps) {
  return (
    <span className={styles.wrapper} style={style}>
      {children}
      <span role="tooltip" className={cx(styles.bubble, styles[placement])}>
        {label}
      </span>
    </span>
  );
}
