import type { ImageId } from "@/content/images";
import type { IconName } from "@/components/icon";

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
  /** stack = image above copy (default). split = image beside copy on large screens. */
  layout?: "stack" | "split";
};

export type FigureLink = {
  imageId: ImageId;
  href: string;
  label: string;
};

export type Faq = { question: string; answer: string };

export type RelatedLink = { href: string; label: string; text: string };

export type Benefit = {
  icon: IconName;
  title: string;
  text: string;
};

export type GalleryItem = {
  imageId: ImageId;
  category: string;
};

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
  figures?: FigureLink[];
  figuresTitle?: string;
  benefits?: Benefit[];
  benefitsTitle?: string;
  benefitsLede?: string;
  gallery?: GalleryItem[];
  galleryTitle?: string;
  galleryLede?: string;
  /** When true, gallery renders after the prose sections (editorial flow). */
  galleryAfterSections?: boolean;
  sections: PageSection[];
  faqs?: Faq[];
  related: RelatedLink[];
  ctaTitle: string;
  ctaText: string;
  /** Primary hero CTA label. Defaults to « Demander une étude ». */
  ctaLabel?: string;
  /** Primary hero CTA href. Defaults to /contact. */
  ctaHref?: string;
  /** Show WhatsApp / phone next to the primary hero CTA. */
  heroContactLinks?: boolean;
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
