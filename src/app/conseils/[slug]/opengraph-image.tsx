import { guideBySlug, guides } from "@/content/guides";
import { ogContentType, ogSize, renderBrandCard } from "@/lib/og";

export const alt = "Conseil Terrastore";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  return renderBrandCard(guide?.h1 ?? "Conseils", "Conseil");
}
