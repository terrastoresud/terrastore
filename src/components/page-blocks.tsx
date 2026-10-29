import Link from "next/link";
import type { RelatedLink } from "@/content/types";
import { frTypo } from "@/lib/typography";

export { MobileCta } from "@/components/mobile-cta";

export function RelatedLinks({ items, title = "Pour aller plus loin" }: { items: RelatedLink[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="liens-utiles">
      <h2 id="liens-utiles" className="text-3xl font-medium">
        {title}
      </h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
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
  return (
    <section className="bg-ink text-inverse" aria-labelledby="cta-final">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="cta-final" className="max-w-[16ch] text-4xl leading-tight font-medium">
            {frTypo(title)}
          </h2>
          <p className="mt-4 max-w-[46ch] leading-7 text-[#ddd6cc]">{frTypo(text)}</p>
        </div>
        <Link href="/contact" className="btn inline-flex bg-inverse text-ink hover:bg-sand" data-track="quote_cta">
          Étudier mon projet
        </Link>
      </div>
    </section>
  );
}

