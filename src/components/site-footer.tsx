import Link from "next/link";
import { cities, footerGuides, footerSolutions } from "@/content/navigation";
import { Icon } from "@/components/icon";
import { formatAddress, hasDirectContact, mapHref, phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";

function IndexRow({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  return (
    <div className="grid gap-0 border-b border-line py-1 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-center sm:gap-8 sm:py-0">
      <p className="pt-2 text-[0.68rem] font-medium tracking-[0.18em] text-accent uppercase sm:pt-0">{label}</p>
      <ul className="grid min-w-0 grid-cols-3 gap-x-3 sm:flex sm:flex-wrap sm:gap-x-5">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="inline-flex min-h-11 items-center text-sm hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const tel = phoneHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");
  const address = formatAddress();
  const map = mapHref();

  return (
    <footer className="colophon border-t border-line">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 py-8 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-14">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.32em]">TERRASTORE</p>
            <p className="mt-4 max-w-[36ch] text-sm leading-6 text-muted">
              Protection solaire et aménagement sur mesure. Étude, configuration et installation pour les maisons et les projets professionnels au Maroc.
            </p>
            <p className="mt-4 text-sm text-muted">
              {siteConfig.legalForm}
              <span aria-hidden="true"> · </span>
              RC {siteConfig.tradeRegister}
            </p>
          </div>
          <div className="text-sm">
            {address ? (
              <p className="flex max-w-[36ch] items-start gap-2.5 leading-6 lg:ml-auto">
                <Icon name="pin" className="mt-0.5 size-[1.35rem] shrink-0 text-muted" />
                {map ? (
                  <a className="min-w-0 hover:underline" href={map} target="_blank" rel="noopener noreferrer">
                    {address}
                  </a>
                ) : (
                  address
                )}
              </p>
            ) : null}
            {hasDirectContact() ? (
              <ul className="mt-3 flex flex-wrap gap-x-6 lg:justify-end">
                {tel && siteConfig.phone ? (
                  <li>
                    <a className="inline-flex min-h-11 items-center gap-2.5 hover:underline" href={tel} data-track="phone_click">
                      <Icon name="phone" className="size-[1.35rem] text-muted" />
                      {siteConfig.phone}
                    </a>
                  </li>
                ) : null}
                {whatsapp ? (
                  <li>
                    <a className="inline-flex min-h-11 items-center gap-2.5 hover:underline" href={whatsapp} data-track="whatsapp_click">
                      <Icon name="chat" className="size-[1.35rem] text-muted" />
                      WhatsApp
                    </a>
                  </li>
                ) : null}
                {siteConfig.email ? (
                  <li>
                    <a className="inline-flex min-h-11 items-center hover:underline" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </li>
                ) : null}
              </ul>
            ) : (
              <p className="mt-3 text-muted">Siège à Agadir. Intervention partout au Maroc.</p>
            )}
          </div>
        </div>

        <div className="border-t border-line">
          <IndexRow label="Solutions" links={footerSolutions} />
          <IndexRow label="Conseils" links={footerGuides} />
          <IndexRow label="Villes" links={cities} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-5 py-3 text-sm text-muted">
          <p>© 2026 Terrastore</p>
          <ul className="flex flex-wrap gap-x-5">
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
