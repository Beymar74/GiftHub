// ─────────────────────────────────────────────────────────────
// Navbar.jsx
// Barra de navegación fija con efecto scroll y logo
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <-- IMPORTANTE: Importamos Link
import logo from "./assets/logo.png";
import { COLORS } from "./constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Definimos las rutas para cada botón
  const navItems = [
    { name: "Cómo Funciona", path: "/" },
    { name: "Asesor IA", path: "/asesor" },
    { name: "Nosotros", path: "/nosotros" } // <-- Aquí está tu ruta
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 40px" : "20px 40px",
        background: scrolled ? "rgba(245,230,208,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(188,153,104,0.2)" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo + nombre */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <img
          src={logo}
          alt="Memora"
          style={{ height: "40px", width: "auto", display: "block" }}
        />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: COLORS.bordeaux,
          }}
        >
          Memora
        </span>
      </Link>

      {/* Links de navegación */}
      <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {navItems.map((item) => (
          <Link key={item.name} to={item.path} className="nav-link">
            {item.name}
          </Link>
        ))}
        <button
          className="btn-primary"
          style={{ padding: "10px 24px", borderRadius: "100px", fontSize: "0.85rem" }}
        >
          Comenzar gratis
        </button>
      </div>
    </nav>
  );
}