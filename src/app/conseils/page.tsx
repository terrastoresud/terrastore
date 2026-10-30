import Link from "next/link";
import type { Metadata } from "next";
import { MobileCta } from "@/components/page-blocks";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { guides } from "@/content/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Conseils pour choisir carport, parasol et store | Terrastore",
  description:
    "Guides Terrastore pour décider : carport adossé ou autoportant, parasol déporté, store banne ou ZIP, pergola. Sans prix inventés.",
  path: "/conseils",
});

export default function GuidesPage() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-28 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Conseils", href: "/conseils" }]} />
        <p className="index mt-6">
          <span className="rule" aria-hidden="true" />
          Guides
        </p>
        <header className="mt-4 md:grid md:grid-cols-12 md:items-end md:gap-10">
          <h1 className="display max-w-[16ch] text-4xl font-medium md:col-span-7 lg:text-6xl">Conseils pour décider</h1>
          <p className="measure mt-6 text-lg leading-8 text-muted md:col-span-5 md:mt-0">
            Ces textes servent un choix concret. Ils renvoient aux pages de solutions. Ils ne remplacent pas le relevé.
          </p>
        </header>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {guides.map((guide, index) => (
            <li key={guide.slug} className="py-6">
              <p className="text-xs tracking-[0.14em] text-accent">{String(index + 1).padStart(2, "0")}</p>
              <Link href={`/conseils/${guide.slug}`} className="mt-2 block max-w-full text-2xl font-medium underline-offset-4 hover:underline">
                {guide.h1}
              </Link>
              <p className="mt-2 max-w-[62ch] leading-7 text-muted">{guide.lede}</p>
            </li>
          ))}
        </ul>
      </div>
      <MobileCta />
    </>
  );
}
