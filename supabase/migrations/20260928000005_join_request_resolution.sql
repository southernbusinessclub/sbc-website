-- Approving/declining a join request from Admin. security invoker on purpose:
-- these lean entirely on the existing RLS policies (members_insert_officer,
-- join_requests_update_officer) rather than re-deriving the same
-- authorization check in a second place. A function body runs in the
-- caller's transaction either way, so the insert + update stay atomic.

create or replace function public.approve_join_request(request_id uuid)
returns public.members
language plpgsql
security invoker
set search_path = public
as $$
declare
  req public.join_requests;
  new_member public.members;
begin
  select * into req from public.join_requests where id = request_id and status = 'pending';
  if not found then
    raise exception 'Join request not found or already resolved.';
  end if;

  insert into public.members
    (user_id, first_name, last_name, email, phone, standing, major, member_since, sms_opt_in, directory_opt_in, interests, notes)
  values
    (req.user_id, req.first_name, req.last_name, req.email, req.phone, req.standing, req.major,
     to_char(now(), 'YYYY'), req.sms_opt_in, req.directory_opt_in, req.interests, req.notes)
  returning * into new_member;

  update public.join_requests
  set status = 'approved', resolved_at = now(), resolved_by = public.current_member_id()
  where id = request_id;

  return new_member;
end;
$$;

grant execute on function public.approve_join_request(uuid) to authenticated;

create or replace function public.decline_join_request(request_id uuid)
returns void
language sql
security invoker
set search_path = public
as $$
  update public.join_requests
  set status = 'declined', resolved_at = now(), resolved_by = public.current_member_id()
  where id = request_id and status = 'pending';
$$;

grant execute on function public.decline_join_request(uuid) to authenticated;
