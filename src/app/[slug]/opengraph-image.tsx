import { pageBySlug, pages } from "@/content/registry";
import { ogContentType, ogSize, renderBrandCard } from "@/lib/og";

export const alt = "Terrastore";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  return renderBrandCard(page?.h1 ?? "Terrastore", page?.eyebrow ?? "Terrastore");
}
