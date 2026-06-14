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
    image: "images/real/pastel-fresa.jpg",
    alt: "Pastel individual de fresa Maison Steff",
  },
  {
    id: "vainilla",
    name: "Pastel individual de vainilla",
    category: "Clásico Maison",
    filters: ["clasicos", "regalo"],
    description: "Un clásico suave y elegante.",
    price: "Desde L ___",
    badge: "Para regalo",
    image: "images/real/pastel-vainilla.jpg",
    alt: "Pastel individual de vainilla Maison Steff",
  },
  {
    id: "chocolate",
    name: "Pastel individual de chocolate",
    category: "Clásico Maison",
    filters: ["clasicos", "pedidos"],
    description: "Intenso, cremoso e irresistible.",
    price: "Desde L ___",
    badge: "Favorito",
    image: "images/real/pastel-chocolate.jpg",
    alt: "Pastel individual de chocolate Maison Steff",
  },
  {
    id: "mixto",
    name: "Pastel individual mixto",
    category: "Clásico Maison",
    filters: ["clasicos", "pedidos"],
    description: "Una combinación especial en cada detalle.",
    price: "Desde L ___",
    badge: "Más pedido",
    image: "images/real/pastel-mixto.jpg",
    alt: "Pastel individual mixto Maison Steff",
  },
  {
    id: "temporada",
    name: "Edición especial de temporada",
    category: "Edición especial",
    filters: ["especiales", "regalo"],
    description: "Una sorpresa disponible por tiempo limitado.",
    price: "Desde L ___",
    badge: "Edición limitada",
    image: "images/real/pastel-mixto.jpg",
    alt: "Pastel decorado con flores en tonos rosa Maison Steff",
  },
  {
    id: "box-regalo",
    name: "Box de regalo Maison Steff",
    category: "Experiencia de regalo",
    filters: ["regalo", "especiales"],
    description: "Pastel, presentación y dedicatoria.",
    price: "Desde L ___",
    badge: "Para regalo",
    image: "images/real/empaque-pasteles.jpg",
    alt: "Selección de pasteles individuales en empaque Maison Steff",
  },
];

export const availableProducts = products.filter((product) => product.available !== false);
