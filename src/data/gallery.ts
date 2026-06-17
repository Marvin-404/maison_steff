import { proposals } from "./proposals";

export type GalleryLayout = "standard" | "tall" | "wide";

export interface GalleryItem {
  id: string;
  image: string;
  text: string;
  alt: string;
  layout?: GalleryLayout;
}

const featuredLayouts: Record<string, GalleryLayout> = {
  "floral-rosa-box": "tall",
  "aniversario-menta": "wide",
  "amarillo-margaritas": "tall",
  "fresa-clasica-fruta": "wide",
  "empaque-pasteles": "wide",
};

export const galleryItems: GalleryItem[] = proposals.map((proposal) => ({
  id: proposal.id,
  image: proposal.image,
  text: proposal.title,
  alt: proposal.alt,
  layout: featuredLayouts[proposal.id],
}));
