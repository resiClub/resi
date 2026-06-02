// ============================================================
// HogaresImpact — "Impacto" section for residents.
// Content/structure from the attached mockup; visuals = resi DS only.
// Two columns: copy + outline CTA (left), vertical photo with an
// overlaid testimonial card anchored bottom-left (right).
// ============================================================
const HogaresImpact = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <HogaresImpactMobile />;
  return (
  <section id="impacto" style={{ background: "var(--resi-bg-soft)", padding: "96px 32px" }}>
    <div style={{
      maxWidth: 1200, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
    }}>
      {/* LEFT — eyebrow (left-aligned), title, copy, outline CTA */}
      <div style={{ display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
        <Eyebrow dot>Impacto</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(32px, 4vw, 50px)", letterSpacing: "-.015em",
          color: "var(--resi-navy)", lineHeight: 1.1, margin: 0,
        }}>
          Llegan a <span style={{ color: "var(--resi-green)" }}>buenas manos</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6,
          color: "var(--resi-fg-2)", margin: 0, maxWidth: 460,
        }}>
          Cada residuo que separas llega directamente a un reciclador que conoces por
          su nombre y su historia en tu edificio.
        </p>
        <Button variant="outline" size="lg" style={{ marginTop: 4 }}>
          Conoce al reciclador de tu edificio
        </Button>
      </div>

      {/* RIGHT — vertical photo + overlaid testimonial card */}
      <div style={{ position: "relative", paddingLeft: 32, paddingBottom: 28 }}>
        <div style={{
          width: "100%", aspectRatio: "3 / 4", borderRadius: "var(--r-2xl)",
          overflow: "hidden", boxShadow: "var(--shadow-md)",
        }}>
          <img
            src="https://res.cloudinary.com/db8a6pwok/image/upload/q_auto/f_auto/v1780353043/reciclador_jf1wxa.png"
            alt="Reciclador de tu edificio"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div style={{
          position: "absolute", left: 0, bottom: 0, right: 56,
          background: "#fff", borderRadius: "var(--r-lg)",
          padding: "24px 26px", boxShadow: "var(--shadow-lg)",
          display: "flex", flexDirection: "column", gap: 14,
        }}>
          <Icon name="quote" size={24} stroke={2} style={{ color: "var(--resi-green)" }} />
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
            fontStyle: "italic", color: "var(--resi-navy)", margin: 0,
          }}>
            "Ahora es más fácil trabajar porque a uno le entregan cada material separado,
            como debe ser"
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{
              width: 32, height: 3, borderRadius: 2,
              background: "var(--resi-green)", flexShrink: 0,
            }} />
            <div>
              <strong style={{
                display: "block", fontFamily: "var(--font-body)", fontSize: 14,
                fontWeight: 800, color: "var(--resi-navy)",
              }}>Óscar</strong>
              <span style={{
                display: "block", fontFamily: "var(--font-body)", fontSize: 12.5,
                color: "var(--resi-fg-2)",
              }}>Reciclador beneficiado, Manizales</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

// ----- Mobile version -----------------------------------------
// Vertical order: eyebrow+title → full-width photo → testimonial
// card stacked below (same radius, full width) → full-width outline CTA.
// The descriptive paragraph is omitted on mobile (redundant here).
const HogaresImpactMobile = () => (
  <section id="impacto" style={{ background: "var(--resi-bg-soft)", padding: "48px 24px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>

      {/* Eyebrow + title */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Eyebrow dot>Impacto</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(26px, 7vw, 36px)", letterSpacing: "-.015em",
          color: "var(--resi-navy)", lineHeight: 1.12, margin: 0,
        }}>
          Llegan a <span style={{ color: "var(--resi-green)" }}>buenas manos</span>
        </h2>
      </div>

      {/* Full-width photo */}
      <div style={{
        position: "relative", width: "100%", aspectRatio: "3 / 4", borderRadius: "var(--r-2xl)",
        overflow: "hidden",
      }}>
        <img
          src="https://res.cloudinary.com/db8a6pwok/image/upload/q_auto/f_auto/v1780353043/reciclador_jf1wxa.png"
          alt="Reciclador de tu edificio"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Testimonial card — stacked below the photo, full width, same radius as the photo */}
      <div style={{
        width: "100%", background: "#fff", borderRadius: "var(--r-2xl)",
        padding: "24px 26px", boxShadow: "var(--shadow-md)",
        display: "flex", flexDirection: "column", gap: 14,
      }}>
        <Icon name="quote" size={24} stroke={2} style={{ color: "var(--resi-green)" }} />
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
          fontStyle: "italic", color: "var(--resi-navy)", margin: 0,
        }}>
          "Ahora es más fácil trabajar porque a uno le entregan cada material separado,
          como debe ser"
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 32, height: 3, borderRadius: 2, background: "var(--resi-green)", flexShrink: 0 }} />
          <div>
            <strong style={{
              display: "block", fontFamily: "var(--font-body)", fontSize: 14,
              fontWeight: 800, color: "var(--resi-navy)",
            }}>Óscar</strong>
            <span style={{
              display: "block", fontFamily: "var(--font-body)", fontSize: 12.5,
              color: "var(--resi-fg-2)",
            }}>Reciclador beneficiado, Manizales</span>
          </div>
        </div>
      </div>

      {/* Full-width outline CTA — matches the app's secondary buttons */}
      <Button variant="outline" size="lg" full>
        Conoce al reciclador de tu edificio
      </Button>
    </div>
  </section>
);

window.HogaresImpact = HogaresImpact;
