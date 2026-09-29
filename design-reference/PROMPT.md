Build the Southern Business Club website (lean launch) as a production app.

Read README.md in this folder first — it is the spec. The HTML/JSX in ui_kits/website-lean/ and components/ is a high-fidelity design reference: match its layout, tokens and copy, but don't ship the prototype code.

Before writing code:
1. Confirm the stack with me (README recommends Next.js + TypeScript + Supabase on Vercel) and go through the "Open items" list.
2. Propose a short build plan and wait for my OK.

Then build in this order, checking in after each step:
1. Project setup, tokens (port tokens/*.css as-is), fonts, and the component library from components/.
2. Header, footer, and public pages: Home, Events, Workshops — mobile-responsive.
3. Supabase schema + row-level security from the README data model; seed from the prototype data.
4. Join, Log in, Claim account, My account.
5. Officer Admin: Roster, Events, Join requests.

Rules: the site never takes payments (dues are $10 cash, recorded by officers). Only @southern.edu emails can sign up. Unpublished events stay hidden. Don't build Shop or Members.
