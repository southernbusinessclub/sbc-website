const NY_TIME_ZONE = "America/New_York";
const SITE_URL = "https://saubusinessclub.com";
const DEFAULT_DURATION_MINUTES = 120;

export interface CalendarEventInput {
  id: string;
  title: string;
  /** "YYYY-MM-DD" */
  dateIso: string;
  /** Free-text admin field, e.g. "5:30 PM", "Doors at 6", or null. */
  timeRaw: string | null;
  location?: string | null;
  description?: string | null;
}

function pad(n: number, len = 2): string {
  return String(n).padStart(len, "0");
}

/**
 * Parses the free-text event-time field. Only accepts forms that are
 * unambiguous: an explicit AM/PM marker, or a colon-separated 24-hour value
 * whose hour (13-23, or exactly 0) could never be a 12-hour clock reading.
 * A bare "6" or "6:00" with no marker is genuinely ambiguous admin input —
 * treated as unparseable, which falls back to an all-day event rather than
 * guessing.
 */
export function parseEventTime(raw: string | null): { hour: number; minute: number } | null {
  if (!raw) return null;

  const meridiemMatch = raw.match(/(\d{1,2}):?(\d{2})?\s*([ap])\.?m\.?/i);
  if (meridiemMatch) {
    const hour12 = parseInt(meridiemMatch[1], 10);
    const minute = meridiemMatch[2] ? parseInt(meridiemMatch[2], 10) : 0;
    if (hour12 >= 1 && hour12 <= 12 && minute <= 59) {
      const isPm = meridiemMatch[3].toLowerCase() === "p";
      let hour = hour12;
      if (isPm && hour !== 12) hour += 12;
      if (!isPm && hour === 12) hour = 0;
      return { hour, minute };
    }
    return null;
  }

  const militaryMatch = raw.match(/\b([01]\d|2[0-3]):([0-5]\d)\b/);
  if (militaryMatch) {
    const hour = parseInt(militaryMatch[1], 10);
    const minute = parseInt(militaryMatch[2], 10);
    if (hour >= 13 || hour === 0) return { hour, minute };
  }

  return null;
}

/** The America/New_York UTC offset, in minutes, in effect at a given instant. */
function nyOffsetMinutesAt(utcGuessMs: number): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: NY_TIME_ZONE,
    timeZoneName: "shortOffset",
    hour: "2-digit",
  }).formatToParts(new Date(utcGuessMs));
  const tzName = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT+0";
  const match = tzName.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);
  if (!match) return 0;
  const sign = match[1] === "-" ? -1 : 1;
  const hours = parseInt(match[2], 10);
  const minutes = match[3] ? parseInt(match[3], 10) : 0;
  return sign * (hours * 60 + minutes);
}

/**
 * Converts an America/New_York wall-clock reading to the correct UTC
 * instant, honoring whichever of EST/EDT is in effect on that date — so a
 * date either side of a DST change still lands on the right UTC hour.
 */
function nyWallTimeToUtc(year: number, month: number, day: number, hour: number, minute: number): Date {
  const guessUtcMs = Date.UTC(year, month - 1, day, hour, minute, 0);
  const offsetMin = nyOffsetMinutesAt(guessUtcMs);
  return new Date(guessUtcMs - offsetMin * 60_000);
}

function formatIcsUtc(d: Date): string {
  return (
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
  );
}

function formatDateOnly(year: number, month: number, day: number): string {
  return `${year}${pad(month)}${pad(day)}`;
}

interface ResolvedTimedEvent {
  allDay: false;
  startUtc: Date;
  endUtc: Date;
}

interface ResolvedAllDayEvent {
  allDay: true;
  startDateOnly: string;
  /** Exclusive, per RFC 5545 (the day after the event). */
  endDateOnly: string;
}

type ResolvedCalendarEvent = ResolvedTimedEvent | ResolvedAllDayEvent;

function resolveCalendarEvent(dateIso: string, timeRaw: string | null): ResolvedCalendarEvent {
  const [year, month, day] = dateIso.split("-").map((n) => parseInt(n, 10));
  const time = parseEventTime(timeRaw);

  if (!time) {
    const startDateOnly = formatDateOnly(year, month, day);
    const nextDay = new Date(Date.UTC(year, month - 1, day + 1));
    const endDateOnly = formatDateOnly(nextDay.getUTCFullYear(), nextDay.getUTCMonth() + 1, nextDay.getUTCDate());
    return { allDay: true, startDateOnly, endDateOnly };
  }

  const startUtc = nyWallTimeToUtc(year, month, day, time.hour, time.minute);
  const endUtc = new Date(startUtc.getTime() + DEFAULT_DURATION_MINUTES * 60_000);
  return { allDay: false, startUtc, endUtc };
}

function escapeIcsText(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

/** Folds a line to RFC 5545's 75-octet limit, continuing with CRLF + a space. */
function foldIcsLine(line: string): string {
  if (line.length <= 75) return line;
  const chunks: string[] = [];
  let i = 0;
  while (i < line.length) {
    const len = i === 0 ? 75 : 74;
    chunks.push(line.slice(i, i + len));
    i += len;
  }
  return chunks.join("\r\n ");
}

export function buildIcsContent(input: CalendarEventInput): string {
  const resolved = resolveCalendarEvent(input.dateIso, input.timeRaw);
  const uid = `${input.id}@saubusinessclub.com`;
  const url = `${SITE_URL}/events`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Southern Business Club//Events//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatIcsUtc(new Date())}`,
    resolved.allDay
      ? `DTSTART;VALUE=DATE:${resolved.startDateOnly}`
      : `DTSTART:${formatIcsUtc(resolved.startUtc)}`,
    resolved.allDay ? `DTEND;VALUE=DATE:${resolved.endDateOnly}` : `DTEND:${formatIcsUtc(resolved.endUtc)}`,
    `SUMMARY:${escapeIcsText(input.title)}`,
  ];
  if (input.description) lines.push(`DESCRIPTION:${escapeIcsText(input.description)}`);
  if (input.location) lines.push(`LOCATION:${escapeIcsText(input.location)}`);
  lines.push(`URL:${url}`);
  lines.push("END:VEVENT");
  lines.push("END:VCALENDAR");

  return lines.map(foldIcsLine).join("\r\n") + "\r\n";
}

export function buildGoogleCalendarUrl(input: CalendarEventInput): string {
  const resolved = resolveCalendarEvent(input.dateIso, input.timeRaw);
  const dates = resolved.allDay
    ? `${resolved.startDateOnly}/${resolved.endDateOnly}`
    : `${formatIcsUtc(resolved.startUtc)}/${formatIcsUtc(resolved.endUtc)}`;

  const params = new URLSearchParams({ action: "TEMPLATE", text: input.title, dates });
  if (input.description) params.set("details", input.description);
  if (input.location) params.set("location", input.location);

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/** A safe, human-readable filename for the downloaded .ics file. */
export function icsFileName(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug || "event"}.ics`;
}
