// ============================================================
// HowItWorks — Stepper interactivo "Así funciona resi" (admins)
// Desktop only. Static section header on top (unchanged); below it,
// a fixed side-nav of 5 numbered steps + the active step panel.
// Navigation is instant (state swap), clickable numbers + prev/next.
//
// EXACT colors fixed by spec (do not tokenize / vary):
//   Verde principal  #4CA548
//   Azul oscuro      #2D2147
//   Pills beneficios #F5F0E8
//   Texto secundario #6B7280
// Everything else (borders, surfaces, radii, shadows, type) uses tokens.
// ============================================================
const STEP_GREEN = "#4CA548";
const STEP_NAVY = "#2D2147";
const STEP_PILL_BG = "#F5F0E8";
const STEP_TEXT_2 = "#6B7280";

const STEPPER = [
  {
    n: 1,
    navLabel: "Instala Punto Limpio",
    title: [{ t: "Instala el " }, { t: "Punto Limpio", g: true }],
    desc: "Instalamos el sistema de contenedores en tu edificio, organizados por categoría de residuo. Sin obras, sin complicaciones.",
    benefits: ["Señalética clara para cada categoría", "Hasta 12 tipos de residuo", "Instalación en 1 día"],
    photo: "Foto — Punto Limpio instalado",
    logo: "assets/logos/resiBote.png", logoAlt: "resiBOTE",
  },
  {
    n: 2,
    navLabel: "Hogares reciclan",
    title: [{ t: "Hogares", g: true }, { t: " reciclan" }],
    desc: "Cada apartamento separa y deposita sus residuos en el Punto Limpio. Separan fácil, sin depender de cada uno.",
    benefits: ["Opción A: separan desde el shut", "Opción B: separan con resiCUBO en casa", "Sin fricción para el residente"],
    photo: "Foto — Residente depositando residuos",
    logo: "assets/logos/resiCubo.png", logoAlt: "resiCUBO",
  },
  {
    n: 3,
    navLabel: "Recolección segura",
    title: [{ t: "Recolección", g: true }, { t: " segura" }],
    desc: "Un reciclador de tu confianza recoge los residuos directamente en tu edificio. En el shut, sin mezclas.",
    benefits: ["Personal 100% identificado", "Sin manipulación directa de residuos", "Garantía de destino final"],
    photo: "Foto — Reciclador en el edificio",
    logo: "assets/logos/resiLona.png", logoAlt: "resiLONA",
  },
  {
    n: 4,
    navLabel: "Crece tu tasa",
    title: [{ t: "Crece", g: true }, { t: " tu tasa" }],
    desc: "Medimos el reciclaje de tu edificio y te reportamos el impacto mes a mes. Trazabilidad mensual para cumplir la norma.",
    benefits: ["Tasa de reciclaje monitorizada", "Comparativa mensual", "Datos para reducir tarifa de aseo"],
    photo: "Foto — Dashboard de trazabilidad",
    logo: "assets/logos/resiClub.png", logoAlt: "resiCLUB",
  },
  {
    n: 5,
    navLabel: "Comunidad motivada",
    title: [{ t: "Comunidad " }, { t: "motivada", g: true }],
    desc: "Tus residentes ven su impacto y se motivan a reciclar más cada mes. Reportes cada mes, menos quejas, más cultura.",
    benefits: ["Reportes vía WhatsApp a residentes", "Próximos pasos y metas", "Ranking por apartamento"],
    photo: "Foto — App con reporte mensual",
    logo: "assets/logos/resiTips.png", logoAlt: "resiTIPS",
  },
];

const HowItWorks = () => {
  const isMobile = useIsMobile();
  const [current, setCurrent] = React.useState(0);
  const goTo = (i) => { if (i >= 0 && i < STEPPER.length) setCurrent(i); };

  return (
    <section id="como-funciona" data-screen-label="Cómo funciona · stepper" style={{ padding: isMobile ? "56px 24px" : "96px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Static section header — unchanged, lives above the stepper */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 64 }}>
          <Eyebrow dot>Cómo funciona</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(32px, 4vw, 48px)", letterSpacing: "-.015em",
            margin: "12px 0 14px", color: "var(--resi-navy)", lineHeight: 1.1,
          }}>
            sistema de <span style={{ color: "var(--resi-green)" }}>recompensas</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.55,
            color: "var(--resi-fg-2)", margin: 0, maxWidth: 580,
            marginLeft: "auto", marginRight: "auto",
          }}>
          </p>
        </div>

        {/* Stepper */}
        {isMobile ? (
          <MobileStepper current={current} goTo={goTo} />
        ) : (
          <div style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>
            <StepNav current={current} goTo={goTo} />
            <StepPanel step={STEPPER[current]} current={current} goTo={goTo} />
          </div>
        )}
      </div>
    </section>
  );
};

// ----- Side navigation ----------------------------------------
const StepNav = ({ current, goTo }) => (
  <nav aria-label="Pasos del proceso" style={{
    position: "relative", display: "flex", flexDirection: "column",
    minWidth: 240, flexShrink: 0,
  }}>
    {/* connecting vertical line */}
    <div style={{
      position: "absolute", left: 21, top: 30, bottom: 30, width: 1.5,
      background: "var(--resi-line)",
    }} />
    {STEPPER.map((s, i) => {
      const active = i === current;
      return (
        <button key={s.n} onClick={() => goTo(i)} style={{
          display: "flex", alignItems: "flex-start", gap: 16,
          padding: "14px 0", background: "none", border: "none", cursor: "pointer",
          textAlign: "left", width: "100%", position: "relative", zIndex: 1,
        }}>
          <span style={{
            width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
            background: active ? STEP_GREEN : "var(--resi-bg)",
            border: active ? `1.5px solid ${STEP_GREEN}` : "1.5px solid var(--resi-line)",
            color: active ? "#fff" : STEP_TEXT_2,
            boxShadow: active ? "0 2px 8px rgba(76,165,72,.28)" : "none",
            transition: "all var(--dur-fast) var(--ease-out)",
          }}>{s.n}</span>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.3, paddingTop: 11,
            color: active ? STEP_NAVY : STEP_TEXT_2,
            fontWeight: active ? 700 : 500,
            transition: "color var(--dur-fast) var(--ease-out)",
          }}>{s.navLabel}</span>
        </button>
      );
    })}
  </nav>
);

// ----- Active step panel --------------------------------------
const StepPanel = ({ step, current, goTo }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    {/* two-color title */}
    <h3 style={{
      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32,
      lineHeight: 1.15, letterSpacing: "-.01em", margin: "0 0 14px", color: STEP_NAVY,
    }}>
      {step.title.map((p, i) => (
        <span key={i} style={p.g ? { color: STEP_GREEN } : undefined}>{p.t}</span>
      ))}
    </h3>

    {/* description */}
    <p style={{
      fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65,
      color: STEP_TEXT_2, margin: "0 0 22px", maxWidth: 620,
    }}>{step.desc}</p>

    {/* benefit pills */}
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
      {step.benefits.map((b, i) => (
        <span key={i} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "9px 16px", borderRadius: "var(--r-pill)", background: STEP_PILL_BG,
          fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: STEP_TEXT_2,
        }}>
          <Icon name="check" size={15} stroke={2.8} style={{ color: STEP_GREEN, flexShrink: 0 }} />
          {b}
        </span>
      ))}
    </div>

    {/* image with product badge */}
    <div style={{
      position: "relative", width: "100%", height: 360, borderRadius: "var(--r-lg)",
      overflow: "hidden", border: "1px solid var(--resi-line)",
      background: "linear-gradient(150deg, var(--resi-bg-soft) 0%, var(--resi-bg-muted) 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{
        fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
        letterSpacing: ".08em", textTransform: "uppercase", color: "var(--resi-fg-3)",
      }}>{step.photo}</span>

      {/* product badge — bottom-left */}
      <div style={{
        position: "absolute", left: 16, bottom: 16,
        background: "rgba(255,255,255,.72)", backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)", borderRadius: "var(--r-sm)",
        padding: "8px 12px", display: "flex", alignItems: "center",
        boxShadow: "var(--shadow-xs)", border: "1px solid rgba(255,255,255,.6)",
      }}>
        <img src={asset(step.logo)} alt={step.logoAlt} style={{ height: 40, width: "auto", display: "block" }} />
      </div>
    </div>

    {/* sequential navigation */}
    <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
      <StepBtn variant="prev" disabled={current === 0} onClick={() => goTo(current - 1)}>
        <Icon name="arrow-left" size={16} /> Anterior
      </StepBtn>
      <StepBtn variant="next" disabled={current === STEPPER.length - 1} onClick={() => goTo(current + 1)}>
        Siguiente <Icon name="arrow-right" size={16} />
      </StepBtn>
    </div>
  </div>
);

const StepBtn = ({ variant, disabled, onClick, children }) => {
  const isNext = variant === "next";
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: isNext ? "11px 22px" : "11px 18px", borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.32 : 1,
      background: isNext ? STEP_GREEN : "var(--resi-bg)",
      color: isNext ? "#fff" : STEP_TEXT_2,
      border: isNext ? "none" : "1.5px solid var(--resi-line)",
      boxShadow: isNext && !disabled ? "0 2px 8px rgba(76,165,72,.25)" : "none",
      transition: "all var(--dur-fast) var(--ease-out)",
    }}>{children}</button>
  );
};

window.HowItWorks = HowItWorks;

// ----- Mobile stepper -----------------------------------------
// Side number-column is dropped; navigation is via top progress dots
// + bottom prev/next. Active step content fades in (0→1, 0.3s).
const MobileStepper = ({ current, goTo }) => {
  // Swipe nav — native touch events. Left swipe → next, right swipe → prev.
  const touchStart = React.useRef(null);
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    // Horizontal intent only: past threshold and more X than Y travel.
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      goTo(dx < 0 ? current + 1 : current - 1);
    }
    touchStart.current = null;
  };
  return (
    <div>
      {/* progress dots — active is a green pill, rest are small circles */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginBottom: 24 }}>
        {STEPPER.map((s, i) => {
          const active = i === current;
          return (
            <button key={s.n} aria-label={`Ir al paso ${s.n}`} aria-current={active}
              onClick={() => goTo(i)} style={{
                border: "none", background: "transparent", padding: 6, cursor: "pointer",
                display: "inline-flex", alignItems: "center",
              }}>
              <span style={{
                height: 8, borderRadius: 999,
                width: active ? 28 : 8,
                background: active ? STEP_GREEN : "var(--resi-line)",
                transition: "width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
              }} />
            </button>
          );
        })}
      </div>

      {/* Steps stacked in ONE grid cell so the container is always as tall as the
          TALLEST step. Every step is present (visibility toggles, so hidden steps
          still contribute to sizing); only the active one is visible and shorter
          steps simply leave empty space below. This keeps the bottom nav fixed in
          place on mobile. Content is top-aligned for reading consistency. */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ display: "grid", alignItems: "start", touchAction: "pan-y" }}>
        {STEPPER.map((step, si) => {
          const active = si === current;
          return (
            <div key={si} aria-hidden={!active} style={{
              gridArea: "1 / 1",
              visibility: active ? "visible" : "hidden",
              pointerEvents: active ? "auto" : "none",
              animation: active ? "resiStepFade .3s var(--ease-out) both" : "none",
            }}>
              {/* image with product badge — full width, fixed 200px, cover */}
              <div style={{
                position: "relative", width: "100%", height: 200, borderRadius: "var(--r-lg)",
                overflow: "hidden", border: "1px solid var(--resi-line)",
                background: "linear-gradient(150deg, var(--resi-bg-soft) 0%, var(--resi-bg-muted) 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
                  letterSpacing: ".08em", textTransform: "uppercase", color: "var(--resi-fg-3)",
                  textAlign: "center", padding: "0 16px",
                }}>{step.photo}</span>

                <div style={{
                  position: "absolute", left: 16, bottom: 16,
                  background: "rgba(255,255,255,.72)", backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)", borderRadius: "var(--r-sm)",
                  padding: "8px 12px", display: "flex", alignItems: "center",
                  boxShadow: "var(--shadow-xs)", border: "1px solid rgba(255,255,255,.6)",
                }}>
                  <img src={asset(step.logo)} alt={step.logoAlt} style={{ height: 36, width: "auto", display: "block" }} />
                </div>
              </div>

              {/* content column */}
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column" }}>
                <Eyebrow dot>Paso</Eyebrow>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 46, lineHeight: 1,
                  color: STEP_GREEN, margin: "8px 0 6px",
                }}>{String(step.n).padStart(2, "0")}</span>

                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26,
                  lineHeight: 1.18, letterSpacing: "-.01em", margin: "0 0 12px", color: STEP_NAVY,
                }}>
                  {step.title.map((p, pi) => (
                    <span key={pi} style={p.g ? { color: STEP_GREEN } : undefined}>{p.t}</span>
                  ))}
                </h3>

                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.65,
                  color: STEP_TEXT_2, margin: "0 0 20px",
                }}>{step.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {step.benefits.map((b, bi) => (
                    <span key={bi} style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "9px 16px", borderRadius: "var(--r-pill)", background: STEP_PILL_BG,
                      fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: STEP_TEXT_2,
                    }}>
                      <Icon name="check" size={15} stroke={2.8} style={{ color: STEP_GREEN, flexShrink: 0 }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
