"use client";
import { useId } from "react";
import type { CSSProperties, InputHTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import { Icon, type IconName } from "./Icon";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message — also turns the field border red. */
  error?: string;
  /** Lucide icon name shown inside the field. */
  icon?: IconName;
  wrapStyle?: CSSProperties;
}

export function Input({ label, hint, error, icon, id, className, wrapStyle, ...rest }: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <div className={styles.wrap} style={wrapStyle}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}
      <div className={cx(styles.field, error && styles.fieldError)}>
        {icon ? (
          <span className={styles.icon}>
            <Icon name={icon} size={17} />
          </span>
        ) : null}
        <input id={inputId} className={cx(styles.input, className)} {...rest} />
      </div>
      {error ? <span className={styles.error}>{error}</span> : hint ? <span className={styles.hint}>{hint}</span> : null}
    </div>
  );
}
