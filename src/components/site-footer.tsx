import Link from "next/link";
import { Icon } from "@/components/icon";
import { cities, footerGuides, footerSolutions } from "@/content/navigation";
import { formatAddress, hasDirectContact, mapHref, phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";

export function SiteFooter() {
  const tel = phoneHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");
  const address = formatAddress();
  const map = mapHref();

  return (
    <footer className="colophon colophon-mark relative overflow-hidden border-t border-line">
      <div className="relative overflow-hidden">
        <p
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 text-[clamp(3.4rem,15vw,8rem)] leading-none font-medium tracking-[-0.055em] text-ink select-none"
          style={{ opacity: 0.055 }}
        >
          Terrastore
        </p>
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-x-12 lg:grid-cols-4 lg:px-10 lg:py-20">
        <div>
          <p className="flex items-center gap-3 text-sm tracking-[0.18em]">
            <span className="rule" aria-hidden="true" />
            TERRASTORE
          </p>
          <p className="mt-4 max-w-[28ch] text-sm leading-6 text-muted">
            Protection solaire et aménagement sur mesure. Étude, configuration et installation pour les maisons et les projets professionnels au Maroc.
          </p>
          {address ? (
            <p className="mt-4 max-w-[32ch] text-sm leading-6">
              {map ? (
                <a className="hover:underline" href={map} target="_blank" rel="noopener noreferrer">
                  {address}
                </a>
              ) : (
                address
              )}
            </p>
          ) : null}
          <p className="mt-2 text-sm text-muted">
            {siteConfig.legalForm}
            <span aria-hidden="true"> · </span>
            RC {siteConfig.tradeRegister}
          </p>
          <Link href="/contact" className="btn inline-flex btn-secondary mt-6" data-track="quote_cta">
            Étudier mon projet
          </Link>
        </div>
        <div>
          <p className="index">
            <span className="rule" aria-hidden="true" />
            Solutions
          </p>
          <ul className="mt-3 space-y-1">
            {footerSolutions.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="index">
            <span className="rule" aria-hidden="true" />
            Comprendre
          </p>
          <ul className="mt-3 space-y-1">
            {footerGuides.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="index">
            <span className="rule" aria-hidden="true" />
            Intervention
          </p>
          <p className="mt-3 text-sm">Partout au Maroc</p>
          <ul className="mt-2 flex flex-wrap gap-x-3">
            {cities.map((city) => (
              <li key={city.href}>
                <Link href={city.href} className="inline-flex min-h-10 items-center text-sm hover:underline">
                  {city.label}
                </Link>
              </li>
            ))}
          </ul>
          {hasDirectContact() ? (
            <ul className="mt-4 space-y-1 text-sm">
              {tel && siteConfig.phone ? (
                <li>
                  <a className="inline-flex min-h-10 items-center gap-2 hover:underline" href={tel} data-track="phone_click">
                    <Icon name="phone" />
                    {siteConfig.phone}
                  </a>
                </li>
              ) : null}
              {whatsapp ? (
                <li>
                  <a className="inline-flex min-h-10 items-center gap-2 hover:underline" href={whatsapp} data-track="whatsapp_click">
                    <Icon name="chat" />
                    WhatsApp
                  </a>
                </li>
              ) : null}
              {siteConfig.email ? (
                <li>
                  <a className="inline-flex min-h-10 items-center hover:underline" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-muted">Siège à Agadir. Intervention partout au Maroc.</p>
          )}
        </div>
        </div>
      </div>
      <div className="relative border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Terrastore</p>
          <ul className="flex flex-wrap gap-x-4">
            <li>
              <Link className="inline-flex min-h-11 items-center hover:underline" href="/mentions-legales">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link className="inline-flex min-h-11 items-center hover:underline" href="/politique-confidentialite">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link className="inline-flex min-h-11 items-center hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
