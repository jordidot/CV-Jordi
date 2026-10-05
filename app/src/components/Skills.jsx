export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="section-label">Stack</div>
      <h2 className="section-title" id="skills-title" style={{ marginTop: 0 }}>Tecnologías</h2>

      <div className="skills-grid">
        <div className="skill-group">
          <div className="skill-group-label">Backend</div>
          <div className="skill-tags">
            <span className="tag">PHP</span>
            <span className="tag">Laravel</span>
            <span className="tag">Python</span>
            <span className="tag">C#</span>
            <span className="tag">.NET / WPF</span>
            <span className="tag">APIs REST</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-label">Frontend</div>
          <div className="skill-tags">
            <span className="tag">JavaScript</span>
            <span className="tag">Vue 3</span>
            <span className="tag">React</span>
            <span className="tag">SAPUI5</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-label">SAP & ABAP</div>
          <div className="skill-tags">
            <span className="tag">ABAP</span>
            <span className="tag">SAP ECC 6.0</span>
            <span className="tag">SAP S/4HANA</span>
            <span className="tag">SAP_BASIS 731</span>
            <span className="tag">SAP R/3 v740</span>
            <span className="tag">Migración de desarrollos Z</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-label">Datos</div>
          <div className="skill-tags">
            <span className="tag">SQL</span>
            <span className="tag">MySQL</span>
            <span className="tag">Consultas y modelado de datos</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-label">IA & LLM</div>
          <div className="skill-tags">
            <span className="tag">OpenWebUI</span>
            <span className="tag">MCP Servers</span>
            <span className="tag">Chatbots con IA</span>
            <span className="tag">Embeddings</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-label">Infraestructura</div>
          <div className="skill-tags">
            <span className="tag">Docker</span>
            <span className="tag">Servicios Python</span>
            <span className="tag">GLPI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
