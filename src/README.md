App.jsx Componente principal. Contiene todas las secciones de la página y la lógica de navegación por teclado.

Navbar.jsx Barra de navegación fija superior.

Footer.jsx Pie de página con links y redes sociales.

constants.js Colores, IDs de sección y datos compartidos (testimonios, features).

## Actualización de Arquitectura y Enrutamiento (Navegación)
Para hacer funcionar la página de "Nosotros" y las futuras vistas sin que se recargue toda la página, tuve que hacer un par de ajustes en la estructura (tranquilos, el diseño intacto y hermoso que armaron sigue igual). 

Aquí el resumen de lo que modifiqué a nivel global:

* **Implementación de React Router:** Instalé `react-router-dom` para manejar la navegación profesionalmente como una SPA.
* **Separación de responsabilidades (`App.tsx` -> `Inicio.tsx`):** Todo el código de la landing page (el hero, los testimonios, etc.) que estaba en `App.tsx` lo moví a un nuevo archivo llamado `Inicio.tsx`. 
* **Nuevo Orquestador (`App.tsx`):** Creé un nuevo `App.tsx` chiquito que ahora funciona únicamente como el enrutador principal para decidir qué vista cargar (Inicio, Nosotros, etc.).
* **Estilos Globales (`index.css`):** Extraje la variable `globalCSS` que estaba adentro de la landing y pasé todos esos estilos directamente a `index.css`. Hice esto para que cualquier página nueva que creemos herede toda la paleta de colores, fuentes y animaciones sin tener que repetir código.
* **Actualización del Navbar:** Cambié las etiquetas `<a>` genéricas por el componente `<Link>` de React Router para que los botones del header funcionen correctamente al cambiar de vista. El `main.tsx` también fue envuelto en `<BrowserRouter>`.

