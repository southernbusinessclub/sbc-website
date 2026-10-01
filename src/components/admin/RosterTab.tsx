"use client";

import { useState } from "react";
import { Badge, Button, Input, Select, Switch } from "@/components/ui";
import { CURRENT_SCHOOL_YEAR } from "@/lib/school-year";
import { createClient } from "@/lib/supabase/client";
import styles from "./admin.module.css";

export interface RosterRow {
  id: string;
  name: string;
  email: string;
  standing: string | null;
  major: string | null;
  memberSince: string;
  officerRole: string | null;
  duesPaid: boolean;
  eventsCount: number;
}

const FILTERS = ["Everyone", "Dues unpaid", "Dues paid", "Officers"] as const;

function OfficerRoleCell({
  member,
  isSelf,
  onSaved,
  onNotify,
}: {
  member: RosterRow;
  isSelf: boolean;
  onSaved: (role: string | null) => void;
  onNotify: (t: { title: string; message: string }) => void;
}) {
  const [value, setValue] = useState(member.officerRole ?? "");
  const [saving, setSaving] = useState(false);

  const save = async () => {
    const next = value.trim() || null;
    if (next === (member.officerRole ?? null)) return;
    if (isSelf && next === null) {
      setValue(member.officerRole ?? "");
      onNotify({
        title: "Can't remove your own access",
        message: "Have another officer do it, or edit it directly in Supabase, so you don't lock yourself out.",
      });
      return;
    }
    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase.from("members").update({ officer_role: next }).eq("id", member.id);
    setSaving(false);
    if (error) {
      setValue(member.officerRole ?? "");
      onNotify({ title: "Couldn't update officer role", message: error.message });
      return;
    }
    onSaved(next);
    onNotify({
      title: next ? "Officer role set" : "Officer role removed",
      message: next ? `${member.name} is now listed as ${next}.` : `${member.name} is no longer an officer.`,
    });
  };

  return (
    <Input
      placeholder="Not an officer"
      value={value}
      disabled={saving}
      onChange={(e) => setValue(e.target.value)}
      onBlur={save}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.currentTarget.blur();
      }}
    />
  );
}

function toCsv(rows: RosterRow[]): string {
  const header = ["Name", "Email", "Standing", "Major", "Member since", "Officer role", "Dues paid", "Events"];
  const lines = rows.map((r) =>
    [r.name, r.email, r.standing ?? "", r.major ?? "", r.memberSince, r.officerRole ?? "", r.duesPaid ? "Yes" : "No", r.eventsCount]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(","),
  );
  return [header.join(","), ...lines].join("\n");
}

export function RosterTab({
  officerId,
  initialRoster,
  onNotify,
}: {
  officerId: string;
  initialRoster: RosterRow[];
  onNotify: (t: { title: string; message: string }) => void;
}) {
  const [roster, setRoster] = useState(initialRoster);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Everyone");

  const shown = roster.filter((m) => {
    const hit = `${m.name}${m.email}${m.major ?? ""}`.toLowerCase().includes(q.toLowerCase());
    const pass =
      filter === "Everyone"
        ? true
        : filter === "Dues unpaid"
          ? !m.duesPaid
          : filter === "Dues paid"
            ? m.duesPaid
            : Boolean(m.officerRole);
    return hit && pass;
  });

  const unpaid = roster.filter((m) => !m.duesPaid).length;

  const toggleDues = async (member: RosterRow) => {
    const next = !member.duesPaid;
    setRoster((r) => r.map((m) => (m.id === member.id ? { ...m, duesPaid: next } : m)));
    const supabase = createClient();
    await supabase.from("dues").upsert(
      {
        member_id: member.id,
        school_year: CURRENT_SCHOOL_YEAR,
        paid: next,
        recorded_by: officerId,
        recorded_at: new Date().toISOString(),
      },
      { onConflict: "member_id,school_year" },
    );
    onNotify({
      title: next ? "Dues recorded" : "Marked unpaid",
      message: `${member.name}${next ? " is paid up for the year." : " now shows as owing $10."}`,
    });
  };

  const exportCsv = () => {
    const blob = new Blob([toCsv(shown)], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "roster.csv";
    a.click();
    URL.revokeObjectURL(url);
    onNotify({ title: "Export started", message: "A CSV of the current view is on its way to your downloads." });
  };

  return (
    <div>
      <div className={styles.statsGrid}>
        <div>
          <div className={styles.statLabel}>On the roster</div>
          <div className={styles.statValue}>{roster.length}</div>
          <div className={styles.statNote}>Members with an account</div>
        </div>
        <div>
          <div className={styles.statLabel}>Dues unpaid</div>
          <div className={styles.statValue}>{unpaid}</div>
          <div className={styles.statNote}>Cash to Sarah, then flip the switch</div>
        </div>
        <div>
          <div className={styles.statLabel}>Collected</div>
          <div className={styles.statValue}>${(roster.length - unpaid) * 10}</div>
          <div className={styles.statNote}>At $10 a head, this year</div>
        </div>
      </div>

      <div className={styles.toolbar}>
        <Input
          label="Search the roster"
          icon="search"
          placeholder="Name, email, or major"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          wrapStyle={{ flex: "1 1 260px" }}
        />
        <Select
          label="Show"
          options={[...FILTERS]}
          value={filter}
          onChange={(e) => setFilter(e.target.value as (typeof FILTERS)[number])}
          wrapStyle={{ flex: "0 0 200px" }}
        />
        <Button variant="outline" onClick={exportCsv}>
          Export CSV
        </Button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Member</th>
              <th className={styles.th}>Standing</th>
              <th className={styles.th}>Member since</th>
              <th className={styles.th}>Events</th>
              <th className={styles.th}>Officer role</th>
              <th className={`${styles.th} ${styles.thRight}`}>Dues paid</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((m) => (
              <tr key={m.id}>
                <td className={styles.td}>
                  <div className={styles.nameCell}>
                    <span style={{ fontWeight: 700 }}>{m.name}</span>
                    {m.officerRole ? <Badge tone="accent">{m.officerRole}</Badge> : null}
                  </div>
                  <div className={styles.nameSub}>
                    {m.email} · {m.major ?? "—"}
                  </div>
                </td>
                <td className={`${styles.td} ${styles.tdMuted}`}>{m.standing ?? "—"}</td>
                <td className={`${styles.td} ${styles.tdMuted}`}>{m.memberSince}</td>
                <td className={`${styles.td} ${styles.tdMuted}`}>{m.eventsCount}</td>
                <td className={styles.td} style={{ minWidth: 160 }}>
                  <OfficerRoleCell
                    member={m}
                    isSelf={m.id === officerId}
                    onNotify={onNotify}
                    onSaved={(role) =>
                      setRoster((r) => r.map((row) => (row.id === m.id ? { ...row, officerRole: role } : row)))
                    }
                  />
                </td>
                <td className={`${styles.td} ${styles.tdRight}`}>
                  <span className={styles.duesCell}>
                    {!m.duesPaid ? <Badge tone="warning">Owes $10</Badge> : null}
                    <Switch checked={m.duesPaid} onChange={() => toggleDues(m)} />
                  </span>
                </td>
              </tr>
            ))}
            {shown.length === 0 ? (
              <tr>
                <td className={`${styles.td} ${styles.tdMuted}`} colSpan={6}>
                  Nobody matches that.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <p className={styles.footNote}>
        Dues are cash only, handed to the treasurer. Flipping a switch here records that it happened — the site
        never takes a payment.
      </p>
    </div>
  );
}
