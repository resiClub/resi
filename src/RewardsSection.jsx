// ============================================================
// RewardsSection — full-bleed navy panel
// "Sistema de recompensas que motiva a tu comunidad"
// ============================================================
const RewardsSection = ({ showBg = true }) =>
<section style={{
  background: showBg ? "var(--resi-navy)" : "transparent",
  color: showBg ? "#fff" : "var(--resi-navy)",
  padding: "112px 32px",
  position: "relative", overflow: "hidden"
}}>
    {/* Decorative confetti dots */}
    {showBg &&
  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}>
        <defs>
          <pattern id="r-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="rgba(255,255,255,.7)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#r-dots)" />
      </svg>
  }

    <div style={{
    maxWidth: 980, margin: "0 auto", textAlign: "center",
    display: "flex", flexDirection: "column", gap: 24, alignItems: "center",
    position: "relative"
  }}>
      <h2 style={{
      fontFamily: "var(--font-display)", fontWeight: 700,
      fontSize: "clamp(34px, 4.6vw, 56px)", letterSpacing: "-.02em",
      margin: 0, lineHeight: 1.05, color: "inherit", textWrap: "balance"
    }}>
        Un sistema de recompensas<br />
        <span style={{ color: showBg ? "var(--resi-green)" : "var(--resi-green)" }}>que motiva a tu comunidad.</span>
      </h2>
      <p style={{
      fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
      margin: 0, color: showBg ? "rgba(255,255,255,.78)" : "var(--resi-fg-2)",
      maxWidth: 640
    }}>
        Cada mes mostramos a tu comunidad cuánto está reciclando con resi y le entregamos
        resiDUOS — nuestra moneda — para canjear en comercios aliados. El reciclaje deja de
        ser un deber y se vuelve algo que la gente quiere repetir.
    </p>

      {/* Coin row */}
      <div style={{
      display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
      marginTop: 8
    }}>
        {[
      { v: "+1.240 Kg", l: "residuos reciclados / mes", c: "var(--resi-green)" },
      { v: "73%", l: "hogares activos al mes 3", c: "var(--resi-blue)" },
      { v: "21%", l: "tasa de reciclaje", c: "var(--resi-orange)" }].
      map((s, i) =>
      <div key={i} style={{
        background: showBg ? "rgba(255,255,255,.06)" : "var(--resi-bg-soft)",
        border: showBg ? "1px solid rgba(255,255,255,.12)" : "1px solid var(--resi-line)",
        borderRadius: "var(--r-lg)", padding: "20px 28px",
        display: "flex", alignItems: "center", gap: 14, minWidth: 220
      }}>
            <Coin color={s.c} />
            <div style={{ textAlign: "left" }}>
              <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28,
            color: "inherit", lineHeight: 1
          }}>{s.v}</div>
              <div style={{ fontSize: 13, color: showBg ? "rgba(255,255,255,.7)" : "var(--resi-fg-3)", marginTop: 4 }}>{s.l}</div>
            </div>
          </div>
      )}
      </div>

      {/* Down arrow */}
      <div style={{
      marginTop: 16,
      width: 44, height: 44, borderRadius: 999,
      background: showBg ? "rgba(255,255,255,.08)" : "var(--resi-bg-soft)",
      border: showBg ? "1px solid rgba(255,255,255,.18)" : "1px solid var(--resi-line)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "inherit"
    }}>
        <Icon name="chevron-down" size={22} />
      </div>
    </div>
  </section>;


const Coin = ({ color }) =>
<div style={{
  width: 44, height: 44, borderRadius: 999,
  background: color, color: "#fff",
  display: "flex", alignItems: "center", justifyContent: "center",
  boxShadow: `0 4px 14px ${color}66`,
  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
  border: "3px solid rgba(255,255,255,.4)"
}}>$</div>;


window.RewardsSection = RewardsSection;