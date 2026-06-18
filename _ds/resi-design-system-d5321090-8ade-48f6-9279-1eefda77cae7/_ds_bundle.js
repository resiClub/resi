/* @ds-bundle: {"format":3,"namespace":"ResiDesignSystem_d53210","components":[],"sourceHashes":{"ui_kits/web/CtaBanner.jsx":"7ccbb40deca1","ui_kits/web/Dashboard.jsx":"3e0b2c432f27","ui_kits/web/Footer.jsx":"5e86634392cf","ui_kits/web/Hero.jsx":"d54fdd9d36f3","ui_kits/web/Nav.jsx":"b6d9d6970591","ui_kits/web/ProductCatalog.jsx":"20e1cfa39451","ui_kits/web/StatStrip.jsx":"223534081daa","ui_kits/web/Steps.jsx":"4ca14e543e00","ui_kits/web/SubBrandGrid.jsx":"09271fb2eaef","ui_kits/web/ui.jsx":"52555aede150"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ResiDesignSystem_d53210 = window.ResiDesignSystem_d53210 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/web/CtaBanner.jsx
try { (() => {
// ============================================================
// CtaBanner — green panel, headline + CTA
// ============================================================
const CtaBanner = ({
  setScreen
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    maxWidth: 1200,
    margin: "32px auto 72px",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--resi-green)",
    borderRadius: "var(--r-2xl)",
    padding: "56px 56px",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 32,
    alignItems: "center",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
  color: "rgba(255,255,255,.85)"
}, "\xDAnete al resiCLUB"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 42,
    lineHeight: 1.05,
    margin: "10px 0 12px",
    color: "#fff",
    letterSpacing: "-.01em",
    textWrap: "balance"
  }
}, "Cuidar lo importante es m\xE1s f\xE1cil cuando lo hacemos juntos."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 17,
    color: "rgba(255,255,255,.92)",
    margin: 0,
    maxWidth: 540
  }
}, "Pide tu resiCUBO o cu\xE9ntale a la administraci\xF3n de tu edificio. Te acompa\xF1amos desde el primer residuo.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "onDark",
  size: "lg",
  iconRight: "arrow-right",
  onClick: () => setScreen("productos"),
  full: true
}, "Pedir mi resiCUBO"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "lg",
  full: true,
  style: {
    color: "#fff",
    boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.45)"
  },
  onClick: () => setScreen("productos")
}, "Soy administrador"))));
window.CtaBanner = CtaBanner;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/CtaBanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Dashboard.jsx
try { (() => {
// ============================================================
// Dashboard — member impact screen ("Mi impacto")
// ============================================================
const monthBars = [{
  m: "ene",
  v: 28
}, {
  m: "feb",
  v: 33
}, {
  m: "mar",
  v: 31
}, {
  m: "abr",
  v: 37
}, {
  m: "may",
  v: 42.6
}, {
  m: "jun",
  v: 0,
  future: true
}];
const Dashboard = () => {
  const max = 50;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px 32px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 28,
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Tu impacto"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 40,
      margin: "8px 0 0",
      color: "var(--resi-navy)",
      letterSpacing: "-.01em"
    }
  }, "Hola Andrea, gracias por cuidar."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      color: "var(--resi-fg-2)",
      fontSize: 15
    }
  }, "Torres del Parque \xB7 Apt 802 \xB7 Reporte de mayo de 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: "download",
    size: "md"
  }, "Descargar PDF"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    size: "md"
  }, "Canjear resiDUOS"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "feature",
    padding: 26
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--resi-green)"
  }, "Este mes cuidaste"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 80,
      lineHeight: 1,
      color: "#fff",
      margin: "12px 0 8px",
      letterSpacing: "-.02em"
    }
  }, "42.6", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      marginLeft: 6,
      opacity: .7
    }
  }, "kg")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "\u25B2 +14% vs. abril"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.7)"
    }
  }, "Equivalente a 7 \xE1rboles cuidados \xB7  18 kg CO\u2082 evitados"))), /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "resiDUOS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      color: "var(--resi-navy)",
      letterSpacing: "-.01em"
    }
  }, "1,284"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--resi-fg-3)",
      fontSize: 13
    }
  }, "monedas")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--resi-fg-2)",
      margin: "8px 0 14px"
    }
  }, "+186 este mes. Canj\xE9alos por descuentos en tu factura de aseo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: "var(--resi-orange)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: i > 1 ? -10 : 0,
      boxShadow: "0 0 0 2px #fff"
    }
  }, "$")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: 12,
      color: "var(--resi-fg-3)"
    }
  }, "+1,279"))), /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ahorro en aseo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      color: "var(--resi-navy)",
      letterSpacing: "-.01em",
      marginTop: 10
    }
  }, "$24.300"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--resi-fg-2)",
      margin: "8px 0 0"
    }
  }, "Se descuenta autom\xE1ticamente en tu pr\xF3xima factura."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "10px 14px",
      borderRadius: "var(--r-md)",
      background: "rgba(76,183,72,.10)",
      color: "var(--resi-green-dark)",
      fontSize: 12,
      fontWeight: 600,
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-down",
    size: 14
  }), "12% m\xE1s bajo que el promedio del edificio"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Hist\xF3rico"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: 20,
      color: "var(--resi-navy)"
    }
  }, "Residuos aprovechados por mes")), /*#__PURE__*/React.createElement(Chip, {
    color: "soft"
  }, "2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 18,
      height: 200,
      alignItems: "end"
    }
  }, monthBars.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 56,
      height: `${m.v / max * 100}%`,
      background: m.future ? "var(--resi-bg-muted)" : i === 4 ? "var(--resi-green)" : "var(--resi-navy)",
      borderRadius: "var(--r-md) var(--r-md) 6px 6px",
      minHeight: 14,
      position: "relative"
    }
  }, !m.future && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -22,
      left: 0,
      right: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 12,
      color: i === 4 ? "var(--resi-green-dark)" : "var(--resi-navy)"
    }
  }, m.v, "kg")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--resi-fg-3)",
      fontWeight: 600
    }
  }, m.m))))), /*#__PURE__*/React.createElement(Card, {
    padding: 26
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Por categor\xEDa \xB7 mayo"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [{
    c: "var(--resi-blue)",
    l: "Vidrio · Papel",
    v: 16.2,
    p: 38
  }, {
    c: "var(--resi-orange)",
    l: "Plástico",
    v: 11.4,
    p: 27
  }, {
    c: "var(--resi-pink)",
    l: "Orgánico",
    v: 9.0,
    p: 21
  }, {
    c: "var(--resi-green)",
    l: "Otros aprovechables",
    v: 6.0,
    p: 14
  }].map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--resi-navy)",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: x.c
    }
  }), x.l), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--resi-fg-3)"
    }
  }, x.v, " kg")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--resi-bg-muted)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${x.p}%`,
      background: x.c,
      borderRadius: 999
    }
  }))))))), /*#__PURE__*/React.createElement(Card, {
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Actividad reciente"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: 20,
      color: "var(--resi-navy)"
    }
  }, "Recogidas del resiBOTE")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: "arrow-right"
  }, "Ver todas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, [{
    d: "Mié 22 may",
    t: "07:14",
    who: "Diego — Asociación La Esperanza",
    w: "11.4 kg",
    state: "Recogido",
    tone: "green"
  }, {
    d: "Vie 17 may",
    t: "08:02",
    who: "Carmen — Asociación La Esperanza",
    w: "9.8 kg",
    state: "Recogido",
    tone: "green"
  }, {
    d: "Lun 13 may",
    t: "07:31",
    who: "Diego — Asociación La Esperanza",
    w: "13.1 kg",
    state: "Recogido",
    tone: "green"
  }, {
    d: "Vie 27 may",
    t: "—",
    who: "Programada",
    w: "—",
    state: "Programada",
    tone: "blue"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr 120px 120px",
      gap: 16,
      padding: "14px 4px",
      borderTop: i === 0 ? "none" : "1px solid var(--resi-line)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--resi-navy)"
    }
  }, r.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--resi-fg-3)"
    }
  }, r.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--resi-navy)",
      fontWeight: 500
    }
  }, r.who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--resi-navy)"
    }
  }, r.w), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone
  }, r.state)))))));
};
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Footer.jsx
try { (() => {
// ============================================================
// Footer — navy, brand mark left, columns of links right
// ============================================================
const Footer = () => {
  const cols = [{
    h: "Productos",
    items: ["resiCUBO", "resiBOTE", "resiTUBO", "resiLONA"]
  }, {
    h: "Compañía",
    items: ["Sobre resi", "Manual de marca", "Prensa", "Contacto"]
  }, {
    h: "Comunidad",
    items: ["resiCLUB", "resiTIPS", "resiKIDS", "Blog"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--resi-navy)",
      color: "rgba(255,255,255,.7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "64px 32px 32px",
      display: "grid",
      gridTemplateColumns: "1.3fr repeat(3, 1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/resiCubo-azul.png",
    alt: "resi",
    style: {
      height: 96,
      width: "auto",
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      margin: 0,
      maxWidth: 280
    }
  }, "Cuidamos los residuos separados desde el hogar para entreg\xE1rselos \u2014as\xED, separados\u2014 a un reciclador de confianza.")), cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "#fff",
      fontSize: 15,
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.items.map((x, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.7)",
      fontSize: 13,
      fontWeight: 500
    }
  }, x))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.1)",
      maxWidth: 1200,
      margin: "0 auto",
      padding: "20px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
      color: "rgba(255,255,255,.55)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 resi \xB7 Bogot\xE1, Colombia"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.55)"
    }
  }, "T\xE9rminos"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,.55)"
    }
  }, "Privacidad"))));
};
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Hero.jsx
try { (() => {
// ============================================================
// Hero — homepage hero with headline, lead, dual CTA, photo slot
// ============================================================
const Hero = ({
  setScreen
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "64px 32px 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 24
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Cuidamos lo importante"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 64px)",
    lineHeight: 1.04,
    margin: 0,
    letterSpacing: "-0.02em",
    color: "var(--resi-navy)"
  }
}, "Tu hogar separa.", /*#__PURE__*/React.createElement("br", null), "Nosotros recogemos.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--resi-green)"
  }
}, "El planeta gana.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 19,
    lineHeight: 1.55,
    color: "var(--resi-fg-2)",
    margin: 0,
    maxWidth: 520
  }
}, "resi instala un sistema sencillo en tu edificio para que los residuos lleguen \u2014ya clasificados\u2014 a un reciclador de confianza. Aprovechamos hasta el", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "var(--resi-navy)"
  }
}, " 98% "), " de lo que generas en casa."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 12,
    marginTop: 8
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "lg",
  iconRight: "arrow-right",
  onClick: () => setScreen("productos")
}, "Pedir mi resiCUBO"), /*#__PURE__*/React.createElement(Button, {
  variant: "outline",
  size: "lg",
  onClick: () => setScreen("mi-impacto")
}, "Ver una demo")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 18,
    alignItems: "center",
    marginTop: 12,
    fontFamily: "var(--font-body)",
    fontSize: 13,
    color: "var(--resi-fg-3)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    gap: 6,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check-circle",
  size: 16,
  style: {
    color: "var(--resi-green)"
  }
}), "Sin contratos largos"), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    gap: 6,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check-circle",
  size: 16,
  style: {
    color: "var(--resi-green)"
  }
}), "Descuento en factura de aseo"))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(PhotoSlot, {
  ratio: "4/5",
  radius: "var(--r-2xl)",
  label: "Familia + resiCUBO en cocina",
  tone: "green"
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/kraby.png",
  alt: "Kraby",
  style: {
    position: "absolute",
    top: -28,
    right: -18,
    width: 132,
    height: "auto",
    transform: "rotate(8deg)",
    filter: "drop-shadow(0 12px 24px rgba(7,7,78,.18))"
  }
}), /*#__PURE__*/React.createElement(Card, {
  style: {
    position: "absolute",
    bottom: 24,
    left: -28,
    right: 32,
    display: "flex",
    gap: 14,
    alignItems: "center"
  },
  padding: 18
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 48,
    height: 48,
    borderRadius: "var(--r-md)",
    background: "var(--resi-green)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "leaf",
  size: 24
})), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 16,
    color: "var(--resi-navy)"
  }
}, "Este mes cuidaste 42.6 kg"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "var(--resi-fg-3)"
  }
}, "Equivalente a 7 \xE1rboles \xB7 \u25B2 +14% vs. abril"))))));
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Nav.jsx
try { (() => {
// ============================================================
// Nav — sticky top, white with subtle border, demo screen switcher
// ============================================================

const Nav = ({
  screen,
  setScreen
}) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [{
    id: "home",
    label: "Cómo funciona"
  }, {
    id: "productos",
    label: "Productos"
  }, {
    id: "home",
    label: "resiCLUB",
    anchor: "club"
  }, {
    id: "home",
    label: "resiTIPS",
    anchor: "tips"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(255,255,255,.85)" : "#fff",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--resi-line)" : "1px solid transparent",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      height: 76,
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setScreen("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/resi.png",
    alt: "resi",
    style: {
      height: 38
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 8
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setScreen(l.id);
    },
    style: {
      padding: "8px 14px",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--resi-navy)"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setScreen("mi-impacto")
  }, "Mi impacto"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    iconRight: "arrow-right",
    onClick: () => setScreen("productos")
  }, "Pedir mi resiCUBO"))));
};
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ProductCatalog.jsx
try { (() => {
// ============================================================
// ProductCatalog — full sub-brand listing + a featured product
// ============================================================
const ProductCatalog = ({
  setScreen
}) => {
  const [picked, setPicked] = React.useState(SUB_BRANDS[0]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "48px 32px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Productos resi"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      margin: "10px 0 12px",
      color: "var(--resi-navy)",
      letterSpacing: "-.01em"
    }
  }, "Una familia que cuida."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--resi-fg-2)",
      margin: 0,
      maxWidth: 640
    }
  }, "Cada elemento del sistema depende del anterior. Comienza con el resiCUBO en tu cocina; tu edificio sigue con resiBOTE y resiTUBO.")), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: "hidden",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--resi-bg-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/logos/${picked.logo}`,
    alt: picked.name,
    style: {
      maxHeight: 280,
      maxWidth: "70%",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: picked.color.includes("blue") ? "blue" : picked.color.includes("orange") ? "orange" : picked.color.includes("pink") ? "pink" : "green"
  }, picked.tag), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Disponible")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 40,
      margin: 0,
      color: "var(--resi-navy)",
      letterSpacing: "-.01em"
    }
  }, picked.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--resi-fg-2)",
      margin: 0,
      lineHeight: 1.55
    }
  }, picked.copy, " Dise\xF1ado para integrarse a tu rutina sin pedir explicaciones."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      marginTop: 4
    }
  }, [{
    lab: "Categorías",
    v: "8"
  }, {
    lab: "Capacidad",
    v: "32 L"
  }, {
    lab: "Materiales",
    v: "100% reciclados"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--resi-navy)"
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--resi-fg-3)"
    }
  }, s.lab)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    size: "lg"
  }, "Pedir mi ", picked.name), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Hablar con un asesor"))))), /*#__PURE__*/React.createElement(Eyebrow, null, "Toda la familia"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      margin: "8px 0 20px",
      color: "var(--resi-navy)"
    }
  }, "Explora cada producto"), /*#__PURE__*/React.createElement(SubBrandGrid, {
    onPick: setPicked
  }));
};
window.ProductCatalog = ProductCatalog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ProductCatalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/StatStrip.jsx
try { (() => {
// ============================================================
// StatStrip — big numbers, navy bg
// ============================================================
const StatStrip = () => {
  const stats = [{
    num: "98%",
    lab: "de los residuos aprovechados"
  }, {
    num: "5×",
    lab: "más que las demás soluciones"
  }, {
    num: "47",
    lab: "edificios en Bogotá"
  }, {
    num: "12.4 t",
    lab: "rescatadas del relleno este año"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--resi-navy)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "56px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1,
      color: "#fff",
      letterSpacing: "-.02em"
    }
  }, s.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "rgba(255,255,255,.7)",
      maxWidth: 220
    }
  }, s.lab)))));
};
window.StatStrip = StatStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/StatStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Steps.jsx
try { (() => {
// ============================================================
// Steps — 4-step "cómo funciona"
// ============================================================
const STEPS = [{
  icon: "home",
  title: "Tu hogar separa",
  copy: "El resiCUBO clasifica intuitivamente en 8 categorías, solo por el material.",
  color: "var(--resi-blue)"
}, {
  icon: "arrow-down",
  title: "Bajan por el resiTUBO",
  copy: "Entrega tus residuos cuando quieras, desde la comodidad de tu piso.",
  color: "var(--resi-orange)"
}, {
  icon: "package",
  title: "Esperan en el resiBOTE",
  copy: "Se almacenan en el shut manteniendo la clasificación previa.",
  color: "var(--resi-pink)"
}, {
  icon: "truck",
  title: "Recicladores aprovechan",
  copy: "Un gestor de confianza los retira y aprovecha. Ves el impacto cada mes.",
  color: "var(--resi-green)"
}];
const Steps = () => /*#__PURE__*/React.createElement("section", {
  style: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "72px 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center",
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 40,
    fontWeight: 700,
    margin: "10px 0 0",
    color: "var(--resi-navy)",
    letterSpacing: "-.01em"
  }
}, "Cuatro pasos. Cero esfuerzo extra.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20
  }
}, STEPS.map((s, i) => /*#__PURE__*/React.createElement(Card, {
  key: i,
  hoverable: true,
  padding: 22,
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    minHeight: 220
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 56,
    height: 56,
    borderRadius: "var(--r-md)",
    background: s.color,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: s.icon,
  size: 28
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 11,
    fontWeight: 800,
    color: "var(--resi-fg-3)",
    letterSpacing: ".12em"
  }
}, "PASO ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20,
    margin: 0,
    color: "var(--resi-navy)"
  }
}, s.title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 14,
    lineHeight: 1.5,
    margin: 0,
    color: "var(--resi-fg-2)"
  }
}, s.copy)))));
window.Steps = Steps;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Steps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/SubBrandGrid.jsx
try { (() => {
// ============================================================
// SubBrandGrid — product family using real PNG logos
// ============================================================
const SUB_BRANDS = [{
  logo: "resiCubo.png",
  name: "resiCUBO",
  tag: "Mini clasificador",
  copy: "4 compartimentos, 8 categorías. Vive en tu cocina.",
  color: "var(--resi-blue)"
}, {
  logo: "resiCuboPlus.png",
  name: "resiCUBO+",
  tag: "Versión grande",
  copy: "Mismo sistema, más capacidad. Para hogares grandes u oficinas.",
  color: "var(--resi-blue)"
}, {
  logo: "resiBote.png",
  name: "resiBOTE",
  tag: "Contenedor del edificio",
  copy: "100× resiCUBO. Almacena clasificado y avisa al gestor.",
  color: "var(--resi-orange)"
}, {
  logo: "resiTubo.png",
  name: "resiTUBO",
  tag: "Ducto automatizado",
  copy: "Entrega tus residuos desde tu piso, sin bajar al shut.",
  color: "var(--resi-orange)"
}, {
  logo: "resiShut.png",
  name: "resiSHUT",
  tag: "Cuarto de residuos",
  copy: "El espacio limpio donde vive el resiBOTE.",
  color: "var(--resi-blue)"
}, {
  logo: "resiLona.png",
  name: "resiLONA",
  tag: "Bolsa reutilizable",
  copy: "La tela dentro del resiCUBO. Reemplaza la bolsa desechable.",
  color: "var(--resi-pink)"
}, {
  logo: "resiClub.png",
  name: "resiCLUB",
  tag: "Comunidad",
  copy: "Cualquiera que cuida lo importante es parte de la familia.",
  color: "var(--resi-green)"
}, {
  logo: "resiTips.png",
  name: "resiTIPS",
  tag: "Canal social",
  copy: "Tips, datos y reels para cuidar lo importante.",
  color: "var(--resi-pink)"
}, {
  logo: "resiKids.png",
  name: "resiKIDS",
  tag: "Contexto escolar",
  copy: "Para enseñarle a los más pequeños a cuidar el planeta.",
  color: "var(--resi-orange)"
}];
const SubBrandGrid = ({
  onPick,
  limit
}) => {
  const items = limit ? SUB_BRANDS.slice(0, limit) : SUB_BRANDS;
  const cols = items.length <= 4 ? items.length : items.length === 9 ? 3 : 5;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "32px 32px 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols >= 5 ? 5 : cols}, 1fr)`,
      gap: 16
    }
  }, items.map((b, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    hoverable: true,
    padding: 0,
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    },
    onClick: () => onPick && onPick(b)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--resi-bg-soft)",
      aspectRatio: "5/4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/logos/${b.logo}`,
    alt: b.name,
    style: {
      maxHeight: "88%",
      maxWidth: "70%",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: b.color
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: ".1em",
      color: "var(--resi-fg-3)",
      textTransform: "uppercase"
    }
  }, b.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--resi-navy)"
    }
  }, b.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--resi-fg-2)",
      margin: 0,
      lineHeight: 1.45
    }
  }, b.copy))))));
};
window.SubBrandGrid = SubBrandGrid;
window.SUB_BRANDS = SUB_BRANDS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/SubBrandGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ui.jsx
try { (() => {
// ============================================================
// resi UI primitives — shared across all screens.
// Exports to window so other Babel scripts can use them.
// ============================================================

const Icon = ({
  name,
  size = 20,
  stroke = 1.75,
  style
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size,
    display: "inline-block",
    strokeWidth: stroke,
    color: "currentColor",
    verticalAlign: "middle",
    ...style
  }
});

// Button --------------------------------------------------------
const Button = ({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  onClick,
  type = "button",
  style,
  full = false
}) => {
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    cursor: "pointer",
    borderRadius: "var(--r-pill)",
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "all var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    width: full ? "100%" : "auto"
  };
  const sizes = {
    sm: {
      height: 36,
      padding: "0 16px",
      fontSize: 13
    },
    md: {
      height: 44,
      padding: "0 22px",
      fontSize: 14
    },
    lg: {
      height: 52,
      padding: "0 28px",
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: "var(--resi-green)",
      color: "#fff",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--resi-navy)",
      color: "#fff"
    },
    outline: {
      background: "#fff",
      color: "var(--resi-navy)",
      boxShadow: "inset 0 0 0 1.5px var(--resi-navy)"
    },
    ghost: {
      background: "transparent",
      color: "var(--resi-navy)"
    },
    onDark: {
      background: "#fff",
      color: "var(--resi-navy)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverOverlay = {
    primary: {
      background: "var(--resi-green-dark)",
      boxShadow: "var(--shadow-md)"
    },
    secondary: {
      background: "#000028"
    },
    outline: {
      background: "var(--resi-navy)",
      color: "#fff"
    },
    ghost: {
      background: "var(--resi-bg-soft)"
    },
    onDark: {
      background: "var(--resi-bg-soft)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover ? hoverOverlay[variant] : {}),
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(Icon, {
    name: iconLeft,
    size: size === "lg" ? 18 : 16
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: size === "lg" ? 18 : 16
  }));
};

// Card ----------------------------------------------------------
const Card = ({
  children,
  variant = "default",
  style,
  onClick,
  hoverable = false,
  padding = 24
}) => {
  const variants = {
    default: {
      background: "#fff",
      color: "var(--resi-navy)",
      boxShadow: "var(--shadow-sm)"
    },
    soft: {
      background: "var(--resi-bg-soft)",
      color: "var(--resi-navy)"
    },
    feature: {
      background: "var(--resi-navy)",
      color: "#fff"
    },
    bordered: {
      background: "#fff",
      color: "var(--resi-navy)",
      boxShadow: "inset 0 0 0 1px var(--resi-line)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const lift = hoverable && hover ? {
    transform: "translateY(-3px)",
    boxShadow: "var(--shadow-md)"
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      borderRadius: "var(--r-lg)",
      padding,
      transition: "all var(--dur-base) var(--ease-out)",
      cursor: onClick ? "pointer" : "default",
      ...variants[variant],
      ...lift,
      ...style
    }
  }, children);
};

// Chip / Badge -------------------------------------------------
const Chip = ({
  children,
  color = "soft",
  icon
}) => {
  const palette = {
    soft: {
      background: "var(--resi-bg-soft)",
      color: "var(--resi-navy)",
      dot: null
    },
    blue: {
      background: "rgba(0,156,215,.12)",
      color: "var(--resi-blue-dark)",
      dot: "var(--resi-blue)"
    },
    green: {
      background: "rgba(76,183,72,.14)",
      color: "var(--resi-green-dark)",
      dot: "var(--resi-green)"
    },
    orange: {
      background: "rgba(241,93,42,.13)",
      color: "var(--resi-orange-dark)",
      dot: "var(--resi-orange)"
    },
    pink: {
      background: "rgba(204,108,162,.16)",
      color: "var(--resi-pink-dark)",
      dot: "var(--resi-pink)"
    }
  }[color];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 14px",
      borderRadius: "var(--r-pill)",
      fontSize: 13,
      fontWeight: 600,
      background: palette.background,
      color: palette.color,
      fontFamily: "var(--font-body)"
    }
  }, palette.dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: palette.dot
    }
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14
  }), children);
};
const Badge = ({
  children,
  tone = "navy"
}) => {
  const tones = {
    navy: {
      background: "var(--resi-navy)",
      color: "#fff"
    },
    green: {
      background: "var(--resi-green)",
      color: "#fff"
    },
    blue: {
      background: "var(--resi-blue)",
      color: "#fff"
    },
    orange: {
      background: "var(--resi-orange)",
      color: "#fff"
    },
    outline: {
      background: "#fff",
      color: "var(--resi-navy)",
      boxShadow: "inset 0 0 0 1px var(--resi-line)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--r-pill)",
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      fontFamily: "var(--font-body)",
      ...tones[tone]
    }
  }, children);
};
const Eyebrow = ({
  children,
  color = "var(--resi-green)"
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color,
    margin: 0
  }
}, children);

// Photo placeholder — branded, with a soft pattern
const PhotoSlot = ({
  ratio = "16/10",
  radius = "var(--r-lg)",
  label = "Foto",
  tone = "soft",
  style
}) => {
  const tones = {
    soft: {
      background: "linear-gradient(135deg, #EEF0F4 0%, #D9DEE8 100%)",
      color: "var(--resi-fg-3)"
    },
    green: {
      background: "linear-gradient(135deg, rgba(76,183,72,.18) 0%, rgba(76,183,72,.06) 100%)",
      color: "var(--resi-green-dark)"
    },
    navy: {
      background: "var(--resi-navy)",
      color: "rgba(255,255,255,.65)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      fontWeight: 700,
      ...tones[tone],
      ...style
    }
  }, "[ ", label, " ]");
};

// register every icon after a paint
const RefreshIcons = () => {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return null;
};
Object.assign(window, {
  Button,
  Card,
  Chip,
  Badge,
  Eyebrow,
  Icon,
  PhotoSlot,
  RefreshIcons
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ui.jsx", error: String((e && e.message) || e) }); }

})();
