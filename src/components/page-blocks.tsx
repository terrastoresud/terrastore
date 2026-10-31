import Link from "next/link";
import type { FigureLink, RelatedLink } from "@/content/types";
import { Icon } from "@/components/icon";
import { Media } from "@/components/media";
import { mailtoHref, phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";
import { frTypo } from "@/lib/typography";

export function SolutionFigures({ title, items }: { title: string; items: FigureLink[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-16 border-t border-line pt-10 md:mt-24 md:pt-14" aria-labelledby="figures-titre">
      <h2 id="figures-titre" className="text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
        {frTypo(title)}
      </h2>
      <ul className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={`${item.href}-${item.imageId}`}>
            <Link href={item.href} className="group block">
              <p className="mb-3 text-sm font-medium tracking-wide underline-offset-4 group-hover:underline">{frTypo(item.label)}</p>
              <Media id={item.imageId} sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 100vw" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { MobileCta } from "@/components/mobile-cta";

export function RelatedLinks({ items, title = "Pour aller plus loin" }: { items: RelatedLink[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="border-t border-line pt-10 md:pt-14" aria-labelledby="liens-utiles">
      <h2 id="liens-utiles" className="text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
        {title}
      </h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="group grid gap-1 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:items-baseline sm:gap-8">
              <span className="text-lg font-medium underline-offset-4 group-hover:underline">{frTypo(item.label)}</span>
              <span className="text-sm leading-6 text-muted">{frTypo(item.text)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CtaBand({ title, text, contact = true }: { title: string; text: string; contact?: boolean }) {
  const tel = contact ? phoneHref() : null;
  const mail = contact ? mailtoHref() : null;
  const whatsapp = contact ? whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.") : null;

  return (
    <section className="band relative overflow-hidden bg-ink text-inverse" aria-labelledby="cta-final">
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between md:py-16 lg:px-10">
        <div>
          <h2 id="cta-final" className="max-w-[16ch] text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
            {frTypo(title)}
          </h2>
          <p className="mt-4 max-w-[46ch] leading-7 text-[#ddd6cc]">{frTypo(text)}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {whatsapp ? (
            <a className="btn inline-flex gap-2 bg-inverse text-ink hover:bg-sand" href={whatsapp} data-track="whatsapp_click">
              <Icon name="chat" />
              WhatsApp
            </a>
          ) : null}
          {tel ? (
            <a className="btn inline-flex gap-2 border border-inverse text-inverse hover:bg-inverse hover:text-ink" href={tel} data-track="phone_click">
              <Icon name="phone" />
              Appeler
            </a>
          ) : null}
          {mail && siteConfig.email ? (
            <a className="btn inline-flex gap-2 border border-inverse text-inverse hover:bg-inverse hover:text-ink" href={mail}>
              <Icon name="mail" className="size-[1.35rem]" />
              {siteConfig.email}
            </a>
          ) : null}
          <Link
            href="/contact"
            className={
              contact
                ? "btn inline-flex border border-inverse text-inverse hover:bg-inverse hover:text-ink"
                : "btn inline-flex bg-inverse text-ink hover:bg-sand"
            }
            data-track="quote_cta"
          >
            Étudier mon projet
          </Link>
        </div>
      </div>
    </section>
  );
}

