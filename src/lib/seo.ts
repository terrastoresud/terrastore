import type { Metadata } from "next";
import { isIndexable, robotsDirective } from "@/lib/indexing";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized === "/" ? "" : normalized}`;
}

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const url = absoluteUrl(input.path);
  const image = input.image ?? {
    url: "/images/terrastore-carport-autoportant.jpg",
    width: 1024,
    height: 682,
    alt: "Carport aluminium autoportant à couverture translucide, deux véhicules dans une cour de villa.",
  };
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    robots: robotsDirective(),
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      locale: "fr_MA",
      type: "website",
      siteName: siteConfig.brandName,
      images: [
        {
          url: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image.url],
    },
  };
}

export function organizationId(): string {
  return `${getSiteUrl()}/#organization`;
}

export function websiteId(): string {
  return `${getSiteUrl()}/#website`;
}

type Crumb = { name: string; href: string };

export function organizationNode() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    sameAs: Object.values(siteConfig.social).filter(
      (url): url is string => Boolean(url),
    ),
    "@id": organizationId(),
    name: siteConfig.brandName,
    url: getSiteUrl(),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/mark.png"),
      width: 512,
      height: 512,
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.streetAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.streetAddress,
            addressLocality: siteConfig.locality,
            addressCountry: siteConfig.country,
          },
        }
      : {}),
    ...(siteConfig.phone
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            ...(siteConfig.email ? { email: siteConfig.email } : {}),
            contactType: "customer service",
            areaServed: "MA",
            availableLanguage: "French",
          },
        }
      : {}),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId(),
    url: getSiteUrl(),
    name: siteConfig.brandName,
    inLanguage: siteConfig.locale,
    publisher: { "@id": organizationId() },
  };
}

export function breadcrumbNode(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function serviceNode(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaName?: string;
  imageUrl?: string;
}) {
  return {
    "@type": ["Service", "Product"],
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    category: input.serviceType,
    url: absoluteUrl(input.path),
    provider: { "@id": organizationId() },
    brand: { "@id": organizationId() },
    ...(input.imageUrl ? { image: absoluteUrl(input.imageUrl) } : {}),
    areaServed: input.areaName
      ? { "@type": "City", name: input.areaName }
      : { "@type": "Country", name: "Morocco" },
  };
}

export function webPageNode(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: siteConfig.locale,
    isPartOf: { "@id": websiteId() },
  };
}

export function articleNode(input: {
  headline: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    inLanguage: siteConfig.locale,
    mainEntityOfPage: absoluteUrl(input.path),
    author: { "@id": organizationId() },
    publisher: { "@id": organizationId() },
  };
}

export function graph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function faqNode(items: { question: string; answer: string }[], path: string) {
  return {
    "@type": "FAQPage",
    url: absoluteUrl(path),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function homeGraph() {
  return graph([organizationNode(), websiteNode()]);
}

export { isIndexable };
