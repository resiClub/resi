// ============================================================
// HogaresCalculator — impact calculator (residents).
// Content/structure/logic from the attached mockup; visuals = resi DS.
// Two columns: copy + eyebrow (left), calculator card (right).
// Selecting a household size updates the kg/año result live.
// ============================================================
const HOGARES_CALC_OPTIONS = [
{ id: "1", label: "1 persona", kg: 106 },
{ id: "2", label: "2 personas", kg: 211 },
{ id: "34", label: "3-4 personas", kg: 370 },
{ id: "5", label: "5 o más", kg: 528 }];


const HogaresCalculator = () => {
  const [sel, setSel] = React.useState("1");
  const kg = HOGARES_CALC_OPTIONS.find((o) => o.id === sel).kg;
  const isMobile = useIsMobile();

  // Eyebrow + title — shared by both layouts.
  const titleBlock =
  <React.Fragment>
      <Eyebrow dot>Calculadora</Eyebrow>
      <h2 style={{
      fontFamily: "var(--font-display)", fontWeight: 700,
      fontSize: isMobile ? "clamp(26px, 7vw, 36px)" : "clamp(32px, 3.6vw, 48px)", letterSpacing: "-.015em",
      lineHeight: 1.12, margin: 0, color: "rgb(7, 7, 78)"
    }}>
        80% de los que separas<br />
        hoy no se <span style={{ color: "var(--resi-green)" }}>reciclan</span>
      </h2>
    </React.Fragment>;


  // Descriptive paragraph — left-aligned in both layouts.
  const paragraph =
  <p style={{
    fontFamily: "var(--font-body)", fontSize: isMobile ? 16 : 17, lineHeight: 1.6,
    color: "var(--resi-fg-2)", margin: 0, maxWidth: isMobile ? "none" : 420, textAlign: "left"
  }}>Una persona en Colombia genera ~11 kg de residuos reciclables por mes. Conoce cuánto podrías reciclar en tu hogar con resi.


  </p>;


  // Calculator card.
  const card =
  <div style={{
    background: "var(--resi-bg-soft)", borderRadius: "var(--r-2xl)",
    padding: isMobile ? "28px 22px" : "40px 36px", display: "flex", flexDirection: "column", gap: 24,
    width: "100%"
  }}>
      <div style={{
      fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 800,
      letterSpacing: ".14em", textTransform: "uppercase", color: "var(--resi-fg-3)"
    }}>Calculadora de impacto</div>

      <p style={{
      fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700,
      color: "var(--resi-navy)", margin: 0, lineHeight: 1.3
    }}>¿Cuántas personas viven en tu hogar?</p>

      {/* Options */}
      <div style={{
      display: isMobile ? "grid" : "flex",
      gridTemplateColumns: isMobile ? "1fr 1fr" : undefined,
      flexWrap: isMobile ? undefined : "wrap", gap: 10
    }}>
        {HOGARES_CALC_OPTIONS.map((o) => {
        const active = sel === o.id;
        return (
          <button key={o.id} onClick={() => setSel(o.id)} style={{
            fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700,
            padding: isMobile ? "0 16px" : "10px 20px", minHeight: isMobile ? 44 : 0,
            borderRadius: "var(--r-pill)", cursor: "pointer",
            border: active ? "1.5px solid var(--resi-green)" : "1.5px solid var(--resi-line)",
            background: active ? "var(--resi-green)" : "#fff",
            color: active ? "#fff" : "var(--resi-navy)",
            boxShadow: active ? "var(--shadow-xs)" : "none",
            transition: "all var(--dur-fast) var(--ease-out)"
          }}>{o.label}</button>);

      })}
      </div>

      {/* Result */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-.02em",
        color: "var(--resi-green)"
      }}>~{kg} kg/año</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--resi-fg-2)" }}>que sí podrían reciclarse.

      </span>
      </div>

      <Button variant="primary" size="lg" full onClick={() => window.scrollToSection && window.scrollToSection("planes")}>Empezar a reciclar</Button>
    </div>;


  return (
    <section id="calculadora" style={{ background: "var(--resi-bg)", padding: isMobile ? "56px 24px" : "96px 32px" }}>
      {isMobile ?
      // MOBILE — stacked: title, card, then paragraph below the card.
      <div style={{
        maxWidth: 600, margin: "0 auto",
        display: "flex", flexDirection: "column", gap: 24, alignItems: "stretch"
      }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            {titleBlock}
          </div>
          {paragraph}
          {card}
        </div> :

      // DESKTOP — original two columns: copy (left), card (right).
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center"
      }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
            {titleBlock}
            {paragraph}
          </div>
          {card}
        </div>
      }
    </section>);

};

window.HogaresCalculator = HogaresCalculator;