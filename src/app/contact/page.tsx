import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { hasDirectContact, phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Demander une étude | Terrastore",
  description:
    "Décrivez votre projet de carport, parasol, store ou pergola au Maroc. Ville, téléphone et quelques lignes suffisent.",
  path: "/contact",
});

export default function ContactPage() {
  const deliveryEnabled = Boolean(process.env.CONTACT_API_URL && process.env.CONTACT_API_KEY);
  const tel = phoneHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");

  return (
    <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pt-8 pb-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact", href: "/contact" }]} />
        <h1 className="mt-6 text-4xl font-medium md:text-5xl">Étudier un projet</h1>
        <p className="mt-5 leading-8 text-muted">
          Indiquez la ville, le type d’ouvrage et ce que vous voulez protéger. Une dimension approximative et le contexte — villa, café, hôtel, bureau — aident déjà.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
          <li>la ville</li>
          <li>le nombre de véhicules, de tables ou de baies</li>
          <li>une photo, que vous pouvez décrire en attendant de l’envoyer</li>
        </ul>
        {hasDirectContact() ? (
          <ul className="mt-8 space-y-2">
            {tel && siteConfig.phone ? (
              <li>
                <a className="underline" href={tel} data-track="phone_click">
                  {siteConfig.phone}
                </a>
              </li>
            ) : null}
            {whatsapp ? (
              <li>
                <a className="underline" href={whatsapp} data-track="whatsapp_click">
                  Écrire sur WhatsApp
                </a>
              </li>
            ) : null}
            {siteConfig.email ? (
              <li>
                <a className="underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
            ) : null}
          </ul>
        ) : (
          <p className="mt-8 text-sm leading-6 text-muted">
            Téléphone, WhatsApp et e-mail seront affichés ici dès qu’ils seront confirmés. Aucun numéro provisoire n’est montré.
          </p>
        )}
      </div>
      <div className="lg:col-span-7">
        <QuoteForm deliveryEnabled={deliveryEnabled} />
      </div>
    </div>
  );
}
