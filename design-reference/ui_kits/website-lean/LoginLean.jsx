(() => {
const { Button, Card, Badge, Input, Icon } = window.SouthernBusinessClubDesignSystem_c9c84e;

function LoginLean({ onLogin, onNavigate }) {
  return (
    <section style={{ padding: '72px 32px 96px', background: 'var(--surface-sunken)', minHeight: '68vh' }}>
      <div style={{ maxWidth: 940, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
        <div>
          <div className="sbc-eyebrow">Members only</div>
          <h1 style={{ fontSize: 66, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, margin: '12px 0 14px' }}>Welcome<br />back</h1>
          <p style={{ fontSize: 17.5, maxWidth: 400, color: 'var(--text-body)', marginBottom: 22 }}>Your dashboard has what you've saved this year, your dues status, and the events you still owe us feedback on.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['calendar-check', 'Every event you have attended'], ['piggy-bank', 'What membership has saved you'], ['star', 'Rate the events you attended'], ['wallet', 'Whether your dues are current']].map(([icon, t]) => (
              <div key={t} style={{ display: 'flex', gap: 11, alignItems: 'center', fontSize: 15, color: 'var(--text-body)' }}>
                <span style={{ color: 'var(--green-700)', display: 'inline-flex' }}><Icon name={icon} size={18} /></span>{t}
              </div>
            ))}
          </div>
        </div>
        <Card padding="var(--space-8)">
          <h2 style={{ fontSize: 30, textTransform: 'uppercase', fontWeight: 900, margin: '0 0 6px' }}>Log in</h2>
          <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>Your Southern email and the password you set.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input label="Southern email" icon="mail" placeholder="you@southern.edu" defaultValue="sjobs@southern.edu" />
            <Input label="Password" icon="lock" type="password" defaultValue="southern" />
          </div>
          <Button size="lg" full style={{ marginTop: 22 }} onClick={onLogin}>Log in</Button>
          <div style={{ marginTop: 16, fontSize: 14, color: 'var(--text-muted)', textAlign: 'center' }}>
            <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Forgot your password?</span>
          </div>
          <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1.5px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: 7, fontSize: 14, color: 'var(--text-muted)' }}>
            <span>Been in the club before but never set a password? <span onClick={() => onNavigate('Claim')} style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--green-700)' }}>Claim your account</span></span>
            <span>Never a member? <span onClick={() => onNavigate('Join')} style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--green-700)' }}>Join the club</span></span>
          </div>
        </Card>
      </div>
    </section>
  );
}
Object.assign(window, { LoginLean });
})();
