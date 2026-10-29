import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { CtaBand, MobileCta } from "@/components/page-blocks";
import { cities } from "@/content/navigation";
import { guides } from "@/content/guides";
import { homeGraph } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import { frTypo } from "@/lib/typography";

export const metadata: Metadata = pageMetadata({
  title: "Carports, parasols et stores sur mesure au Maroc | Terrastore",
  description:
    "Terrastore étudie, configure et installe des carports aluminium, des parasols et des stores pour les maisons et les projets professionnels, partout au Maroc.",
  path: "/",
});

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
      <div className="mx-auto max-w-[1200px] px-5 pt-10 pb-8 lg:pt-16">
        <section className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.16em] text-accent uppercase">Protection solaire</p>
            <h1 className="mt-4 max-w-[12ch] text-[2.6rem] leading-[1.02] font-medium md:text-6xl">
              Carports, parasols et stores sur mesure au Maroc
            </h1>
            <p className="mt-6 max-w-[42rem] text-lg leading-8 text-muted">
              {frTypo(
                "Terrastore étudie, configure et installe des solutions d’ombrage et d’aménagement extérieur pour les maisons et les projets professionnels, partout au Maroc. Le point de départ est le lieu : exposition, dimensions, usage et architecture existante.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn inline-flex btn-primary" data-track="quote_cta">
                Demander une étude
              </Link>
              <Link href="/solutions" className="btn inline-flex btn-secondary">
                Découvrir nos solutions
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Media id="home-hero" priority sizes="(min-width: 1024px) 560px, 100vw" />
          </div>
        </section>

        <section className="mt-20" aria-labelledby="focus">
          <h2 id="focus" className="text-3xl font-medium md:text-4xl">
            Quatre familles, un ordre clair
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <Link href="/carport-aluminium" className="group border-t border-ink pt-4 lg:col-span-7">
              <p className="text-xs tracking-[0.14em] text-accent uppercase">01</p>
              <p className="mt-3 text-3xl font-medium">Carports</p>
              <p className="mt-3 max-w-[36ch] leading-7 text-muted">
                Abri voiture aluminium, simple ou double, adossé ou autoportant. L’implantation se décide avec le portail et les portières.
              </p>
              <Media id="carport-hero" className="mt-6" sizes="(min-width: 1024px) 640px, 100vw" />
            </Link>
            <Link href="/parasols" className="border-t border-ink pt-4 lg:col-span-5">
              <p className="text-xs tracking-[0.14em] text-accent uppercase">02</p>
              <p className="mt-3 text-3xl font-medium">Parasols</p>
              <p className="mt-3 leading-7 text-muted">
                Systèmes contemporains, mât central ou déporté, pour la maison comme pour une terrasse professionnelle.
              </p>
              <Media id="home-parasol" className="mt-6" sizes="(min-width: 1024px) 460px, 100vw" />
            </Link>
            <Link href="/stores" className="border-t border-line pt-4 lg:col-span-7">
              <p className="text-xs tracking-[0.14em] text-accent uppercase">03</p>
              <p className="mt-3 text-3xl font-medium">Stores</p>
              <p className="mt-3 max-w-[46ch] leading-7 text-muted">
                Store banne et store ZIP dehors. Enrouleur, vénitien et jour-nuit dedans. Chaque famille a sa page.
              </p>
            </Link>
            <Link href="/pergola-bioclimatique" className="border-t border-line pt-4 lg:col-span-5">
              <p className="text-xs tracking-[0.14em] text-muted uppercase">04</p>
              <p className="mt-3 text-2xl font-medium">Pergolas</p>
              <p className="mt-3 leading-7 text-muted">
                Lames orientables ou couverture rétractable, lorsque la terrasse doit rester en place toute la saison.
              </p>
            </Link>
          </div>
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

        <section className="mt-20" aria-labelledby="approche">
          <h2 id="approche" className="text-3xl font-medium md:text-4xl">
            Comment un projet avance
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-4">
                <p className="text-xs tracking-[0.14em] text-accent">0{index + 1}</p>
                <p className="mt-3 text-xl font-medium">{step.title}</p>
                <p className="mt-2 leading-7 text-muted">{frTypo(step.text)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 grid items-center gap-10 lg:grid-cols-2" aria-labelledby="spot-carport">
          <Media id="carport-double" sizes="(min-width: 1024px) 560px, 100vw" />
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

        <section className="mt-20 grid items-center gap-10 lg:grid-cols-2" aria-labelledby="spot-parasol">
          <div className="lg:order-2">
            <Media id="home-parasol" sizes="(min-width: 1024px) 560px, 100vw" />
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

        <section className="mt-20" aria-labelledby="spot-stores">
          <h2 id="spot-stores" className="text-4xl font-medium">
            Stores : dehors et dedans
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border-t border-line pt-4">
              <h3 className="text-2xl font-medium">Extérieur</h3>
              <p className="mt-3 leading-7 text-muted">
                Le store banne projette l’ombre sur la terrasse. Le store ZIP descend devant le vitrage ou le côté d’une pergola, là où le soleil rase.
              </p>
              <Link href="/stores-exterieurs" className="mt-4 inline-flex min-h-11 items-center underline">
                Stores extérieurs
              </Link>
            </div>
            <div className="border-t border-line pt-4">
              <h3 className="text-2xl font-medium">Intérieur</h3>
              <p className="mt-3 leading-7 text-muted">
                Enrouleur, vénitien, jour et nuit : on dose l’éblouissement et le vis-à-vis une fois la lumière entrée. La chaleur, elle, se traite de préférence avant la vitre.
              </p>
              <Link href="/stores-interieurs" className="mt-4 inline-flex min-h-11 items-center underline">
                Stores intérieurs
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 md:grid-cols-2" aria-labelledby="publics">
          <div className="bg-sand p-6 md:p-8">
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
          <div className="border border-line p-6 md:p-8">
            <h2 className="text-3xl font-medium">Projets professionnels</h2>
            <p className="mt-4 leading-7 text-muted">
              Architectes, chantiers, hôtels, riads, restaurants, bureaux. L’étude porte sur les cotes, les supports et la séquence de pose.
            </p>
            <Link href="/professionnels" className="mt-6 inline-flex min-h-11 items-center underline">
              Parler d’un projet professionnel
            </Link>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="guides">
          <h2 id="guides" className="text-3xl font-medium">
            Décider avant de demander
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {guides.slice(0, 4).map((guide) => (
              <li key={guide.slug}>
                <Link href={`/conseils/${guide.slug}`} className="flex min-h-16 items-center justify-between gap-4 py-3">
                  <span className="text-lg">{guide.h1.replace(/\s*\?$/, "")}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/conseils" className="mt-4 inline-flex min-h-11 items-center underline">
            Tous les conseils
          </Link>
        </section>

        <section className="mt-20" aria-labelledby="geo">
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
