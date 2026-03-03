import { useState } from 'react';
import { Gift, Menu, X, ArrowRight, Zap, ShieldCheck, Globe } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-beige min-h-screen font-serif text-chocolate">
      {/* Header */}
      <header className="py-6 px-6 lg:px-12 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <Gift className="text-garnet" />
          <span className="font-bold text-lg">GiftHub</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 border border-chocolate px-3 py-1 rounded-full text-sm font-semibold tracking-widest uppercase">
          El Futuro de los Regalos
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden z-20">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`fixed top-0 right-0 h-full bg-bordeaux bg-opacity-90 backdrop-blur-sm w-64 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:bg-transparent lg:w-auto lg:transform-none lg:h-auto`}>
          <ul className="flex flex-col lg:flex-row items-center h-full lg:h-auto justify-center lg:justify-end space-y-8 lg:space-y-0 lg:space-x-8 text-white lg:text-chocolate font-medium">
            <li><a href="#asesor" className="hover:text-crimson transition-colors">Asesor IA</a></li>
            <li><a href="#catalogo" className="hover:text-crimson transition-colors">Catálogo</a></li>
            <li><a href="#nosotros" className="hover:text-crimson transition-colors">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-crimson transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="text-center py-20 lg:py-32 px-6">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-4">
          Regalos que <span className="text-garnet">dejan huella</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Nuestra inteligencia artificial descifra la emoción detrás de cada detalle, creando conexiones memorables entre personas.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-garnet text-white px-8 py-3 rounded-full font-semibold hover:bg-crimson transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-garnet focus:ring-opacity-50">
            <span>Probar Asesor IA</span>
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-chocolate text-chocolate px-8 py-3 rounded-full font-semibold hover:bg-chocolate hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Catálogo
          </button>
        </div>
      </main>

      {/* Image Section */}
      <section className="px-6 lg:px-12 mb-20">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1512909481869-0daa7e0239ca?q=80&w=2070&auto=format&fit=crop" 
            alt="Regalo envuelto con una cinta rosa"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-32 bg-bordeaux text-white rounded-[4rem] mx-6 lg:mx-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-3 gap-20">
            {[
              { icon: Zap, title: "Análisis Emocional", desc: "Nuestra IA no solo analiza datos, sino que interpreta emociones para sugerir el regalo con el mayor impacto sentimental." },
              { icon: ShieldCheck, title: "Calidad Insuperable", desc: "Cada regalo es sometido a un riguroso proceso de selección y control de calidad para garantizar una experiencia premium." },
              { icon: Globe, title: "Logística de Precisión", desc: "Sigue tu regalo en tiempo real con nuestra tecnología de seguimiento y asegúrate de que tu sorpresa llegue en el momento perfecto." }
            ].map((f, i) => (
              <div key={i} className="group">
                <div className="bg-crimson bg-opacity-20 rounded-2xl p-6 flex items-center justify-center w-24 h-24 mb-6 group-hover:bg-opacity-40 transition-all duration-300 transform group-hover:scale-110">
                  <f.icon className="w-12 h-12 text-beige" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-beige">{f.title}</h3>
                <p className="text-beige opacity-80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-garnet rounded-full opacity-20"></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-garnet rounded-full opacity-20"></div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-12 text-center">
        <p>&copy; 2024 GiftHub. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
