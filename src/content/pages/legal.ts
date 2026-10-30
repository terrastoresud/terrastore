import type { PageDoc } from "@/content/types";

export const legalPages: PageDoc[] = [
  {
    slug: "mentions-legales",
    kind: "legal",
    title: "Mentions légales | Terrastore",
    description:
      "Mentions légales de Terrastore : SARL à associé unique, RC Agadir n° 58317, siège à Cité Lagouira, Agadir.",
    h1: "Mentions légales",
    eyebrow: "Information",
    lede: "Le site présente la marque Terrastore, protection solaire et aménagement sur mesure au Maroc. Les mentions ci-dessous reprennent les informations confirmées pour publication.",
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
              ["Le site est édité sous la marque Terrastore, exploitée par une société à responsabilité limitée à associé unique, immatriculée au registre du commerce d'Agadir sous le numéro 58317."],
              ["Siège : N° 264, Rue Tafoukt, Bloc 1, Cité Lagouira, Agadir, Maroc."],
              ["Le nom du gérant n'est pas affiché. L'ICE et l'identifiant fiscal ne sont pas publiés sur cette page."],
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
              ["Téléphone et WhatsApp : +212 661-232722. Ces coordonnées figurent aussi dans le pied de page et sur la page contact. Aucun e-mail public n'est affiché."],
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
              ["Le site est hébergé par Vercel Inc., vercel.com."],
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
              ["Les textes et la structure des pages sont protégés. Les photographies montrent des configurations d'ouvrages. Elles ne sont pas présentées comme des chantiers nominatifs, ni rattachées à une ville ou à un client."],
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
    related: [{ href: "/mentions-legales", label: "Mentions légales", text: "Éditeur, siège et registre du commerce." }],
    sections: [
      {
        id: "qui",
        heading: "Responsable",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le responsable du traitement est l'éditeur du site : la société à responsabilité limitée à associé unique immatriculée au registre du commerce d'Agadir sous le numéro 58317, siège N° 264, Rue Tafoukt, Bloc 1, Cité Lagouira, Agadir. Tant que l'envoi du formulaire n'est pas activé, ce formulaire n'enregistre pas le message."],
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
              ["Vous pouvez demander l'accès, la rectification ou la suppression des messages vous concernant par téléphone ou WhatsApp au +212 661-232722."],
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
