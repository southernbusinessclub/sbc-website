# Club website — lean launch build

Phase 1 of the site. Same design and content as the full v2 build, minus two pages.

## What changed from the full build
- **Shop** and **Members** are removed from the header, the footer, and the router. Their files are parked in `_optional/` untouched.
- **Events** and **Workshops** are now two separate top-level header items instead of a dropdown under Events.
- Account page: the merch-discount card became a dues-status card, the "Member directory" button now points at Events, the directory visibility toggle is gone, and the merch line in the savings list was swapped for an event perk.

## Turning Shop or Members back on
1. `index.html` — uncomment that page's `<script type="text/babel" src="_optional/…">` tag and its route line.
2. `ChromeLean.jsx` — add `'Shop'` and/or `'Members'` to `NAV` and `FOOTER_LINKS`.
3. Optional: restore the Account page bits listed above from `../website-v2/AccountLean.jsx`.

The full build stays intact at `../website-v2/` for the pitch.
