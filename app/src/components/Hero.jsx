/**
 * Bloque de perfil. Los datos de contacto viven en la barra lateral,
 * aqui queda la propuesta de valor.
 */
export default function Hero() {
  return (
    <section className="section intro" id="hero">
      <p className="intro-lede">
        Desarrollador full stack que construye herramientas <em>de principio a fin</em>:
        backend, frontend y automatización.
      </p>
      <p className="intro-body">
        Dos años de desarrollo full stack con Laravel, Vue 3 y Python, con proyectos de IA
        aplicada en entorno empresarial. Hoy desarrollo ABAP en SAP y participo en la migración
        de SAP R/3 a S/4HANA, tras un ciclo superior de DAW en modalidad dual.
      </p>
      <div className="intro-tags">
        <span className="tag">Full Stack</span>
        <span className="tag">IA aplicada</span>
        <span className="tag">SAP · ABAP</span>
        <span className="tag">Automatización</span>
      </div>
    </section>
  );
}
