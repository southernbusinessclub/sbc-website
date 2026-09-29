"use client";

import { useState } from "react";
import { Button, Tabs } from "@/components/ui";
import { ToastViewport } from "@/components/site/ToastViewport";
import { useToast } from "@/lib/useToast";
import { EventsTab, type EventRow } from "./EventsTab";
import { JoinRequestsTab, type JoinRequestRow } from "./JoinRequestsTab";
import { RosterTab, type RosterRow } from "./RosterTab";
import styles from "./admin.module.css";

export interface AdminConsoleProps {
  officerId: string;
  officerName: string;
  officerRole: string;
  initialRoster: RosterRow[];
  initialEvents: EventRow[];
  initialJoinRequests: JoinRequestRow[];
}

const TABS = ["Roster", "Events", "Join requests"] as const;

export function AdminConsole({
  officerId,
  officerName,
  officerRole,
  initialRoster,
  initialEvents,
  initialJoinRequests,
}: AdminConsoleProps) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Roster");
  const { toast, show, hide } = useToast();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div>
            <div className="sbc-eyebrow">Officers only</div>
            <h1 className={styles.title}>Club admin</h1>
            <p className={styles.signedInAs}>
              Signed in as {officerName} · {officerRole}
            </p>
          </div>
          <Button as="a" href="/account" variant="outline" style={{ textDecoration: "none" }}>
            Back to my account
          </Button>
        </div>

        <Tabs tabs={[...TABS]} value={tab} onChange={(v) => setTab(v as (typeof TABS)[number])} className={styles.tabs} />

        {tab === "Roster" ? <RosterTab officerId={officerId} initialRoster={initialRoster} onNotify={show} /> : null}
        {tab === "Events" ? <EventsTab initialEvents={initialEvents} onNotify={show} /> : null}
        {tab === "Join requests" ? (
          <JoinRequestsTab initialRequests={initialJoinRequests} onNotify={show} />
        ) : null}
      </div>
      <ToastViewport toast={toast} onClose={hide} />
    </section>
  );
}
