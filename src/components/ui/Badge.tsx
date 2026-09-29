import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Icon, type IconName } from "./Icon";
import styles from "./Badge.module.css";

type Tone = "brand" | "accent" | "success" | "warning" | "danger" | "neutral" | "solid";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  /** Lucide icon name shown before the label. */
  icon?: IconName;
  children?: ReactNode;
}

export function Badge({ children, tone = "brand", icon, className, ...rest }: BadgeProps) {
  return (
    <span className={cx(styles.badge, styles[tone], className)} {...rest}>
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
