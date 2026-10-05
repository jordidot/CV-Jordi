/**
 * Seccion "IA Aplicada": intro y bloques de tarjetas con listas.
 */
export default function Ai() {
  return (
    <section className="section" id="ai" aria-labelledby="ai-title">
      <div className="sec-head">
        <span className="sec-num">04</span>
        <div>
          <p className="section-label">Diferencial</p>
          <h2 className="section-title" id="ai-title">IA Aplicada</h2>
        </div>
      </div>

      <div className="ai-card" style={{ marginBottom: '1rem' }}>
        <p>
          Mi especialización es la IA aplicada: llevar los modelos de lenguaje a herramientas que el
          equipo usa a diario, en lugar de quedarse en la prueba de concepto. Trabajo la integración de
          <strong>LLM</strong> con sistemas corporativos, la construcción de <strong>servidores MCP</strong>
          que exponen datos internos al asistente y el despliegue de la infraestructura necesaria para
          que todo funcione en un entorno controlado.
        </p>
      </div>

      <div className="ai-card" style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1rem', marginBottom: '0.6rem' }}>
          Asistentes sobre documentación interna
        </h3>
        <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--muted)', fontSize: '13.5px' }}>
          <li>
            Despliegue y administración de <strong>OpenWebUI</strong> como interfaz de asistente
            para el equipo, apoyada en servicios Docker y Python.
          </li>
          <li>
            Desarrollo de <strong>MCP servers propios</strong> que consultan la API de GLPI y se
            integran en OpenWebUI, de modo que el asistente accede a datos reales del sistema
            en lugar de responder de memoria.
          </li>
          <li>
            Consulta de <strong>manuales de usuario y documentación técnica</strong> directamente
            desde el chat, sin salir de la herramienta ni buscar en carpetas compartidas.
          </li>
          <li>
            Uso de <strong>embeddings</strong> como base de la búsqueda y recuperación de
            información sobre esa documentación.
          </li>
        </ul>
      </div>

      <div className="ai-card" style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1rem', marginBottom: '0.6rem' }}>
          IA integrada en aplicaciones
        </h3>
        <p style={{ marginBottom: '0.6rem' }}>
          Además del asistente, he incorporado IA dentro de aplicaciones de gestión, donde el valor
          está en que el usuario la use sin cambiar de herramienta:
        </p>
        <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--muted)', fontSize: '13.5px' }}>
          <li><strong>Chatbots con IA integrada</strong> dentro de aplicaciones web de empresa.</li>
          <li>
            Aplicaciones con <strong>Google AppSheet</strong> para automatizar procesos internos
            y reducir tareas manuales repetitivas.
          </li>
          <li>
            Conexión de estos asistentes con servicios y bases de datos existentes, de forma que
            la respuesta se apoye en la información que ya gestiona la organización.
          </li>
        </ul>
      </div>

      <div className="ai-card">
        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1rem', marginBottom: '0.6rem' }}>
          Despliegue y operación
        </h3>
        <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--muted)', fontSize: '13.5px' }}>
          <li>
            Contenerización del stack con <strong>Docker</strong> y servicios propios en
            <strong>Python</strong> para que el entorno sea reproducible entre máquinas.
          </li>
          <li>
            Implementación de <strong>GLPI</strong> como fuente de datos del asistente, con su
            documentación técnica asociada.
          </li>
          <li>
            Mantenimiento y evolución de estas piezas una vez en producción: permisos, acceso a la
            API y actualización de los servicios cuando cambian los sistemas que consultan.
          </li>
        </ul>
      </div>
    </section>
  );
}
