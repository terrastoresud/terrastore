import Link from "next/link";
import type { FigureLink, RelatedLink } from "@/content/types";
import { Icon } from "@/components/icon";
import { Media } from "@/components/media";
import { phoneHref, whatsappHref } from "@/lib/site-config";
import { frTypo } from "@/lib/typography";

export function SolutionFigures({ title, items }: { title: string; items: FigureLink[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-16 md:mt-24" aria-labelledby="figures-titre">
      <h2 id="figures-titre" className="text-3xl font-medium md:text-4xl">
        {frTypo(title)}
      </h2>
      <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={`${item.href}-${item.imageId}`}>
            <Link href={item.href} className="group block">
              <Media id={item.imageId} sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 100vw" />
              <p className="text-lg font-medium underline-offset-4 group-hover:underline">{frTypo(item.label)}</p>
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
    <section className="border-t border-line pt-10" aria-labelledby="liens-utiles">
      <h2 id="liens-utiles" className="text-3xl font-medium">
        {title}
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href} className="border-t border-line pt-4">
            <Link href={item.href} className="text-lg font-medium underline-offset-4 hover:underline">
              {frTypo(item.label)}
            </Link>
            <p className="mt-2 text-sm leading-6 text-muted">{frTypo(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CtaBand({ title, text }: { title: string; text: string }) {
  const tel = phoneHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");

  return (
    <section className="band relative overflow-hidden bg-ink text-inverse" aria-labelledby="cta-final">
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between md:py-20 lg:px-10 lg:py-24">
        <div>
          <h2 id="cta-final" className="max-w-[16ch] text-4xl leading-tight font-medium">
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
          <Link href="/contact" className="btn inline-flex border border-inverse text-inverse hover:bg-inverse hover:text-ink" data-track="quote_cta">
            Étudier mon projet
          </Link>
        </div>
      </div>
    </section>
  );
}

