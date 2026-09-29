import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { IconButton } from "./IconButton";
import styles from "./Toast.module.css";

type Tone = "success" | "info" | "warning" | "danger";

const tones: Record<Tone, { icon: IconName; bar: string }> = {
  success: { icon: "check-circle", bar: "var(--status-success)" },
  info: { icon: "info", bar: "var(--status-info)" },
  warning: { icon: "alert-triangle", bar: "var(--status-warning)" },
  danger: { icon: "alert-circle", bar: "var(--status-danger)" },
};

export interface ToastProps {
  tone?: Tone;
  title?: ReactNode;
  message?: ReactNode;
  onClose?: () => void;
  style?: CSSProperties;
}

export function Toast({ tone = "success", title, message, onClose, style }: ToastProps) {
  const t = tones[tone];
  return (
    <div
      role="status"
      className={styles.toast}
      style={{ "--bar-color": t.bar, ...style } as CSSProperties}
    >
      <span className={styles.icon}>
        <Icon name={t.icon} size={19} />
      </span>
      <div className={styles.content}>
        {title ? <div className={styles.title}>{title}</div> : null}
        {message ? <div className={styles.message}>{message}</div> : null}
      </div>
      {onClose ? (
        <IconButton icon="x" label="Dismiss" variant="ghost" size="sm" onClick={onClose} className={styles.close} />
      ) : null}
    </div>
  );
}
