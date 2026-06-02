// ============================================================
// SolutionIntro — "Optimiza el reciclaje y crece tu impacto"
// + process indicator strip (4 dots) below
// ============================================================
const SolutionIntro = () => (
  <section style={{ padding: "16px 32px 96px" }}>
    <div style={{
      maxWidth: 1200, margin: "0 auto",
      background: "var(--resi-bg-soft)",
      borderRadius: "var(--r-2xl)",
      padding: "64px",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: 56, alignItems: "center",
    }}>
      {/* LEFT */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <Eyebrow>La solución</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(30px, 3.4vw, 42px)", letterSpacing: "-.015em",
          margin: 0, color: "var(--resi-navy)", lineHeight: 1.1, textWrap: "balance",
        }}>
          Optimiza el reciclaje<br/>
          <span style={{ color: "var(--resi-green)" }}>y crece tu impacto.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6,
          color: "var(--resi-fg-2)", margin: 0, maxWidth: 480,
        }}>
          Instalamos en tu edificio un punto limpio donde la separación de cada hogar se mantiene
          hasta el reciclador. Tú recibes reportes mensuales y tu comunidad ve, en vivo, cuánto
          está cuidando.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 6, flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" iconRight="arrow-right"
                  onClick={() => document.getElementById("como-funciona")?.scrollIntoView({behavior:'smooth'})}>
            Reservar instalación
          </Button>
          <Button variant="outline" size="lg" iconLeft="play"
                  onClick={() => document.getElementById("como-funciona")?.scrollIntoView({behavior:'smooth'})}>
            Ver video de 60s
          </Button>
        </div>

        {/* Process strip */}
        <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 0 }}>
          {[
            { c: "var(--resi-blue)",   l: "Separan" },
            { c: "var(--resi-orange)", l: "Bajan" },
            { c: "var(--resi-pink)",   l: "Esperan" },
            { c: "var(--resi-green)",  l: "Aprovechan" },
          ].map((s, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 999, background: s.c,
                  boxShadow: `0 0 0 4px rgba(255,255,255,1), 0 0 0 6px ${s.c}33`,
                }} />
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--resi-fg-2)",
                              letterSpacing: ".08em", textTransform: "uppercase" }}>{s.l}</div>
              </div>
              {i < arr.length - 1 && (
                <div style={{ flex: 1, height: 2, background: "var(--resi-line)", marginTop: -22, marginInline: 4 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* RIGHT — clean room photo */}
      <CleanRoomVisual />
    </div>
  </section>
);

const CleanRoomVisual = () => (
  <div style={{ position: "relative" }}>
    <div style={{
      aspectRatio: "4/3", borderRadius: "var(--r-2xl)", overflow: "hidden",
      background: "linear-gradient(180deg, #F4F0E8 0%, #E9E2D3 60%, #DDD4BF 100%)",
      position: "relative", boxShadow: "var(--shadow-md)",
    }}>
      <svg viewBox="0 0 480 360" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {/* floor */}
        <rect x="0" y="240" width="480" height="120" fill="rgba(7,7,78,.04)" />
        <line x1="0" y1="240" x2="480" y2="240" stroke="rgba(7,7,78,.1)" />
        {/* wall accent */}
        <rect x="40" y="40" width="180" height="180" rx="6" fill="rgba(255,255,255,.55)" />
        <text x="130" y="135" textAnchor="middle" fontFamily="Quicksand" fontWeight="700" fontSize="48" fill="var(--resi-navy)" letterSpacing="-2">resi</text>
        <text x="130" y="160" textAnchor="middle" fontFamily="Nunito" fontWeight="600" fontSize="11" fill="var(--resi-fg-3)" letterSpacing="3">PUNTO LIMPIO</text>

        {/* four resiBOTE bins */}
        {[
          { x: 260, c: "var(--resi-blue)" },
          { x: 310, c: "var(--resi-orange)" },
          { x: 360, c: "var(--resi-pink)" },
          { x: 410, c: "var(--resi-green)" },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x} 130)`}>
            <rect x="-20" y="0" width="40" height="110" rx="10" fill="#fff" stroke="rgba(7,7,78,.15)" />
            <rect x="-20" y="0" width="40" height="14" rx="6" fill={b.c} />
            <rect x="-12" y="36" width="24" height="32" rx="3" fill="rgba(7,7,78,.04)" />
            <circle cx="0" cy="90" r="3" fill={b.c} />
          </g>
        ))}

        {/* shelf above */}
        <line x1="240" y1="120" x2="450" y2="120" stroke="rgba(7,7,78,.15)" />
      </svg>

      {/* Stat overlay */}
      <div style={{
        position: "absolute", left: 18, bottom: 18,
        background: "rgba(255,255,255,.95)", borderRadius: "var(--r-md)",
        padding: "10px 14px", display: "flex", gap: 10, alignItems: "center",
        boxShadow: "var(--shadow-sm)",
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8, background: "var(--resi-green)",
          color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        }}><Icon name="sparkles" size={18} /></div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--resi-navy)" }}>Espacio limpio</div>
          <div style={{ fontSize: 11, color: "var(--resi-fg-3)" }}>Sin olores, sin plagas</div>
        </div>
      </div>
    </div>
  </div>
);

window.SolutionIntro = SolutionIntro;
