export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Jordi Serrano — Desarrollador Web Full Stack · IA aplicada</p>
      <p>
        <a className="chip" href="mailto:jordiscdot@gmail.com">jordiscdot@gmail.com</a>{' '}
        <a className="chip" href="tel:627924258">627 924 258</a>
      </p>
    </footer>
  );
}
