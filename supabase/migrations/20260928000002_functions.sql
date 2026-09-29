-- Helper functions used by RLS policies, plus the signup domain restriction.

-- ---------------------------------------------------------------------------
-- Only @southern.edu addresses may create an account. Enforced in the
-- database (not just client-side) since this gates a security property.
-- ---------------------------------------------------------------------------
create or replace function public.enforce_southern_email()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.email !~* '^[a-z0-9._%+-]+@southern\.edu$' then
    raise exception 'Only @southern.edu email addresses may sign up.';
  end if;
  return new;
end;
$$;

create trigger enforce_southern_email_trigger
before insert on auth.users
for each row execute function public.enforce_southern_email();

-- ---------------------------------------------------------------------------
-- current_member_id(): the members.id row for the signed-in user, or null.
-- Marked security definer + stable so RLS policies can call it without
-- recursing through the members table's own RLS.
-- ---------------------------------------------------------------------------
create or replace function public.current_member_id()
returns uuid
language sql
security definer
set search_path = public
stable
as $$
  select m.id from public.members m where m.user_id = auth.uid();
$$;

-- ---------------------------------------------------------------------------
-- is_officer(): true if the signed-in user has a members row with a
-- non-null officer_role.
-- ---------------------------------------------------------------------------
create or replace function public.is_officer()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.members m
    where m.user_id = auth.uid() and m.officer_role is not null
  );
$$;

-- ---------------------------------------------------------------------------
-- check_roster(email): the narrow, public-safe lookup the Claim page's first
-- step needs — before the visitor has an account, so it can't go through a
-- members RLS policy keyed on auth.uid(). Returns at most the fields ClaimLean
-- shows (name, major, standing, since, whether current dues are paid) and
-- only for a row that hasn't been claimed yet.
-- ---------------------------------------------------------------------------
create or replace function public.check_roster(lookup_email text, lookup_school_year text)
returns table (
  member_id uuid,
  first_name text,
  last_name text,
  major text,
  standing text,
  member_since text,
  dues_paid boolean
)
language sql
security definer
set search_path = public
stable
as $$
  select
    m.id,
    m.first_name,
    m.last_name,
    m.major,
    m.standing,
    m.member_since,
    coalesce((select d.paid from public.dues d
              where d.member_id = m.id and d.school_year = lookup_school_year), false)
  from public.members m
  where m.user_id is null
    and lower(m.email) = lower(lookup_email);
$$;

grant execute on function public.check_roster(text, text) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- claim_roster(email): links the currently signed-in user to an unclaimed
-- members row by email. Runs as the caller (not security definer) so RLS's
-- members_claim policy below is what actually authorizes the update; this
-- just gives the app a single RPC to call instead of a raw update.
-- ---------------------------------------------------------------------------
create or replace function public.claim_roster(lookup_email text)
returns public.members
language sql
security invoker
set search_path = public
as $$
  update public.members
  set user_id = auth.uid()
  where user_id is null
    and lower(email) = lower(lookup_email)
    and lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  returning *;
$$;

grant execute on function public.claim_roster(text) to authenticated;

-- ---------------------------------------------------------------------------
-- update_my_profile(): the only path for a member to edit their own row.
-- Security definer so it can bypass the members RLS policies below (which
-- deliberately don't grant members a blanket self-UPDATE, since RLS can't
-- restrict which columns a row policy applies to) while the function body
-- itself only ever touches the caller's own row and these four columns.
-- ---------------------------------------------------------------------------
create or replace function public.update_my_profile(
  new_phone text,
  new_sms_opt_in boolean,
  new_directory_opt_in boolean,
  new_notes text
)
returns public.members
language sql
security definer
set search_path = public
as $$
  update public.members
  set phone = new_phone,
      sms_opt_in = new_sms_opt_in,
      directory_opt_in = new_directory_opt_in,
      notes = new_notes
  where user_id = auth.uid()
  returning *;
$$;

grant execute on function public.update_my_profile(text, boolean, boolean, text) to authenticated;

-- ---------------------------------------------------------------------------
-- Keeps event_feedback.updated_at current whenever a member edits their note.
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger event_feedback_set_updated_at
before update on public.event_feedback
for each row execute function public.set_updated_at();
