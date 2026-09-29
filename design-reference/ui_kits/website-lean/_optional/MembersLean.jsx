(() => {
const { Button, Card, Badge, Tag, Icon } = window.SouthernBusinessClubDesignSystem_c9c84e;

// Placeholder rosters — swap for the real thing once we pull the class lists.
const ROSTER = {
  '2026–27': [
    ['Andrew Cornelius', 'Business administration', 'Senior', 'President'],
    ['Sarah Chotobar', 'Accounting', 'Junior', 'Treasurer'],
    ['Maya Okonkwo', 'Finance', 'Junior'],
    ['Dev Patel', 'Marketing', 'Sophomore'],
    ['Lena Fischer', 'Business administration', 'Senior'],
    ['Jonah Reyes', 'Accounting', 'Freshman'],
    ['Tessa Bright', 'Not business — just interested', 'Sophomore'],
    ['Caleb Nwosu', 'Finance', 'Senior'],
  ],
  '2025–26': [
    ['Priya Raman', 'Marketing', 'Senior'],
    ['Eli Barron', 'Business administration', 'Senior'],
    ['Noor Haddad', 'Accounting', 'Junior'],
    ['Grant Whitlow', 'Finance', 'Junior'],
  ],
  '2024–25': [
    ['Isabel Moreno', 'Business administration', 'Senior'],
    ['Theo Lindqvist', 'Finance', 'Senior'],
    ['Amara Diallo', 'Marketing', 'Junior'],
  ],
};
const YEARS = Object.keys(ROSTER);

function initials(name) { return name.split(' ').map((p) => p[0]).slice(0, 2).join(''); }

function Gate({ onNavigate, onLogin }) {
  return (
    <section style={{ padding: '80px 32px 110px', background: 'var(--surface-sunken)', minHeight: '62vh' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 62, height: 62, borderRadius: 'var(--radius-lg)', background: 'var(--surface-brand)', color: 'var(--yellow-500)', marginBottom: 20 }}><Icon name="lock" size={28} /></span>
        <div className="sbc-eyebrow">Members only</div>
        <h1 style={{ fontSize: 62, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, margin: '12px 0 14px' }}>The directory<br />is behind the door</h1>
        <p style={{ fontSize: 17.5, color: 'var(--text-body)', marginBottom: 26 }}>Every class going back to the year the club started, and the people in it. Members only — log in, or join for $10 and you're in.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" onClick={onLogin}>Log in</Button>
          <Button variant="outline" size="lg" iconAfter="arrow-right" onClick={() => onNavigate('Join')}>Become a member</Button>
        </div>
      </div>
    </section>
  );
}

function MembersLean({ onNavigate, user, onLogin }) {
  const [year, setYear] = React.useState(YEARS[0]);
  if (!user) return <Gate onNavigate={onNavigate} onLogin={onLogin} />;
  const list = ROSTER[year];
  return (
    <div>
      <section style={{ padding: '56px 32px 30px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div className="sbc-eyebrow">Directory</div>
          <h1 style={{ fontSize: 76, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, margin: '12px 0 14px' }}>Members</h1>
          <p style={{ fontSize: 18, maxWidth: 580, color: 'var(--text-body)' }}>Every class, going back to the year the club started. Members choose whether they show up here when they sign up.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 14, padding: '7px 13px', borderRadius: 999, background: 'var(--surface-brand-soft)', color: 'var(--green-700)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13 }}><Icon name="lock-open" size={15} />Members only · you're signed in as {user.name}</div>
        </div>
      </section>

      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
            {YEARS.map((y) => <Tag key={y} selected={year === y} onClick={() => setYear(y)}>{y}</Tag>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: 28, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, lineHeight: 1, color: 'var(--text-heading)' }}>{list.length}</span>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>members · class of {year}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
                {list.map(([name, major, standing, role]) => (
                  <Card key={name} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 'var(--space-5)' }}>
                    <span style={{ flex: 'none', width: 48, height: 48, borderRadius: 'var(--radius-md)', background: role ? 'var(--yellow-500)' : 'var(--surface-brand-soft)', color: role ? 'var(--ink-900)' : 'var(--green-700)', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.02em' }}>{initials(name)}</span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15.5, color: 'var(--text-heading)' }}>{name}</span>
                        {role ? <Badge tone="accent">{role}</Badge> : null}
                      </div>
                      <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 2 }}>{major} · {standing}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Card variant="brand">
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--yellow-500)' }}>Coming next</div>
                <h3 style={{ fontSize: 26, textTransform: 'uppercase', fontWeight: 900, margin: '10px 0 8px', color: 'var(--white)' }}>A real contact list</h3>
                <p style={{ fontSize: 14.5, margin: 0, opacity: 0.92 }}>The long-term plan: every member and alum, searchable by major and industry, so you can find the person who already did the thing you're trying to do.</p>
              </Card>
              <Card variant="plain">
                <Badge tone="neutral">Privacy</Badge>
                <h3 style={{ fontSize: 22, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 8px' }}>Opt in, opt out</h3>
                <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 14px' }}>The directory shows your name, major, and class year. Nothing else, and only if you said yes on the form.</p>
                <Button variant="ghost" size="sm" iconAfter="arrow-right" onClick={() => onNavigate('Join')}>Add me to the list</Button>
              </Card>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--text-muted)' }}>
                <span style={{ display: 'inline-flex', marginTop: 1 }}><Icon name="info" size={16} /></span>
                Rosters before this year are being rebuilt from old sign-up sheets. Names may be missing.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { MembersLean });
})();
