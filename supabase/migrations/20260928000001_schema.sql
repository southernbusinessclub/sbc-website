-- Southern Business Club — core schema (README "Data model" section).
-- Members, dues, join requests, events, RSVPs, and event feedback.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- members: the club roster. A row can exist with user_id null (seeded/roster
-- import, or an approved join request not yet claimed) until the person signs
-- in and claims it, or signs up through Join and is linked immediately.
-- ---------------------------------------------------------------------------
create table public.members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users (id) on delete set null,
  first_name text not null,
  last_name text not null,
  email text not null unique,
  phone text,
  standing text,
  major text,
  member_since text not null,
  officer_role text,
  sms_opt_in boolean not null default true,
  directory_opt_in boolean not null default false,
  interests text[] not null default '{}',
  notes text,
  created_at timestamptz not null default now(),
  constraint members_email_is_southern check (email ~* '^[a-z0-9._%+-]+@southern\.edu$')
);

create index members_user_id_idx on public.members (user_id);

-- ---------------------------------------------------------------------------
-- dues: one row per member per school year.
-- ---------------------------------------------------------------------------
create table public.dues (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members (id) on delete cascade,
  school_year text not null,
  paid boolean not null default false,
  recorded_by uuid references public.members (id) on delete set null,
  recorded_at timestamptz,
  unique (member_id, school_year)
);

-- ---------------------------------------------------------------------------
-- join_requests: submitted by the Join form. An officer approves (which
-- creates the members row) or declines.
-- ---------------------------------------------------------------------------
create table public.join_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users (id) on delete cascade,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  standing text,
  major text,
  interests text[] not null default '{}',
  sms_opt_in boolean not null default true,
  directory_opt_in boolean not null default false,
  notes text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'declined')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  resolved_by uuid references public.members (id) on delete set null,
  constraint join_requests_email_is_southern check (email ~* '^[a-z0-9._%+-]+@southern\.edu$')
);

-- ---------------------------------------------------------------------------
-- events: officers publish/unpublish. Unpublished events stay hidden from
-- the public Events page. date is nullable — a null date renders "Date TBA".
-- ---------------------------------------------------------------------------
create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date date,
  event_time text,
  location text,
  description text,
  category text,
  topic text,
  is_signature boolean not null default false,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- rsvps: one per member per event.
-- ---------------------------------------------------------------------------
create table public.rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events (id) on delete cascade,
  member_id uuid not null references public.members (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (event_id, member_id)
);

-- ---------------------------------------------------------------------------
-- event_feedback: a member's 1-5 rating and optional note for an event they
-- attended. Officers read every note; only the member who wrote it can edit it.
-- ---------------------------------------------------------------------------
create table public.event_feedback (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events (id) on delete cascade,
  member_id uuid not null references public.members (id) on delete cascade,
  rating smallint check (rating between 1 and 5),
  comment text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (event_id, member_id)
);
