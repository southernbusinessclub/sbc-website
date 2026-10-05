import { Suspense } from "react";
import { ConfirmCard } from "./ConfirmCard";
import styles from "./confirm.module.css";

export default function ConfirmPage() {
  return (
    <section className={styles.section}>
      <Suspense fallback={<div className={styles.card} />}>
        <ConfirmCard />
      </Suspense>
    </section>
  );
}
