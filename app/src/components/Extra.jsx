export default function Extra() {
  return (
    <section className="section" id="extra" aria-labelledby="extra-title">
      <div className="section-label">Más</div>
      <h2 className="section-title" id="extra-title">Idiomas y otros</h2>

      <div className="lang-row" style={{ marginBottom: '1.5rem' }}>
        <div className="lang-chip">🇪🇸 Castellano — Nativo</div>
        <div className="lang-chip">🏴 Catalán — Nativo</div>
      </div>

      <div className="divider"></div>

      <p style={{ color: 'var(--muted)', fontSize: '13.5px', margin: '1rem 0' }}>
        Carnet de conducir y vehículo propio. Certificaciones disponibles bajo solicitud.
      </p>

      <div className="lang-row" style={{ marginBottom: '1rem' }}>
        <div className="lang-chip">Trabajo en equipo</div>
        <div className="lang-chip">Tutoría de becarios</div>
        <div className="lang-chip">Orientación a resultados</div>
        <div className="lang-chip">Disponibilidad para desplazamiento</div>
      </div>

      <ul style={{ color: 'var(--muted)', fontSize: '13.5px' }}>
        <li>Tutor en el programa DUAL de 1.000 horas en Comexi, acompañando a estudiantes en su formación práctica.</li>
        <li>Colaboración con equipos multidisciplinares de desarrollo, IT y negocio, con trato directo con usuarios finales.</li>
        <li>Disponibilidad para desplazamientos puntuales y para trabajo presencial en el entorno de Girona.</li>
      </ul>
    </section>
  );
}
