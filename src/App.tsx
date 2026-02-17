import React, { useState, useEffect, useRef } from 'react';
import { 
  Gift, 
  MessageSquare, 
  Truck, 
  Settings, 
  ChevronRight, 
  Star, 
  Search, 
  ShoppingBag,
  Menu,
  X,
  Heart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

// --- Tipos ---
type Message = {
  id: number;
  role: 'bot' | 'user';
  text: string;
  options?: string[];
};

// --- Componentes Atómicos ---

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.15em] mb-6">
    {children}
  </span>
);

// --- Secciones ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform duration-300">
            <Gift className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-gray-900">
            Gift<span className="text-indigo-600">Hub</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Servicios', 'Catálogo', 'Para Empresas', 'Nosotros'].map((item) => (
            <a key={item} href="#" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <button className="bg-gray-900 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-200 active:scale-95">
            Explorar
          </button>
        </div>

        <button className="md:hidden text-gray-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ onStartChat }: { onStartChat: () => void }) => (
  <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden min-h-screen flex items-center">
    {/* Decoraciones de Fondo */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-indigo-100/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[60%] bg-purple-100/30 rounded-full blur-[120px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7">
        <Badge><Sparkles size={14} /> El futuro de los regalos</Badge>
        <h1 className="text-6xl lg:text-8xl font-[900] text-gray-900 leading-[0.95] mb-8 tracking-tighter">
          Regalos que <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
            hablan por ti.
          </span>
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
          Nuestra inteligencia artificial entiende la emoción detrás de cada detalle, conectando personas con momentos inolvidables.
        </p>
        <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
          <button 
            onClick={onStartChat}
            className="px-10 py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center gap-3 active:scale-95 group"
          >
            Probar Asesor IA <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-6 bg-white text-gray-900 border-2 border-gray-100 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:border-indigo-600 transition-all active:scale-95">
            Ver Catálogo
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800" 
            className="rounded-[2.5rem] w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110" 
            alt="Regalo Premium"
          />
          <div className="absolute inset-x-6 bottom-6 bg-white/40 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/50 text-gray-900 shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform">
             <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-1">Tendencia de Hoy</p>
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">Box Experiencia</h3>
                </div>
                <div className="flex items-center gap-1 bg-white/80 px-2 py-1 rounded-lg">
                  <Star className="text-yellow-500 fill-yellow-500" size={12} />
                  <span className="text-xs font-black">4.9</span>
                </div>
             </div>
             <button className="w-full py-3 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-colors">
               Personalizar ahora
             </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ChatWidget = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', text: '¡Bienvenido! Soy tu asesor GiftHub. Para empezar, ¿a quién quieres sorprender hoy?', options: ['Pareja', 'Amigos', 'Familia', 'Empresa'] }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleOption = (opt: string) => {
    setMessages(prev => [...prev, 
      { id: Date.now(), role: 'user', text: opt },
      { id: Date.now() + 1, role: 'bot', text: `Excelente elección. Para un regalo ${opt.toLowerCase()}, ¿qué presupuesto tienes en mente?`, options: ['Hasta Bs 150', 'Bs 150 - 400', 'Más de Bs 400'] }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-[420px] max-w-[92vw] h-[680px] max-h-[85vh] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col z-[200] overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
      <div className="p-8 bg-indigo-600 text-white flex justify-between items-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
            <MessageSquare size={26} />
          </div>
          <div>
            <h4 className="font-black text-xl tracking-tighter">Asesor IA</h4>
            <div className="flex items-center gap-1.5 opacity-80">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <p className="text-[10px] font-black uppercase tracking-widest">Disponible ahora</p>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-colors relative z-10">
          <X size={24} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-gray-50/30">
        {messages.map((m) => (
          <div key={m.id} className={`flex flex-col ${m.role === 'bot' ? 'items-start' : 'items-end'}`}>
            <div className={`p-5 rounded-[1.5rem] max-w-[85%] text-sm font-bold leading-relaxed shadow-sm ${
              m.role === 'bot' 
                ? 'bg-white text-gray-800 border border-gray-100 rounded-tl-none' 
                : 'bg-indigo-600 text-white rounded-tr-none'
            }`}>
              {m.text}
            </div>
            {m.options && (
              <div className="mt-4 flex flex-wrap gap-2">
                {m.options.map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => handleOption(opt)}
                    className="px-5 py-3 bg-white border border-gray-100 text-gray-700 rounded-xl text-xs font-black uppercase tracking-widest hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm active:scale-95"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-6 bg-white border-t border-gray-50">
        <div className="relative flex items-center">
          <input 
            type="text" 
            placeholder="Escribe tu mensaje..."
            className="w-full bg-gray-100 border-none rounded-2xl py-5 pl-8 pr-16 text-sm font-bold focus:ring-2 focus:ring-indigo-600 outline-none"
          />
          <button className="absolute right-3 p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- APP COMPONENT ---

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Inyección de Tailwind por si el proyecto local no lo tiene activo
  useEffect(() => {
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero onStartChat={() => setIsChatOpen(true)} />

        {/* Features Section */}
        <section className="py-32 bg-gray-900 text-white rounded-[4rem] mx-6 lg:mx-12 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-10 relative z-10">
            <div className="grid lg:grid-cols-3 gap-20">
              {[
                { icon: Zap, title: "Análisis Predictivo", desc: "Nuestra IA analiza perfiles psicológicos para recomendar el regalo que generará mayor impacto emocional." },
                { icon: ShieldCheck, title: "Garantía Total", desc: "Cada producto pasa por un control de calidad riguroso antes de ser enviado a su destino." },
                { icon: Globe, title: "Logística Inteligente", desc: "Seguimiento satelital en tiempo real para que sepas exactamente dónde está tu sorpresa." }
              ].map((f, i) => (
                <div key={i} className="group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 transition-all duration-500 group-hover:rotate-12">
                    <f.icon className="text-indigo-400 group-hover:text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-bold text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catalog Preview */}
        <section className="py-40 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <Badge>Explorar</Badge>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-6">Curaduría Exclusiva</h2>
              <p className="text-xl text-gray-500 font-medium">Selección artesanal premium validada por nuestros expertos.</p>
            </div>
            <button className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.3em] text-indigo-600 hover:gap-6 transition-all">
              Ver Catálogo Completo <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Box Gourmet Signature", price: "Bs 280", cat: "Premium", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600" },
              { name: "Escultura Cerámica Artis", price: "Bs 120", cat: "Hogar", img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=600" },
              { name: "Pack Relax Zen", price: "Bs 195", cat: "Personal", img: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=600" }
            ].map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2.5rem] h-[450px] mb-8 shadow-2xl shadow-gray-100 border border-gray-50">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.name} />
                  <div className="absolute top-8 right-8">
                    <button className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                      <Heart size={22} />
                    </button>
                  </div>
                </div>
                <div className="px-4">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-3 block">{p.cat}</span>
                  <h4 className="text-3xl font-black tracking-tighter mb-4">{p.name}</h4>
                  <p className="text-3xl font-light text-gray-300">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 text-gray-900 py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-indigo-600 p-2 rounded-xl">
                 <Gift className="text-white w-5 h-5" />
              </div>
              <span className="text-3xl font-black italic tracking-tighter">GiftHub</span>
            </div>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md">
              La plataforma líder en el envío de emociones a domicilio, impulsada por tecnología de vanguardia.
            </p>
          </div>
          <div className="md:col-span-3">
            <h5 className="font-black uppercase tracking-widest text-[10px] mb-8 text-indigo-600">Servicios</h5>
            <ul className="space-y-4 font-black text-sm text-gray-400 uppercase tracking-widest">
              <li className="hover:text-indigo-600 transition-colors cursor-pointer">Suscripciones</li>
              <li className="hover:text-indigo-600 transition-colors cursor-pointer">Corporativos</li>
              <li className="hover:text-indigo-600 transition-colors cursor-pointer">Garantía</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h5 className="font-black uppercase tracking-widest text-[10px] mb-8 text-indigo-600">Compañía</h5>
            <ul className="space-y-4 font-black text-sm text-gray-400 uppercase tracking-widest">
              <li className="hover:text-indigo-600 transition-colors cursor-pointer">Nosotros</li>
              <li className="hover:text-indigo-600 transition-colors cursor-pointer">Contacto</li>
              <li className="hover:text-indigo-600 transition-colors cursor-pointer">Privacidad</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-gray-400 tracking-[0.4em] uppercase">
          <p>© 2026 GiftHub. Diseñado para momentos únicos.</p>
          <div className="flex gap-12">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Twitter</span>
          </div>
        </div>
      </footer>

      {/* Botón Flotante */}
      <div className="fixed bottom-8 right-8 z-[180]">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="flex items-center gap-4 bg-gray-900 text-white pl-8 pr-6 py-5 rounded-[2.5rem] shadow-2xl hover:bg-indigo-600 hover:scale-105 transition-all duration-500 group"
        >
          <span className="text-[10px] font-black uppercase tracking-widest">Consultar Asesor IA</span>
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <MessageSquare size={24} />
          </div>
        </button>
      </div>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}