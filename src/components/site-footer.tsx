import type { ReactNode } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Icon } from "@/components/icon";
import { SocialLinks } from "@/components/social-links";
import { cities, footerGuides, footerSolutions } from "@/content/navigation";
import { formatAddress, mailtoHref, mapHref, phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";

function Column({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[0.68rem] font-medium tracking-[0.18em] text-accent uppercase">{title}</p>
      {children}
    </div>
  );
}

export function SiteFooter() {
  const tel = phoneHref();
  const mail = mailtoHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");
  const address = formatAddress();
  const map = mapHref();
  const year = 2026;

  return (
    <footer className="colophon">
      <section className="band bg-ink text-inverse" aria-labelledby="pied-projet">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10 lg:py-16">
          <div>
            <h2 id="pied-projet" className="max-w-[14ch] text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
              Parlons de votre projet
            </h2>
            <p className="mt-4 max-w-[42ch] leading-7 text-[#ddd6cc]">
              Ville, photos, usage. Une réponse pour préciser la configuration, sans dossier complet.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {tel && siteConfig.phone ? (
              <a className="btn inline-flex gap-2 bg-inverse text-ink hover:bg-sand" href={tel} data-track="phone_click">
                <Icon name="phone" />
                {siteConfig.phone}
              </a>
            ) : null}
            {whatsapp ? (
              <a className="btn inline-flex gap-2 border border-inverse text-inverse hover:bg-inverse hover:text-ink" href={whatsapp} data-track="whatsapp_click">
                <Icon name="chat" />
                WhatsApp
              </a>
            ) : null}
            {mail && siteConfig.email ? (
              <a className="btn inline-flex gap-2 border border-inverse text-inverse hover:bg-inverse hover:text-ink" href={mail}>
                <Icon name="mail" />
                {siteConfig.email}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <div className="colophon-sheet border-t border-line">
        <div className="mx-auto grid min-w-0 max-w-[1200px] gap-10 px-5 py-12 sm:px-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" aria-label="Terrastore, accueil" className="inline-flex">
              <BrandLogo className="h-16 w-auto" />
            </Link>
            <p className="mt-5 max-w-[32ch] text-sm leading-6 text-muted">{siteConfig.tagline}. Étude et installation au Maroc.</p>
            <p className="mt-4 text-sm text-muted">
              {siteConfig.legalForm}
              <span aria-hidden="true"> · </span>
              RC {siteConfig.tradeRegister}
            </p>
          </div>
          <Column title="Produits" className="lg:col-span-2">
            <ul className="mt-4 space-y-1">
              {footerSolutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-sm hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>
          <Column title="Entreprise" className="lg:col-span-3">
            <ul className="mt-4 space-y-1">
              {footerGuides.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-sm hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="inline-flex min-h-11 items-center text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </Column>
          <div className="min-w-0 lg:col-span-3">
            <Column title="Contact">
              {address ? (
                <p className="mt-4 grid grid-cols-[1.25rem_minmax(0,1fr)] items-start gap-3 text-sm leading-6">
                  <Icon name="pin" className="mt-0.5 text-muted" />
                  {map ? (
                    <a className="hover:underline" href={map} target="_blank" rel="noopener noreferrer">
                      {address}
                    </a>
                  ) : (
                    address
                  )}
                </p>
              ) : null}
              <ul className="mt-2 space-y-1 text-sm">
                {tel && siteConfig.phone ? (
                  <li>
                    <a className="grid min-h-11 grid-cols-[1.25rem_minmax(0,1fr)] items-center gap-3 hover:underline" href={tel} data-track="phone_click">
                      <Icon name="phone" className="text-muted" />
                      <span>{siteConfig.phone}</span>
                    </a>
                  </li>
                ) : null}
                {whatsapp ? (
                  <li>
                    <a className="grid min-h-11 grid-cols-[1.25rem_minmax(0,1fr)] items-center gap-3 hover:underline" href={whatsapp} data-track="whatsapp_click">
                      <Icon name="chat" className="text-muted" />
                      <span>WhatsApp</span>
                    </a>
                  </li>
                ) : null}
                {mail && siteConfig.email ? (
                  <li>
                    <a className="grid min-h-11 grid-cols-[1.25rem_minmax(0,1fr)] items-center gap-3 hover:underline" href={mail}>
                      <Icon name="mail" className="text-muted" />
                      <span>{siteConfig.email}</span>
                    </a>
                  </li>
                ) : null}
              </ul>
              <p className="mt-6 text-[0.68rem] font-medium tracking-[0.18em] text-accent uppercase">Suivez-nous</p>
              <SocialLinks className="mt-2" />
            </Column>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-5 sm:px-8 lg:px-10">
            <p className="text-[0.68rem] font-medium tracking-[0.18em] text-accent uppercase">Villes</p>
            <ul className="flex flex-wrap gap-x-5">
              {cities.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-sm hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4 text-sm text-muted sm:px-8 lg:px-10">
            <p>© {year} Terrastore</p>
            <p>Agadir, Maroc</p>
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
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
