"use server";

import { createClient } from "@/lib/supabase/server";

export async function rsvpToEvent(eventId: string): Promise<{ error?: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: "not-signed-in" };
  }

  const { data: member } = await supabase.from("members").select("id").eq("user_id", user.id).maybeSingle();
  if (!member) {
    return { error: "not-approved" };
  }

  const { error } = await supabase.from("rsvps").insert({ event_id: eventId, member_id: member.id });
  // A duplicate RSVP (unique constraint) just means they already RSVP'd — treat as success.
  if (error && !error.message.includes("duplicate key")) {
    return { error: error.message };
  }

  return {};
}
