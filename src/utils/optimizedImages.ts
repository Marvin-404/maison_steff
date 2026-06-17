import { withBase } from "./asset";

interface ImageVariant {
  width: number;
  path: string;
}

interface OptimizedImage {
  webp: ImageVariant[];
}

const image = (name: string, widths: number[]): ImageVariant[] =>
  widths.map((width) => ({
    width,
    path: `images/optimized/${name}-${width}.webp`,
  }));

const optimizedImages: Record<string, OptimizedImage> = {
  "images/real/maison-steff-logo.png": {
    webp: image("maison-steff-logo", [160, 320, 520]),
  },
  "images/real/empaque-pasteles.jpg": {
    webp: image("empaque-pasteles", [360, 540, 720, 960, 1050]),
  },
  "images/real/amarillo-margaritas.jpg": {
    webp: image("amarillo-margaritas", [360, 540, 720, 929]),
  },
  "images/real/aniversario-menta.jpg": {
    webp: image("aniversario-menta", [360, 540, 720, 828]),
  },
  "images/real/chocolate-cafe-chantilly.jpg": {
    webp: image("chocolate-cafe-chantilly", [360, 540, 720, 736]),
  },
  "images/real/cumple-azul-margaritas.jpg": {
    webp: image("cumple-azul-margaritas", [360, 540, 720, 750]),
  },
  "images/real/cumple-rosa-dedicatoria.jpg": {
    webp: image("cumple-rosa-dedicatoria", [360, 540, 720, 736]),
  },
  "images/real/cumple-rosa-box-limpio.jpg": {
    webp: image("cumple-rosa-box-limpio", [360, 540, 720, 736]),
  },
  "images/real/cumple-veintitres-azul.jpg": {
    webp: image("cumple-veintitres-azul", [360, 540, 720, 736]),
  },
  "images/real/cumple-verde-box.jpg": {
    webp: image("cumple-verde-box", [360, 540, 720, 736]),
  },
  "images/real/floral-rosa-box.jpg": {
    webp: image("floral-rosa-box", [360, 540, 720, 736]),
  },
  "images/real/fresa-chantilly-fruta.jpg": {
    webp: image("fresa-chantilly-fruta", [360, 540, 720, 736]),
  },
  "images/real/fresa-clasica-fruta.jpg": {
    webp: image("fresa-clasica-fruta", [360, 540, 700]),
  },
  "images/real/margaritas-verde-caja.jpg": {
    webp: image("margaritas-verde-caja", [360, 502]),
  },
  "images/real/mini-rosa-vintage-box.jpg": {
    webp: image("mini-rosa-vintage-box", [360, 540, 564]),
  },
  "images/real/rosas-chantilly-box.jpg": {
    webp: image("rosas-chantilly-box", [360, 540, 720, 736]),
  },
};

export const getOptimizedImage = (src: string) => optimizedImages[src];

export const toSrcSet = (variants: ImageVariant[]) =>
  variants.map((variant) => `${withBase(variant.path)} ${variant.width}w`).join(", ");
