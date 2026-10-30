import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand } from "@/components/page-blocks";
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
      <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-16 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Conseils", href: "/conseils" }]} />
        <header className="mt-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="index">
              <span className="rule" aria-hidden="true" />
              Guides
            </p>
            <h1 className="display mt-4 text-balance text-[2.05rem] leading-[1.08] font-medium sm:text-5xl lg:text-6xl">Conseils pour décider</h1>
          </div>
          <p className="mt-6 max-w-[42rem] text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:col-span-5 lg:mt-0">
            Ces textes servent un choix concret. Ils renvoient aux pages de solutions. Ils ne remplacent pas le relevé.
          </p>
        </header>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {guides.map((guide, index) => (
            <li key={guide.slug} className="py-6">
              <p className="text-[0.68rem] font-medium tracking-[0.18em] text-accent">{String(index + 1).padStart(2, "0")}</p>
              <Link href={`/conseils/${guide.slug}`} className="mt-2 block max-w-full text-2xl font-medium underline-offset-4 hover:underline">
                {guide.h1}
              </Link>
              <p className="mt-2 max-w-[62ch] leading-7 text-muted">{guide.lede}</p>
            </li>
          ))}
        </ul>
      </div>
      <CtaBand
        contact={false}
        title="Un choix se confirme sur place"
        text="Ces guides préparent la conversation. L’étude part de la ville, de photos et du lieu."
      />
    </>
  );
}
