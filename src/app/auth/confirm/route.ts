import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Supabase's default confirmation link points straight at the project's
// *.supabase.co REST endpoint, which doesn't match the saubusinessclub.com
// sending domain — university mail security treats that mismatch as a
// phishing signal and silently drops the message after accepting it. The
// Supabase email templates must be updated to link here instead, with
// {{ .TokenHash }} and {{ .Type }}, so the link domain matches the sender.
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/account";

  if (token_hash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({ type, token_hash });
    if (!error) {
      return NextResponse.redirect(new URL(next, origin));
    }
  }

  return NextResponse.redirect(new URL("/join", origin));
}
