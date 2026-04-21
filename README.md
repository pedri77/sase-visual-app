# SASE Decision Studio

Aplicacion estatica para valorar visualmente proveedores SASE/SSE:

- Zscaler
- Netskope
- Palo Alto Networks
- Fortinet
- Cisco

Incluye scoring ponderado, casos de uso imprescindibles, funcionalidades por producto/marca, matriz de riesgo, ENS, cifrado, implantacion/provision, posicion on-premise/soberana, valoracion quantum/IA, evidencia de confianza y casos de exito publicos.

El boton de descarga genera un PDF con portada, logo de la web y toda la informacion estructurada en secciones.

## Estructura

- `index.html`: layout principal y navegacion por secciones.
- `styles.css`: sistema visual, responsive y animaciones.
- `data.js`: catalogo editable de fabricantes, criterios, evidencias, CVEs, perfiles y casos de uso.
- `app.js`: motor de scoring, recomendacion, graficos, navegacion y PDF ejecutivo.

## Flujo de valoracion

1. Seleccionar el perfil de cliente en `Cliente`.
2. Aplicar el preset para ajustar pesos y casos imprescindibles.
3. Revisar la recomendacion en `Panel` y `Scoring`.
4. Validar funcionalidades, evidencia, riesgos, cifrado, implantacion y quantum/IA.
5. Descargar el PDF ejecutivo.

## Publicacion

Esta app esta preparada para GitHub Pages desde la rama `main`, carpeta raiz.
