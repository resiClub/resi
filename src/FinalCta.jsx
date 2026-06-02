// ============================================================
// FinalCta — closing banner, green panel
// ============================================================
const FinalCta = ({ ctaCopy = "Quiero resi en mi edificio" }) => (
  <section style={{ padding: "32px 32px 96px" }}>
    <div style={{
      maxWidth: 1200, margin: "0 auto",
      background: "var(--resi-green)",
      borderRadius: "var(--r-2xl)",
      padding: "64px",
      display: "grid", gridTemplateColumns: "1.4fr 1fr",
      gap: 40, alignItems: "center",
      color: "#fff", position: "relative", overflow: "hidden",
    }}>
      {/* deco */}
      <svg style={{ position: "absolute", right: -60, bottom: -60, opacity: 0.18 }}
           width="320" height="320" viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="150" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="6 6" />
        <circle cx="160" cy="160" r="100" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="160" cy="160" r="50" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>

      <div style={{ position: "relative" }}>
        <Eyebrow color="rgba(255,255,255,.9)">Hagamos que el esfuerzo cuente</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05,
          margin: "12px 0 16px", letterSpacing: "-.015em", textWrap: "balance",
        }}>
          Tu edificio ya quiere reciclar.<br/>
          Sólo falta el sistema que lo cuide.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: 0,
                    color: "rgba(255,255,255,.92)", maxWidth: 520 }}>
          Agenda un diagnóstico gratuito con uno de nuestros asesores.
          Te respondemos en menos de 48 horas con un plan a la medida de tu copropiedad.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
        <Button variant="onDark" size="lg" iconRight="arrow-right" full>
          {ctaCopy}
        </Button>
        <Button variant="ghost" size="lg" full
                style={{ color: "#fff", boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.45)" }}>
          Hablar con un asesor
        </Button>
        <div style={{
          marginTop: 6, fontSize: 12, color: "rgba(255,255,255,.78)",
          display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
        }}>
          <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
            <Icon name="phone" size={14} /> (601) 555 0234
          </span>
          <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
            <Icon name="mail" size={14} /> admin@resi.com.co
          </span>
        </div>
      </div>
    </div>
  </section>
);

window.FinalCta = FinalCta;
