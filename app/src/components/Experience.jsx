/**
 * Seccion "Experiencia Laboral": tres tarjetas con empresa, rol, fecha y bullets.
 */
export default function Experience() {
  return (
    <section className="section" id="exp" aria-labelledby="exp-title">
      <div className="section-label">Trayectoria</div>
      <h2 className="section-title" id="exp-title" style={{ margin: '0 0 2.5rem' }}>
        Experiencia Laboral
      </h2>

      <article className="card">
        <div className="card-header">
          <div>
            <div className="card-company">Fustes Esteba</div>
            <div className="card-role">Programador ABAP · Girona</div>
          </div>
          <span className="card-date">
            <time dateTime="2025-10">Oct 2025</time> — Presente
          </span>
        </div>
        <ul>
          <li>
            Desarrollo y mantenimiento de programas ABAP en SAP ECC 6.0 (SAP_BASIS 731),
            incluyendo informes, formularios y mejoras de proceso a medida.
          </li>
          <li>
            Migración de SAP R/3 v731 a S/4HANA: análisis de impacto sobre los desarrollos
            existentes y adaptación de los programas Z al nuevo entorno.
          </li>
          <li>
            Validación post-migración junto a usuarios clave: detección y resolución de
            incidencias y ajuste del comportamiento de los programas migrados.
          </li>
          <li>
            Consultoría SAP y soporte directo a usuarios finales: toma de requisitos,
            resolución de incidencias y documentación técnica de las soluciones entregadas.
          </li>
        </ul>
      </article>

      <article className="card">
        <div className="card-header">
          <div>
            <div className="card-company">Comexi</div>
            <div className="card-role">Desarrollador Web Full Stack & SAP · Riudellots de la Selva</div>
          </div>
          <span className="card-date">
            <time dateTime="2023-10">Oct 2023</time> — <time dateTime="2025-10">Oct 2025</time>
          </span>
        </div>
        <ul>
          <li>
            Desarrollo full stack de aplicaciones internas con Laravel y Vue 3, e interfaces
            SAP con SAPUI5, unificando frontend, backend y capa SAP.
          </li>
          <li>
            Automatización de procesos con Python y C# (WPF .NET), reduciendo el trabajo manual
            en tareas repetitivas del día a día.
          </li>
          <li>
            Creación de aplicaciones con Google AppSheet y chatbots con IA integrada para
            consultar información interna desde el propio flujo de trabajo.
          </li>
          <li>
            Un año trabajando con SAP R/3 v740 y participación en la migración a S/4HANA,
            analizando y adaptando los desarrollos existentes.
          </li>
          <li>
            Tutor del programa DUAL de 1.000 horas: mentoría técnica y seguimiento de los
            estudiantes durante su etapa en la empresa.
          </li>
        </ul>
      </article>

      <article className="card">
        <div className="card-header">
          <div>
            <div className="card-company">Cocinero Profesional</div>
            <div className="card-role">Varios establecimientos · Girona y alrededores</div>
          </div>
          <span className="card-date">
            <time dateTime="2013">2013</time> — <time dateTime="2022">2022</time>
          </span>
        </div>
        <ul>
          <li>
            Nueve años de trayectoria en hostelería profesional, en varios establecimientos
            de Girona y alrededores.
          </li>
          <li>
            Trabajo bajo presión y coordinación de equipo en servicios de alto volumen,
            con atención al detalle en cada elaboración.
          </li>
          <li>
            Estudios de cocina finalizados con las mejores notas de Girona.
          </li>
        </ul>
      </article>
    </section>
  );
}
