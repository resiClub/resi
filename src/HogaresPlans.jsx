// ============================================================
// HogaresPlans — "Planes para hogares" (3 planes).
// Content/structure/interaction from the attached mockup; visuals
// borrowed from the admin PlansSection cards (resi DS only).
//   · Monthly/annual toggle recomputes prices live.
//   · "2 meses gratis al pagar anual" label only visible on Anual.
//   · Plus card: "Más popular" badge + green highlighted border.
//   · 3 cards share equal height; CTA anchored to the bottom.
// ============================================================
const HOGARES_PLANS = [
{
  key: "base", name: "Base", color: "var(--resi-blue)",
  pm: "$9.900", pa: "$7.900",
  tagline: "Empieza a reciclar desde tu hogar",
  subtag: "Lo esencial para separar bien desde el primer día.",
  features: [
  <><strong>resiCUBO Base</strong> (20L · 40cm)</>,
  <><strong>5 resiLONAS </strong>reutilizables</>,
  <>Conoce tu <strong>huella</strong></>]

},
{
  key: "plus", name: "Plus", color: "var(--resi-orange)", featured: true,
  pm: "$17.900", pa: "$14.900",
  tagline: "Más capacidad, fuera de tu vista",
  subtag: "Más espacio adentro, el mismo en tu cocina.",
  features: [
  <><strong>resiCUBO Plus</strong> (30L · 60cm)</>,
  <><strong>5 resiLONAS Plus</strong> reutilizables</>,
  <><strong>Base retráctil</strong> — vive escondido en tu cocina</>,
  <><strong>Instalación incluida</strong></>,
  <>Conoce tu <strong>huella</strong></>,
  <><strong>resiTips</strong> semanales</>]

},
{
  key: "pro", name: "Pro", color: "var(--resi-green)",
  pm: "$22.900", pa: "$18.900",
  tagline: "Para ir un paso más allá",
  subtag: "Suma residuos de comida y el doble de bags.",
  features: [
  <><strong>Todo lo del plan Plus</strong></>,
  <><strong>miniCUBO</strong> para restos de comida</>,
  <><strong>8 resiBAGS</strong> reciclables mensuales</>]

}];


const HogaresPlans = () => {
  const [billing, setBilling] = React.useState("mensual");
  const isMobile = useIsMobile();

  return (
    <section id="planes" data-screen-label="Planes hogares"
    style={{ padding: isMobile ? "56px 0" : "96px 32px", background: "var(--resi-bg-soft)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32, padding: isMobile ? "0 24px" : 0 }}>
          <Eyebrow dot>Planes</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(32px, 4vw, 48px)", letterSpacing: "-.015em",
            margin: "12px 0 14px", color: "var(--resi-navy)", lineHeight: 1.1, textWrap: "balance"
          }}>
            Más fácil, <span style={{ color: "var(--resi-green)" }}>mayor impacto</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6,
            color: "var(--resi-fg-2)", margin: "0 auto", maxWidth: 560
          }}>
            Todos los residuos que separes llegarán a buenas manos.
          </p>
        </div>

        {/* Billing toggle + savings label */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 32, padding: isMobile ? "0 24px" : 0 }}>
          <div style={{
            display: "inline-flex", padding: 4, gap: 2,
            background: "#fff", borderRadius: "var(--r-pill)",
            border: "1px solid var(--resi-line)", boxShadow: "var(--shadow-xs)"
          }}>
            <HogaresToggleBtn active={billing === "mensual"} onClick={() => setBilling("mensual")}>Mensual</HogaresToggleBtn>
            <HogaresToggleBtn active={billing === "anual"} onClick={() => setBilling("anual")}>
              Anual
              <span style={{ display: billing === "mensual" ? "inline-flex" : "none", alignItems: "center" }}>
                <Icon name="gift" size={14} stroke={2} style={{ verticalAlign: "middle" }} />
              </span>
            </HogaresToggleBtn>
          </div>
          <div style={{
            opacity: billing === "anual" ? 1 : 0,
            pointerEvents: billing === "anual" ? "auto" : "none",
            transition: "opacity var(--dur-fast) var(--ease-out)",
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(76,165,72,.10)", border: "1px solid rgba(76,165,72,.30)",
            borderRadius: "var(--r-pill)", padding: "5px 14px",
            fontSize: 12.5, fontWeight: 700, color: "var(--resi-green-dark)"
          }}>
            <Icon name="gift" size={14} stroke={2} />
            2 meses gratis al pagar anual
          </div>
        </div>

        {/* Plan cards — 3-up grid on desktop, swipeable carousel on mobile */}
        {isMobile ?
        <PlansCarousel featuredIndex={1}>
            {HOGARES_PLANS.map((p) => <HogaresPlanCard key={p.key} plan={p} billing={billing} />)}
          </PlansCarousel> :

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "stretch" }}>
            {HOGARES_PLANS.map((p) => <HogaresPlanCard key={p.key} plan={p} billing={billing} />)}
          </div>
        }
      </div>
    </section>);

};

const HogaresToggleBtn = ({ active, onClick, children }) => {
  const isMobile = useIsMobile();
  return (
    <button onClick={onClick} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
      padding: isMobile ? "0 28px" : "8px 24px", minHeight: isMobile ? 44 : 0,
      borderRadius: "var(--r-pill)", border: "none", cursor: "pointer",
      fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700,
      background: active ? "var(--resi-navy)" : "transparent",
      color: active ? "#fff" : "var(--resi-fg-3)",
      boxShadow: active ? "var(--shadow-xs)" : "none",
      transition: "all var(--dur-fast) var(--ease-out)"
    }}>{children}</button>);

};

const HogaresPlanCard = ({ plan, billing }) => {
  const featured = !!plan.featured;
  const [hover, setHover] = React.useState(false);
  const price = billing === "mensual" ? plan.pm : plan.pa;
  const isMobile = useIsMobile();
  const px = isMobile ? 18 : 24;

  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", background: "#fff", overflow: "hidden",
        display: "flex", flexDirection: "column",
        height: isMobile ? "100%" : undefined,
        borderRadius: "var(--r-lg)",
        border: featured ? "1.5px solid var(--resi-green)" : "1px solid var(--resi-line)",
        boxShadow: featured ?
        "0 8px 28px rgba(76,165,72,.14)" :
        hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transition: "box-shadow var(--dur-base) var(--ease-out)"
      }}>

      {featured &&
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        background: "var(--resi-green)", color: "#fff",
        fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase",
        padding: "5px 16px", borderRadius: "0 0 10px 10px", whiteSpace: "nowrap"
      }}>Más popular</div>
      }

      {/* Top: name, price, tagline */}
      <div style={{ padding: featured ? `${isMobile ? 26 : 32}px ${px}px 16px` : `${isMobile ? 18 : 24}px ${px}px 16px` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <img src={asset("assets/logos/resiClub.png")} alt="resiCLUB"
          style={{ height: 40, width: "auto", display: "block", flexShrink: 0 }} />
          <span style={{
            fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700,
            letterSpacing: "-.01em", color: plan.color
          }}>{plan.name}</span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 14 }}>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 700,
            letterSpacing: "-.02em", lineHeight: 1, color: "var(--resi-navy)"
          }}>{price}</span>
          <span style={{ fontSize: 13, color: "var(--resi-fg-3)" }}>/mes</span>
        </div>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 800,
          letterSpacing: ".06em", textTransform: "uppercase",
          color: plan.color, margin: "0 0 6px"
        }}>{plan.tagline}</p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.45,
          color: "var(--resi-fg-2)", margin: 0
        }}>{plan.subtag}</p>
      </div>

      <div style={{ height: 1, background: "var(--resi-line)", margin: `0 ${px}px` }} />

      {/* Features — flex:1 pushes CTA to the bottom */}
      <ul style={{
        listStyle: "none", padding: `18px ${px}px 0`, margin: 0, flex: 1,
        display: "flex", flexDirection: "column", gap: 11
      }}>
        {plan.features.map((f, i) =>
        <li key={i} style={{
          display: "flex", alignItems: "flex-start", gap: 9,
          fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.45,
          color: "var(--resi-navy)"
        }}>
            <Icon name="check" size={15} stroke={2.8} style={{ color: "var(--resi-green)", flexShrink: 0, marginTop: 1 }} />
            <span>{f}</span>
          </li>
        )}
      </ul>

      {/* CTA — always anchored to the bottom */}
      <div style={{ padding: `20px ${px}px` }}>
        <Button variant={featured ? "primary" : "outline"} size="md" full>Empezar</Button>
      </div>
    </div>);

};

window.HogaresPlans = HogaresPlans;