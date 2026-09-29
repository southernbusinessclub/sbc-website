(() => {
const { Button, Card, Badge, Tag, Tabs, Input, Select, Switch, Icon, Textarea } = window.SouthernBusinessClubDesignSystem_c9c84e;

const ROSTER = [
  { name: 'Steve Jobs', email: 'sjobs@southern.edu', standing: 'Junior', major: 'Business administration', since: '2025', duesPaid: true, attended: 7 },
  { name: 'Jordan Reyes', email: 'jreyes@southern.edu', standing: 'Sophomore', major: 'Finance', since: '2026', duesPaid: false, attended: 2 },
  { name: 'Maya Whitfield', email: 'mwhitfield@southern.edu', standing: 'Senior', major: 'Marketing', since: '2024', duesPaid: true, attended: 12 },
  { name: 'Andrew Kim', email: 'akim@southern.edu', standing: 'Junior', major: 'Accounting', since: '2025', duesPaid: true, attended: 9, officer: 'Treasurer' },
  { name: 'Sarah Boateng', email: 'sboateng@southern.edu', standing: 'Senior', major: 'Management', since: '2024', duesPaid: true, attended: 14, officer: 'President' },
  { name: 'Eli Vargas', email: 'evargas@southern.edu', standing: 'Freshman', major: 'Undecided', since: '2026', duesPaid: false, attended: 1 },
];

const EVENTS = [
  { title: 'Meet your officers', date: 'Sep 24', time: '5:30 PM', location: 'Ruth McKee School of Business', category: 'Social', rsvps: 23, published: true },
  { title: 'Vespers at the Schnells', date: 'Oct 2', time: '5:30 PM', location: "Prof. Ben Schnell's house", category: 'Vespers', rsvps: 31, published: true },
  { title: 'Headshot night', date: 'TBA', time: 'TBA', location: 'Ruth McKee School of Business', category: 'Workshop', rsvps: 8, published: false },
  { title: 'Taco Bell Black Tie', date: 'TBA', time: 'TBA', location: 'Ruth McKee School of Business', category: 'Signature', rsvps: 12, published: false },
];

const REQUESTS = [
  { name: 'Priya Nair', email: 'pnair@southern.edu', standing: 'Sophomore', major: 'Finance', when: '2 days ago' },
  { name: 'Caleb Ortiz', email: 'cortiz@southern.edu', standing: 'Freshman', major: 'Business administration', when: '5 days ago' },
];

const th = { textAlign: 'left', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '0 14px 10px' };
const td = { padding: '14px', fontSize: 14.5, borderTop: '1.5px solid var(--border-hairline)', verticalAlign: 'middle' };

function Stat({ label, value, note }) {
  return (
    <Card variant="sunken" padding="var(--space-5)">
      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, lineHeight: 1, margin: '8px 0 4px' }}>{value}</div>
      <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{note}</div>
    </Card>
  );
}

function RosterTab({ roster, onToggleDues, onNotify }) {
  const [q, setQ] = React.useState('');
  const [filter, setFilter] = React.useState('Everyone');
  const shown = roster.filter((m) => {
    const hit = (m.name + m.email + m.major).toLowerCase().includes(q.toLowerCase());
    const pass = filter === 'Everyone' || (filter === 'Dues unpaid' ? !m.duesPaid : filter === 'Dues paid' ? m.duesPaid : m.officer);
    return hit && pass;
  });
  const unpaid = roster.filter((m) => !m.duesPaid).length;
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        <Stat label="On the roster" value={roster.length} note="Members with an account" />
        <Stat label="Dues unpaid" value={unpaid} note="Cash to Sarah, then flip the switch" />
        <Stat label="Collected" value={'$' + (roster.length - unpaid) * 10} note="At $10 a head, this year" />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', marginBottom: 18, flexWrap: 'wrap' }}>
        <Input label="Search the roster" icon="search" placeholder="Name, email, or major" value={q} onChange={(e) => setQ(e.target.value)} wrapStyle={{ flex: '1 1 260px' }} />
        <Select label="Show" options={['Everyone', 'Dues unpaid', 'Dues paid', 'Officers']} value={filter} onChange={(e) => setFilter(e.target.value)} wrapStyle={{ flex: '0 0 200px' }} />
        <Button variant="outline" onClick={() => onNotify({ title: 'Export started', message: 'A CSV of the current view is on its way to your downloads.' })}>Export CSV</Button>
      </div>
      <Card padding="var(--space-5)">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr><th style={th}>Member</th><th style={th}>Standing</th><th style={th}>Member since</th><th style={th}>Events</th><th style={{ ...th, textAlign: 'right' }}>Dues paid</th></tr></thead>
          <tbody>
            {shown.map((m) => (
              <tr key={m.email}>
                <td style={td}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontWeight: 700 }}>{m.name}</span>
                    {m.officer ? <Badge tone="accent">{m.officer}</Badge> : null}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{m.email} · {m.major}</div>
                </td>
                <td style={{ ...td, color: 'var(--text-muted)' }}>{m.standing}</td>
                <td style={{ ...td, color: 'var(--text-muted)' }}>{m.since}</td>
                <td style={{ ...td, color: 'var(--text-muted)' }}>{m.attended}</td>
                <td style={{ ...td, textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                    {m.duesPaid ? null : <Badge tone="warning">Owes $10</Badge>}
                    <Switch checked={m.duesPaid} onChange={() => onToggleDues(m.email)} />
                  </div>
                </td>
              </tr>
            ))}
            {shown.length === 0 ? <tr><td style={{ ...td, color: 'var(--text-muted)' }} colSpan={5}>Nobody matches that.</td></tr> : null}
          </tbody>
        </table>
      </Card>
      <p style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 14 }}>Dues are cash only, handed to the treasurer. Flipping a switch here records that it happened — the site never takes a payment.</p>
    </div>
  );
}

function EventsTab({ events, onTogglePublished, onNotify }) {
  const [adding, setAdding] = React.useState(false);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <p style={{ margin: 0, fontSize: 14.5, color: 'var(--text-muted)' }}>Unpublished events stay hidden from the public calendar until you switch them on.</p>
        <Button onClick={() => setAdding(!adding)}>{adding ? 'Cancel' : 'Add an event'}</Button>
      </div>
      {adding ? (
        <Card padding="var(--space-6)" style={{ marginBottom: 20 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, textTransform: 'uppercase', margin: '0 0 16px' }}>New event</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 14, marginBottom: 14 }}>
            <Input label="Title" placeholder="Resume workshop" />
            <Input label="Date" placeholder="Oct 14" />
            <Input label="Time" placeholder="5:30 PM" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 14 }}>
            <Input label="Location" placeholder="Ruth McKee School of Business" />
            <Select label="Category" options={['Social', 'Workshop', 'Vespers', 'Service', 'Fundraiser', 'Signature']} />
          </div>
          <Textarea label="Description" placeholder="One or two sentences. This shows on the event card." rows={2} />
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <Button onClick={() => { setAdding(false); onNotify({ title: 'Event saved as a draft', message: 'Publish it when the details are locked in.' }); }}>Save as draft</Button>
            <Button variant="ghost" onClick={() => setAdding(false)}>Cancel</Button>
          </div>
        </Card>
      ) : null}
      <Card padding="var(--space-5)">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr><th style={th}>Event</th><th style={th}>When</th><th style={th}>Category</th><th style={th}>RSVPs</th><th style={{ ...th, textAlign: 'right' }}>Published</th></tr></thead>
          <tbody>
            {events.map((e) => (
              <tr key={e.title}>
                <td style={td}>
                  <div style={{ fontWeight: 700 }}>{e.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{e.location}</div>
                </td>
                <td style={{ ...td, color: 'var(--text-muted)' }}>{e.date} · {e.time}</td>
                <td style={td}><Tag>{e.category}</Tag></td>
                <td style={td}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)' }}><Icon name="users" size={15} />{e.rsvps}</span>
                </td>
                <td style={{ ...td, textAlign: 'right' }}><Switch checked={e.published} onChange={() => onTogglePublished(e.title)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function RequestsTab({ requests, onResolve }) {
  return (
    <div>
      <p style={{ margin: '0 0 18px', fontSize: 14.5, color: 'var(--text-muted)' }}>People who filled out the join form. Approving one adds them to the roster with dues unpaid.</p>
      {requests.length === 0 ? (
        <Card variant="sunken"><p style={{ margin: 0, color: 'var(--text-muted)' }}>Nothing waiting. New signups land here.</p></Card>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {requests.map((r) => (
            <Card key={r.email} padding="var(--space-5)">
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 260px', minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21 }}>{r.name}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 3 }}>{r.email} · {r.standing} · {r.major}</div>
                </div>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Applied {r.when}</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Button variant="ghost" size="sm" onClick={() => onResolve(r, false)}>Decline</Button>
                  <Button size="sm" onClick={() => onResolve(r, true)}>Add to roster</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function AdminLean({ user, onNavigate, onNotify }) {
  const [tab, setTab] = React.useState('Roster');
  const [roster, setRoster] = React.useState(ROSTER);
  const [events, setEvents] = React.useState(EVENTS);
  const [requests, setRequests] = React.useState(REQUESTS);

  const toggleDues = (email) => setRoster((r) => r.map((m) => {
    if (m.email !== email) return m;
    onNotify({ title: m.duesPaid ? 'Marked unpaid' : 'Dues recorded', message: m.name + (m.duesPaid ? ' now shows as owing $10.' : ' is paid up for the year.') });
    return { ...m, duesPaid: !m.duesPaid };
  }));
  const togglePublished = (title) => setEvents((e) => e.map((v) => {
    if (v.title !== title) return v;
    onNotify({ title: v.published ? 'Unpublished' : 'Published', message: v.title + (v.published ? ' is hidden from the calendar.' : ' is live on the calendar.') });
    return { ...v, published: !v.published };
  }));
  const resolve = (r, approved) => {
    setRequests((list) => list.filter((x) => x.email !== r.email));
    if (approved) setRoster((list) => [...list, { name: r.name, email: r.email, standing: r.standing, major: r.major, since: '2026', duesPaid: false, attended: 0 }]);
    onNotify(approved
      ? { title: 'Added to the roster', message: r.name + ' can claim an account now. Dues show unpaid.' }
      : { title: 'Request declined', message: 'No email was sent. Reach out directly if you want to explain.' });
  };

  return (
    <section style={{ padding: '56px 32px 96px', background: 'var(--surface-sunken)', minHeight: '70vh' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
          <div>
            <div className="sbc-eyebrow">Officers only</div>
            <h1 style={{ fontSize: 56, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, margin: '10px 0 8px' }}>Club admin</h1>
            <p style={{ margin: 0, fontSize: 16, color: 'var(--text-muted)' }}>Signed in as {user ? user.name : 'an officer'}{user && user.officer ? ' · ' + user.officer : ''}</p>
          </div>
          <Button variant="outline" onClick={() => onNavigate('Account')}>Back to my account</Button>
        </div>
        <Tabs tabs={['Roster', 'Events', 'Join requests']} value={tab} onChange={setTab} style={{ marginBottom: 26 }} />
        {tab === 'Roster' ? <RosterTab roster={roster} onToggleDues={toggleDues} onNotify={onNotify} /> : null}
        {tab === 'Events' ? <EventsTab events={events} onTogglePublished={togglePublished} onNotify={onNotify} /> : null}
        {tab === 'Join requests' ? <RequestsTab requests={requests} onResolve={resolve} /> : null}
      </div>
    </section>
  );
}
Object.assign(window, { AdminLean });
})();
