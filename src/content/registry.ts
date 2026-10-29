import { cityPages } from "@/content/pages/cities";
import { legalPages } from "@/content/pages/legal";
import { parasolPages } from "@/content/pages/parasols";
import { secondaryPages } from "@/content/pages/secondary";
import { shadePages } from "@/content/pages/shade";
import { storePages } from "@/content/pages/stores";
import type { PageDoc } from "@/content/types";

export const pages: PageDoc[] = [
  ...shadePages,
  ...parasolPages,
  ...storePages,
  ...secondaryPages,
  ...cityPages,
  ...legalPages,
];

const bySlug = new Map(pages.map((page) => [page.slug, page]));

export function pageBySlug(slug: string): PageDoc | undefined {
  return bySlug.get(slug);
}

export type ProjectRecord = {
  slug: string;
  name: string;
  city: string;
  product: string;
  propertyType: string;
  summary: string;
  images: { src: string; alt: string; width: number; height: number }[];
  year?: number;
  configuration?: string;
};

/** Real installations only. Leave empty until photographs and facts are approved. */
export const projects: ProjectRecord[] = [];

export function projectsArePublic(): boolean {
  return projects.length > 0;
}
