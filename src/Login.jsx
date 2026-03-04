import { useState } from "react";
import { COLORS } from "./constants";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "123") {
      window.location.href = "/admin"; // Redirección simple al dashboard
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ height: "100vh", background: COLORS.beige, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleLogin} style={{ background: "white", padding: "40px", borderRadius: "16px", boxShadow: `0 8px 32px ${COLORS.bordeaux}20`, width: "100%", maxWidth: "400px" }}>
        <h2 style={{ color: COLORS.bordeaux, textAlign: "center", marginBottom: "24px", fontFamily: "'Playfair Display', serif", fontSize: "2rem" }}>
          Memora Admin
        </h2>
        
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: COLORS.chocolate }}>Usuario</label>
          <input 
            type="text" 
            value={user} 
            onChange={(e) => setUser(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: `1px solid ${COLORS.gold}`, outline: "none" }}
            required
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: COLORS.chocolate }}>Contraseña</label>
          <input 
            type="password" 
            value={pass} 
            onChange={(e) => setPass(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: `1px solid ${COLORS.gold}`, outline: "none" }}
            required
          />
        </div>

        <button type="submit" style={{ width: "100%", padding: "14px", background: `linear-gradient(135deg, ${COLORS.garnet}, ${COLORS.bordeaux})`, color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
          Ingresar
        </button>
      </form>
    </div>
  );
}