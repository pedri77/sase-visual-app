# Despliegue en GitHub Pages

La app es estatica y puede publicarse directamente en GitHub Pages.

## Nota sobre logos

Los logos se cargan como favicons desde los dominios oficiales de cada fabricante. Si la pagina se usa en un entorno sin acceso a internet, se recomienda descargar los assets autorizados por cada fabricante y servirlos localmente desde `assets/logos/`.

## Estado actual detectado

- El workspace local no tiene remoto Git configurado.
- `gh auth status` indica que el token de GitHub para `pedri77` no es valido.
- La app esta en `sase-visual-app/`.

## Opcion A: publicar en rama `gh-pages`

Cuando la autenticacion este lista y exista un repo remoto:

```bash
cd /Users/pedri77/Documents/Proyectos_ChapGPT
git remote add origin git@github.com:USUARIO/REPO.git
git subtree push --prefix sase-visual-app origin gh-pages
```

En GitHub:

1. Ir a `Settings` -> `Pages`.
2. Source: `Deploy from a branch`.
3. Branch: `gh-pages`.
4. Folder: `/root`.

La URL sera:

```text
https://USUARIO.github.io/REPO/
```

## Opcion B: publicar desde `main` con GitHub Actions

Recomendado si el repo va a contener mas documentos y futuras apps.

1. Crear un workflow que publique `sase-visual-app/`.
2. Activar Pages con `GitHub Actions`.
3. Hacer commit y push.

## Reautenticar GitHub CLI

```bash
gh auth login -h github.com
```

Despues se puede comprobar:

```bash
gh auth status
```
