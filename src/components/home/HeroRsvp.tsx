"use client";

import { useState } from "react";
import { Button, Dialog } from "@/components/ui";
import { ToastViewport } from "@/components/site/ToastViewport";
import { useToast } from "@/lib/useToast";
import styles from "./HeroRsvp.module.css";

export function HeroRsvp() {
  const [open, setOpen] = useState(false);
  const { toast, show, hide } = useToast();

  const confirm = () => {
    setOpen(false);
    show({ title: "You are on the list", message: "We will text you when the date is locked in." });
  };

  return (
    <div className={styles.signatureCard}>
      <div className={styles.signatureEyebrow}>Signature event · Date TBA</div>
      <div className={styles.signatureTitle}>
        Taco Bell
        <br />
        Black Tie
      </div>
      <p className={styles.signatureBody}>Formalwear. Fast food. Free for members.</p>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Get notified
      </Button>

      <Dialog
        open={open}
        title="Save your spot?"
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Never mind
            </Button>
            <Button onClick={confirm}>RSVP</Button>
          </>
        }
      >
        We&apos;ll text you the details for Taco Bell Black Tie as soon as the date is locked in.
      </Dialog>

      <ToastViewport toast={toast} onClose={hide} />
    </div>
  );
}
