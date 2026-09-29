import type { CSSProperties } from "react";
import { cx } from "@/lib/cx";
import styles from "./Tabs.module.css";

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  /** Strings, or {value,label} pairs. */
  tabs?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
  className?: string;
}

export function Tabs({ tabs = [], value, onChange, style, className }: TabsProps) {
  return (
    <div role="tablist" className={cx(styles.tablist, className)} style={style}>
      {tabs.map((t) => {
        const id = typeof t === "string" ? t : t.value;
        const label = typeof t === "string" ? t : t.label;
        const active = id === value;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange?.(id)}
            className={cx(styles.tab, active && styles.tabActive)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
