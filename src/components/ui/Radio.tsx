"use client";
import { useId } from "react";
import type { ChangeEvent, CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Radio.module.css";

export interface RadioProps {
  label?: ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  id?: string;
  style?: CSSProperties;
}

export function Radio({ label, description, checked, onChange, name, value, disabled, id, style }: RadioProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <label
      htmlFor={inputId}
      className={cx(styles.label, description && styles.hasDescription)}
      style={style}
    >
      <input
        id={inputId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
      <span
        className={cx(
          styles.circle,
          checked && styles.circleChecked,
          description && styles.circleWithDescription,
        )}
      >
        {checked ? <span className={styles.dot} /> : null}
      </span>
      <span>
        <span className={styles.text}>{label}</span>
        {description ? <span className={styles.description}>{description}</span> : null}
      </span>
    </label>
  );
}
