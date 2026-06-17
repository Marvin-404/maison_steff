export type ProductCategory = "regalo" | "clasicos" | "especiales" | "pedidos";
export type CatalogFilter = ProductCategory | "all";

export interface Product {
  id: string;
  name: string;
  category: string;
  filters: ProductCategory[];
  description: string;
  price: string;
  badge: string;
  image: string;
  alt: string;
  available?: boolean;
}

export const catalogFilters: ReadonlyArray<{ value: CatalogFilter; label: string }> = [
  { value: "all", label: "Todos" },
  { value: "regalo", label: "Para regalo" },
  { value: "clasicos", label: "Clásicos" },
  { value: "especiales", label: "Ediciones especiales" },
  { value: "pedidos", label: "Más pedidos" },
];

export const products: Product[] = [
  {
    id: "fresa",
    name: "Pastel individual de fresa",
    category: "Clásico Maison",
    filters: ["clasicos", "pedidos"],
    description: "Suave, fresco y delicado.",
    price: "Desde L ___",
    badge: "Más pedido",
    image: "images/real/fresa-chantilly-fruta.jpg",
    alt: "Pastel rosado de fresa con chantilly y fresas naturales",
  },
  {
    id: "vainilla",
    name: "Pastel individual de vainilla",
    category: "Clásico Maison",
    filters: ["clasicos", "regalo"],
    description: "Un clásico suave y elegante.",
    price: "Desde L ___",
    badge: "Para regalo",
    image: "images/real/margaritas-verde-caja.jpg",
    alt: "Pastel verde pastel en caja con margaritas y mensaje de cumpleaños",
  },
  {
    id: "chocolate",
    name: "Pastel individual de chocolate",
    category: "Clásico Maison",
    filters: ["clasicos", "pedidos"],
    description: "Intenso, cremoso e irresistible.",
    price: "Desde L ___",
    badge: "Favorito",
    image: "images/real/chocolate-cafe-chantilly.jpg",
    alt: "Pastel con cubierta de chocolate y borde de chantilly cafe",
  },
  {
    id: "mixto",
    name: "Pastel individual mixto",
    category: "Clásico Maison",
    filters: ["clasicos", "pedidos"],
    description: "Una combinación especial en cada detalle.",
    price: "Desde L ___",
    badge: "Más pedido",
    image: "images/real/mini-rosa-vintage-box.jpg",
    alt: "Pastel rosado en caja con decoracion vintage",
  },
  {
    id: "dedicatoria",
    name: "Pastel personalizado con dedicatoria",
    category: "Diseño en chantilly",
    filters: ["especiales", "pedidos", "regalo"],
    description: "Mensaje breve, edad o idea especial sobre una cubierta suave.",
    price: "Desde L ___",
    badge: "Personalizable",
    image: "images/real/cumple-rosa-dedicatoria.jpg",
    alt: "Pastel blanco con dedicatoria de cumpleaños y detalles rosados",
  },
  {
    id: "floral-chantilly",
    name: "Pastel floral en chantilly",
    category: "Diseño en chantilly",
    filters: ["especiales", "regalo", "pedidos"],
    description: "Flores en manga y tonos suaves para un detalle delicado.",
    price: "Desde L ___",
    badge: "Chantilly",
    image: "images/real/rosas-chantilly-box.jpg",
    alt: "Pastel en caja con flores rosadas hechas en chantilly",
  },
  {
    id: "temporada",
    name: "Edición especial de temporada",
    category: "Edición especial",
    filters: ["especiales", "regalo"],
    description: "Una sorpresa disponible por tiempo limitado.",
    price: "Desde L ___",
    badge: "Edición limitada",
    image: "images/real/amarillo-margaritas.jpg",
    alt: "Pastel amarillo con margaritas blancas y detalle de edad",
  },
  {
    id: "box-regalo",
    name: "Box de regalo Maison Steff",
    category: "Experiencia de regalo",
    filters: ["regalo", "especiales"],
    description: "Pastel, presentación y dedicatoria.",
    price: "Desde L ___",
    badge: "Para regalo",
    image: "images/real/floral-rosa-box.jpg",
    alt: "Pastel floral en caja listo para regalar",
  },
];

export const availableProducts = products.filter((product) => product.available !== false);
