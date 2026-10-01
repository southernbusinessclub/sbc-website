"use client";
import { useId, useState } from "react";
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

export function Input({ label, hint, error, icon, id, className, wrapStyle, type, required, ...rest }: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const isPassword = type === "password";
  const [reveal, setReveal] = useState(false);

  return (
    <div className={styles.wrap} style={wrapStyle}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required ? (
            <span className={styles.required} aria-hidden="true">
              {" "}
              *
            </span>
          ) : null}
        </label>
      ) : null}
      <div className={cx(styles.field, error && styles.fieldError)}>
        {icon ? (
          <span className={styles.icon}>
            <Icon name={icon} size={17} />
          </span>
        ) : null}
        <input
          id={inputId}
          type={isPassword && reveal ? "text" : type}
          required={required}
          className={cx(styles.input, className)}
          {...rest}
        />
        {isPassword ? (
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setReveal((v) => !v)}
            aria-label={reveal ? "Hide password" : "Show password"}
            aria-pressed={reveal}
          >
            <Icon name={reveal ? "eye-off" : "eye"} size={17} />
          </button>
        ) : null}
      </div>
      {error ? <span className={styles.error}>{error}</span> : hint ? <span className={styles.hint}>{hint}</span> : null}
    </div>
  );
}
