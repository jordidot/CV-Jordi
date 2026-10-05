import Background from './components/Background.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Ai from './components/Ai.jsx';
import Education from './components/Education.jsx';
import Extra from './components/Extra.jsx';

/**
 * Cada seccion es un componente independiente en src/components/.
 * El orden de las secciones se define aqui.
 */
export default function App() {
  useScrollReveal();

  return (
    <>
      <Background />
      <div className="page">
        <Hero />
        <Experience />
        <Skills />
        <Ai />
        <Education />
        <Extra />
      </div>
    </>
  );
}
