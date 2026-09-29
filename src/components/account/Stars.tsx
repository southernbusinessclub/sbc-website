"use client";

import { useState } from "react";
import { Icon } from "@/components/ui";
import { cx } from "@/lib/cx";
import styles from "./Stars.module.css";

export function Stars({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className={styles.row} onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => {
        const on = n <= (hover || value);
        return (
          <button
            key={n}
            type="button"
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
            className={cx(styles.star, on && styles.starOn)}
            onMouseEnter={() => setHover(n)}
            onClick={() => onChange(n)}
          >
            <Icon name="star" size={22} />
          </button>
        );
      })}
    </div>
  );
}
