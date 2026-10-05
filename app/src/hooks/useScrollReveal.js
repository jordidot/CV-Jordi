import { useEffect } from 'react';

/**
 * Anade la clase "visible" a cada .section cuando entra en pantalla,
 * igual que hacia el script original.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
}
