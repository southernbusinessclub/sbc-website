import { useId } from "react";
import type { CSSProperties, SelectHTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import { Icon } from "./Icon";
import styles from "./Select.module.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  /** Strings, or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  wrapStyle?: CSSProperties;
}

export function Select({ label, hint, options = [], id, className, wrapStyle, ...rest }: SelectProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <div className={styles.wrap} style={wrapStyle}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}
      <div className={styles.fieldWrap}>
        <select id={inputId} className={cx(styles.select, className)} {...rest}>
          {options.map((o) => {
            const value = typeof o === "string" ? o : o.value;
            const text = typeof o === "string" ? o : o.label;
            return (
              <option key={value} value={value}>
                {text}
              </option>
            );
          })}
        </select>
        <span className={styles.chevron}>
          <Icon name="chevron-down" size={17} />
        </span>
      </div>
      {hint ? <span className={styles.hint}>{hint}</span> : null}
    </div>
  );
}
