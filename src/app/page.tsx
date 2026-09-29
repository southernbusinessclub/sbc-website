"use client";

import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Dialog,
  EventCard,
  IconButton,
  Input,
  NavBar,
  Radio,
  Select,
  Switch,
  Tabs,
  Tag,
  Textarea,
  Toast,
  Tooltip,
} from "@/components/ui";

export default function ComponentPreviewPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tab, setTab] = useState("Upcoming");
  const [switchOn, setSwitchOn] = useState(true);
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState("a");

  return (
    <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 32 }}>
      <NavBar
        brand="Southern Business Club"
        links={["Home", "Events", "Workshops"]}
        active="Home"
        action={
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Join the club</Button>
          </div>
        }
      />

      <section style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="inverse" style={{ background: "var(--green-500)" }}>Inverse</Button>
        <Button icon="mail">With icon</Button>
        <Button as="a" href="/events" iconAfter="arrow-right">As link</Button>
      </section>

      <section style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Card style={{ width: 240 }}>Plain card</Card>
        <Card variant="poster" style={{ width: 240 }}>Poster card</Card>
        <Card variant="sunken" style={{ width: 240 }}>Sunken card</Card>
        <Card variant="brand" style={{ width: 240 }}>Brand card</Card>
        <Card variant="accent" style={{ width: 240 }}>Accent card</Card>
      </section>

      <section style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Badge tone="brand">Brand</Badge>
        <Badge tone="accent">Accent</Badge>
        <Badge tone="success">Success</Badge>
        <Badge tone="warning">Warning</Badge>
        <Badge tone="danger">Danger</Badge>
        <Badge tone="neutral">Neutral</Badge>
        <Badge tone="solid" icon="badge-check">Solid</Badge>
      </section>

      <section style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag selected>Networking</Tag>
        <Tag>Workshops</Tag>
        <Tag onRemove={() => {}}>Removable</Tag>
      </section>

      <section style={{ display: "flex", gap: 8 }}>
        <IconButton icon="search" label="Search" />
        <IconButton icon="download" label="Download" variant="solid" />
        <Tooltip label="Add to calendar">
          <IconButton icon="calendar-plus" label="Add to calendar" variant="ghost" />
        </Tooltip>
      </section>

      <section style={{ maxWidth: 480 }}>
        <EventCard
          title="Meet your officers"
          date={{ month: "Sep", day: 24 }}
          time="Thursday, 5:30 PM"
          location="Ruth McKee School of Business"
          description="Pop in, say hi, grab a snack. No program, no commitment."
          category="Social"
          onRsvp={() => setDialogOpen(true)}
        />
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
        <Input label="Southern email" icon="mail" placeholder="you@southern.edu" />
        <Select label="Class standing" options={["Freshman", "Sophomore", "Junior", "Senior"]} />
        <Textarea label="Notes" placeholder="Optional" />
        <Checkbox label="Text me reminders" checked={checked} onChange={() => setChecked(!checked)} />
        <Radio label="Option A" name="r" checked={radio === "a"} onChange={() => setRadio("a")} />
        <Radio label="Option B" name="r" checked={radio === "b"} onChange={() => setRadio("b")} />
        <Switch label="Show on directory" checked={switchOn} onChange={() => setSwitchOn(!switchOn)} />
      </section>

      <section>
        <Tabs tabs={["Upcoming", "Past"]} value={tab} onChange={setTab} />
      </section>

      <section>
        <Toast title="You are on the list" message="We will text you when the date is locked in." />
      </section>

      <Dialog
        open={dialogOpen}
        title="Save your spot?"
        onClose={() => setDialogOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>Never mind</Button>
            <Button onClick={() => setDialogOpen(false)}>RSVP</Button>
          </>
        }
      >
        You will get a text reminder the morning of the event.
      </Dialog>
    </div>
  );
}
