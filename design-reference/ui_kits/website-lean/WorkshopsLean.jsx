(() => {
const { Button, Card, Badge, Icon, Tooltip, IconButton } = window.SouthernBusinessClubDesignSystem_c9c84e;

const PROGRAMS = [
  { icon: 'camera', title: 'Headshot studio', when: 'Included with membership', body: 'A photographer, a backdrop, and ten minutes each. You leave with a shot you can actually use.', tone: 'brand' },
  { icon: 'mic', title: 'Mock interviews', when: 'Included with membership', body: 'Twenty minutes across the table from someone who will tell you the truth, and notes on the spot.', tone: 'accent' },
  { icon: 'shopping-bag', title: 'Merch discount', when: 'Members only', body: 'Club shirts and everything else we print, at the member price.', tone: 'brand' },
  { icon: 'users', title: 'The member community', body: 'Access to a society of business-minded people on this campus — and the directory to reach them.', when: 'Members only', tone: 'accent' },
];

const IDEAS = ['Resume clinic', 'Alumni mentor matching', 'Grad school panel', 'Case night'];

function WorkshopsLean() {
  return (
    <div>
      <section style={{ background: 'var(--surface-sunken)', padding: '56px 32px 60px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'end' }}>
          <div>
            <div className="sbc-eyebrow">Professional development</div>
            <h1 style={{ fontSize: 76, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, margin: '12px 0 14px' }}>Get hired,<br />not just involved</h1>
            <p style={{ fontSize: 18, maxWidth: 520 }}>What membership actually gets you, beyond showing up. Everything here is included in the $10.</p>
          </div>
          <Card variant="poster" style={{ background: 'var(--white)' }}>
            <Badge tone="brand" icon="calendar-days">Coming up</Badge>
            <h3 style={{ fontSize: 26, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 8px' }}>Headshot sign-ups</h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 16px' }}>Ruth McKee School of Business. Slots open once we set the date — members get first pick.</p>
            <Button>Get notified</Button>
          </Card>
        </div>
      </section>
      <section style={{ padding: '72px 32px 80px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {PROGRAMS.map((p) => (
              <Card key={p.title} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 'var(--radius-md)', background: p.tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)', color: p.tone === 'accent' ? 'var(--yellow-700)' : 'var(--green-700)' }}><Icon name={p.icon} size={22} /></span>
                  <Tooltip label="Add to calendar"><IconButton icon="calendar-plus" label="Add to calendar" variant="ghost" size="sm" /></Tooltip>
                </div>
                <Badge tone="neutral">{p.when}</Badge>
                <h3 style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 8px' }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)' }}>{p.body}</p>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: 56, paddingTop: 34, borderTop: '2px solid var(--border-hairline)' }}>
            <div className="sbc-eyebrow" style={{ marginBottom: 10 }}>On the table</div>
            <h2 style={{ fontSize: 40, textTransform: 'uppercase', fontWeight: 900, lineHeight: 0.95, marginBottom: 8 }}>Ideas we're chasing</h2>
            <p style={{ fontSize: 16.5, color: 'var(--text-muted)', maxWidth: 560, marginBottom: 20 }}>Not promises yet. If one of these is the reason you'd join, tell an officer and we'll move it up the list.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {IDEAS.map((i) => <Badge key={i} tone="neutral">{i}</Badge>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { WorkshopsLean });
})();
