# Handoff: Southern Business Club website (lean launch)

## Overview
Public website and officer admin for the Southern Business Club at Southern Adventist University (Collegedale, TN). Phase 1 "lean launch": public pages **Home, Events, Workshops**, plus **Join, Log in, Claim account, My account** and an officer-only **Admin** console (Roster, Events, Join requests). Shop and Members are parked for Phase 2.

Business rules:
- Dues are **$10 cash per school year**, handed to the treasurer. **The site never takes payments.** Officers record payment by flipping a switch in Admin.
- Joining creates a member record + account. Returning members **claim** an existing roster record by email instead of re-joining.
- After joining, the member texts the treasurer via a prefilled `sms:` link.
- Officers publish/unpublish events; unpublished events are hidden from the public Events page.

## About the design files
Everything here is a **design reference built in HTML/React-in-the-browser** (UMD React + Babel standalone, fake in-memory data) — not production code. Recreate it in a real app. No codebase exists yet, so choose the stack (recommendation below) and rebuild components and pages with its conventions. Component logic in `components/*.jsx` can be reused.

To view the prototype: serve this folder (`npx serve .`) and open `ui_kits/website-lean/index.html`.

## Fidelity
**High fidelity.** Colors, type, spacing, copy and component styling are final. All copy in the JSX files is approved; keep it verbatim unless an open item below says otherwise.

## Recommended stack (confirm with the owner)
- **Next.js (App Router) + TypeScript** on **Vercel**
- **Supabase**: Postgres + Auth (email/password, sign-up restricted to `@southern.edu`) + row-level security for officer data
- Port `tokens/*.css` as-is (CSS custom properties); CSS Modules or plain CSS. No default Tailwind palette.
- Fonts: Big Shoulders Display (800/900) and Karla (400–800) via `next/font/google`
- Icons: `lucide-react`

## Screens (source in `ui_kits/website-lean/` — read the JSX for exact layout, sizes and copy)
**Chrome — ChromeLean.jsx.** Sticky header: 6px stripe split green #569859 / yellow #EAD158; NavBar brand "Southern Business Club", links Home · Events · Workshops. Signed out: "Log in" (ghost) + "Join the club" (primary). Signed in: "Admin" (officers only), "Log out", "My account". Container 1200px, padding 18px 32px. Footer: ink #22201E, 3-col grid (1.4fr 1fr 1fr): brand + Instagram/LinkedIn/email icons; "Club" links (Home, Events, Workshops, Join, Log in, Claim); "Visit us" (Southern Adventist University · Collegedale, Tennessee · businessclub@southern.edu). Bottom row "Business, but fun" / "School of Business".

**Home — HomeLean.jsx.** Green hero "Business, but fun" (104px/0.88, uppercase, 900) with "Become a member" (secondary) and events CTA (inverse); three pillars; upcoming events; join CTA. RSVP opens confirm dialog.

**Events — EventsLean.jsx.** Upcoming/Past tabs, topic filter tags, EventCard grid. TBA events show "Date TBA". Signature event (Taco Bell Black Tie) uses accent/poster style. RSVP → "Save your spot?" dialog → toast "You are on the list".

**Workshops — WorkshopsLean.jsx.** Sunken hero "Get hired, not just involved", program cards, ideas list.

**Join — JoinLean.jsx.** Two columns (1.25fr/1fr, max 1040). Fields: first, last, Southern email, phone, standing, major, password (≥8), interests, text-reminder switch, notes. "Claim your account instead" link. Sticky side: "$10 per school year" benefits card + treasurer contact. On submit: save a pending join request, show prefilled SMS to treasurer: "Hey Sarah! This is {first} {last}. I just registered for the business club. How can I get my dues to you?"

**Log in — LoginLean.jsx.** Southern email + password.

**Claim — ClaimLean.jsx.** Email → if on roster, show record (name, major, standing, since, 2026–27 dues status) → emailed code + set password (≥8, match) → signed in. Not found → offer Join.

**My account — AccountLean.jsx.** Dues status card (paid / owes $10 + text-treasurer link), savings from perks (returning members), attended events with 1–5 star rating + feedback → toast.

**Admin — AdminLean.jsx** (officers only). *Roster:* stats (on roster, dues unpaid, collected = paid × $10), search, filter (Everyone/Dues unpaid/Dues paid/Officers), table with officer badge and dues switch + "Owes $10" badge, Export CSV. *Events:* RSVP counts, Published switch, "Add an event" inline form. *Join requests:* approve/decline.

## Interactions
- Toast bottom-right, 24px inset, auto-dismiss 4.2s. Dialog: ghost "Never mind" + primary action.
- Page navigation scrolls to top. Motion: 120/180/320ms, ease cubic-bezier(.2,.7,.3,1).
- Prototype is desktop-first. Collapse two-column grids under ~860px and add a mobile nav — most traffic will come from Instagram on phones.

## Data model (suggested)
- members: id, first_name, last_name, email (unique, @southern.edu), phone, standing, major, member_since, officer_role (nullable), sms_opt_in, interests[], notes
- dues: member_id, school_year, paid, recorded_by, recorded_at
- join_requests: member fields + status (pending/approved/declined)
- events: title, date (nullable = TBA), time, location, description, category, topic, is_signature, published
- rsvps: event_id, member_id
- attendance / event_feedback: member_id, event_id, rating 1–5, comment
Officers read/write all; members read own rows; public reads published events only.

## Design tokens (`tokens/`, imported by `styles.css`)
- Brand: green-500 #569859, green-600 #3F7645, green-700 #2F5C36; yellow-500 #EAD158, yellow-600 #C9AE35
- Neutrals: paper #F6F3ED (page), paper-2 #EFEAE0 (sunken), white (cards), ink-900 #22201E, ink-700 #413C37 (body), ink-500 #6B635B (muted), ink-200 #D6CFC4 (hairlines)
- Accents: rust-600 #B84A28 (eyebrows, link hover), red-500 #D64C47 (danger), sage-400 #98C39C
- Type: display Big Shoulders Display 800/900 uppercase, leading 0.92; body Karla 16px/1.55; eyebrow 13px, 0.16em, uppercase
- Spacing: 4 8 12 16 20 24 32 40 48 64 80 96 128; container 1200, narrow 720
- Radius: 4 / 8 (controls) / 14 (cards) / 22 / pill. Borders 1.5px / 2.5px
- Shadows warm-tinted; signature hard shadow 5px 5px 0 #22201E

## Components (`components/`)
Button, Card, Badge, Tag, Icon, IconButton, EventCard, Dialog, Toast, Tooltip, Input, Select, Textarea, Checkbox, Radio, Switch, NavBar, Tabs — each with `.jsx`, `.d.ts` props and `.prompt.md` usage notes. Build these first.

## Assets
- `assets/bc-icon.svg` — club icon (ink). Header mark + favicon.
- No photography yet; leave image slots for event photos.

## Open items to confirm with the owner
1. Workshops still lists "Merch discount" and a member-directory card; Join has a "Show me on the member directory" switch. Remove or keep?
2. Join names treasurer "Sarah Chotobar, +1 (407) 912-2508"; Admin sample data lists Andrew Kim as Treasurer, Sarah Boateng as President. Confirm real officers.
3. Email provider for Claim verification codes.
4. Domain; whether to import the existing Excel roster as seed data.
5. `_optional/ShopLean.jsx` and `_optional/MembersLean.jsx` are Phase 2 reference only — don't build.
