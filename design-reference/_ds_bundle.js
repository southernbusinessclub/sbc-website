/* @ds-bundle: {"format":4,"namespace":"SouthernBusinessClubDesignSystem_c9c84e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EventCard","sourcePath":"components/core/EventCard.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"74134d6ea8f8","components/core/Button.jsx":"22c93e76fef3","components/core/Card.jsx":"324f3fe85590","components/core/EventCard.jsx":"0b516d582704","components/core/Icon.jsx":"67c0d53583fc","components/core/IconButton.jsx":"8470129f0ec2","components/core/Tag.jsx":"cb2d6c7629a5","components/feedback/Dialog.jsx":"c735e45ed6f9","components/feedback/Toast.jsx":"fc79f66defe6","components/feedback/Tooltip.jsx":"5b85b8887def","components/forms/Checkbox.jsx":"9b93370c9e7b","components/forms/Input.jsx":"50e0ae49f100","components/forms/Radio.jsx":"1a75b87dc4eb","components/forms/Select.jsx":"13ad022e0738","components/forms/Switch.jsx":"77091639521c","components/forms/Textarea.jsx":"47d29fd7132d","components/navigation/NavBar.jsx":"4c20b56ce7cf","components/navigation/Tabs.jsx":"35de60d260f0","guidelines/doc-page.js":"f52ae9c02fca","ui_kits/website-lean/AccountLean.jsx":"43701ae701a5","ui_kits/website-lean/AdminLean.jsx":"9573cb1af404","ui_kits/website-lean/ChromeLean.jsx":"e48c4a2feeae","ui_kits/website-lean/ClaimLean.jsx":"7339a6318d28","ui_kits/website-lean/EventsLean.jsx":"697a118bc7ef","ui_kits/website-lean/HomeLean.jsx":"51ec1b88754a","ui_kits/website-lean/JoinLean.jsx":"a3804b43651b","ui_kits/website-lean/LoginLean.jsx":"5c99d07ec9f4","ui_kits/website-lean/WorkshopsLean.jsx":"959cf231363f","ui_kits/website-lean/_optional/MembersLean.jsx":"5ac1d2cc6e9d","ui_kits/website-lean/_optional/ShopLean.jsx":"596a044d3300","ui_kits/website-v2/AccountV2.jsx":"929f4187d23a","ui_kits/website-v2/ChromeV2.jsx":"d31d90323f02","ui_kits/website-v2/ClaimV2.jsx":"a0b7407ae432","ui_kits/website-v2/EventsV2.jsx":"9f730a69ad96","ui_kits/website-v2/HomeV2.jsx":"45a41cfa7b64","ui_kits/website-v2/JoinV2.jsx":"d0d44b845dc0","ui_kits/website-v2/LoginV2.jsx":"f0034e4acafc","ui_kits/website-v2/MembersV2.jsx":"e28a9bc43d18","ui_kits/website-v2/ShopV2.jsx":"f28af5ff7fd0","ui_kits/website-v2/WorkshopsV2.jsx":"6914f38d851c","ui_kits/website/Chrome.jsx":"d96dfcfa1da1","ui_kits/website/Events.jsx":"b311ff1759b8","ui_kits/website/Home.jsx":"b35224b6e839","ui_kits/website/Join.jsx":"d60c3da70c0a","ui_kits/website/Workshops.jsx":"8d068f8ac711"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SouthernBusinessClubDesignSystem_c9c84e = window.SouthernBusinessClubDesignSystem_c9c84e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'plain',
  padding = 'var(--space-6)',
  accent,
  style,
  ...rest
}) {
  const looks = {
    plain: {
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      boxShadow: 'var(--shadow-sm)'
    },
    poster: {
      background: 'var(--surface-card)',
      border: 'var(--border-width-strong) solid var(--border-strong)',
      boxShadow: 'var(--shadow-offset)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: 'var(--border-width) solid transparent',
      boxShadow: 'none'
    },
    brand: {
      background: 'var(--surface-brand)',
      border: 'none',
      color: 'var(--text-on-brand)',
      boxShadow: 'none'
    },
    accent: {
      background: 'var(--surface-accent)',
      border: 'none',
      color: 'var(--text-on-accent)',
      boxShadow: 'none'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      ...looks,
      ...(accent ? {
        borderTop: '6px solid ' + accent
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (CDN, lucide-static) rendered as a CSS mask so the glyph inherits currentColor. */
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 20,
  strokeWidth,
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: 'currentColor',
      maskImage: url,
      WebkitMaskImage: url,
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  brand: {
    background: 'var(--surface-brand-soft)',
    color: 'var(--green-700)'
  },
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--yellow-700)'
  },
  success: {
    background: 'var(--status-success-soft)',
    color: 'var(--green-600)'
  },
  warning: {
    background: 'var(--status-warning-soft)',
    color: 'var(--yellow-700)'
  },
  danger: {
    background: 'var(--status-danger-soft)',
    color: 'var(--red-600)'
  },
  neutral: {
    background: 'var(--paper-2)',
    color: 'var(--ink-700)'
  },
  solid: {
    background: 'var(--ink-900)',
    color: 'var(--paper)'
  }
};
function Badge({
  children,
  tone = 'brand',
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      lineHeight: 1,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      ...tones[tone],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  border: 'var(--border-width) solid transparent',
  borderRadius: 'var(--radius-control)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
};
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: 13.5
  },
  md: {
    padding: '12px 20px',
    fontSize: 15
  },
  lg: {
    padding: '15px 28px',
    fontSize: 16.5
  }
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--text-on-brand)'
  },
  secondary: {
    background: 'var(--brand-secondary)',
    color: 'var(--text-on-accent)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-heading)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-link)'
  },
  inverse: {
    background: 'var(--white)',
    color: 'var(--green-700)'
  }
};
const hovers = {
  primary: {
    background: 'var(--brand-primary-hover)'
  },
  secondary: {
    background: 'var(--brand-secondary-hover)'
  },
  outline: {
    background: 'var(--ink-900)',
    color: 'var(--paper)'
  },
  ghost: {
    background: 'var(--green-100)'
  },
  inverse: {
    background: 'var(--green-100)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  full = false,
  disabled = false,
  as = 'button',
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      width: full ? '100%' : undefined,
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 19 : 17
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'lg' ? 19 : 17
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/EventCard.jsx
try { (() => {
function EventCard({
  title,
  date,
  time,
  location,
  description,
  category,
  tone = 'brand',
  poster = false,
  onRsvp,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: poster ? 'poster' : 'plain',
    padding: "0",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      width: 72,
      textAlign: 'center',
      background: tone === 'accent' ? 'var(--surface-accent)' : 'var(--surface-brand)',
      color: tone === 'accent' ? 'var(--text-on-accent)' : 'var(--text-on-brand)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 0 12px',
      minHeight: 84,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.9
    }
  }, date.month), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 38,
      lineHeight: 0.95
    }
  }, date.day)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, category ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone === 'accent' ? 'accent' : 'brand'
  }, category) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      color: 'var(--text-heading)',
      margin: category ? '10px 0 8px' : '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, time ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 15
  }), time) : null, location ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 15
  }), location) : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 14.5,
      color: 'var(--text-muted)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description) : null), onRsvp ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: tone === 'accent' ? 'secondary' : 'outline',
    size: "sm",
    onClick: onRsvp
  }, "RSVP")) : null));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = sizeMap[size];
  const looks = {
    solid: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      borderColor: 'transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-heading)',
      borderColor: 'var(--border-hairline)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      borderColor: 'transparent'
    }
  }[variant];
  const hoverLook = {
    solid: {
      background: 'var(--brand-primary-hover)'
    },
    outline: {
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'var(--paper-2)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'var(--border-width) solid transparent',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      ...looks,
      ...(hover && !disabled ? hoverLook : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 19
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13.5,
      lineHeight: 1,
      padding: '7px 13px',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-width) solid ' + (selected ? 'var(--green-500)' : 'var(--border-hairline)'),
      background: selected ? 'var(--surface-brand-soft)' : hover && interactive ? 'var(--paper-2)' : 'var(--surface-card)',
      color: selected ? 'var(--green-700)' : 'var(--text-body)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(34,32,30,.45)',
      backdropFilter: 'blur(2px)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: 'var(--border-width) solid var(--border-hairline)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 27,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-6) var(--space-6)',
      color: 'var(--text-body)',
      fontSize: 15
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--surface-sunken)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  success: {
    icon: 'check-circle',
    bar: 'var(--status-success)'
  },
  info: {
    icon: 'info',
    bar: 'var(--status-info)'
  },
  warning: {
    icon: 'alert-triangle',
    bar: 'var(--status-warning)'
  },
  danger: {
    icon: 'alert-circle',
    bar: 'var(--status-danger)'
  }
};
function Toast({
  tone = 'success',
  title,
  message,
  onClose,
  style
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 280,
      maxWidth: 420,
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      boxShadow: 'var(--shadow-lg)',
      borderLeft: '4px solid ' + t.bar,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.bar,
      display: 'inline-flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14.5
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      opacity: 0.85,
      marginTop: 2
    }
  }, message) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    variant: "ghost",
    size: "sm",
    onClick: onClose,
    style: {
      color: 'var(--text-inverse)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      padding: '6px 9px',
      borderRadius: 'var(--radius-sm)',
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      zIndex: 20
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  id,
  style
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 20,
      height: 20,
      marginTop: description ? 2 : 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      border: 'var(--border-width) solid ' + (checked ? 'var(--green-500)' : 'var(--ink-200)'),
      background: checked ? 'var(--brand-primary)' : 'var(--surface-card)',
      color: 'var(--white)',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  id,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--status-danger)' : focus ? 'var(--border-brand)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...wrapStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid ' + borderColor,
      borderRadius: 'var(--radius-control)',
      padding: '0 12px',
      boxShadow: focus ? '0 0 0 3px var(--green-100)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-heading)',
      padding: '11px 0',
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--red-600)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled,
  id,
  style
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 20,
      height: 20,
      marginTop: description ? 2 : 0,
      borderRadius: '50%',
      border: 'var(--border-width) solid ' + (checked ? 'var(--green-500)' : 'var(--ink-200)'),
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--brand-primary)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...wrapStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-heading)',
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid ' + (focus ? 'var(--border-brand)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-control)',
      padding: '11px 38px 11px 12px',
      outline: 'none',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      color: 'var(--text-muted)',
      pointerEvents: 'none',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17
  }))), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand-primary)' : 'var(--paper-3)',
      padding: 3,
      display: 'inline-flex',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-spring)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--status-danger)' : focus ? 'var(--border-brand)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...wrapStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-heading)',
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid ' + borderColor,
      borderRadius: 'var(--radius-control)',
      padding: '11px 12px',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? '0 0 0 3px var(--green-100)' : 'none',
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--red-600)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavLink({
  link,
  active,
  onNavigate,
  inverse
}) {
  const [open, setOpen] = React.useState(false);
  const id = typeof link === 'string' ? link : link.value;
  const label = typeof link === 'string' ? link : link.label;
  const children = typeof link === 'object' && link.children || null;
  const childIds = children ? children.map(c => c.value || c) : [];
  const isActive = id === active || childIds.indexOf(active) > -1;
  const base = {
    appearance: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontWeight: isActive ? 700 : 500,
    fontSize: 14.5,
    color: inverse ? 'var(--white)' : isActive ? 'var(--text-heading)' : 'var(--text-body)',
    padding: '4px 0',
    borderBottom: '2px solid ' + (isActive ? inverse ? 'var(--yellow-500)' : 'var(--brand-primary)' : 'transparent'),
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4
  };
  if (!children) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate && onNavigate(id),
      style: base
    }, label);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate(id),
    "aria-haspopup": "menu",
    "aria-expanded": open,
    style: base
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  })), open ? /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: 'absolute',
      top: '100%',
      left: -12,
      paddingTop: 10,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 176,
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: 6,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children.map(c => {
    const cid = c.value || c;
    const clabel = c.label || c;
    return /*#__PURE__*/React.createElement("button", {
      key: cid,
      role: "menuitem",
      onClick: () => {
        setOpen(false);
        onNavigate && onNavigate(cid);
      },
      style: {
        appearance: 'none',
        background: cid === active ? 'var(--surface-brand-soft)' : 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: '9px 11px',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-body)',
        fontWeight: cid === active ? 700 : 500,
        fontSize: 14.5,
        color: 'var(--text-heading)'
      }
    }, clabel);
  }))) : null);
}
function NavBar({
  brand = 'Southern Business Club',
  links = [],
  active,
  onNavigate,
  action,
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: '18px var(--space-8)',
      background: inverse ? 'var(--surface-brand)' : 'var(--surface-page)',
      borderBottom: inverse ? 'none' : 'var(--border-width) solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate && onNavigate(links[0] && (links[0].value || links[0])),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 21,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      color: inverse ? 'var(--white)' : 'var(--text-heading)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: typeof l === 'string' ? l : l.value,
    link: l,
    active: active,
    onNavigate: onNavigate,
    inverse: inverse
  }))), action ? typeof action === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: inverse ? 'inverse' : 'primary',
    size: "sm"
  }, action) : action : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      ...style
    }
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14.5,
        color: active ? 'var(--text-heading)' : 'var(--text-muted)',
        padding: '0 0 12px',
        marginBottom: -1.5,
        borderBottom: '3px solid ' + (active ? 'var(--brand-primary)' : 'transparent'),
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// guidelines/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/AccountLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Icon,
    IconButton,
    Textarea,
    Switch,
    Tooltip
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const SAVINGS = [{
    icon: 'camera',
    label: 'Free professional headshots',
    detail: 'Headshot night · local studio rate',
    amount: 40
  }, {
    icon: 'utensils',
    label: 'Free dinner at the alumni mixer',
    detail: 'Guests paid $10',
    amount: 10
  }, {
    icon: 'utensils',
    label: 'Free entry, Taco Bell Black Tie',
    detail: 'Guests paid $5',
    amount: 5
  }];
  const ATTENDED = [{
    title: 'Taco Bell Black Tie',
    when: 'Last year',
    category: 'Signature',
    tone: 'accent'
  }, {
    title: 'Headshot night',
    when: 'Last year',
    category: 'Workshop'
  }, {
    title: 'Mock interview night',
    when: 'Last year',
    category: 'Workshop'
  }, {
    title: 'Alumni mixer',
    when: 'Last year',
    category: 'Networking'
  }];
  function Stars({
    value,
    onChange
  }) {
    const [hover, setHover] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      },
      onMouseLeave: () => setHover(0)
    }, [1, 2, 3, 4, 5].map(n => {
      const on = n <= (hover || value);
      return /*#__PURE__*/React.createElement("button", {
        key: n,
        type: "button",
        "aria-label": n + ' star' + (n > 1 ? 's' : ''),
        onMouseEnter: () => setHover(n),
        onClick: () => onChange(n),
        style: {
          background: 'none',
          border: 'none',
          padding: 2,
          cursor: 'pointer',
          lineHeight: 0,
          color: on ? 'var(--yellow-600)' : 'var(--border-hairline)',
          transition: 'color var(--dur-fast) var(--ease-standard)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: on ? 'star' : 'star',
        size: 22,
        style: on ? {} : {
          opacity: 0.85
        }
      }));
    }));
  }
  const TREASURER_TEL = '+14079122508';
  function AccountLean({
    user,
    onNavigate,
    onLogout,
    onSaveFeedback
  }) {
    const paid = !!user.duesPaid;
    const veteran = user.since !== '2026';
    const savings = veteran ? SAVINGS : [];
    const attended = veteran ? ATTENDED : [];
    const [ratings, setRatings] = React.useState({
      'Taco Bell Black Tie': 5,
      'Headshot night': 4
    });
    const [open, setOpen] = React.useState(null);
    const [notes, setNotes] = React.useState({
      'Taco Bell Black Tie': 'Best night of the semester. More tacos next time.'
    });
    const [texts, setTexts] = React.useState(true);
    const [directory, setDirectory] = React.useState(true);
    const saved = savings.reduce((s, r) => s + r.amount, 0);
    const rated = attended.filter(e => ratings[e.title]).length;
    const stats = [['calendar-check', attended.length, 'events attended'], ['piggy-bank', '$' + saved, 'saved as a member'], paid ? ['wallet', '2026–27', 'dues paid'] : ['wallet', '$10', 'dues owed'], ['star', rated + '/' + attended.length, 'events rated']];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-brand)',
        color: 'var(--text-on-brand)',
        padding: '52px 32px 56px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 78,
        height: 78,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 34,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, user.initials), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 240
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Member since ", user.since), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 60,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        color: 'var(--white)',
        margin: '8px 0 8px'
      }
    }, user.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        opacity: 0.92
      }
    }, user.major, " \xB7 ", user.standing, " \xB7 ", user.email), paid ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        marginTop: 12,
        padding: '6px 12px',
        borderRadius: 999,
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 15
    }), "Dues current through 2026\u201327") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      onClick: () => onNavigate('Events')
    }, "See what's coming up"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "log-out",
      onClick: onLogout
    }, "Log out"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16,
        marginTop: 38
      }
    }, stats.map(([icon, n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: 'rgba(246,243,237,.10)',
        border: '1px solid rgba(246,243,237,.18)',
        borderRadius: 'var(--radius-lg)',
        padding: '18px 20px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--yellow-500)',
        display: 'inline-flex',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 46,
        lineHeight: 0.9,
        color: 'var(--white)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        opacity: 0.8,
        marginTop: 6
      }
    }, l)))))), !paid ? /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '24px 32px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        flexWrap: 'wrap',
        borderLeft: '6px solid var(--yellow-500)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 260
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--text-heading)'
      }
    }, "Your 2026\u201327 dues aren't paid"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, "Dues are $10 each school year. Hand Sarah cash at any event \u2014 or if you already paid her this year, text her and she'll fix the record.")), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: 'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent('Hey Sarah! This is ' + user.name + '. Checking on my club dues.'),
      variant: "outline",
      style: {
        textDecoration: 'none'
      }
    }, "Text Sarah")))) : null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "The math"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 6
      }
    }, "Your $10, so far"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--text-muted)',
        marginBottom: 18,
        maxWidth: 520
      }
    }, "What membership has been worth to you this year, based on what you've actually shown up to."), savings.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      variant: "sunken"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "Nothing to add up yet. Show up to a headshot night or a free member dinner and this fills in on its own.")) : /*#__PURE__*/React.createElement(Card, {
      padding: "0",
      style: {
        overflow: 'hidden'
      }
    }, savings.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '16px 20px',
        borderBottom: '1.5px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: r.icon,
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 15.5,
        color: 'var(--text-heading)'
      }
    }, r.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, r.detail)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 28,
        color: 'var(--text-heading)'
      }
    }, "$", r.amount))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 14,
        padding: '18px 20px',
        background: 'var(--surface-accent)',
        color: 'var(--text-on-accent)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase'
      }
    }, "Saved so far \xB7 ", saved / 10, "\xD7 your dues"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 42,
        lineHeight: 0.9
      }
    }, "$", saved)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "Feedback"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 6
      }
    }, "Events you attended"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--text-muted)',
        marginBottom: 18,
        maxWidth: 520
      }
    }, "Rate them honestly. The officers read every note before planning the next one."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, attended.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      variant: "sunken",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        flex: 1,
        minWidth: 240,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "You haven't been to one yet. Meet your officers is on September 24 \u2014 start there."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "See the calendar")) : null, attended.map(e => {
      const isOpen = open === e.title;
      return /*#__PURE__*/React.createElement(Card, {
        key: e.title,
        variant: e.tone === 'accent' ? 'poster' : 'plain'
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 200
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: e.tone === 'accent' ? 'accent' : 'neutral'
      }, e.category), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: 25,
          textTransform: 'uppercase',
          fontWeight: 900,
          margin: '10px 0 4px'
        }
      }, e.title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          color: 'var(--text-muted)'
        }
      }, e.when, " \xB7 Ruth McKee School of Business")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Stars, {
        value: ratings[e.title] || 0,
        onChange: n => {
          setRatings({
            ...ratings,
            [e.title]: n
          });
          setOpen(e.title);
        }
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        iconAfter: isOpen ? 'chevron-up' : 'chevron-down',
        onClick: () => setOpen(isOpen ? null : e.title)
      }, notes[e.title] ? 'Edit note' : 'Leave a note'))), isOpen ? /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 18,
          paddingTop: 18,
          borderTop: '1.5px solid var(--border-hairline)'
        }
      }, /*#__PURE__*/React.createElement(Textarea, {
        label: "What worked, what didn't?",
        rows: 3,
        value: notes[e.title] || '',
        onChange: ev => setNotes({
          ...notes,
          [e.title]: ev.target.value
        }),
        hint: "Officers only. Your name is attached."
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 10,
          marginTop: 14
        }
      }, /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => {
          setOpen(null);
          onSaveFeedback(e.title);
        }
      }, "Save feedback"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: () => setOpen(null)
      }, "Cancel"))) : notes[e.title] ? /*#__PURE__*/React.createElement("p", {
        style: {
          margin: '14px 0 0',
          fontSize: 14.5,
          color: 'var(--text-muted)',
          fontStyle: 'italic'
        }
      }, "\u201C", notes[e.title], "\u201D") : null);
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Dues"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 52,
        lineHeight: 0.92,
        color: 'var(--white)',
        margin: '10px 0 8px'
      }
    }, paid ? 'Paid' : '$10 owed'), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: '0 0 16px',
        opacity: 0.92
      }
    }, paid ? 'You are current through the 2026–27 school year. Every event this year is free to you.' : 'Bring $10 cash to any event and hand it to Sarah. That covers the whole school year.'), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "Find the next event")), /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Up next"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Nothing scheduled yet"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 14px'
      }
    }, "Officers are locking in dates. You'll get a text the moment the first one goes up."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "See what's planned")), /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Settings"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 14px'
      }
    }, "Your preferences"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Text me event reminders",
      checked: texts,
      onChange: () => setTexts(!texts)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        paddingTop: 14,
        borderTop: '1.5px solid var(--border-hairline)',
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "Edit profile"), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Officers can export the roster"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "download"
    }, "Roster"))))))));
  }
  Object.assign(window, {
    AccountLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/AccountLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/AdminLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Tabs,
    Input,
    Select,
    Switch,
    Icon,
    Textarea
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const ROSTER = [{
    name: 'Steve Jobs',
    email: 'sjobs@southern.edu',
    standing: 'Junior',
    major: 'Business administration',
    since: '2025',
    duesPaid: true,
    attended: 7
  }, {
    name: 'Jordan Reyes',
    email: 'jreyes@southern.edu',
    standing: 'Sophomore',
    major: 'Finance',
    since: '2026',
    duesPaid: false,
    attended: 2
  }, {
    name: 'Maya Whitfield',
    email: 'mwhitfield@southern.edu',
    standing: 'Senior',
    major: 'Marketing',
    since: '2024',
    duesPaid: true,
    attended: 12
  }, {
    name: 'Andrew Kim',
    email: 'akim@southern.edu',
    standing: 'Junior',
    major: 'Accounting',
    since: '2025',
    duesPaid: true,
    attended: 9,
    officer: 'Treasurer'
  }, {
    name: 'Sarah Boateng',
    email: 'sboateng@southern.edu',
    standing: 'Senior',
    major: 'Management',
    since: '2024',
    duesPaid: true,
    attended: 14,
    officer: 'President'
  }, {
    name: 'Eli Vargas',
    email: 'evargas@southern.edu',
    standing: 'Freshman',
    major: 'Undecided',
    since: '2026',
    duesPaid: false,
    attended: 1
  }];
  const EVENTS = [{
    title: 'Meet your officers',
    date: 'Sep 24',
    time: '5:30 PM',
    location: 'Ruth McKee School of Business',
    category: 'Social',
    rsvps: 23,
    published: true
  }, {
    title: 'Vespers at the Schnells',
    date: 'Oct 2',
    time: '5:30 PM',
    location: "Prof. Ben Schnell's house",
    category: 'Vespers',
    rsvps: 31,
    published: true
  }, {
    title: 'Headshot night',
    date: 'TBA',
    time: 'TBA',
    location: 'Ruth McKee School of Business',
    category: 'Workshop',
    rsvps: 8,
    published: false
  }, {
    title: 'Taco Bell Black Tie',
    date: 'TBA',
    time: 'TBA',
    location: 'Ruth McKee School of Business',
    category: 'Signature',
    rsvps: 12,
    published: false
  }];
  const REQUESTS = [{
    name: 'Priya Nair',
    email: 'pnair@southern.edu',
    standing: 'Sophomore',
    major: 'Finance',
    when: '2 days ago'
  }, {
    name: 'Caleb Ortiz',
    email: 'cortiz@southern.edu',
    standing: 'Freshman',
    major: 'Business administration',
    when: '5 days ago'
  }];
  const th = {
    textAlign: 'left',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: 11.5,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    padding: '0 14px 10px'
  };
  const td = {
    padding: '14px',
    fontSize: 14.5,
    borderTop: '1.5px solid var(--border-hairline)',
    verticalAlign: 'middle'
  };
  function Stat({
    label,
    value,
    note
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      variant: "sunken",
      padding: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 11.5,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 40,
        lineHeight: 1,
        margin: '8px 0 4px'
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, note));
  }
  function RosterTab({
    roster,
    onToggleDues,
    onNotify
  }) {
    const [q, setQ] = React.useState('');
    const [filter, setFilter] = React.useState('Everyone');
    const shown = roster.filter(m => {
      const hit = (m.name + m.email + m.major).toLowerCase().includes(q.toLowerCase());
      const pass = filter === 'Everyone' || (filter === 'Dues unpaid' ? !m.duesPaid : filter === 'Dues paid' ? m.duesPaid : m.officer);
      return hit && pass;
    });
    const unpaid = roster.filter(m => !m.duesPaid).length;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "On the roster",
      value: roster.length,
      note: "Members with an account"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Dues unpaid",
      value: unpaid,
      note: "Cash to Sarah, then flip the switch"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Collected",
      value: '$' + (roster.length - unpaid) * 10,
      note: "At $10 a head, this year"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-end',
        marginBottom: 18,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Search the roster",
      icon: "search",
      placeholder: "Name, email, or major",
      value: q,
      onChange: e => setQ(e.target.value),
      wrapStyle: {
        flex: '1 1 260px'
      }
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Show",
      options: ['Everyone', 'Dues unpaid', 'Dues paid', 'Officers'],
      value: filter,
      onChange: e => setFilter(e.target.value),
      wrapStyle: {
        flex: '0 0 200px'
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNotify({
        title: 'Export started',
        message: 'A CSV of the current view is on its way to your downloads.'
      })
    }, "Export CSV")), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Member"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Standing"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Member since"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Events"), /*#__PURE__*/React.createElement("th", {
      style: {
        ...th,
        textAlign: 'right'
      }
    }, "Dues paid"))), /*#__PURE__*/React.createElement("tbody", null, shown.map(m => /*#__PURE__*/React.createElement("tr", {
      key: m.email
    }, /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, m.name), m.officer ? /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, m.officer) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, m.email, " \xB7 ", m.major)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: 'var(--text-muted)'
      }
    }, m.standing), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: 'var(--text-muted)'
      }
    }, m.since), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: 'var(--text-muted)'
      }
    }, m.attended), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10
      }
    }, m.duesPaid ? null : /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Owes $10"), /*#__PURE__*/React.createElement(Switch, {
      checked: m.duesPaid,
      onChange: () => onToggleDues(m.email)
    }))))), shown.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: 'var(--text-muted)'
      },
      colSpan: 5
    }, "Nobody matches that.")) : null))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 14
      }
    }, "Dues are cash only, handed to the treasurer. Flipping a switch here records that it happened \u2014 the site never takes a payment."));
  }
  function EventsTab({
    events,
    onTogglePublished,
    onNotify
  }) {
    const [adding, setAdding] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, "Unpublished events stay hidden from the public calendar until you switch them on."), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setAdding(!adding)
    }, adding ? 'Cancel' : 'Add an event')), adding ? /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-6)",
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 24,
        textTransform: 'uppercase',
        margin: '0 0 16px'
      }
    }, "New event"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: 14,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Title",
      placeholder: "Resume workshop"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Date",
      placeholder: "Oct 14"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Time",
      placeholder: "5:30 PM"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: 14,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Location",
      placeholder: "Ruth McKee School of Business"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Category",
      options: ['Social', 'Workshop', 'Vespers', 'Service', 'Fundraiser', 'Signature']
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Description",
      placeholder: "One or two sentences. This shows on the event card.",
      rows: 2
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setAdding(false);
        onNotify({
          title: 'Event saved as a draft',
          message: 'Publish it when the details are locked in.'
        });
      }
    }, "Save as draft"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setAdding(false)
    }, "Cancel"))) : null, /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Event"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "When"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Category"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "RSVPs"), /*#__PURE__*/React.createElement("th", {
      style: {
        ...th,
        textAlign: 'right'
      }
    }, "Published"))), /*#__PURE__*/React.createElement("tbody", null, events.map(e => /*#__PURE__*/React.createElement("tr", {
      key: e.title
    }, /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, e.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, e.location)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: 'var(--text-muted)'
      }
    }, e.date, " \xB7 ", e.time), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(Tag, null, e.category)), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 15
    }), e.rsvps)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: e.published,
      onChange: () => onTogglePublished(e.title)
    }))))))));
  }
  function RequestsTab({
    requests,
    onResolve
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 18px',
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, "People who filled out the join form. Approving one adds them to the roster with dues unpaid."), requests.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      variant: "sunken"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)'
      }
    }, "Nothing waiting. New signups land here.")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, requests.map(r => /*#__PURE__*/React.createElement(Card, {
      key: r.email,
      padding: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 260px',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 21
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, r.email, " \xB7 ", r.standing, " \xB7 ", r.major)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Applied ", r.when), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => onResolve(r, false)
    }, "Decline"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onResolve(r, true)
    }, "Add to roster")))))));
  }
  function AdminLean({
    user,
    onNavigate,
    onNotify
  }) {
    const [tab, setTab] = React.useState('Roster');
    const [roster, setRoster] = React.useState(ROSTER);
    const [events, setEvents] = React.useState(EVENTS);
    const [requests, setRequests] = React.useState(REQUESTS);
    const toggleDues = email => setRoster(r => r.map(m => {
      if (m.email !== email) return m;
      onNotify({
        title: m.duesPaid ? 'Marked unpaid' : 'Dues recorded',
        message: m.name + (m.duesPaid ? ' now shows as owing $10.' : ' is paid up for the year.')
      });
      return {
        ...m,
        duesPaid: !m.duesPaid
      };
    }));
    const togglePublished = title => setEvents(e => e.map(v => {
      if (v.title !== title) return v;
      onNotify({
        title: v.published ? 'Unpublished' : 'Published',
        message: v.title + (v.published ? ' is hidden from the calendar.' : ' is live on the calendar.')
      });
      return {
        ...v,
        published: !v.published
      };
    }));
    const resolve = (r, approved) => {
      setRequests(list => list.filter(x => x.email !== r.email));
      if (approved) setRoster(list => [...list, {
        name: r.name,
        email: r.email,
        standing: r.standing,
        major: r.major,
        since: '2026',
        duesPaid: false,
        attended: 0
      }]);
      onNotify(approved ? {
        title: 'Added to the roster',
        message: r.name + ' can claim an account now. Dues show unpaid.'
      } : {
        title: 'Request declined',
        message: 'No email was sent. Reach out directly if you want to explain.'
      });
    };
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 96px',
        background: 'var(--surface-sunken)',
        minHeight: '70vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 20,
        flexWrap: 'wrap',
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Officers only"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 56,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '10px 0 8px'
      }
    }, "Club admin"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        color: 'var(--text-muted)'
      }
    }, "Signed in as ", user ? user.name : 'an officer', user && user.officer ? ' · ' + user.officer : '')), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate('Account')
    }, "Back to my account")), /*#__PURE__*/React.createElement(Tabs, {
      tabs: ['Roster', 'Events', 'Join requests'],
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: 26
      }
    }), tab === 'Roster' ? /*#__PURE__*/React.createElement(RosterTab, {
      roster: roster,
      onToggleDues: toggleDues,
      onNotify: onNotify
    }) : null, tab === 'Events' ? /*#__PURE__*/React.createElement(EventsTab, {
      events: events,
      onTogglePublished: togglePublished,
      onNotify: onNotify
    }) : null, tab === 'Join requests' ? /*#__PURE__*/React.createElement(RequestsTab, {
      requests: requests,
      onResolve: resolve
    }) : null));
  }
  Object.assign(window, {
    AdminLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/AdminLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/ChromeLean.jsx
try { (() => {
(() => {
  const {
    NavBar,
    Button,
    Icon,
    IconButton
  } = window.SouthernBusinessClubDesignSystem_c9c84e;

  // Lean build: Shop and Members are parked in _optional/. To bring one back, add it to
  // NAV and FOOTER_LINKS below, then follow the two steps noted in index.html.
  const NAV = ['Home', 'Events', 'Workshops'];
  const FOOTER_LINKS = ['Home', 'Events', 'Workshops', 'Join', 'Log in', 'Claim'];
  function SiteHeaderV2({
    page,
    onNavigate,
    user,
    onLogin,
    onLogout
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--green-500)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--yellow-500)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(NavBar, {
      brand: "Southern Business Club",
      links: NAV,
      active: page,
      onNavigate: onNavigate,
      action: user ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, user.officer ? /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: () => onNavigate('Admin')
      }, "Admin") : null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: onLogout
      }, "Log out"), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => onNavigate('Account')
      }, "My account")) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: onLogin
      }, "Log in"), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => onNavigate('Join')
      }, "Join the club")),
      style: {
        padding: '18px 32px',
        background: 'transparent',
        borderBottom: 'none'
      }
    })));
  }
  function Section({
    eyebrow,
    title,
    children,
    style,
    maxWidth = 'var(--container-max)'
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth,
        margin: '0 auto'
      }
    }, eyebrow ? /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 44,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 28
      }
    }, title) : null, children));
  }
  function SiteFooterV2({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)',
        padding: '56px 32px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 30,
        textTransform: 'uppercase',
        lineHeight: 0.92
      }
    }, "Southern", /*#__PURE__*/React.createElement("br", null), "Business Club"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        opacity: 0.75,
        marginTop: 14,
        maxWidth: 300
      }
    }, "The business club at Southern Adventist University. Collegedale, Tennessee."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "instagram",
      label: "Instagram",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "linkedin",
      label: "LinkedIn",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "mail",
      label: "Email us",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }))), [['Club', FOOTER_LINKS], ['Visit us', ['Southern Adventist University', 'Collegedale, Tennessee', 'businessclub@southern.edu']]].map(([title, items]) => /*#__PURE__*/React.createElement("div", {
      key: title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)',
        marginBottom: 12
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9,
        fontSize: 14.5,
        opacity: 0.85
      }
    }, items.map(i => title === 'Club' ? /*#__PURE__*/React.createElement("span", {
      key: i,
      onClick: () => onNavigate(i === 'Log in' ? 'Login' : i),
      style: {
        cursor: 'pointer'
      }
    }, i) : /*#__PURE__*/React.createElement("span", {
      key: i
    }, i)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '36px auto 0',
        paddingTop: 18,
        borderTop: '1px solid rgba(246,243,237,.16)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12.5,
        opacity: 0.6,
        letterSpacing: '0.04em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Business, but fun"), /*#__PURE__*/React.createElement("span", null, "School of Business")));
  }
  Object.assign(window, {
    SiteHeaderV2,
    SiteFooterV2,
    SectionV2: Section,
    NAVV2: NAV
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/ChromeLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/ClaimLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Input,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;

  /* Stand-in for the Excel roster. In real life the site would check this list, not hold it. */
  const ROSTER = [{
    email: 'sjobs@southern.edu',
    name: 'Steve Jobs',
    initials: 'SJ',
    major: 'Business administration',
    standing: 'Junior',
    since: '2025',
    duesPaid: true
  }, {
    email: 'mokonkwo@southern.edu',
    name: 'Maya Okonkwo',
    initials: 'MO',
    major: 'Finance',
    standing: 'Junior',
    since: '2025',
    duesPaid: true
  }, {
    email: 'jreyes@southern.edu',
    name: 'Jonah Reyes',
    initials: 'JR',
    major: 'Accounting',
    standing: 'Freshman',
    since: '2026',
    duesPaid: false
  }];
  const TREASURER_TEL = '+14079122508';
  const YEAR = '2026–27';
  function Row({
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        padding: '11px 0',
        borderBottom: '1.5px solid var(--border-hairline)',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        color: 'var(--text-heading)',
        textAlign: 'right'
      }
    }, value));
  }
  function ClaimLean({
    onNavigate,
    onClaimed
  }) {
    const [email, setEmail] = React.useState('');
    const [step, setStep] = React.useState('email');
    const [match, setMatch] = React.useState(null);
    const [code, setCode] = React.useState('');
    const [pw, setPw] = React.useState('');
    const [pw2, setPw2] = React.useState('');
    const pwOk = pw.length >= 8 && pw === pw2 && code.trim().length >= 4;
    const check = () => {
      const found = ROSTER.find(r => r.email.toLowerCase() === email.trim().toLowerCase());
      setMatch(found || null);
      setStep(found ? 'found' : 'notfound');
    };
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px 32px 96px',
        background: 'var(--surface-sunken)',
        minHeight: '70vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1000,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Already a member"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 62,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Claim your", /*#__PURE__*/React.createElement("br", null), "account"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17.5,
        color: 'var(--text-body)',
        maxWidth: 420,
        marginBottom: 24
      }
    }, "If you've been in the club before, you don't sign up from scratch. We have you on the roster \u2014 enter your Southern email, set a password, and your history carries over."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13
      }
    }, [['user-check', 'We check the email against the club roster'], ['key-round', 'You set a password once, then log in from the site like normal'], ['history', 'Your past events and dues record carry over']].map(([icon, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'center',
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    })), t))), /*#__PURE__*/React.createElement(Card, {
      variant: "sunken",
      style: {
        marginTop: 26,
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Prototype"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '12px 0 10px'
      }
    }, "Try each outcome with these test emails:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        fontSize: 13.5
      }
    }, [['sjobs@southern.edu', 'dues already paid for ' + YEAR], ['jreyes@southern.edu', 'on the roster, needs to renew'], ['nobody@southern.edu', 'not on the roster']].map(([e, w]) => /*#__PURE__*/React.createElement("div", {
      key: e,
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => {
        setEmail(e);
        setStep('email');
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        color: 'var(--green-700)',
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, e), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "\u2014 ", w)))))), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, step === 'email' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Find me"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "Use the email you gave us when you joined."), /*#__PURE__*/React.createElement(Input, {
      label: "Southern email",
      icon: "mail",
      placeholder: "you@southern.edu",
      value: email,
      onChange: e => setEmail(e.target.value)
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      style: {
        marginTop: 20
      },
      disabled: !email.trim(),
      onClick: check
    }, "Look me up"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '16px 0 0',
        textAlign: 'center'
      }
    }, "Never joined before? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate('Join'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Sign up here"))) : null, step === 'found' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-accent)',
        color: 'var(--text-on-accent)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-check",
      size: 26
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Found you"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 18px'
      }
    }, "This is what the roster has. Confirm it's you and pick a password."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Row, {
      label: "Name",
      value: match.name
    }), /*#__PURE__*/React.createElement(Row, {
      label: "Major",
      value: match.major
    }), /*#__PURE__*/React.createElement(Row, {
      label: "Class standing",
      value: match.standing
    }), /*#__PURE__*/React.createElement(Row, {
      label: "Member since",
      value: match.since
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        padding: '11px 0',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "Dues"), match.duesPaid ? /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      icon: "badge-check"
    }, "Paid for ", YEAR) : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Not paid for ", YEAR))), !match.duesPaid ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-sunken)',
        borderLeft: '5px solid var(--yellow-500)',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14.5,
        color: 'var(--text-heading)',
        marginBottom: 4
      }
    }, "Dues are $10 a year, and ", YEAR, " isn't paid"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '0 0 12px'
      }
    }, "You still get the account and your history. Hand Sarah $10 at the next event to stay a member \u2014 or if you already paid her this year, text her and she'll fix the record."), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: 'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent('Hey Sarah! This is ' + match.name + '. I think I already paid my club dues but the site has me as unpaid. Can you check?'),
      variant: "outline",
      size: "sm",
      style: {
        textDecoration: 'none'
      }
    }, "Text Sarah")) : null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      onClick: () => setStep('setpw')
    }, "That's me \u2014 set a password"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '14px 0 0',
        textAlign: 'center'
      }
    }, "Not you? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => setStep('email'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Try another email"))) : null, step === 'setpw' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-brand)',
        color: 'var(--yellow-500)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "key-round",
      size: 26
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Set a password"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "We texted a 6-digit code to the number on your roster entry, so we know it's really you. After this, you just log in from the site."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Code from the text",
      icon: "message-square",
      placeholder: "123456",
      value: code,
      onChange: e => setCode(e.target.value),
      hint: "Prototype \u2014 type anything four characters or longer."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "New password",
      icon: "lock",
      type: "password",
      placeholder: "At least 8 characters",
      value: pw,
      onChange: e => setPw(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Confirm password",
      icon: "lock",
      type: "password",
      value: pw2,
      onChange: e => setPw2(e.target.value),
      error: pw2.length > 0 && pw !== pw2,
      hint: pw2.length > 0 && pw !== pw2 ? "Those don't match." : undefined
    })), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      style: {
        marginTop: 20
      },
      disabled: !pwOk,
      onClick: () => onClaimed(match)
    }, "Finish and log in"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '14px 0 0',
        textAlign: 'center'
      }
    }, "Didn't get the text? ", /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Send it again"))) : null, step === 'notfound' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-search",
      size: 26
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Not on the roster"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "We can't find ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-heading)'
      }
    }, email), ". Either you joined with a different email, or you've never been a member."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      onClick: () => onNavigate('Join')
    }, "Join the club \u2014 $10"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      full: true,
      onClick: () => setStep('email')
    }, "Try a different email"), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: 'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent("Hey Sarah! I'm already in the business club but the site can't find me. Can you add my email?"),
      variant: "ghost",
      full: true,
      style: {
        textDecoration: 'none'
      }
    }, "I'm sure I'm a member \u2014 text Sarah"))) : null)));
  }
  Object.assign(window, {
    ClaimLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/ClaimLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/EventsLean.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Tabs,
    EventCard,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const ALL = [{
    date: {
      month: 'Sep',
      day: 24
    },
    title: 'Meet your officers',
    time: 'Thursday, 5:30 PM',
    location: 'Ruth McKee School of Business',
    description: 'Pop in, say hi, grab a snack. No program, no commitment.',
    category: 'Social',
    topic: 'Networking'
  }, {
    date: {
      month: 'Oct',
      day: 2
    },
    title: 'Vespers at the Schnells',
    time: '5:30 PM',
    location: "Prof. Ben Schnell's house · 4461 Suhrie Road, Ooltewah, TN 37363",
    description: 'Rice bowls, yard games, and worship from Professor Bellino. Worship credit given.',
    category: 'Vespers',
    topic: 'Worship'
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Taco Bell Black Tie',
    time: 'Time TBA',
    location: 'Ruth McKee School of Business',
    category: 'Signature',
    topic: 'Traditions',
    tone: 'accent',
    poster: true
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Headshot night',
    time: 'Time TBA',
    location: 'Ruth McKee School of Business',
    category: 'Workshop',
    topic: 'Workshops'
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Mock interview night',
    time: 'Time TBA',
    location: 'Ruth McKee School of Business',
    category: 'Workshop',
    topic: 'Workshops'
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Alumni mixer',
    time: 'Time TBA',
    location: 'Ruth McKee School of Business',
    category: 'Networking',
    topic: 'Networking'
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Service project',
    time: 'Time TBA',
    location: 'Off campus',
    category: 'Service',
    topic: 'Service'
  }];
  const PAST = [];
  function EventsLean({
    onRsvp
  }) {
    const [tab, setTab] = React.useState('Upcoming');
    const [topic, setTopic] = React.useState('All');
    const source = tab === 'Upcoming' ? ALL : PAST;
    const list = topic === 'All' ? source : source.filter(e => e.topic === topic);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 30px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "2026\u201327 school year"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 76,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Events"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 560,
        color: 'var(--text-body)'
      }
    }, "Members are invited to everything we run. Dates are not locked in yet \u2014 sign up and we'll text you when they are."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: ['Upcoming', 'Past'],
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: 20
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 26
      }
    }, ['All', 'Networking', 'Workshops', 'Worship', 'Service', 'Traditions'].map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      selected: topic === t,
      onClick: () => setTopic(t)
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, list.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
      key: e.title
    }, e, {
      onRsvp: tab === 'Upcoming' ? onRsvp : undefined
    }))), list.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      variant: "sunken"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)'
      }
    }, "Nothing here yet \u2014 check back after the next officer meeting.")) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Members only"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Officer hours"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 14px'
      }
    }, "Bring a resume, or just questions. Times posted once the semester settles."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right"
    }, "Book a slot")), /*#__PURE__*/React.createElement(Card, {
      variant: "accent"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, "Reminders"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '10px 0 8px'
      }
    }, "Get the text list"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: '0 0 14px'
      }
    }, "One message the morning of each event. Nothing else, ever."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "Add my number")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }), " Most events are in the Ruth McKee School of Business."))))));
  }
  Object.assign(window, {
    EventsLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/EventsLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/HomeLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const PILLARS = [{
    icon: 'calendar-days',
    title: 'Events',
    body: 'Mixers, service projects, fundraisers, and the one night everyone dresses up. This is where the memories come from.'
  }, {
    icon: 'briefcase',
    title: 'Professional development',
    body: 'Headshots, mock interviews, and practice at the things you will be judged on later — before it counts.'
  }, {
    icon: 'users',
    title: 'The member community',
    body: 'Forty-plus people who want to build something, and officers who will introduce you to any of them.'
  }];
  function HomeLean({
    onNavigate,
    onRsvp
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-brand)',
        color: 'var(--text-on-brand)',
        padding: '78px 32px 84px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.35fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Southern Adventist University"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 104,
        lineHeight: 0.88,
        fontWeight: 900,
        textTransform: 'uppercase',
        color: 'var(--white)',
        margin: '14px 0 20px',
        letterSpacing: '-0.01em'
      }
    }, "Business,", /*#__PURE__*/React.createElement("br", null), "but fun"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18.5,
        maxWidth: 480,
        opacity: 0.95
      }
    }, "We run the networking nights, the interview prep, and the one black-tie dinner on campus served out of a Taco Bell bag. Everyone's welcome \u2014 majors optional."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNavigate('Join')
    }, "Become a member"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "See what's coming up"))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '2.5px solid var(--ink-900)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '8px 8px 0 var(--ink-900)',
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        padding: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, "Signature event \xB7 Date TBA"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 52,
        lineHeight: 0.9,
        textTransform: 'uppercase',
        margin: '10px 0 12px'
      }
    }, "Taco Bell", /*#__PURE__*/React.createElement("br", null), "Black Tie"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        margin: '0 0 18px'
      }
    }, "Formalwear. Fast food. Free for members."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onRsvp
    }, "Get notified")))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "What we do",
      title: "Three things, done well"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18.5,
        maxWidth: 620,
        color: 'var(--text-body)',
        margin: '-14px 0 30px'
      }
    }, "We exist to help students grow a network, make memories with friends, and walk into a career ready. Everything we run comes back to one of those."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, PILLARS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        marginBottom: 8
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, p.body))))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Calendar",
      title: "What we're planning",
      style: {
        background: 'var(--surface-sunken)',
        paddingTop: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 14
      }
    }, [['Meet your officers', 'Pop in, say hi, grab a snack. Ruth McKee School of Business, 5:30 PM.', 'Sep 24', 'accent'], ['Vespers at the Schnells', 'Rice bowls, yard games, worship from Professor Bellino, and worship credit.', 'Oct 2', 'accent'], ['Taco Bell Black Tie', 'Formalwear, fast food, and the group photo.', 'Date TBA'], ['Headshot night', 'Ten minutes each, edited shots back within the week.', 'Date TBA']].map(([t, d, when, tone]) => /*#__PURE__*/React.createElement(Card, {
      key: t
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: tone || 'neutral'
    }, when), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "Full calendar"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, "Most events are in the Ruth McKee School of Business. Dates go up as soon as the officers lock them in."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, [['40+', 'members'], ['6', 'officers'], ['$10', 'for the whole year'], ['1', 'black-tie taco night']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        borderTop: '4px solid var(--green-500)',
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 56,
        lineHeight: 0.9,
        color: 'var(--text-heading)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, l))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        background: 'var(--surface-brand)',
        borderRadius: 'var(--radius-xl)',
        padding: '46px 44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        color: 'var(--text-on-brand)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 46,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.92,
        color: 'var(--white)',
        marginBottom: 10
      }
    }, "Dues are $10 for the year"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        opacity: 0.92
      }
    }, "Every event, free headshots, mock interviews, and a free seat at the member dinners.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNavigate('Join')
    }, "Sign me up"))));
  }
  Object.assign(window, {
    HomeLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/HomeLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/JoinLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Input,
    Select,
    Textarea,
    Checkbox,
    Radio,
    Switch,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const TREASURER = {
    name: 'Sarah Chotobar',
    role: 'Treasurer',
    phone: '+1 (407) 912-2508',
    tel: '+14079122508'
  };
  function JoinLean({
    onSubmit,
    onNavigate
  }) {
    const [first, setFirst] = React.useState('');
    const [last, setLast] = React.useState('');
    const [texts, setTexts] = React.useState(true);
    const [directory, setDirectory] = React.useState(true);
    const [interests, setInterests] = React.useState({
      Networking: true,
      'Mock interviews': true,
      Headshots: false
    });
    const smsBody = `Hey Sarah! This is ${first || '________'} ${last || '__________'}. I just registered for the business club. How can I get my dues to you?`;
    const smsHref = 'sms:' + TREASURER.tel + '?&body=' + encodeURIComponent(smsBody);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 84px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1040,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: 40,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Membership"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 72,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 12px'
      }
    }, "Join the club"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 520,
        marginBottom: 16
      }
    }, "Two minutes now, $10 cash whenever you next see an officer. That covers the whole year."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 28,
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-sunken)',
        borderLeft: '5px solid var(--yellow-500)',
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-check",
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-body)'
      }
    }, "Been in the club before? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate('Claim'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Claim your account instead"), " \u2014 your history carries over, and you only pay this year's $10.")), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "Steve",
      value: first,
      onChange: e => setFirst(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      placeholder: "Jobs",
      value: last,
      onChange: e => setLast(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Southern email",
      icon: "mail",
      placeholder: "you@southern.edu",
      wrapStyle: {
        gridColumn: '1 / -1'
      }
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone number",
      icon: "phone",
      placeholder: "(555) 123-4567",
      hint: "So we can text you event reminders and dues confirmation.",
      wrapStyle: {
        gridColumn: '1 / -1'
      }
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Class standing",
      options: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Major",
      defaultValue: "Business administration",
      options: ['Accounting', 'Business administration', 'Finance', 'Marketing', 'Not business — just interested']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      icon: "lock",
      type: "password",
      placeholder: "At least 8 characters",
      hint: "You'll use this and your email to log in.",
      wrapStyle: {
        gridColumn: '1 / -1'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        paddingTop: 22,
        borderTop: '1.5px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        marginBottom: 12,
        color: 'var(--text-heading)'
      }
    }, "What are you here for?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, Object.keys(interests).map(k => /*#__PURE__*/React.createElement(Checkbox, {
      key: k,
      label: k,
      checked: interests[k],
      onChange: () => setInterests({
        ...interests,
        [k]: !interests[k]
      })
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Text me event reminders",
      checked: texts,
      onChange: () => setTexts(!texts)
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Show me on the member directory",
      checked: directory,
      onChange: () => setDirectory(!directory)
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Anything we should know?",
      rows: 3,
      wrapStyle: {
        marginTop: 22
      },
      hint: "Optional. Dietary needs, questions, jokes."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginTop: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onSubmit
    }, "Submit membership"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, "No payment online \u2014 $10 cash to the treasurer.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "$10 per school year"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '14px 0 0',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 11,
        fontSize: 15
      }
    }, ['An invitation to every event', 'Free professional headshots', 'Mock interviews', 'Discounts on club merch', 'The member community and directory'].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--yellow-500)',
        display: 'inline-flex',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 17
    })), t)))), /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Paying dues"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 10px'
      }
    }, "Cash to Sarah"), /*#__PURE__*/React.createElement("ol", {
      style: {
        margin: '0 0 16px',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, [['1', 'Submit this form. You are on the roster right away.'], ['2', 'Hand Sarah $10 cash at any event, or text her to meet up.']].map(([n, t]) => /*#__PURE__*/React.createElement("li", {
      key: n,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 22,
        height: 22,
        borderRadius: 999,
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, n), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 14px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-sunken)',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--text-heading)'
      }
    }, TREASURER.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, TREASURER.role, " \xB7 ", TREASURER.phone))), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: smsHref,
      variant: "outline",
      size: "sm",
      iconAfter: "arrow-right",
      style: {
        textDecoration: 'none'
      }
    }, "Text Sarah about dues")), /*#__PURE__*/React.createElement(Card, {
      variant: "poster"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      icon: "party-popper"
    }, "Signature event"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Taco Bell Black Tie"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, "Rent the tux, take the photo, eat the tacos. Free for members. Date TBA.")))));
  }
  Object.assign(window, {
    JoinLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/JoinLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/LoginLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Input,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  function LoginLean({
    onLogin,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px 96px',
        background: 'var(--surface-sunken)',
        minHeight: '68vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 940,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 36,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Members only"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 66,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Welcome", /*#__PURE__*/React.createElement("br", null), "back"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17.5,
        maxWidth: 400,
        color: 'var(--text-body)',
        marginBottom: 22
      }
    }, "Your dashboard has what you've saved this year, your dues status, and the events you still owe us feedback on."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, [['calendar-check', 'Every event you have attended'], ['piggy-bank', 'What membership has saved you'], ['star', 'Rate the events you attended'], ['wallet', 'Whether your dues are current']].map(([icon, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'center',
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    })), t)))), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Log in"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "Your Southern email and the password you set."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Southern email",
      icon: "mail",
      placeholder: "you@southern.edu",
      defaultValue: "sjobs@southern.edu"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      icon: "lock",
      type: "password",
      defaultValue: "southern"
    })), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      style: {
        marginTop: 22
      },
      onClick: onLogin
    }, "Log in"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        fontSize: 14,
        color: 'var(--text-muted)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, "Forgot your password?")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        paddingTop: 16,
        borderTop: '1.5px solid var(--border-hairline)',
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Been in the club before but never set a password? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate('Claim'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Claim your account")), /*#__PURE__*/React.createElement("span", null, "Never a member? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate('Join'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Join the club"))))));
  }
  Object.assign(window, {
    LoginLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/LoginLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/WorkshopsLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Icon,
    Tooltip,
    IconButton
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const PROGRAMS = [{
    icon: 'camera',
    title: 'Headshot studio',
    when: 'Included with membership',
    body: 'A photographer, a backdrop, and ten minutes each. You leave with a shot you can actually use.',
    tone: 'brand'
  }, {
    icon: 'mic',
    title: 'Mock interviews',
    when: 'Included with membership',
    body: 'Twenty minutes across the table from someone who will tell you the truth, and notes on the spot.',
    tone: 'accent'
  }, {
    icon: 'shopping-bag',
    title: 'Merch discount',
    when: 'Members only',
    body: 'Club shirts and everything else we print, at the member price.',
    tone: 'brand'
  }, {
    icon: 'users',
    title: 'The member community',
    body: 'Access to a society of business-minded people on this campus — and the directory to reach them.',
    when: 'Members only',
    tone: 'accent'
  }];
  const IDEAS = ['Resume clinic', 'Alumni mentor matching', 'Grad school panel', 'Case night'];
  function WorkshopsLean() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-sunken)',
        padding: '56px 32px 60px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 48,
        alignItems: 'end'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Professional development"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 76,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Get hired,", /*#__PURE__*/React.createElement("br", null), "not just involved"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 520
      }
    }, "What membership actually gets you, beyond showing up. Everything here is included in the $10.")), /*#__PURE__*/React.createElement(Card, {
      variant: "poster",
      style: {
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      icon: "calendar-days"
    }, "Coming up"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Headshot sign-ups"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 16px'
      }
    }, "Ruth McKee School of Business. Slots open once we set the date \u2014 members get first pick."), /*#__PURE__*/React.createElement(Button, null, "Get notified")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: p.tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
        color: p.tone === 'accent' ? 'var(--yellow-700)' : 'var(--green-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Add to calendar"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "calendar-plus",
      label: "Add to calendar",
      variant: "ghost",
      size: "sm"
    }))), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, p.when), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, p.body)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56,
        paddingTop: 34,
        borderTop: '2px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "On the table"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 8
      }
    }, "Ideas we're chasing"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16.5,
        color: 'var(--text-muted)',
        maxWidth: 560,
        marginBottom: 20
      }
    }, "Not promises yet. If one of these is the reason you'd join, tell an officer and we'll move it up the list."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10
      }
    }, IDEAS.map(i => /*#__PURE__*/React.createElement(Badge, {
      key: i,
      tone: "neutral"
    }, i)))))));
  }
  Object.assign(window, {
    WorkshopsLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/WorkshopsLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/_optional/MembersLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;

  // Placeholder rosters — swap for the real thing once we pull the class lists.
  const ROSTER = {
    '2026–27': [['Andrew Cornelius', 'Business administration', 'Senior', 'President'], ['Sarah Chotobar', 'Accounting', 'Junior', 'Treasurer'], ['Maya Okonkwo', 'Finance', 'Junior'], ['Dev Patel', 'Marketing', 'Sophomore'], ['Lena Fischer', 'Business administration', 'Senior'], ['Jonah Reyes', 'Accounting', 'Freshman'], ['Tessa Bright', 'Not business — just interested', 'Sophomore'], ['Caleb Nwosu', 'Finance', 'Senior']],
    '2025–26': [['Priya Raman', 'Marketing', 'Senior'], ['Eli Barron', 'Business administration', 'Senior'], ['Noor Haddad', 'Accounting', 'Junior'], ['Grant Whitlow', 'Finance', 'Junior']],
    '2024–25': [['Isabel Moreno', 'Business administration', 'Senior'], ['Theo Lindqvist', 'Finance', 'Senior'], ['Amara Diallo', 'Marketing', 'Junior']]
  };
  const YEARS = Object.keys(ROSTER);
  function initials(name) {
    return name.split(' ').map(p => p[0]).slice(0, 2).join('');
  }
  function Gate({
    onNavigate,
    onLogin
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '80px 32px 110px',
        background: 'var(--surface-sunken)',
        minHeight: '62vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 62,
        height: 62,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-brand)',
        color: 'var(--yellow-500)',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 28
    })), /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Members only"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 62,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "The directory", /*#__PURE__*/React.createElement("br", null), "is behind the door"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17.5,
        color: 'var(--text-body)',
        marginBottom: 26
      }
    }, "Every class going back to the year the club started, and the people in it. Members only \u2014 log in, or join for $10 and you're in."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onLogin
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Join')
    }, "Become a member"))));
  }
  function MembersLean({
    onNavigate,
    user,
    onLogin
  }) {
    const [year, setYear] = React.useState(YEARS[0]);
    if (!user) return /*#__PURE__*/React.createElement(Gate, {
      onNavigate: onNavigate,
      onLogin: onLogin
    });
    const list = ROSTER[year];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 30px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Directory"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 76,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Members"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 580,
        color: 'var(--text-body)'
      }
    }, "Every class, going back to the year the club started. Members choose whether they show up here when they sign up."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 14,
        padding: '7px 13px',
        borderRadius: 999,
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock-open",
      size: 15
    }), "Members only \xB7 you're signed in as ", user.name))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 26
      }
    }, YEARS.map(y => /*#__PURE__*/React.createElement(Tag, {
      key: y,
      selected: year === y,
      onClick: () => setYear(y)
    }, y))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 12,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 40,
        lineHeight: 1,
        color: 'var(--text-heading)'
      }
    }, list.length), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "members \xB7 class of ", year)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 12
      }
    }, list.map(([name, major, standing, role]) => /*#__PURE__*/React.createElement(Card, {
      key: name,
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        padding: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: role ? 'var(--yellow-500)' : 'var(--surface-brand-soft)',
        color: role ? 'var(--ink-900)' : 'var(--green-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 20,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '0.02em'
      }
    }, initials(name)), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 15.5,
        color: 'var(--text-heading)'
      }
    }, name), role ? /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, role) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, major, " \xB7 ", standing)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Coming next"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '10px 0 8px',
        color: 'var(--white)'
      }
    }, "A real contact list"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: 0,
        opacity: 0.92
      }
    }, "The long-term plan: every member and alum, searchable by major and industry, so you can find the person who already did the thing you're trying to do.")), /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Privacy"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Opt in, opt out"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 14px'
      }
    }, "The directory shows your name, major, and class year. Nothing else, and only if you said yes on the form."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Join')
    }, "Add me to the list")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 16
    })), "Rosters before this year are being rebuilt from old sign-up sheets. Names may be missing."))))));
  }
  Object.assign(window, {
    MembersLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/_optional/MembersLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-lean/_optional/ShopLean.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Select,
    Icon,
    Tooltip
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const MEMBER_OFF = 0.2;
  const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
  const MIN_UNITS = 24;
  const RESERVED = 17;
  const ITEMS = [{
    name: 'Club tee',
    detail: 'Heavyweight cotton, navy with the yellow mark',
    price: 22,
    tone: 'brand'
  }, {
    name: 'Crewneck',
    detail: 'The one you will actually wear to class',
    price: 38,
    tone: 'accent'
  }, {
    name: 'Black Tie tee',
    detail: 'Printed after the night, only for people who were there',
    price: 24,
    tone: 'brand'
  }, {
    name: 'Sticker pack',
    detail: 'Four designs. No size to pick.',
    price: 6,
    tone: 'brand',
    nosize: true
  }];
  const money = n => '$' + (Math.round(n * 100) / 100).toFixed(2).replace('.00', '');
  function ShopLean({
    onNavigate,
    user,
    onReserve
  }) {
    const [cart, setCart] = React.useState({});
    const member = !!(user && user.duesPaid);
    const set = (name, patch) => setCart(c => ({
      ...c,
      [name]: {
        size: 'M',
        qty: 0,
        ...c[name],
        ...patch
      }
    }));
    const lines = ITEMS.map(i => ({
      item: i,
      row: cart[i.name]
    })).filter(l => l.row && l.row.qty > 0);
    const full = lines.reduce((s, l) => s + l.item.price * l.row.qty, 0);
    const total = member ? full * (1 - MEMBER_OFF) : full;
    const units = lines.reduce((s, l) => s + l.row.qty, 0);
    const pct = Math.min(100, Math.round((RESERVED + units) / MIN_UNITS * 100));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-brand)',
        color: 'var(--text-on-brand)',
        padding: '58px 32px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.35fr 1fr',
        gap: 48,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Drop 01 \xB7 opens soon"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 88,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.88,
        color: 'var(--white)',
        margin: '12px 0 16px'
      }
    }, "Shop"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 500,
        opacity: 0.95
      }
    }, "We print once, in a batch, and hand it out at a meeting. Reserve your sizes now \u2014 you only pay when the order is confirmed, and nothing ships.")), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '2.5px solid var(--ink-900)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '8px 8px 0 var(--ink-900)',
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        padding: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, "To print, we need"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 64,
        lineHeight: 0.9,
        margin: '8px 0 6px'
      }
    }, MIN_UNITS, " pieces"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        margin: '0 0 14px'
      }
    }, RESERVED + units, " reserved so far. Under the minimum, the drop doesn't run and nobody is charged."), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 12,
        borderRadius: 999,
        background: 'rgba(23,23,23,.16)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: 'var(--ink-900)',
        transition: 'width var(--dur-base) var(--ease-standard)'
      }
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 32px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, [['list', '1 · Reserve sizes', 'Pick what you want. No payment, no commitment until the drop closes.'], ['users', '2 · We hit the minimum', 'Once enough people are in, we confirm the order and text everyone.'], ['hand-coins', '3 · Pay and pick up', 'Cash or Venmo to Sarah, and you collect it at the next meeting.']].map(([icon, t, d]) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      variant: "sunken"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 19
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 21,
        textTransform: 'uppercase',
        fontWeight: 900,
        marginBottom: 6
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '32px 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, !member ? /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        flexWrap: 'wrap',
        marginBottom: 24,
        borderLeft: '6px solid var(--yellow-500)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 260
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--text-heading)'
      }
    }, user ? 'Your dues are not paid yet' : 'Members pay 20% less'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, user ? 'Settle up with Sarah and the member price turns on here automatically.' : 'Log in and the member price applies on its own. No code to enter.')), user ? /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate('Account')
    }, "Pay dues") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate('Login')
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onNavigate('Join')
    }, "Join for $10"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        marginBottom: 24,
        padding: '9px 15px',
        borderRadius: 999,
        background: 'var(--surface-accent)',
        color: 'var(--text-on-accent)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 17
    }), "Member price applied \u2014 20% off, ", user.name.split(' ')[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 20
      }
    }, ITEMS.map(i => {
      const row = cart[i.name] || {
        size: 'M',
        qty: 0
      };
      return /*#__PURE__*/React.createElement(Card, {
        key: i.name,
        padding: "0",
        style: {
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          aspectRatio: '5 / 3',
          background: i.tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
          color: i.tone === 'accent' ? 'var(--yellow-700)' : 'var(--green-700)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1.5px solid var(--border-hairline)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "image",
        size: 34,
        style: {
          opacity: 0.55
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 'var(--space-5)',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: 24,
          textTransform: 'uppercase',
          fontWeight: 900,
          margin: '0 0 6px'
        }
      }, i.name), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: '0 0 14px',
          fontSize: 14.5,
          color: 'var(--text-muted)',
          flex: 1
        }
      }, i.detail), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          gap: 10,
          marginBottom: 14
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 32,
          color: member ? 'var(--yellow-700)' : 'var(--text-heading)'
        }
      }, money(member ? i.price * (1 - MEMBER_OFF) : i.price)), member ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5,
          color: 'var(--text-muted)',
          textDecoration: 'line-through'
        }
      }, money(i.price)) : /*#__PURE__*/React.createElement(Tooltip, {
        label: "Log in to apply"
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13.5,
          fontWeight: 700,
          color: 'var(--green-700)',
          cursor: 'pointer'
        },
        onClick: () => onNavigate('Login')
      }, money(i.price * (1 - MEMBER_OFF)), " for members"))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 10,
          alignItems: 'flex-end'
        }
      }, !i.nosize ? /*#__PURE__*/React.createElement(Select, {
        label: "Size",
        value: row.size,
        onChange: e => set(i.name, {
          size: e.target.value
        }),
        options: SIZES,
        wrapStyle: {
          flex: 1
        }
      }) : null, /*#__PURE__*/React.createElement(Select, {
        label: "Qty",
        value: String(row.qty),
        onChange: e => set(i.name, {
          qty: Number(e.target.value)
        }),
        options: ['0', '1', '2', '3', '4'],
        wrapStyle: {
          width: i.nosize ? '100%' : 86
        }
      }))));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Your reservation"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 14px'
      }
    }, "Drop 01"), lines.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 16px'
      }
    }, "Nothing picked yet. Choose a size and quantity to hold your spot in the batch.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 16
      }
    }, lines.map(l => /*#__PURE__*/React.createElement("div", {
      key: l.item.name,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        fontSize: 14.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-body)'
      }
    }, l.row.qty, "\xD7 ", l.item.name, l.item.nosize ? '' : ' · ' + l.row.size), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--text-heading)'
      }
    }, money(l.item.price * l.row.qty * (member ? 1 - MEMBER_OFF : 1)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 14,
        borderTop: '1.5px solid var(--border-hairline)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Total"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 38,
        color: 'var(--text-heading)'
      }
    }, money(total))), member && full > 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--yellow-700)',
        fontWeight: 700,
        textAlign: 'right',
        marginTop: 2
      }
    }, "You saved ", money(full - total)) : null, /*#__PURE__*/React.createElement(Button, {
      full: true,
      size: "lg",
      style: {
        marginTop: 16
      },
      disabled: units === 0,
      onClick: () => onReserve(units)
    }, "Reserve my sizes"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        margin: '12px 0 0'
      }
    }, "No payment now. We text you when the drop closes and the order is confirmed.")), /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Why a drop"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: '10px 0 0',
        opacity: 0.94
      }
    }, "Printing in one batch is about half the cost of ordering one at a time, and nobody pays shipping. The tradeoff is you wait for the batch.")))))));
  }
  Object.assign(window, {
    ShopLean
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-lean/_optional/ShopLean.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/AccountV2.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Icon,
    IconButton,
    Textarea,
    Switch,
    Tooltip
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const SAVINGS = [{
    icon: 'camera',
    label: 'Free professional headshots',
    detail: 'Headshot night · local studio rate',
    amount: 40
  }, {
    icon: 'shopping-bag',
    label: '20% off club merch',
    detail: '$50 spent at the merch table',
    amount: 10
  }, {
    icon: 'utensils',
    label: 'Free entry, Taco Bell Black Tie',
    detail: 'Guests paid $5',
    amount: 5
  }];
  const ATTENDED = [{
    title: 'Taco Bell Black Tie',
    when: 'Last year',
    category: 'Signature',
    tone: 'accent'
  }, {
    title: 'Headshot night',
    when: 'Last year',
    category: 'Workshop'
  }, {
    title: 'Mock interview night',
    when: 'Last year',
    category: 'Workshop'
  }, {
    title: 'Alumni mixer',
    when: 'Last year',
    category: 'Networking'
  }];
  function Stars({
    value,
    onChange
  }) {
    const [hover, setHover] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      },
      onMouseLeave: () => setHover(0)
    }, [1, 2, 3, 4, 5].map(n => {
      const on = n <= (hover || value);
      return /*#__PURE__*/React.createElement("button", {
        key: n,
        type: "button",
        "aria-label": n + ' star' + (n > 1 ? 's' : ''),
        onMouseEnter: () => setHover(n),
        onClick: () => onChange(n),
        style: {
          background: 'none',
          border: 'none',
          padding: 2,
          cursor: 'pointer',
          lineHeight: 0,
          color: on ? 'var(--yellow-600)' : 'var(--border-hairline)',
          transition: 'color var(--dur-fast) var(--ease-standard)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: on ? 'star' : 'star',
        size: 22,
        style: on ? {} : {
          opacity: 0.85
        }
      }));
    }));
  }
  const TREASURER_TEL = '+14079122508';
  function AccountV2({
    user,
    onNavigate,
    onLogout,
    onSaveFeedback
  }) {
    const paid = !!user.duesPaid;
    const veteran = user.since !== '2026';
    const savings = veteran ? SAVINGS : [];
    const attended = veteran ? ATTENDED : [];
    const [ratings, setRatings] = React.useState({
      'Taco Bell Black Tie': 5,
      'Headshot night': 4
    });
    const [open, setOpen] = React.useState(null);
    const [notes, setNotes] = React.useState({
      'Taco Bell Black Tie': 'Best night of the semester. More tacos next time.'
    });
    const [texts, setTexts] = React.useState(true);
    const [directory, setDirectory] = React.useState(true);
    const saved = savings.reduce((s, r) => s + r.amount, 0);
    const rated = attended.filter(e => ratings[e.title]).length;
    const stats = [['calendar-check', attended.length, 'events attended'], ['piggy-bank', '$' + saved, 'saved as a member'], paid ? ['wallet', '2026–27', 'dues paid'] : ['wallet', '$10', 'dues owed'], ['star', rated + '/' + attended.length, 'events rated']];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-brand)',
        color: 'var(--text-on-brand)',
        padding: '52px 32px 56px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 78,
        height: 78,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 34,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, user.initials), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 240
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Member since ", user.since), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 60,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        color: 'var(--white)',
        margin: '8px 0 8px'
      }
    }, user.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        opacity: 0.92
      }
    }, user.major, " \xB7 ", user.standing, " \xB7 ", user.email), paid ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        marginTop: 12,
        padding: '6px 12px',
        borderRadius: 999,
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 15
    }), "Dues current through 2026\u201327") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      onClick: () => onNavigate('Members')
    }, "Member directory"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "log-out",
      onClick: onLogout
    }, "Log out"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16,
        marginTop: 38
      }
    }, stats.map(([icon, n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: 'rgba(246,243,237,.10)',
        border: '1px solid rgba(246,243,237,.18)',
        borderRadius: 'var(--radius-lg)',
        padding: '18px 20px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--yellow-500)',
        display: 'inline-flex',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 46,
        lineHeight: 0.9,
        color: 'var(--white)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        opacity: 0.8,
        marginTop: 6
      }
    }, l)))))), !paid ? /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '24px 32px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        flexWrap: 'wrap',
        borderLeft: '6px solid var(--yellow-500)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 260
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--text-heading)'
      }
    }, "Your 2026\u201327 dues aren't paid"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, "Dues are $10 each school year. Hand Sarah cash at any event \u2014 or if you already paid her this year, text her and she'll fix the record.")), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: 'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent('Hey Sarah! This is ' + user.name + '. Checking on my club dues.'),
      variant: "outline",
      style: {
        textDecoration: 'none'
      }
    }, "Text Sarah")))) : null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "The math"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 6
      }
    }, "Your $10, so far"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--text-muted)',
        marginBottom: 18,
        maxWidth: 520
      }
    }, "What membership has been worth to you this year, based on what you've actually shown up to."), savings.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      variant: "sunken"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "Nothing to add up yet. Show up to a headshot night or buy a shirt at the member price and this fills in on its own.")) : /*#__PURE__*/React.createElement(Card, {
      padding: "0",
      style: {
        overflow: 'hidden'
      }
    }, savings.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '16px 20px',
        borderBottom: '1.5px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: r.icon,
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 15.5,
        color: 'var(--text-heading)'
      }
    }, r.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, r.detail)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 28,
        color: 'var(--text-heading)'
      }
    }, "$", r.amount))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 14,
        padding: '18px 20px',
        background: 'var(--surface-accent)',
        color: 'var(--text-on-accent)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase'
      }
    }, "Saved so far \xB7 ", saved / 10, "\xD7 your dues"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 42,
        lineHeight: 0.9
      }
    }, "$", saved)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "Feedback"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 6
      }
    }, "Events you attended"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--text-muted)',
        marginBottom: 18,
        maxWidth: 520
      }
    }, "Rate them honestly. The officers read every note before planning the next one."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, attended.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      variant: "sunken",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        flex: 1,
        minWidth: 240,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "You haven't been to one yet. Meet your officers is on September 24 \u2014 start there."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "See the calendar")) : null, attended.map(e => {
      const isOpen = open === e.title;
      return /*#__PURE__*/React.createElement(Card, {
        key: e.title,
        variant: e.tone === 'accent' ? 'poster' : 'plain'
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 200
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: e.tone === 'accent' ? 'accent' : 'neutral'
      }, e.category), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: 25,
          textTransform: 'uppercase',
          fontWeight: 900,
          margin: '10px 0 4px'
        }
      }, e.title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          color: 'var(--text-muted)'
        }
      }, e.when, " \xB7 Ruth McKee School of Business")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Stars, {
        value: ratings[e.title] || 0,
        onChange: n => {
          setRatings({
            ...ratings,
            [e.title]: n
          });
          setOpen(e.title);
        }
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        iconAfter: isOpen ? 'chevron-up' : 'chevron-down',
        onClick: () => setOpen(isOpen ? null : e.title)
      }, notes[e.title] ? 'Edit note' : 'Leave a note'))), isOpen ? /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 18,
          paddingTop: 18,
          borderTop: '1.5px solid var(--border-hairline)'
        }
      }, /*#__PURE__*/React.createElement(Textarea, {
        label: "What worked, what didn't?",
        rows: 3,
        value: notes[e.title] || '',
        onChange: ev => setNotes({
          ...notes,
          [e.title]: ev.target.value
        }),
        hint: "Officers only. Your name is attached."
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 10,
          marginTop: 14
        }
      }, /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => {
          setOpen(null);
          onSaveFeedback(e.title);
        }
      }, "Save feedback"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: () => setOpen(null)
      }, "Cancel"))) : notes[e.title] ? /*#__PURE__*/React.createElement("p", {
        style: {
          margin: '14px 0 0',
          fontSize: 14.5,
          color: 'var(--text-muted)',
          fontStyle: 'italic'
        }
      }, "\u201C", notes[e.title], "\u201D") : null);
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Member price"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 52,
        lineHeight: 0.92,
        color: 'var(--white)',
        margin: '10px 0 8px'
      }
    }, "20% off"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: '0 0 16px',
        opacity: 0.92
      }
    }, paid ? "Applied automatically in the shop while you're signed in. Nothing to enter." : 'Turns on in the shop as soon as your dues are on record.'), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Shop')
    }, "Go to the shop")), /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Up next"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Nothing scheduled yet"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 14px'
      }
    }, "Officers are locking in dates. You'll get a text the moment the first one goes up."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "See what's planned")), /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Settings"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 14px'
      }
    }, "Your preferences"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Text me event reminders",
      checked: texts,
      onChange: () => setTexts(!texts)
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Show me in the member directory",
      checked: directory,
      onChange: () => setDirectory(!directory)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        paddingTop: 14,
        borderTop: '1.5px solid var(--border-hairline)',
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "Edit profile"), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Officers can export the roster"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "download"
    }, "Roster"))))))));
  }
  Object.assign(window, {
    AccountV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/AccountV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/ChromeV2.jsx
try { (() => {
(() => {
  const {
    NavBar,
    Button,
    Icon,
    IconButton
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const NAV = ['Home', {
    value: 'Events',
    label: 'Events',
    children: [{
      value: 'Events',
      label: 'Calendar'
    }, {
      value: 'Workshops',
      label: 'Workshops'
    }]
  }, 'Shop', 'Members'];
  const FOOTER_LINKS = ['Home', 'Events', 'Workshops', 'Shop', 'Members', 'Join', 'Log in', 'Claim'];
  function SiteHeaderV2({
    page,
    onNavigate,
    user,
    onLogin,
    onLogout
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--green-500)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--yellow-500)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(NavBar, {
      brand: "Southern Business Club",
      links: NAV,
      active: page,
      onNavigate: onNavigate,
      action: user ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: onLogout
      }, "Log out"), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => onNavigate('Account')
      }, "My account")) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: onLogin
      }, "Log in"), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => onNavigate('Join')
      }, "Join the club")),
      style: {
        padding: '18px 32px',
        background: 'transparent',
        borderBottom: 'none'
      }
    })));
  }
  function Section({
    eyebrow,
    title,
    children,
    style,
    maxWidth = 'var(--container-max)'
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth,
        margin: '0 auto'
      }
    }, eyebrow ? /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 44,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 28
      }
    }, title) : null, children));
  }
  function SiteFooterV2({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)',
        padding: '56px 32px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 30,
        textTransform: 'uppercase',
        lineHeight: 0.92
      }
    }, "Southern", /*#__PURE__*/React.createElement("br", null), "Business Club"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        opacity: 0.75,
        marginTop: 14,
        maxWidth: 300
      }
    }, "The business club at Southern Adventist University. Collegedale, Tennessee."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "instagram",
      label: "Instagram",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "linkedin",
      label: "LinkedIn",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "mail",
      label: "Email us",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }))), [['Club', FOOTER_LINKS], ['Visit us', ['Southern Adventist University', 'Collegedale, Tennessee', 'businessclub@southern.edu']]].map(([title, items]) => /*#__PURE__*/React.createElement("div", {
      key: title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)',
        marginBottom: 12
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9,
        fontSize: 14.5,
        opacity: 0.85
      }
    }, items.map(i => title === 'Club' ? /*#__PURE__*/React.createElement("span", {
      key: i,
      onClick: () => onNavigate(i === 'Log in' ? 'Login' : i),
      style: {
        cursor: 'pointer'
      }
    }, i) : /*#__PURE__*/React.createElement("span", {
      key: i
    }, i)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '36px auto 0',
        paddingTop: 18,
        borderTop: '1px solid rgba(246,243,237,.16)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12.5,
        opacity: 0.6,
        letterSpacing: '0.04em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Business, but fun"), /*#__PURE__*/React.createElement("span", null, "School of Business")));
  }
  Object.assign(window, {
    SiteHeaderV2,
    SiteFooterV2,
    SectionV2: Section,
    NAVV2: NAV
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/ChromeV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/ClaimV2.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Input,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;

  /* Stand-in for the Excel roster. In real life the site would check this list, not hold it. */
  const ROSTER = [{
    email: 'sjobs@southern.edu',
    name: 'Steve Jobs',
    initials: 'SJ',
    major: 'Business administration',
    standing: 'Junior',
    since: '2025',
    duesPaid: true
  }, {
    email: 'mokonkwo@southern.edu',
    name: 'Maya Okonkwo',
    initials: 'MO',
    major: 'Finance',
    standing: 'Junior',
    since: '2025',
    duesPaid: true
  }, {
    email: 'jreyes@southern.edu',
    name: 'Jonah Reyes',
    initials: 'JR',
    major: 'Accounting',
    standing: 'Freshman',
    since: '2026',
    duesPaid: false
  }];
  const TREASURER_TEL = '+14079122508';
  const YEAR = '2026–27';
  function Row({
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        padding: '11px 0',
        borderBottom: '1.5px solid var(--border-hairline)',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        color: 'var(--text-heading)',
        textAlign: 'right'
      }
    }, value));
  }
  function ClaimV2({
    onNavigate,
    onClaimed
  }) {
    const [email, setEmail] = React.useState('');
    const [step, setStep] = React.useState('email');
    const [match, setMatch] = React.useState(null);
    const [code, setCode] = React.useState('');
    const [pw, setPw] = React.useState('');
    const [pw2, setPw2] = React.useState('');
    const pwOk = pw.length >= 8 && pw === pw2 && code.trim().length >= 4;
    const check = () => {
      const found = ROSTER.find(r => r.email.toLowerCase() === email.trim().toLowerCase());
      setMatch(found || null);
      setStep(found ? 'found' : 'notfound');
    };
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px 32px 96px',
        background: 'var(--surface-sunken)',
        minHeight: '70vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1000,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Already a member"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 62,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Claim your", /*#__PURE__*/React.createElement("br", null), "account"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17.5,
        color: 'var(--text-body)',
        maxWidth: 420,
        marginBottom: 24
      }
    }, "If you've been in the club before, you don't sign up from scratch. We have you on the roster \u2014 enter your Southern email, set a password, and your history carries over."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13
      }
    }, [['user-check', 'We check the email against the club roster'], ['key-round', 'You set a password once, then log in from the site like normal'], ['history', 'Your past events and dues record carry over']].map(([icon, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'center',
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    })), t))), /*#__PURE__*/React.createElement(Card, {
      variant: "sunken",
      style: {
        marginTop: 26,
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Prototype"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '12px 0 10px'
      }
    }, "Try each outcome with these test emails:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        fontSize: 13.5
      }
    }, [['sjobs@southern.edu', 'dues already paid for ' + YEAR], ['jreyes@southern.edu', 'on the roster, needs to renew'], ['nobody@southern.edu', 'not on the roster']].map(([e, w]) => /*#__PURE__*/React.createElement("div", {
      key: e,
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => {
        setEmail(e);
        setStep('email');
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        color: 'var(--green-700)',
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, e), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "\u2014 ", w)))))), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, step === 'email' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Find me"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "Use the email you gave us when you joined."), /*#__PURE__*/React.createElement(Input, {
      label: "Southern email",
      icon: "mail",
      placeholder: "you@southern.edu",
      value: email,
      onChange: e => setEmail(e.target.value)
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      style: {
        marginTop: 20
      },
      disabled: !email.trim(),
      onClick: check
    }, "Look me up"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '16px 0 0',
        textAlign: 'center'
      }
    }, "Never joined before? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate('Join'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Sign up here"))) : null, step === 'found' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-accent)',
        color: 'var(--text-on-accent)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-check",
      size: 26
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Found you"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 18px'
      }
    }, "This is what the roster has. Confirm it's you and pick a password."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Row, {
      label: "Name",
      value: match.name
    }), /*#__PURE__*/React.createElement(Row, {
      label: "Major",
      value: match.major
    }), /*#__PURE__*/React.createElement(Row, {
      label: "Class standing",
      value: match.standing
    }), /*#__PURE__*/React.createElement(Row, {
      label: "Member since",
      value: match.since
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        padding: '11px 0',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "Dues"), match.duesPaid ? /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      icon: "badge-check"
    }, "Paid for ", YEAR) : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Not paid for ", YEAR))), !match.duesPaid ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-sunken)',
        borderLeft: '5px solid var(--yellow-500)',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14.5,
        color: 'var(--text-heading)',
        marginBottom: 4
      }
    }, "Dues are $10 a year, and ", YEAR, " isn't paid"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '0 0 12px'
      }
    }, "You still get the account and your history. Hand Sarah $10 at the next event to stay a member \u2014 or if you already paid her this year, text her and she'll fix the record."), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: 'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent('Hey Sarah! This is ' + match.name + '. I think I already paid my club dues but the site has me as unpaid. Can you check?'),
      variant: "outline",
      size: "sm",
      style: {
        textDecoration: 'none'
      }
    }, "Text Sarah")) : null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      onClick: () => setStep('setpw')
    }, "That's me \u2014 set a password"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '14px 0 0',
        textAlign: 'center'
      }
    }, "Not you? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => setStep('email'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Try another email"))) : null, step === 'setpw' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-brand)',
        color: 'var(--yellow-500)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "key-round",
      size: 26
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Set a password"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "We texted a 6-digit code to the number on your roster entry, so we know it's really you. After this, you just log in from the site."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Code from the text",
      icon: "message-square",
      placeholder: "123456",
      value: code,
      onChange: e => setCode(e.target.value),
      hint: "Prototype \u2014 type anything four characters or longer."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "New password",
      icon: "lock",
      type: "password",
      placeholder: "At least 8 characters",
      value: pw,
      onChange: e => setPw(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Confirm password",
      icon: "lock",
      type: "password",
      value: pw2,
      onChange: e => setPw2(e.target.value),
      error: pw2.length > 0 && pw !== pw2,
      hint: pw2.length > 0 && pw !== pw2 ? "Those don't match." : undefined
    })), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      style: {
        marginTop: 20
      },
      disabled: !pwOk,
      onClick: () => onClaimed(match)
    }, "Finish and log in"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '14px 0 0',
        textAlign: 'center'
      }
    }, "Didn't get the text? ", /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Send it again"))) : null, step === 'notfound' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-search",
      size: 26
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Not on the roster"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "We can't find ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-heading)'
      }
    }, email), ". Either you joined with a different email, or you've never been a member."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      onClick: () => onNavigate('Join')
    }, "Join the club \u2014 $10"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      full: true,
      onClick: () => setStep('email')
    }, "Try a different email"), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: 'sms:' + TREASURER_TEL + '?&body=' + encodeURIComponent("Hey Sarah! I'm already in the business club but the site can't find me. Can you add my email?"),
      variant: "ghost",
      full: true,
      style: {
        textDecoration: 'none'
      }
    }, "I'm sure I'm a member \u2014 text Sarah"))) : null)));
  }
  Object.assign(window, {
    ClaimV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/ClaimV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/EventsV2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Tabs,
    EventCard,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const ALL = [{
    date: {
      month: 'Sep',
      day: 24
    },
    title: 'Meet your officers',
    time: 'Thursday, 5:30 PM',
    location: 'Ruth McKee School of Business',
    description: 'Pop in, say hi, grab a snack. No program, no commitment.',
    category: 'Social',
    topic: 'Networking'
  }, {
    date: {
      month: 'Oct',
      day: 2
    },
    title: 'Vespers at the Schnells',
    time: '5:30 PM',
    location: "Prof. Ben Schnell's house · 4461 Suhrie Road, Ooltewah, TN 37363",
    description: 'Rice bowls, yard games, and worship from Professor Bellino. Worship credit given.',
    category: 'Vespers',
    topic: 'Worship'
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Taco Bell Black Tie',
    time: 'Time TBA',
    location: 'Ruth McKee School of Business',
    category: 'Signature',
    topic: 'Traditions',
    tone: 'accent',
    poster: true
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Headshot night',
    time: 'Time TBA',
    location: 'Ruth McKee School of Business',
    category: 'Workshop',
    topic: 'Workshops'
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Mock interview night',
    time: 'Time TBA',
    location: 'Ruth McKee School of Business',
    category: 'Workshop',
    topic: 'Workshops'
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Alumni mixer',
    time: 'Time TBA',
    location: 'Ruth McKee School of Business',
    category: 'Networking',
    topic: 'Networking'
  }, {
    date: {
      month: 'Date',
      day: 'TBA'
    },
    title: 'Service project',
    time: 'Time TBA',
    location: 'Off campus',
    category: 'Service',
    topic: 'Service'
  }];
  const PAST = [];
  function EventsV2({
    onRsvp
  }) {
    const [tab, setTab] = React.useState('Upcoming');
    const [topic, setTopic] = React.useState('All');
    const source = tab === 'Upcoming' ? ALL : PAST;
    const list = topic === 'All' ? source : source.filter(e => e.topic === topic);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 30px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "2026\u201327 school year"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 76,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Events"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 560,
        color: 'var(--text-body)'
      }
    }, "Members are invited to everything we run. Dates are not locked in yet \u2014 sign up and we'll text you when they are."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: ['Upcoming', 'Past'],
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: 20
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 26
      }
    }, ['All', 'Networking', 'Workshops', 'Worship', 'Service', 'Traditions'].map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      selected: topic === t,
      onClick: () => setTopic(t)
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, list.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
      key: e.title
    }, e, {
      onRsvp: tab === 'Upcoming' ? onRsvp : undefined
    }))), list.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      variant: "sunken"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)'
      }
    }, "Nothing here yet \u2014 check back after the next officer meeting.")) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Members only"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Officer hours"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 14px'
      }
    }, "Bring a resume, or just questions. Times posted once the semester settles."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right"
    }, "Book a slot")), /*#__PURE__*/React.createElement(Card, {
      variant: "accent"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, "Reminders"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '10px 0 8px'
      }
    }, "Get the text list"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: '0 0 14px'
      }
    }, "One message the morning of each event. Nothing else, ever."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "Add my number")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }), " Most events are in the Ruth McKee School of Business."))))));
  }
  Object.assign(window, {
    EventsV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/EventsV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/HomeV2.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const PILLARS = [{
    icon: 'calendar-days',
    title: 'Events',
    body: 'Mixers, service projects, fundraisers, and the one night everyone dresses up. This is where the memories come from.'
  }, {
    icon: 'briefcase',
    title: 'Professional development',
    body: 'Headshots, mock interviews, and practice at the things you will be judged on later — before it counts.'
  }, {
    icon: 'users',
    title: 'The member community',
    body: 'Forty-plus people who want to build something, and a directory to reach any of them.'
  }];
  function HomeV2({
    onNavigate,
    onRsvp
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-brand)',
        color: 'var(--text-on-brand)',
        padding: '78px 32px 84px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.35fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Southern Adventist University"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 104,
        lineHeight: 0.88,
        fontWeight: 900,
        textTransform: 'uppercase',
        color: 'var(--white)',
        margin: '14px 0 20px',
        letterSpacing: '-0.01em'
      }
    }, "Business,", /*#__PURE__*/React.createElement("br", null), "but fun"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18.5,
        maxWidth: 480,
        opacity: 0.95
      }
    }, "We run the networking nights, the interview prep, and the one black-tie dinner on campus served out of a Taco Bell bag. Everyone's welcome \u2014 majors optional."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNavigate('Join')
    }, "Become a member"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "See what's coming up"))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '2.5px solid var(--ink-900)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '8px 8px 0 var(--ink-900)',
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        padding: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, "Signature event \xB7 Date TBA"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 52,
        lineHeight: 0.9,
        textTransform: 'uppercase',
        margin: '10px 0 12px'
      }
    }, "Taco Bell", /*#__PURE__*/React.createElement("br", null), "Black Tie"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        margin: '0 0 18px'
      }
    }, "Formalwear. Fast food. Free for members."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onRsvp
    }, "Get notified")))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "What we do",
      title: "Three things, done well"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18.5,
        maxWidth: 620,
        color: 'var(--text-body)',
        margin: '-14px 0 30px'
      }
    }, "We exist to help students grow a network, make memories with friends, and walk into a career ready. Everything we run comes back to one of those."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, PILLARS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        marginBottom: 8
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, p.body))))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Calendar",
      title: "What we're planning",
      style: {
        background: 'var(--surface-sunken)',
        paddingTop: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 14
      }
    }, [['Meet your officers', 'Pop in, say hi, grab a snack. Ruth McKee School of Business, 5:30 PM.', 'Sep 24', 'accent'], ['Vespers at the Schnells', 'Rice bowls, yard games, worship from Professor Bellino, and worship credit.', 'Oct 2', 'accent'], ['Taco Bell Black Tie', 'Formalwear, fast food, and the group photo.', 'Date TBA'], ['Headshot night', 'Ten minutes each, edited shots back within the week.', 'Date TBA']].map(([t, d, when, tone]) => /*#__PURE__*/React.createElement(Card, {
      key: t
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: tone || 'neutral'
    }, when), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "Full calendar"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, "Most events are in the Ruth McKee School of Business. Dates go up as soon as the officers lock them in."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, [['40+', 'members'], ['6', 'officers'], ['$10', 'for the whole year'], ['1', 'black-tie taco night']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        borderTop: '4px solid var(--green-500)',
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 56,
        lineHeight: 0.9,
        color: 'var(--text-heading)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, l))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        background: 'var(--surface-brand)',
        borderRadius: 'var(--radius-xl)',
        padding: '46px 44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        color: 'var(--text-on-brand)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 46,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.92,
        color: 'var(--white)',
        marginBottom: 10
      }
    }, "Dues are $10 for the year"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        opacity: 0.92
      }
    }, "Every event, free headshots, mock interviews, the member community, and a discount on club merch.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNavigate('Join')
    }, "Sign me up"))));
  }
  Object.assign(window, {
    HomeV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/HomeV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/JoinV2.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Input,
    Select,
    Textarea,
    Checkbox,
    Radio,
    Switch,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const TREASURER = {
    name: 'Sarah Chotobar',
    role: 'Treasurer',
    phone: '+1 (407) 912-2508',
    tel: '+14079122508'
  };
  function JoinV2({
    onSubmit,
    onNavigate
  }) {
    const [first, setFirst] = React.useState('');
    const [last, setLast] = React.useState('');
    const [texts, setTexts] = React.useState(true);
    const [directory, setDirectory] = React.useState(true);
    const [interests, setInterests] = React.useState({
      Networking: true,
      'Mock interviews': true,
      Headshots: false
    });
    const smsBody = `Hey Sarah! This is ${first || '________'} ${last || '__________'}. I just registered for the business club. How can I get my dues to you?`;
    const smsHref = 'sms:' + TREASURER.tel + '?&body=' + encodeURIComponent(smsBody);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 84px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1040,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: 40,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Membership"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 72,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 12px'
      }
    }, "Join the club"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 520,
        marginBottom: 16
      }
    }, "Two minutes now, $10 cash whenever you next see an officer. That covers the whole year."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 28,
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-sunken)',
        borderLeft: '5px solid var(--yellow-500)',
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-check",
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-body)'
      }
    }, "Been in the club before? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate('Claim'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Claim your account instead"), " \u2014 your history carries over, and you only pay this year's $10.")), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "Steve",
      value: first,
      onChange: e => setFirst(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      placeholder: "Jobs",
      value: last,
      onChange: e => setLast(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Southern email",
      icon: "mail",
      placeholder: "you@southern.edu",
      wrapStyle: {
        gridColumn: '1 / -1'
      }
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone number",
      icon: "phone",
      placeholder: "(555) 123-4567",
      hint: "So we can text you event reminders and dues confirmation.",
      wrapStyle: {
        gridColumn: '1 / -1'
      }
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Class standing",
      options: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Major",
      defaultValue: "Business administration",
      options: ['Accounting', 'Business administration', 'Finance', 'Marketing', 'Not business — just interested']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      icon: "lock",
      type: "password",
      placeholder: "At least 8 characters",
      hint: "You'll use this and your email to log in.",
      wrapStyle: {
        gridColumn: '1 / -1'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        paddingTop: 22,
        borderTop: '1.5px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        marginBottom: 12,
        color: 'var(--text-heading)'
      }
    }, "What are you here for?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, Object.keys(interests).map(k => /*#__PURE__*/React.createElement(Checkbox, {
      key: k,
      label: k,
      checked: interests[k],
      onChange: () => setInterests({
        ...interests,
        [k]: !interests[k]
      })
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Text me event reminders",
      checked: texts,
      onChange: () => setTexts(!texts)
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Show me on the member directory",
      checked: directory,
      onChange: () => setDirectory(!directory)
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Anything we should know?",
      rows: 3,
      wrapStyle: {
        marginTop: 22
      },
      hint: "Optional. Dietary needs, questions, jokes."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginTop: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onSubmit
    }, "Submit membership"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, "No payment online \u2014 $10 cash to the treasurer.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "$10 per school year"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '14px 0 0',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 11,
        fontSize: 15
      }
    }, ['An invitation to every event', 'Free professional headshots', 'Mock interviews', 'Discounts on club merch', 'The member community and directory'].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--yellow-500)',
        display: 'inline-flex',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 17
    })), t)))), /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Paying dues"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 10px'
      }
    }, "Cash to Sarah"), /*#__PURE__*/React.createElement("ol", {
      style: {
        margin: '0 0 16px',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, [['1', 'Submit this form. You are on the roster right away.'], ['2', 'Hand Sarah $10 cash at any event, or text her to meet up.']].map(([n, t]) => /*#__PURE__*/React.createElement("li", {
      key: n,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 22,
        height: 22,
        borderRadius: 999,
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, n), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 14px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-sunken)',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--text-heading)'
      }
    }, TREASURER.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, TREASURER.role, " \xB7 ", TREASURER.phone))), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: smsHref,
      variant: "outline",
      size: "sm",
      iconAfter: "arrow-right",
      style: {
        textDecoration: 'none'
      }
    }, "Text Sarah about dues")), /*#__PURE__*/React.createElement(Card, {
      variant: "poster"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      icon: "party-popper"
    }, "Signature event"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Taco Bell Black Tie"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, "Rent the tux, take the photo, eat the tacos. Free for members. Date TBA.")))));
  }
  Object.assign(window, {
    JoinV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/JoinV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/LoginV2.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Input,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  function LoginV2({
    onLogin,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px 96px',
        background: 'var(--surface-sunken)',
        minHeight: '68vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 940,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 36,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Members only"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 66,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Welcome", /*#__PURE__*/React.createElement("br", null), "back"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17.5,
        maxWidth: 400,
        color: 'var(--text-body)',
        marginBottom: 22
      }
    }, "Your dashboard has the member directory, what you've saved this year, and the events you still owe us feedback on."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, [['users', 'The full member community'], ['piggy-bank', 'What membership has saved you'], ['star', 'Rate the events you attended'], ['wallet', 'Whether your dues are current']].map(([icon, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'center',
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    })), t)))), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '0 0 6px'
      }
    }, "Log in"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 20px'
      }
    }, "Your Southern email and the password you set."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Southern email",
      icon: "mail",
      placeholder: "you@southern.edu",
      defaultValue: "sjobs@southern.edu"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      icon: "lock",
      type: "password",
      defaultValue: "southern"
    })), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      style: {
        marginTop: 22
      },
      onClick: onLogin
    }, "Log in"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        fontSize: 14,
        color: 'var(--text-muted)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, "Forgot your password?")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        paddingTop: 16,
        borderTop: '1.5px solid var(--border-hairline)',
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Been in the club before but never set a password? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate('Claim'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Claim your account")), /*#__PURE__*/React.createElement("span", null, "Never a member? ", /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate('Join'),
      style: {
        cursor: 'pointer',
        fontWeight: 700,
        color: 'var(--green-700)'
      }
    }, "Join the club"))))));
  }
  Object.assign(window, {
    LoginV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/LoginV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/MembersV2.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;

  // Placeholder rosters — swap for the real thing once we pull the class lists.
  const ROSTER = {
    '2026–27': [['Andrew Cornelius', 'Business administration', 'Senior', 'President'], ['Sarah Chotobar', 'Accounting', 'Junior', 'Treasurer'], ['Maya Okonkwo', 'Finance', 'Junior'], ['Dev Patel', 'Marketing', 'Sophomore'], ['Lena Fischer', 'Business administration', 'Senior'], ['Jonah Reyes', 'Accounting', 'Freshman'], ['Tessa Bright', 'Not business — just interested', 'Sophomore'], ['Caleb Nwosu', 'Finance', 'Senior']],
    '2025–26': [['Priya Raman', 'Marketing', 'Senior'], ['Eli Barron', 'Business administration', 'Senior'], ['Noor Haddad', 'Accounting', 'Junior'], ['Grant Whitlow', 'Finance', 'Junior']],
    '2024–25': [['Isabel Moreno', 'Business administration', 'Senior'], ['Theo Lindqvist', 'Finance', 'Senior'], ['Amara Diallo', 'Marketing', 'Junior']]
  };
  const YEARS = Object.keys(ROSTER);
  function initials(name) {
    return name.split(' ').map(p => p[0]).slice(0, 2).join('');
  }
  function Gate({
    onNavigate,
    onLogin
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '80px 32px 110px',
        background: 'var(--surface-sunken)',
        minHeight: '62vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 62,
        height: 62,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-brand)',
        color: 'var(--yellow-500)',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 28
    })), /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Members only"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 62,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "The directory", /*#__PURE__*/React.createElement("br", null), "is behind the door"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17.5,
        color: 'var(--text-body)',
        marginBottom: 26
      }
    }, "Every class going back to the year the club started, and the people in it. Members only \u2014 log in, or join for $10 and you're in."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onLogin
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Join')
    }, "Become a member"))));
  }
  function MembersV2({
    onNavigate,
    user,
    onLogin
  }) {
    const [year, setYear] = React.useState(YEARS[0]);
    if (!user) return /*#__PURE__*/React.createElement(Gate, {
      onNavigate: onNavigate,
      onLogin: onLogin
    });
    const list = ROSTER[year];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 30px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Directory"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 76,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Members"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 580,
        color: 'var(--text-body)'
      }
    }, "Every class, going back to the year the club started. Members choose whether they show up here when they sign up."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 14,
        padding: '7px 13px',
        borderRadius: 999,
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock-open",
      size: 15
    }), "Members only \xB7 you're signed in as ", user.name))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 26
      }
    }, YEARS.map(y => /*#__PURE__*/React.createElement(Tag, {
      key: y,
      selected: year === y,
      onClick: () => setYear(y)
    }, y))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 12,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 40,
        lineHeight: 1,
        color: 'var(--text-heading)'
      }
    }, list.length), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "members \xB7 class of ", year)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 12
      }
    }, list.map(([name, major, standing, role]) => /*#__PURE__*/React.createElement(Card, {
      key: name,
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        padding: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: role ? 'var(--yellow-500)' : 'var(--surface-brand-soft)',
        color: role ? 'var(--ink-900)' : 'var(--green-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 20,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '0.02em'
      }
    }, initials(name)), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 15.5,
        color: 'var(--text-heading)'
      }
    }, name), role ? /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, role) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, major, " \xB7 ", standing)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Coming next"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '10px 0 8px',
        color: 'var(--white)'
      }
    }, "A real contact list"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: 0,
        opacity: 0.92
      }
    }, "The long-term plan: every member and alum, searchable by major and industry, so you can find the person who already did the thing you're trying to do.")), /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Privacy"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Opt in, opt out"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 14px'
      }
    }, "The directory shows your name, major, and class year. Nothing else, and only if you said yes on the form."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Join')
    }, "Add me to the list")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 16
    })), "Rosters before this year are being rebuilt from old sign-up sheets. Names may be missing."))))));
  }
  Object.assign(window, {
    MembersV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/MembersV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/ShopV2.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Select,
    Icon,
    Tooltip
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const MEMBER_OFF = 0.2;
  const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
  const MIN_UNITS = 24;
  const RESERVED = 17;
  const ITEMS = [{
    name: 'Club tee',
    detail: 'Heavyweight cotton, navy with the yellow mark',
    price: 22,
    tone: 'brand'
  }, {
    name: 'Crewneck',
    detail: 'The one you will actually wear to class',
    price: 38,
    tone: 'accent'
  }, {
    name: 'Black Tie tee',
    detail: 'Printed after the night, only for people who were there',
    price: 24,
    tone: 'brand'
  }, {
    name: 'Sticker pack',
    detail: 'Four designs. No size to pick.',
    price: 6,
    tone: 'brand',
    nosize: true
  }];
  const money = n => '$' + (Math.round(n * 100) / 100).toFixed(2).replace('.00', '');
  function ShopV2({
    onNavigate,
    user,
    onReserve
  }) {
    const [cart, setCart] = React.useState({});
    const member = !!(user && user.duesPaid);
    const set = (name, patch) => setCart(c => ({
      ...c,
      [name]: {
        size: 'M',
        qty: 0,
        ...c[name],
        ...patch
      }
    }));
    const lines = ITEMS.map(i => ({
      item: i,
      row: cart[i.name]
    })).filter(l => l.row && l.row.qty > 0);
    const full = lines.reduce((s, l) => s + l.item.price * l.row.qty, 0);
    const total = member ? full * (1 - MEMBER_OFF) : full;
    const units = lines.reduce((s, l) => s + l.row.qty, 0);
    const pct = Math.min(100, Math.round((RESERVED + units) / MIN_UNITS * 100));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-brand)',
        color: 'var(--text-on-brand)',
        padding: '58px 32px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.35fr 1fr',
        gap: 48,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Drop 01 \xB7 opens soon"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 88,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.88,
        color: 'var(--white)',
        margin: '12px 0 16px'
      }
    }, "Shop"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 500,
        opacity: 0.95
      }
    }, "We print once, in a batch, and hand it out at a meeting. Reserve your sizes now \u2014 you only pay when the order is confirmed, and nothing ships.")), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '2.5px solid var(--ink-900)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '8px 8px 0 var(--ink-900)',
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        padding: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, "To print, we need"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 64,
        lineHeight: 0.9,
        margin: '8px 0 6px'
      }
    }, MIN_UNITS, " pieces"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        margin: '0 0 14px'
      }
    }, RESERVED + units, " reserved so far. Under the minimum, the drop doesn't run and nobody is charged."), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 12,
        borderRadius: 999,
        background: 'rgba(23,23,23,.16)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: 'var(--ink-900)',
        transition: 'width var(--dur-base) var(--ease-standard)'
      }
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 32px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, [['list', '1 · Reserve sizes', 'Pick what you want. No payment, no commitment until the drop closes.'], ['users', '2 · We hit the minimum', 'Once enough people are in, we confirm the order and text everyone.'], ['hand-coins', '3 · Pay and pick up', 'Cash or Venmo to Sarah, and you collect it at the next meeting.']].map(([icon, t, d]) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      variant: "sunken"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 19
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 21,
        textTransform: 'uppercase',
        fontWeight: 900,
        marginBottom: 6
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '32px 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, !member ? /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        flexWrap: 'wrap',
        marginBottom: 24,
        borderLeft: '6px solid var(--yellow-500)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--green-700)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 260
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--text-heading)'
      }
    }, user ? 'Your dues are not paid yet' : 'Members pay 20% less'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)'
      }
    }, user ? 'Settle up with Sarah and the member price turns on here automatically.' : 'Log in and the member price applies on its own. No code to enter.')), user ? /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate('Account')
    }, "Pay dues") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate('Login')
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onNavigate('Join')
    }, "Join for $10"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        marginBottom: 24,
        padding: '9px 15px',
        borderRadius: 999,
        background: 'var(--surface-accent)',
        color: 'var(--text-on-accent)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 17
    }), "Member price applied \u2014 20% off, ", user.name.split(' ')[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 20
      }
    }, ITEMS.map(i => {
      const row = cart[i.name] || {
        size: 'M',
        qty: 0
      };
      return /*#__PURE__*/React.createElement(Card, {
        key: i.name,
        padding: "0",
        style: {
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          aspectRatio: '5 / 3',
          background: i.tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
          color: i.tone === 'accent' ? 'var(--yellow-700)' : 'var(--green-700)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1.5px solid var(--border-hairline)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "image",
        size: 34,
        style: {
          opacity: 0.55
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 'var(--space-5)',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: 24,
          textTransform: 'uppercase',
          fontWeight: 900,
          margin: '0 0 6px'
        }
      }, i.name), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: '0 0 14px',
          fontSize: 14.5,
          color: 'var(--text-muted)',
          flex: 1
        }
      }, i.detail), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          gap: 10,
          marginBottom: 14
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 32,
          color: member ? 'var(--yellow-700)' : 'var(--text-heading)'
        }
      }, money(member ? i.price * (1 - MEMBER_OFF) : i.price)), member ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5,
          color: 'var(--text-muted)',
          textDecoration: 'line-through'
        }
      }, money(i.price)) : /*#__PURE__*/React.createElement(Tooltip, {
        label: "Log in to apply"
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13.5,
          fontWeight: 700,
          color: 'var(--green-700)',
          cursor: 'pointer'
        },
        onClick: () => onNavigate('Login')
      }, money(i.price * (1 - MEMBER_OFF)), " for members"))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 10,
          alignItems: 'flex-end'
        }
      }, !i.nosize ? /*#__PURE__*/React.createElement(Select, {
        label: "Size",
        value: row.size,
        onChange: e => set(i.name, {
          size: e.target.value
        }),
        options: SIZES,
        wrapStyle: {
          flex: 1
        }
      }) : null, /*#__PURE__*/React.createElement(Select, {
        label: "Qty",
        value: String(row.qty),
        onChange: e => set(i.name, {
          qty: Number(e.target.value)
        }),
        options: ['0', '1', '2', '3', '4'],
        wrapStyle: {
          width: i.nosize ? '100%' : 86
        }
      }))));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Your reservation"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 14px'
      }
    }, "Drop 01"), lines.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 16px'
      }
    }, "Nothing picked yet. Choose a size and quantity to hold your spot in the batch.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 16
      }
    }, lines.map(l => /*#__PURE__*/React.createElement("div", {
      key: l.item.name,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        fontSize: 14.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-body)'
      }
    }, l.row.qty, "\xD7 ", l.item.name, l.item.nosize ? '' : ' · ' + l.row.size), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--text-heading)'
      }
    }, money(l.item.price * l.row.qty * (member ? 1 - MEMBER_OFF : 1)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 14,
        borderTop: '1.5px solid var(--border-hairline)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Total"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 38,
        color: 'var(--text-heading)'
      }
    }, money(total))), member && full > 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--yellow-700)',
        fontWeight: 700,
        textAlign: 'right',
        marginTop: 2
      }
    }, "You saved ", money(full - total)) : null, /*#__PURE__*/React.createElement(Button, {
      full: true,
      size: "lg",
      style: {
        marginTop: 16
      },
      disabled: units === 0,
      onClick: () => onReserve(units)
    }, "Reserve my sizes"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        margin: '12px 0 0'
      }
    }, "No payment now. We text you when the drop closes and the order is confirmed.")), /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Why a drop"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: '10px 0 0',
        opacity: 0.94
      }
    }, "Printing in one batch is about half the cost of ordering one at a time, and nobody pays shipping. The tradeoff is you wait for the batch.")))))));
  }
  Object.assign(window, {
    ShopV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/ShopV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v2/WorkshopsV2.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Icon,
    Tooltip,
    IconButton
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const PROGRAMS = [{
    icon: 'camera',
    title: 'Headshot studio',
    when: 'Included with membership',
    body: 'A photographer, a backdrop, and ten minutes each. You leave with a shot you can actually use.',
    tone: 'brand'
  }, {
    icon: 'mic',
    title: 'Mock interviews',
    when: 'Included with membership',
    body: 'Twenty minutes across the table from someone who will tell you the truth, and notes on the spot.',
    tone: 'accent'
  }, {
    icon: 'shopping-bag',
    title: 'Merch discount',
    when: 'Members only',
    body: 'Club shirts and everything else we print, at the member price.',
    tone: 'brand'
  }, {
    icon: 'users',
    title: 'The member community',
    body: 'Access to a society of business-minded people on this campus — and the directory to reach them.',
    when: 'Members only',
    tone: 'accent'
  }];
  const IDEAS = ['Resume clinic', 'Alumni mentor matching', 'Grad school panel', 'Case night'];
  function WorkshopsV2() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-sunken)',
        padding: '56px 32px 60px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 48,
        alignItems: 'end'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Professional development"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 76,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Get hired,", /*#__PURE__*/React.createElement("br", null), "not just involved"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 520
      }
    }, "What membership actually gets you, beyond showing up. Everything here is included in the $10.")), /*#__PURE__*/React.createElement(Card, {
      variant: "poster",
      style: {
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      icon: "calendar-days"
    }, "Coming up"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Headshot sign-ups"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 16px'
      }
    }, "Ruth McKee School of Business. Slots open once we set the date \u2014 members get first pick."), /*#__PURE__*/React.createElement(Button, null, "Get notified")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: p.tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
        color: p.tone === 'accent' ? 'var(--yellow-700)' : 'var(--green-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Add to calendar"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "calendar-plus",
      label: "Add to calendar",
      variant: "ghost",
      size: "sm"
    }))), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, p.when), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, p.body)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56,
        paddingTop: 34,
        borderTop: '2px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "On the table"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 8
      }
    }, "Ideas we're chasing"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16.5,
        color: 'var(--text-muted)',
        maxWidth: 560,
        marginBottom: 20
      }
    }, "Not promises yet. If one of these is the reason you'd join, tell an officer and we'll move it up the list."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10
      }
    }, IDEAS.map(i => /*#__PURE__*/React.createElement(Badge, {
      key: i,
      tone: "neutral"
    }, i)))))));
  }
  Object.assign(window, {
    WorkshopsV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v2/WorkshopsV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
(() => {
  const {
    NavBar,
    Button,
    Icon,
    IconButton
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const NAV = ['Home', 'Events', 'Workshops', 'Join'];
  function SiteHeader({
    page,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--green-500)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--yellow-500)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(NavBar, {
      brand: "Southern Business Club",
      links: NAV,
      active: page,
      onNavigate: onNavigate,
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => onNavigate('Join')
      }, "Join the club"),
      style: {
        padding: '18px 0',
        background: 'transparent',
        borderBottom: 'none'
      }
    })));
  }
  function Section({
    eyebrow,
    title,
    children,
    style,
    maxWidth = 'var(--container-max)'
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth,
        margin: '0 auto'
      }
    }, eyebrow ? /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow",
      style: {
        marginBottom: 10
      }
    }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 44,
        textTransform: 'uppercase',
        fontWeight: 900,
        lineHeight: 0.95,
        marginBottom: 28
      }
    }, title) : null, children));
  }
  function SiteFooter({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)',
        padding: '56px 32px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 30,
        textTransform: 'uppercase',
        lineHeight: 0.92
      }
    }, "Southern", /*#__PURE__*/React.createElement("br", null), "Business Club"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        opacity: 0.75,
        marginTop: 14,
        maxWidth: 300
      }
    }, "The business club at Southern Adventist University. Collegedale, Tennessee."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "instagram",
      label: "Instagram",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "linkedin",
      label: "LinkedIn",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "mail",
      label: "Email us",
      variant: "ghost",
      style: {
        color: 'var(--text-inverse)'
      }
    }))), [['Club', NAV], ['Visit us', ['Brock Hall 3000', 'First Thursday, 6:30 PM', 'businessclub@southern.edu']]].map(([title, items]) => /*#__PURE__*/React.createElement("div", {
      key: title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)',
        marginBottom: 12
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9,
        fontSize: 14.5,
        opacity: 0.85
      }
    }, items.map(i => title === 'Club' ? /*#__PURE__*/React.createElement("span", {
      key: i,
      onClick: () => onNavigate(i),
      style: {
        cursor: 'pointer'
      }
    }, i) : /*#__PURE__*/React.createElement("span", {
      key: i
    }, i)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '36px auto 0',
        paddingTop: 18,
        borderTop: '1px solid rgba(246,243,237,.16)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12.5,
        opacity: 0.6,
        letterSpacing: '0.04em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Business, but fun"), /*#__PURE__*/React.createElement("span", null, "School of Business")));
  }
  Object.assign(window, {
    SiteHeader,
    SiteFooter,
    Section,
    NAV
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Events.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Tabs,
    EventCard,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const ALL = [{
    date: {
      month: 'Oct',
      day: 2
    },
    title: 'LinkedIn & headshot night',
    time: '6:30 PM',
    location: 'Brock Hall 3000',
    category: 'Workshop',
    topic: 'Workshops'
  }, {
    date: {
      month: 'Oct',
      day: 16
    },
    title: 'Alumni mixer: finance & accounting',
    time: '7:00 PM',
    location: 'Presidential Banquet Room',
    category: 'Networking',
    topic: 'Networking'
  }, {
    date: {
      month: 'Oct',
      day: 30
    },
    title: 'Case night: pitch a campus business',
    time: '6:00 PM',
    location: 'Brock Hall 3200',
    category: 'Competition',
    topic: 'Workshops'
  }, {
    date: {
      month: 'Nov',
      day: 6
    },
    title: 'Mock interview marathon',
    time: '5:00 PM',
    location: 'Brock Hall 1100',
    category: 'Workshop',
    topic: 'Workshops'
  }, {
    date: {
      month: 'Nov',
      day: 14
    },
    title: 'Taco Bell Black Tie',
    time: '7:00 PM',
    location: 'Iles P.E. Center',
    category: 'Signature',
    topic: 'Traditions',
    tone: 'accent',
    poster: true
  }];
  const PAST = [{
    date: {
      month: 'Sep',
      day: 11
    },
    title: 'Fall kickoff cookout',
    time: '6:00 PM',
    location: 'Wright Hall lawn',
    category: 'Social',
    topic: 'Traditions'
  }, {
    date: {
      month: 'Sep',
      day: 25
    },
    title: 'Resume lab with the School of Business',
    time: '6:30 PM',
    location: 'Brock Hall 3000',
    category: 'Workshop',
    topic: 'Workshops'
  }];
  function Events({
    onRsvp
  }) {
    const [tab, setTab] = React.useState('Upcoming');
    const [topic, setTopic] = React.useState('All');
    const source = tab === 'Upcoming' ? ALL : PAST;
    const list = topic === 'All' ? source : source.filter(e => e.topic === topic);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 30px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Fall semester 2026"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 76,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Events"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 560,
        color: 'var(--text-body)'
      }
    }, "Everything is free for members unless the food costs us money. Bring a friend; no business major required."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: ['Upcoming', 'Past'],
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: 20
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 26
      }
    }, ['All', 'Networking', 'Workshops', 'Traditions'].map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      selected: topic === t,
      onClick: () => setTopic(t)
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.9fr 1fr',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, list.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
      key: e.title
    }, e, {
      onRsvp: tab === 'Upcoming' ? onRsvp : undefined
    }))), list.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      variant: "sunken"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)'
      }
    }, "Nothing scheduled under that filter yet \u2014 check back after the officer meeting.")) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid"
    }, "Members only"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Officer hours"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 14px'
      }
    }, "Tuesdays 2\u20134 PM in Brock Hall 3000. Bring a resume or just questions."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right"
    }, "Book a slot")), /*#__PURE__*/React.createElement(Card, {
      variant: "accent"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, "Reminders"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '10px 0 8px'
      }
    }, "Get the text list"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        margin: '0 0 14px'
      }
    }, "One message the morning of each event. Nothing else, ever."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "Add my number")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }), " Most events are in Brock Hall, second and third floors."))))));
  }
  Object.assign(window, {
    Events
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    EventCard,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const PILLARS = [{
    icon: 'handshake',
    title: 'Networking',
    body: 'Monthly mixers with alumni, recruiters, and the faculty who know them.'
  }, {
    icon: 'briefcase',
    title: 'Professional development',
    body: 'Headshots, LinkedIn labs, and mock interviews before career fair week.'
  }, {
    icon: 'party-popper',
    title: 'Traditions',
    body: 'Taco Bell Black Tie, case-night pizza, and the semester group photo.'
  }];
  function Home({
    onNavigate,
    onRsvp
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-brand)',
        color: 'var(--text-on-brand)',
        padding: '78px 32px 84px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.35fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "Southern Adventist University"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 104,
        lineHeight: 0.88,
        fontWeight: 900,
        textTransform: 'uppercase',
        color: 'var(--white)',
        margin: '14px 0 20px',
        letterSpacing: '-0.01em'
      }
    }, "Business,", /*#__PURE__*/React.createElement("br", null), "but fun"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18.5,
        maxWidth: 480,
        opacity: 0.95
      }
    }, "We run the networking nights, the interview prep, and the one black-tie dinner on campus served out of a Taco Bell bag. Everyone's welcome \u2014 majors optional."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNavigate('Join')
    }, "Join the club"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "See what's coming up"))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '2.5px solid var(--ink-900)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '8px 8px 0 var(--ink-900)',
        background: 'var(--yellow-500)',
        color: 'var(--ink-900)',
        padding: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, "Next up \xB7 Nov 14"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 52,
        lineHeight: 0.9,
        textTransform: 'uppercase',
        margin: '10px 0 12px'
      }
    }, "Taco Bell", /*#__PURE__*/React.createElement("br", null), "Black Tie"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        margin: '0 0 18px'
      }
    }, "Formalwear. Fast food. Iles P.E. Center, 7:00 PM. $5 for members."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onRsvp
    }, "RSVP now")))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "What we do",
      title: "Three things, done well"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, PILLARS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--green-700)',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        marginBottom: 8
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, p.body))))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Calendar",
      title: "Next four meetings",
      style: {
        background: 'var(--surface-sunken)',
        paddingTop: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(EventCard, {
      date: {
        month: 'Oct',
        day: 2
      },
      title: "LinkedIn & headshot night",
      time: "6:30 PM",
      location: "Brock Hall 3000",
      category: "Workshop",
      onRsvp: onRsvp
    }), /*#__PURE__*/React.createElement(EventCard, {
      date: {
        month: 'Oct',
        day: 16
      },
      title: "Alumni mixer: finance & accounting",
      time: "7:00 PM",
      location: "Presidential Banquet Room",
      category: "Networking",
      onRsvp: onRsvp
    }), /*#__PURE__*/React.createElement(EventCard, {
      date: {
        month: 'Nov',
        day: 6
      },
      title: "Mock interview marathon",
      time: "5:00 PM",
      location: "Brock Hall 1100",
      category: "Workshop",
      onRsvp: onRsvp
    }), /*#__PURE__*/React.createElement(EventCard, {
      date: {
        month: 'Nov',
        day: 14
      },
      title: "Taco Bell Black Tie",
      time: "7:00 PM",
      location: "Iles P.E. Center",
      category: "Signature",
      tone: "accent",
      poster: true,
      onRsvp: onRsvp
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('Events')
    }, "Full calendar"))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, [['180+', 'members'], ['24', 'events a year'], ['12', 'alumni mentors'], ['1', 'black-tie taco night']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        borderTop: '4px solid var(--green-500)',
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 56,
        lineHeight: 0.9,
        color: 'var(--text-heading)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, l))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        background: 'var(--surface-brand)',
        borderRadius: 'var(--radius-xl)',
        padding: '46px 44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        color: 'var(--text-on-brand)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 46,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.92,
        color: 'var(--white)',
        marginBottom: 10
      }
    }, "Dues are $15 a semester"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        opacity: 0.92
      }
    }, "That covers every event, the headshot session, and the taco bar.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNavigate('Join')
    }, "Sign me up"))));
  }
  Object.assign(window, {
    Home
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Join.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Input,
    Select,
    Textarea,
    Checkbox,
    Radio,
    Switch,
    Icon
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  function Join({
    onSubmit
  }) {
    const [plan, setPlan] = React.useState('semester');
    const [texts, setTexts] = React.useState(true);
    const [directory, setDirectory] = React.useState(true);
    const [interests, setInterests] = React.useState({
      Networking: true,
      Interviews: true,
      Headshots: false
    });
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 84px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1040,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: 40,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Membership"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 72,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 12px'
      }
    }, "Join the club"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 520,
        marginBottom: 28
      }
    }, "Two minutes now, and you are on the list for every event this semester. Dues can be paid at the next meeting."), /*#__PURE__*/React.createElement(Card, {
      padding: "var(--space-8)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "Jordan"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      placeholder: "Alvarez"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Southern email",
      icon: "mail",
      placeholder: "you@southern.edu",
      hint: "We only email about events you RSVP to.",
      wrapStyle: {
        gridColumn: '1 / -1'
      }
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Class standing",
      options: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Major",
      options: ['Accounting', 'Business administration', 'Finance', 'Marketing', 'Not business — just interested']
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        paddingTop: 22,
        borderTop: '1.5px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        marginBottom: 12,
        color: 'var(--text-heading)'
      }
    }, "What are you here for?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, Object.keys(interests).map(k => /*#__PURE__*/React.createElement(Checkbox, {
      key: k,
      label: k,
      checked: interests[k],
      onChange: () => setInterests({
        ...interests,
        [k]: !interests[k]
      })
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        paddingTop: 22,
        borderTop: '1.5px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        marginBottom: 12,
        color: 'var(--text-heading)'
      }
    }, "Dues"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "plan",
      label: "One semester \u2014 $15",
      description: "Covers every event through December.",
      checked: plan === 'semester',
      onChange: () => setPlan('semester')
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "plan",
      label: "Full year \u2014 $25",
      description: "Cheaper, and you get first pick of headshot slots.",
      checked: plan === 'year',
      onChange: () => setPlan('year')
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Text me event reminders",
      checked: texts,
      onChange: () => setTexts(!texts)
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Show me on the member directory",
      checked: directory,
      onChange: () => setDirectory(!directory)
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Anything we should know?",
      rows: 3,
      wrapStyle: {
        marginTop: 22
      },
      hint: "Optional. Dietary needs, questions, jokes."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onSubmit
    }, "Submit membership"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, "No payment now \u2014 pay at the next meeting.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--yellow-500)'
      }
    }, "What you get"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '14px 0 0',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 11,
        fontSize: 15
      }
    }, ['Every event, including Black Tie', 'Free professional headshots', 'Mock interviews with recruiters', 'Alumni mentor matching', 'A t-shirt, eventually'].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--yellow-500)',
        display: 'inline-flex',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 17
    })), t)))), /*#__PURE__*/React.createElement(Card, {
      variant: "poster"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      icon: "party-popper"
    }, "Signature event"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Taco Bell Black Tie"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, "November 14. Rent the tux, order the twelve-pack, take the photo. Members pay $5.")))));
  }
  Object.assign(window, {
    Join
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Join.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Workshops.jsx
try { (() => {
(() => {
  const {
    Button,
    Card,
    Badge,
    Icon,
    Tooltip,
    IconButton
  } = window.SouthernBusinessClubDesignSystem_c9c84e;
  const PROGRAMS = [{
    icon: 'camera',
    title: 'Headshot studio',
    when: 'Twice a semester',
    body: 'A photographer, a backdrop, and ten minutes each. You leave with three edited shots.',
    tone: 'brand'
  }, {
    icon: 'linkedin',
    title: 'LinkedIn lab',
    when: 'October',
    body: 'Bring a laptop. We rewrite headlines, fix the About section, and connect you to alumni in your field.',
    tone: 'accent'
  }, {
    icon: 'mic',
    title: 'Mock interviews',
    when: 'Before career fair',
    body: 'Recruiters from Chattanooga firms run 20-minute interviews and give notes on the spot.',
    tone: 'brand'
  }, {
    icon: 'file-text',
    title: 'Resume clinic',
    when: 'Monthly',
    body: 'Faculty and officers mark up your resume line by line. Walk-ins welcome.',
    tone: 'brand'
  }, {
    icon: 'presentation',
    title: 'Case night',
    when: 'Late October',
    body: 'Teams of three pitch a campus business idea to a panel. Winner gets the semester dues covered.',
    tone: 'accent'
  }, {
    icon: 'graduation-cap',
    title: 'Grad school panel',
    when: 'Spring',
    body: 'MBA students and admissions staff answer the questions you did not know to ask.',
    tone: 'brand'
  }];
  function Workshops() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-sunken)',
        padding: '56px 32px 60px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 48,
        alignItems: 'end'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sbc-eyebrow"
    }, "Professional development"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 76,
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        margin: '12px 0 14px'
      }
    }, "Get hired,", /*#__PURE__*/React.createElement("br", null), "not just involved"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        maxWidth: 520
      }
    }, "Six recurring programs run every year. Members get first pick of time slots; everyone else can take whatever is left.")), /*#__PURE__*/React.createElement(Card, {
      variant: "poster",
      style: {
        background: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      icon: "calendar-days"
    }, "This week"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, "Headshot sign-ups open"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 16px'
      }
    }, "32 slots, Thursday 4\u20138 PM, Brock Hall 3000."), /*#__PURE__*/React.createElement(Button, null, "Claim a slot")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: p.tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
        color: p.tone === 'accent' ? 'var(--yellow-700)' : 'var(--green-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Add to calendar"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "calendar-plus",
      label: "Add to calendar",
      variant: "ghost",
      size: "sm"
    }))), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, p.when), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 900,
        margin: '12px 0 8px'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, p.body)))))));
  }
  Object.assign(window, {
    Workshops
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Workshops.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
