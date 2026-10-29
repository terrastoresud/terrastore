import type { ImageId } from "@/content/images";

export type Inline = string | { label: string; href: string };

export type Comparison = {
  type: "comparison";
  caption: string;
  columns: string[];
  rows: { label: string; cells: string[] }[];
};

export type ContentBlock =
  | { type: "paragraphs"; items: Inline[][] }
  | { type: "subhead"; text: string }
  | { type: "points"; items: { title: string; text: string }[] }
  | { type: "bullets"; items: string[] }
  | Comparison
  | { type: "note"; title: string; text: string }
  | { type: "steps"; items: { title: string; text: string }[] };

export type PageSection = {
  id: string;
  heading: string;
  blocks: ContentBlock[];
  imageId?: ImageId;
};

export type Faq = { question: string; answer: string };

export type RelatedLink = { href: string; label: string; text: string };

export type PageKind = "product" | "hub" | "city" | "legal" | "about" | "b2b";

export type PageDoc = {
  slug: string;
  kind: PageKind;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lede: string;
  primaryQuery: string;
  imageId?: ImageId;
  sections: PageSection[];
  faqs?: Faq[];
  related: RelatedLink[];
  ctaTitle: string;
  ctaText: string;
  breadcrumbs: { name: string; href: string }[];
  serviceType: string;
};

export type GuideDoc = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  primaryQuery: string;
  sections: PageSection[];
  related: RelatedLink[];
};
