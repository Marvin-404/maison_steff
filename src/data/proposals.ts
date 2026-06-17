import { availableProducts } from "./products";

export interface Proposal {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  price: string;
}

export const proposals: Proposal[] = availableProducts.map((product) => ({
  id: product.id,
  title: product.name,
  category: product.category,
  image: product.image,
  alt: product.alt,
  description: product.description,
  price: product.price,
}));
