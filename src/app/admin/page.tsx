import { redirect } from "next/navigation";
import { AdminConsole } from "@/components/admin/AdminConsole";
import { CURRENT_SCHOOL_YEAR } from "@/lib/school-year";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
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
    .select("id,first_name,last_name,officer_role")
    .eq("user_id", authUser.id)
    .maybeSingle();

  if (!member?.officer_role) {
    redirect("/account");
  }

  const [{ data: members }, { data: dues }, { data: rsvps }, { data: events }, { data: joinRequests }] =
    await Promise.all([
      supabase.from("members").select("*").order("first_name"),
      supabase.from("dues").select("member_id,paid").eq("school_year", CURRENT_SCHOOL_YEAR),
      supabase.from("rsvps").select("member_id,event_id"),
      supabase.from("events").select("*").order("created_at"),
      supabase
        .from("join_requests")
        .select("*")
        .eq("status", "pending")
        .order("created_at", { ascending: false }),
    ]);

  const duesByMember = new Map((dues ?? []).map((d) => [d.member_id, d.paid]));
  const rsvpCountByMember = new Map<string, number>();
  const rsvpCountByEvent = new Map<string, number>();
  for (const r of rsvps ?? []) {
    rsvpCountByMember.set(r.member_id, (rsvpCountByMember.get(r.member_id) ?? 0) + 1);
    rsvpCountByEvent.set(r.event_id, (rsvpCountByEvent.get(r.event_id) ?? 0) + 1);
  }

  const roster = (members ?? []).map((m) => ({
    id: m.id,
    name: `${m.first_name} ${m.last_name}`,
    email: m.email,
    standing: m.standing,
    major: m.major,
    memberSince: m.member_since,
    officerRole: m.officer_role,
    duesPaid: duesByMember.get(m.id) ?? false,
    eventsCount: rsvpCountByMember.get(m.id) ?? 0,
  }));

  const eventRows = (events ?? []).map((e) => ({
    id: e.id,
    title: e.title,
    eventDate: e.event_date,
    eventTime: e.event_time,
    location: e.location,
    category: e.category,
    published: e.published,
    rsvpCount: rsvpCountByEvent.get(e.id) ?? 0,
  }));

  const requestRows = (joinRequests ?? []).map((r) => ({
    id: r.id,
    name: `${r.first_name} ${r.last_name}`,
    email: r.email,
    standing: r.standing,
    major: r.major,
    createdAt: r.created_at,
  }));

  return (
    <AdminConsole
      officerId={member.id}
      officerName={`${member.first_name} ${member.last_name}`}
      officerRole={member.officer_role}
      initialRoster={roster}
      initialEvents={eventRows}
      initialJoinRequests={requestRows}
    />
  );
}
