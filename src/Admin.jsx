import { useState } from "react";
import { COLORS } from "./constants";
import { Users, Store, Package, ShoppingCart, LogOut, Edit, Trash2, Search, Bell, Plus, X, MoreVertical, LayoutDashboard, CreditCard, Bot, TrendingUp } from "lucide-react";

export default function Admin() {
  const [vista, setVista] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ── ESTADOS Y MOCKS ──
  const [usuarios, setUsuarios] = useState([{ id: 1, nombre: "Valentina R.", email: "vale@mail.com", rol: "Premium" }]);
  const [formUsuario, setFormUsuario] = useState({ id: "", nombre: "", email: "", rol: "Básico" });

  const [proveedores, setProveedores] = useState([{ id: 1, empresa: "Artesanías Andinas", contacto: "Juan Pérez", estado: "Activo" }]);
  const [formProveedor, setFormProveedor] = useState({ id: "", empresa: "", contacto: "", estado: "Activo" });

  const [catalogo, setCatalogo] = useState([{ id: 1, regalo: "Set de Té", proveedor: "Artesanías Andinas", precio: "310.00" }]);
  const [formCatalogo, setFormCatalogo] = useState({ id: "", regalo: "", proveedor: "", precio: "" });

  const [pedidos, setPedidos] = useState([{ id: 101, cliente: "Valentina R.", regalo: "Set de Té", estado: "Pendiente" }]);
  const [formPedido, setFormPedido] = useState({ id: "", cliente: "", regalo: "", estado: "Pendiente" });

  const [pagos, setPagos] = useState([{ id: 1, orden: "101", cliente: "Valentina R.", monto: "310.00", metodo: "QR Simple", estado: "Pagado" }]);
  const [formPago, setFormPago] = useState({ id: "", orden: "", cliente: "", monto: "", metodo: "QR Simple", estado: "Pagado" });

  // ── FUNCIONES CRUD ──
  const guardar = (e, form, setForm, lista, setLista, initialState) => {
    e.preventDefault();
    if (form.id) {
      setLista(lista.map(item => item.id === form.id ? form : item));
    } else {
      setLista([...lista, { ...form, id: Date.now() }]);
    }
    setForm(initialState);
    setIsModalOpen(false);
  };

  const eliminar = (id, lista, setLista) => setLista(lista.filter(item => item.id !== id));
  const abrirModalEditar = (item, setForm) => { setForm(item); setIsModalOpen(true); };
  const abrirModalNuevo = (setForm, initialState) => { setForm(initialState); setIsModalOpen(true); };

  // ── COMPONENTES VISUALES ──
  const Avatar = ({ nombre }) => (
    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}&background=F5E6D0&color=5A0F24&bold=true&rounded=true`} alt="avatar" style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${COLORS.gold}40`, objectFit: "cover" }} />
  );

  const StatusBadge = ({ texto }) => {
    let bg = `${COLORS.beige}40`, color = COLORS.chocolate; 
    if (["Activo", "Premium", "Entregado", "Pagado"].includes(texto)) { bg = "#DEF7EC"; color = "#03543F"; } 
    if (["Pendiente", "Procesando", "En Revisión"].includes(texto)) { bg = "#FEF3C7"; color = "#92400E"; } 
    if (["Inactivo", "Rechazado", "Reembolso"].includes(texto)) { bg = "#FDE8E8"; color = "#9B1C1C"; } 
    if (["Frecuente", "Enviado por Proveedor"].includes(texto)) { bg = "#E1EFFE"; color = "#1E429F"; } 
    return <span style={{ background: bg, color: color, padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: "700" }}>{texto}</span>;
  };

  const renderCell = (item, key) => {
    if (key === "nombre" || key === "cliente") return <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><Avatar nombre={item[key]} /> <span style={{ fontWeight: "600", color: COLORS.bordeaux }}>{item[key]}</span></div>;
    if (key === "rol" || key === "estado") return <StatusBadge texto={item[key]} />;
    if (key === "precio" || key === "monto") return <span style={{ fontWeight: "600", color: COLORS.bordeaux }}>Bs. {parseFloat(item[key]).toFixed(2)}</span>;
    return <span style={{ color: COLORS.chocolate }}>{item[key]}</span>;
  };

  // ── VISTAS ESPECIALES ──
  const renderDashboard = () => (
    <div style={{ animation: "fadeSlideUp 0.4s ease" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: COLORS.bordeaux, fontWeight: "800", marginBottom: "24px" }}>Resumen de Operaciones</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "32px" }}>
        {[
          { label: "Ventas del Mes", valor: "Bs. 310.00", icon: TrendingUp, color: COLORS.garnet },
          { label: "Usuarios Activos", valor: "3", icon: Users, color: COLORS.gold },
          { label: "Proveedores", valor: "1", icon: Store, color: COLORS.chocolate },
        ].map((kpi, i) => (
          <div key={i} style={{ background: "white", padding: "24px", borderRadius: "16px", border: `1px solid ${COLORS.beige}`, boxShadow: `0 4px 20px ${COLORS.bordeaux}08` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ color: COLORS.gray, fontWeight: "600", fontSize: "0.9rem", textTransform: "uppercase" }}>{kpi.label}</span>
              <div style={{ background: `${kpi.color}15`, padding: "8px", borderRadius: "8px", color: kpi.color }}><kpi.icon size={20} /></div>
            </div>
            <div style={{ fontSize: "2rem", fontWeight: "800", color: COLORS.bordeaux }}>{kpi.valor}</div>
          </div>
        ))}
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: COLORS.bordeaux, fontWeight: "800", marginBottom: "24px" }}>Funciones por Agregar...</h2>
        
      </div>

    </div>
  );

  const renderConfigIA = () => (
    <div style={{ animation: "fadeSlideUp 0.4s ease", background: "white", padding: "32px", borderRadius: "16px", border: `1px solid ${COLORS.beige}`, boxShadow: `0 4px 20px ${COLORS.bordeaux}08`, maxWidth: "800px" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: COLORS.bordeaux, fontWeight: "800", marginBottom: "8px" }}>Configuración del Asesor IA (Viendo Opciones ...)</h2>
      <p style={{ color: COLORS.chocolate, marginBottom: "32px" }}>Ajusta los parámetros del modelo de recomendación de Memora.</p>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label style={{ fontWeight: "600", color: COLORS.chocolate, display: "block", marginBottom: "8px" }}>Ajuste de Comportamiento</label>
          <textarea defaultValue="Actúa como un asesor de regalos experto. Considera el presupuesto y la ocasión para filtrar el catálogo..." style={{ width: "100%", padding: "12px", borderRadius: "8px", border: `1px solid ${COLORS.gold}80`, minHeight: "100px", fontFamily: "'DM Sans', sans-serif" }} />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: "600", color: COLORS.chocolate, display: "block", marginBottom: "8px" }}>Límite de Palabras por respuesta</label>
            <input type="number" defaultValue={250} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: `1px solid ${COLORS.gold}80` }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: "600", color: COLORS.chocolate, display: "block", marginBottom: "8px" }}>Creatividad al responder</label>
            <input type="number" step="0.1" defaultValue={0.7} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: `1px solid ${COLORS.gold}80` }} />
          </div>
        </div>
        <button style={{ background: COLORS.bordeaux, color: "white", padding: "12px 24px", borderRadius: "8px", border: "none", fontWeight: "bold", cursor: "pointer", alignSelf: "flex-start", marginTop: "12px" }}>Guardar Parámetros</button>
      </div>
    </div>
  );

  // ── RENDERIZADO DE TABLA Y MODAL ──
  const renderContenido = (titulo, desc, campos, form, setForm, lista, setLista, initialState) => (
    <div style={{ animation: "fadeSlideUp 0.4s ease" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px" }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: COLORS.bordeaux, fontWeight: "800", marginBottom: "4px" }}>{titulo}</h2>
          <p style={{ color: COLORS.chocolate, opacity: 0.7, fontSize: "0.95rem" }}>{desc}</p>
        </div>
        <button onClick={() => abrirModalNuevo(setForm, initialState)} style={{ background: `linear-gradient(135deg, ${COLORS.garnet}, ${COLORS.bordeaux})`, color: "white", border: "none", padding: "12px 20px", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "0.9rem", transition: "transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseOut={e => e.currentTarget.style.transform = "none"}>
          <Plus size={18} /> Nuevo Registro
        </button>
      </div>

      <div style={{ background: "white", borderRadius: "16px", border: `1px solid ${COLORS.gold}30`, boxShadow: `0 4px 20px ${COLORS.bordeaux}08`, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ background: COLORS.beige, borderBottom: `2px solid ${COLORS.gold}40` }}>
                {campos.map((c, i) => <th key={i} style={{ padding: "14px 24px", fontSize: "0.75rem", fontWeight: "700", color: COLORS.bordeaux, textTransform: "uppercase" }}>{c.label}</th>)}
                <th style={{ padding: "14px 24px", fontSize: "0.75rem", fontWeight: "700", color: COLORS.bordeaux, textTransform: "uppercase", textAlign: "right" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((item) => (
                <tr key={item.id} style={{ borderBottom: `1px solid ${COLORS.beige}`, transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.background = `${COLORS.beige}20`} onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                  {campos.map((c, i) => <td key={i} style={{ padding: "16px 24px", fontSize: "0.9rem" }}>{renderCell(item, c.key)}</td>)}
                  <td style={{ padding: "16px 24px", textAlign: "right" }}>
                    <button onClick={() => abrirModalEditar(item, setForm)} style={{ background: "transparent", border: "none", cursor: "pointer", color: COLORS.gold, padding: "6px" }}><Edit size={18} /></button>
                    <button onClick={() => eliminar(item.id, lista, setLista)} style={{ background: "transparent", border: "none", cursor: "pointer", color: COLORS.crimson, padding: "6px" }}><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL CRUD */}
      {isModalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(90, 15, 36, 0.4)", backdropFilter: "blur(4px)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
          <div style={{ background: "white", width: "100%", maxWidth: "500px", borderRadius: "20px", padding: "32px", position: "relative", animation: "fadeSlideUp 0.3s ease" }}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", top: "20px", right: "20px", background: "transparent", border: "none", cursor: "pointer", color: COLORS.gray }}><X size={24} /></button>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: COLORS.bordeaux, marginBottom: "24px" }}>{form.id ? "Editar" : "Nuevo Registro"}</h3>
            <form onSubmit={(e) => guardar(e, form, setForm, lista, setLista, initialState)} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {campos.map((campo, i) => (
                <div key={i}>
                  <label style={{ fontSize: "0.85rem", fontWeight: "600", color: COLORS.chocolate, marginBottom: "8px", display: "block" }}>{campo.label}</label>
                  {campo.type === "select" ? (
                    <select required value={form[campo.key]} onChange={e => setForm({...form, [campo.key]: e.target.value})} style={{ width: "100%", padding: "12px", border: `1px solid ${COLORS.gold}80`, borderRadius: "10px" }}>
                      {campo.options.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input required type={campo.type || "text"} value={form[campo.key]} onChange={e => setForm({...form, [campo.key]: e.target.value})} style={{ width: "100%", padding: "12px", border: `1px solid ${COLORS.gold}80`, borderRadius: "10px" }} />
                  )}
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: "12px 20px", borderRadius: "10px", border: "none", background: "transparent", cursor: "pointer" }}>Cancelar</button>
                <button type="submit" style={{ padding: "12px 28px", borderRadius: "10px", border: "none", background: COLORS.bordeaux, color: "white", cursor: "pointer" }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ display: "flex", height: "100vh", background: "#FAF7F2", fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* ── SIDEBAR ── */}
      <aside style={{ width: "260px", background: COLORS.bordeaux, display: "flex", flexDirection: "column", padding: "20px", zIndex: 10 }}>
        
        {/* LOGO INVERTIDO A BLANCO PURO */}
        <div style={{ padding: "12px", display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <img alt="Memora" src="/src/assets/logo.png" style={{ height: "30px", width: "auto", filter: "brightness(0) invert(1)" }} />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>Memora</span>
        </div>
        
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
            { id: "usuarios", icon: Users, label: "Usuarios" },
            { id: "proveedores", icon: Store, label: "Proveedores" },
            { id: "catalogo", icon: Package, label: "Catálogo Externo" },
            { id: "pedidos", icon: ShoppingCart, label: "Pedidos" },
            { id: "pagos", icon: CreditCard, label: "Pagos y Finanzas" },
            { id: "configia", icon: Bot, label: "Configuración IA" }
          ].map(btn => (
            <button key={btn.id} onClick={() => setVista(btn.id)} style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%", background: vista === btn.id ? "rgba(255,255,255,0.15)" : "transparent", color: vista === btn.id ? "white" : "rgba(255,255,255,0.6)", border: "none", padding: "12px 16px", borderRadius: "10px", cursor: "pointer", textAlign: "left", fontWeight: vista === btn.id ? "600" : "500" }}>
              <btn.icon size={20} /> {btn.label}
            </button>
          ))}
        </nav>

        <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px" }}>
            <Avatar nombre="Emo Tia" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "white" }}>Emotia</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>Administradora</div>
            </div>
            <MoreVertical size={16} color="rgba(255,255,255,0.6)" />
          </div>
        </div>
      </aside>

      {/* ── ÁREA PRINCIPAL ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* BARRA SUPERIOR */}
        <header style={{ height: "72px", background: "white", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", borderBottom: `1px solid ${COLORS.beige}` }}>
          <div style={{ display: "flex", alignItems: "center", background: `${COLORS.beige}30`, padding: "8px 16px", borderRadius: "100px", width: "380px", border: `1px solid ${COLORS.beige}` }}>
            <Search size={18} color={COLORS.garnet} />
            <input type="text" placeholder="Buscar registros, clientes o pedidos..." style={{ border: "none", background: "transparent", outline: "none", marginLeft: "12px", width: "100%", color: COLORS.chocolate }} />
            <span style={{ fontSize: "0.7rem", color: COLORS.gray, fontWeight: "bold" }}>ctrl+K</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", position: "relative" }}>
              <Bell size={22} color={COLORS.bordeaux} />
              <span style={{ position: "absolute", top: "0", right: "0", background: COLORS.crimson, width: "8px", height: "8px", borderRadius: "50%", border: "2px solid white" }}></span>
            </button>
            <div style={{ width: "1px", height: "24px", background: COLORS.beige }}></div>
            <button onClick={() => window.location.href = "/"} style={{ background: "transparent", border: "none", fontWeight: "600", color: COLORS.chocolate, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
              <LogOut size={16} /> Salir
            </button>
          </div>
        </header>

        {/* CONTENIDO */}
        <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
          {vista === "dashboard" && renderDashboard()}
          {vista === "configia" && renderConfigIA()}
          {vista === "usuarios" && renderContenido("Directorio de Clientes", "Gestión de usuarios registrados.", [{ label: "Nombre", key: "nombre" }, { label: "Email", key: "email", type: "email" }, { label: "Rol", key: "rol", type: "select", options: ["Básico", "Premium", "Frecuente"] }], formUsuario, setFormUsuario, usuarios, setUsuarios, { id: "", nombre: "", email: "", rol: "Básico" })}
          {vista === "proveedores" && renderContenido("Red de Partners", "Empresas integradas al Marketplace.", [{ label: "Empresa", key: "empresa" }, { label: "Contacto", key: "contacto" }, { label: "Estado", key: "estado", type: "select", options: ["Activo", "Inactivo", "En Revisión"] }], formProveedor, setFormProveedor, proveedores, setProveedores, { id: "", empresa: "", contacto: "", estado: "Activo" })}
          {vista === "catalogo" && renderContenido("Catálogo Tercerizado", "Inventario disponible para IA.", [{ label: "Regalo", key: "regalo" }, { label: "Proveedor", key: "proveedor" }, { label: "Precio (Bs.)", key: "precio", type: "number" }], formCatalogo, setFormCatalogo, catalogo, setCatalogo, { id: "", regalo: "", proveedor: "", precio: "" })}
          {vista === "pedidos" && renderContenido("Monitor de Envíos", "Seguimiento de órdenes.", [{ label: "Cliente", key: "cliente" }, { label: "Regalo", key: "regalo" }, { label: "Estado", key: "estado", type: "select", options: ["Pendiente", "Procesando", "Enviado por Proveedor", "Entregado"] }], formPedido, setFormPedido, pedidos, setPedidos, { id: "", cliente: "", regalo: "", estado: "Pendiente" })}
          {vista === "pagos" && renderContenido("Transacciones", "Control de pagos y reembolsos.", [{ label: "Orden", key: "orden" }, { label: "Cliente", key: "cliente" }, { label: "Monto (Bs.)", key: "monto", type: "number" }, { label: "Método", key: "metodo", type: "select", options: ["QR Simple", "Tarjeta C/D", "Transferencia"] }, { label: "Estado", key: "estado", type: "select", options: ["Pagado", "Pendiente", "Rechazado", "Reembolso"] }], formPago, setFormPago, pagos, setPagos, { id: "", orden: "", cliente: "", monto: "", metodo: "QR Simple", estado: "Pagado" })}
        </main>
      </div>
    </div>
  );
}