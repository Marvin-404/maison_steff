# Maison Steff

Landing premium para Maison Steff, una pastelería boutique de pasteles artesanales individuales. El sitio está construido con Astro, fotografías reales, animaciones GSAP, catálogo filtrable y un flujo de reserva estático orientado a Instagram.

Sitio publicado: https://marvin-404.github.io/maison_steff/

Repositorio oficial: https://github.com/Marvin-404/maison_steff

## Ejecutar Localmente

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

Abrir:

```text
http://localhost:4321/maison_steff/
```

Para revisar la versión compilada:

```bash
npm run build
npm run preview
```

## Flujo De Reserva

El sitio no usa backend, base de datos, carrito ni WhatsApp. La reserva funciona así:

1. El cliente elige un producto.
2. Completa la solicitud guiada.
3. La web genera un mensaje humano para Instagram.
4. La web intenta copiar el mensaje al portapapeles.
5. Se muestra el modal “Tu reserva no se perdió”.
6. El cliente pega el mensaje en Instagram y lo envía.

Si el navegador no permite copiar automáticamente, el mensaje queda visible en la vista previa y se puede seleccionar manualmente.

## Archivos Principales

- `src/pages/index.astro`: orden de las secciones.
- `src/layouts/BaseLayout.astro`: SEO, Open Graph, JSON-LD, scripts base y estilos globales.
- `src/components/ReservationBuilder.astro`: formulario guiado, mensaje copiable y modal de Instagram.
- `src/components/ProductCatalog.astro`: filtros del catálogo y selección de producto.
- `src/components/ProductCard.astro`: tarjeta clickeable del producto.
- `src/components/BrandIntro.astro`: intro visual del logo.
- `src/components/HeroCinematic.astro`: hero principal.
- `src/scripts/motion.ts`: animaciones GSAP y reveal on scroll.
- `src/styles/global.css`: sistema visual, responsive y estados interactivos.

## Editar Productos

Los productos viven en:

```text
src/data/products.ts
```

Para agregar un producto:

1. Copia un objeto existente dentro de `products`.
2. Cambia `id`, `name`, `category`, `filters`, `description`, `price`, `basePrice`, `badge`, `image` y `alt`.
3. Mantén cada `id` único.
4. Usa rutas de imagen desde `images/real/`.

Filtros disponibles:

```text
regalo
clasicos
especiales
pedidos
```

Para ocultar un producto sin borrarlo:

```ts
available: false
```

El catálogo, la galería y el formulario de reserva se actualizan desde esos datos.

## Agregar Imágenes

Las imágenes reales van en:

```text
public/images/real/
```

Las variantes WebP optimizadas van en:

```text
public/images/optimized/
```

Después de agregar una imagen nueva, registra sus variantes en:

```text
src/utils/optimizedImages.ts
```

Ejemplo:

```ts
"images/real/nuevo-pastel.jpg": {
  webp: image("nuevo-pastel", [360, 540, 720]),
},
```

Convención recomendada para archivos optimizados:

```text
nuevo-pastel-360.webp
nuevo-pastel-540.webp
nuevo-pastel-720.webp
```

Si no registras la imagen en `optimizedImages.ts`, el sitio usará la imagen original como fallback.

## Editar Galería

La galería se genera desde los productos disponibles mediante:

```text
src/data/gallery.ts
src/data/proposals.ts
```

Los layouts destacados se controlan en `featuredLayouts`:

```ts
standard
tall
wide
```

## Editar Cupos, Instagram Y Textos Globales

Archivo:

```text
src/data/site.ts
```

Aquí puedes cambiar:

- Instagram oficial.
- Link directo a DM.
- Cupos disponibles.
- Tiempo de anticipación.
- Estado de agenda.
- Testimonios.
- Preguntas frecuentes.
- Título y descripción SEO.

Campos importantes:

```ts
instagramHandle
instagramUrl
instagramDmUrl
slots.available
slots.leadTime
slots.status
```

## Publicar En GitHub Pages

El proyecto está configurado para el repositorio:

```text
Marvin-404/maison_steff
```

`astro.config.mjs` usa:

```js
base: "/maison_steff"
```

El workflow `.github/workflows/deploy.yml` publica automáticamente cada push a `main`.

Para publicar cambios:

```bash
git status
git add .
git commit -m "Describe el cambio"
git push origin main
```

En GitHub, Pages debe estar configurado con fuente:

```text
GitHub Actions
```

## Archivos Delicados

Tocar con cuidado:

- `src/components/BrandIntro.astro`: intro del logo.
- `src/components/HeroCinematic.astro`: primera impresión del sitio.
- `src/scripts/motion.ts`: animaciones GSAP.
- `src/styles/global.css`: identidad visual, responsive y animaciones CSS.
- `src/components/ReservationBuilder.astro`: flujo de conversión hacia Instagram.
- `astro.config.mjs`: base path de GitHub Pages.

Antes de modificar estos archivos, ejecuta:

```bash
npm run build
```

Y revisa el sitio en móvil.

## Checklist Antes De Publicar

- `npm run build` pasa sin errores.
- El sitio abre en `/maison_steff/`.
- No hay overflow horizontal en móvil.
- El catálogo filtra correctamente.
- Al tocar una tarjeta, se selecciona el producto correcto.
- La reserva genera un mensaje humano.
- El modal indica que la reserva no se perdió.
- Si copiar falla, el mensaje se puede seleccionar manualmente.
- Los links de Instagram apuntan a `maison_steff`.
- Las imágenes cargan con rutas del base path.

## Nota De Negocio

Maison Steff funciona por reserva y disponibilidad. La web es informativa y estática; la confirmación final ocurre manualmente por Instagram.
