export type GalleryLayout = "standard" | "tall" | "wide";

export interface GalleryItem {
  id: string;
  image: string;
  text: string;
  alt: string;
  layout?: GalleryLayout;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "floral-rosa-box",
    image: "images/real/floral-rosa-box.jpg",
    text: "Flores suaves en chantilly",
    alt: "Pastel floral con flores rosadas en caja",
    layout: "tall",
  },
  {
    id: "cumple-rosa-dedicatoria",
    image: "images/real/cumple-rosa-dedicatoria.jpg",
    text: "Dedicatoria hecha a mano",
    alt: "Pastel blanco con dedicatoria de cumpleaños y detalle rosado",
  },
  {
    id: "cumple-azul-margaritas",
    image: "images/real/cumple-azul-margaritas.jpg",
    text: "Cumpleaños en tonos suaves",
    alt: "Pastel azul con margaritas blancas y mensaje de cumpleaños",
  },
  {
    id: "aniversario-menta",
    image: "images/real/aniversario-menta.jpg",
    text: "Aniversario personalizado",
    alt: "Pastel color menta con mensaje de aniversario",
    layout: "wide",
  },
  {
    id: "mini-rosa-vintage-box",
    image: "images/real/mini-rosa-vintage-box.jpg",
    text: "Box listo para regalar",
    alt: "Pastel rosado en caja con decoracion vintage",
  },
  {
    id: "rosas-chantilly-box",
    image: "images/real/rosas-chantilly-box.jpg",
    text: "Rositas delicadas",
    alt: "Pastel en caja con rositas rosadas de chantilly",
  },
  {
    id: "cumple-veintitres-azul",
    image: "images/real/cumple-veintitres-azul.jpg",
    text: "Mensaje con edad",
    alt: "Pastel blanco con numero veintitres y corazones azules",
  },
  {
    id: "amarillo-margaritas",
    image: "images/real/amarillo-margaritas.jpg",
    text: "Margaritas en chantilly",
    alt: "Pastel amarillo con margaritas blancas y detalle de edad",
    layout: "tall",
  },
  {
    id: "cumple-verde-box",
    image: "images/real/cumple-verde-box.jpg",
    text: "Verde pastel personalizado",
    alt: "Pastel verde en caja con mensaje de cumpleaños",
  },
  {
    id: "margaritas-verde-caja",
    image: "images/real/margaritas-verde-caja.jpg",
    text: "Margaritas para regalar",
    alt: "Pastel verde pastel con margaritas en caja",
  },
  {
    id: "fresa-clasica-fruta",
    image: "images/real/fresa-clasica-fruta.jpg",
    text: "Fresa y chantilly",
    alt: "Pastel rosado con fresas naturales y chantilly",
    layout: "wide",
  },
  {
    id: "fresa-chantilly-fruta",
    image: "images/real/fresa-chantilly-fruta.jpg",
    text: "Fresas naturales",
    alt: "Pastel rosado decorado con fresas naturales",
  },
  {
    id: "cumple-rosa-box-limpio",
    image: "images/real/cumple-rosa-box-limpio.jpg",
    text: "Rosa clásico en box",
    alt: "Pastel rosado en caja con mensaje de cumpleaños",
  },
  {
    id: "chocolate-cafe-chantilly",
    image: "images/real/chocolate-cafe-chantilly.jpg",
    text: "Chocolate con chantilly",
    alt: "Pastel de chocolate con borde de chantilly cafe",
  },
];
