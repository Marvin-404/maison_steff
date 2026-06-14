# Maison Steff

Landing premium de ventas para Maison Steff, construida con Astro, fotografías reales y conversión directa hacia Instagram.

La experiencia incluye una portada de marca controlada por scroll, textos y productos animados con GSAP, catálogo filtrable y una reserva guiada de tres pasos que copia la solicitud antes de abrir Instagram.

## Ejecutar localmente

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:4321/maison-steff/`.

Para revisar la versión final compilada:

```bash
npm run build
npm run preview
```

## Editar contenido

- Productos, precios, etiquetas y fotografías: `src/data/products.ts`
- Cupos, estado de agenda, Instagram, testimonios y preguntas: `src/data/site.ts`
- Fotografías, logo y QR reales: `public/images/real/`
- Colores, responsive y dirección visual: `src/styles/global.css`
- Animaciones GSAP e intro de marca: `src/scripts/motion.ts`
- Flujo guiado de reserva: `src/components/ReservationBuilder.astro`

Para cambiar una fotografía, guarda el archivo optimizado en `public/images/real/` y actualiza su ruta en `src/data/products.ts`.

Para cambiar Instagram, edita `instagramHandle`, `instagramUrl` e `instagramDmUrl` en `src/data/site.ts`.

## GitHub Pages

Repositorio existente: `https://github.com/Marvin-404/maison-steff`

El sitio es completamente estático. `astro.config.mjs` configura automáticamente el base path `/maison-steff/` y el workflow `.github/workflows/deploy.yml` publica cada cambio enviado a `main`.

En **Settings > Pages**, selecciona **GitHub Actions** como fuente. La reserva no requiere backend: genera una solicitud, la copia al portapapeles y abre `https://ig.me/m/maison_steff` para completar el pedido por DM.

### Conectar esta carpeta al repositorio existente

Esta carpeta local todavía no contiene un repositorio Git. Ejecuta estos comandos una sola vez desde `Maison Steff`:

```bash
git init
git remote add origin https://github.com/Marvin-404/maison-steff.git
git fetch origin main
git reset --mixed origin/main
git branch -M main
git add .
git commit -m "Rediseño premium de Maison Steff"
git push -u origin main
```

El `reset --mixed` conserva los archivos locales actuales y conecta el nuevo commit con el historial existente del repositorio.
