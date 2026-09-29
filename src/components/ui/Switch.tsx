import type { ChangeEvent, CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Switch.module.css";

export interface SwitchProps {
  label?: ReactNode;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: CSSProperties;
}

export function Switch({ label, checked, onChange, disabled, style }: SwitchProps) {
  return (
    <label className={styles.label} style={style}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} className={styles.input} />
      <span className={cx(styles.track, checked && styles.trackOn)}>
        <span className={cx(styles.thumb, checked && styles.thumbOn)} />
      </span>
      {label ? <span className={styles.text}>{label}</span> : null}
    </label>
  );
}
