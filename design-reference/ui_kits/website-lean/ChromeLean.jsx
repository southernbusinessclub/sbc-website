(() => {
const { NavBar, Button, Icon, IconButton } = window.SouthernBusinessClubDesignSystem_c9c84e;

// Lean build: Shop and Members are parked in _optional/. To bring one back, add it to
// NAV and FOOTER_LINKS below, then follow the two steps noted in index.html.
const NAV = ['Home', 'Events', 'Workshops'];
const FOOTER_LINKS = ['Home', 'Events', 'Workshops', 'Join', 'Log in', 'Claim'];

function SiteHeaderV2({ page, onNavigate, user, onLogin, onLogout }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 30, background: 'var(--surface-page)' }}>
      <div style={{ height: 6, display: 'flex' }}>
        <div style={{ flex: 1, background: 'var(--green-500)' }} />
        <div style={{ flex: 1, background: 'var(--yellow-500)' }} />
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <NavBar brand="Southern Business Club" links={NAV} active={page} onNavigate={onNavigate}
          action={user
            ? <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {user.officer ? <Button variant="ghost" size="sm" onClick={() => onNavigate('Admin')}>Admin</Button> : null}
                <Button variant="ghost" size="sm" onClick={onLogout}>Log out</Button>
                <Button size="sm" onClick={() => onNavigate('Account')}>My account</Button>
              </div>
            : <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Button variant="ghost" size="sm" onClick={onLogin}>Log in</Button>
                <Button size="sm" onClick={() => onNavigate('Join')}>Join the club</Button>
              </div>}
          style={{ padding: '18px 32px', background: 'transparent', borderBottom: 'none' }} />
      </div>
    </div>
  );
}

function Section({ eyebrow, title, children, style, maxWidth = 'var(--container-max)' }) {
  return (
    <section style={{ padding: '72px 32px', ...style }}>
      <div style={{ maxWidth, margin: '0 auto' }}>
        {eyebrow ? <div className="sbc-eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div> : null}
        {title ? <h2 style={{ fontSize: 44, textTransform: 'uppercase', fontWeight: 900, lineHeight: 0.95, marginBottom: 28 }}>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

function SiteFooterV2({ onNavigate }) {
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: 'var(--text-inverse)', padding: '56px 32px 28px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 30, textTransform: 'uppercase', lineHeight: 0.92 }}>Southern<br />Business Club</div>
          <p style={{ fontSize: 14.5, opacity: 0.75, marginTop: 14, maxWidth: 300 }}>The business club at Southern Adventist University. Collegedale, Tennessee.</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <IconButton icon="instagram" label="Instagram" variant="ghost" style={{ color: 'var(--text-inverse)' }} />
            <IconButton icon="linkedin" label="LinkedIn" variant="ghost" style={{ color: 'var(--text-inverse)' }} />
            <IconButton icon="mail" label="Email us" variant="ghost" style={{ color: 'var(--text-inverse)' }} />
          </div>
        </div>
        {[['Club', FOOTER_LINKS], ['Visit us', ['Southern Adventist University', 'Collegedale, Tennessee', 'businessclub@southern.edu']]].map(([title, items]) => (
          <div key={title}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--yellow-500)', marginBottom: 12 }}>{title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14.5, opacity: 0.85 }}>
              {items.map((i) => title === 'Club'
                ? <span key={i} onClick={() => onNavigate(i === 'Log in' ? 'Login' : i)} style={{ cursor: 'pointer' }}>{i}</span>
                : <span key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '36px auto 0', paddingTop: 18, borderTop: '1px solid rgba(246,243,237,.16)', display: 'flex', justifyContent: 'space-between', fontSize: 12.5, opacity: 0.6, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        <span>Business, but fun</span><span>School of Business</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeaderV2, SiteFooterV2, SectionV2: Section, NAVV2: NAV });
})();
