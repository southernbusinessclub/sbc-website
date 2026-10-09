"use client";

import { useState } from "react";
import { Button, Dialog, IconButton, Tooltip } from "@/components/ui";
import { buildGoogleCalendarUrl, buildIcsContent, icsFileName, type CalendarEventInput } from "@/lib/calendar-event";

export function AddToCalendar(input: CalendarEventInput) {
  const [open, setOpen] = useState(false);

  const downloadIcs = () => {
    const ics = buildIcsContent(input);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = icsFileName(input.title);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setOpen(false);
  };

  return (
    <>
      <Tooltip label="Add to calendar">
        <IconButton
          icon="calendar-plus"
          label="Add to calendar"
          variant="ghost"
          size="sm"
          onClick={() => setOpen(true)}
        />
      </Tooltip>

      <Dialog
        open={open}
        title="Add to calendar"
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Never mind
            </Button>
            <Button
              as="a"
              href={buildGoogleCalendarUrl(input)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Google Calendar
            </Button>
            <Button variant="outline" onClick={downloadIcs}>
              Apple / Outlook (.ics)
            </Button>
          </>
        }
      >
        Save {input.title} to your calendar.
      </Dialog>
    </>
  );
}
