import Link from "next/link";
import { BenefitsGrid } from "@/components/benefits-grid";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { CtaBand, RelatedLinks, SolutionFigures } from "@/components/page-blocks";
import { Sections } from "@/components/sections";
import { UseCaseGallery } from "@/components/use-case-gallery";
import { imageAsset } from "@/content/images";
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
import { phoneHref, whatsappHref } from "@/lib/site-config";
import { frTypo } from "@/lib/typography";

export function DocumentPage({ page, path }: { page: PageDoc; path: string }) {
  const crumbs = [{ name: "Accueil", href: "/" }, ...page.breadcrumbs];
  const heroImage = page.imageId ? imageAsset(page.imageId) : undefined;
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
        imageUrl: heroImage?.src ?? undefined,
      }),
    );
  }

  const ctaHref = page.ctaHref ?? "/contact";
  const ctaLabel = page.ctaLabel ?? "Demander une étude";
  const tel = page.heroContactLinks ? phoneHref() : null;
  const whatsapp = page.heroContactLinks
    ? whatsappHref(`Bonjour Terrastore, je souhaite un devis pour une ${page.serviceType.toLowerCase()}.`)
    : null;

  return (
    <>
      <JsonLd data={graph(nodes)} />
      <article className="mx-auto max-w-[1200px] px-5 pt-8 pb-16 sm:px-8 lg:px-10">
        <Breadcrumbs items={crumbs} />
        <header
          className={
            page.imageId
              ? "product-hero mt-6 sm:mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:gap-y-6"
              : "mt-6 sm:mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:gap-y-6"
          }
        >
          <div className={`product-hero-title ${page.imageId ? "lg:col-span-6" : "lg:col-span-8"}`}>
            <p className="index">
              <span className="rule" aria-hidden="true" />
              {page.eyebrow}
            </p>
            <h1 className="display mt-3 text-balance text-[1.85rem] leading-[1.08] font-medium sm:mt-4 sm:text-5xl lg:text-6xl">
              {frTypo(page.h1)}
            </h1>
          </div>
          {page.imageId ? (
            <div className="product-hero-media mt-5 min-w-0 sm:mt-8 lg:col-span-6 lg:row-span-2 lg:mt-0">
              <Media
                id={page.imageId}
                className="hero-still"
                plate
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          ) : null}
          <div className={`product-hero-lede ${page.imageId ? "mt-5 lg:col-span-6 lg:mt-0" : "mt-5 lg:col-span-8"}`}>
            <p className="settle-up max-w-[42rem] text-[0.98rem] leading-7 text-muted sm:text-lg sm:leading-8">{frTypo(page.lede)}</p>
            {page.kind !== "legal" ? (
              <div className="hero-actions mt-6">
                <Link href={ctaHref} className="btn inline-flex w-full justify-center btn-primary sm:w-auto" data-track="quote_cta">
                  {ctaLabel}
                </Link>
                {whatsapp || tel ? (
                  <div className="hero-actions-secondary">
                    {whatsapp ? (
                      <a
                        className="btn inline-flex w-full justify-center gap-2 btn-secondary sm:w-auto"
                        href={whatsapp}
                        data-track="whatsapp_click"
                      >
                        <Icon name="chat" />
                        WhatsApp
                      </a>
                    ) : null}
                    {tel ? (
                      <a
                        className="btn inline-flex w-full justify-center gap-2 btn-secondary sm:w-auto"
                        href={tel}
                        data-track="phone_click"
                      >
                        <Icon name="phone" />
                        Appeler
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </header>
        {page.benefits?.length ? (
          <BenefitsGrid
            title={page.benefitsTitle ?? "Ce que la voile apporte"}
            lede={page.benefitsLede}
            items={page.benefits}
          />
        ) : null}
        {page.figures?.length ? <SolutionFigures title={page.figuresTitle ?? "En images"} items={page.figures} /> : null}
        {!page.galleryAfterSections && page.gallery?.length ? (
          <UseCaseGallery
            title={page.galleryTitle ?? "Usages et lieux"}
            lede={page.galleryLede}
            items={page.gallery}
          />
        ) : null}
        <div className={page.benefits?.length || page.gallery?.length ? "mt-0" : "mt-12 md:mt-16"}>
          <Sections sections={page.sections} />
        </div>
        {page.galleryAfterSections && page.gallery?.length ? (
          <UseCaseGallery
            title={page.galleryTitle ?? "Usages et lieux"}
            lede={page.galleryLede}
            items={page.gallery}
          />
        ) : null}
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
      {page.kind !== "legal" ? (
        <CtaBand
          contact={false}
          title={page.ctaTitle}
          text={page.ctaText}
          studyHref={page.ctaHref ?? "/contact"}
          studyLabel={page.ctaLabel ?? "Étudier mon projet"}
        />
      ) : null}
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
