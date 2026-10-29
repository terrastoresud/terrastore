import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

function slugsFrom(file) {
  const text = readFileSync(file, "utf8");
  return [...text.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

const pageSlugs = readdirSync("src/content/pages")
  .filter((name) => name.endsWith(".ts"))
  .flatMap((name) => slugsFrom(path.join("src/content/pages", name)));
const guideSlugs = slugsFrom("src/content/guides.ts");

const pageTemplate = (slug) => `import type { Metadata } from "next";
import { DocumentPage } from "@/components/document-page";
import { pageBySlug } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

const slug = "${slug}";

export function generateMetadata(): Metadata {
  const page = pageBySlug(slug);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: \`/\${slug}\` });
}

export default function Page() {
  const page = pageBySlug(slug);
  if (!page) return null;
  return <DocumentPage page={page} path={\`/\${slug}\`} />;
}
`;

const guideTemplate = (slug) => `import type { Metadata } from "next";
import { GuideArticle } from "@/components/document-page";
import { guideBySlug } from "@/content/guides";
import { pageMetadata } from "@/lib/seo";

const slug = "${slug}";

export function generateMetadata(): Metadata {
  const guide = guideBySlug(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: \`/conseils/\${slug}\`,
  });
}

export default function Page() {
  const guide = guideBySlug(slug);
  if (!guide) return null;
  return <GuideArticle guide={guide} />;
}
`;

for (const slug of pageSlugs) {
  const dir = path.join("src/app", slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "page.tsx"), pageTemplate(slug));
}

for (const slug of guideSlugs) {
  const dir = path.join("src/app/conseils", slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "page.tsx"), guideTemplate(slug));
}

console.log(`pages ${pageSlugs.length}, guides ${guideSlugs.length}`);
