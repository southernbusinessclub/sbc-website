import { useId } from "react";
import type { ChangeEvent, CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Icon } from "./Icon";
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  label?: ReactNode;
  /** Secondary line under the label. */
  description?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  style?: CSSProperties;
}

export function Checkbox({ label, description, checked, onChange, disabled, id, style }: CheckboxProps) {
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
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
      <span className={cx(styles.box, checked && styles.boxChecked, description && styles.boxWithDescription)}>
        {checked ? <Icon name="check" size={14} /> : null}
      </span>
      <span>
        <span className={styles.text}>{label}</span>
        {description ? <span className={styles.description}>{description}</span> : null}
      </span>
    </label>
  );
}
