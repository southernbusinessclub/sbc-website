import React from 'react';
import { Card } from './Card.jsx';
import { Badge } from './Badge.jsx';
import { Button } from './Button.jsx';
import { Icon } from './Icon.jsx';

export function EventCard({ title, date, time, location, description, category, tone = 'brand', poster = false, onRsvp, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Card
      variant={poster ? 'poster' : 'plain'}
      padding="0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transform: hover ? 'translateY(-2px)' : 'none', transition: 'transform var(--dur-base) var(--ease-standard)', ...style }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)', padding: 'var(--space-5)' }}>
        <div style={{ flex: '0 0 auto', width: 72, textAlign: 'center', background: tone === 'accent' ? 'var(--surface-accent)' : 'var(--surface-brand)', color: tone === 'accent' ? 'var(--text-on-accent)' : 'var(--text-on-brand)', borderRadius: 'var(--radius-md)', padding: '10px 0 12px', minHeight: 84, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.9 }}>{date.month}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 38, lineHeight: 0.95 }}>{date.day}</div>
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          {category ? <Badge tone={tone === 'accent' ? 'accent' : 'brand'}>{category}</Badge> : null}
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--text-heading)', margin: category ? '10px 0 8px' : '0 0 8px' }}>{title}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 14, color: 'var(--text-muted)' }}>
            {time ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="clock" size={15} />{time}</span> : null}
            {location ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="map-pin" size={15} />{location}</span> : null}
          </div>
          {description ? <p style={{ margin: '10px 0 0', fontSize: 14.5, color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{description}</p> : null}
        </div>
        {onRsvp ? (
          <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'center' }}>
            <Button variant={tone === 'accent' ? 'secondary' : 'outline'} size="sm" onClick={onRsvp}>RSVP</Button>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
