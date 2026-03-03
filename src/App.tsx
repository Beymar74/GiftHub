import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";

const COLORS = {
  garnet: "#8E1B3A",
  bordeaux: "#5A0F24",
  crimson: "#AB3A50",
  chocolate: "#5C3A2E",
  gold: "#BC9968",
  beige: "#F5E6D0",
  white: "#FFFFFF",
  gray: "#B0B0B0",
  black: "#000000",
};

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(-40px)", right: "translateX(40px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
    }}>{children}</div>
  );
};

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:"100%",height:"100%"}}>
    <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);
const SparkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:"100%",height:"100%"}}>
    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"/>
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{width:"100%",height:"100%"}}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:"100%",height:"100%"}}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"16px",height:"16px"}}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const testimonials = [
  { name: "Valentina R.", role: "Usuaria Premium", text: "Encontré el regalo perfecto para mi mamá en menos de 5 minutos. La IA entendió exactamente lo que buscaba.", avatar: "V" },
  { name: "Carlos M.", role: "Cliente Frecuente", text: "Nunca pensé que regalar pudiera ser tan fácil y emotivo. Memora cambió cómo expreso mis afectos.", avatar: "C" },
  { name: "Sofía L.", role: "Usuaria Verificada", text: "El análisis emocional es increíble. El regalo llegó perfecto y mi pareja quedó sin palabras.", avatar: "S" },
];

const steps = [
  { icon: <ChatIcon />, num: "01", title: "Cuéntanos la ocasión", desc: "Describe la persona, el momento especial y tu presupuesto. La IA escucha cada detalle con atención." },
  { icon: <SparkIcon />, num: "02", title: "La IA entra en acción", desc: "Nuestro algoritmo analiza emociones, personalidad y contexto para encontrar la combinación perfecta." },
  { icon: <GiftIcon />, num: "03", title: "Recibe tu selección", desc: "Una curaduría personalizada de regalos que realmente conectan y crean momentos inolvidables." },
];

const features = [
  { icon: "💎", title: "Análisis Emocional", desc: "No solo datos, sino el alma detrás de cada regalo." },
  { icon: "⚡", title: "Respuesta Inmediata", desc: "Recomendaciones en segundos, disponible 24/7." },
  { icon: "🎯", title: "Precisión Total", desc: "Adapta cada sugerencia al perfil exacto del destinatario." },
  { icon: "🔒", title: "Pago Seguro", desc: "Transacciones protegidas y seguimiento en tiempo real." },
];

const FloatingOrb = ({ size, top, left, color, delay }) => (
  <div style={{
    position: "absolute", width: size, height: size, borderRadius: "50%",
    top, left, background: `radial-gradient(circle at 30% 30%, ${color}40, ${color}08)`,
    filter: "blur(1px)", animation: `float ${3 + delay}s ease-in-out infinite alternate`,
    animationDelay: `${delay}s`, pointerEvents: "none",
  }} />
);

// ─── Sección IDs para navegación con teclado ───────────────────────────────
const SECTION_IDS = ["hero", "como-funciona", "caracteristicas", "testimonios", "cta"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [chatStep, setChatStep] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const fullText = "¿Para quién es este regalo especial?";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Seguimiento de sección activa con IntersectionObserver ─────────────
  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setCurrentSection(idx); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // ─── Navegación completa por teclado: PgUp, PgDn, Home, End ─────────────
  useEffect(() => {
    const scrollTo = (idx) => {
      const clamped = Math.max(0, Math.min(idx, SECTION_IDS.length - 1));
      document.getElementById(SECTION_IDS[clamped])?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(clamped);
    };
    const handleKeyDown = (e) => {
      // No activar si el usuario está escribiendo en un input
      if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
      switch (e.key) {
        case "PageDown": e.preventDefault(); setCurrentSection(prev => { scrollTo(prev + 1); return prev; }); break;
        case "PageUp":   e.preventDefault(); setCurrentSection(prev => { scrollTo(prev - 1); return prev; }); break;
        case "Home":     e.preventDefault(); scrollTo(0); break;
        case "End":      e.preventDefault(); scrollTo(SECTION_IDS.length - 1); break;
        default: break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typedText === fullText) {
      const t = setTimeout(() => setChatStep(1), 800);
      return () => clearTimeout(t);
    }
  }, [typedText]);

  useEffect(() => {
    if (chatStep === 1) {
      const t = setTimeout(() => setChatStep(2), 1500);
      return () => clearTimeout(t);
    }
    if (chatStep === 2) {
      const t = setTimeout(() => setChatStep(3), 1800);
      return () => clearTimeout(t);
    }
    if (chatStep === 3) {
      const t = setTimeout(() => setChatStep(4), 1600);
      return () => clearTimeout(t);
    }
  }, [chatStep]);

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --garnet: #8E1B3A; --bordeaux: #5A0F24; --crimson: #AB3A50;
      --chocolate: #5C3A2E; --gold: #BC9968; --beige: #F5E6D0;
    }
    body { font-family: 'DM Sans', sans-serif; background: var(--beige); color: var(--chocolate); overflow-x: hidden; }
    @keyframes float { from { transform: translateY(0px) rotate(0deg); } to { transform: translateY(-20px) rotate(5deg); } }
    @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.5); opacity: 0; } }
    @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
    @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
    @keyframes gradientShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    .hero-gradient {
      background: linear-gradient(135deg, var(--beige) 0%, #f0d8bc 40%, #e8c8a8 70%, var(--beige) 100%);
      background-size: 200% 200%;
      animation: gradientShift 8s ease infinite;
    }
    .text-shimmer {
      background: linear-gradient(90deg, var(--garnet), var(--gold), var(--crimson), var(--garnet));
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }
    .btn-primary {
      background: linear-gradient(135deg, var(--garnet), var(--bordeaux));
      color: white;
      border: none;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      letter-spacing: 0.03em;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0; left: -100%; width: 100%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s ease;
    }
    .btn-primary:hover::before { left: 100%; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 20px 40px rgba(142,27,58,0.4); }
    .card-hover { transition: transform 0.4s ease, box-shadow 0.4s ease; }
    .card-hover:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(90,15,36,0.15); }
    .nav-link {
      position: relative; font-weight: 500; font-size: 0.9rem; letter-spacing: 0.05em;
      text-transform: uppercase; color: var(--chocolate); text-decoration: none;
      padding: 4px 0;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px;
      background: var(--garnet); transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }
    .chat-bubble-ai {
      background: white;
      border-radius: 18px 18px 18px 4px;
      padding: 12px 16px;
      box-shadow: 0 4px 16px rgba(90,15,36,0.1);
      font-size: 0.9rem;
      color: var(--chocolate);
      max-width: 260px;
      animation: fadeSlideUp 0.4s ease;
    }
    .chat-bubble-user {
      background: linear-gradient(135deg, var(--garnet), var(--crimson));
      border-radius: 18px 18px 4px 18px;
      padding: 12px 16px;
      box-shadow: 0 4px 16px rgba(142,27,58,0.3);
      font-size: 0.9rem;
      color: white;
      max-width: 220px;
      align-self: flex-end;
      animation: fadeSlideUp 0.4s ease;
    }
    .typing-dots span {
      display: inline-block; width: 6px; height: 6px; border-radius: 50%;
      background: var(--gray); margin: 0 2px;
      animation: blink 1.2s infinite;
    }
    .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
    .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
    .gradient-border {
      background: linear-gradient(white, white) padding-box,
                  linear-gradient(135deg, var(--gold), var(--garnet)) border-box;
      border: 2px solid transparent;
    }
    .stat-number {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      font-weight: 900;
      color: var(--garnet);
      line-height: 1;
    }
    .section-label {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
    }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--beige); }
    ::-webkit-scrollbar-thumb { background: var(--garnet); border-radius: 3px; }
  `;

  return (
    <>
      <style>{css}</style>
      <div style={{ minHeight: "100vh", background: COLORS.beige, position: "relative" }}>

        {/* ── Indicador de sección flotante (puntos laterales) ── */}
        <div style={{
          position: "fixed", right: "24px", top: "50%", transform: "translateY(-50%)",
          zIndex: 200, display: "flex", flexDirection: "column", gap: "10px", alignItems: "center",
        }}>
          {SECTION_IDS.map((id, i) => (
            <button
              key={id}
              onClick={() => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setCurrentSection(i); }}
              title={["Inicio", "Cómo Funciona", "Características", "Testimonios", "Comenzar"][i]}
              style={{
                width: currentSection === i ? "10px" : "6px",
                height: currentSection === i ? "10px" : "6px",
                borderRadius: "50%",
                background: currentSection === i ? COLORS.garnet : `${COLORS.garnet}40`,
                border: currentSection === i ? `2px solid ${COLORS.garnet}` : "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
                boxShadow: currentSection === i ? `0 0 8px ${COLORS.garnet}80` : "none",
              }}
            />
          ))}
        </div>



        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? "12px 40px" : "20px 40px",
          background: scrolled ? "rgba(245,230,208,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(188,153,104,0.2)" : "none",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "all 0.4s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={logo} alt="Memora" style={{ height: "40px", width: "auto", display: "block" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: COLORS.bordeaux }}>Memora</span>
          </div>

          <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
            {["Cómo Funciona", "Asesor IA", "Nosotros"].map(item => (
              <a key={item} href="#" className="nav-link">{item}</a>
            ))}
            <button className="btn-primary" style={{ padding: "10px 24px", borderRadius: "100px", fontSize: "0.85rem" }}>
              Comenzar gratis
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section id="hero" className="hero-gradient" style={{ minHeight: "85vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "100px", paddingBottom: "60px" }}>
          <FloatingOrb size="300px" top="-80px" left="-80px" color={COLORS.garnet} delay={0} />
          <FloatingOrb size="200px" top="60%" left="75%" color={COLORS.gold} delay={1} />
          <FloatingOrb size="150px" top="20%" left="80%" color={COLORS.crimson} delay={2} />
          <FloatingOrb size="100px" top="70%" left="5%" color={COLORS.chocolate} delay={0.5} />

          {/* Decorative circle behind content */}
          <div style={{
            position: "absolute", right: "-10%", top: "50%", transform: "translateY(-50%)",
            width: "600px", height: "600px", borderRadius: "50%",
            background: `radial-gradient(circle at 40% 40%, ${COLORS.crimson}15, transparent 70%)`,
            border: `1px solid ${COLORS.gold}20`,
          }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            {/* LEFT */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${COLORS.garnet}12`, border: `1px solid ${COLORS.garnet}30`, borderRadius: "100px", padding: "6px 16px", marginBottom: "32px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: COLORS.garnet, animation: "pulse-ring 1.5s ease infinite" }} />
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: COLORS.garnet, letterSpacing: "0.05em" }}>IA disponible 24/7</span>
              </div>

              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.2rem", fontWeight: 900, lineHeight: 1.05, marginBottom: "28px", color: COLORS.bordeaux }}>
                El regalo perfecto,{" "}
                <em style={{ fontStyle: "italic" }}>
                  <span className="text-shimmer">siempre.</span>
                </em>
              </h1>

              <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: COLORS.chocolate, opacity: 0.85, marginBottom: "44px", maxWidth: "480px", fontWeight: 300 }}>
                Nuestra IA analiza emociones, personalidades y ocasiones para encontrar el regalo que realmente conecta. Deja de adivinar. Empieza a sorprender.
              </p>

              <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                <button className="btn-primary" style={{ padding: "18px 40px", borderRadius: "100px", fontSize: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span>Probar Asesor IA</span>
                  <span style={{ fontSize: "1.1rem" }}>→</span>
                </button>
                <button style={{
                  background: "transparent", border: `1.5px solid ${COLORS.chocolate}40`,
                  color: COLORS.chocolate, padding: "17px 32px", borderRadius: "100px",
                  fontSize: "0.95rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500, transition: "all 0.3s ease",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = COLORS.garnet; e.currentTarget.style.color = COLORS.garnet; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = `${COLORS.chocolate}40`; e.currentTarget.style.color = COLORS.chocolate; }}
                >
                  Ver cómo funciona
                </button>
              </div>

              {/* Social proof */}
              <div style={{ marginTop: "48px", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ display: "flex" }}>
                  {["V", "C", "S", "M"].map((l, i) => (
                    <div key={l} style={{
                      width: "36px", height: "36px", borderRadius: "50%", border: `2px solid ${COLORS.beige}`,
                      background: `linear-gradient(135deg, ${COLORS.garnet}, ${COLORS.crimson})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", fontSize: "0.8rem", fontWeight: 700,
                      marginLeft: i > 0 ? "-10px" : "0", zIndex: 4 - i,
                    }}>{l}</div>
                  ))}
                </div>
                <div>
                  <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                    {[...Array(5)].map((_, i) => <div key={i} style={{ color: COLORS.gold }}><StarIcon /></div>)}
                  </div>
                  <span style={{ fontSize: "0.8rem", color: COLORS.chocolate, opacity: 0.7 }}>+2,400 regalos perfectos entregados</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Chat mockup */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{
                background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)",
                borderRadius: "28px", padding: "28px", width: "380px",
                boxShadow: "0 32px 80px rgba(90,15,36,0.15), 0 0 0 1px rgba(188,153,104,0.2)",
                display: "flex", flexDirection: "column", gap: "0",
              }}>
                {/* Chat header */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "20px", borderBottom: `1px solid ${COLORS.gold}20`, marginBottom: "20px" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: `linear-gradient(135deg, ${COLORS.garnet}, ${COLORS.bordeaux})`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <div style={{ width: "22px", height: "22px", color: "white" }}><HeartIcon /></div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: COLORS.bordeaux }}>Memora IA</div>
                    <div style={{ fontSize: "0.75rem", color: "#22c55e", display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
                      En línea ahora
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", minHeight: "220px" }}>
                  <div className="chat-bubble-ai">
                    {typedText}<span style={{ animation: typedText === fullText ? "none" : "blink 0.7s infinite", marginLeft: "2px" }}>|</span>
                  </div>

                  {chatStep >= 1 && (
                    <div className="chat-bubble-user">Para mi pareja 💕 cumple 30 años</div>
                  )}

                  {chatStep >= 2 && (
                    <div className="chat-bubble-ai">¡Qué ocasión tan especial! ¿Qué le apasiona más: la aventura, el arte, la gastronomía o la naturaleza?</div>
                  )}

                  {chatStep >= 3 && (
                    <div className="chat-bubble-user">Le encanta la naturaleza y los viajes ✈️</div>
                  )}

                  {chatStep >= 4 && (
                    <div className="chat-bubble-ai" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div className="typing-dots"><span /><span /><span /></div>
                      <span style={{ fontSize: "0.8rem", color: COLORS.gray }}>Analizando el perfil...</span>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div style={{ marginTop: "16px", display: "flex", gap: "8px", background: `${COLORS.beige}80`, borderRadius: "100px", padding: "10px 10px 10px 20px", border: `1px solid ${COLORS.gold}30` }}>
                  <span style={{ flex: 1, fontSize: "0.85rem", color: COLORS.gray }}>Escribe tu respuesta...</span>
                  <button style={{
                    width: "34px", height: "34px", borderRadius: "50%", border: "none",
                    background: `linear-gradient(135deg, ${COLORS.garnet}, ${COLORS.bordeaux})`,
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ color: "white", fontSize: "1rem" }}>↑</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.5 }}>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: COLORS.chocolate }}>Scroll</span>
            <div style={{ width: "1px", height: "40px", background: `linear-gradient(${COLORS.garnet}, transparent)` }} />
          </div>
        </section>



        {/* HOW IT WORKS */}
        <section id="como-funciona" style={{ padding: "72px 40px", background: COLORS.white, position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: "10%", right: "5%", width: "400px", height: "400px",
            borderRadius: "50%", background: `${COLORS.gold}08`, border: `1px solid ${COLORS.gold}15`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeIn direction="up">
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <div className="section-label" style={{ marginBottom: "12px" }}>El proceso</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, color: COLORS.bordeaux, marginBottom: "16px" }}>
                  Tres pasos hacia el<br /><em>regalo perfecto</em>
                </h2>
                <p style={{ fontSize: "1.05rem", color: COLORS.chocolate, opacity: 0.7, maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
                  Un proceso diseñado para que dar un regalo sea una experiencia tan especial como recibirlo.
                </p>
              </div>
            </FadeIn>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
              {steps.map((step, i) => (
                <FadeIn key={step.num} direction="up" delay={i * 150}>
                  <div className="card-hover gradient-border" style={{
                    background: "white", borderRadius: "24px", padding: "40px 32px",
                    position: "relative", cursor: "default",
                  }}>
                    <div style={{
                      position: "absolute", top: "24px", right: "24px",
                      fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 900,
                      color: `${COLORS.garnet}08`, lineHeight: 1,
                    }}>{step.num}</div>

                    <div style={{
                      width: "56px", height: "56px", borderRadius: "16px",
                      background: `linear-gradient(135deg, ${COLORS.garnet}15, ${COLORS.crimson}10)`,
                      border: `1px solid ${COLORS.garnet}20`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: COLORS.garnet, marginBottom: "24px", padding: "14px",
                    }}>{step.icon}</div>

                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: COLORS.bordeaux, marginBottom: "12px" }}>{step.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: COLORS.chocolate, opacity: 0.75, lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES BENTO */}
        <section id="caracteristicas" style={{ padding: "48px 40px", background: COLORS.beige, position: "relative" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeIn direction="up">
              <div style={{ marginBottom: "28px" }}>
                <div className="section-label" style={{ marginBottom: "12px" }}>Por qué Memora</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 900, color: COLORS.bordeaux, maxWidth: "500px", lineHeight: 1.1 }}>
                  No solo recomendamos,{" "}
                  <span style={{ color: COLORS.garnet, fontStyle: "italic" }}>conectamos.</span>
                </h2>
              </div>
            </FadeIn>

            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "24px", alignItems: "stretch" }}>
              {/* Main feature */}
              <FadeIn direction="left" delay={0}>
                <div className="card-hover" style={{
                  background: `linear-gradient(135deg, ${COLORS.bordeaux}, ${COLORS.garnet})`,
                  borderRadius: "28px", padding: "36px 40px",
                  position: "relative", overflow: "hidden", cursor: "default", height: "100%",
                }}>
                  <div style={{
                    position: "absolute", bottom: "-60px", right: "-60px",
                    width: "300px", height: "300px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                  }} />
                  <div style={{
                    position: "absolute", top: "40px", right: "40px",
                    width: "80px", height: "80px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                  }} />

                  <div style={{ fontSize: "2.5rem", marginBottom: "24px" }}>🧠</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "white", marginBottom: "20px", lineHeight: 1.2 }}>
                    Análisis Emocional<br />Avanzado
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, fontSize: "1rem", maxWidth: "380px" }}>
                    La IA interpreta las emociones detrás de cada ocasión. Analiza el contexto de la relación, la personalidad del destinatario y el impacto sentimental deseado para ir más allá de un simple catálogo.
                  </p>

                  <div style={{ marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {["Emocional", "Contextual", "Personalizado"].map(tag => (
                      <span key={tag} style={{
                        background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                        color: "white", padding: "6px 14px", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 500,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Columna derecha — beneficios apilados verticalmente */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {features.slice(1).map((f, i) => (
                  <FadeIn key={f.title} direction="right" delay={i * 120}>
                    <div className="card-hover" style={{
                      background: "white", borderRadius: "20px", padding: "20px 24px",
                      display: "flex", gap: "18px", alignItems: "center", cursor: "default",
                      borderLeft: `3px solid ${COLORS.garnet}30`,
                    }}>
                      <div style={{
                        fontSize: "1.5rem", width: "48px", height: "48px", flexShrink: 0,
                        background: `${COLORS.garnet}10`, borderRadius: "12px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>{f.icon}</div>
                      <div>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: COLORS.bordeaux, marginBottom: "4px" }}>{f.title}</h4>
                        <p style={{ fontSize: "0.875rem", color: COLORS.chocolate, opacity: 0.7, lineHeight: 1.55 }}>{f.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonios" style={{ padding: "120px 40px", background: COLORS.white }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <FadeIn direction="up">
              <div className="section-label" style={{ marginBottom: "12px" }}>Testimonios</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, color: COLORS.bordeaux, marginBottom: "60px" }}>
                Momentos que <em>importan</em>
              </h2>
            </FadeIn>

            <div style={{ position: "relative", minHeight: "220px" }}>
              {testimonials.map((t, i) => (
                <div key={t.name} style={{
                  position: i === 0 ? "relative" : "absolute", top: 0, left: 0, right: 0,
                  opacity: activeTestimonial === i ? 1 : 0,
                  transform: activeTestimonial === i ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  pointerEvents: activeTestimonial === i ? "auto" : "none",
                }}>
                  <div style={{
                    background: `${COLORS.beige}60`, border: `1px solid ${COLORS.gold}30`,
                    borderRadius: "24px", padding: "48px", maxWidth: "640px", margin: "0 auto",
                  }}>
                    <div style={{ fontSize: "2.5rem", color: COLORS.gold, marginBottom: "20px", lineHeight: 1, fontFamily: "Georgia, serif" }}>"</div>
                    <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: COLORS.chocolate, fontStyle: "italic", marginBottom: "28px" }}>{t.text}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                      <div style={{
                        width: "44px", height: "44px", borderRadius: "50%",
                        background: `linear-gradient(135deg, ${COLORS.garnet}, ${COLORS.crimson})`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "white", fontWeight: 700,
                      }}>{t.avatar}</div>
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontWeight: 600, color: COLORS.bordeaux }}>{t.name}</div>
                        <div style={{ fontSize: "0.8rem", color: COLORS.gray }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)} style={{
                  width: i === activeTestimonial ? "24px" : "8px", height: "8px", borderRadius: "100px",
                  background: i === activeTestimonial ? COLORS.garnet : `${COLORS.garnet}30`,
                  border: "none", cursor: "pointer", transition: "all 0.3s ease",
                }} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" style={{
          padding: "120px 40px", margin: "0 40px 80px",
          background: `linear-gradient(135deg, ${COLORS.bordeaux} 0%, ${COLORS.garnet} 50%, ${COLORS.crimson} 100%)`,
          borderRadius: "40px", position: "relative", overflow: "hidden", textAlign: "center",
        }}>
          <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
          <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

          <FadeIn direction="up">
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎁</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.2rem", fontWeight: 900, color: "white", marginBottom: "20px", lineHeight: 1.1 }}>
                El regalo perfecto<br />está a un clic
              </h2>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", marginBottom: "44px", maxWidth: "450px", margin: "0 auto 44px", lineHeight: 1.7 }}>
                Únete a más de 2,400 personas que ya encontraron la manera de sorprender de verdad.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <button style={{
                  background: "white", color: COLORS.garnet, border: "none",
                  padding: "18px 44px", borderRadius: "100px", fontSize: "1rem",
                  fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)"; }}
                >
                  Comenzar ahora — Es gratis
                </button>
                <button style={{
                  background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.4)",
                  padding: "17px 32px", borderRadius: "100px", fontSize: "0.95rem",
                  cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                  transition: "border-color 0.3s ease",
                }}
                  onMouseOver={e => e.currentTarget.style.borderColor = "white"}
                  onMouseOut={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"}
                >
                  Ver demostración
                </button>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FOOTER */}
        <footer style={{ background: COLORS.bordeaux, color: "white" }}>
          {/* Top footer */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 40px 48px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px" }}>
            {/* Brand column */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <img src={logo} alt="Memora" style={{ height: "40px", width: "auto", display: "block" }} />
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "white" }}>Memora</span>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)", maxWidth: "280px", marginBottom: "28px" }}>
                Tu asesor inteligente de regalos. Conectamos emociones con momentos únicos, impulsados por inteligencia artificial.
              </p>
              {/* Social icons */}
              <div style={{ display: "flex", gap: "12px" }}>
                {["ig", "fb", "tw"].map(s => (
                  <a key={s} href="#" style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 700,
                    textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em",
                    transition: "background 0.2s, color 0.2s",
                  }}
                    onMouseOver={e => { e.currentTarget.style.background = `${COLORS.garnet}`; e.currentTarget.style.color = "white"; }}
                    onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                  >{s}</a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {[
              { title: "Plataforma", links: ["Asesor IA", "Catálogo", "Cómo Funciona", "Precios"] },
              { title: "Empresa", links: ["Sobre Nosotros", "Blog", "Prensa", "Contacto"] },
              { title: "Legal", links: ["Privacidad", "Términos de Uso", "Cookies", "Seguridad"] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: COLORS.gold, marginBottom: "20px" }}>{col.title}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseOver={e => e.currentTarget.style.color = "white"}
                        onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                      >{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Bottom footer */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
              © 2026 Memora — PREPE · Grupo Explosión Pressman · EMI Bolivia
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
              Hecho con ♥ en La Paz, Bolivia
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}