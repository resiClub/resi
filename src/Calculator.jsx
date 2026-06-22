// ============================================================
// Calculator — interactive ahorro estimator (placed after Plans)
// Logic mirrors the attached calculadora_impacto_resi_v3.html
// ============================================================
const ESTRATO_DATA = {
  3: { kg: 40, reciclables: 20, costo: 12000 },
  4: { kg: 45, reciclables: 22, costo: 16000 },
  56: { kg: 50, reciclables: 25, costo: 20000 }
};

const fmtCO = (n) => "$" + Math.round(n).toLocaleString("es-CO");

const Calculator = () => {
  const [estrato, setEstrato] = React.useState(56);
  const [hogares, setHogares] = React.useState(60);
  const [tasa, setTasa] = React.useState(35);
  const [openInsights, setOpenInsights] = React.useState(false);
  const isMobile = useIsMobile();

  const d = ESTRATO_DATA[estrato];
  const kgReciclablesTotal = d.reciclables * hogares;
  const kgReciclados = Math.round(kgReciclablesTotal * tasa / 100);
  const facturaTotal = d.costo * hogares;
  const ahorroMes = Math.round(facturaTotal * tasa / 100);
  const ahorroMaxHogar = d.costo * 0.5;
  // Precio suscripción plan Base según rango de apartamentos (= hogares)
  const precioBase = hogares <= 30 ? 54900 : hogares <= 60 ? 64900 : hogares <= 120 ? 74900 : 84900;
  // Ahorro neto anual = (ahorro mensual en aseo − inversión mensual en resi) × 12
  const ahorroAnual = (ahorroMes - precioBase) * 12;

  return (
    <section id="calculadora" style={{
      background: "var(--resi-bg-soft)",
      padding: isMobile ? "56px 24px" : "96px 32px"
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
          <Eyebrow dot>Calculadora</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(30px, 4vw, 46px)", letterSpacing: "-.015em",
            margin: "12px 0 14px", color: "var(--resi-navy)", lineHeight: 1.1
          }}>
            ¿Cuánto <span style={{ color: "var(--resi-green)" }}>ahorraría</span> tu edificio?
          </h2>
        </div>

        <div style={{
          background: "#fff", borderRadius: "var(--r-2xl)",
          padding: isMobile ? 22 : 40,
          boxShadow: "var(--shadow-sm)"
        }}>
          {/* Inputs */}
          <div style={{
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
            gap: isMobile ? 22 : 40, marginBottom: 28
          }}>
            <div>
              <SectionLabel>Estrato del edificio</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {[
                { v: 56, l: "5 – 6" },
                { v: 4, l: "4" },
                { v: 3, l: "3" }].
                map((o) =>
                <button key={o.v} onClick={() => setEstrato(o.v)}
                style={{
                  padding: "14px 0",
                  borderRadius: "var(--r-md)",
                  border: estrato === o.v ? "2px solid var(--resi-green)" : "1px solid var(--resi-line)",
                  background: estrato === o.v ? "rgba(76,183,72,.10)" : "#fff",
                  color: estrato === o.v ? "var(--resi-green-dark)" : "var(--resi-fg-2)",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                  cursor: "pointer", transition: "all var(--dur-fast) var(--ease-out)"
                }}>{o.l}</button>
                )}
              </div>
            </div>
            <div>
              <SectionLabel>Número de hogares en tu edificio</SectionLabel>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <input type="range" min="10" max="180" step="10" value={hogares}
                onChange={(e) => setHogares(parseInt(e.target.value))}
                style={{ flex: 1 }} />
                <div style={{
                  minWidth: 80, padding: "8px 14px", borderRadius: "var(--r-md)",
                  background: "var(--resi-bg-soft)", textAlign: "right",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--resi-navy)"
                }}>{hogares}</div>
              </div>
              <div style={{ fontSize: 12, color: "var(--resi-fg-3)", marginTop: 6 }}>hogares</div>
            </div>
          </div>

          {/* Per-household stats */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <SectionLabel style={{ margin: 0 }}>Por hogar en tu edificio</SectionLabel>
              <span style={{
                background: "rgba(76,183,72,.14)", color: "var(--resi-green-dark)",
                padding: "3px 10px", borderRadius: "var(--r-pill)",
                fontSize: 11, fontWeight: 700
              }}>Verifica en tu factura</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 10 }}>
              <Stat icon="trash-2" value={d.kg + " kg"} label={["residuos", "al mes"]} />
              <Stat icon="recycle" value={d.reciclables + " kg"} label={["son", "reciclables"]} color="var(--resi-green)" />
              <Stat icon="receipt" value={fmtCO(d.costo)} label={["paga por", "manejo de residuos"]} />
              <Stat icon="trending-down" value={fmtCO(ahorroMaxHogar)} label={["ahorro", "máximo posible"]} highlight />
            </div>
          </div>

          {/* Tasa slider */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <SectionLabel style={{ margin: 0 }}>Tasa de reciclaje del edificio</SectionLabel>
              <span style={{ fontSize: 13, color: "var(--resi-fg-3)" }}>Mueve para explorar el potencial</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <input type="range" min="0" max="50" step="5" value={tasa}
              onChange={(e) => setTasa(parseInt(e.target.value))}
              style={{ flex: 1 }} />
              <div style={{
                minWidth: 80, padding: "8px 14px", borderRadius: "var(--r-md)",
                background: "var(--resi-bg-soft)", textAlign: "right",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--resi-navy)"
              }}>{tasa}%</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              <span style={{ fontSize: 11, color: "var(--resi-fg-3)" }}>0% — sin reciclaje</span>
              <span style={{ fontSize: 11, color: "var(--resi-green-dark)", fontWeight: 700 }}>50% — máximo potencial</span>
            </div>
          </div>

          {/* Result card */}
          <div style={{
            background: "linear-gradient(135deg, rgba(76,183,72,.12) 0%, rgba(76,183,72,.06) 100%)",
            border: "1px solid rgba(76,183,72,.35)",
            borderRadius: "var(--r-lg)", padding: isMobile ? 20 : 28,
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 18 : 24, alignItems: "center"
          }}>
            <div>
              <div style={{ fontSize: 13, color: "var(--resi-green-dark)", fontWeight: 700, marginBottom: 6 }}>Ahorro mensual en aseo

              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: isMobile ? 40 : 52,
                color: "var(--resi-green-dark)", lineHeight: 1, letterSpacing: "-.02em"
              }}>{fmtCO(ahorroMes)}</div>
              <div style={{ fontSize: 14, color: "var(--resi-green-dark)", marginTop: 8 }}>
                {tasa}% de descuento sobre manejo de residuos
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7, marginTop: 14,
                background: "rgba(7,7,78,.05)", border: "1px solid var(--resi-line)",
                color: "var(--resi-fg-2)", padding: "6px 12px", borderRadius: "var(--r-pill)",
                fontSize: 12.5, fontWeight: 600
              }}>
                <Icon name="wallet" size={14} style={{ color: "var(--resi-fg-3)" }} />
                Inversión en resi: <strong style={{ fontWeight: 800, color: "var(--resi-navy)" }}>{fmtCO(precioBase)}/mes</strong>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: isMobile ? "flex-start" : "flex-end" }}>
              <div style={{ textAlign: isMobile ? "left" : "right" }}>
                <div style={{ fontSize: 13, color: "var(--resi-green-dark)", fontWeight: 700 }}>Ahorro neto anual</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28,
                  color: "var(--resi-green-dark)", lineHeight: 1.1
                }}>{fmtCO(ahorroAnual)}</div>
              </div>
              <div style={{
                background: "var(--resi-green)", color: "#fff",
                padding: "10px 16px", borderRadius: "var(--r-md)",
                display: "flex", alignItems: "center", gap: 10
              }}>
                <Icon name="recycle" size={20} />
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", opacity: 0.85 }}>Reciclados con resi</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, lineHeight: 1 }}>
                    {kgReciclados.toLocaleString("es-CO")} kg/mes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "var(--resi-line)", margin: "32px 0" }} />

          {/* Insights — collapsed accordion by default */}
          <button onClick={() => setOpenInsights((o) => !o)} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 12, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--resi-navy)"
          }}>
            ¿Cómo resi hace posible este ahorro?
            <span style={{
              display: "inline-flex", flexShrink: 0, opacity: 0.6,
              transition: "transform var(--dur-base) var(--ease-out)",
              transform: openInsights ? "rotate(180deg)" : "rotate(0deg)"
            }}><Icon name="chevron-down" size={20} /></span>
          </button>
          <div style={{
            overflow: "hidden",
            maxHeight: openInsights ? 700 : 0,
            opacity: openInsights ? 1 : 0,
            transition: "max-height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-out)"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 18 }}>
              {[
              { i: "chart-line", c: "green",
                t: "resi mide tu tasa de reciclaje mes a mes",
                d: "Sin datos no puedes demostrar ante la empresa de aseo que tu edificio recicla. resi genera los reportes auditables que necesitas para aplicar a la tarifa multiusuario." },
              { i: "users-round", c: "orange",
                t: "A mayor participación, mayor ahorro",
                d: "El descuento máximo (50%) se alcanza cuando todos los hogares reciclan con resi. Mueve el slider para ver cómo crece el ahorro con cada nuevo hogar que se une." },
              { i: "receipt", c: "blue",
                t: "El ahorro se aplica en la tarifa de aseo",
                d: "En Colombia, las copropiedades que formalizan el reciclaje pueden acceder a la tarifa multiusuario y reducir el componente de manejo de residuos hasta en un 50%." }].
              map((row, i) => <InsightRow key={i} {...row} />)}
            </div>
          </div>

          <p style={{ fontSize: 11, color: "var(--resi-fg-3)", margin: "20px 0 0", lineHeight: 1.5 }}>
            * Valores calculados según promedios de generación de residuos por estrato en Colombia. El ahorro real depende de la tasa de reciclaje efectiva del edificio y de la normativa vigente de la empresa de aseo.
          </p>
        </div>
      </div>
    </section>);

};

const SectionLabel = ({ children, style = {} }) =>
<p style={{
  fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 800,
  letterSpacing: ".12em", textTransform: "uppercase",
  color: "var(--resi-fg-3)", margin: "0 0 10px", ...style
}}>{children}</p>;


const Stat = ({ icon, value, label, color, highlight }) =>
<div style={{
  background: highlight ? "rgba(76,183,72,.10)" : "var(--resi-bg-soft)",
  border: highlight ? "1px solid rgba(76,183,72,.4)" : "1px solid var(--resi-line)",
  borderRadius: "var(--r-md)", padding: "16px 12px",
  display: "flex", flexDirection: "column", alignItems: "center", gap: 6
}}>
    <Icon name={icon} size={22} style={{ color: highlight ? "var(--resi-green-dark)" : color || "var(--resi-fg-3)" }} />
    <div style={{
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20,
    color: highlight ? "var(--resi-green-dark)" : color || "var(--resi-navy)",
    lineHeight: 1
  }}>{value}</div>
    <div style={{
    fontSize: 11, color: highlight ? "var(--resi-green-dark)" : "var(--resi-fg-3)",
    textAlign: "center", lineHeight: 1.35
  }}>{label.map((l, i) => <div key={i}>{l}</div>)}</div>
  </div>;


const InsightRow = ({ i, c, t, d }) => {
  const tones = {
    green: { bg: "rgba(76,183,72,.14)", fg: "var(--resi-green-dark)" },
    orange: { bg: "rgba(241,93,42,.12)", fg: "var(--resi-orange-dark)" },
    blue: { bg: "rgba(0,156,215,.14)", fg: "var(--resi-blue-dark)" }
  }[c];
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{
        width: 40, height: 40, borderRadius: "var(--r-md)",
        background: tones.bg, color: tones.fg,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
      }}><Icon name={i} size={20} /></div>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--resi-navy)" }}>{t}</div>
        <div style={{ fontSize: 14, color: "var(--resi-fg-2)", lineHeight: 1.55, marginTop: 2 }}>{d}</div>
      </div>
    </div>);

};

window.Calculator = Calculator;