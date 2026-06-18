// ============================================================
// PlansSection — Planes para administradores (3 planes)
// Desktop only. Segment (aptos) + billing (mensual/anual) toggles
// recompute prices live. Structure & content ported 1:1 from the
// reference HTML; styled with resi design tokens.
//
// Exact plan colors are FIXED by spec (do not tokenize):
//   Base #008ECA · Plus #F26A2C · Pro #4CA548
// ============================================================

// Pricing data. Annual equivalent monthly = monthly × 10 / 12 (2 meses gratis).
const PLAN_SEGS = [
  { l: "1 – 30 HOGARES",
    base: { pm: "$89.900",  pa: "$74.917",  phm: "$2.997", pha: "$2.497", ins: "$299.900" },
    plus: { pm: "$109.900", pa: "$91.583",  phm: "$3.663", pha: "$3.053", ins: "$499.900" },
    pro:  { pm: "$119.900", pa: "$99.917",  phm: "$3.997", pha: "$3.331", ins: "$499.900" } },
  { l: "31 – 60 HOGARES",
    base: { pm: "$109.900", pa: "$91.583",  phm: "$1.832", pha: "$1.527", ins: "$299.900" },
    plus: { pm: "$139.900", pa: "$116.583", phm: "$2.332", pha: "$1.943", ins: "$499.900" },
    pro:  { pm: "$149.900", pa: "$124.917", phm: "$2.498", pha: "$2.082", ins: "$499.900" } },
  { l: "61 – 120 HOGARES",
    base: { pm: "$129.900", pa: "$108.250", phm: "$1.083", pha: "$902",   ins: "$299.900" },
    plus: { pm: "$169.900", pa: "$141.583", phm: "$1.416", pha: "$1.180", ins: "$499.900" },
    pro:  { pm: "$179.900", pa: "$149.917", phm: "$1.499", pha: "$1.249", ins: "$499.900" } },
  { l: "121+ HOGARES",
    base: { pm: "$149.900", pa: "$124.917", phm: "$833",   pha: "$694",   ins: "$299.900" },
    plus: { pm: "$199.900", pa: "$166.583", phm: "$1.111", pha: "$926",   ins: "$499.900" },
    pro:  { pm: "$209.900", pa: "$174.917", phm: "$1.166", pha: "$972",   ins: "$499.900" } },
];

// Segment pills, displayed in this exact order; default active = "121+ aptos" (idx 3).
const SEG_OPTIONS = [
  { idx: 3, l: "121+ aptos" },
  { idx: 2, l: "61–120 aptos" },
  { idx: 1, l: "31–60 aptos" },
  { idx: 0, l: "1–30 aptos" },
];

const PLAN_META = {
  base: {
    name: "Base", color: "#008ECA", tagline: "Empieza a reciclar",
    diffs: [
      { t: <>Punto Limpio con 6 categorías</> },
      { t: <>Recolección <strong>quincenal</strong></> },
      { t: <>Reporte escrito vía WhatsApp</> },
      { t: <>Sin rediseño del cuarto de residuos</>, muted: true },
    ],
    groups: [
      { title: "Punto Limpio", items: [
        "resiBOTE Base: 6 categorías reciclables",
        "Iluminación automática",
        "Mantenimiento incluido" ] },
      { title: "Recolección garantizada", items: [
        "Frecuencia quincenal",
        "Residuos llegan separados a centros de reciclaje",
        "Plan de contingencia ante inasistencia" ] },
      { title: "Seguimiento y reporte", items: [
        "Reporte mensual escrito: kg reciclados, tasa, evolución mes a mes",
        "resiTips Base — formato textual vía WhatsApp" ] },
    ],
    cta: "Activar Base",
  },
  plus: {
    name: "Plus", color: "#F26A2C", tagline: "Más categorías, mayor impacto",
    diffs: [
      { t: <>Punto Limpio con 9+3 categorías</> },
      { t: <>Recolección <strong>a demanda</strong></> },
      { t: <>Rediseño experiencial del cuarto</> },
      { t: <>Reporte escrito vía WhatsApp</> },
    ],
    groups: [
      { title: "Punto Limpio", items: [
        "resiBOTE Plus: 9 categorías + 3 especiales",
        "Rediseño experiencial: redistribución, señalética, iluminación automática",
        "Mantenimiento incluido" ] },
      { title: "Recolección garantizada", items: [
        "Frecuencia a demanda",
        "Residuos llegan separados a centros de reciclaje",
        "Plan de contingencia ante inasistencia" ] },
      { title: "Seguimiento y reporte", items: [
        "Reporte mensual escrito: kg reciclados, tasa, evolución mes a mes",
        "resiTips Base — formato textual vía WhatsApp" ] },
    ],
    cta: "Activar Plus",
  },
  pro: {
    name: "Pro", color: "#4CA548", tagline: "Muestra fácilmente un mayor impacto", featured: true,
    diffs: [
      { t: <>Todo lo del plan Plus</> },
      { t: <><strong>Reporte mensual gráfico</strong> con proyección</> },
      { t: <>Comunicado automático a hogares</> },
      { t: <>resiTips Plus — imágenes y cartelera</> },
    ],
    groups: [
      { title: "Punto Limpio", items: [
        "resiBOTE Plus: 9 categorías + 3 especiales",
        "Rediseño experiencial completo",
        "Mantenimiento incluido" ] },
      { title: "Recolección garantizada", items: [
        "Frecuencia a demanda",
        "Residuos llegan separados a centros de reciclaje",
        "Plan de contingencia ante inasistencia" ] },
      { title: "Seguimiento y reporte", items: [
        "Reporte mensual gráfico: kg por categoría, proyección de impacto, evolución, a quién le entregas",
        "Versión resumida comunicada automáticamente a hogares",
        "resiTips Plus — imágenes vía WhatsApp y cartelera" ] },
    ],
    cta: "Activar Pro",
  },
};

const planValues = (segIdx, planKey, billing) => {
  const d = PLAN_SEGS[segIdx][planKey];
  return {
    range: PLAN_SEGS[segIdx].l,
    price: billing === "mensual" ? d.pm : d.pa,
    unit: billing === "mensual" ? "/mes" : "/mes equiv.",
    ph: billing === "mensual" ? d.phm : d.pha,
    ins: "Instalación única: " + d.ins,
  };
};

const PlansSection = () => {
  const [segIdx, setSegIdx] = React.useState(3);   // "121+ aptos"
  const [billing, setBilling] = React.useState("mensual");
  const isMobile = useIsMobile();

  return (
    <section id="planes" data-screen-label="Planes administradores"
      style={{ padding: isMobile ? "56px 0" : "96px 32px", background: "var(--resi-bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36, padding: isMobile ? "0 24px" : 0 }}>
          <Eyebrow dot>Planes</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(32px, 4vw, 48px)", letterSpacing: "-.015em",
            margin: "12px 0 0", color: "var(--resi-navy)", lineHeight: 1.1, textWrap: "balance",
          }}>
            Comienza <span style={{ color: "var(--resi-green)" }}>activando</span> el reciclaje
          </h2>
        </div>

        {/* Billing toggle */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 26, padding: isMobile ? "0 24px" : 0 }}>
          <div style={{
            display: "inline-flex", padding: 4, gap: 2,
            background: "var(--resi-bg-soft)", borderRadius: "var(--r-pill)",
            border: "1px solid var(--resi-line)", boxShadow: "var(--shadow-xs)",
          }}>
            <ToggleBtn active={billing === "mensual"} onClick={() => setBilling("mensual")}>Mensual</ToggleBtn>
            <ToggleBtn active={billing === "anual"} onClick={() => setBilling("anual")}>
              Anual
              <span style={{ display: billing === "mensual" ? "inline-flex" : "none", alignItems: "center" }}>
                <Icon name="gift" size={14} stroke={2} style={{ verticalAlign: "middle" }} />
              </span>
            </ToggleBtn>
          </div>
          <div style={{
            visibility: billing === "anual" ? "visible" : "hidden",
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(76,165,72,.10)", border: "1px solid rgba(76,165,72,.30)",
            borderRadius: "var(--r-pill)", padding: "5px 14px",
            fontSize: 12, fontWeight: 700, color: "#4CA548",
          }}>
            <Icon name="gift" size={13} stroke={2} />
            2 meses gratis al pagar anual
          </div>
        </div>

        {/* Segment selector — pills on desktop, dropdown on mobile */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginBottom: 32, padding: isMobile ? "0 24px" : 0 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--resi-fg-3)" }}>
            ¿Cuántos apartamentos tiene tu edificio?
          </div>
          {isMobile ? (
            <div style={{ position: "relative", width: "100%", maxWidth: 320 }}>
              <select value={segIdx} onChange={(e) => setSegIdx(Number(e.target.value))} style={{
                width: "100%", minHeight: 44, appearance: "none", WebkitAppearance: "none",
                background: "var(--resi-bg-soft)", border: "1px solid var(--resi-line)",
                borderRadius: "var(--r-md)", padding: "0 40px 0 16px", cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "var(--resi-navy)",
                boxShadow: "var(--shadow-xs)",
              }}>
                {SEG_OPTIONS.map((o) => (
                  <option key={o.idx} value={o.idx}>{o.l}</option>
                ))}
              </select>
              <span style={{
                position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                pointerEvents: "none", color: "var(--resi-fg-3)", display: "inline-flex",
              }}><Icon name="chevron-down" size={18} /></span>
            </div>
          ) : (
            <div style={{
              display: "flex", gap: 4, padding: 4,
              background: "var(--resi-bg-soft)", borderRadius: "var(--r-pill)",
              border: "1px solid var(--resi-line)", boxShadow: "var(--shadow-xs)",
            }}>
              {SEG_OPTIONS.map((o) => (
                <SegBtn key={o.idx} active={segIdx === o.idx} onClick={() => setSegIdx(o.idx)}>{o.l}</SegBtn>
              ))}
            </div>
          )}
        </div>

        {/* Plan cards — 3-up grid on desktop, swipeable carousel on mobile */}
        {isMobile ? (
          <PlansCarousel featuredIndex={2}>
            <PlanCard planKey="base" segIdx={segIdx} billing={billing} />
            <PlanCard planKey="plus" segIdx={segIdx} billing={billing} />
            <PlanCard planKey="pro" segIdx={segIdx} billing={billing} />
          </PlansCarousel>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, alignItems: "start" }}>
            <PlanCard planKey="base" segIdx={segIdx} billing={billing} />
            <PlanCard planKey="plus" segIdx={segIdx} billing={billing} />
            <PlanCard planKey="pro" segIdx={segIdx} billing={billing} />
          </div>
        )}

        {/* Footnotes */}
        <div style={{
          marginTop: 18, padding: "16px 20px",
          background: "var(--resi-bg-soft)", borderRadius: "var(--r-md)",
          border: "1px solid var(--resi-line)",
          marginLeft: isMobile ? 24 : 0, marginRight: isMobile ? 24 : 0,
        }}>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: "var(--resi-fg-3)", fontStyle: "italic" }}>
            * El costo de instalación aplica por cuarto de residuos intervenido. Edificios con múltiples torres o cuartos independientes, consulta condiciones.
          </p>
          <p style={{ margin: "4px 0 0", fontSize: 12, lineHeight: 1.6, color: "var(--resi-fg-3)", fontStyle: "italic" }}>
            * Edificios con dos cuartos separados (reciclables / no reciclables) mantienen el mismo costo de instalación.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Toggle / segment buttons ------------------------------------
const ToggleBtn = ({ active, onClick, children }) => {
  const isMobile = useIsMobile();
  return (
  <button onClick={onClick} style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
    padding: isMobile ? "0 26px" : "8px 22px", minHeight: isMobile ? 44 : 0,
    borderRadius: "var(--r-pill)", border: "none", cursor: "pointer",
    fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700,
    background: active ? "var(--resi-navy)" : "transparent",
    color: active ? "#fff" : "var(--resi-fg-3)",
    boxShadow: active ? "var(--shadow-xs)" : "none",
    transition: "all var(--dur-fast) var(--ease-out)",
  }}>{children}</button>
  );
};

const SegBtn = ({ active, onClick, children }) => (
  <button onClick={onClick} style={{
    padding: "7px 16px", borderRadius: "var(--r-pill)", border: "none", cursor: "pointer",
    fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
    background: active ? "var(--resi-navy)" : "transparent",
    color: active ? "#fff" : "var(--resi-fg-3)",
    boxShadow: active ? "var(--shadow-xs)" : "none",
    transition: "all var(--dur-fast) var(--ease-out)",
  }}>{children}</button>
);

// --- Plan card ----------------------------------------------------
const PlanCard = ({ planKey, segIdx, billing }) => {
  const meta = PLAN_META[planKey];
  const v = planValues(segIdx, planKey, billing);
  const featured = !!meta.featured;
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const isMobile = useIsMobile();
  const px = isMobile ? 18 : 22;

  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", background: "#fff", overflow: "hidden",
        display: "flex", flexDirection: "column",
        height: isMobile ? "100%" : undefined,
        borderRadius: "var(--r-lg)",
        border: featured ? "1.5px solid #4CA548" : "1px solid var(--resi-line)",
        boxShadow: featured
          ? "0 8px 28px rgba(76,165,72,.14)"
          : (hover ? "var(--shadow-md)" : "var(--shadow-sm)"),
        transition: "box-shadow var(--dur-base) var(--ease-out)",
      }}>

      {featured && (
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          background: "#4CA548", color: "#fff",
          fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase",
          padding: "5px 16px", borderRadius: "0 0 10px 10px", whiteSpace: "nowrap",
        }}>MÁS POPULAR</div>
      )}

      {/* Header */}
      <div style={{ padding: featured ? `${isMobile ? 26 : 30}px ${px}px 14px` : `${isMobile ? 18 : 22}px ${px}px 14px` }}>
        <div style={{
          fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase",
          color: "var(--resi-fg-3)", marginBottom: 6,
        }}>{v.range}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <img src={asset("assets/logos/resiClub.png")} alt="resiCLUB"
               style={{ height: 40, width: "auto", display: "block", flexShrink: 0 }} />
          <span style={{
            fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700,
            letterSpacing: "-.01em", color: meta.color,
          }}>{meta.name}</span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700,
            letterSpacing: "-.02em", lineHeight: 1, color: "var(--resi-navy)",
          }}>{v.price}</span>
          <span style={{ fontSize: 12, color: "var(--resi-fg-3)" }}>{v.unit}</span>
        </div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 10,
          background: "var(--resi-bg-soft)", border: "1px solid var(--resi-line)",
          borderRadius: "var(--r-pill)", padding: "4px 11px",
        }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: "var(--resi-navy)" }}>{v.ph}</span>
          <span style={{ fontSize: 11, color: "var(--resi-fg-3)" }}>por hogar al mes</span>
        </div>

        <div style={{ fontSize: 11, color: "var(--resi-fg-3)", marginBottom: 8, lineHeight: 1.5 }}>{v.ins}</div>
        <div style={{
          fontSize: 11, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase",
          color: meta.color,
        }}>{meta.tagline}</div>
      </div>

      {/* Differentiators */}
      <div style={{ padding: `0 ${px}px 14px`, display: "flex", flexDirection: "column", gap: 8 }}>
        {meta.diffs.map((d, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, lineHeight: 1.4,
            color: d.muted ? "var(--resi-fg-disabled)" : "var(--resi-navy)",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%", flexShrink: 0, marginTop: 5,
              background: d.muted ? "var(--resi-line-strong)" : meta.color,
            }} />
            <span>{d.t}</span>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: "var(--resi-line)", margin: `0 ${px}px` }} />

      {/* Accordion */}
      <button onClick={() => setOpen((o) => !o)} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `13px ${px}px`, background: "none", border: "none", cursor: "pointer", textAlign: "left",
        fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "var(--resi-fg-3)",
      }}>
        Ver todos los beneficios
        <span style={{
          display: "inline-flex", opacity: .65,
          transition: "transform var(--dur-fast) var(--ease-out)",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}><Icon name="chevron-down" size={15} /></span>
      </button>
      {open && (
        <div style={{ padding: `0 ${px}px 14px`, display: "flex", flexDirection: "column", gap: 12 }}>
          {meta.groups.map((g, gi) => (
            <div key={gi}>
              <div style={{
                fontSize: 10, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase",
                color: "var(--resi-green)", marginBottom: 7,
              }}>{g.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {g.items.map((it, ii) => (
                  <div key={ii} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 11.5, lineHeight: 1.5, color: "var(--resi-fg-3)" }}>
                    <Icon name="check" size={12} stroke={2.6} style={{ color: "var(--resi-green)", flexShrink: 0, marginTop: 2 }} />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div style={{ padding: `14px ${px}px`, marginTop: "auto" }}>
        <Button variant={featured ? "primary" : "outline"} size="md" full>{meta.cta}</Button>
      </div>
    </div>
  );
};

window.PlansSection = PlansSection;
