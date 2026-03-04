import { useState, useEffect } from "react";
import { COLORS } from "./constants";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --- Lógica de Captcha Alphanumérico Realista ---
  const [captchaCode, setCaptchaCode] = useState("");
  const [userInputCaptcha, setUserInputCaptcha] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Sin O o 0 para evitar confusión
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setUserInputCaptcha("");
  };

  useEffect(() => { generateCaptcha(); }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userInputCaptcha.toUpperCase() !== captchaCode) {
      setError("Código de seguridad incorrecto");
      generateCaptcha();
      return;
    }
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (user === "admin" && pass === "123") {
        window.location.href = "/admin"; 
      } else {
        setError("Credenciales incorrectas");
        setLoading(false);
        generateCaptcha();
      }
    }, 1000);
  };

  return (
    <div style={{ height: "100vh", background: COLORS.beige, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <form onSubmit={handleLogin} style={{ background: "white", padding: "40px", borderRadius: "16px", boxShadow: `0 10px 25px ${COLORS.bordeaux}30`, width: "100%", maxWidth: "400px" }}>
        
        <h2 style={{ color: COLORS.bordeaux, textAlign: "center", marginBottom: "24px", fontFamily: "'Playfair Display', serif", fontSize: "2rem" }}>Memora Admin</h2>

        {error && <div style={{ background: "#fee2e2", color: "#dc2626", padding: "10px", borderRadius: "8px", marginBottom: "16px", fontSize: "0.85rem", textAlign: "center", border: "1px solid #fecaca" }}>{error}</div>}

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px", color: COLORS.chocolate, fontWeight: "600" }}>Usuario</label>
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: `1px solid ${COLORS.gold}`, outline: "none", boxSizing: "border-box" }} required />
        </div>

        <div style={{ marginBottom: "20px", position: "relative" }}>
          <label style={{ display: "block", marginBottom: "6px", color: COLORS.chocolate, fontWeight: "600" }}>Contraseña</label>
          <input 
            type={showPass ? "text" : "password"} 
            value={pass} 
            onChange={(e) => setPass(e.target.value)}
            style={{ width: "100%", padding: "12px", paddingRight: "75px", borderRadius: "8px", border: `1px solid ${COLORS.gold}`, outline: "none", boxSizing: "border-box" }}
            required 
          />
          <button 
            type="button" 
            onClick={() => setShowPass(!showPass)}
            style={{ position: "absolute", right: "12px", top: "36px", height: "40px", border: "none", background: "none", cursor: "pointer", color: COLORS.chocolate, fontSize: "0.75rem", fontWeight: "bold" }}
          >
            {showPass ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        {/* SECCIÓN CAPTCHA REALISTA */}
<div style={{ marginBottom: "24px" }}>
  <label style={{ display: "block", marginBottom: "8px", color: COLORS.chocolate, fontWeight: "600", fontSize: "0.85rem" }}>
    Código de Seguridad
  </label>
  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
    <div style={{ 
      flex: 1, background: "#f3f4f6", padding: "12px", borderRadius: "8px", textAlign: "center", 
      letterSpacing: "5px", fontWeight: "bold", fontStyle: "italic", fontSize: "1.2rem",
      color: COLORS.bordeaux, userSelect: "none", border: `1px dashed ${COLORS.gold}`,
      backgroundImage: "radial-gradient(#9ca3af 0.5px, transparent 0.5px)", backgroundSize: "10px 10px"
    }}>
      {captchaCode}
    </div>
    
    {/* BOTÓN CON TONO CORRECTO */}
    <button 
  type="button" 
  onClick={generateCaptcha} 
  style={{ 
    background: COLORS.gold, 
    border: "none", 
    width: "42px",
    height: "42px",
    borderRadius: "8px", 
    cursor: "pointer", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    boxShadow: `0 2px 8px ${COLORS.gold}40`
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.background = COLORS.chocolate;
    e.currentTarget.style.transform = "rotate(180deg)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.background = COLORS.gold;
    e.currentTarget.style.transform = "rotate(0deg)";
  }}
>
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="white" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 2v6h-6"></path>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
    <path d="M3 22v-6h6"></path>
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
  </svg>
</button>
  </div>
  
  <input 
    type="text" 
    placeholder="Escribe el código"
    value={userInputCaptcha} 
    onChange={(e) => setUserInputCaptcha(e.target.value)}
    style={{ width: "100%", marginTop: "10px", padding: "12px", borderRadius: "8px", border: `1px solid ${COLORS.gold}`, outline: "none", boxSizing: "border-box" }}
    required
  />
</div>

        <button type="submit" disabled={loading} style={{ width: "100%", padding: "14px", background: loading ? "#ccc" : `linear-gradient(135deg, ${COLORS.garnet}, ${COLORS.bordeaux})`, color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
          {loading ? "Iniciando..." : "Ingresar"}
        </button>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a href="/" style={{ color: COLORS.chocolate, textDecoration: "none", fontSize: "0.85rem" }}>← Volver al inicio</a>
        </div>
      </form>
    </div>
  );
}