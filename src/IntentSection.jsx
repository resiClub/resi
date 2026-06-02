// ============================================================
// IntentSection — "El 80% de tu edificio intenta reciclar"
// Three value-props with check icons + lateral photo
// ============================================================
const IntentSection = () => (
  <section style={{
    maxWidth: 1200, margin: "0 auto",
    padding: "96px 32px",
  }}>
    <div style={{
      display: "grid", gridTemplateColumns: "1.05fr 1fr",
      gap: 64, alignItems: "center",
    }}>
      {/* Left — copy */}
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <Eyebrow>La oportunidad</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(30px, 3.6vw, 44px)", letterSpacing: "-.015em",
          margin: 0, color: "var(--resi-navy)", lineHeight: 1.1, textWrap: "balance",
        }}>
          El <span style={{ color: "var(--resi-green)" }}>80%</span> de los hogares
          de tu edificio intenta reciclar en algún momento.
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.55,
          color: "var(--resi-fg-2)", margin: 0, maxWidth: 520,
        }}>
          Esa voluntad ya está. Sólo falta un sistema que la canalice y la traduzca en
          ahorro, datos y orgullo de copropiedad.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { title: "Conecta con tu comunidad",
              copy: "Convierte el reciclaje en una iniciativa visible, con resultados que se cuentan en asamblea." },
            { title: "Mejora la tasa de reciclaje",
              copy: "Aprovecha hasta el 98% de los residuos que generan los hogares — 5 veces el promedio actual." },
            { title: "Te acerca a un posible descuento",
              copy: "Con datos auditados puedes aplicar a la tarifa multiusuario y reducir el cobro de aseo." },
          ].map((b, i) => (
            <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 28, height: 28, borderRadius: 999,
                background: "var(--resi-green)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: 2,
              }}>
                <Icon name="check" size={16} stroke={2.5} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700,
                              fontSize: 17, color: "var(--resi-navy)" }}>{b.title}</div>
                <div style={{ fontSize: 14, color: "var(--resi-fg-2)", lineHeight: 1.5, marginTop: 2 }}>
                  {b.copy}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right — visual: progress ring + photo */}
      <IntentVisual />
    </div>
  </section>
);

const IntentVisual = () => {
  // big animated-looking progress ring
  const pct = 80;
  const r = 110;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        aspectRatio: "1/1", borderRadius: "var(--r-2xl)",
        background: "linear-gradient(160deg, #EEF6EE 0%, #DCEEDC 100%)",
        position: "relative", overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
      }}>
        <svg viewBox="0 0 320 320" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {/* dotted bg */}
          <defs>
            <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(76,183,72,.16)" />
            </pattern>
          </defs>
          <rect width="320" height="320" fill="url(#dots)" />

          <g transform="translate(160 160)">
            <circle r={r} fill="none" stroke="rgba(7,7,78,.08)" strokeWidth="22" />
            <circle r={r} fill="none" stroke="var(--resi-green)" strokeWidth="22"
                    strokeLinecap="round"
                    strokeDasharray={c}
                    strokeDashoffset={c * (1 - pct/100)}
                    transform="rotate(-90)" />
            <text x="0" y="6" textAnchor="middle"
                  fontFamily="Quicksand" fontWeight="700" fontSize="64"
                  fill="var(--resi-navy)" letterSpacing="-2">80%</text>
            <text x="0" y="42" textAnchor="middle"
                  fontFamily="Nunito" fontWeight="600" fontSize="14"
                  fill="var(--resi-fg-2)" letterSpacing="0.5">de hogares lo intenta</text>
          </g>

          {/* small floating households */}
          {[
            { x: 40, y: 50, c: "var(--resi-green)" },
            { x: 260, y: 90, c: "var(--resi-blue)" },
            { x: 60, y: 250, c: "var(--resi-orange)" },
            { x: 270, y: 240, c: "var(--resi-pink)" },
          ].map((h, i) => (
            <g key={i} transform={`translate(${h.x} ${h.y})`}>
              <rect x="-14" y="-14" width="28" height="28" rx="8" fill="#fff" stroke="rgba(7,7,78,.1)" />
              <circle cx="0" cy="0" r="4" fill={h.c} />
            </g>
          ))}
        </svg>
      </div>

      {/* Floating card — 5× */}
      <div style={{
        position: "absolute", right: -16, bottom: 28,
        background: "#fff", borderRadius: "var(--r-lg)",
        padding: "14px 18px", boxShadow: "var(--shadow-md)",
        display: "flex", alignItems: "center", gap: 12, maxWidth: 240,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: "var(--r-md)",
          background: "var(--resi-green)", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon name="trending-up" size={22} />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700,
                        fontSize: 22, color: "var(--resi-navy)", lineHeight: 1 }}>5×</div>
          <div style={{ fontSize: 12, color: "var(--resi-fg-3)", marginTop: 2 }}>
            más reciclaje vs. la solución tradicional
          </div>
        </div>
      </div>
    </div>
  );
};

window.IntentSection = IntentSection;
