import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Terrastore",
    short_name: "Terrastore",
    description: "Protection solaire et aménagement sur mesure au Maroc.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f0ea",
    theme_color: "#1c1916",
    lang: "fr-MA",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
