import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { CtaBand, MobileCta, RelatedLinks, SolutionFigures } from "@/components/page-blocks";
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
      <article className="mx-auto max-w-[1200px] px-5 pt-8 pb-16 sm:px-8 sm:pb-8 lg:px-10">
        <Breadcrumbs items={crumbs} />
        <header className="mt-8 grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-14">
          <div className={page.imageId ? "order-2 min-w-0 md:order-1 lg:col-span-7" : "min-w-0 lg:col-span-12"}>
            <p className="index">
              <span className="rule" aria-hidden="true" />
              {page.eyebrow}
            </p>
            <h1 className="display mt-4 max-w-[18ch] text-4xl leading-[1.05] font-medium md:text-5xl lg:max-w-[16ch] lg:text-6xl">{frTypo(page.h1)}</h1>
            <p className="settle-up measure mt-6 text-lg leading-8 text-muted">{frTypo(page.lede)}</p>
            {page.kind !== "legal" ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn inline-flex btn-primary" data-track="quote_cta">
                  Demander une étude
                </Link>
                <Link href="/solutions" className="btn inline-flex btn-secondary">
                  Toutes les solutions
                </Link>
              </div>
            ) : null}
          </div>
          {page.imageId ? (
            <div className="order-1 min-w-0 md:sticky md:top-24 md:order-2 md:self-start lg:col-span-5">
              <Media
                id={page.imageId}
                className="hero-still"
                plate
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          ) : null}
        </header>
        {page.figures?.length ? <SolutionFigures title={page.figuresTitle ?? "En images"} items={page.figures} /> : null}
        <div className="mt-16 md:mt-24">
          <Sections sections={page.sections} />
        </div>
        {page.faqs?.length ? (
          <section className="mt-16 border-t border-line pt-10 md:mt-24" aria-labelledby="faq-titre">
            <h2 id="faq-titre" className="text-3xl font-medium md:text-4xl">
              Questions fréquentes
            </h2>
            <div className="mt-6">
              <FaqList items={page.faqs} />
            </div>
          </section>
        ) : null}
        <div className="mt-16">
          <RelatedLinks items={page.related} />
        </div>
      </article>
      {page.kind !== "legal" ? <CtaBand title={page.ctaTitle} text={page.ctaText} /> : null}
      <MobileCta />
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
        <header className="mt-8 md:grid md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <p className="index">
              <span className="rule" aria-hidden="true" />
              Conseil
            </p>
            <h1 className="display mt-4 text-4xl leading-tight font-medium lg:text-5xl">{frTypo(guide.h1)}</h1>
          </div>
          <p className="settle-up mt-6 text-lg leading-8 text-muted md:col-span-5 md:mt-0">{frTypo(guide.lede)}</p>
        </header>
        <div className="mt-12">
          <Sections sections={guide.sections} />
        </div>
        <div className="mt-16">
          <RelatedLinks items={guide.related} />
        </div>
      </article>
      <MobileCta />
    </>
  );
}
