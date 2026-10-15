export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Pie de página">
      <div className="footer-top" aria-hidden="true"></div>

      <div className="footer-inner">
        <p className="footer-name">Jordi <span>Serrano</span></p>
        <p className="footer-tagline">
          Desarrollador Web Full Stack · IA aplicada · SAP ABAP
        </p>

        <div className="footer-contacts">
          <a className="chip" href="mailto:jordiscdot@gmail.com">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            jordiscdot@gmail.com
          </a>
          <a className="chip" href="tel:627924258">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.09 4.22 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            627 924 258
          </a>
          <span className="chip">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Girona, España
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Jordi Serrano — Desarrollador Web Full Stack · IA aplicada</p>
      </div>
    </footer>
  );
}
