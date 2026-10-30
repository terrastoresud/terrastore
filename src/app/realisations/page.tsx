import type { Metadata } from "next";
import { projects, projectsArePublic } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Réalisations | Terrastore",
    description: "Les réalisations Terrastore seront publiées lorsque les photographies et les faits de chantier seront validés.",
    path: "/realisations",
  }),
  robots: { index: false, follow: false },
};

export default function ProjectsPage() {
  const visible = projectsArePublic();
  return (
    <div className="mx-auto max-w-[800px] px-5 py-16 sm:px-8">
      <h1 className="display text-4xl font-medium">Réalisations</h1>
      {visible ? (
        <ul className="mt-8 space-y-8">
          {projects.map((project) => (
            <li key={project.slug}>
              <h2 className="text-2xl font-medium">{project.name}</h2>
              <p className="mt-2 text-muted">
                {project.city} — {project.product}
              </p>
              <p className="mt-3 leading-7">{project.summary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 leading-8 text-muted">
          Les chantiers ne sont pas encore publiés. Cette page restera hors des moteurs de recherche tant que de vraies photographies et des faits vérifiés n’y figureront pas. Aucun projet n’est inventé pour remplir la galerie.
        </p>
      )}
    </div>
  );
}
