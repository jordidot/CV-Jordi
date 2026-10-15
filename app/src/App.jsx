import Background from './components/Background.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Ai from './components/Ai.jsx';
import Education from './components/Education.jsx';
import Extra from './components/Extra.jsx';

/**
 * Maqueta de dos columnas: barra lateral fija con identidad y navegacion,
 * y columna de contenido con las secciones del curriculum.
 */
export default function App() {
  useScrollReveal();

  return (
    <>
      <Background />
      <div className="page">
        <div className="layout">
          <Sidebar />
          <main className="content">
            <Hero />
            <Experience />
            <Skills />
            <Ai />
            <Education />
            <Extra />
          </main>
        </div>
      </div>
    </>
  );
}
