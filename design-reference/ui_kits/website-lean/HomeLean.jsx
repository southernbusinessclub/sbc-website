(() => {
const { Button, Card, Badge, Icon } = window.SouthernBusinessClubDesignSystem_c9c84e;

const PILLARS = [
  { icon: 'calendar-days', title: 'Events', body: 'Mixers, service projects, fundraisers, and the one night everyone dresses up. This is where the memories come from.' },
  { icon: 'briefcase', title: 'Professional development', body: 'Headshots, mock interviews, and practice at the things you will be judged on later — before it counts.' },
  { icon: 'users', title: 'The member community', body: 'Forty-plus people who want to build something, and officers who will introduce you to any of them.' },
];

function HomeLean({ onNavigate, onRsvp }) {
  return (
    <div>
      <section style={{ background: 'var(--surface-brand)', color: 'var(--text-on-brand)', padding: '78px 32px 84px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--yellow-500)' }}>Southern Adventist University</div>
            <h1 style={{ fontSize: 104, lineHeight: 0.88, fontWeight: 900, textTransform: 'uppercase', color: 'var(--white)', margin: '14px 0 20px', letterSpacing: '-0.01em' }}>Business,<br />but fun</h1>
            <p style={{ fontSize: 18.5, maxWidth: 480, opacity: 0.95 }}>We run the networking nights, the interview prep, and the one black-tie dinner on campus served out of a Taco Bell bag. Everyone's welcome — majors optional.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 26 }}>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('Join')}>Become a member</Button>
              <Button variant="inverse" size="lg" iconAfter="arrow-right" onClick={() => onNavigate('Events')}>See what's coming up</Button>
            </div>
          </div>
          <div style={{ border: '2.5px solid var(--ink-900)', borderRadius: 'var(--radius-lg)', boxShadow: '8px 8px 0 var(--ink-900)', background: 'var(--yellow-500)', color: 'var(--ink-900)', padding: 26 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Signature event · Date TBA</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 52, lineHeight: 0.9, textTransform: 'uppercase', margin: '10px 0 12px' }}>Taco Bell<br />Black Tie</div>
            <p style={{ fontSize: 15, margin: '0 0 18px' }}>Formalwear. Fast food. Free for members.</p>
            <Button variant="outline" onClick={onRsvp}>Get notified</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="What we do" title="Three things, done well">
        <p style={{ fontSize: 18.5, maxWidth: 620, color: 'var(--text-body)', margin: '-14px 0 30px' }}>We exist to help students grow a network, make memories with friends, and walk into a career ready. Everything we run comes back to one of those.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {PILLARS.map((p) => (
            <Card key={p.title}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--surface-brand-soft)', color: 'var(--green-700)', marginBottom: 14 }}><Icon name={p.icon} size={22} /></span>
              <h3 style={{ fontSize: 26, textTransform: 'uppercase', fontWeight: 900, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)' }}>{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Calendar" title="What we're planning" style={{ background: 'var(--surface-sunken)', paddingTop: 64 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
          {[['Meet your officers', 'Pop in, say hi, grab a snack. Ruth McKee School of Business, 5:30 PM.', 'Sep 24', 'accent'], ['Vespers at the Schnells', 'Rice bowls, yard games, worship from Professor Bellino, and worship credit.', 'Oct 2', 'accent'], ['Taco Bell Black Tie', 'Formalwear, fast food, and the group photo.', 'Date TBA'], ['Headshot night', 'Ten minutes each, edited shots back within the week.', 'Date TBA']].map(([t, d, when, tone]) => (
            <Card key={t}>
              <Badge tone={tone || 'neutral'}>{when}</Badge>
              <h3 style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 8px' }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)' }}>{d}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Button variant="outline" iconAfter="arrow-right" onClick={() => onNavigate('Events')}>Full calendar</Button>
          <span style={{ fontSize: 14.5, color: 'var(--text-muted)' }}>Most events are in the Ruth McKee School of Business. Dates go up as soon as the officers lock them in.</span>
        </div>
      </Section>

      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {[['40+', 'members'], ['6', 'officers'], ['$10', 'for the whole year'], ['1', 'black-tie taco night']].map(([n, l]) => (
            <div key={l} style={{ borderTop: '4px solid var(--green-500)', paddingTop: 14 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, lineHeight: 0.9, color: 'var(--text-heading)' }}>{n}</div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', background: 'var(--surface-brand)', borderRadius: 'var(--radius-xl)', padding: '46px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, color: 'var(--text-on-brand)' }}>
          <div>
            <h2 style={{ fontSize: 46, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.92, color: 'var(--white)', marginBottom: 10 }}>Dues are $10 for the year</h2>
            <p style={{ margin: 0, fontSize: 17, opacity: 0.92 }}>Every event, free headshots, mock interviews, and a free seat at the member dinners.</p>
          </div>
          <Button variant="secondary" size="lg" onClick={() => onNavigate('Join')}>Sign me up</Button>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { HomeLean });
})();
