import type { PageDoc } from "@/content/types";

export const legalPages: PageDoc[] = [
  {
    slug: "mentions-legales",
    kind: "legal",
    title: "Mentions légales | Terrastore",
    description: "Mentions légales du site Terrastore. Les informations d'immatriculation et d'adresse ne sont publiées qu'une fois confirmées.",
    h1: "Mentions légales",
    eyebrow: "Information",
    lede: "Le site présente la marque Terrastore, spécialisée dans la protection solaire et l'aménagement sur mesure au Maroc. Les données légales manquantes ne sont pas inventées.",
    primaryQuery: "mentions légales Terrastore",
    serviceType: "Information légale",
    ctaTitle: "Une question sur un projet",
    ctaText: "Le formulaire de contact sert aux demandes d'étude, pas aux formalités.",
    breadcrumbs: [{ name: "Mentions légales", href: "/mentions-legales" }],
    related: [
      { href: "/politique-confidentialite", label: "Confidentialité", text: "Ce que le formulaire traite réellement." },
      { href: "/a-propos", label: "À propos", text: "Le périmètre de la marque." },
    ],
    sections: [
      {
        id: "editeur",
        heading: "Éditeur",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le site est édité sous la marque Terrastore. La raison sociale, la forme juridique, le numéro RC, l'ICE, l'identifiant fiscal et l'adresse du siège ne sont pas affichés tant qu'ils n'ont pas été confirmés pour publication par le responsable du site."],
              ["Directeur de la publication : non communiqué."],
            ],
          },
        ],
      },
      {
        id: "contact-legal",
        heading: "Contact",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Lorsqu'un téléphone, un WhatsApp ou un e-mail est renseigné dans la configuration du site, il apparaît dans le pied de page et sur la page contact. En l'absence de ces coordonnées, seule la demande en ligne est proposée, et uniquement si l'envoi est activé."],
            ],
          },
        ],
      },
      {
        id: "hebergeur",
        heading: "Hébergement",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["L'hébergeur de production sera indiqué ici au moment de la mise en ligne définitive. Tant que le site est servi depuis un environnement de prévisualisation, cette mention reste ouverte."],
            ],
          },
        ],
      },
      {
        id: "propriete",
        heading: "Propriété du contenu",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Les textes, la structure des pages et les schémas d'intention sont protégés. Les schémas ne représentent pas des chantiers réalisés. Les photographies de projets seront créditées lorsqu'elles remplaceront ces schémas."],
              ["Les marques citées pour expliquer un usage — sans être présentées comme des partenaires — restent la propriété de leurs titulaires. Terrastore ne revendique pas de partenariat qui n'aurait pas été établi."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "politique-confidentialite",
    kind: "legal",
    title: "Politique de confidentialité | Terrastore",
    description:
      "Politique de confidentialité du site Terrastore : données du formulaire de contact, absence de revente, et mesure d'audience seulement si elle est activée.",
    h1: "Politique de confidentialité",
    eyebrow: "Données",
    lede: "Cette page décrit uniquement les traitements réellement prévus par le site. Elle sera mise à jour lorsque l'envoi des messages sera relié à un outil définitif.",
    primaryQuery: "confidentialité Terrastore",
    serviceType: "Information légale",
    ctaTitle: "Revenir au projet",
    ctaText: "La demande d'étude reste le seul formulaire du site.",
    breadcrumbs: [{ name: "Confidentialité", href: "/politique-confidentialite" }],
    related: [{ href: "/mentions-legales", label: "Mentions légales", text: "Éditeur et informations encore ouvertes." }],
    sections: [
      {
        id: "qui",
        heading: "Responsable",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le responsable du traitement est l'éditeur du site Terrastore. Son identité légale complète sera publiée dans les mentions légales dès confirmation. En attendant, aucune donnée n'est conservée par le formulaire si l'envoi n'est pas activé."],
            ],
          },
        ],
      },
      {
        id: "form",
        heading: "Formulaire de demande",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le formulaire demande le nom, le téléphone ou WhatsApp, la ville, le type de projet, des dimensions facultatives et un message. Ces informations servent à répondre à une demande d'étude."],
              ["Tant que l'adresse d'envoi et la clé d'accès ne sont pas configurées, le serveur refuse la demande et n'enregistre pas le message. Il n'y a pas d'accusé de réception fictif."],
              ["Lorsque l'envoi est activé, le message est transmis au service désigné par cette configuration, par une liaison chiffrée. La durée de conservation dépendra alors de cet outil et sera précisée ici. Elle ne dépassera pas le temps utile pour traiter la demande et les suites du projet, sauf obligation légale."],
            ],
          },
        ],
      },
      {
        id: "base",
        heading: "Base et droits",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["La demande est envoyée avec votre accord, recueilli par la case du formulaire. Le cadre applicable est la loi marocaine 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. Une déclaration auprès de la CNDP, si elle est requise pour le traitement définitif, sera référencée lorsqu'elle existera. Le site ne prétend pas qu'elle est déjà faite."],
              ["Vous pouvez demander l'accès, la rectification ou la suppression des messages vous concernant dès qu'un canal de contact publié existe. Sans e-mail publié, cette demande pourra être faite par le moyen de contact qui sera affiché."],
            ],
          },
        ],
      },
      {
        id: "audience",
        heading: "Mesure d'audience",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Aucune mesure d'audience n'est chargée tant qu'un identifiant n'est pas configuré. S'il l'est, un bandeau demande votre accord avant le chargement. Le refus n'empêche pas de lire le site ni d'utiliser le formulaire. Aucune bannière n'est affichée en l'absence de cet identifiant, parce qu'aucun cookie non essentiel n'est alors déposé par le site."],
            ],
          },
        ],
      },
      {
        id: "partage",
        heading: "Partage",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Les données du formulaire ne sont pas vendues. Elles ne sont pas cédées à des partenaires commerciaux. Le seul destinataire prévu est l'outil d'envoi configuré pour Terrastore, le moment venu."],
            ],
          },
        ],
      },
    ],
  },
];
