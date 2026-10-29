export const imageIds = [
  "home-hero",
  "home-parasol",
  "home-store",
  "home-pergola",
  "carport-hero",
  "carport-detail",
  "carport-double",
  "parasol-hero",
  "parasol-offset",
  "parasol-detail",
  "parasol-pro",
  "store-banne",
  "store-zip",
  "store-interior",
  "pergola-bio",
  "pergola-retractable",
  "voile",
  "pro-project",
  "city-agadir",
  "city-marrakech",
  "city-casablanca",
  "city-rabat",
  "city-tanger",
  "city-essaouira",
] as const;

export type ImageId = (typeof imageIds)[number];

export type ImageVariant =
  | "carport"
  | "parasol"
  | "store"
  | "zip"
  | "interior"
  | "pergola"
  | "voile"
  | "coast"
  | "city";

export type ImageAsset = {
  id: ImageId;
  /** Public path once a real file exists, e.g. `/images/terrastore-carport-aluminium-maroc-hero.webp`. */
  src: string | null;
  alt: string;
  width: number;
  height: number;
  objectPosition: string;
  caption: string;
  variant: ImageVariant;
};

const pending = "Schéma d'intention. La photographie de chantier remplacera ce visuel.";

export const images: Record<ImageId, ImageAsset> = {
  "home-hero": {
    id: "home-hero",
    src: null,
    alt: "Schéma d'intention d'un carport aluminium : toiture, poteaux et zone de stationnement devant une villa.",
    width: 1600,
    height: 1200,
    objectPosition: "center center",
    caption: pending,
    variant: "carport",
  },
  "home-parasol": {
    id: "home-parasol",
    src: null,
    alt: "Schéma d'intention d'un parasol déporté : mât latéral et toile au-dessus d'une terrasse.",
    width: 1400,
    height: 1000,
    objectPosition: "center center",
    caption: pending,
    variant: "parasol",
  },
  "home-store": {
    id: "home-store",
    src: null,
    alt: "Schéma d'intention d'un store banne projeté depuis une façade de terrasse.",
    width: 1400,
    height: 1000,
    objectPosition: "center center",
    caption: pending,
    variant: "store",
  },
  "home-pergola": {
    id: "home-pergola",
    src: null,
    alt: "Schéma d'intention d'une pergola : poteaux et lames au-dessus d'une terrasse.",
    width: 1400,
    height: 900,
    objectPosition: "center center",
    caption: pending,
    variant: "pergola",
  },
  "carport-hero": {
    id: "carport-hero",
    src: null,
    alt: "Schéma d'intention d'un carport aluminium sur mesure, lecture de la toiture et des appuis.",
    width: 1600,
    height: 1100,
    objectPosition: "center center",
    caption: pending,
    variant: "carport",
  },
  "carport-detail": {
    id: "carport-detail",
    src: null,
    alt: "Schéma d'intention d'un détail de carport : rive de toiture, poteau et ligne d'évacuation.",
    width: 1200,
    height: 1200,
    objectPosition: "center center",
    caption: pending,
    variant: "carport",
  },
  "carport-double": {
    id: "carport-double",
    src: null,
    alt: "Schéma d'intention d'un carport double : deux emplacements et poteaux hors du débattement des portières.",
    width: 1600,
    height: 1000,
    objectPosition: "center center",
    caption: pending,
    variant: "carport",
  },
  "parasol-hero": {
    id: "parasol-hero",
    src: null,
    alt: "Schéma d'intention d'un système de parasol architectural pour terrasse.",
    width: 1600,
    height: 1100,
    objectPosition: "center center",
    caption: pending,
    variant: "parasol",
  },
  "parasol-offset": {
    id: "parasol-offset",
    src: null,
    alt: "Schéma d'intention d'un parasol à mât déporté, toile libre au-dessus de la table.",
    width: 1400,
    height: 1100,
    objectPosition: "center center",
    caption: pending,
    variant: "parasol",
  },
  "parasol-detail": {
    id: "parasol-detail",
    src: null,
    alt: "Schéma d'intention d'un mât de parasol et de son ancrage ou de son lest.",
    width: 1200,
    height: 1200,
    objectPosition: "center center",
    caption: pending,
    variant: "parasol",
  },
  "parasol-pro": {
    id: "parasol-pro",
    src: null,
    alt: "Schéma d'intention de parasols professionnels alignés sur une terrasse d'hospitalité.",
    width: 1600,
    height: 1000,
    objectPosition: "center center",
    caption: pending,
    variant: "parasol",
  },
  "store-banne": {
    id: "store-banne",
    src: null,
    alt: "Schéma d'intention d'un store banne en façade, projection au-dessus de la terrasse.",
    width: 1600,
    height: 1100,
    objectPosition: "center center",
    caption: pending,
    variant: "store",
  },
  "store-zip": {
    id: "store-zip",
    src: null,
    alt: "Schéma d'intention d'un store vertical guidé devant un vitrage.",
    width: 1400,
    height: 1200,
    objectPosition: "center center",
    caption: pending,
    variant: "zip",
  },
  "store-interior": {
    id: "store-interior",
    src: null,
    alt: "Schéma d'intention d'un store intérieur devant une baie, pour doser lumière et vis-à-vis.",
    width: 1400,
    height: 1100,
    objectPosition: "center center",
    caption: pending,
    variant: "interior",
  },
  "pergola-bio": {
    id: "pergola-bio",
    src: null,
    alt: "Schéma d'intention d'une pergola bioclimatique à lames au-dessus d'une terrasse.",
    width: 1600,
    height: 1100,
    objectPosition: "center center",
    caption: pending,
    variant: "pergola",
  },
  "pergola-retractable": {
    id: "pergola-retractable",
    src: null,
    alt: "Schéma d'intention d'une couverture textile rétractable sur structure aluminium.",
    width: 1600,
    height: 1000,
    objectPosition: "center center",
    caption: pending,
    variant: "pergola",
  },
  voile: {
    id: "voile",
    src: null,
    alt: "Schéma d'intention d'une voile d'ombrage tendue entre plusieurs points d'ancrage.",
    width: 1600,
    height: 1000,
    objectPosition: "center center",
    caption: pending,
    variant: "voile",
  },
  "pro-project": {
    id: "pro-project",
    src: null,
    alt: "Schéma d'intention d'un ouvrage d'ombrage pour un projet professionnel.",
    width: 1600,
    height: 1000,
    objectPosition: "center center",
    caption: pending,
    variant: "pergola",
  },
  "city-agadir": {
    id: "city-agadir",
    src: null,
    alt: "Schéma d'intention d'une terrasse et d'un stationnement en contexte côtier, à Agadir.",
    width: 1400,
    height: 900,
    objectPosition: "center center",
    caption: pending,
    variant: "coast",
  },
  "city-marrakech": {
    id: "city-marrakech",
    src: null,
    alt: "Schéma d'intention d'une terrasse fortement exposée, contexte Marrakech.",
    width: 1400,
    height: 900,
    objectPosition: "center center",
    caption: pending,
    variant: "city",
  },
  "city-casablanca": {
    id: "city-casablanca",
    src: null,
    alt: "Schéma d'intention d'un carport et d'une terrasse en contexte urbain, Casablanca.",
    width: 1400,
    height: 900,
    objectPosition: "center center",
    caption: pending,
    variant: "carport",
  },
  "city-rabat": {
    id: "city-rabat",
    src: null,
    alt: "Schéma d'intention d'une terrasse résidentielle, contexte Rabat.",
    width: 1400,
    height: 900,
    objectPosition: "center center",
    caption: pending,
    variant: "pergola",
  },
  "city-tanger": {
    id: "city-tanger",
    src: null,
    alt: "Schéma d'intention d'une terrasse exposée au vent, contexte Tanger.",
    width: 1400,
    height: 900,
    objectPosition: "center center",
    caption: pending,
    variant: "coast",
  },
  "city-essaouira": {
    id: "city-essaouira",
    src: null,
    alt: "Schéma d'intention d'un ombrage de terrasse en site très venté, contexte Essaouira.",
    width: 1400,
    height: 900,
    objectPosition: "center center",
    caption: pending,
    variant: "coast",
  },
};

export function imageAsset(id: ImageId): ImageAsset {
  return images[id];
}
