import type { Metadata } from "next";
import { GuideArticle } from "@/components/document-page";
import { guideBySlug } from "@/content/guides";
import { pageMetadata } from "@/lib/seo";

const slug = "store-banne-ou-store-zip";

export function generateMetadata(): Metadata {
  const guide = guideBySlug(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/conseils/${slug}`,
  });
}

export default function Page() {
  const guide = guideBySlug(slug);
  if (!guide) return null;
  return <GuideArticle guide={guide} />;
}
