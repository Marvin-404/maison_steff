# Maison Steff

Landing premium de ventas para Maison Steff, construida con Astro, fotografías reales y conversión directa hacia Instagram.

La experiencia incluye una portada de marca controlada por scroll, textos y productos animados con GSAP, catálogo filtrable y una reserva guiada de tres pasos que copia la solicitud antes de abrir Instagram.

## Ejecutar localmente

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:4321/maison_steff/`.

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

Repositorio oficial: `https://github.com/Marvin-404/maison_steff`

El sitio es completamente estático. `astro.config.mjs` configura automáticamente el base path `/maison_steff/` y el workflow `.github/workflows/deploy.yml` publica cada cambio enviado a `main`.

En **Settings > Pages**, selecciona **GitHub Actions** como fuente. La reserva no requiere backend: genera una solicitud, la copia al portapapeles y abre `https://ig.me/m/maison_steff` para completar el pedido por DM.

### Publicar cambios futuros

Esta carpeta ya está conectada al repositorio oficial `Marvin-404/maison_steff` en la rama `main`. Para publicar cambios futuros:

```bash
git status
git add .
git commit -m "Mejora la experiencia de Maison Steff"
git push origin main
```

Repositorio remoto verificado: `https://github.com/Marvin-404/maison_steff.git`.
