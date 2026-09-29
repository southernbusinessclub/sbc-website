import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Card.module.css";

type Variant = "plain" | "poster" | "sunken" | "brand" | "accent";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  /** CSS padding value. Default var(--space-6). */
  padding?: string;
  /** Colour for a 6px top rule (use sparingly, for event categories). */
  accent?: string;
  children?: ReactNode;
}

export function Card({
  children,
  variant = "plain",
  padding = "var(--space-6)",
  accent,
  className,
  style,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(styles.card, styles[variant], className)}
      style={{
        padding,
        ...(accent ? { borderTop: `6px solid ${accent}` } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
