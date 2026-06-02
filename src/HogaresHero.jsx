// ============================================================
// HogaresHero — same structure/components as AdminHero, residents copy.
// Reuses Eyebrow, Button, PhotoSlot, Icon + the hero steps strip pattern.
// ============================================================
const HOGARES_STEPS = [
{ icon: "layout-grid", title: "Separa fácil", desc: "Sin esfuerzo, sin pensar.", color: "var(--resi-blue)" },
{ icon: "send", title: "Entrega rápida", desc: "En el shut, en segundos.", color: "var(--resi-orange)" },
{ icon: "heart-handshake", title: "Impacta de verdad", desc: "Reciclador de confianza.", color: "var(--resi-pink)" },
{ icon: "bar-chart-3", title: "Conoce tu huella", desc: "Reportes cada mes.", color: "var(--resi-green)" }];


const HOGARES_VIDEO_SRC = "https://res.cloudinary.com/db8a6pwok/video/upload/v1780346564/resi_Horizontal_b9njbp.mp4";

const HogaresHero = () => {
  const isMobile = useIsMobile();

  const eyebrow = <Eyebrow>En tu apartamento</Eyebrow>;

  const title =
  <h1 style={{
    fontFamily: "var(--font-display)", fontWeight: 700,
    fontSize: isMobile ? "clamp(28px, 7.5vw, 36px)" : "clamp(34px, 3.2vw, 50px)",
    lineHeight: isMobile ? 1.1 : 1.06, margin: 0,
    letterSpacing: "-0.02em", color: "var(--resi-navy)",
    textWrap: "balance"
  }}>
      Cada residuo que separas, <span style={{ color: "var(--resi-green)" }}>sí importa</span>
    </h1>;


  const desc =
  <p style={{
    fontFamily: "var(--font-body)", fontSize: isMobile ? 17 : 19, lineHeight: 1.55,
    color: "var(--resi-fg-2)", margin: 0, maxWidth: isMobile ? "none" : 520, textAlign: "left"
  }}>
      Cuidamos los residuos que separaste en el hogar para entregárselos —así,
      separados— a un reciclador de tu confianza.
    </p>;


  const primaryBtn =
  <Button variant="primary" size="lg" full={isMobile}
  onClick={() => document.getElementById("planes")?.scrollIntoView({ behavior: 'smooth' })}>
      Unirme ahora
    </Button>;

  const secondaryBtn =
  <Button variant="outline" size="lg" iconLeft="play" full={isMobile}
  onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: 'smooth' })}>
      Ver cómo funciona
    </Button>;


  const socialProof = <HogaresSocialProof />;

  const media =
  <div style={{ position: "relative", width: "100%", overflow: "visible" }}>
      <HeroVideo src={HOGARES_VIDEO_SRC} ratio="16/9" radius="var(--r-2xl)" />
      {!isMobile && <div style={{
      position: "absolute", left: -24, bottom: -20,
      background: "#fff", borderRadius: "var(--r-md)", padding: "16px 20px",
      boxShadow: "var(--shadow-lg)", minWidth: 178,
      transform: "scale(0.7)", transformOrigin: "bottom left"
    }}>
        <div style={{
        fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 800,
        letterSpacing: ".1em", textTransform: "uppercase",
        color: "var(--resi-fg-3)", marginBottom: 7
      }}>Impacto este mes</div>
        <div style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34,
        lineHeight: 1, color: "var(--resi-navy)"
      }}>12,4 kg</div>
        <div style={{
        display: "inline-flex", alignItems: "center", gap: 5, marginTop: 9,
        fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700,
        color: "var(--resi-green)"
      }}>
          <Icon name="arrow-up" size={14} stroke={2.6} /> reciclados de verdad
        </div>
      </div>}
    </div>;


  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "36px 24px 40px" : "88px 32px 56px"
      }}>
        {isMobile ? (
        /* MOBILE — reordered: eyebrow, title, video, desc, social proof, CTAs */
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", width: "100%" }}>
            {eyebrow}
            {title}
            {media}
            {desc}
            {socialProof}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4, width: "100%" }}>
              {primaryBtn}
              {secondaryBtn}
            </div>
          </div>) : (

        /* DESKTOP — two columns, unchanged order */
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 56, alignItems: "center"
        }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start", width: "100%" }}>
              {eyebrow}
              {title}
              {desc}
              <div style={{
              display: "flex", gap: 12, marginTop: 4,
              flexDirection: "row", flexWrap: "wrap", width: "auto"
            }}>
                {primaryBtn}
                {secondaryBtn}
              </div>
              {socialProof}
            </div>
            {media}
          </div>)
        }
      </div>

      {/* 4-step process strip — secondary content, hidden on mobile (lives in its own section below) */}
      {!isMobile && <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8px 32px 88px" }}>
        <HogaresStepsStrip />
      </div>}
    </section>);

};

window.HogaresHero = HogaresHero;

// ============================================================
// HogaresSocialProof — stacked colored avatars + count line
// ============================================================
const HogaresSocialProof = () =>
<div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
    <div style={{ display: "flex" }}>
      {["var(--resi-green)", "var(--resi-blue)", "var(--resi-pink)"].map((c, i) =>
    <span key={i} style={{
      width: 34, height: 34, borderRadius: 999, background: c,
      border: "2.5px solid #fff", marginLeft: i ? -10 : 0,
      boxShadow: "var(--shadow-xs)"
    }} />
    )}
    </div>
    <span style={{
    fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.4, color: "var(--resi-fg-2)"
  }}>
      <strong style={{ color: "var(--resi-green)", fontWeight: 800 }}>10 hogares</strong> ya cuidan lo importante con resi
    </span>
  </div>;


window.HogaresSocialProof = HogaresSocialProof;

// ============================================================
// HogaresStepsStrip — 4-step process strip.
// Same node+label visual as the admin strip, with a short subtitle.
// ============================================================
const HogaresStepsStrip = () =>
<div>
    <div style={{ position: "relative", padding: "0 8px" }}>
      {/* Connecting line (under nodes) */}
      <div style={{
      position: "absolute", left: "12%", right: "12%", top: 40,
      height: 2, background: "var(--resi-line-strong)",
      borderRadius: 2
    }} />

      <div style={{
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
      gap: 8, position: "relative"
    }}>
        {HOGARES_STEPS.map((s, i) =>
      <div key={i} style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 14
      }}>
            {/* Node */}
            <div style={{
          width: 80, height: 80, borderRadius: 999,
          background: "#fff",
          border: `2.5px solid ${s.color}`,
          color: s.color,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 6px 18px ${s.color}26`,
          position: "relative", zIndex: 1
        }}>
              <Icon name={s.icon} size={32} stroke={2} />
            </div>
            {/* Label + subtitle */}
            <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4
        }}>
              <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
            color: "var(--resi-navy)", textAlign: "center", letterSpacing: "-.005em",
            lineHeight: 1.3
          }}>{s.title}</div>
              <div style={{
            fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 13,
            color: "var(--resi-fg-2)", textAlign: "center", lineHeight: 1.35,
            maxWidth: 160
          }}>{s.desc}</div>
            </div>
          </div>
      )}
      </div>
    </div>
  </div>;


window.HogaresStepsStrip = HogaresStepsStrip;