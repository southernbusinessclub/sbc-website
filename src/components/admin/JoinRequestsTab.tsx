"use client";

import { useState } from "react";
import { Button, Card } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";
import styles from "./admin.module.css";

export interface JoinRequestRow {
  id: string;
  name: string;
  email: string;
  standing: string | null;
  major: string | null;
  createdAt: string;
}

function timeAgo(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

export function JoinRequestsTab({
  initialRequests,
  onNotify,
}: {
  initialRequests: JoinRequestRow[];
  onNotify: (t: { title: string; message: string }) => void;
}) {
  const [requests, setRequests] = useState(initialRequests);

  const resolve = async (request: JoinRequestRow, approve: boolean) => {
    const supabase = createClient();
    if (approve) {
      const { error } = await supabase.rpc("approve_join_request", { request_id: request.id });
      if (error) {
        onNotify({ title: "Couldn't approve that", message: error.message });
        return;
      }
    } else {
      const { error } = await supabase.rpc("decline_join_request", { request_id: request.id });
      if (error) {
        onNotify({ title: "Couldn't decline that", message: error.message });
        return;
      }
    }
    setRequests((list) => list.filter((r) => r.id !== request.id));
    onNotify(
      approve
        ? { title: "Added to the roster", message: `${request.name} can log in now. Dues show unpaid.` }
        : { title: "Request declined", message: "No email was sent. Reach out directly if you want to explain." },
    );
  };

  if (requests.length === 0) {
    return (
      <div>
        <p style={{ margin: "0 0 18px", fontSize: 14.5, color: "var(--text-muted)" }}>
          People who filled out the join form. Approving one adds them to the roster with dues unpaid.
        </p>
        <Card variant="sunken">
          <p style={{ margin: 0, color: "var(--text-muted)" }}>Nothing waiting. New signups land here.</p>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <p style={{ margin: "0 0 18px", fontSize: 14.5, color: "var(--text-muted)" }}>
        People who filled out the join form. Approving one adds them to the roster with dues unpaid.
      </p>
      <div className={styles.requestList}>
        {requests.map((r) => (
          <Card key={r.id} padding="var(--space-5)">
            <div className={styles.requestRow}>
              <div className={styles.requestName}>
                <div className={styles.requestNameTitle}>{r.name}</div>
                <div className={styles.requestMeta}>
                  {r.email} · {r.standing ?? "—"} · {r.major ?? "—"}
                </div>
              </div>
              <span className={styles.requestWhen}>Applied {timeAgo(r.createdAt)}</span>
              <div className={styles.requestActions}>
                <Button variant="ghost" size="sm" onClick={() => resolve(r, false)}>
                  Decline
                </Button>
                <Button size="sm" onClick={() => resolve(r, true)}>
                  Add to roster
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
