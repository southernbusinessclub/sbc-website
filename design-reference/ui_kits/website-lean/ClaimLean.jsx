(() => {
const { Button, Card, Badge, Input, Icon } = window.SouthernBusinessClubDesignSystem_c9c84e;

/* Stand-in for the Excel roster. In real life the site would check this list, not hold it. */
const ROSTER = [
  { email: 'sjobs@southern.edu', name: 'Steve Jobs', initials: 'SJ', major: 'Business administration', standing: 'Junior', since: '2025', duesPaid: true },
  { email: 'mokonkwo@southern.edu', name: 'Maya Okonkwo', initials: 'MO', major: 'Finance', standing: 'Junior', since: '2025', duesPaid: true },
  { email: 'jreyes@southern.edu', name: 'Jonah Reyes', initials: 'JR', major: 'Accounting', standing: 'Freshman', since: '2026', duesPaid: false },
];

const TREASURER_TEL = '+14079122508';
const YEAR = '2026–27';

function Row({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '11px 0', borderBottom: '1.5px solid var(--border-hairline)', fontSize: 15 }}>
      <span style={{ color: 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--text-heading)', textAlign: 'right' }}>{value}</span>
    </div>
  );
}

function ClaimLean({ onNavigate, onClaimed }) {
  const [email, setEmail] = React.useState('');
  const [step, setStep] = React.useState('email');
  const [match, setMatch] = React.useState(null);
  const [code, setCode] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pw2, setPw2] = React.useState('');
  const pwOk = pw.length >= 8 && pw === pw2 && code.trim().length >= 4;

  const check = () => {
    const found = ROSTER.find((r) => r.email.toLowerCase() === email.trim().toLowerCase());
    setMatch(found || null);
    setStep(found ? 'found' : 'notfound');
  };

  return (
    <section style={{ padding: '64px 32px 96px', background: 'var(--surface-sunken)', minHeight: '70vh' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
        <div>
          <div className="sbc-eyebrow">Already a member</div>
          <h1 style={{ fontSize: 62, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, margin: '12px 0 14px' }}>Claim your<br />account</h1>
          <p style={{ fontSize: 17.5, color: 'var(--text-body)', maxWidth: 420, marginBottom: 24 }}>If you've been in the club before, you don't sign up from scratch. We have you on the roster — enter your Southern email, set a password, and your history carries over.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            {[['user-check', 'We check the email against the club roster'], ['key-round', 'You set a password once, then log in from the site like normal'], ['history', 'Your past events and dues record carry over']].map(([icon, t]) => (
              <div key={t} style={{ display: 'flex', gap: 11, alignItems: 'center', fontSize: 15, color: 'var(--text-body)' }}>
                <span style={{ color: 'var(--green-700)', display: 'inline-flex' }}><Icon name={icon} size={18} /></span>{t}
              </div>
            ))}
          </div>
          <Card variant="sunken" style={{ marginTop: 26, background: 'var(--white)' }}>
            <Badge tone="neutral">Prototype</Badge>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '12px 0 10px' }}>Try each outcome with these test emails:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13.5 }}>
              {[['sjobs@southern.edu', 'dues already paid for ' + YEAR], ['jreyes@southern.edu', 'on the roster, needs to renew'], ['nobody@southern.edu', 'not on the roster']].map(([e, w]) => (
                <div key={e} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span onClick={() => { setEmail(e); setStep('email'); }} style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--green-700)', cursor: 'pointer', textDecoration: 'underline' }}>{e}</span>
                  <span style={{ color: 'var(--text-muted)' }}>— {w}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card padding="var(--space-8)">
          {step === 'email' ? (
            <div>
              <h2 style={{ fontSize: 30, textTransform: 'uppercase', fontWeight: 900, margin: '0 0 6px' }}>Find me</h2>
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>Use the email you gave us when you joined.</p>
              <Input label="Southern email" icon="mail" placeholder="you@southern.edu" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Button size="lg" full style={{ marginTop: 20 }} disabled={!email.trim()} onClick={check}>Look me up</Button>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '16px 0 0', textAlign: 'center' }}>Never joined before? <span onClick={() => onNavigate('Join')} style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--green-700)' }}>Sign up here</span></p>
            </div>
          ) : null}

          {step === 'found' ? (
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 'var(--radius-lg)', background: 'var(--surface-accent)', color: 'var(--text-on-accent)', marginBottom: 16 }}><Icon name="user-check" size={26} /></span>
              <h2 style={{ fontSize: 30, textTransform: 'uppercase', fontWeight: 900, margin: '0 0 6px' }}>Found you</h2>
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 18px' }}>This is what the roster has. Confirm it's you and pick a password.</p>
              <div style={{ marginBottom: 20 }}>
                <Row label="Name" value={match.name} />
                <Row label="Major" value={match.major} />
                <Row label="Class standing" value={match.standing} />
                <Row label="Member since" value={match.since} />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '11px 0', fontSize: 15 }}>
                  <span style={{ color: 'var(--text-muted)' }}>Dues</span>
                  {match.duesPaid
                    ? <Badge tone="accent" icon="badge-check">Paid for {YEAR}</Badge>
                    : <Badge tone="neutral">Not paid for {YEAR}</Badge>}
                </div>
              </div>
              {!match.duesPaid ? (
                <div style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', borderLeft: '5px solid var(--yellow-500)', marginBottom: 18 }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14.5, color: 'var(--text-heading)', marginBottom: 4 }}>Dues are $10 a year, and {YEAR} isn't paid</div>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '0 0 12px' }}>You still get the account and your history. Hand Sarah $10 at the next event to stay a member — or if you already paid her this year, text her and she'll fix the record.</p>
                  <Button as="a" href={'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent('Hey Sarah! This is ' + match.name + '. I think I already paid my club dues but the site has me as unpaid. Can you check?')} variant="outline" size="sm" style={{ textDecoration: 'none' }}>Text Sarah</Button>
                </div>
              ) : null}
              <Button size="lg" full onClick={() => setStep('setpw')}>That's me — set a password</Button>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '14px 0 0', textAlign: 'center' }}>Not you? <span onClick={() => setStep('email')} style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--green-700)' }}>Try another email</span></p>
            </div>
          ) : null}

          {step === 'setpw' ? (
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 'var(--radius-lg)', background: 'var(--surface-brand)', color: 'var(--yellow-500)', marginBottom: 16 }}><Icon name="key-round" size={26} /></span>
              <h2 style={{ fontSize: 30, textTransform: 'uppercase', fontWeight: 900, margin: '0 0 6px' }}>Set a password</h2>
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>We texted a 6-digit code to the number on your roster entry, so we know it's really you. After this, you just log in from the site.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Input label="Code from the text" icon="message-square" placeholder="123456" value={code} onChange={(e) => setCode(e.target.value)} hint="Prototype — type anything four characters or longer." />
                <Input label="New password" icon="lock" type="password" placeholder="At least 8 characters" value={pw} onChange={(e) => setPw(e.target.value)} />
                <Input label="Confirm password" icon="lock" type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} error={pw2.length > 0 && pw !== pw2} hint={pw2.length > 0 && pw !== pw2 ? "Those don't match." : undefined} />
              </div>
              <Button size="lg" full style={{ marginTop: 20 }} disabled={!pwOk} onClick={() => onClaimed(match)}>Finish and log in</Button>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '14px 0 0', textAlign: 'center' }}>Didn't get the text? <span style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--green-700)' }}>Send it again</span></p>
            </div>
          ) : null}

          {step === 'notfound' ? (
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 'var(--radius-lg)', background: 'var(--surface-brand-soft)', color: 'var(--green-700)', marginBottom: 16 }}><Icon name="user-search" size={26} /></span>
              <h2 style={{ fontSize: 30, textTransform: 'uppercase', fontWeight: 900, margin: '0 0 6px' }}>Not on the roster</h2>
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>We can't find <strong style={{ color: 'var(--text-heading)' }}>{email}</strong>. Either you joined with a different email, or you've never been a member.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Button size="lg" full onClick={() => onNavigate('Join')}>Join the club — $10</Button>
                <Button variant="outline" full onClick={() => setStep('email')}>Try a different email</Button>
                <Button as="a" href={'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent("Hey Sarah! I'm already in the business club but the site can't find me. Can you add my email?")} variant="ghost" full style={{ textDecoration: 'none' }}>I'm sure I'm a member — text Sarah</Button>
              </div>
            </div>
          ) : null}
        </Card>
      </div>
    </section>
  );
}
Object.assign(window, { ClaimLean });
})();
