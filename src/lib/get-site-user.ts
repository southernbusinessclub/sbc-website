import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/server";
import type { SiteUser } from "@/lib/types";

function initialsOf(first: string, last: string): string {
  return `${first[0] ?? ""}${last[0] ?? ""}`.toUpperCase();
}

/** Resolves the signed-in visitor for the header: null when signed out. */
export async function getSiteUser(): Promise<SiteUser | null> {
  // No Supabase project connected yet — render as signed-out rather than
  // throwing, so the rest of the site stays usable on mock data.
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = await createClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) return null;

  const { data: member } = await supabase
    .from("members")
    .select("first_name,last_name,officer_role")
    .eq("user_id", authUser.id)
    .maybeSingle();

  if (member) {
    return {
      name: `${member.first_name} ${member.last_name}`,
      initials: initialsOf(member.first_name, member.last_name),
      officer: member.officer_role,
    };
  }

  // Signed in (e.g. just submitted Join) but not yet on the roster — an
  // officer hasn't approved the join request yet.
  return {
    name: authUser.email ?? "Member",
    initials: "···",
    officer: null,
  };
}
