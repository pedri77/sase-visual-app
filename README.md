# SASE Decision Studio

Aplicacion estatica para valorar visualmente proveedores SASE/SSE:

- Zscaler
- Netskope
- Palo Alto Networks
- Fortinet
- Cisco

Incluye scoring ponderado, casos de uso imprescindibles, funcionalidades por producto/marca, matriz de riesgo con CVEs, respuesta de parches, incidentes documentados en medios, ENS, cifrado por capas, especificaciones tecnicas, implantacion/provision, posicion on-premise/soberana, valoracion Quantum, valoracion IA, evidencia de confianza y casos de exito publicos.

El boton superior descarga un PDF completo con portada, logo de la web y toda la informacion estructurada en secciones. Cada seccion tambien puede exportarse de forma independiente.

## Estructura

- `index.html`: layout principal y navegacion por secciones.
- `styles.css`: sistema visual, responsive y animaciones.
- `data.js`: catalogo editable de fabricantes, criterios, evidencias, CVEs, perfiles y casos de uso.
- `app.js`: motor de scoring, recomendacion, graficos, navegacion y PDF ejecutivo.
- `robots.txt` y `sitemap.xml`: indexacion basica para GitHub Pages.
- `ARCHITECTURE_ROADMAP.md`: hoja de ruta tecnica para evolucionar de app estatica a producto SaaS.

## Flujo de valoracion

1. Seleccionar el perfil de cliente en `Cliente`.
2. Aplicar el preset para ajustar pesos y casos imprescindibles.
3. Revisar la recomendacion en `Panel` y `Scoring`.
4. Validar funcionalidades, evidencia, riesgos, cifrado, implantacion y quantum/IA.
5. Descargar el PDF ejecutivo completo o un PDF especifico por seccion.

## Mejoras incluidas

- Persistencia local de pesos, perfil, escenario y casos imprescindibles.
- Enlaces navegables por hash para abrir secciones concretas.
- Metadatos SEO, canonical, Open Graph y Twitter Card.
- Politica CSP basica mediante meta tag compatible con GitHub Pages.
- Enlace de salto al contenido principal para accesibilidad.
- Boton superior de descarga completa diferenciado de las acciones de seccion.

## Publicacion

Esta app esta preparada para GitHub Pages desde la rama `main`, carpeta raiz.
