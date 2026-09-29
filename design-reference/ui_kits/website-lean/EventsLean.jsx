(() => {
const { Button, Card, Badge, Tag, Tabs, EventCard, Icon } = window.SouthernBusinessClubDesignSystem_c9c84e;

const ALL = [
  { date: { month: 'Sep', day: 24 }, title: 'Meet your officers', time: 'Thursday, 5:30 PM', location: 'Ruth McKee School of Business', description: 'Pop in, say hi, grab a snack. No program, no commitment.', category: 'Social', topic: 'Networking' },
  { date: { month: 'Oct', day: 2 }, title: 'Vespers at the Schnells', time: '5:30 PM', location: "Prof. Ben Schnell's house · 4461 Suhrie Road, Ooltewah, TN 37363", description: 'Rice bowls, yard games, and worship from Professor Bellino. Worship credit given.', category: 'Vespers', topic: 'Worship' },
  { date: { month: 'Date', day: 'TBA' }, title: 'Taco Bell Black Tie', time: 'Time TBA', location: 'Ruth McKee School of Business', category: 'Signature', topic: 'Traditions', tone: 'accent', poster: true },
  { date: { month: 'Date', day: 'TBA' }, title: 'Headshot night', time: 'Time TBA', location: 'Ruth McKee School of Business', category: 'Workshop', topic: 'Workshops' },
  { date: { month: 'Date', day: 'TBA' }, title: 'Mock interview night', time: 'Time TBA', location: 'Ruth McKee School of Business', category: 'Workshop', topic: 'Workshops' },
  { date: { month: 'Date', day: 'TBA' }, title: 'Alumni mixer', time: 'Time TBA', location: 'Ruth McKee School of Business', category: 'Networking', topic: 'Networking' },
  { date: { month: 'Date', day: 'TBA' }, title: 'Service project', time: 'Time TBA', location: 'Off campus', category: 'Service', topic: 'Service' },
];

const PAST = [];

function EventsLean({ onRsvp }) {
  const [tab, setTab] = React.useState('Upcoming');
  const [topic, setTopic] = React.useState('All');
  const source = tab === 'Upcoming' ? ALL : PAST;
  const list = topic === 'All' ? source : source.filter((e) => e.topic === topic);
  return (
    <div>
      <section style={{ padding: '56px 32px 30px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div className="sbc-eyebrow">2026–27 school year</div>
          <h1 style={{ fontSize: 76, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, margin: '12px 0 14px' }}>Events</h1>
          <p style={{ fontSize: 18, maxWidth: 560, color: 'var(--text-body)' }}>Members are invited to everything we run. Dates are not locked in yet — sign up and we'll text you when they are.</p>
        </div>
      </section>

      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Tabs tabs={['Upcoming', 'Past']} value={tab} onChange={setTab} style={{ marginBottom: 20 }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
            {['All', 'Networking', 'Workshops', 'Worship', 'Service', 'Traditions'].map((t) => (
              <Tag key={t} selected={topic === t} onClick={() => setTopic(t)}>{t}</Tag>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: 28, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {list.map((e) => <EventCard key={e.title} {...e} onRsvp={tab === 'Upcoming' ? onRsvp : undefined} />)}
              {list.length === 0 ? <Card variant="sunken"><p style={{ margin: 0, color: 'var(--text-muted)' }}>Nothing here yet — check back after the next officer meeting.</p></Card> : null}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Card variant="plain">
                <Badge tone="solid">Members only</Badge>
                <h3 style={{ fontSize: 24, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 8px' }}>Officer hours</h3>
                <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 14px' }}>Bring a resume, or just questions. Times posted once the semester settles.</p>
                <Button variant="ghost" size="sm" iconAfter="arrow-right">Book a slot</Button>
              </Card>
              <Card variant="accent">
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Reminders</div>
                <h3 style={{ fontSize: 24, textTransform: 'uppercase', fontWeight: 900, margin: '10px 0 8px' }}>Get the text list</h3>
                <p style={{ fontSize: 14.5, margin: '0 0 14px' }}>One message the morning of each event. Nothing else, ever.</p>
                <Button variant="outline" size="sm">Add my number</Button>
              </Card>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--text-muted)' }}>
                <Icon name="map-pin" size={16} /> Most events are in the Ruth McKee School of Business.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { EventsLean });
})();
