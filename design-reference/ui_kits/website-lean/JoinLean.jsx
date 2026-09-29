(() => {
const { Button, Card, Badge, Input, Select, Textarea, Checkbox, Radio, Switch, Icon } = window.SouthernBusinessClubDesignSystem_c9c84e;

const TREASURER = { name: 'Sarah Chotobar', role: 'Treasurer', phone: '+1 (407) 912-2508', tel: '+14079122508' };

function JoinLean({ onSubmit, onNavigate }) {
  const [first, setFirst] = React.useState('');
  const [last, setLast] = React.useState('');
  const [texts, setTexts] = React.useState(true);
  const [directory, setDirectory] = React.useState(true);
  const [interests, setInterests] = React.useState({ Networking: true, 'Mock interviews': true, Headshots: false });
  const smsBody = `Hey Sarah! This is ${first || '________'} ${last || '__________'}. I just registered for the business club. How can I get my dues to you?`;
  const smsHref = 'sms:' + TREASURER.tel + '?&body=' + encodeURIComponent(smsBody);
  return (
    <section style={{ padding: '56px 32px 84px' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 40, alignItems: 'start' }}>
        <div>
          <div className="sbc-eyebrow">Membership</div>
          <h1 style={{ fontSize: 72, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, margin: '12px 0 12px' }}>Join the club</h1>
          <p style={{ fontSize: 18, maxWidth: 520, marginBottom: 16 }}>Two minutes now, $10 cash whenever you next see an officer. That covers the whole year.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', borderLeft: '5px solid var(--yellow-500)', maxWidth: 520 }}>
            <span style={{ color: 'var(--green-700)', display: 'inline-flex' }}><Icon name="user-check" size={18} /></span>
            <span style={{ fontSize: 14.5, color: 'var(--text-body)' }}>Been in the club before? <span onClick={() => onNavigate('Claim')} style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--green-700)' }}>Claim your account instead</span> — your history carries over, and you only pay this year's $10.</span>
          </div>
          <Card padding="var(--space-8)">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <Input label="First name" placeholder="Steve" value={first} onChange={(e) => setFirst(e.target.value)} />
              <Input label="Last name" placeholder="Jobs" value={last} onChange={(e) => setLast(e.target.value)} />
              <Input label="Southern email" icon="mail" placeholder="you@southern.edu" wrapStyle={{ gridColumn: '1 / -1' }} />
              <Input label="Phone number" icon="phone" placeholder="(555) 123-4567" hint="So we can text you event reminders and dues confirmation." wrapStyle={{ gridColumn: '1 / -1' }} />
              <Select label="Class standing" options={['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate']} />
              <Select label="Major" defaultValue="Business administration" options={['Accounting', 'Business administration', 'Finance', 'Marketing', 'Not business — just interested']} />
              <Input label="Password" icon="lock" type="password" placeholder="At least 8 characters" hint="You'll use this and your email to log in." wrapStyle={{ gridColumn: '1 / -1' }} />
            </div>
            <div style={{ marginTop: 24, paddingTop: 22, borderTop: '1.5px solid var(--border-hairline)' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13.5, marginBottom: 12, color: 'var(--text-heading)' }}>What are you here for?</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {Object.keys(interests).map((k) => (
                  <Checkbox key={k} label={k} checked={interests[k]} onChange={() => setInterests({ ...interests, [k]: !interests[k] })} />
                ))}
              </div>
            </div>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Switch label="Text me event reminders" checked={texts} onChange={() => setTexts(!texts)} />
              <Switch label="Show me on the member directory" checked={directory} onChange={() => setDirectory(!directory)} />
            </div>
            <Textarea label="Anything we should know?" rows={3} wrapStyle={{ marginTop: 22 }} hint="Optional. Dietary needs, questions, jokes." />
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
              <Button size="lg" onClick={onSubmit}>Submit membership</Button>
              <span style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>No payment online — $10 cash to the treasurer.</span>
            </div>
          </Card>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 96 }}>
          <Card variant="brand">
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--yellow-500)' }}>$10 per school year</div>
            <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11, fontSize: 15 }}>
              {['An invitation to every event', 'Free professional headshots', 'Mock interviews', 'Discounts on club merch', 'The member community and directory'].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><span style={{ color: 'var(--yellow-500)', display: 'inline-flex', marginTop: 2 }}><Icon name="check" size={17} /></span>{t}</li>
              ))}
            </ul>
          </Card>
          <Card variant="plain">
            <Badge tone="solid">Paying dues</Badge>
            <h3 style={{ fontSize: 24, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 10px' }}>Cash to Sarah</h3>
            <ol style={{ margin: '0 0 16px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14.5, color: 'var(--text-muted)' }}>
              {[['1', 'Submit this form. You are on the roster right away.'], ['2', 'Hand Sarah $10 cash at any event, or text her to meet up.']].map(([n, t]) => (
                <li key={n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ flex: 'none', width: 22, height: 22, borderRadius: 999, background: 'var(--surface-brand-soft)', color: 'var(--green-700)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{n}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', marginBottom: 14 }}>
              <span style={{ color: 'var(--green-700)', display: 'inline-flex' }}><Icon name="wallet" size={18} /></span>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--text-heading)' }}>{TREASURER.name}</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{TREASURER.role} · {TREASURER.phone}</div>
              </div>
            </div>
            <Button as="a" href={smsHref} variant="outline" size="sm" iconAfter="arrow-right" style={{ textDecoration: 'none' }}>Text Sarah about dues</Button>
          </Card>
          <Card variant="poster">
            <Badge tone="accent" icon="party-popper">Signature event</Badge>
            <h3 style={{ fontSize: 26, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 8px' }}>Taco Bell Black Tie</h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: 0 }}>Rent the tux, take the photo, eat the tacos. Free for members. Date TBA.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { JoinLean });
})();
