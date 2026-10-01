import { redirect } from "next/navigation";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { AttendedEvents, type FeedbackState } from "@/components/account/AttendedEvents";
import { SettingsCard } from "@/components/account/SettingsCard";
import { CURRENT_SCHOOL_YEAR, TREASURER } from "@/lib/school-year";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/server";
import styles from "./account.module.css";

function initialsOf(first: string, last: string): string {
  return `${first[0] ?? ""}${last[0] ?? ""}`.toUpperCase();
}

function formatEventWhen(dateIso: string | null): string {
  if (!dateIso) return "Date TBA";
  return new Date(`${dateIso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function AccountPage() {
  // No Supabase project connected yet, so there's no way to have a session.
  if (!isSupabaseConfigured()) {
    redirect("/login");
  }

  const supabase = await createClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) {
    redirect("/login");
  }

  const { data: member } = await supabase
    .from("members")
    .select("*")
    .eq("user_id", authUser.id)
    .maybeSingle();

  if (!member) {
    return (
      <section style={{ padding: "96px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <Badge tone="neutral">Pending</Badge>
          <h1 style={{ fontSize: 36, textTransform: "uppercase", fontWeight: 900, margin: "14px 0 10px" }}>
            Almost there
          </h1>
          <p style={{ fontSize: 15.5, color: "var(--text-muted)" }}>
            Your membership form is in with the officers. Once one of them approves it, this page will show your
            dues status and events.
          </p>
        </div>
      </section>
    );
  }

  const { data: dues } = await supabase
    .from("dues")
    .select("paid")
    .eq("member_id", member.id)
    .eq("school_year", CURRENT_SCHOOL_YEAR)
    .maybeSingle();
  // Officers don't pay dues.
  const paid = Boolean(member.officer_role) || (dues?.paid ?? false);

  const { data: rsvpRows } = await supabase.from("rsvps").select("event_id").eq("member_id", member.id);
  const rsvpEventIds = (rsvpRows ?? []).map((r) => r.event_id);

  const today = new Date().toISOString().slice(0, 10);
  const { data: attendedRows } = rsvpEventIds.length
    ? await supabase
        .from("events")
        .select("id,title,category,is_signature,event_date,member_value_usd")
        .in("id", rsvpEventIds)
        .eq("published", true)
        .lt("event_date", today)
        .order("event_date", { ascending: false })
    : { data: [] as Array<{ id: string; title: string; category: string | null; is_signature: boolean; event_date: string | null; member_value_usd: number | null }> };

  const attended = attendedRows ?? [];

  const { data: feedbackRows } = await supabase
    .from("event_feedback")
    .select("event_id,rating,comment")
    .eq("member_id", member.id);

  const feedbackByEvent: Record<string, FeedbackState> = {};
  for (const row of feedbackRows ?? []) {
    feedbackByEvent[row.event_id] = { rating: row.rating ?? 0, comment: row.comment ?? "" };
  }

  const saved = attended.reduce((sum, e) => sum + Number(e.member_value_usd ?? 0), 0);
  const rated = attended.filter((e) => feedbackByEvent[e.id]?.rating).length;

  const stats: Array<[string, string, string]> = [
    ["calendar-check", String(attended.length), "events attended"],
    ["piggy-bank", `$${saved}`, "saved as a member"],
    paid ? ["wallet", CURRENT_SCHOOL_YEAR, "dues paid"] : ["wallet", "$10", "dues owed"],
    ["star", `${rated}/${attended.length}`, "events rated"],
  ];

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <span className={styles.avatar}>{initialsOf(member.first_name, member.last_name)}</span>
            <div className={styles.heroMeta}>
              <div className={styles.heroEyebrow}>Member since {member.member_since}</div>
              <h1 className={styles.heroName}>
                {member.first_name} {member.last_name}
              </h1>
              <div className={styles.heroDetail}>
                {member.major ?? "—"} · {member.standing ?? "—"} · {member.email}
              </div>
              {paid ? (
                <div className={styles.heroPaidBadge}>
                  <Icon name="badge-check" size={15} />
                  Dues current through {CURRENT_SCHOOL_YEAR}
                </div>
              ) : null}
            </div>
            <div className={styles.heroActions}>
              <Button as="a" href="/events" variant="inverse">
                See what&apos;s coming up
              </Button>
            </div>
          </div>
          <div className={styles.statsGrid}>
            {stats.map(([icon, n, l]) => (
              <div key={l} className={styles.statCard}>
                <span className={styles.statIcon}>
                  <Icon name={icon as "calendar-check" | "piggy-bank" | "wallet" | "star"} size={20} />
                </span>
                <div className={styles.statNumber}>{n}</div>
                <div className={styles.statLabel}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!paid ? (
        <section className={styles.duesBannerSection}>
          <div className={styles.duesBannerInner}>
            <Card variant="plain" className={styles.duesBanner}>
              <span className={styles.duesBannerIcon}>
                <Icon name="wallet" size={22} />
              </span>
              <div className={styles.duesBannerText}>
                <div className={styles.duesBannerTitle}>Your {CURRENT_SCHOOL_YEAR} dues aren&apos;t paid</div>
                <div className={styles.duesBannerBody}>
                  Dues are $10 each school year. Hand Sarah cash at any event — or if you already paid her this year,
                  text her and she&apos;ll fix the record.
                </div>
              </div>
              <Button
                as="a"
                href={`sms:${TREASURER.tel}?&body=${encodeURIComponent(
                  `Hey Sarah! This is ${member.first_name} ${member.last_name}. Checking on my club dues.`,
                )}`}
                variant="outline"
                style={{ textDecoration: "none" }}
              >
                Text Sarah
              </Button>
            </Card>
          </div>
        </section>
      ) : null}

      <section className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.column}>
            <div>
              <div className="sbc-eyebrow" style={{ marginBottom: 10 }}>
                The math
              </div>
              <h2 className={styles.blockTitle}>Your $10, so far</h2>
              <p className={styles.blockBody}>
                What membership has been worth to you this year, based on what you&apos;ve actually shown up to.
              </p>
              {attended.filter((e) => e.member_value_usd).length === 0 ? (
                <Card variant="sunken">
                  <p style={{ margin: 0, fontSize: 15, color: "var(--text-muted)" }}>
                    Nothing to add up yet. Show up to a headshot night or a free member dinner and this fills in on
                    its own.
                  </p>
                </Card>
              ) : (
                <Card padding="0" style={{ overflow: "hidden" }}>
                  {attended
                    .filter((e) => e.member_value_usd)
                    .map((e) => (
                      <div key={e.id} className={styles.savingsRow}>
                        <span className={styles.savingsIcon}>
                          <Icon name="badge-check" size={19} />
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className={styles.savingsLabel}>{e.title}</div>
                          <div className={styles.savingsDetail}>{e.category}</div>
                        </div>
                        <div className={styles.savingsAmount}>${Number(e.member_value_usd)}</div>
                      </div>
                    ))}
                  <div className={styles.savingsTotal}>
                    <div className={styles.savingsTotalLabel}>Saved so far · {saved / 10}× your dues</div>
                    <div className={styles.savingsTotalAmount}>${saved}</div>
                  </div>
                </Card>
              )}
            </div>

            <div>
              <div className="sbc-eyebrow" style={{ marginBottom: 10 }}>
                Feedback
              </div>
              <h2 className={styles.blockTitle}>Events you attended</h2>
              <p className={styles.blockBody}>
                Rate them honestly. The officers read every note before planning the next one.
              </p>
              <AttendedEvents
                memberId={member.id}
                events={attended.map((e) => ({
                  id: e.id,
                  title: e.title,
                  category: e.category,
                  is_signature: e.is_signature,
                  when: formatEventWhen(e.event_date),
                }))}
                initialFeedback={feedbackByEvent}
              />
            </div>
          </div>

          <div className={styles.sidebar}>
            <Card variant="brand">
              <div className={styles.duesCardLabel}>Dues</div>
              <div className={styles.duesCardValue}>{paid ? "Paid" : "$10 owed"}</div>
              <p className={styles.duesCardBody}>
                {paid
                  ? `You are current through the ${CURRENT_SCHOOL_YEAR} school year. Every event this year is free to you.`
                  : "Bring $10 cash to any event and hand it to Sarah. That covers the whole school year."}
              </p>
              <Button as="a" href="/events" variant="secondary" size="sm" iconAfter="arrow-right" style={{ textDecoration: "none" }}>
                Find the next event
              </Button>
            </Card>
            <Card variant="plain">
              <Badge tone="solid">Up next</Badge>
              <h3 className={styles.sideCardTitle}>Nothing scheduled yet</h3>
              <p className={styles.sideCardBody}>
                Officers are locking in dates. You&apos;ll get a text the moment the first one goes up.
              </p>
              <Button as="a" href="/events" variant="ghost" size="sm" iconAfter="arrow-right" style={{ textDecoration: "none" }}>
                See what&apos;s planned
              </Button>
            </Card>
            <SettingsCard
              phone={member.phone}
              initialSmsOptIn={member.sms_opt_in}
              directoryOptIn={member.directory_opt_in}
              notes={member.notes}
              isOfficer={Boolean(member.officer_role)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
