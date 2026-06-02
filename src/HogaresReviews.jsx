// ============================================================
// HogaresReviews — "Opiniones" section.
// Content/structure from the attached mockup; visuals = resi DS only.
// Desktop: left auto-advancing review carousel + right rating/recommend stats.
// Mobile (<768px): swipeable horizontal carousel (one card ~85vw, next peeking)
//   with pagination dots, full untruncated text, reduced padding; stats below.
// ============================================================
const HOGARES_REVIEWS = [
  { text: "Lo que más me gustó fue saber el nombre del reciclador. Eso cambia todo.",
    init: "AR", name: "Andrés R.", meta: "Metropolitan, Palermo", time: "8 meses con resi", color: "var(--resi-orange)" },
  { text: "Llevaba años separando y nunca sabía si servía de algo. Con resi lo veo en el reporte. Ya no tengo esa duda.",
    init: "VG", name: "Vanessa G.", meta: "CR6, Puerta del Sol", time: "5 meses con resi", color: "var(--resi-blue)" },
  { text: "En mi edificio no había cultura de reciclaje. Ahora somos 14 hogares y el punto limpio está siempre lleno.",
    init: "SN", name: "Sandra N.", meta: "Verde Niza, La Sultana", time: "11 meses con resi", color: "var(--resi-pink)" },
  { text: "Mi hijo de 12 años ya sabe qué va en cada bolsita. Lo hace solo.",
    init: "LR", name: "Lorena R.", meta: "Villa Carmenza, Manizales", time: "6 meses con resi", color: "var(--resi-green)" },
];

const Stars = ({ size = 14 }) => (
  <div style={{ display: "flex", gap: 3 }}>
    {[0, 1, 2, 3, 4].map(i => <Icon key={i} name="star" size={size} stroke={0}
      style={{ color: "var(--resi-green)", fill: "var(--resi-green)" }} />)}
  </div>
);

// Author row — shared by desktop + mobile review cards.
const ReviewAuthor = ({ r }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <div style={{
      width: 40, height: 40, borderRadius: 999, background: r.color,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 800, color: "#fff",
      flexShrink: 0,
    }}>{r.init}</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "var(--resi-navy)" }}>{r.name}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--resi-fg-2)" }}>{r.meta}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 700, color: "var(--resi-green)", marginTop: 1 }}>{r.time}</span>
    </div>
  </div>
);

// Mobile review card — full untruncated text, reduced padding (20px),
// equal height across the swipe row (stretch + author pinned to bottom).
const ReviewCardMobile = ({ r }) => (
  <div style={{
    position: "relative", overflow: "hidden", height: "100%",
    display: "flex", flexDirection: "column",
    background: "#fff", borderRadius: "var(--r-lg)", padding: 20,
    boxShadow: "var(--shadow-sm)",
  }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--resi-green)" }} />
    <Stars size={15} />
    <div style={{
      fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1,
      color: "var(--resi-green)", opacity: .25, margin: "8px 0 2px",
    }}>"</div>
    <p style={{
      fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
      fontStyle: "italic", color: "var(--resi-navy)", margin: 0,
    }}>{r.text}</p>
    <div style={{ height: 1, background: "var(--resi-line)", margin: "16px 0", marginTop: "auto" }} />
    <ReviewAuthor r={r} />
  </div>
);

// Stat cards — shared by desktop + mobile (padding parametrized so desktop
// stays pixel-identical at pad=28; mobile tightens to pad=20).
const RatingStatCard = ({ pad = 28 }) => (
  <div style={{
    background: "#fff", borderRadius: "var(--r-lg)", padding: pad,
    boxShadow: "var(--shadow-sm)", textAlign: "center",
    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
  }}>
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, lineHeight: 1, color: "var(--resi-green)" }}>4.9</div>
    <Stars size={14} />
    <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5, color: "var(--resi-fg-2)", maxWidth: 220 }}>
      valoración promedio de todos los hogares resi
    </div>
  </div>
);

const RecommendStatCard = ({ pad = 28 }) => (
  <div style={{ background: "#fff", borderRadius: "var(--r-lg)", padding: pad, boxShadow: "var(--shadow-sm)" }}>
    <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--resi-fg-2)", marginBottom: 12 }}>
      Hogares que recomendarían resi
    </div>
    <div style={{ height: 6, borderRadius: 999, background: "var(--resi-bg-soft)", overflow: "hidden" }}>
      <div style={{ height: "100%", width: "96%", borderRadius: 999, background: "var(--resi-green)" }} />
    </div>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--resi-green)", marginTop: 10 }}>96%</div>
  </div>
);

const HogaresReviews = () => {
  const isMobile = useIsMobile();
  const [idx, setIdx] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const n = HOGARES_REVIEWS.length;

  const go = (i) => { setIdx((i + n) % n); setProgress(0); };

  // Auto-advance only powers the desktop single-card carousel.
  React.useEffect(() => {
    if (isMobile) return;
    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { setIdx(i => (i + 1) % n); return 0; }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(t);
  }, [idx, isMobile]);

  const r = HOGARES_REVIEWS[idx];

  return (
    <section id="opiniones" style={{ background: "var(--resi-bg)", padding: isMobile ? "56px 0" : "96px 32px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 28 : 48, padding: isMobile ? "0 24px" : 0 }}>
          <Eyebrow dot>Opiniones</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(32px, 4vw, 48px)",
            letterSpacing: "-.015em",
            margin: "12px 0 0", color: "var(--resi-navy)", lineHeight: 1.1, textWrap: "balance",
          }}>
            Ahora, separar <span style={{ color: "var(--resi-green)" }}>tiene sentido</span>
          </h2>
        </div>

        {isMobile ? (
          /* MOBILE — swipeable review carousel + stats below */
          <div>
            <PlansCarousel featuredIndex={0}>
              {HOGARES_REVIEWS.map((rv, i) => <ReviewCardMobile key={i} r={rv} />)}
            </PlansCarousel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 24, padding: "0 24px" }}>
              <RatingStatCard pad={20} />
              <RecommendStatCard pad={20} />
            </div>
          </div>
        ) : (
          /* DESKTOP — unchanged two-column layout */
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
            {/* LEFT — review carousel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{
                position: "relative", overflow: "hidden",
                background: "#fff", borderRadius: "var(--r-lg)", padding: 28,
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 4,
                  background: "var(--resi-green)",
                }} />
                <Stars size={15} />
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1,
                  color: "var(--resi-green)", opacity: .25, margin: "10px 0 6px",
                }}>"</div>
                {/* Fixed-height text zone (max 3 lines) */}
                <div style={{ height: 78, overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.65,
                    fontStyle: "italic", color: "var(--resi-navy)", margin: 0,
                    display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>{r.text}</p>
                </div>
                <div style={{ height: 1, background: "var(--resi-line)", margin: "18px 0" }} />
                <ReviewAuthor r={r} />
              </div>

              {/* Progress + controls */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ height: 3, borderRadius: 999, background: "var(--resi-line)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: progress + "%", background: "var(--resi-green)", borderRadius: 999 }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    {HOGARES_REVIEWS.map((_, j) => (
                      <button key={j} onClick={() => go(j)} aria-label={`Opinión ${j + 1}`} style={{
                        width: j === idx ? 18 : 6, height: 6, padding: 0, border: "none", cursor: "pointer",
                        borderRadius: 999, background: j === idx ? "var(--resi-green)" : "var(--resi-line-strong)",
                        transition: "all var(--dur-fast) var(--ease-out)",
                      }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <CarouselBtn icon="arrow-left" onClick={() => go(idx - 1)} />
                    <CarouselBtn icon="arrow-right" onClick={() => go(idx + 1)} />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <RatingStatCard pad={28} />
              <RecommendStatCard pad={28} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const CarouselBtn = ({ icon, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: 34, height: 34, borderRadius: 999, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hover ? "var(--resi-green)" : "#fff",
        color: hover ? "#fff" : "var(--resi-navy)",
        boxShadow: hover ? "var(--shadow-sm)" : "inset 0 0 0 1px var(--resi-line)",
        transition: "all var(--dur-fast) var(--ease-out)",
      }}>
      <Icon name={icon} size={16} stroke={2.2} />
    </button>
  );
};

window.HogaresReviews = HogaresReviews;
