import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// El resultado se genera en ../docs, que es lo que se publica.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
});
