import React from 'react';

/* Lucide (CDN, lucide-static) rendered as a CSS mask so the glyph inherits currentColor. */
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';

export function Icon({ name, size = 20, strokeWidth, style, ...rest }) {
  const url = `url("${CDN}${name}.svg")`;
  return (
    <span
      aria-hidden="true"
      data-icon={name}
      style={{
        display: 'inline-block', width: size, height: size, flex: '0 0 auto',
        backgroundColor: 'currentColor',
        maskImage: url, WebkitMaskImage: url,
        maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center', WebkitMaskPosition: 'center',
        maskSize: 'contain', WebkitMaskSize: 'contain',
        ...style,
      }}
      {...rest}
    />
  );
}
