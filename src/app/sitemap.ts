import type { MetadataRoute } from "next";
import { images } from "@/content/images";
import { guides } from "@/content/guides";
import { pages, projectsArePublic } from "@/content/registry";
import { isIndexable } from "@/lib/indexing";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable()) return [];

  const paths = ["/", "/conseils", "/contact", ...pages.map((page) => `/${page.slug}`), ...guides.map((guide) => `/conseils/${guide.slug}`)];
  if (projectsArePublic()) paths.push("/realisations");

  return paths.map((path) => {
    const image = pages.find((page) => `/${page.slug}` === path)?.imageId;
    const asset = image ? images[image] : undefined;
    return {
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      images: asset?.src ? [absoluteUrl(asset.src)] : undefined,
    };
  });
}
