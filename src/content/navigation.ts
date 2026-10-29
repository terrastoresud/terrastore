import type { RelatedLink } from "@/content/types";

export type NavLink = { href: string; label: string };

export const primaryNav: NavLink[] = [
  { href: "/carport-aluminium", label: "Carports" },
  { href: "/parasols", label: "Parasols" },
  { href: "/stores", label: "Stores" },
  { href: "/pergola-bioclimatique", label: "Pergolas" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/conseils", label: "Conseils" },
];

export const solutionGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Carports",
    links: [{ href: "/carport-aluminium", label: "Carport aluminium" }],
  },
  {
    title: "Parasols",
    links: [
      { href: "/parasols", label: "Parasols modernes" },
      { href: "/parasol-deporte", label: "Parasol déporté" },
      { href: "/parasol-professionnel", label: "Parasol professionnel" },
    ],
  },
  {
    title: "Stores",
    links: [
      { href: "/stores", label: "Tous les stores" },
      { href: "/stores-exterieurs", label: "Stores extérieurs" },
      { href: "/store-banne", label: "Store banne" },
      { href: "/store-zip", label: "Store ZIP" },
      { href: "/stores-interieurs", label: "Stores intérieurs" },
    ],
  },
  {
    title: "Pergolas et voiles",
    links: [
      { href: "/pergola-bioclimatique", label: "Pergola bioclimatique" },
      { href: "/pergola-retractable", label: "Couverture rétractable" },
      { href: "/voile-ombrage", label: "Voile d'ombrage" },
    ],
  },
];

export const footerSolutions: NavLink[] = [
  { href: "/solutions", label: "Toutes les solutions" },
  { href: "/carport-aluminium", label: "Carports" },
  { href: "/parasols", label: "Parasols" },
  { href: "/store-banne", label: "Store banne" },
  { href: "/store-zip", label: "Store ZIP" },
  { href: "/stores-interieurs", label: "Stores intérieurs" },
  { href: "/pergola-bioclimatique", label: "Pergola bioclimatique" },
  { href: "/voile-ombrage", label: "Voile d'ombrage" },
];

export const footerGuides: NavLink[] = [
  { href: "/conseils", label: "Tous les conseils" },
  { href: "/conseils/comment-choisir-un-carport-aluminium", label: "Choisir un carport" },
  { href: "/conseils/parasol-deporte-ou-mat-central", label: "Parasol déporté ou central" },
  { href: "/conseils/store-banne-ou-store-zip", label: "Store banne ou ZIP" },
  { href: "/professionnels", label: "Projets professionnels" },
  { href: "/a-propos", label: "À propos" },
];

export const cities: { href: string; label: string }[] = [
  { href: "/agadir", label: "Agadir" },
  { href: "/marrakech", label: "Marrakech" },
  { href: "/casablanca", label: "Casablanca" },
  { href: "/rabat", label: "Rabat" },
  { href: "/tanger", label: "Tanger" },
  { href: "/essaouira", label: "Essaouira" },
];

export const projectTypes = [
  "Carport",
  "Parasol",
  "Store extérieur",
  "Store intérieur",
  "Pergola",
  "Projet professionnel",
  "Autre",
] as const;

export const studyCta: RelatedLink = {
  href: "/contact",
  label: "Demander une étude",
  text: "Ville, photos et dimensions approximatives suffisent pour commencer.",
};
