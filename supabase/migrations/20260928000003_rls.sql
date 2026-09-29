-- Row-level security: officers read/write all; members read their own rows;
-- the public reads published events only. (README "Data model" closing line.)

alter table public.members enable row level security;
alter table public.dues enable row level security;
alter table public.join_requests enable row level security;
alter table public.events enable row level security;
alter table public.rsvps enable row level security;
alter table public.event_feedback enable row level security;

-- ---------------------------------------------------------------------------
-- members
-- ---------------------------------------------------------------------------
create policy members_select_self_or_officer on public.members
  for select
  using (user_id = auth.uid() or public.is_officer());

-- UPDATE also needs a matching SELECT policy on the row being updated (this
-- is documented Postgres RLS behavior, not just a nicety) — without this, a
-- member can never claim an unclaimed roster row, because members_claim_self
-- below could authorize the UPDATE but the row would still be invisible.
create policy members_select_claimable on public.members
  for select
  using (user_id is null and lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')));

create policy members_insert_officer on public.members
  for insert
  with check (public.is_officer());

create policy members_update_officer on public.members
  for update
  using (public.is_officer())
  with check (public.is_officer());

-- Lets a newly-authenticated member link an existing, unclaimed roster row
-- to their own account — only when the email matches their verified login.
create policy members_claim_self on public.members
  for update
  using (user_id is null and lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')))
  with check (user_id = auth.uid() and lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')));

create policy members_delete_officer on public.members
  for delete
  using (public.is_officer());

-- ---------------------------------------------------------------------------
-- dues
-- ---------------------------------------------------------------------------
create policy dues_select_self_or_officer on public.dues
  for select
  using (member_id = public.current_member_id() or public.is_officer());

create policy dues_write_officer on public.dues
  for all
  using (public.is_officer())
  with check (public.is_officer());

-- ---------------------------------------------------------------------------
-- join_requests
-- ---------------------------------------------------------------------------
create policy join_requests_select_self_or_officer on public.join_requests
  for select
  using (user_id = auth.uid() or public.is_officer());

create policy join_requests_insert_self on public.join_requests
  for insert
  with check (user_id = auth.uid() and status = 'pending');

create policy join_requests_update_officer on public.join_requests
  for update
  using (public.is_officer())
  with check (public.is_officer());

create policy join_requests_delete_officer on public.join_requests
  for delete
  using (public.is_officer());

-- ---------------------------------------------------------------------------
-- events — published events are public; officers see and manage everything.
-- ---------------------------------------------------------------------------
create policy events_select_published on public.events
  for select
  using (published = true);

create policy events_select_officer on public.events
  for select
  using (public.is_officer());

create policy events_write_officer on public.events
  for all
  using (public.is_officer())
  with check (public.is_officer());

-- ---------------------------------------------------------------------------
-- rsvps
-- ---------------------------------------------------------------------------
create policy rsvps_select_self_or_officer on public.rsvps
  for select
  using (member_id = public.current_member_id() or public.is_officer());

create policy rsvps_insert_self on public.rsvps
  for insert
  with check (
    member_id = public.current_member_id()
    and exists (select 1 from public.events e where e.id = event_id and e.published)
  );

create policy rsvps_delete_self_or_officer on public.rsvps
  for delete
  using (member_id = public.current_member_id() or public.is_officer());

-- ---------------------------------------------------------------------------
-- event_feedback — a member rates/comments on their own attendance; officers
-- read every note (README: "Officers only. Your name is attached.").
-- ---------------------------------------------------------------------------
create policy event_feedback_select_self_or_officer on public.event_feedback
  for select
  using (member_id = public.current_member_id() or public.is_officer());

create policy event_feedback_insert_self on public.event_feedback
  for insert
  with check (member_id = public.current_member_id());

create policy event_feedback_update_self on public.event_feedback
  for update
  using (member_id = public.current_member_id())
  with check (member_id = public.current_member_id());

create policy event_feedback_delete_self_or_officer on public.event_feedback
  for delete
  using (member_id = public.current_member_id() or public.is_officer());
