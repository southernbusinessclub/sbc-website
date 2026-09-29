(() => {
const { Button, Card, Badge, Tag, Icon, IconButton, Textarea, Switch, Tooltip } = window.SouthernBusinessClubDesignSystem_c9c84e;

const SAVINGS = [
  { icon: 'camera', label: 'Free professional headshots', detail: 'Headshot night · local studio rate', amount: 40 },
  { icon: 'utensils', label: 'Free dinner at the alumni mixer', detail: 'Guests paid $10', amount: 10 },
  { icon: 'utensils', label: 'Free entry, Taco Bell Black Tie', detail: 'Guests paid $5', amount: 5 },
];

const ATTENDED = [
  { title: 'Taco Bell Black Tie', when: 'Last year', category: 'Signature', tone: 'accent' },
  { title: 'Headshot night', when: 'Last year', category: 'Workshop' },
  { title: 'Mock interview night', when: 'Last year', category: 'Workshop' },
  { title: 'Alumni mixer', when: 'Last year', category: 'Networking' },
];

function Stars({ value, onChange }) {
  const [hover, setHover] = React.useState(0);
  return (
    <div style={{ display: 'flex', gap: 2 }} onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => {
        const on = n <= (hover || value);
        return (
          <button key={n} type="button" aria-label={n + ' star' + (n > 1 ? 's' : '')} onMouseEnter={() => setHover(n)} onClick={() => onChange(n)}
            style={{ background: 'none', border: 'none', padding: 2, cursor: 'pointer', lineHeight: 0, color: on ? 'var(--yellow-600)' : 'var(--border-hairline)', transition: 'color var(--dur-fast) var(--ease-standard)' }}>
            <Icon name={on ? 'star' : 'star'} size={22} style={on ? {} : { opacity: 0.85 }} />
          </button>
        );
      })}
    </div>
  );
}

const TREASURER_TEL = '+14079122508';

function AccountLean({ user, onNavigate, onLogout, onSaveFeedback }) {
  const paid = !!user.duesPaid;
  const veteran = user.since !== '2026';
  const savings = veteran ? SAVINGS : [];
  const attended = veteran ? ATTENDED : [];
  const [ratings, setRatings] = React.useState({ 'Taco Bell Black Tie': 5, 'Headshot night': 4 });
  const [open, setOpen] = React.useState(null);
  const [notes, setNotes] = React.useState({ 'Taco Bell Black Tie': 'Best night of the semester. More tacos next time.' });
  const [texts, setTexts] = React.useState(true);
  const [directory, setDirectory] = React.useState(true);
  const saved = savings.reduce((s, r) => s + r.amount, 0);
  const rated = attended.filter((e) => ratings[e.title]).length;
  const stats = [
    ['calendar-check', attended.length, 'events attended'],
    ['piggy-bank', '$' + saved, 'saved as a member'],
    paid ? ['wallet', '2026–27', 'dues paid'] : ['wallet', '$10', 'dues owed'],
    ['star', rated + '/' + attended.length, 'events rated'],
  ];
  return (
    <div>
      <section style={{ background: 'var(--surface-brand)', color: 'var(--text-on-brand)', padding: '52px 32px 56px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ flex: 'none', width: 78, height: 78, borderRadius: 'var(--radius-lg)', background: 'var(--yellow-500)', color: 'var(--ink-900)', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{user.initials}</span>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--yellow-500)' }}>Member since {user.since}</div>
              <h1 style={{ fontSize: 60, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, color: 'var(--white)', margin: '8px 0 8px' }}>{user.name}</h1>
              <div style={{ fontSize: 16, opacity: 0.92 }}>{user.major} · {user.standing} · {user.email}</div>
              {paid ? <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 12, padding: '6px 12px', borderRadius: 999, background: 'var(--yellow-500)', color: 'var(--ink-900)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13 }}><Icon name="badge-check" size={15} />Dues current through 2026–27</div> : null}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <Button variant="inverse" onClick={() => onNavigate('Events')}>See what's coming up</Button>
              <Button variant="secondary" icon="log-out" onClick={onLogout}>Log out</Button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginTop: 38 }}>
            {stats.map(([icon, n, l]) => (
              <div key={l} style={{ background: 'rgba(246,243,237,.10)', border: '1px solid rgba(246,243,237,.18)', borderRadius: 'var(--radius-lg)', padding: '18px 20px' }}>
                <span style={{ color: 'var(--yellow-500)', display: 'inline-flex', marginBottom: 10 }}><Icon name={icon} size={20} /></span>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 46, lineHeight: 0.9, color: 'var(--white)' }}>{n}</div>
                <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.8, marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!paid ? (
      <section style={{ padding: '24px 32px 0' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Card variant="plain" style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', borderLeft: '6px solid var(--yellow-500)' }}>
            <span style={{ color: 'var(--green-700)', display: 'inline-flex' }}><Icon name="wallet" size={22} /></span>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--text-heading)' }}>Your 2026–27 dues aren't paid</div>
              <div style={{ fontSize: 14.5, color: 'var(--text-muted)' }}>Dues are $10 each school year. Hand Sarah cash at any event — or if you already paid her this year, text her and she'll fix the record.</div>
            </div>
            <Button as="a" href={'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent('Hey Sarah! This is ' + user.name + '. Checking on my club dues.')} variant="outline" style={{ textDecoration: 'none' }}>Text Sarah</Button>
          </Card>
        </div>
      </section>
      ) : null}

      <section style={{ padding: '56px 32px 80px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: 28, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            <div>
              <div className="sbc-eyebrow" style={{ marginBottom: 10 }}>The math</div>
              <h2 style={{ fontSize: 40, textTransform: 'uppercase', fontWeight: 900, lineHeight: 0.95, marginBottom: 6 }}>Your $10, so far</h2>
              <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 18, maxWidth: 520 }}>What membership has been worth to you this year, based on what you've actually shown up to.</p>
              {savings.length === 0 ? (
                <Card variant="sunken">
                  <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)' }}>Nothing to add up yet. Show up to a headshot night or a free member dinner and this fills in on its own.</p>
                </Card>
              ) : (
              <Card padding="0" style={{ overflow: 'hidden' }}>
                {savings.map((r) => (
                  <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderBottom: '1.5px solid var(--border-hairline)' }}>
                    <span style={{ flex: 'none', width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--surface-brand-soft)', color: 'var(--green-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={r.icon} size={19} /></span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15.5, color: 'var(--text-heading)' }}>{r.label}</div>
                      <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{r.detail}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, color: 'var(--text-heading)' }}>${r.amount}</div>
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '18px 20px', background: 'var(--surface-accent)', color: 'var(--text-on-accent)' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Saved so far · {saved / 10}× your dues</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 42, lineHeight: 0.9 }}>${saved}</div>
                </div>
              </Card>
              )}
            </div>

            <div>
              <div className="sbc-eyebrow" style={{ marginBottom: 10 }}>Feedback</div>
              <h2 style={{ fontSize: 40, textTransform: 'uppercase', fontWeight: 900, lineHeight: 0.95, marginBottom: 6 }}>Events you attended</h2>
              <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 18, maxWidth: 520 }}>Rate them honestly. The officers read every note before planning the next one.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {attended.length === 0 ? (
                  <Card variant="sunken" style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
                    <p style={{ margin: 0, flex: 1, minWidth: 240, fontSize: 15, color: 'var(--text-muted)' }}>You haven't been to one yet. Meet your officers is on September 24 — start there.</p>
                    <Button variant="outline" size="sm" iconAfter="arrow-right" onClick={() => onNavigate('Events')}>See the calendar</Button>
                  </Card>
                ) : null}
                {attended.map((e) => {
                  const isOpen = open === e.title;
                  return (
                    <Card key={e.title} variant={e.tone === 'accent' ? 'poster' : 'plain'}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 200 }}>
                          <Badge tone={e.tone === 'accent' ? 'accent' : 'neutral'}>{e.category}</Badge>
                          <h3 style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 900, margin: '10px 0 4px' }}>{e.title}</h3>
                          <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{e.when} · Ruth McKee School of Business</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                          <Stars value={ratings[e.title] || 0} onChange={(n) => { setRatings({ ...ratings, [e.title]: n }); setOpen(e.title); }} />
                          <Button variant="ghost" size="sm" iconAfter={isOpen ? 'chevron-up' : 'chevron-down'} onClick={() => setOpen(isOpen ? null : e.title)}>
                            {notes[e.title] ? 'Edit note' : 'Leave a note'}
                          </Button>
                        </div>
                      </div>
                      {isOpen ? (
                        <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1.5px solid var(--border-hairline)' }}>
                          <Textarea label="What worked, what didn't?" rows={3} value={notes[e.title] || ''} onChange={(ev) => setNotes({ ...notes, [e.title]: ev.target.value })} hint="Officers only. Your name is attached." />
                          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                            <Button size="sm" onClick={() => { setOpen(null); onSaveFeedback(e.title); }}>Save feedback</Button>
                            <Button variant="ghost" size="sm" onClick={() => setOpen(null)}>Cancel</Button>
                          </div>
                        </div>
                      ) : notes[e.title] ? (
                        <p style={{ margin: '14px 0 0', fontSize: 14.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>“{notes[e.title]}”</p>
                      ) : null}
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 96 }}>
            <Card variant="brand">
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--yellow-500)' }}>Dues</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 52, lineHeight: 0.92, color: 'var(--white)', margin: '10px 0 8px' }}>{paid ? 'Paid' : '$10 owed'}</div>
              <p style={{ fontSize: 14.5, margin: '0 0 16px', opacity: 0.92 }}>{paid ? 'You are current through the 2026–27 school year. Every event this year is free to you.' : 'Bring $10 cash to any event and hand it to Sarah. That covers the whole school year.'}</p>
              <Button variant="secondary" size="sm" iconAfter="arrow-right" onClick={() => onNavigate('Events')}>Find the next event</Button>
            </Card>
            <Card variant="plain">
              <Badge tone="solid">Up next</Badge>
              <h3 style={{ fontSize: 22, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 8px' }}>Nothing scheduled yet</h3>
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 14px' }}>Officers are locking in dates. You'll get a text the moment the first one goes up.</p>
              <Button variant="ghost" size="sm" iconAfter="arrow-right" onClick={() => onNavigate('Events')}>See what's planned</Button>
            </Card>
            <Card variant="plain">
              <Badge tone="neutral">Settings</Badge>
              <h3 style={{ fontSize: 22, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 14px' }}>Your preferences</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Switch label="Text me event reminders" checked={texts} onChange={() => setTexts(!texts)} />
              </div>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1.5px solid var(--border-hairline)', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Button variant="outline" size="sm">Edit profile</Button>
                <Tooltip label="Officers can export the roster"><Button variant="ghost" size="sm" icon="download">Roster</Button></Tooltip>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { AccountLean });
})();
