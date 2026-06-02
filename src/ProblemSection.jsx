// ============================================================
// ProblemSection — admin's problem journey + consequences
// Inserted right after the Hero.
// Adapted to resi tokens.
// ============================================================
const ProblemSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="problema" style={{
      background: "var(--resi-bg-soft)",
      padding: isMobile ? "48px 24px" : "96px 32px"
    }}>
    <div style={{ maxWidth: 1040, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 56 }}>
        <Eyebrow dot>El problema</Eyebrow>
        <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(32px, 4vw, 48px)", letterSpacing: "-.015em",
            margin: "12px 0 14px", lineHeight: 1.1, color: "rgb(76, 183, 72)"
          }}>
          Tu comunidad separa, <span style={{ color: "rgb(7, 7, 78)" }}>¿y en el shut se mezclan?</span>
        </h2>
      </div>

      {/* Journey */}
      <JourneyStrip />

      {/* Consequences */}
      <div style={{
          display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 12 : 16,
          marginTop: isMobile ? 28 : 48
        }}>
        {[
          { icon: "receipt-text", tone: "danger", title: "Costos que no ves",
            copy: "Limpieza extra, ductos y cañerías obstruidas, y contingencias de recolección suman a la cuota — en silencio." },
          { icon: "chart-bar-decreasing", tone: "warn", title: "Sin datos para ahorrar",
            copy: "Sin trazabilidad no puedes reducir la tarifa de aseo ni demostrar gestión a la asamblea." },
          { icon: "message-square-x", tone: "pink", title: "Conflictos en tu escritorio",
            copy: "La mala disposición genera roces entre vecinos — y siempre los resuelves tú." }].
          map((c, i) =>
          <ConsequenceCard key={i} {...c} />
          )}
      </div>
    </div>
  </section>);
};


const JourneyStrip = () => {
  const isMobile = useIsMobile();
  const scrollRef = React.useRef(null);
  const [frac, setFrac] = React.useState(0);
  const [vis, setVis] = React.useState(1);
  const onScroll = () => {
    const el = scrollRef.current;if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setFrac(max > 0 ? el.scrollLeft / max : 0);
    setVis(el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1);
  };
  React.useEffect(() => {onScroll();}, [isMobile]);
  const steps = [
  { icon: "home", label: "Separan\nen casa", bad: false },
  { icon: "trash-2", label: "Sacan\nal shut", bad: false },
  { icon: "circle-x", label: "Todo\nse mezcla", bad: true },
  { icon: "frown", label: "Se frustran\ny desisten", bad: true },
  { icon: "trending-down", label: "Menos reciclan,\nmás pagas", bad: true }];

  return (
    <div style={{
      background: "#fff", borderRadius: "var(--r-2xl)",
      padding: isMobile ? "24px 0 18px" : "40px 32px",
      boxShadow: "var(--shadow-sm)"
    }}>
      <div ref={scrollRef} onScroll={onScroll} className="no-scrollbar" style={{
        display: "flex", alignItems: "flex-start", gap: 0,
        overflowX: isMobile ? "auto" : "visible",
        padding: isMobile ? "0 20px" : 0,
        scrollSnapType: isMobile ? "x proximity" : "none"
      }}>
        {steps.map((s, i) =>
        <React.Fragment key={i}>
            <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 10, flex: "0 0 auto", minWidth: isMobile ? 150 : 100,
            scrollSnapAlign: isMobile ? "center" : "none"
          }}>
              <div style={{
              width: 60, height: 60, borderRadius: "50%",
              border: `2px solid ${s.bad ? "#C8200E" : "var(--resi-line-strong)"}`,
              background: s.bad ? "rgba(200,32,14,.06)" : "#fff",
              color: s.bad ? "#C8200E" : "var(--resi-navy)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 1
            }}>
                <Icon name={s.icon} size={26} />
              </div>
              <div style={{
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
              color: s.bad ? "#7E1A0A" : "var(--resi-fg-2)",
              textAlign: "center", lineHeight: 1.35,
              whiteSpace: "pre-line"
            }}>{s.label}</div>
            </div>
            {i < steps.length - 1 &&
          <div style={{
            flex: isMobile ? "0 0 28px" : 1, height: 3, borderRadius: 999,
            background: s.bad || steps[i + 1].bad ? "#C8200E" : "var(--resi-line-strong)",
            marginTop: 28, minWidth: isMobile ? 28 : 24
          }} />
          }
          </React.Fragment>
        )}
      </div>
      {isMobile &&
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div style={{ position: "relative", width: 120, height: 4, borderRadius: 999, background: "var(--resi-line)" }}>
          <div style={{
            position: "absolute", top: 0, height: 4, borderRadius: 999, background: "var(--resi-green)",
            width: `${Math.max(vis * 100, 20)}%`,
            left: `${frac * (100 - Math.max(vis * 100, 20))}%`,
            transition: "left .08s linear"
          }} />
        </div>
      </div>}
    </div>);

};

const ConsequenceCard = ({ icon, tone, title, copy }) => {
  const isMobile = useIsMobile();
  const tones = {
    danger: { bg: "rgba(200,32,14,.08)", fg: "#C8200E" },
    warn: { bg: "rgba(241,93,42,.12)", fg: "#7A1502" },
    pink: { bg: "rgba(204,108,162,.16)", fg: "#4C0049" }
  }[tone];
  return (
    <div style={{
      background: "#fff", borderRadius: "var(--r-lg)",
      padding: isMobile ? 18 : 24, display: "flex", flexDirection: "column", gap: isMobile ? 8 : 12,
      boxShadow: "var(--shadow-xs)"
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: "var(--r-md)",
        background: tones.bg, color: tones.fg,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <Icon name={icon} size={22} />
      </div>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        color: "var(--resi-navy)", fontSize: "20px"
      }}>{title}</div>
      <div style={{
        fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "rgba(58, 61, 99, 0.6)"

      }}>{copy}</div>
    </div>);

};

window.ProblemSection = ProblemSection;