# Southern Business Club website

Public site and officer admin console for the Southern Business Club at
Southern Adventist University. Next.js (App Router) + TypeScript, Supabase
(Postgres, Auth, RLS), deployed on Vercel.

See `design-reference/README.md` for the original design spec this was built
from — tokens, copy, data model, and business rules (dues are $10 cash, never
collected online; only `@southern.edu` emails can sign up; unpublished events
stay hidden from the public).

## Local setup

```bash
npm install
cp .env.local.example .env.local   # fill in your Supabase project's values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without a configured Supabase project, the site still runs — public pages
render, and every auth-dependent action (Join, Log in, Claim, Admin) shows a
"hasn't connected yet" message instead of crashing.

## Supabase

Schema, RLS policies, and seed data live in `supabase/migrations/` and
`supabase/seed.sql`. Apply them in order through the Supabase SQL Editor (or
the Supabase CLI once it's set up) against a new project.

Three Auth settings matter:
- **Confirm email** (Authentication → Providers → Email) must stay **on** —
  the signup flow depends on it to prevent someone creating an account with
  an email they don't control.
- **Custom SMTP** (Project Settings → Authentication → SMTP Settings) is
  required for real email delivery — Supabase's default sender is heavily
  rate-limited and not meant for production. This project uses
  [Resend](https://resend.com), sending from `saubusinessclub.com` (verified
  domain — DNS records live at Cloudflare). Without a verified domain,
  Resend's sandbox can only email the Resend account's own address, which
  blocks real signups entirely.
- **Confirm signup email template** (Authentication → Email Templates) must
  link to this app, not to the raw Supabase project URL. Supabase's default
  `{{ .ConfirmationURL }}` points at `<project-ref>.supabase.co/auth/v1/verify`
  — a domain that doesn't match the `saubusinessclub.com` sender. Mail
  security at `@southern.edu` (and most institutional inboxes) treats a
  from/link domain mismatch as a phishing signal and silently drops the
  message after accepting it, which is why Resend shows "Delivered" for
  emails officers never received. Set the template body's link to:
  ```
  {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=signup
  ```
  `src/app/auth/confirm/route.ts` verifies the token server-side and
  redirects into the app, so the link a recipient sees and clicks stays on
  `saubusinessclub.com` end to end.

### Bootstrapping the first officer

There's no self-service way to become an officer (by design — it's a
security boundary, not an oversight). To promote the very first one:

1. Sign up through `/join` with a real `@southern.edu` email.
2. Confirm the email (or, if email delivery isn't working yet, use
   Supabase's dashboard **Authentication → Users → Add User** with
   "Auto Confirm" checked instead).
3. In the SQL Editor:
   ```sql
   insert into public.members (user_id, first_name, last_name, email, member_since, officer_role)
   select id, 'First', 'Last', email, '2026', 'Officer Title'
   from auth.users
   where email = 'their-email@southern.edu';
   ```

Every officer after that can be promoted from `/admin` → Roster → the
"Officer role" field directly — no database access needed.

## Deployment

Live at [saubusinessclub.com](https://www.saubusinessclub.com), hosted on
Vercel, auto-deploying from the `main` branch. Required environment
variables (set in Vercel's Project Settings → Environment Variables,
matching `.env.local`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Domain is registered at Cloudflare; email sends through Resend using
`saubusinessclub.com` as a verified sending domain. All of these — GitHub,
Vercel, Supabase, Resend, Cloudflare — are under accounts tied to
`businessclub@southern.edu`, not any individual officer's personal account,
so none of it depends on one person staying involved.

## Making changes

**Content and club data — events, dues, officer roles, member records** —
never need a code change. Everything in `/admin` takes effect immediately,
live, with no deploy involved.

**Actual code changes** go through Vercel's normal deploy pipeline: edit
locally, test with `npm run dev`, then commit and push via
[GitHub Desktop](https://desktop.github.com) (no git command line needed).
Every push to `main` deploys to the live site **immediately** — there's no
review gate by default.

For anything beyond a trivial fix, don't push straight to `main`. Instead:

1. Create a new branch in GitHub Desktop ("New Branch") instead of
   committing on `main`.
2. Push that branch — Vercel automatically builds a separate **Preview**
   deployment for it, at its own throwaway URL, leaving the live site
   untouched.
3. Check the preview looks right, then open a Pull Request on GitHub and
   merge it into `main` to actually go live.

This costs a few extra minutes and means a mistake gets caught on a preview
link instead of in front of real members.
