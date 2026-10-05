const NY_TIME_ZONE = "America/New_York";

/** Today's date in America/New_York, as "YYYY-MM-DD" — safe to compare lexicographically with `event_date`. */
export function nyTodayIso(now: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: NY_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

/**
 * Events only store a date, not an end time, so "hasn't ended" means
 * "hasn't finished its calendar day" in America/New_York — a same-day event
 * stays upcoming through midnight. A null date (TBA) is always upcoming.
 */
export function isEventUpcoming(eventDate: string | null, now: Date = new Date()): boolean {
  return eventDate === null || eventDate >= nyTodayIso(now);
}
