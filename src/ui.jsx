// ============================================================
// resi UI primitives — shared across all screens.
// Exports to window so other Babel scripts can use them.
// ============================================================

// Resolve an asset path relative to the current route folder.
// Each route HTML sets window.__ASSET_BASE (e.g. "../") so shared
// components can live in /src and still load images from /assets.
const asset = (p) => (window.__ASSET_BASE || "") + p;

// ============================================================
// RESPONSIVE BASE SYSTEM
// ------------------------------------------------------------
// Single source of truth for the desktop/mobile split. Because this
// app is built with inline-style React (no CSS classes), media queries
// don't reach the components — instead every section reads `useIsMobile()`
// and branches its inline styles. This hook IS the breakpoint: change it
// here and the whole landing follows.
//
//   const isMobile = useIsMobile();   // true below 768px
//
// Conventions sections should follow (applied per-section in later passes):
//   • Two-column grids  → single column on mobile (text first, image after).
//   • Container padding  → PAD_X.desktop (32) vs PAD_X.mobile (24).
//   • Content width      → 100% of viewport (minus the 24px gutters) on mobile.
//   • CTAs               → full width on mobile (Button `full`).
//   • Grids of 3+ cols   → one column on mobile.
//   • Min font sizes     → eyebrows/labels/body never below 14px.
//   • Touch targets      → interactive controls at least 44px tall.
// ============================================================
const BREAKPOINT = 768;            // px — at/below this width we are "mobile"
const PAD_X = { desktop: 32, mobile: 24 };

// Horizontal page padding helper — keeps gutters consistent everywhere.
const padX = (isMobile) => (isMobile ? PAD_X.mobile : PAD_X.desktop);

// Reactive "are we below the mobile breakpoint?" hook.
const useIsMobile = (bp = BREAKPOINT) => {
  const query = `(max-width: ${bp - 0.02}px)`;
  const read = () =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia(query).matches
      : false;
  const [isMobile, setIsMobile] = React.useState(read);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setIsMobile(mq.matches);
    on();
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on);
  }, [query]);
  return isMobile;
};

const Icon = ({ name, size = 20, stroke = 1.75, style }) => (
  <i
    data-lucide={name}
    style={{
      width: size, height: size, display: "inline-block",
      strokeWidth: stroke, color: "currentColor", verticalAlign: "middle",
      ...style,
    }}
  />
);

// Button --------------------------------------------------------
const Button = ({
  children, variant = "primary", size = "md",
  iconLeft, iconRight, onClick, type = "button", style, full = false,
}) => {
  const base = {
    fontFamily: "var(--font-body)", fontWeight: 700, cursor: "pointer",
    borderRadius: "var(--r-pill)", border: "none",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, transition: "all var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    width: full ? "100%" : "auto",
  };
  const sizes = {
    sm: { height: 36, padding: "0 16px", fontSize: 13 },
    md: { height: 44, padding: "0 22px", fontSize: 14 },
    lg: { height: 52, padding: "0 28px", fontSize: 16 },
  };
  const variants = {
    primary: { background: "var(--resi-green)", color: "#fff", boxShadow: "var(--shadow-sm)" },
    secondary: { background: "var(--resi-navy)", color: "#fff" },
    outline: { background: "#fff", color: "var(--resi-navy)", boxShadow: "inset 0 0 0 1.5px var(--resi-navy)" },
    ghost: { background: "transparent", color: "var(--resi-navy)" },
    onDark: { background: "#fff", color: "var(--resi-navy)" },
  };
  const [hover, setHover] = React.useState(false);
  const hoverOverlay = {
    primary: { background: "var(--resi-green-dark)", boxShadow: "var(--shadow-md)" },
    secondary: { background: "#000028" },
    outline: { background: "var(--resi-navy)", color: "#fff" },
    ghost: { background: "var(--resi-bg-soft)" },
    onDark: { background: "var(--resi-bg-soft)" },
  };
  return (
    <button
      type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], ...(hover ? hoverOverlay[variant] : {}), ...style }}
    >
      {iconLeft && <Icon name={iconLeft} size={size === "lg" ? 18 : 16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "lg" ? 18 : 16} />}
    </button>
  );
};

// Card ----------------------------------------------------------
const Card = ({ children, variant = "default", style, onClick, hoverable = false, padding = 24 }) => {
  const variants = {
    default: { background: "#fff", color: "var(--resi-navy)", boxShadow: "var(--shadow-sm)" },
    soft: { background: "var(--resi-bg-soft)", color: "var(--resi-navy)" },
    feature: { background: "var(--resi-navy)", color: "#fff" },
    bordered: { background: "#fff", color: "var(--resi-navy)", boxShadow: "inset 0 0 0 1px var(--resi-line)" },
  };
  const [hover, setHover] = React.useState(false);
  const lift = hoverable && hover ? { transform: "translateY(-3px)", boxShadow: "var(--shadow-md)" } : {};
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        borderRadius: "var(--r-lg)", padding,
        transition: "all var(--dur-base) var(--ease-out)",
        cursor: onClick ? "pointer" : "default",
        ...variants[variant], ...lift, ...style,
      }}
    >
      {children}
    </div>
  );
};

// Chip / Badge -------------------------------------------------
const Chip = ({ children, color = "soft", icon }) => {
  const palette = {
    soft:   { background: "var(--resi-bg-soft)", color: "var(--resi-navy)", dot: null },
    blue:   { background: "rgba(0,156,215,.12)",  color: "var(--resi-blue-dark)",   dot: "var(--resi-blue)" },
    green:  { background: "rgba(76,183,72,.14)",  color: "var(--resi-green-dark)",  dot: "var(--resi-green)" },
    orange: { background: "rgba(241,93,42,.13)",  color: "var(--resi-orange-dark)", dot: "var(--resi-orange)" },
    pink:   { background: "rgba(204,108,162,.16)", color: "var(--resi-pink-dark)",  dot: "var(--resi-pink)" },
  }[color];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "6px 14px", borderRadius: "var(--r-pill)",
      fontSize: 13, fontWeight: 600,
      background: palette.background, color: palette.color,
      fontFamily: "var(--font-body)",
    }}>
      {palette.dot && <span style={{ width: 8, height: 8, borderRadius: 999, background: palette.dot }} />}
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
};

const Badge = ({ children, tone = "navy" }) => {
  const tones = {
    navy:    { background: "var(--resi-navy)",    color: "#fff" },
    green:   { background: "var(--resi-green)",   color: "#fff" },
    blue:    { background: "var(--resi-blue)",    color: "#fff" },
    orange:  { background: "var(--resi-orange)",  color: "#fff" },
    outline: { background: "#fff", color: "var(--resi-navy)", boxShadow: "inset 0 0 0 1px var(--resi-line)" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "4px 10px",
      borderRadius: "var(--r-pill)", fontSize: 11, fontWeight: 800, letterSpacing: ".04em",
      textTransform: "uppercase", fontFamily: "var(--font-body)",
      ...tones[tone],
    }}>{children}</span>
  );
};

const Eyebrow = ({ children, color = "var(--resi-green)", dot = false }) => (
  <p style={{
    fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12,
    letterSpacing: ".12em", textTransform: "uppercase",
    color, margin: 0,
    ...(dot ? { display: "inline-flex", alignItems: "center", gap: 8 } : {}),
  }}>
    {dot && <span style={{
      width: 8, height: 8, borderRadius: "50%",
      background: "currentColor", flexShrink: 0,
    }} />}
    {children}
  </p>
);

// Photo placeholder — branded, with a soft pattern
const PhotoSlot = ({ ratio = "16/10", radius = "var(--r-lg)", label = "Foto", tone = "soft", style }) => {
  const tones = {
    soft:   { background: "linear-gradient(135deg, #EEF0F4 0%, #D9DEE8 100%)", color: "var(--resi-fg-3)" },
    green:  { background: "linear-gradient(135deg, rgba(76,183,72,.18) 0%, rgba(76,183,72,.06) 100%)", color: "var(--resi-green-dark)" },
    navy:   { background: "var(--resi-navy)", color: "rgba(255,255,255,.65)" },
  };
  return (
    <div style={{
      aspectRatio: ratio, borderRadius: radius, overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: ".12em",
      textTransform: "uppercase", fontWeight: 700,
      ...tones[tone], ...style,
    }}>
      [ {label} ]
    </div>
  );
};

// HeroVideo — autoplay/muted/loop horizontal (16:9) media box that mirrors
// PhotoSlot's framing: rounded corners, soft gray fallback, subtle shadow.
const HeroVideo = ({ src, ratio = "16/9", radius = "var(--r-2xl)", style }) => (
  <div style={{
    aspectRatio: ratio, borderRadius: radius, overflow: "hidden",
    background: "linear-gradient(135deg, #EEF0F4 0%, #D9DEE8 100%)",
    boxShadow: "var(--shadow-md)", ...style,
  }}>
    <video
      src={src}
      autoPlay muted loop playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  </div>
);

// register every icon after a paint
const RefreshIcons = () => {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return null;
};

// PlansCarousel — mobile-only horizontal pager for plan cards.
// One card visible (~85vw) with neighbors peeking (~7.5vw each side).
// Snaps to center; pagination dots below; centers `featuredIndex` on load.
const PlansCarousel = ({ children, featuredIndex = 0 }) => {
  const items = React.Children.toArray(children);
  const ref = React.useRef(null);
  const cardRefs = React.useRef([]);
  const [active, setActive] = React.useState(featuredIndex);

  const centerOn = (i, behavior = "auto") => {
    const el = ref.current, child = cardRefs.current[i];
    if (!el || !child) return;
    el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.clientWidth) / 2, behavior });
  };

  React.useEffect(() => {
    const id = setTimeout(() => centerOn(featuredIndex, "auto"), 60);
    return () => clearTimeout(id);
  }, []);

  const onScroll = () => {
    const el = ref.current; if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0, bd = Infinity;
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      const cc = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bd) { bd = d; best = i; }
    });
    setActive(best);
  };

  return (
    <div>
      <div ref={ref} onScroll={onScroll} className="no-scrollbar" style={{
        display: "flex", gap: 14,
        overflowX: "scroll", scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        paddingLeft: "7.5vw", paddingRight: "7.5vw",
        scrollPaddingLeft: "7.5vw", scrollPaddingRight: "7.5vw",
        paddingTop: 16, paddingBottom: 6,
      }}>
        {items.map((child, i) => (
          <div key={i} ref={(el) => (cardRefs.current[i] = el)}
               style={{ flex: "0 0 85vw", scrollSnapAlign: "center" }}>
            {child}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 14 }}>
        {items.map((_, i) => {
          const a = i === active;
          return (
            <button key={i} aria-label={`Ir al plan ${i + 1}`} aria-current={a} onClick={() => centerOn(i, "smooth")}
              style={{ border: "none", background: "transparent", padding: 6, cursor: "pointer", display: "inline-flex" }}>
              <span style={{
                height: 8, width: a ? 26 : 8, borderRadius: 999,
                background: a ? "#4CA548" : "var(--resi-line)",
                transition: "width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
              }} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

Object.assign(window, { Button, Card, Chip, Badge, Eyebrow, Icon, PhotoSlot, HeroVideo, RefreshIcons, asset, useIsMobile, padX, BREAKPOINT, PAD_X, PlansCarousel });
