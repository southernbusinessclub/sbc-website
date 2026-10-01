import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Service-role client — bypasses RLS entirely. Only ever import this from
 * server-only code (Server Actions, Route Handlers), never from anything
 * that could end up in a client bundle. The `server-only` import above makes
 * that a build error instead of a silent leak.
 */
export function createAdminClient() {
  return createSupabaseClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
