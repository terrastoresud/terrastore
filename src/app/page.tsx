import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { CtaBand, MobileCta } from "@/components/page-blocks";
import type { ImageId } from "@/content/images";
import { cities } from "@/content/navigation";
import { guides } from "@/content/guides";
import { homeGraph } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import { phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";
import { frTypo } from "@/lib/typography";

export const metadata: Metadata = pageMetadata({
  title: "Carports, parasols et stores sur mesure au Maroc | Terrastore",
  description:
    "Terrastore, siège à Agadir, étudie, configure et installe des carports aluminium, des parasols, des stores et des pergolas pour les maisons et les projets professionnels, partout au Maroc.",
  path: "/",
});

const families: {
  href: string;
  n: string;
  icon: "carport" | "parasol" | "store" | "pergola";
  title: string;
  text: string;
  image: ImageId;
}[] = [
  {
    href: "/carport-aluminium",
    n: "01",
    icon: "carport",
    title: "Carports",
    text: "Abri voiture aluminium, simple ou double, adossé ou autoportant. L’implantation se décide avec le portail et les portières.",
    image: "carport-hero",
  },
  {
    href: "/parasols",
    n: "02",
    icon: "parasol",
    title: "Parasols",
    text: "Systèmes contemporains, mât central ou déporté, pour la maison comme pour une terrasse professionnelle.",
    image: "home-parasol",
  },
  {
    href: "/stores",
    n: "03",
    icon: "store",
    title: "Stores",
    text: "Store banne et store ZIP dehors. Enrouleur, vénitien et jour-nuit dedans. Chaque famille a sa page.",
    image: "home-store",
  },
  {
    href: "/pergola-bioclimatique",
    n: "04",
    icon: "pergola",
    title: "Pergolas",
    text: "Lames orientables ou couverture rétractable, lorsque la terrasse doit rester en place toute la saison.",
    image: "home-pergola",
  },
];

const steps = [
  { title: "Le besoin", text: "La ville, des photos, l’usage et des dimensions approximatives." },
  { title: "La configuration", text: "Le système suit l’exposition, l’implantation et l’architecture déjà là." },
  { title: "Le relevé", text: "Les cotes utiles se confirment avant la commande." },
  { title: "L’installation", text: "La pose tient compte de l’accès, des supports et des ouvrages voisins." },
];

function HomeContact({
  tel,
  whatsapp,
  className,
}: {
  tel: string | null;
  whatsapp: string | null;
  className: string;
}) {
  return (
    <p className={className}>
      {tel && siteConfig.phone ? (
        <a className="inline-flex min-h-11 items-center gap-2 underline" href={tel} data-track="phone_click">
          <Icon name="phone" />
          {siteConfig.phone}
        </a>
      ) : null}
      {whatsapp ? (
        <>
          <span aria-hidden="true"> · </span>
          <a className="inline-flex min-h-11 items-center gap-2 underline" href={whatsapp} data-track="whatsapp_click">
            <Icon name="chat" />
            WhatsApp
          </a>
        </>
      ) : null}
      <span aria-hidden="true"> · </span>
      Siège à Agadir, intervention partout au Maroc.
    </p>
  );
}

export default function HomePage() {
  const tel = phoneHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");

  return (
    <>
      <JsonLd data={homeGraph()} />
      <div className="mx-auto max-w-[1200px] px-5 pt-10 pb-8 sm:px-8 lg:px-10 lg:pt-16">
        <section className="grid items-end gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="md:grid md:grid-cols-2 md:items-start md:gap-10 lg:block">
              <div>
                <p className="index">
                  <span className="rule" aria-hidden="true" />
                  Protection solaire
                </p>
                <h1 className="display mt-4 max-w-[12ch] text-[2.6rem] leading-[1.02] font-medium sm:text-5xl md:max-w-none lg:max-w-[12ch] lg:text-6xl">
                  Carports, parasols et stores sur mesure au Maroc
                </h1>
              </div>
              <div className="mt-6 md:mt-0 lg:mt-6">
                <p className="settle-up max-w-[42rem] text-lg leading-8 text-muted">
                  {frTypo(
                    "Terrastore étudie, configure et installe des solutions d’ombrage et d’aménagement extérieur pour les maisons et les projets professionnels, partout au Maroc. Le point de départ est le lieu : exposition, dimensions, usage et architecture existante.",
                  )}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn inline-flex btn-primary" data-track="quote_cta">
                    Demander une étude
                  </Link>
                  <Link href="/solutions" className="btn inline-flex btn-secondary max-md:hidden">
                    Découvrir nos solutions
                  </Link>
                </div>
                <HomeContact tel={tel} whatsapp={whatsapp} className="mt-6 hidden text-sm leading-6 text-muted md:block" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <Media id="home-hero" className="hero-still" plate priority sizes="(min-width: 1024px) 720px, 100vw" />
          </div>
        </section>

        <section className="rise mt-8 min-w-0 md:mt-32" aria-labelledby="focus">
          <h2 id="focus" className="text-3xl font-medium md:text-4xl">
            Quatre familles, un ordre clair
          </h2>
          <div className="family-rail">
            {families.map((item, index) => {
              const flip = index % 2 === 1;
              return (
                <Link key={item.href} href={item.href} className="group min-w-0">
                  <div className={flip ? "order-2 min-w-0 md:order-none lg:col-span-4 lg:col-start-9" : "order-2 min-w-0 md:order-none lg:col-span-4"}>
                    <p className="num">{item.n}</p>
                    <h3 className="mt-4 flex items-center gap-3 text-3xl font-medium transition-colors group-hover:text-accent">
                      <Icon name={item.icon} className="size-8" />
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[40ch] leading-7 text-muted">{item.text}</p>
                  </div>
                  <div
                    className={
                      flip
                        ? "order-1 min-w-0 md:order-first lg:order-none lg:col-span-8 lg:col-start-1 lg:row-start-1"
                        : "order-1 min-w-0 md:order-none lg:col-span-8"
                    }
                  >
                    <Media
                      id={item.image}
                      plate={index % 2 === 0}
                      className={index % 2 === 1 ? "quiet" : undefined}
                      sizes="(min-width: 1024px) 760px, (min-width: 768px) 50vw, 86vw"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
          <Link href="/solutions" className="btn mt-6 inline-flex btn-secondary md:hidden">
            Découvrir nos solutions
          </Link>
          <HomeContact tel={tel} whatsapp={whatsapp} className="mt-4 text-sm leading-6 text-muted md:hidden" />
          <p className="mt-6 text-sm text-muted">
            Également :{" "}
            <Link href="/voile-ombrage" className="underline">
              voile d’ombrage
            </Link>
            ,{" "}
            <Link href="/stores-interieurs" className="underline">
              stores intérieurs
            </Link>
            .
          </p>
        </section>

        <section className="rise mt-24 md:mt-32" aria-labelledby="approche">
          <h2 id="approche" className="text-3xl font-medium md:text-4xl">
            Comment un projet avance
          </h2>
          <ol className="track mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="pt-6">
                <p className="text-xs tracking-[0.14em] text-accent">0{index + 1}</p>
                <p className="mt-3 text-xl font-medium">{step.title}</p>
                <p className="mt-2 leading-7 text-muted">{frTypo(step.text)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rise mt-20 grid items-center gap-8 md:mt-28 md:grid-cols-2 md:gap-12" aria-labelledby="spot-carport">
          <Media id="carport-double" plate sizes="(min-width: 768px) 50vw, 100vw" />
          <div>
            <p className="text-xs tracking-[0.16em] text-accent uppercase">Carport</p>
            <h2 id="spot-carport" className="mt-3 text-4xl leading-tight font-medium">
              Protéger la voiture sans fermer un garage
            </h2>
            <p className="mt-4 leading-8 text-muted">
              {frTypo(
                "Le carport aluminium se lit comme un plan devant la villa. Simple ou double, il se cale sur le nombre de véhicules présents en même temps, sur le sens du portail et sur la place des poteaux — hors du débattement des portières.",
              )}
            </p>
            <Link href="/carport-aluminium" className="mt-6 inline-flex min-h-11 items-center underline">
              Étudier un carport aluminium
            </Link>
          </div>
        </section>

        <section className="rise mt-20 grid items-center gap-8 md:mt-28 md:grid-cols-2 md:gap-12" aria-labelledby="spot-parasol">
          <div className="min-w-0 md:order-2">
            <Media id="home-parasol" className="quiet" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] text-accent uppercase">Parasols</p>
            <h2 id="spot-parasol" className="mt-3 text-4xl leading-tight font-medium">
              Un ombrage de terrasse, pas un accessoire
            </h2>
            <p className="mt-4 leading-8 text-muted">
              Mât central, mât déporté ou grand format : le parasol se choisit selon la table, la course du soleil et la façon de le tenir au sol. Les terrasses de cafés et d’hôtels ne reprennent pas le modèle d’une villa.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/parasols" className="inline-flex min-h-11 items-center underline">
                Voir les parasols
              </Link>
              <Link href="/parasol-deporte" className="inline-flex min-h-11 items-center underline">
                Comprendre le parasol déporté
              </Link>
            </div>
          </div>
        </section>

        <section className="rise mt-20 md:mt-28" aria-labelledby="spot-stores">
          <h2 id="spot-stores" className="text-4xl font-medium">
            Stores : dehors et dedans
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="min-w-0 border-t border-line pt-4">
              <p className="index">Dehors</p>
              <h3 className="mt-3 text-2xl font-medium">Extérieur</h3>
              <p className="mt-3 leading-7 text-muted">
                Le store banne projette l’ombre sur la terrasse. Le store ZIP descend devant le vitrage ou le côté d’une pergola, là où le soleil rase.
              </p>
              <Media id="store-zip" className="quiet mt-6" sizes="(min-width: 768px) 46vw, 100vw" />
              <Link href="/stores-exterieurs" className="inline-flex min-h-11 items-center underline">
                Stores extérieurs
              </Link>
            </div>
            <div className="min-w-0 border-t border-line pt-4">
              <p className="index">Dedans</p>
              <h3 className="mt-3 text-2xl font-medium">Intérieur</h3>
              <p className="mt-3 leading-7 text-muted">
                Enrouleur, vénitien, jour et nuit : on dose l’éblouissement et le vis-à-vis une fois la lumière entrée. La chaleur, elle, se traite de préférence avant la vitre.
              </p>
              <Media id="store-interior" plate className="mt-6" sizes="(min-width: 768px) 46vw, 100vw" />
              <Link href="/stores-interieurs" className="inline-flex min-h-11 items-center underline">
                Stores intérieurs
              </Link>
            </div>
          </div>
        </section>

        <section className="rise mt-20 grid gap-8 md:mt-28 md:grid-cols-2" aria-labelledby="publics">
          <div className="panel bg-sand p-6 md:p-8">
            <h2 id="publics" className="text-3xl font-medium">
              Maisons
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Villas, terrasses, piscines, allées. Le carport, le store de façade et le parasol de table se décident avec la façon dont vous vivez dehors, pas avec une collection.
            </p>
            <Link href="/carport-aluminium" className="mt-6 inline-flex min-h-11 items-center underline">
              Commencer par le lieu
            </Link>
          </div>
          <div className="panel border border-line p-6 md:p-8">
            <h2 className="text-3xl font-medium">Projets professionnels</h2>
            <p className="mt-4 leading-7 text-muted">
              Architectes, chantiers, hôtels, riads, restaurants, bureaux. L’étude porte sur les cotes, les supports et la séquence de pose.
            </p>
            <Link href="/professionnels" className="mt-6 inline-flex min-h-11 items-center underline">
              Parler d’un projet professionnel
            </Link>
          </div>
        </section>

        <section className="rise mt-24 md:mt-32" aria-labelledby="guides">
          <h2 id="guides" className="text-3xl font-medium">
            Décider avant de demander
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {guides.slice(0, 4).map((guide) => (
              <li key={guide.slug}>
                <Link href={`/conseils/${guide.slug}`} className="group flex min-h-16 items-center justify-between gap-4 py-3">
                  <span className="min-w-0 text-lg">{guide.h1.replace(/\s*\?$/, "")}</span>
                  <span aria-hidden="true" className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/conseils" className="mt-4 inline-flex min-h-11 items-center underline">
            Tous les conseils
          </Link>
        </section>

        <section className="rise mt-20 border-t border-line pt-10 md:mt-28" aria-labelledby="geo">
          <h2 id="geo" className="text-4xl font-medium">
            Intervention partout au Maroc
          </h2>
          <p className="measure mt-4 leading-8 text-muted">
            Les projets sont étudiés sur l’ensemble du pays. Agadir, Marrakech, Casablanca, Rabat, Tanger et Essaouira reviennent souvent, chacun avec son exposition. Ces pages décrivent un contexte. Elles n’ouvrent pas une agence.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {cities.map((city) => (
              <li key={city.href}>
                <Link href={city.href} className="btn inline-flex btn-secondary">
                  {city.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <CtaBand
        title="Parlons de votre projet"
        text="Ville, photos, usage. Nous revenons vers vous pour préciser la configuration, sans vous demander un dossier complet."
      />
      <MobileCta />
    </>
  );
}
