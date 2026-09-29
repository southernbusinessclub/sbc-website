"use client";

import { useState } from "react";
import { Badge, Button, Card, Switch, Tooltip } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";
import styles from "@/app/account/account.module.css";

export function SettingsCard({
  phone,
  initialSmsOptIn,
  directoryOptIn,
  notes,
  isOfficer,
}: {
  phone: string | null;
  initialSmsOptIn: boolean;
  directoryOptIn: boolean;
  notes: string | null;
  isOfficer: boolean;
}) {
  const [texts, setTexts] = useState(initialSmsOptIn);

  const toggleTexts = async () => {
    const next = !texts;
    setTexts(next);
    const supabase = createClient();
    await supabase.rpc("update_my_profile", {
      new_phone: phone,
      new_sms_opt_in: next,
      new_directory_opt_in: directoryOptIn,
      new_notes: notes,
    });
  };

  return (
    <Card variant="plain">
      <Badge tone="neutral">Settings</Badge>
      <h3 className={styles.sideCardTitle}>Your preferences</h3>
      <div className={styles.settingsSwitches}>
        <Switch label="Text me event reminders" checked={texts} onChange={toggleTexts} />
      </div>
      <div className={styles.settingsActions}>
        <Button variant="outline" size="sm">
          Edit profile
        </Button>
        {isOfficer ? (
          <Tooltip label="Officers can export the roster">
            <Button as="a" href="/admin" variant="ghost" size="sm" icon="download" style={{ textDecoration: "none" }}>
              Roster
            </Button>
          </Tooltip>
        ) : null}
      </div>
    </Card>
  );
}
