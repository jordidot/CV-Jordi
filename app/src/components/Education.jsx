export default function Education() {
  return (
    <section className="section" id="edu" aria-labelledby="edu-title">
      <div className="section-label">Formación</div>
      <h2 className="section-title" id="edu-title">Educación</h2>

      <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginBottom: '1.5rem' }}>
        Mi formación técnica en software llegó después de nueve años en hostelería: primero un
        bootcamp intensivo de desarrollo web y, a continuación, el ciclo superior de DAW en
        modalidad dual, compaginando el aula con trabajo real en empresa. No fue un cambio
        improvisado, sino una reconversión planificada en la que la disciplina y el ritmo de la
        cocina profesional siguen siendo una ventaja.
      </p>

      <div className="edu-card" style={{ marginBottom: '1rem' }}>
        <div className="edu-dot" aria-hidden="true" />
        <div className="card" style={{ flex: 1, marginBottom: 0 }}>
          <div className="card-header">
            <div>
              <div className="card-company">Institut Montilivi</div>
              <div className="card-role">CFGS DAW — Desarrollo de Aplicaciones Web · Girona</div>
            </div>
            <time className="card-date" dateTime="2022-09">Sep 2022 — Jun 2024</time>
          </div>
          <ul>
            <li>Programación web, bases de datos, frameworks y despliegue de aplicaciones</li>
            <li>Modalidad dual en Comexi: desarrollo en un equipo real durante el ciclo</li>
            <li>Base sobre la que construí mi trayectoria actual como desarrollador full stack</li>
          </ul>
        </div>
      </div>

      <div className="edu-card" style={{ marginBottom: '1rem' }}>
        <div className="edu-dot" aria-hidden="true" />
        <div className="card" style={{ flex: 1, marginBottom: 0 }}>
          <div className="card-header">
            <div>
              <div className="card-company">Fundació Esplai · ICT Youth Employment</div>
              <div className="card-role">Bootcamp 210h PHP &amp; MySQL · Salt</div>
            </div>
            <time className="card-date" dateTime="2022-03">Mar 2022 — Jun 2022</time>
          </div>
          <ul>
            <li>210 horas de formación intensiva orientadas a la inserción laboral en el sector TIC</li>
            <li>Desarrollo web full stack: programación de servidor y gestión de bases de datos</li>
            <li>Primer paso del cambio de sector, previo al ciclo superior de DAW</li>
          </ul>
        </div>
      </div>

      <div className="edu-card">
        <div className="edu-dot" aria-hidden="true" />
        <div className="card" style={{ flex: 1, marginBottom: 0 }}>
          <div className="card-header">
            <div>
              <div className="card-company">Formación en cocina</div>
              <div className="card-role">Hostelería y restauración · Girona</div>
            </div>
            <span className="card-date">Etapa previa</span>
          </div>
          <ul>
            <li>Estudios de cocina finalizados, con las mejores notas de Girona</li>
            <li>Punto de partida de nueve años de trabajo en cocina profesional</li>
            <li>Aporta rigor, trabajo en equipo y capacidad de rendir bajo presión</li>
          </ul>
        </div>
      </div>

      <p style={{ color: 'var(--muted)', fontSize: '13.5px', marginTop: '1.5rem' }}>
        Complemento esta base con formación continua por mi cuenta, centrada en el despliegue de
        servicios y la integración de IA en aplicaciones: el detalle está en la sección
        <a href="#ai" style={{ color: 'var(--accent)', textDecoration: 'none' }}>IA Aplicada</a>.
      </p>
    </section>
  );
}
