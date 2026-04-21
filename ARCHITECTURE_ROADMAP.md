# SASE Decision Studio - Architecture Roadmap

## Estado actual

- Aplicación estática en GitHub Pages.
- HTML/CSS/JavaScript vanilla.
- Datos en `data.js`.
- Lógica de scoring, render y PDF en `app.js`.
- Persistencia local mediante `localStorage`.

## Siguiente refactor recomendado

1. Separar `app.js` en módulos:
   - `state.js`
   - `scoring.js`
   - `renderers/`
   - `pdf.js`
   - `storage.js`
2. Añadir tests unitarios para:
   - ranking ponderado
   - requisitos imprescindibles
   - presets de cliente
   - exportación por sección
3. Mover datos a JSON versionado o API.
4. Añadir backend si se requiere multiusuario:
   - Supabase/PostgreSQL para evaluaciones
   - FastAPI para scoring versionado y feeds externos
   - autenticación y roles
5. Migrar hosting si hacen falta headers HTTP avanzados:
   - Cloudflare Pages
   - Netlify
   - Vercel

## Hardening pendiente fuera de GitHub Pages

GitHub Pages no permite configurar todos los headers de seguridad. Para producción se recomienda:

- `Strict-Transport-Security`
- `Content-Security-Policy` HTTP
- `X-Content-Type-Options: nosniff`
- `Permissions-Policy`
- `Referrer-Policy`
- `frame-ancestors 'none'`

## Madurez objetivo

- MVP actual: evaluación visual y exportación.
- Growth: evaluaciones persistentes, comparativas por cliente y evidencias versionadas.
- Scale: backend, usuarios, auditoría, actualizaciones automáticas de CVEs/fuentes y control de cambios.
