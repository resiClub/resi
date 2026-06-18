// ============================================================
// NavBar — shared, persistent top nav for both routes.
// Rendered ONCE at the app root (above the swappable page body),
// so it never unmounts or re-animates when switching routes.
//
// Props:
//   route   — "administradores" | "hogares" (drives chip color + cross-link)
//   onRoute — (route) => void, switches route without a page reload
//   ctaCopy — primary CTA label
// ============================================================
const NAV_LINKS = [
  { label: "Cómo funciona", id: "como-funciona" },
  { label: "Planes",        id: "planes" },
  { label: "Calculadora",   id: "calculadora" },
];

// Smooth-scroll to a section, accounting for the sticky nav height.
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top, behavior: "smooth" });
};

const NavBar = ({ route = "administradores", onRoute = () => {}, ctaCopy = "Empezar" }) => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 4);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Close the mobile menu whenever we cross back to desktop.
  React.useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  const isHogares = route === "hogares";
  const chipColor = isHogares ? "var(--resi-green)" : "var(--resi-navy)";
  const chipLabel = isHogares ? "Hogares" : "Administradores";
  const cross = isHogares
    ? { label: "¿Eres administrador?", mobileLabel: "¿Eres administrador?", to: "administradores", color: "var(--resi-navy)" }
    : { label: "¿Eres un hogar?",      mobileLabel: "¿Eres un hogar?",      to: "hogares",          color: "var(--resi-green)" };

  const [crossHover, setCrossHover] = React.useState(false);

  const goSection = (id) => { setMenuOpen(false); scrollToSection(id); };

  return (
    <React.Fragment>
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "#fff",
      backdropFilter: (scrolled || menuOpen) ? "blur(10px)" : "none",
      WebkitBackdropFilter: (scrolled || menuOpen) ? "blur(10px)" : "none",
      borderBottom: (scrolled || menuOpen) ? "1px solid var(--resi-line)" : "1px solid transparent",
      transition: "all var(--dur-base) var(--ease-out)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", height: isMobile ? 64 : 76,
        padding: isMobile ? "0 16px" : "0 32px",
        display: "flex", alignItems: "center", gap: isMobile ? 10 : 24,
      }}>
        {/* Logo + non-interactive type chip — chip is desktop-only */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 6 : 10, flexShrink: 0 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
             style={{ display: "flex", alignItems: "center" }}>
            <img src={asset("assets/logos/resi.png")} alt="resi" style={{ height: isMobile ? 28 : 32 }} />
          </a>
          {!isMobile && (
            <span aria-label={chipLabel} style={{
              display: "inline-flex", alignItems: "center", cursor: "default", userSelect: "none",
              padding: "4px 10px", borderRadius: "var(--r-pill)",
              background: chipColor, color: "#fff",
              fontSize: 10, fontWeight: 800, letterSpacing: ".1em",
              textTransform: "uppercase", whiteSpace: "nowrap",
              transition: "background var(--dur-base) var(--ease-out)",
            }}>{chipLabel}</span>
          )}
        </div>

        {/* Center links — desktop only; hidden behind the hamburger on mobile */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: 2, flex: 1, justifyContent: "center" }}>
            {NAV_LINKS.map((l, i) => (
              <button key={i} onClick={() => scrollToSection(l.id)} style={{
                padding: "8px 14px", borderRadius: "var(--r-pill)", border: "none",
                background: "transparent", cursor: "pointer",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14,
                color: "var(--resi-navy)", whiteSpace: "nowrap",
              }}>{l.label}</button>
            ))}
          </nav>
        )}

        {/* Right cluster */}
        {isMobile ? (
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0, marginLeft: "auto" }}>
            {/* Cross-audience nav button replaces the primary CTA on mobile */}
            <a href="#"
               onClick={(e) => { e.preventDefault(); setMenuOpen(false); onRoute(cross.to); }}
               style={{
                 display: "inline-flex", alignItems: "center", justifyContent: "center",
                 height: 40, padding: "0 16px", maxWidth: "52vw", overflow: "hidden",
                 borderRadius: "var(--r-pill)", background: cross.color, color: "#fff",
                 fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14,
                 textDecoration: "none", whiteSpace: "nowrap",
                 transition: "background var(--dur-base) var(--ease-out)",
               }}>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{cross.mobileLabel}</span>
            </a>
            {/* Hamburger / close toggle — 44px touch target */}
            <button
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                width: 44, height: 44, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "var(--r-md)", border: "1px solid var(--resi-line)",
                background: "#fff", color: "var(--resi-navy)", cursor: "pointer",
              }}>
              <Icon name={menuOpen ? "x" : "menu"} size={22} stroke={2} />
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexShrink: 0 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onRoute(cross.to); }}
               onMouseEnter={() => setCrossHover(true)} onMouseLeave={() => setCrossHover(false)}
               style={{
                 fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13,
                 color: "var(--resi-fg-2)", whiteSpace: "nowrap",
                 textDecoration: crossHover ? "underline" : "none",
               }}>{cross.label}</a>
            <Button variant="primary" size="md" iconRight="arrow-right"
                    onClick={() => scrollToSection("planes")}>
              {ctaCopy}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile dropdown menu — nav links + cross-audience switch */}
      {isMobile && (
        <div style={{
          overflow: "hidden",
          maxHeight: menuOpen ? 360 : 0,
          opacity: menuOpen ? 1 : 0,
          transition: "max-height var(--dur-base) var(--ease-out), opacity var(--dur-fast) var(--ease-out)",
          borderTop: menuOpen ? "1px solid var(--resi-line)" : "1px solid transparent",
          background: "rgba(255,255,255,.97)",
        }}>
          <nav style={{
            display: "flex", flexDirection: "column", gap: 4,
            padding: `12px ${padX(true)}px 16px`,
          }}>
            {NAV_LINKS.map((l, i) => (
              <button key={i} onClick={() => goSection(l.id)} style={{
                display: "flex", alignItems: "center",
                minHeight: 48, padding: "0 14px",
                borderRadius: "var(--r-md)", border: "none",
                background: "transparent", cursor: "pointer", textAlign: "left",
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16,
                color: "var(--resi-navy)",
              }}>{l.label}</button>
            ))}
            <div style={{ height: 1, background: "var(--resi-line)", margin: "8px 14px" }} />
            <button onClick={() => { setMenuOpen(false); onRoute(cross.to); }} style={{
              display: "flex", alignItems: "center", gap: 8,
              minHeight: 48, padding: "0 14px",
              borderRadius: "var(--r-md)", border: "none",
              background: "transparent", cursor: "pointer", textAlign: "left",
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
              color: "var(--resi-fg-2)",
            }}>
              <Icon name="repeat" size={18} stroke={2} />
              {cross.label}
            </button>
          </nav>
        </div>
      )}
    </header>
    {/* Spacer reserves the fixed bar's height so content isn't covered. */}
    <div aria-hidden="true" style={{ height: isMobile ? 64 : 76 }} />
    </React.Fragment>
  );
};

window.NavBar = NavBar;
window.scrollToSection = scrollToSection;
