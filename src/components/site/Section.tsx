import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Section.module.css";

export interface SectionProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  maxWidth?: string;
}

export function Section({ eyebrow, title, children, style, className, maxWidth = "var(--container-max)" }: SectionProps) {
  return (
    <section className={cx(styles.section, className)} style={style}>
      <div className={styles.inner} style={{ maxWidth }}>
        {eyebrow ? <div className={`sbc-eyebrow ${styles.eyebrow}`}>{eyebrow}</div> : null}
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
