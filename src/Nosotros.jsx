import Navbar from './Navbar';
import Footer from './Footer';
import { COLORS } from './constants';

export default function Nosotros() {
  return (
    <div style={{ minHeight: "100vh", background: COLORS.beige, position: "relative", display: "flex", flexDirection: "column" }}>
      {/* ── Header ── */}
      <Navbar />

      {/* ── Contenido Principal ── */}
      <main style={{ flex: 1, paddingTop: "140px", paddingBottom: "80px", paddingLeft: "40px", paddingRight: "40px", maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        
        {/* Título y descripción */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem", fontWeight: 900, color: COLORS.bordeaux, marginBottom: "20px" }}>
            Sobre Memora
          </h1>
          <p style={{ fontSize: "1.15rem", color: COLORS.chocolate, opacity: 0.8, maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Dejamos las adivinanzas en el pasado. Usamos la tecnología para que tú solo te preocupes por disfrutar el momento de sorprender a quien amas.
          </p>
        </div>

        {/* Misión y Visión */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {/* Tarjeta Misión */}
          <div className="card-hover" style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 10px 30px rgba(90,15,36,0.05)", border: `1px solid ${COLORS.gold}30` }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: COLORS.garnet, marginBottom: "16px" }}>Nuestra Misión</h2>
            <p style={{ color: COLORS.chocolate, lineHeight: 1.7, opacity: 0.9 }}>
              Transformar la forma en que el mundo regala, utilizando tecnología inteligente para garantizar que cada obsequio entregado genere una conexión auténtica y una sonrisa real.
            </p>
          </div>

          {/* Tarjeta Visión */}
          <div className="card-hover" style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 10px 30px rgba(90,15,36,0.05)", border: `1px solid ${COLORS.gold}30` }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: COLORS.garnet, marginBottom: "16px" }}>Nuestra Visión</h2>
            <p style={{ color: COLORS.chocolate, lineHeight: 1.7, opacity: 0.9 }}>
              Convertirnos en el asistente de regalos de cabecera a nivel global, demostrando que la empatía y la inteligencia artificial pueden trabajar juntas para celebrar las relaciones humanas.
            </p>
          </div>
        </div>

      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}