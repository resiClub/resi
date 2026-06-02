// ============================================================
// HogaresProblem — residents' problem journey + stat cards.
// Same structure/components as ProblemSection (admin), residents copy.
// ============================================================
const HogaresProblem = () => {
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
            margin: "12px 0 14px", color: "var(--resi-navy)", lineHeight: 1.1
          }}>
          <span style={{ color: "var(--resi-green)" }}>Los separaste en casa</span>, ¿y se mezclaron en el shut?
        </h2>
      </div>

      {/* Journey — hidden on mobile */}
      {!isMobile && <HogaresJourneyStrip />}

      {/* Stats */}
      <div style={{
          display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 12 : 16,
          marginTop: isMobile ? 28 : 48
        }}>
        {[
          { icon: "recycle", tone: "warn", metric: "+98% podrían aprovecharse",
            copy: "~48% son reciclables, ~50% compostables." },
          { icon: "truck", tone: "danger", metric: "+80% no se reciclan",
            copy: "Aunque los hayas separado desde casa." },
          { icon: "lock-open", tone: "pink", metric: "+70k recicladores vulnerables",
            copy: "Que separan en shuts sin ninguna protección." }].
          map((c, i) =>
          <HogaresStatCard key={i} {...c} />
          )}
      </div>
    </div>
  </section>);
};


const HogaresJourneyStrip = () => {
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
  { icon: "home", label: "Separas\nen casa", bad: false },
  { icon: "trash-2", label: "Llevas\nal shut", bad: false },
  { icon: "circle-x", label: "Todo\nse mezcla", bad: true },
  { icon: "frown", label: "Te frustras\ny desistes", bad: true },
  { icon: "trending-down", label: "Menos reciclas,\nmás pagas", bad: true }];

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

const HogaresStatCard = ({ icon, tone, metric, copy }) => {
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
        lineHeight: 1, color: "var(--resi-navy)", fontSize: "20px"
      }}>{metric}</div>
      <div style={{
        fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "rgba(58, 61, 99, 0.6)"

      }}>{copy}</div>
    </div>);

};

window.HogaresProblem = HogaresProblem;