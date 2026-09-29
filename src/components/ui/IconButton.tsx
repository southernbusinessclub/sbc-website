import type { ButtonHTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import { Icon, type IconName } from "./Icon";
import styles from "./IconButton.module.css";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name. */
  icon: IconName;
  /** Accessible label — required, used for aria-label and title. */
  label: string;
  variant?: Variant;
  size?: Size;
}

export function IconButton({
  icon,
  label,
  variant = "outline",
  size = "md",
  className,
  ...rest
}: IconButtonProps) {
  const iconSize = size === "sm" ? 16 : size === "lg" ? 22 : 19;
  return (
    <button
      aria-label={label}
      title={label}
      className={cx(styles.iconButton, styles[variant], styles[size], className)}
      {...rest}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
