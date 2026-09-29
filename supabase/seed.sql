-- Seed data for local development. Deliberately seeds only `events` — the
-- roster (members) and join_requests start empty so every real member sets
-- up their own account through Join or Claim, per the owner's request.

insert into public.events
  (title, event_date, event_time, location, description, category, topic, is_signature, published)
values
  (
    'Meet your officers',
    '2026-09-24', 'Thursday, 5:30 PM', 'Ruth McKee School of Business',
    'Pop in, say hi, grab a snack. No program, no commitment.',
    'Social', 'Networking', false, true
  ),
  (
    'Vespers at the Schnells',
    '2026-10-02', '5:30 PM', 'Prof. Ben Schnell''s house · 4461 Suhrie Road, Ooltewah, TN 37363',
    'Rice bowls, yard games, and worship from Professor Bellino. Worship credit given.',
    'Vespers', 'Worship', false, true
  ),
  (
    'Taco Bell Black Tie',
    null, null, 'Ruth McKee School of Business',
    'Formalwear. Fast food. Free for members.',
    'Signature', 'Traditions', true, false
  ),
  (
    'Headshot night',
    null, null, 'Ruth McKee School of Business',
    'Ten minutes each, edited shots back within the week.',
    'Workshop', 'Workshops', false, false
  ),
  (
    'Mock interview night',
    null, null, 'Ruth McKee School of Business',
    null,
    'Workshop', 'Workshops', false, false
  ),
  (
    'Alumni mixer',
    null, null, 'Ruth McKee School of Business',
    null,
    'Networking', 'Networking', false, false
  ),
  (
    'Service project',
    null, null, 'Off campus',
    null,
    'Service', 'Service', false, false
  );
