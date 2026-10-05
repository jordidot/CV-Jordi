# CV Jordi

Currículum personal de **Jordi Serrano**, desarrollador Full Stack.

Aplicación web hecha con **React 18 + Vite**. Cada sección del CV es un componente
independiente, de modo que se puede editar o reutilizar por separado.

## Estructura

```
CV-Jordi/
├─ app/                      código fuente (React + Vite)
│  ├─ index.html             plantilla de Vite
│  ├─ package.json
│  ├─ vite.config.js         el build se genera en ../docs
│  └─ src/
│     ├─ main.jsx            punto de entrada
│     ├─ App.jsx             compone las secciones
│     ├─ components/         una sección por fichero
│     │  ├─ Background.jsx   escena 3D de Three.js
│     │  ├─ Hero.jsx
│     │  ├─ Experience.jsx
│     │  ├─ Skills.jsx
│     │  ├─ Ai.jsx
│     │  ├─ Education.jsx
│     │  └─ Extra.jsx
│     ├─ hooks/
│     │  └─ useScrollReveal.js
│     └─ styles/styles.css   estilos de toda la aplicación
├─ docs/                     build publicado (no editar a mano)
├─ CVJordi2025_final.pdf     versión en PDF del currículum
├─ CVJordi2025_final.docx    versión editable en Word
└─ informe_secciones.pdf     informe del rediseño por secciones
```

## Desarrollo

```bash
cd app
npm install
npm run dev        # servidor de desarrollo
npm run build      # genera el sitio en ../docs
npm run preview    # previsualiza el build
```

`docs/` es la carpeta que se publica (por ejemplo con GitHub Pages).

## Dependencias externas

- **Three.js** 0.164.1: se instala con npm y queda dentro del bundle, ya no se carga por CDN.
- **Google Fonts** (Inter y Space Grotesk): sí se cargan por CDN, por lo que se necesita
  conexión a internet para ver las tipografías. Sin conexión el contenido se ve igual,
  con la tipografía del sistema.
