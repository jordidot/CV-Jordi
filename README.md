# CV Jordi

Currículum personal de **Jordi Serrano**, desarrollador Full Stack.

## Contenido del repositorio

| Archivo | Descripción |
| --- | --- |
| `index.html` | CV web interactivo. Página única con estilos propios y una escena 3D de Three.js. |
| `CVJordi2025_final.pdf` | Versión en PDF del currículum. |
| `CVJordi2025_final.docx` | Versión editable en Word del currículum. |

## Ver el CV web en local

El `index.html` es una página estática, así que basta con abrirla en el navegador.
Si prefieres servirlo por HTTP:

```bash
python -m http.server 8000
```

Y abre <http://localhost:8000>.

### Dependencias externas

La página carga recursos desde CDN, por lo que necesita conexión a internet:

- [Three.js](https://threejs.org/) 0.164.1, vía jsDelivr (escena 3D del fondo).
- Google Fonts: Inter y Space Grotesk.

Sin conexión, el contenido y los estilos base se ven igualmente, pero no la animación 3D ni las tipografías.
