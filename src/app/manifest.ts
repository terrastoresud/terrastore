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
    icons: [
      { src: "/brand/mark-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/mark.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
