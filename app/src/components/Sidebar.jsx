const NAV = [
  ['01', 'Perfil', '#hero'],
  ['02', 'Experiencia', '#exp'],
  ['03', 'Tecnologías', '#skills'],
  ['04', 'IA aplicada', '#ai'],
  ['05', 'Formación', '#edu'],
  ['06', 'Idiomas y otros', '#extra'],
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <p className="side-name">
          Jordi <span>Serrano</span>
        </p>
        <p className="side-role">Desarrollador Web Full Stack · Girona</p>
        <p className="side-status">Disponible para nuevos proyectos</p>
      </div>

      <nav className="side-nav" aria-label="Secciones del currículum">
        {NAV.map(([num, label, href]) => (
          <a key={href} href={href} data-num={num}>
            {label}
          </a>
        ))}
      </nav>

      <div className="side-links">
        <a href="mailto:jordiscdot@gmail.com">jordiscdot@gmail.com</a>
        <a href="tel:627924258">627 924 258</a>
      </div>

      <p className="side-foot">
        Castellano y catalán nativos.
        <br />
        Carnet de conducir y vehículo propio.
      </p>
    </aside>
  );
}
