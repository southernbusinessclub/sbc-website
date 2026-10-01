"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/server";

export interface JoinInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  standing: string;
  major: string;
  password: string;
  interests: string[];
  smsOptIn: boolean;
  directoryOptIn: boolean;
  notes: string;
}

export interface JoinResult {
  error?: string;
}

/**
 * Runs signUp + the join_requests insert together, server-side, so Join
 * works correctly with Supabase's "Confirm email" left ON. signUp() returns
 * the new user's id immediately even before they've confirmed their email —
 * only logging in requires confirmation — so we don't need (and must not
 * rely on) an active session to record the join request. The insert uses
 * the admin client specifically because this user has no session yet.
 */
export async function submitJoinRequest(input: JoinInput): Promise<JoinResult> {
  const email = input.email.trim();

  if (!/^[a-z0-9._%+-]+@southern\.edu$/i.test(email)) {
    return { error: "Use your @southern.edu email address." };
  }
  if (input.password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }
  if (!isSupabaseConfigured() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { error: "The club hasn't connected its account system yet — check back soon." };
  }

  const supabase = await createClient();
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ email, password: input.password });
  if (signUpError || !signUpData.user) {
    return { error: signUpError?.message ?? "Something went wrong creating your account." };
  }

  const admin = createAdminClient();
  const { error: insertError } = await admin.from("join_requests").insert({
    user_id: signUpData.user.id,
    first_name: input.firstName,
    last_name: input.lastName,
    email,
    phone: input.phone || null,
    standing: input.standing,
    major: input.major,
    interests: input.interests,
    sms_opt_in: input.smsOptIn,
    directory_opt_in: input.directoryOptIn,
    notes: input.notes || null,
  });

  if (insertError) {
    return { error: insertError.message };
  }

  return {};
}
