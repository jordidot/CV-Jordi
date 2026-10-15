export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Jordi Serrano · Desarrollador Web Full Stack</p>
      <p style={{ marginTop: '0.5rem' }}>
        <a
          href="mailto:jordiscdot@gmail.com"
          style={{ color: 'var(--accent)', textDecoration: 'none' }}
        >
          jordiscdot@gmail.com
        </a>
        {' · '}Girona, España
      </p>
    </footer>
  );
}
