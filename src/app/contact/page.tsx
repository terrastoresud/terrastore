import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { SocialLinks } from "@/components/social-links";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icon";
import { formatAddress, mailtoHref, mapHref, phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Demander une étude | Terrastore",
  description:
    "Appelez ou écrivez au +212 661-232722, ou par e-mail à contact@terrastore.ma. Siège à Cité Lagouira, Agadir. Intervention partout au Maroc.",
  path: "/contact",
});

export default function ContactPage() {
  const tel = phoneHref();
  const mail = mailtoHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");
  const address = formatAddress();
  const map = mapHref();

  return (
    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pt-8 pb-16 sm:px-8 md:grid-cols-12 md:items-start md:gap-8 lg:gap-14 lg:px-10 lg:pt-12">
      <div className="min-w-0 md:col-span-5">
        <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact", href: "/contact" }]} />
        <p className="index mt-6">
          <span className="rule" aria-hidden="true" />
          Contact
        </p>
        <h1 className="display mt-4 text-balance text-[2.05rem] leading-[1.08] font-medium sm:text-5xl">Étudier un projet</h1>
        <p className="settle-up mt-5 max-w-[42ch] leading-8 text-muted">
          Indiquez la ville, le type d’ouvrage et ce que vous voulez protéger. Une dimension approximative et le contexte — villa, café, hôtel, bureau — aident déjà.
        </p>
        <ul className="mt-8 divide-y divide-line border-y border-line text-sm">
          <li className="py-3">La ville</li>
          <li className="py-3">Le nombre de véhicules, de tables ou de baies</li>
          <li className="py-3">Une photo, que vous pouvez décrire en attendant de l’envoyer</li>
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {tel && siteConfig.phone ? (
            <a className="btn inline-flex w-full justify-center btn-primary sm:w-auto" href={tel} data-track="phone_click">
              Appeler {siteConfig.phone}
            </a>
          ) : null}
          {whatsapp ? (
            <a className="btn inline-flex w-full justify-center btn-secondary sm:w-auto" href={whatsapp} data-track="whatsapp_click">
              WhatsApp
            </a>
          ) : null}
          {mail && siteConfig.email ? (
            <a className="btn inline-flex w-full justify-center gap-2 btn-secondary sm:w-auto" href={mail}>
              <Icon name="mail" className="size-[1.35rem]" />
              {siteConfig.email}
            </a>
          ) : null}
        </div>
        <SocialLinks className="mt-4" />
        {address ? (
          <p className="mt-6 text-sm leading-6 text-muted">
            Siège :{" "}
            {map ? (
              <a className="underline" href={map} target="_blank" rel="noopener noreferrer">
                {address}
              </a>
            ) : (
              address
            )}
            . {siteConfig.legalForm}, RC {siteConfig.tradeRegister}. L’étude se fait sur le lieu du projet, partout au Maroc.
          </p>
        ) : null}
      </div>
      <div className="dossier min-w-0 md:col-span-7">
        <QuoteForm />
      </div>
    </div>
  );
}
