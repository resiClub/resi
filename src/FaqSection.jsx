// ============================================================
// FaqSection — "Preguntas frecuentes" for both routes.
// Content (questions/answers/categories) ported verbatim from the
// attached FAQ HTMLs; visuals = resi DS tokens + components only.
//
//   variant="admins"  → administradores Q&A
//   variant="hogares" → hogares Q&A
//
// Behaviour:
//   · Tabs = categories. First category is active on load.
//   · Only the 3 questions of the active category are shown
//     (no "Todas" tab — the 15-at-once view is intentionally gone).
//   · Changing tab swaps to that category's 3 questions and closes
//     any open answer.
//   · One answer open at a time (accordion).
//   · Contact CTA opens WhatsApp.
// ============================================================
const FAQ_WA_LINK = "https://wa.me/573002668146";

const FAQ_DATA = {
  admins: [
    {
      key: "instalacion", label: "Instalación",
      items: [
        { q: "¿Cuánto tiempo tarda la instalación del Punto Limpio?",
          a: <>La instalación toma <strong>entre uno y dos días hábiles</strong> dependiendo del plan y del tamaño del cuarto de residuos. Nuestro equipo coordina contigo el horario para no interrumpir la operación del edificio. No necesitas hacer adecuaciones previas — nosotros evaluamos el espacio y ajustamos la distribución.</> },
        { q: "¿El edificio necesita tener un cuarto de residuos para instalar resi?",
          a: <>No necesariamente un cuarto formal. Trabajamos con el espacio disponible — puede ser <strong>una zona delimitada en el garaje, el hall de entrada o un área de servicio</strong>. En la visita de diagnóstico evaluamos la mejor ubicación según el flujo del edificio y la seguridad de los residentes.</> },
        { q: "¿Qué pasa con el resiBote si el edificio cancela el servicio?",
          a: <>El resiBote es tuyo una vez pagada la instalación. Si cancelas el servicio, <strong>el equipo queda en el edificio</strong> — es una inversión en infraestructura, no un préstamo. Lo que termina es la recolección, los reportes y el acompañamiento. Muchos edificios que han pausado el servicio mantienen el resiBote para retomarlo más adelante.</> },
      ],
    },
    {
      key: "recoleccion", label: "Recolección",
      items: [
        { q: "¿Con qué frecuencia recoge resi los residuos del edificio?",
          a: <>Depende del plan. El plan Base tiene <strong>recolección quincenal</strong>. Los planes Plus y Pro tienen <strong>recolección a demanda</strong> — cuando el Punto Limpio alcanza su capacidad, el reciclador aliado coordina el retiro. Siempre hay un plan de contingencia activo si el recolector habitual no puede asistir.</> },
        { q: "¿Quién es el reciclador que viene al edificio?",
          a: <>Es un <strong>reciclador de oficio verificado y aliado de resi</strong>, identificado con carné y conocido por nombre en la app. No es un desconocido — es alguien que el edificio puede reconocer con el tiempo. Este modelo garantiza dignidad en el proceso y seguridad para la comunidad: nunca hay manipulación directa de residuos sin identificación.</> },
        { q: "¿Qué pasa si el reciclador no puede venir un día?",
          a: <>Todos los planes incluyen un <strong>plan de contingencia ante inasistencia del recolector habitual</strong>. resi activa un recolector de reemplazo para que la recolección no se interrumpa. El edificio recibe notificación del cambio. La garantía de recolección es parte del servicio — no una promesa informal.</> },
      ],
    },
    {
      key: "comunidad", label: "Comunidad",
      items: [
        { q: "¿Cómo logra resi que los vecinos realmente reciclen?",
          a: <>El sistema está diseñado para reducir la fricción al máximo. Cada hogar tiene un <strong>minicontenedor en la cocina</strong> que hace la separación fácil y sin excusas. Pero la clave es la motivación: cada mes los hogares reciben su reporte de impacto — cuánto reciclaron, a quién le entregaron, cuánto más podría lograr el edificio. Ver el resultado propio y compararlo con el del edificio activa la participación de forma sostenida.</> },
        { q: "¿Qué pasa si solo algunos hogares quieren participar?",
          a: <>resi funciona desde el primer hogar que participa. <strong>No necesitas el 100% de la participación para arrancar</strong> — de hecho, así empieza la mayoría de edificios. El sistema está diseñado para crecer: a medida que más hogares ven el impacto de sus vecinos, se van sumando. La experiencia del Punto Limpio ordenado y los reportes mensuales hacen el trabajo de convencer a los indecisos.</> },
        { q: "¿Cómo le comunico esto a mi comunidad?",
          a: <>resi te da las herramientas para hacerlo. Una vez confirmas la instalación, te entregamos <strong>material de comunicación listo para compartir</strong> — mensajes para el grupo de WhatsApp del edificio, cartelería para el cuarto de residuos y un resumen explicativo para presentar en asamblea si lo necesitas. No tienes que explicar el sistema desde cero: nosotros te damos el guión.</> },
      ],
    },
    {
      key: "planes", label: "Planes y pagos",
      items: [
        { q: "¿Quién paga la suscripción — el edificio o cada hogar?",
          a: <>La suscripción mensual del Punto Limpio la paga <strong>la copropiedad como servicio del edificio</strong> — igual que el contrato de aseo o vigilancia. Es un costo único para el edificio que beneficia a todos los hogares. Los hogares que quieren la experiencia completa en casa (resiCubo) tienen su propia suscripción individual opcional, separada del costo del edificio.</> },
        { q: "¿Puedo cancelar el servicio cuando quiera?",
          a: <>Sí. En el plan mensual puedes cancelar en cualquier momento sin penalización. El plan anual incluye <strong>2 meses gratis</strong>; si cancelas antes del año, te devolvemos el proporcional de los meses no utilizados. El resiBote instalado queda en el edificio en cualquier caso — es tuyo desde el momento de la instalación.</> },
        { q: "¿Puedo cambiar de plan después de instalado?",
          a: <>Sí, en cualquier momento. Si subes de plan, resi hace los ajustes necesarios al Punto Limpio —más categorías, rediseño del espacio— en una visita de actualización. <strong>El cambio aplica desde el siguiente ciclo de facturación</strong>. Varios edificios empiezan con el plan Base y suben al Pro una vez que ven el compromiso de su comunidad.</> },
      ],
    },
    {
      key: "impacto", label: "Impacto y tarifa",
      items: [
        { q: "¿Cómo funciona el descuento en la tarifa de aseo?",
          a: <>En Colombia, las copropiedades que formalizan su reciclaje pueden acceder a la <strong>tarifa multiusuario</strong>, que reduce el componente de manejo de residuos hasta en un 50%. Para aplicar, el edificio necesita demostrar una tasa de reciclaje sostenida y presentar reportes verificables ante la empresa de aseo. resi genera exactamente esa documentación mes a mes — los datos que necesitas para hacer la solicitud.</> },
        { q: "¿Cuánto tiempo tarda el edificio en poder aplicar al descuento?",
          a: <>Depende de la tasa de participación del edificio. En general, los edificios necesitan <strong>entre 3 y 6 meses de datos consistentes</strong> para tener un historial sólido que respalde la solicitud. resi te muestra en la plataforma cuánto falta para llegar al umbral de aprovechamiento que exige la empresa de aseo — así sabes exactamente cuándo estás listo para aplicar.</> },
        { q: "¿Cómo sé cuánto está reciclando mi edificio cada mes?",
          a: <>Todos los planes incluyen un <strong>reporte mensual del edificio</strong> con kilos reciclados, tasa de aprovechamiento y evolución respecto al mes anterior. Los planes Plus y Pro incluyen además el desglose por categoría y la proyección de impacto. En el plan Pro, una versión resumida llega directamente a los hogares vía cartelería y WhatsApp — para que toda la comunidad vea el progreso.</> },
      ],
    },
  ],
  hogares: [
    {
      key: "sistema", label: "El sistema resi",
      items: [
        { q: "¿Cómo sé que el reciclador realmente recibe lo que separo?",
          a: <>Cada entrega queda registrada. En tu <strong>reporte mensual</strong> ves cuántos kilos salieron de tu edificio, a qué reciclador fueron y en qué centro de acopio llegaron. No hay promesas —hay datos. Y el reciclador también lo confirma desde su lado.</> },
        { q: "¿Esto no es lo mismo que poner bolsas de colores?",
          a: <>No. Las bolsas de colores separan, pero <strong>no garantizan el destino</strong>. resi controla toda la cadena: desde el cubo en tu cocina hasta la entrega directa al reciclador. Esa última parte —la que más importa— es exactamente lo que el sistema convencional no resuelve.</> },
        { q: "¿Funciona si mi edificio no está inscrito con resi?",
          a: <>Puedes empezar tú solo. El resiCubo vive en tu cocina y las resiBags las llevas al <strong>punto de entrega más cercano</strong>. Muchos hogares arrancan así y después contagian al edificio. Si quieres que tu administrador se una, te ayudamos a presentarle la propuesta.</> },
      ],
    },
    {
      key: "producto", label: "Productos",
      items: [
        { q: "¿El resiCubo cabe en mi cocina?",
          a: <>El <strong>resiCubo Base</strong> (20L · 40cm de alto) cabe en la mayoría de cocinas, incluso en apartamentos pequeños. El resiCubo Plus (30L · 60cm) tiene base retráctil y se instala escondido en un cajón. Si tienes dudas sobre el espacio, cuéntanos las medidas y te ayudamos a elegir.</> },
        { q: "¿Qué pasa cuando se me acaban las resiBags?",
          a: <>Puedes pedir <strong>resiBags adicionales desde la app</strong> sin cambiar de plan. Si ves que un mes generas más de lo habitual, las pedís puntualmente. Si siempre te quedas corto, te avisamos cuándo tiene sentido subir al siguiente plan.</> },
        { q: "¿Las resiBags son de un solo uso?",
          a: <>Son <strong>reciclables y de materiales recuperados</strong>. Una vez que las entregas en el punto limpio, el reciclador las procesa junto con el resto del material. No terminan en el relleno —hacen parte del ciclo que estás cerrando.</> },
      ],
    },
    {
      key: "planes", label: "Planes y pagos",
      items: [
        { q: "¿Puedo cancelar cuando quiera?",
          a: <>Sí. Si estás en el plan mensual, puedes cancelar en cualquier momento sin penalización. El plan anual tiene <strong>2 meses de ahorro incluidos</strong>; si cancelas antes, te devolvemos el proporcional de los meses no utilizados.</> },
        { q: "¿Qué incluye el precio mensual exactamente?",
          a: <>El precio cubre el <strong>resiCubo, las resiBags del mes, la recolección, la entrega al reciclador y tu reporte de impacto</strong>. En los planes Plus y Pro también incluye instalación y resiTips semanales. No hay cobros ocultos ni tarifas de envío adicionales.</> },
        { q: "¿Puedo cambiar de plan después de inscribirme?",
          a: <>Sí, en cualquier momento desde la app. Si subes de plan, el cambio aplica desde el siguiente ciclo y te ajustamos el equipo si es necesario. Si bajas, también —aunque casi nadie lo hace una vez que ve el impacto del plan Pro.</> },
      ],
    },
    {
      key: "impacto", label: "Impacto real",
      items: [
        { q: "¿Cómo se mide lo que reciclo cada mes?",
          a: <>Cada resiBag tiene un <strong>peso promedio por categoría</strong> registrado en el sistema. Cuando el reciclador las recibe, confirma la entrega y se suman al reporte de tu hogar. Al final del mes recibes un resumen con kilos reciclados, equivalencia ambiental y el nombre del reciclador que los recibió.</> },
        { q: "¿Qué residuos acepta resi?",
          a: <>El sistema maneja <strong>5 categorías</strong>: plástico, papel y cartón, vidrio, metal y multilaminados. El plan Pro también incluye restos de comida a través del miniCubo. Lo que no entra en estas categorías —como electrónicos o ropa— te indicamos a dónde llevarlo.</> },
        { q: "¿Los residuos realmente no pasan por el camión de basura?",
          a: <>Correcto. Las resiBags salen del edificio por una <strong>ruta paralela al sistema de basura convencional</strong>, directamente a manos del reciclador aliado. Nunca comparten el camión, nunca se mezclan. Eso es precisamente lo que hace diferente a resi.</> },
      ],
    },
    {
      key: "logistica", label: "Logística",
      items: [
        { q: "¿Qué pasa si me mudo?",
          a: <>Tu suscripción va contigo. Nos avisas, <strong>actualizamos tu punto de entrega</strong> y sigues reciclando sin interrupciones. El resiCubo se mueve fácil —es tuyo y va donde tú vayas.</> },
        { q: "¿Con qué frecuencia recogen las resiBags del edificio?",
          a: <>La recolección se coordina según el volumen del edificio, generalmente <strong>una o dos veces por semana</strong>. En edificios con resiBot activo recibes notificación cuando el nivel está alto y cuando ya fue recogido. Siempre hay alguien al tanto.</> },
        { q: "¿Qué hago si vivo en una casa, no en un edificio?",
          a: <>resi funciona para casas también. Separas con el resiCubo, acumulas tus resiBags y las llevas al <strong>punto de entrega resi más cercano</strong>, que puede estar en un edificio aliado o en un punto fijo del barrio. Desde la app ves cuál te queda más cerca.</> },
      ],
    },
  ],
};

// Inline WhatsApp glyph — there is no Lucide brand icon for it.
const WhatsAppGlyph = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15h-.003a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/>
  </svg>
);

// --- Tab pill -----------------------------------------------------
const FaqTab = ({ active, onClick, children }) => {
  const isMobile = useIsMobile();
  const [hover, setHover] = React.useState(false);
  return (
    <button
      role="tab" aria-selected={active} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, whiteSpace: "nowrap",
        padding: isMobile ? "0 16px" : "9px 18px", minHeight: isMobile ? 40 : 0,
        borderRadius: "var(--r-pill)", cursor: "pointer",
        border: active ? "1px solid var(--resi-navy)" : "1px solid var(--resi-line)",
        background: active ? "var(--resi-navy)" : "#fff",
        color: active ? "#fff" : (hover ? "var(--resi-green-dark)" : "var(--resi-fg-2)"),
        boxShadow: active ? "var(--shadow-xs)" : "none",
        transition: "all var(--dur-fast) var(--ease-out)",
      }}>
      {children}
    </button>
  );
};

// --- One question row ---------------------------------------------
const FaqRow = ({ catLabel, q, a, open, onToggle }) => {
  const isMobile = useIsMobile();
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--resi-line)" }}>
      <button
        aria-expanded={open} onClick={onToggle}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          gap: 20, padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
        }}>
        <span>
          <span style={{
            display: "inline-block", fontFamily: "var(--font-body)",
            fontSize: 10.5, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase",
            color: "var(--resi-green-dark)", background: "rgba(76,165,72,.12)",
            borderRadius: "var(--r-pill)", padding: "3px 9px", marginBottom: 8,
          }}>{catLabel}</span>
          <span style={{
            display: "block", fontFamily: "var(--font-body)", fontSize: isMobile ? 15 : 16,
            fontWeight: 700, lineHeight: 1.4,
            color: (open || hover) ? "var(--resi-green-dark)" : "var(--resi-navy)",
            transition: "color var(--dur-fast) var(--ease-out)",
          }}>{q}</span>
        </span>
        <span aria-hidden="true" style={{
          flexShrink: 0, width: 28, height: 28, borderRadius: "50%", marginTop: 2,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          border: open ? "1px solid var(--resi-green)" : "1px solid var(--resi-line)",
          background: open ? "var(--resi-green)" : "#fff",
          color: open ? "#fff" : "var(--resi-fg-3)",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "all var(--dur-base) var(--ease-out)",
        }}>
          <Icon name="plus" size={14} stroke={2.2} />
        </span>
      </button>
      <div style={{
        display: "grid", gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-base) var(--ease-out)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{
            paddingBottom: 26, paddingRight: isMobile ? 0 : 44,
            fontFamily: "var(--font-body)", fontSize: isMobile ? 14.5 : 15, fontWeight: 400,
            lineHeight: 1.7, color: "var(--resi-fg-2)",
          }}>{a}</div>
        </div>
      </div>
    </div>
  );
};

// --- WhatsApp contact button --------------------------------------
const FaqWhatsAppBtn = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={FAQ_WA_LINK} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
        height: 52, padding: "0 26px", borderRadius: "var(--r-pill)",
        fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 700, whiteSpace: "nowrap",
        background: hover ? "var(--resi-green-dark)" : "var(--resi-green)", color: "#fff",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)", textDecoration: "none",
        transition: "all var(--dur-fast) var(--ease-out)",
      }}>
      <WhatsAppGlyph size={18} />
      Escríbenos por WhatsApp
    </a>
  );
};

// --- Section ------------------------------------------------------
const FaqSection = ({ variant = "admins" }) => {
  const cats = FAQ_DATA[variant] || FAQ_DATA.admins;
  const [activeCat, setActiveCat] = React.useState(cats[0].key);
  const [openIdx, setOpenIdx] = React.useState(null);
  const isMobile = useIsMobile();

  const current = cats.find((c) => c.key === activeCat) || cats[0];

  const selectCat = (key) => { setActiveCat(key); setOpenIdx(null); };

  return (
    <section id="preguntas" data-screen-label={"Preguntas frecuentes " + variant}
      style={{ background: "var(--resi-bg)", padding: isMobile ? "56px 24px" : "96px 32px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header — centered */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? 28 : 40 }}>
          <Eyebrow dot>Preguntas frecuentes</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: isMobile ? "clamp(26px, 6.5vw, 34px)" : "clamp(32px, 4vw, 48px)", letterSpacing: "-.015em",
            margin: "12px 0 0", color: "var(--resi-navy)", lineHeight: 1.1, textWrap: "balance",
          }}>
            Resolvemos tus <span style={{ color: "var(--resi-green)" }}>dudas</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div role="tablist" style={{
          display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center",
          marginBottom: isMobile ? 24 : 36,
        }}>
          {cats.map((c) => (
            <FaqTab key={c.key} active={c.key === activeCat} onClick={() => selectCat(c.key)}>{c.label}</FaqTab>
          ))}
        </div>

        {/* Questions of the active category */}
        <div style={{ borderTop: "1px solid var(--resi-line)" }}>
          {current.items.map((it, i) => (
            <FaqRow
              key={current.key + "-" + i}
              catLabel={current.label}
              q={it.q} a={it.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx((o) => (o === i ? null : i))}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{
          marginTop: isMobile ? 40 : 56, padding: isMobile ? "28px 24px" : "32px 40px",
          background: "var(--resi-bg-soft)", borderRadius: "var(--r-lg)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, flexWrap: "wrap",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, fontWeight: 700,
              color: "var(--resi-navy)", margin: "0 0 4px",
            }}>¿Tienes una pregunta que no está aquí?</p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 400,
              color: "var(--resi-fg-2)", margin: 0,
            }}>Escríbenos. Respondemos en menos de 24 horas.</p>
          </div>
          <FaqWhatsAppBtn />
        </div>

      </div>
    </section>
  );
};

window.FaqSection = FaqSection;
