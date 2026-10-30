import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { CtaBand, RelatedLinks, SolutionFigures } from "@/components/page-blocks";
import { Sections } from "@/components/sections";
import type { PageDoc } from "@/content/types";
import {
  articleNode,
  breadcrumbNode,
  faqNode,
  graph,
  organizationNode,
  serviceNode,
  webPageNode,
} from "@/lib/seo";
import { frTypo } from "@/lib/typography";

export function DocumentPage({ page, path }: { page: PageDoc; path: string }) {
  const crumbs = [{ name: "Accueil", href: "/" }, ...page.breadcrumbs];
  const nodes: Record<string, unknown>[] = [
    organizationNode(),
    webPageNode({ name: page.h1, description: page.description, path }),
    breadcrumbNode(crumbs),
  ];
  if (page.faqs?.length) nodes.push(faqNode(page.faqs, path));
  if (page.kind !== "legal") {
    nodes.push(
      serviceNode({
        name: page.h1,
        description: page.description,
        path,
        serviceType: page.serviceType,
        areaName: page.kind === "city" ? page.breadcrumbs.at(-1)?.name : undefined,
      }),
    );
  }
  return (
    <>
      <JsonLd data={graph(nodes)} />
      <article className="mx-auto max-w-[1200px] px-5 pt-8 pb-16 sm:px-8 lg:px-10">
        <Breadcrumbs items={crumbs} />
        <header className="mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:gap-y-6">
          <div className={page.imageId ? "lg:col-span-6" : "lg:col-span-8"}>
            <p className="index">
              <span className="rule" aria-hidden="true" />
              {page.eyebrow}
            </p>
            <h1 className="display mt-4 text-balance text-[2.05rem] leading-[1.08] font-medium sm:text-5xl lg:text-6xl">{frTypo(page.h1)}</h1>
          </div>
          {page.imageId ? (
            <div className="mt-8 min-w-0 lg:col-span-6 lg:row-span-2 lg:mt-0">
              <Media
                id={page.imageId}
                className="hero-still"
                plate
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          ) : null}
          <div className={page.imageId ? "mt-6 lg:col-span-6 lg:mt-0" : "mt-6 lg:col-span-8"}>
            <p className="settle-up max-w-[42rem] text-base leading-7 text-muted sm:text-lg sm:leading-8">{frTypo(page.lede)}</p>
            {page.kind !== "legal" ? (
              <div className="mt-7">
                <Link href="/contact" className="btn inline-flex w-full justify-center btn-primary sm:w-auto" data-track="quote_cta">
                  Demander une étude
                </Link>
              </div>
            ) : null}
          </div>
        </header>
        {page.figures?.length ? <SolutionFigures title={page.figuresTitle ?? "En images"} items={page.figures} /> : null}
        <div className="mt-12 md:mt-16">
          <Sections sections={page.sections} />
        </div>
        {page.faqs?.length ? (
          <section className="border-t border-line py-12 md:py-16" aria-labelledby="faq-titre">
            <h2 id="faq-titre" className="text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
              Questions fréquentes
            </h2>
            <div className="mt-6">
              <FaqList items={page.faqs} />
            </div>
          </section>
        ) : null}
        <RelatedLinks items={page.related} />
      </article>
      {page.kind !== "legal" ? <CtaBand contact={false} title={page.ctaTitle} text={page.ctaText} /> : null}
    </>
  );
}

export function GuideArticle({
  guide,
}: {
  guide: {
    h1: string;
    lede: string;
    description: string;
    slug: string;
    sections: PageDoc["sections"];
    related: PageDoc["related"];
  };
}) {
  const path = `/conseils/${guide.slug}`;
  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Conseils", href: "/conseils" },
    { name: guide.h1, href: path },
  ];
  return (
    <>
      <JsonLd
        data={graph([
          organizationNode(),
          articleNode({ headline: guide.h1, description: guide.description, path }),
          breadcrumbNode(crumbs),
        ])}
      />
      <article className="mx-auto max-w-[1200px] px-5 pt-8 pb-16 sm:px-8 lg:px-10">
        <Breadcrumbs items={crumbs} />
        <header className="mt-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="index">
              <span className="rule" aria-hidden="true" />
              Conseil
            </p>
            <h1 className="display mt-4 text-balance text-[2.05rem] leading-[1.08] font-medium sm:text-5xl">{frTypo(guide.h1)}</h1>
          </div>
          <p className="settle-up mt-6 max-w-[42rem] text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:col-span-5 lg:mt-0">{frTypo(guide.lede)}</p>
        </header>
        <div className="mt-12 md:mt-16">
          <Sections sections={guide.sections} />
        </div>
        <RelatedLinks items={guide.related} />
      </article>
      <CtaBand
        contact={false}
        title="Étudier ce choix sur votre lieu"
        text="Le guide pose les questions. La configuration se décide avec l’exposition, les cotes et l’architecture déjà là."
      />
    </>
  );
}
