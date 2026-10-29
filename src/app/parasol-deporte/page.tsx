import type { Metadata } from "next";
import { DocumentPage } from "@/components/document-page";
import { pageBySlug } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

const slug = "parasol-deporte";

export function generateMetadata(): Metadata {
  const page = pageBySlug(slug);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: `/${slug}` });
}

export default function Page() {
  const page = pageBySlug(slug);
  if (!page) return null;
  return <DocumentPage page={page} path={`/${slug}`} />;
}
