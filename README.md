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

Two Auth settings matter:
- **Confirm email** (Authentication → Providers → Email) must stay **on** —
  the signup flow depends on it to prevent someone creating an account with
  an email they don't control.
- **Custom SMTP** (Project Settings → Authentication → SMTP Settings) is
  required for real email delivery — Supabase's default sender is heavily
  rate-limited and not meant for production. This project uses
  [Resend](https://resend.com); its sandbox domain can only email the
  Resend account's own address until a verified sending domain is added.

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

Hosted on Vercel, auto-deploying from the `main` branch. Required
environment variables (set in Vercel's Project Settings → Environment
Variables, matching `.env.local`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
