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
    id: "fresa-regalo",
    image: "images/real/pastel-fresa.jpg",
    text: "Listo para regalar",
    alt: "Pastel de fresa listo para regalar",
    layout: "tall",
  },
  {
    id: "vainilla-personalizado",
    image: "images/real/pastel-vainilla.jpg",
    text: "Detalle personalizado",
    alt: "Pastel personalizado Maison Steff",
  },
  {
    id: "chocolate-encargo",
    image: "images/real/pastel-chocolate.jpg",
    text: "Hecho por encargo",
    alt: "Pastel artesanal Maison Steff",
  },
  {
    id: "coleccion-maison",
    image: "images/real/empaque-pasteles.jpg",
    text: "Una pequeña colección",
    alt: "Selección de pasteles individuales Maison Steff",
    layout: "wide",
  },
  {
    id: "mixto-especial",
    image: "images/real/pastel-mixto.jpg",
    text: "Un gesto que se recuerda",
    alt: "Pastel mixto decorado con flores rosa",
  },
];
