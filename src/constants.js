// ─────────────────────────────────────────────────────────────
// constants.js
// Paleta de colores, IDs de sección y datos compartidos
// ─────────────────────────────────────────────────────────────

export const COLORS = {
    garnet:    "#8E1B3A",
    bordeaux:  "#5A0F24",
    crimson:   "#AB3A50",
    chocolate: "#5C3A2E",
    gold:      "#BC9968",
    beige:     "#F5E6D0",
    white:     "#FFFFFF",
    gray:      "#B0B0B0",
    black:     "#000000",
  };
  
  // IDs de las secciones para navegación por teclado (PgUp/PgDn/Home/End)
  export const SECTION_IDS = [
    "hero",
    "como-funciona",
    "caracteristicas",
    "testimonios",
    "cta",
  ];
  
  export const SECTION_LABELS = [
    "Inicio",
    "Cómo Funciona",
    "Características",
    "Testimonios",
    "Comenzar",
  ];
  
  export const testimonials = [
    {
      name: "Valentina R.",
      role: "Usuaria Premium",
      text: "Encontré el regalo perfecto para mi mamá en menos de 5 minutos. La IA entendió exactamente lo que buscaba.",
      avatar: "V",
    },
    {
      name: "Carlos M.",
      role: "Cliente Frecuente",
      text: "Nunca pensé que regalar pudiera ser tan fácil y emotivo. Memora cambió cómo expreso mis afectos.",
      avatar: "C",
    },
    {
      name: "Sofía L.",
      role: "Usuaria Verificada",
      text: "El análisis emocional es increíble. El regalo llegó perfecto y mi pareja quedó sin palabras.",
      avatar: "S",
    },
  ];
  
  export const features = [
    { icon: "💎", title: "Análisis Emocional",  desc: "No solo datos, sino el alma detrás de cada regalo." },
    { icon: "⚡", title: "Respuesta Inmediata",  desc: "Recomendaciones en segundos, disponible 24/7." },
    { icon: "🎯", title: "Precisión Total",      desc: "Adapta cada sugerencia al perfil exacto del destinatario." },
    { icon: "🔒", title: "Pago Seguro",          desc: "Transacciones protegidas y seguimiento en tiempo real." },
  ];