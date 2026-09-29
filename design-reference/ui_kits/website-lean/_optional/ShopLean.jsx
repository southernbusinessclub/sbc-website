(() => {
const { Button, Card, Badge, Select, Icon, Tooltip } = window.SouthernBusinessClubDesignSystem_c9c84e;

const MEMBER_OFF = 0.2;
const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
const MIN_UNITS = 24;
const RESERVED = 17;

const ITEMS = [
  { name: 'Club tee', detail: 'Heavyweight cotton, navy with the yellow mark', price: 22, tone: 'brand' },
  { name: 'Crewneck', detail: 'The one you will actually wear to class', price: 38, tone: 'accent' },
  { name: 'Black Tie tee', detail: 'Printed after the night, only for people who were there', price: 24, tone: 'brand' },
  { name: 'Sticker pack', detail: 'Four designs. No size to pick.', price: 6, tone: 'brand', nosize: true },
];

const money = (n) => '$' + (Math.round(n * 100) / 100).toFixed(2).replace('.00', '');

function ShopLean({ onNavigate, user, onReserve }) {
  const [cart, setCart] = React.useState({});
  const member = !!(user && user.duesPaid);
  const set = (name, patch) => setCart((c) => ({ ...c, [name]: { size: 'M', qty: 0, ...c[name], ...patch } }));
  const lines = ITEMS.map((i) => ({ item: i, row: cart[i.name] })).filter((l) => l.row && l.row.qty > 0);
  const full = lines.reduce((s, l) => s + l.item.price * l.row.qty, 0);
  const total = member ? full * (1 - MEMBER_OFF) : full;
  const units = lines.reduce((s, l) => s + l.row.qty, 0);
  const pct = Math.min(100, Math.round(((RESERVED + units) / MIN_UNITS) * 100));

  return (
    <div>
      <section style={{ background: 'var(--surface-brand)', color: 'var(--text-on-brand)', padding: '58px 32px 64px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--yellow-500)' }}>Drop 01 · opens soon</div>
            <h1 style={{ fontSize: 88, fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.88, color: 'var(--white)', margin: '12px 0 16px' }}>Shop</h1>
            <p style={{ fontSize: 18, maxWidth: 500, opacity: 0.95 }}>We print once, in a batch, and hand it out at a meeting. Reserve your sizes now — you only pay when the order is confirmed, and nothing ships.</p>
          </div>
          <div style={{ border: '2.5px solid var(--ink-900)', borderRadius: 'var(--radius-lg)', boxShadow: '8px 8px 0 var(--ink-900)', background: 'var(--yellow-500)', color: 'var(--ink-900)', padding: 26 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase' }}>To print, we need</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64, lineHeight: 0.9, margin: '8px 0 6px' }}>{MIN_UNITS} pieces</div>
            <p style={{ fontSize: 15, margin: '0 0 14px' }}>{RESERVED + units} reserved so far. Under the minimum, the drop doesn't run and nobody is charged.</p>
            <div style={{ height: 12, borderRadius: 999, background: 'rgba(23,23,23,.16)', overflow: 'hidden' }}>
              <div style={{ width: pct + '%', height: '100%', background: 'var(--ink-900)', transition: 'width var(--dur-base) var(--ease-standard)' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 32px 24px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[['list', '1 · Reserve sizes', 'Pick what you want. No payment, no commitment until the drop closes.'], ['users', '2 · We hit the minimum', 'Once enough people are in, we confirm the order and text everyone.'], ['hand-coins', '3 · Pay and pick up', 'Cash or Venmo to Sarah, and you collect it at the next meeting.']].map(([icon, t, d]) => (
            <Card key={t} variant="sunken">
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--surface-brand-soft)', color: 'var(--green-700)', marginBottom: 12 }}><Icon name={icon} size={19} /></span>
              <h3 style={{ fontSize: 21, textTransform: 'uppercase', fontWeight: 900, marginBottom: 6 }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 14.5, color: 'var(--text-muted)' }}>{d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ padding: '32px 32px 80px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          {!member ? (
            <Card variant="plain" style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginBottom: 24, borderLeft: '6px solid var(--yellow-500)' }}>
              <span style={{ color: 'var(--green-700)', display: 'inline-flex' }}><Icon name="lock" size={22} /></span>
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--text-heading)' }}>{user ? 'Your dues are not paid yet' : 'Members pay 20% less'}</div>
                <div style={{ fontSize: 14.5, color: 'var(--text-muted)' }}>{user ? 'Settle up with Sarah and the member price turns on here automatically.' : 'Log in and the member price applies on its own. No code to enter.'}</div>
              </div>
              {user
                ? <Button variant="outline" onClick={() => onNavigate('Account')}>Pay dues</Button>
                : <div style={{ display: 'flex', gap: 10 }}>
                    <Button variant="outline" onClick={() => onNavigate('Login')}>Log in</Button>
                    <Button onClick={() => onNavigate('Join')}>Join for $10</Button>
                  </div>}
            </Card>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginBottom: 24, padding: '9px 15px', borderRadius: 999, background: 'var(--surface-accent)', color: 'var(--text-on-accent)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>
              <Icon name="badge-check" size={17} />Member price applied — 20% off, {user.name.split(' ')[0]}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: 28, alignItems: 'start' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {ITEMS.map((i) => {
                const row = cart[i.name] || { size: 'M', qty: 0 };
                return (
                  <Card key={i.name} padding="0" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ aspectRatio: '5 / 3', background: i.tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)', color: i.tone === 'accent' ? 'var(--yellow-700)' : 'var(--green-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1.5px solid var(--border-hairline)' }}>
                      <Icon name="image" size={34} style={{ opacity: 0.55 }} />
                    </div>
                    <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h3 style={{ fontSize: 24, textTransform: 'uppercase', fontWeight: 900, margin: '0 0 6px' }}>{i.name}</h3>
                      <p style={{ margin: '0 0 14px', fontSize: 14.5, color: 'var(--text-muted)', flex: 1 }}>{i.detail}</p>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 32, color: member ? 'var(--yellow-700)' : 'var(--text-heading)' }}>{money(member ? i.price * (1 - MEMBER_OFF) : i.price)}</span>
                        {member
                          ? <span style={{ fontSize: 14.5, color: 'var(--text-muted)', textDecoration: 'line-through' }}>{money(i.price)}</span>
                          : <Tooltip label="Log in to apply"><span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--green-700)', cursor: 'pointer' }} onClick={() => onNavigate('Login')}>{money(i.price * (1 - MEMBER_OFF))} for members</span></Tooltip>}
                      </div>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
                        {!i.nosize ? <Select label="Size" value={row.size} onChange={(e) => set(i.name, { size: e.target.value })} options={SIZES} wrapStyle={{ flex: 1 }} /> : null}
                        <Select label="Qty" value={String(row.qty)} onChange={(e) => set(i.name, { qty: Number(e.target.value) })} options={['0', '1', '2', '3', '4']} wrapStyle={{ width: i.nosize ? '100%' : 86 }} />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 96 }}>
              <Card variant="plain">
                <Badge tone="solid">Your reservation</Badge>
                <h3 style={{ fontSize: 24, textTransform: 'uppercase', fontWeight: 900, margin: '12px 0 14px' }}>Drop 01</h3>
                {lines.length === 0 ? (
                  <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 16px' }}>Nothing picked yet. Choose a size and quantity to hold your spot in the batch.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                    {lines.map((l) => (
                      <div key={l.item.name} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 14.5 }}>
                        <span style={{ color: 'var(--text-body)' }}>{l.row.qty}× {l.item.name}{l.item.nosize ? '' : ' · ' + l.row.size}</span>
                        <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{money(l.item.price * l.row.qty * (member ? 1 - MEMBER_OFF : 1))}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ paddingTop: 14, borderTop: '1.5px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 38, color: 'var(--text-heading)' }}>{money(total)}</span>
                </div>
                {member && full > 0 ? <div style={{ fontSize: 13.5, color: 'var(--yellow-700)', fontWeight: 700, textAlign: 'right', marginTop: 2 }}>You saved {money(full - total)}</div> : null}
                <Button full size="lg" style={{ marginTop: 16 }} disabled={units === 0} onClick={() => onReserve(units)}>Reserve my sizes</Button>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '12px 0 0' }}>No payment now. We text you when the drop closes and the order is confirmed.</p>
              </Card>
              <Card variant="brand">
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--yellow-500)' }}>Why a drop</div>
                <p style={{ fontSize: 14.5, margin: '10px 0 0', opacity: 0.94 }}>Printing in one batch is about half the cost of ordering one at a time, and nobody pays shipping. The tradeoff is you wait for the batch.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { ShopLean });
})();
