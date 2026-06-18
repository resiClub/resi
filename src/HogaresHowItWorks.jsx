// ============================================================
// HogaresHowItWorks — "Cómo funciona" for residents.
// Content from the attached mockup; visuals from the resi DS only.
// Cards share ONE fixed height; every row element aligns across cards
// (image → chip → step label → title → description → "Ver detalles").
// Description is flex:1 so short copy leaves empty space below, never
// changing the card height.
// ============================================================
const HOGARES_STEPS_CARDS = [
{
  color: "blue", initials: "rC", brand: "resiCUBO", img: "Foto — resiCUBO",
  photo: "https://res.cloudinary.com/db8a6pwok/image/upload/q_auto/f_auto/v1780352068/IMG_0538_zczoc3.jpg", photoAlt: "resiCUBO instalado en la cocina",
  logo: "assets/logos/resiCubo.png", logoAlt: "resiCUBO",
  step: "Paso 01", title: "Separa ", highlight: "sin notarlo",
  desc: "Un minicontenedor con 5 categorías que vive escondido en tu cocina.",
  details: ["Diseñado para mini apartamentos", "Cabe en la mayoría de cocinas", "Categorías fáciles de entender"]
},
{
  color: "orange", initials: "rB", brand: "resiBOTE", img: "Foto — Punto Limpio",
  photo: "https://res.cloudinary.com/db8a6pwok/image/upload/q_auto/f_auto/v1780352083/IMG_0471_xbor7j.jpg", photoAlt: "Punto Limpio del edificio — resiBOTE",
  logo: "assets/logos/resiBote.png", logoAlt: "resiBOTE",
  step: "Paso 02", title: "Entrega ", highlight: "a unos pasos",
  desc: "Lleva al Punto Limpio del edificio. Cada categoría sigue por su lado.",
  details: ["Siempre limpio y ordenado", "Los mantenemos separados", "Las mismas categorías"]
},
{
  color: "pink", initials: "rB", brand: "resiBAGS", img: "Foto — resiBAGS",
  photo: "https://res.cloudinary.com/db8a6pwok/image/upload/q_auto/f_auto/v1780353043/reciclador_jf1wxa.png", photoAlt: "Reciclador de confianza",
  logo: "assets/logos/resiLona.png", logoAlt: "resiLONA",
  step: "Paso 03", title: "Impacta ", highlight: "de verdad",
  desc: "Los entregamos —separados— a recicladores de tu confianza.",
  details: ["Trabajo digno para recicladores", "Sin pasar por el camión de basura", "Sí llegan a centros de reciclaje"]
},
{
  color: "green", initials: "rCl", brand: "resiCLUB", img: "Foto — resiCLUB",
  photo: "https://res.cloudinary.com/db8a6pwok/image/upload/q_auto/f_auto/v1780522668/IMG_0681_bxsvcu.jpg", photoAlt: "resiCLUB — tu huella mensual",
  logo: "assets/logos/resiClub.png", logoAlt: "resiCLUB",
  step: "Paso 04", title: "Conoce ", highlight: "tu huella",
  desc: "Cada mes te contamos cuánto reciclaste y a quién se lo entregamos.",
  details: ["Reporte mensual de tu impacto", "Tips semanales de reciclaje", "Conoce a quién ayudas"]
}];


const ACCENT = {
  blue: "var(--resi-blue)",
  orange: "var(--resi-orange)",
  pink: "var(--resi-pink)",
  green: "var(--resi-green)"
};

const HogaresStepCard = ({ data, mobile = false, borderHex }) => {
  const [open, setOpen] = React.useState(false);
  const accent = ACCENT[data.color];

  return (
    <div style={{
      background: "#fff", borderRadius: "var(--r-lg)",
      boxShadow: "var(--shadow-sm)", overflow: "hidden",
      display: "flex", flexDirection: "column",
      ...(mobile ?
      { borderLeft: `4px solid ${borderHex}`, height: "100%" } :
      { borderTop: `4px solid ${accent}` })
    }}>
      {/* Image area — 3/4 portrait, fits vertical photos without cropping */}
      <div style={{
        position: "relative", width: "100%", aspectRatio: "3 / 4", flexShrink: 0,
        background: "#f5f5f5",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden"
      }}>
        {data.photo ?
        <img src={/^https?:/.test(data.photo) ? data.photo : asset(data.photo)} alt={data.photoAlt || data.img}
        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} /> :

        <span style={{
          fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
          letterSpacing: ".08em", textTransform: "uppercase",
          color: "var(--resi-fg-3)"
        }}>{data.img}</span>
        }

        {/* Logo del producto — mismo componente de logo que en /administradores */}
        <div style={{
          position: "absolute", left: 12, bottom: 12,
          background: "rgba(255,255,255,.72)", backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)", borderRadius: "var(--r-sm)",
          padding: "8px 12px", display: "flex", alignItems: "center",
          boxShadow: "var(--shadow-xs)", border: "1px solid rgba(255,255,255,.6)"
        }}>
          <img src={asset(data.logo)} alt={data.logoAlt} style={{ height: 40, width: "auto", display: "block" }} />
        </div>
      </div>

      {/* Body — fixed-height regions keep every row aligned across cards */}
      <div style={{
        padding: 18, display: "flex", flexDirection: "column", flex: 1
      }}>
        {/* Step label */}
        <div style={{
          fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
          letterSpacing: ".06em", color: accent, marginBottom: 8
        }}>{data.step}</div>

        {/* Title — fixed two-line slot so titles align across cards */}
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19,
          lineHeight: 1.25, color: "var(--resi-navy)", margin: 0,
          minHeight: "calc(19px * 1.25 * 2)"
        }}>
          {data.title}<span style={{ color: "var(--resi-green)" }}>{data.highlight}</span>
        </h3>

        {/* Description — flex:1, eats remaining space without growing the card */}
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55,
          color: "var(--resi-fg-2)", margin: "8px 0 0", flex: 1
        }}>{data.desc}</p>

        {/* Ver detalles — pinned to the bottom of the card */}
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            marginTop: mobile ? "auto" : 12,
            background: "none", border: "none", padding: 0, cursor: "pointer",
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, color: accent
          }}>
          {open ? "Ocultar detalles" : "Ver detalles"}
          <Icon name="chevron-down" size={15} stroke={2.4}
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast) var(--ease-out)" }} />
        </button>

        {open &&
        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 12 }}>
            {data.details.map((d, i) =>
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 8,
            fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.45,
            color: "var(--resi-fg-2)"
          }}>
                <Icon name="check" size={14} stroke={2.8} style={{ color: "var(--resi-green)", flexShrink: 0, marginTop: 1 }} />
                {d}
              </div>
          )}
          </div>
        }
      </div>
    </div>);

};

const HOGARES_BORDER_HEX = ["#008ECA", "#F26A2C", "#E45DBF", "#4CA548"];

const HogaresStepsCarousel = () => {
  const scrollRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  const [active, setActive] = React.useState(0);
  const [showHint, setShowHint] = React.useState(false);

  // Active dot tracks the scroll position.
  const onScroll = () => {
    const el = scrollRef.current;if (!el) return;
    const unit = el.clientWidth * 0.82 + 12; // card width + gap
    const idx = Math.round(el.scrollLeft / unit);
    setActive(Math.max(0, Math.min(HOGARES_STEPS_CARDS.length - 1, idx)));
  };

  // Swipe hint — shown once per session when the row enters view.
  React.useEffect(() => {
    if (sessionStorage.getItem("resiHogaresSwipeHint")) return;
    const el = sectionRef.current;if (!el || !window.IntersectionObserver) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !sessionStorage.getItem("resiHogaresSwipeHint")) {
          sessionStorage.setItem("resiHogaresSwipeHint", "1");
          setShowHint(true);
          setTimeout(() => setShowHint(false), 2000);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={{ position: "relative" }}>
      <div ref={scrollRef} onScroll={onScroll} className="no-scrollbar" style={{
        display: "flex", gap: 12,
        overflowX: "scroll", scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        paddingLeft: 16, paddingRight: 16, paddingBottom: 4,
        scrollPaddingLeft: 16
      }}>
        {HOGARES_STEPS_CARDS.map((d, i) =>
        <div key={i} style={{ flex: "0 0 82vw", scrollSnapAlign: "start" }}>
            <HogaresStepCard data={d} mobile borderHex={HOGARES_BORDER_HEX[i]} />
          </div>
        )}
      </div>

      {/* Swipe hint — finger + arrow, brand icon stand-in (no emoji per DS). */}
      {showHint &&
      <div style={{
        position: "absolute", top: 58, left: "calc(16px + 41vw)",
        transform: "translateX(-50%)", zIndex: 3, pointerEvents: "none",
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "6px 12px", borderRadius: 20,
        background: "rgba(255,255,255,.82)", backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)", boxShadow: "var(--shadow-md)",
        color: "var(--resi-navy)",
        animation: "resiSwipeHint 2s var(--ease-out) both"
      }}>
          <Icon name="pointer" size={18} stroke={2} />
          <Icon name="arrow-right" size={16} stroke={2.4} />
        </div>}

      {/* Progress dots — active is a green pill, rest small circles. */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 20 }}>
        {HOGARES_STEPS_CARDS.map((_, i) => {
          const a = i === active;
          return (
            <span key={i} style={{
              height: 8, width: a ? 28 : 8, borderRadius: 999,
              background: a ? "#4CA548" : "var(--resi-line)",
              transition: "width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
            }} />);

        })}
      </div>
    </div>);

};

const HogaresHowItWorks = () => {
  const isMobile = useIsMobile();
  return (
    <section id="como-funciona" style={{ padding: isMobile ? "56px 0" : "96px 32px", background: "var(--resi-bg)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48, padding: isMobile ? "0 24px" : 0 }}>
        <Eyebrow dot>Cómo funciona</Eyebrow>
        <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(32px, 4vw, 48px)", letterSpacing: "-.015em",
            margin: "12px 0 0", color: "var(--resi-navy)", lineHeight: 1.1
          }}>
          Cada residuo <span style={{ color: "var(--resi-green)" }}>impacta</span>
        </h2>
      </div>

      {isMobile ?
        <HogaresStepsCarousel /> :

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20,
          alignItems: "stretch"
        }}>
          {HOGARES_STEPS_CARDS.map((d, i) => <HogaresStepCard key={i} data={d} />)}
        </div>
        }
    </div>
  </section>);

};

window.HogaresHowItWorks = HogaresHowItWorks;