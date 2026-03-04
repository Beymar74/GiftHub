import { useState } from "react";
import { COLORS } from "./constants";
import { Users, Trash2, Plus, LogOut } from "lucide-react";

export default function Admin() {
  // Estado local para simular CRUD
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Valentina R.", email: "vale@mail.com", rol: "Premium" },
    { id: 2, nombre: "Carlos M.", email: "carlos@mail.com", rol: "Frecuente" }
  ]);

  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter(u => u.id !== id));
  };

  const agregarUsuario = () => {
    const nuevo = { id: Date.now(), nombre: "Nuevo Usuario", email: "nuevo@mail.com", rol: "Básico" };
    setUsuarios([...usuarios, nuevo]);
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f9f9f9", fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* Sidebar Privado */}
      <aside style={{ width: "250px", background: COLORS.bordeaux, color: "white", padding: "20px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "40px" }}>Memora Panel</h2>
        
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "10px", background: COLORS.garnet, color: "white", border: "none", padding: "12px", borderRadius: "8px", cursor: "pointer", textAlign: "left" }}>
            <Users size={20} /> Usuarios
          </button>
          {/* Espacio para más opciones futuras (Regalos, Estadísticas, etc) */}
        </nav>

        <button onClick={() => window.location.href = "/"} style={{ display: "flex", alignItems: "center", gap: "10px", background: "transparent", color: COLORS.beige, border: "none", padding: "12px", cursor: "pointer" }}>
          <LogOut size={20} /> Salir
        </button>
      </aside>

      {/* Contenido Principal */}
      <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h1 style={{ color: COLORS.chocolate, fontSize: "2rem" }}>Gestión de Usuarios</h1>
          <button onClick={agregarUsuario} style={{ background: COLORS.gold, color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
            <Plus size={18} /> Agregar
          </button>
        </div>

        {/* Tabla CRUD */}
        <div style={{ background: "white", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${COLORS.beige}`, color: COLORS.gray }}>
                <th style={{ padding: "12px" }}>ID</th>
                <th style={{ padding: "12px" }}>Nombre</th>
                <th style={{ padding: "12px" }}>Email</th>
                <th style={{ padding: "12px" }}>Rol</th>
                <th style={{ padding: "12px" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(u => (
                <tr key={u.id} style={{ borderBottom: `1px solid ${COLORS.beige}` }}>
                  <td style={{ padding: "12px" }}>{u.id}</td>
                  <td style={{ padding: "12px", color: COLORS.chocolate, fontWeight: "bold" }}>{u.nombre}</td>
                  <td style={{ padding: "12px" }}>{u.email}</td>
                  <td style={{ padding: "12px" }}>{u.rol}</td>
                  <td style={{ padding: "12px" }}>
                    <button onClick={() => eliminarUsuario(u.id)} style={{ background: "transparent", color: COLORS.crimson, border: "none", cursor: "pointer" }}>
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}