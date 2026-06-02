// ============================================================
// ImpactSection — "El valor de separar bien"
// Sits between HowItWorks (stepper) and PlansSection.
// Soft contrast background (var(--resi-bg-soft)) since neighbors are white.
//
// EXACT colors fixed by spec (no tokenizing, no variations, NO gradients):
//   Verde principal  #4CA548
//   Azul oscuro      #2D2147
//   Naranja alerta   #F26A2C
//   Banner bg        #FFF8F0
//   Pill bg          #F5F0E8
//   Texto secundario #6B7280
// Surfaces/borders/radii/shadows/type use design tokens.
// ============================================================
const IMP_GREEN = "#4CA548";
const IMP_NAVY = "#2D2147";
const IMP_ORANGE = "#F26A2C";
const IMP_TEXT_2 = "#6B7280";

const ImpactSection = () => {
  const isMobile = useIsMobile();
  const goToCalc = () => {
    const el = document.getElementById("calculadora");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
  };

  return (
    <section id="impacto" data-screen-label="Impacto · valor de separar"
      style={{ background: "var(--resi-bg-soft)", padding: isMobile ? "56px 24px" : "96px 32px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div style={{ textAlign: "center" }}>
          <Eyebrow dot>Impacto</Eyebrow>
        </div>

        {/* Title — two colors */}
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-.015em",
          margin: "14px 0 14px", color: IMP_NAVY, textAlign: "center",
        }}>
          separados, serían <span style={{ color: IMP_GREEN }}>ahorros</span>
        </h2>

        {/* Subtitle */}
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
          color: IMP_TEXT_2, margin: `0 auto ${isMobile ? 32 : 56}px`, maxWidth: 580, textAlign: "center",
        }}>
          Con una tasa de reciclaje sostenida y medida, tu copropiedad puede acceder al descuento por tarifa multiusuario. Así se ve en un edificio tipo:
        </p>

        {/* Edificio tipo pill */}
        <div style={{ marginBottom: 24, textAlign: isMobile ? "center" : "left" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#F5F0E8", borderRadius: "var(--r-pill)", padding: "6px 14px",
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: IMP_NAVY,
          }}>
            <span aria-hidden="true">🏢</span>
            Edificio tipo · 50 hogares · Estrato 3
          </span>
        </div>

        {/* Impact grid */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 20, marginBottom: 24 }}>
          {/* Main dark card */}
          <div style={{
            background: IMP_NAVY, borderRadius: "var(--r-md)", padding: 28,
            display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 230,
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
                letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8,
              }}>Ahorro anual proyectado</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48,
                lineHeight: 1, color: IMP_GREEN, marginBottom: 8,
              }}>$216.000</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,.65)" }}>
                con tasa de reciclaje del 30% medida
              </div>
            </div>
            <div style={{
              alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 5,
              background: "rgba(76,165,72,.15)", border: "1px solid rgba(76,165,72,.3)",
              borderRadius: "var(--r-pill)", padding: "5px 11px", marginTop: 14,
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: IMP_GREEN,
            }}>
              <Icon name="trending-up" size={13} stroke={2.4} /> Tarifa multiusuario aplicada
            </div>
          </div>

          {/* Two stacked white cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 20 }}>
            <ImpactSmall label="Ahorro mensual" num="$18.000" desc="30% de descuento sobre manejo de residuos" />
            <ImpactSmall label="Kg reciclados al mes" num="300 kg" desc="con participación activa de los hogares" />
          </div>
        </div>

        {/* Recycling-rate bar */}
        <div style={{
          background: "var(--resi-bg)", borderRadius: "var(--r-md)", padding: isMobile ? "20px 16px" : "24px 26px",
          marginBottom: 28, border: "1px solid var(--resi-line)", boxShadow: "var(--shadow-xs)",
        }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "baseline", gap: isMobile ? 8 : 0, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: IMP_NAVY }}>
              Tasa de reciclaje del edificio tipo
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, color: IMP_GREEN }}>
              30% alcanzado con resi
            </span>
          </div>

          {/* Floating 30% indicator */}
          <div style={{ position: "relative", height: 22, marginBottom: 2 }}>
            <div style={{
              position: "absolute", left: "30%", transform: "translateX(-50%)", top: 6,
              width: 12, height: 12, borderRadius: "50%", background: IMP_GREEN,
              border: "2px solid #fff", boxShadow: `0 0 0 1px ${IMP_GREEN}`,
            }} />
            <div style={{
              position: "absolute", left: "30%", top: 0, marginLeft: 12,
              fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: IMP_GREEN, whiteSpace: "nowrap",
            }}>30%</div>
          </div>

          {/* Track */}
          <div style={{ position: "relative", height: 8, background: "var(--resi-line)", borderRadius: 4 }}>
            <div style={{ height: "100%", width: "30%", background: IMP_GREEN, borderRadius: 4 }} />
            {/* 50% max marker */}
            <div style={{
              position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)",
              width: 1.5, height: 16, background: IMP_NAVY, opacity: 0.2, borderRadius: 1,
            }} />
          </div>

          {/* Labels */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "start", marginTop: 12 }}>
            <div style={{ fontSize: 10, color: IMP_TEXT_2 }}>
              0%<br /><span style={{ fontSize: 9 }}>sin reciclaje</span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 600, color: IMP_NAVY, textAlign: "center", whiteSpace: "nowrap" }}>
              50%<span style={{ display: "block", fontSize: 9, color: IMP_TEXT_2, fontWeight: 400 }}>máximo potencial</span>
            </div>
            <div style={{ fontSize: 10, color: IMP_TEXT_2, textAlign: "right" }}>
              100%<br /><span style={{ fontSize: 9 }}>total residuos</span>
            </div>
          </div>
        </div>

        {/* Pain notice — collapsible, relocated before the CTA */}
        <PainNotice />

        {/* CTA */}
        <div style={{ display: isMobile ? "block" : "flex", alignItems: "center", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
          <ImpactCta onClick={goToCalc} full={isMobile} />
        </div>

        {/* Transparency note */}
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 11.5, lineHeight: 1.6, fontStyle: "italic",
          color: IMP_TEXT_2, paddingLeft: 12, borderLeft: "2px solid var(--resi-line)",
          maxWidth: 540, margin: 0,
        }}>
          * El ahorro real depende de la tasa de reciclaje efectiva del edificio y del cobro actual de la empresa de aseo. Resi no garantiza el descuento, pero sí el sistema para lograrlo.
        </p>
      </div>
    </section>
  );
};

const PainNotice = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      background: "#FFF8F0", border: `1px solid ${IMP_ORANGE}`, borderLeft: `3px solid ${IMP_ORANGE}`,
      borderRadius: "var(--r-sm)", marginBottom: 28, overflow: "hidden",
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          display: "flex", alignItems: "center", gap: 12, width: "100%",
          background: "none", border: "none", cursor: "pointer", textAlign: "left",
          padding: "16px 18px", minHeight: isMobile ? 44 : undefined, fontFamily: "var(--font-body)",
        }}>
        <span style={{ fontSize: 18, flexShrink: 0, lineHeight: 1.2 }} aria-hidden="true">⚠️</span>
        <strong style={{ flex: 1, fontWeight: 600, fontSize: 13, lineHeight: 1.5, color: IMP_ORANGE }}>
          La tarifa multiusuario puede subir tu costo si no se hace bien
        </strong>
        <Icon name="chevron-down" size={18} stroke={2.2} style={{
          color: IMP_ORANGE, flexShrink: 0,
          transform: open ? "rotate(180deg)" : "none",
          transition: "transform var(--dur-fast) var(--ease-out)",
        }} />
      </button>
      {open && (
        <div style={{
          padding: "0 18px 16px 48px",
          fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.6, color: IMP_NAVY,
        }}>
          Solo funciona cuando el edificio recicla de verdad y tiene la trazabilidad para demostrarlo. Resi te da exactamente eso.
          <span style={{ display: "block", marginTop: 6, fontSize: 12, color: IMP_TEXT_2 }}>
            Muchos edificios han solicitado este modelo y terminaron pagando más — porque creyeron que reciclar era suficiente sin medir ni certificar.
          </span>
        </div>
      )}
    </div>
  );
};

const ImpactSmall = ({ label, num, desc }) => (
  <div style={{
    flex: 1, background: "var(--resi-bg)", borderRadius: "var(--r-sm)",
    padding: 22, border: "1px solid var(--resi-line)",
    display: "flex", flexDirection: "column", justifyContent: "center",
  }}>
    <div style={{
      fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
      letterSpacing: ".07em", textTransform: "uppercase", color: IMP_TEXT_2, marginBottom: 5,
    }}>{label}</div>
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, lineHeight: 1, color: IMP_NAVY }}>{num}</div>
    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: IMP_TEXT_2, marginTop: 3, lineHeight: 1.4 }}>{desc}</div>
  </div>
);

const ImpactCta = ({ onClick, full }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: full ? "flex" : "inline-flex", width: full ? "100%" : "auto",
        alignItems: "center", justifyContent: "center", gap: 8,
        background: hover ? "#3d9440" : IMP_GREEN, color: "#fff",
        borderRadius: "var(--r-pill)", padding: "12px 22px", border: "none", cursor: "pointer",
        fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700,
        boxShadow: "0 2px 8px rgba(76,165,72,.25)",
        transition: "background var(--dur-fast) var(--ease-out)",
      }}>
      Calcula el ahorro de tu edificio
      <Icon name="arrow-right" size={16} stroke={2.2} />
    </button>
  );
};

window.ImpactSection = ImpactSection;
