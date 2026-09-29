-- What an event would have cost a non-member, if anything — powers the
-- "saved as a member" stat on My Account. Null means "no stated value".
alter table public.events add column member_value_usd numeric(6, 2);
