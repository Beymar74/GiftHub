// ─────────────────────────────────────────────────────────────
// Footer.jsx
// Pie de página con columnas de links, redes sociales y copyright
// ─────────────────────────────────────────────────────────────

import logo from "./assets/logo.png";
import { COLORS } from "./constants";

const footerColumns = [
  {
    title: "Plataforma",
    links: ["Asesor IA", "Catálogo", "Cómo Funciona", "Precios"],
  },
  {
    title: "Empresa",
    links: ["Sobre Nosotros", "Blog", "Prensa", "Contacto"],
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos de Uso", "Cookies", "Seguridad"],
  },
];

const socialLinks = ["ig", "fb", "tw"];

export default function Footer() {
  return (
    <footer style={{ background: COLORS.bordeaux, color: "white" }}>

      {/* ── Contenido principal ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 40px 48px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px",
        }}
      >
        {/* Columna de marca */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <img
              src={logo}
              alt="Memora"
              style={{ height: "40px", width: "auto", display: "block" }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "white",
              }}
            >
              Memora
            </span>
          </div>

          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "280px",
              marginBottom: "28px",
            }}
          >
            Tu asesor inteligente de regalos. Conectamos emociones con momentos
            únicos, impulsados por inteligencia artificial.
          </p>

          {/* Redes sociales */}
          <div style={{ display: "flex", gap: "12px" }}>
            {socialLinks.map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.75rem", fontWeight: 700,
                  textDecoration: "none", textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = COLORS.garnet;
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Columnas de links */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4
              style={{
                fontSize: "0.75rem", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: COLORS.gold, marginBottom: "20px",
              }}
            >
              {col.title}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Divisor ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* ── Barra inferior ── */}
      <div
        style={{
          maxWidth: "1200px", margin: "0 auto",
          padding: "24px 40px",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "12px",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
          © 2026 Memora — PREPE · Grupo Explosión Pressman · EMI Bolivia
        </p>
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
          Hecho con ♥ en La Paz, Bolivia
        </p>
      </div>

    </footer>
  );
}