// ============================================================
// ResiFooter — shared minimalist footer for both routes.
// Navy background, resi text wordmark (white r,s,i + green e),
// two link columns, a subtle cross-audience link, and a copyright bar.
// `variant`: "admins" | "hogares" — only the link labels + cross-link differ.
// ============================================================
const RESI_FOOTER_CONFIG = {
  admins: {
    producto: ["Cómo funciona", "Planes", "Calculadora de ahorro"],
    cross: { label: "¿Eres un hogar? Conoce resi para hogares", to: "hogares" }
  },
  hogares: {
    producto: ["Cómo funciona", "Planes", "Calculadora de reciclaje"],
    cross: { label: "¿Eres administrador? Conoce resi para edificios", to: "administradores" }
  }
};

const ResiFooter = ({ variant = "admins" }) => {
  const cfg = RESI_FOOTER_CONFIG[variant] || RESI_FOOTER_CONFIG.admins;
  const resiLinks = ["Nosotros", "Contacto", "Términos"];

  const linkStyle = { color: "rgba(255,255,255,.7)", fontSize: 14, fontWeight: 500 };

  return (
    <footer style={{ background: "var(--resi-navy)", color: "rgba(255,255,255,.7)" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "72px 32px 40px",
        display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 48
      }}>
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <img src={asset("assets/logos/resi-blanco.png")} alt="resi"
          style={{ height: 34, width: "auto", alignSelf: "flex-start" }} />
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 300, color: "rgba(255, 255, 255, 0.7)" }}>
            Nuestra misión es cuidar los residuos que separaste para reciclarlos.
          </p>
        </div>

        {/* Producto */}
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff",
            fontSize: 15, marginBottom: 16
          }}>Producto</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {cfg.producto.map((x, j) => <li key={j}><a href="#" style={linkStyle}>{x}</a></li>)}
          </ul>
        </div>

        {/* Resi */}
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff",
            fontSize: 15, marginBottom: 16
          }}>resi
</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {resiLinks.map((x, j) => <li key={j}><a href="#" style={linkStyle}>{x}</a></li>)}
          </ul>
        </div>
      </div>

      {/* Cross-audience link */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 8px" }}>
        <a href="#" onClick={(e) => {e.preventDefault();(window.__resiSetRoute || (() => {}))(cfg.cross.to);}} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 14, fontWeight: 600, color: "var(--resi-green)"
        }}>
          {cfg.cross.label}
          <Icon name="arrow-right" size={16} stroke={2.2} />
        </a>
      </div>

      {/* Copyright bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,.1)",
        maxWidth: 1200, margin: "0 auto", padding: "20px 32px",
        fontSize: 12.5, color: "rgba(255,255,255,.55)"
      }}>
        © 2026 resi · Hecho con cuidado en Colombia
      </div>
    </footer>);

};

window.ResiFooter = ResiFooter;