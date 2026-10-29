import { ogContentType, ogSize, renderBrandCard } from "@/lib/og";

export const alt = "Terrastore, protection solaire et aménagement sur mesure au Maroc";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderBrandCard("Carports, parasols et stores sur mesure au Maroc", "Protection solaire");
}
