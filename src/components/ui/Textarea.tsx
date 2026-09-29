"use client";
import { useId } from "react";
import type { CSSProperties, TextareaHTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import styles from "./Textarea.module.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  wrapStyle?: CSSProperties;
}

export function Textarea({ label, hint, error, id, rows = 4, className, wrapStyle, ...rest }: TextareaProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <div className={styles.wrap} style={wrapStyle}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}
      <textarea
        id={inputId}
        rows={rows}
        className={cx(styles.textarea, error && styles.textareaError, className)}
        {...rest}
      />
      {error ? <span className={styles.error}>{error}</span> : hint ? <span className={styles.hint}>{hint}</span> : null}
    </div>
  );
}
