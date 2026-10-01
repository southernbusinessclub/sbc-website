import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/server";

export interface CurrentMember {
  id: string;
  firstName: string;
}

/** The signed-in visitor's roster row, or null if signed out / not yet approved. */
export async function getCurrentMember(): Promise<CurrentMember | null> {
  if (!isSupabaseConfigured()) return null;

  const supabase = await createClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();
  if (!authUser) return null;

  const { data: member } = await supabase
    .from("members")
    .select("id,first_name")
    .eq("user_id", authUser.id)
    .maybeSingle();

  if (!member) return null;
  return { id: member.id, firstName: member.first_name };
}
