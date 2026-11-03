import type { Metadata } from "next";
import { DocumentPage } from "@/components/document-page";
import { imageAsset } from "@/content/images";
import { pageBySlug } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

const slug = "parasol-deporte";

export function generateMetadata(): Metadata {
  const page = pageBySlug(slug);
  if (!page) return {};
  const image = page.imageId ? imageAsset(page.imageId) : undefined;
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
    image:
      image?.src
        ? { url: image.src, width: image.width, height: image.height, alt: image.alt }
        : undefined,
  });
}

export default function Page() {
  const page = pageBySlug(slug);
  if (!page) return null;
  return <DocumentPage page={page} path={`/${slug}`} />;
}
