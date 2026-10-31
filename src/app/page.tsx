import Link from "next/link";
import type { Metadata } from "next";
import { Icon, IconWell } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import type { ImageId } from "@/content/images";
import { cities } from "@/content/navigation";
import { guides } from "@/content/guides";
import { homeGraph } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
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
    image: "parasol-offset",
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
    image: "pergola-bio-hotel",
  },
];

const steps = [
  { title: "Le besoin", text: "La ville, des photos, l’usage et des dimensions approximatives." },
  { title: "La configuration", text: "Le système suit l’exposition, l’implantation et l’architecture déjà là." },
  { title: "Le relevé", text: "Les cotes utiles se confirment avant la commande." },
  { title: "L’installation", text: "La pose tient compte de l’accès, des supports et des ouvrages voisins." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph()} />
      <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-16 sm:px-8 lg:px-10 lg:pt-20 lg:pb-8">
        <section className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="md:grid md:grid-cols-2 md:items-start md:gap-10 lg:block">
              <div>
                <p className="index">
                  <span className="rule" aria-hidden="true" />
                  Protection solaire
                </p>
                <h1 className="display mt-4 text-balance text-[2.05rem] leading-[1.08] font-medium sm:text-5xl lg:max-w-[12ch] lg:text-6xl">
                  Carports, parasols et stores sur mesure au Maroc
                </h1>
              </div>
              <div className="mt-5 md:mt-0 lg:mt-6">
                <p className="settle-up max-w-[42rem] text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  {frTypo(
                    "Terrastore étudie, configure et installe des solutions d’ombrage et d’aménagement extérieur pour les maisons et les projets professionnels, partout au Maroc. Le point de départ est le lieu : exposition, dimensions, usage et architecture existante.",
                  )}
                </p>
                <div className="mt-7">
                  <Link href="/contact" className="btn inline-flex w-full justify-center btn-primary sm:w-auto" data-track="quote_cta">
                    Demander une étude
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <Media id="parasol-hero" className="hero-still" plate priority sizes="(min-width: 1024px) 720px, 100vw" />
          </div>
        </section>

        <section className="rise mt-14 min-w-0 md:mt-32" aria-labelledby="focus">
          <h2 id="focus" className="text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
            Quatre familles, un ordre clair
          </h2>
          <div className="family-rail">
            {families.map((item) => (
              <Link key={item.href} href={item.href} className="group min-w-0">
                <p className="num">{item.n}</p>
                <h3 className="mt-3 flex items-center gap-3 text-[1.65rem] font-medium transition-colors group-hover:text-accent">
                  <IconWell name={item.icon} />
                  {item.title}
                </h3>
                <Media id={item.image} plate className="mt-4" sizes="(min-width: 768px) 46vw, 100vw" />
                <p className="mt-4 max-w-[36ch] leading-7 text-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rise mt-16 border-t border-line pt-10 md:mt-24 md:pt-14" aria-labelledby="approche">
          <h2 id="approche" className="text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
            Comment un projet avance
          </h2>
          <ol className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="step">
                <p className="step-index">0{index + 1}</p>
                <p className="mt-3 text-xl font-medium">{step.title}</p>
                <p className="mt-2 leading-7 text-muted">{frTypo(step.text)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rise mt-16 border-t border-line pt-10 md:mt-24 md:pt-14" aria-labelledby="spot-carport">
          <p className="index">
            <span className="rule" aria-hidden="true" />
            Carport
          </p>
          <h2 id="spot-carport" className="mt-4 max-w-[16ch] text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
            Protéger la voiture sans fermer un garage
          </h2>
          <Media id="carport-double" plate className="mt-8" sizes="(min-width: 1024px) 1120px, 100vw" />
          <p className="mt-6 max-w-[62ch] leading-8 text-muted">
            {frTypo(
              "Le carport aluminium se lit comme un plan devant la villa. Simple ou double, il se cale sur le nombre de véhicules présents en même temps, sur le sens du portail et sur la place des poteaux — hors du débattement des portières.",
            )}
          </p>
          <Link href="/carport-aluminium" className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4">
            Étudier un carport aluminium
          </Link>
        </section>

        <section className="rise mt-16 border-t border-line pt-10 md:mt-24 md:pt-14" aria-labelledby="spot-stores">
          <h2 id="spot-stores" className="text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
            Stores : dehors et dedans
          </h2>
          <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-10">
            <div className="min-w-0">
              <p className="index">
                <span className="rule" aria-hidden="true" />
                Dehors
              </p>
              <h3 className="mt-3 text-2xl font-medium">Extérieur</h3>
              <Media id="store-zip" plate className="mt-5" sizes="(min-width: 768px) 46vw, 100vw" />
              <p className="mt-4 leading-7 text-muted">
                Le store banne projette l’ombre sur la terrasse. Le store ZIP descend devant le vitrage ou le côté d’une pergola, là où le soleil rase.
              </p>
              <Link href="/stores-exterieurs" className="mt-3 inline-flex min-h-11 items-center underline underline-offset-4">
                Stores extérieurs
              </Link>
            </div>
            <div className="min-w-0">
              <p className="index">
                <span className="rule" aria-hidden="true" />
                Dedans
              </p>
              <h3 className="mt-3 text-2xl font-medium">Intérieur</h3>
              <Media id="store-interior" plate className="mt-5" sizes="(min-width: 768px) 46vw, 100vw" />
              <p className="mt-4 leading-7 text-muted">
                Enrouleur, vénitien, jour et nuit : on dose l’éblouissement et le vis-à-vis une fois la lumière entrée. La chaleur, elle, se traite de préférence avant la vitre.
              </p>
              <Link href="/stores-interieurs" className="mt-3 inline-flex min-h-11 items-center underline underline-offset-4">
                Stores intérieurs
              </Link>
            </div>
          </div>
        </section>

        <section className="rise mt-16 border-t border-line pt-10 md:mt-24 md:pt-14" aria-labelledby="publics">
          <h2 id="publics" className="text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
            Maisons et projets professionnels
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-0">
            <div className="md:pr-12">
              <p className="index">
                <span className="rule" aria-hidden="true" />
                Maisons
              </p>
              <p className="mt-4 max-w-[42ch] leading-7 text-muted">
                Villas, terrasses, piscines, allées. Le carport, le store de façade et le parasol de table se décident avec la façon dont vous vivez dehors, pas avec une collection.
              </p>
              <Link href="/carport-aluminium" className="mt-5 inline-flex min-h-11 items-center underline underline-offset-4">
                Commencer par le lieu
              </Link>
            </div>
            <div className="border-t border-line pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12">
              <p className="index">
                <span className="rule" aria-hidden="true" />
                Professionnels
              </p>
              <p className="mt-4 max-w-[42ch] leading-7 text-muted">
                Architectes, chantiers, hôtels, riads, restaurants, bureaux. L’étude porte sur les cotes, les supports et la séquence de pose.
              </p>
              <Link href="/professionnels" className="mt-5 inline-flex min-h-11 items-center underline underline-offset-4">
                Parler d’un projet professionnel
              </Link>
            </div>
          </div>
        </section>

        <section className="rise mt-16 border-t border-line pt-10 md:mt-24 md:pt-14" aria-labelledby="guides">
          <h2 id="guides" className="text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
            Décider avant de demander
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {guides.slice(0, 4).map((guide) => (
              <li key={guide.slug}>
                <Link href={`/conseils/${guide.slug}`} className="group flex min-h-16 items-center justify-between gap-4 py-3">
                  <span className="min-w-0 text-lg">{guide.h1.replace(/\s*\?$/, "")}</span>
                  <Icon name="arrow" className="size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/conseils" className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4">
            Tous les conseils
          </Link>
        </section>

        <section className="rise mt-16 border-t border-line pt-10 md:mt-24 md:pt-14" aria-labelledby="geo">
          <h2 id="geo" className="text-2xl font-medium">
            Intervention partout au Maroc
          </h2>
          <p className="mt-4 max-w-[62ch] leading-8 text-muted">
            Les projets sont étudiés sur l’ensemble du pays. Agadir, Marrakech, Casablanca, Rabat, Tanger et Essaouira reviennent souvent, chacun avec son exposition. Ces pages décrivent un contexte. Elles n’ouvrent pas une agence.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-5">
            {cities.map((city) => (
              <li key={city.href}>
                <Link href={city.href} className="inline-flex min-h-11 items-center text-sm underline decoration-line underline-offset-4">
                  {city.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
