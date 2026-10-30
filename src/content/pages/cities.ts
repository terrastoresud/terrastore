import type { PageDoc } from "@/content/types";

function city(
  input: Omit<PageDoc, "kind" | "serviceType" | "ctaTitle" | "ctaText" | "breadcrumbs"> & { area: string },
): PageDoc {
  return {
    ...input,
    kind: "city",
    serviceType: `Protection solaire à ${input.area}`,
    ctaTitle: `Étudier un projet à ${input.area}`,
    ctaText: "La ville est déjà connue. Ajoutez des photos, l'usage et une dimension approximative.",
    breadcrumbs: [{ name: input.area, href: `/${input.slug}` }],
  };
}

export const cityPages: PageDoc[] = [
  city({
    slug: "agadir",
    area: "Agadir",
    title: "Carports, parasols et stores à Agadir | Terrastore",
    description:
      "Terrastore intervient à Agadir pour les carports, parasols, stores et pergolas. Le siège est à Cité Lagouira. L'étude se fait sur le lieu du projet.",
    h1: "Protection solaire à Agadir",
    eyebrow: "Souss",
    lede: "Terrastore intervient à Agadir pour les villas, les terrasses et les lieux d'hospitalité. Le littoral change les priorités : soleil long, air marin, et vent qui traverse les parcelles ouvertes.",
    primaryQuery: "carport Agadir",
    imageId: "city-agadir",
    related: [
      { href: "/carport-aluminium", label: "Carport aluminium", text: "Stationnements de villas exposés une grande partie de la journée." },
      { href: "/store-banne", label: "Store banne", text: "Terrasses de plain-pied collées à la façade." },
      { href: "/parasol-professionnel", label: "Parasols professionnels", text: "Cafés et restaurants qui ouvrent la toile chaque service." },
    ],
    faqs: [
      { question: "Avez-vous une agence ouverte au public à Agadir ?", answer: "Le siège est au N° 264, Rue Tafoukt, Bloc 1, Cité Lagouira, Agadir. Ce n'est pas un showroom à visiter sans rendez-vous. L'étude se fait sur le lieu du projet. Le téléphone et le WhatsApp sont le +212 661-232722." },
      { question: "Le bord de mer change-t-il le projet ?", answer: "Oui pour l'ancrage, le choix entre toile légère et structure, et la fréquence de fermeture des parasols et stores. Non pour inventer une classe de résistance identique à toutes les parcelles d'Agadir." },
    ],
    sections: [
      {
        id: "villas",
        heading: "Villas et stationnements au soleil",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Beaucoup de maisons du Grand Agadir gardent la voiture devant, sur une dalle ouverte. Le carport se juge alors avec le portail, souvent large, et avec le vent qui accélère entre deux volumes. Un poteau mal placé gêne autant que l'absence d'ombre."],
              ["Les terrasses de plain-pied, face au jardin ou à la piscine, appellent plutôt un store banne ou une pergola selon que l'ombre doit se replier ou rester structurée."],
            ],
          },
        ],
      },
      {
        id: "littoral",
        heading: "Air marin et terrasses d'hospitalité",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Sur la baie et vers les stations voisines, les terrasses de cafés et d'hôtels travaillent avec le vent du large. Un parasol professionnel s'étudie avec son ancrage et avec la consigne de fermeture, pas seulement avec le diamètre de la toile. Un store vertical peut protéger un côté de salle sans fermer la vue."],
              ["Terrastore intervient aussi au-delà d'Agadir. La page décrit un contexte de projet, pas un territoire exclusif."],
            ],
          },
        ],
      },
    ],
  }),
  city({
    slug: "marrakech",
    area: "Marrakech",
    title: "Parasols, pergolas et stores à Marrakech | Terrastore",
    description:
      "Terrastore intervient à Marrakech pour villas, riads et terrasses d'hôtels. Soleil intense, cours et grands extérieurs : le choix d'ombrage change selon le lieu.",
    h1: "Ombrage pour villas et riads à Marrakech",
    eyebrow: "Haouz",
    lede: "Terrastore intervient à Marrakech là où le soleil dure et tape fort : villas avec terrasses larges, riads en cour, hôtels qui dressent dehors une grande partie de l'année.",
    primaryQuery: "parasol Marrakech",
    imageId: "city-marrakech",
    related: [
      { href: "/parasols", label: "Parasols", text: "Ombre mobile dans une cour ou sur une terrasse de villa." },
      { href: "/pergola-bioclimatique", label: "Pergola bioclimatique", text: "Couvrir une salle extérieure sans l'éteindre." },
      { href: "/voile-ombrage", label: "Voile d'ombrage", text: "Tendre une toile dans une cour déjà murée." },
      { href: "/carport-aluminium", label: "Carport", text: "Villas hors médina, où la voiture reste au soleil." },
    ],
    faqs: [
      { question: "Un riad se traite-t-il comme une villa ?", answer: "Non. La cour est close, les accès sont étroits, les sols souvent précieux. Le parasol ou la voile s'étudient avec les contraintes de passage. Le carport concerne plutôt les villas et les propriétés hors ruelles." },
      { question: "La pergola est-elle trop lourde pour une terrasse de toit ?", answer: "Cela dépend de la structure existante, pas de la ville. On ne pose pas une pergola sur un toit sans savoir ce qu'il porte. Le relevé inclut cette question." },
    ],
    sections: [
      {
        id: "soleil",
        heading: "Un soleil qui organise la journée",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["À Marrakech, l'extérieur est habitable tôt et tard, et difficile aux heures centrales de l'été. L'ombrage sert donc deux moments : protéger le déjeuner, puis s'effacer ou s'ouvrir quand la température tombe. Une pergola à lames ou une toile rétractable répondent mieux à ce double usage qu'une couverture opaque permanente."],
              ["Les grandes parcelles de palmeraie ou de périphérie ajoutent le stationnement. Le carport y est un sujet de villa, distinct de la terrasse de réception."],
            ],
          },
        ],
      },
      {
        id: "riads",
        heading: "Cours de riads et terrasses d'hôtels",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Dans une cour, le parasol déporté ou la voile évitent de poser un massif au centre. L'ancrage se fait dans des murs anciens : on ne perce pas sans regarder l'épaisseur et les réseaux. Sur une terrasse d'hôtel, la répétition des tables impose un calepinage des mâts pour que le service reste fluide."],
              ["Aucune réalisation nominative n'est affichée tant que les photographies et les accords ne sont pas réunis."],
            ],
          },
        ],
      },
    ],
  }),
  city({
    slug: "casablanca",
    area: "Casablanca",
    title: "Carports et stores à Casablanca | Terrastore",
    description:
      "Terrastore intervient à Casablanca pour carports de villas, terrasses commerciales et bureaux. Exposition atlantique, sans adresse d'agence inventée.",
    h1: "Carports et terrasses à Casablanca",
    eyebrow: "Métropole",
    lede: "Terrastore intervient à Casablanca sur les villas, les bureaux et les terrasses commerciales. La ville mêle un soleil net et une humidité atlantique : les stationnements ouverts et les façades vitrées sont les deux sujets les plus fréquents.",
    primaryQuery: "carport Casablanca",
    imageId: "city-casablanca",
    related: [
      { href: "/carport-aluminium", label: "Carport aluminium", text: "Places de villa et accès résidentiels." },
      { href: "/store-banne", label: "Store banne", text: "Terrasses de restaurants et de maisons." },
      { href: "/stores-interieurs", label: "Stores intérieurs", text: "Bureaux et éblouissement sur écran." },
      { href: "/professionnels", label: "Projets professionnels", text: "Coordination avec un chantier ou un exploitant." },
    ],
    faqs: [
      { question: "Intervenez-vous seulement sur la corniche ?", answer: "Non. Casablanca est un contexte parmi d'autres, des quartiers de villas aux immeubles de bureaux. Le site ne liste pas les quartiers pour les citer." },
      { question: "Le carport est-il pertinent en ville ?", answer: "Oui lorsque la voiture dort dehors, dans une allée de villa ou un parking de petite résidence. En immeuble avec sous-sol, le sujet disparaît et la demande passe aux stores de façade ou de bureau." },
    ],
    sections: [
      {
        id: "villas-casa",
        heading: "Villas et allées",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Les parcelles sont souvent plus contraintes qu'à la périphérie d'Agadir ou de Marrakech. Le carport doit tenir dans une allée déjà dessinée : portail, mur mitoyen, vis-à-vis. L'autoportant n'est pas toujours possible ; l'adossé doit respecter une façade parfois déjà isolée ou récemment ravalée."],
            ],
          },
        ],
      },
      {
        id: "tertiaire",
        heading: "Bureaux et terrasses qui servent",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Les plateaux vitrés éblouissent l'après-midi. Le store intérieur, parfois doublé d'un store vertical extérieur, se spécifie baie par baie. Les terrasses de restaurants, elles, comparent store banne et parasol selon la profondeur disponible sur le trottoir ou la dalle."],
              ["Pour un programme immobilier ou un chantier en cours, la page ", { href: "/professionnels", label: "professionnels" }, " décrit le cadre d'échange."],
            ],
          },
        ],
      },
    ],
  }),
  city({
    slug: "rabat",
    area: "Rabat",
    title: "Stores et pergolas à Rabat | Terrastore",
    description:
      "Terrastore intervient à Rabat pour les villas, les terrasses et les projets professionnels. Climat atlantique tempéré : l'extérieur sert longtemps si l'ombre est juste.",
    h1: "Terrasses et villas à Rabat",
    eyebrow: "Atlantique",
    lede: "Terrastore intervient à Rabat et dans sa région pour des maisons et des projets professionnels. L'été y est chaud sans atteindre les excès de l'intérieur des terres, et l'hiver reste assez doux pour qu'une terrasse couverte serve au-delà de la belle saison.",
    primaryQuery: "store Rabat",
    imageId: "city-rabat",
    related: [
      { href: "/pergola-bioclimatique", label: "Pergola bioclimatique", text: "Garder la terrasse utile une grande partie de l'année." },
      { href: "/stores", label: "Stores", text: "Façades de villas et lumière des pièces." },
      { href: "/carport-aluminium", label: "Carport", text: "Stationnement des maisons avec allée." },
    ],
    faqs: [
      { question: "Faut-il une pergola étanche pour l'hiver rabati ?", answer: "Les pluies atlantiques existent. Une pergola à lames peut orienter l'eau si le système le permet. Ce n'est pas une pièce fermée. Le niveau de protection se dit au moment de l'étude, pas dans une phrase générale sur la ville." },
      { question: "Travaillez-vous avec des projets institutionnels ou de bureaux ?", answer: "Oui lorsque l'ombrage ou le store fait partie du dossier. Le contact se fait via la page professionnels, avec le stade du projet." },
    ],
    sections: [
      {
        id: "usage-long",
        heading: "Une terrasse que l'on peut tenir longtemps",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le climat océanique rend l'extérieur pertinent une grande partie de l'année, à condition de gérer le soleil d'été et les averses. La pergola bioclimatique trouve ici un usage régulier, pas seulement une saison. Le store banne reste le geste plus léger lorsque la terrasse est peu profonde."],
              ["Les villas des quartiers résidentiels ont souvent une façade déjà composée. L'ouvrage d'ombrage doit s'y aligner — hauteurs de linteau, teintes de menuiseries — plutôt que s'ajouter comme un objet rapporté."],
            ],
          },
        ],
      },
    ],
  }),
  city({
    slug: "tanger",
    area: "Tanger",
    title: "Terrasses et villas à Tanger | Terrastore",
    description:
      "Terrastore intervient à Tanger pour terrasses, villas et lieux exposés au vent du détroit. Parasols, stores et pergolas étudiés selon le site.",
    h1: "Terrasses exposées à Tanger",
    eyebrow: "Détroit",
    lede: "Terrastore intervient à Tanger pour les terrasses de villas et les lieux d'hospitalité. Le vent du détroit est le sujet que l'on traite avant le dessin : il décide souvent entre un parasol, un store et une structure.",
    primaryQuery: "store Tanger",
    imageId: "city-tanger",
    related: [
      { href: "/store-zip", label: "Store ZIP", text: "Tenir une toile guidée sur un côté exposé." },
      { href: "/pergola-bioclimatique", label: "Pergola", text: "Structurer une terrasse plutôt que multiplier les toiles libres." },
      { href: "/parasols", label: "Parasols", text: "Seulement si l'ancrage et la consigne de fermeture sont clairs." },
    ],
    faqs: [
      { question: "Un grand parasol est-il une bonne idée face au vent ?", answer: "Pas par défaut. Sur un site ouvert, un parasol se justifie s'il est ancré et s'il sera fermé quand le vent monte. Sinon une pergola ou un store guidé est plus cohérent. Chaque parcelle du détroit n'a pas la même exposition : une cour protégée n'est pas un belvédère." },
      { question: "Couvrez-vous seulement Tanger ville ?", answer: "La page parle du contexte tangérois. L'intervention suit le projet, y compris aux alentours, sans créer une liste de localités." },
    ],
    sections: [
      {
        id: "vent",
        heading: "Commencer par l'exposition",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Tanger reçoit un vent qui peut rester établi plusieurs jours. Une toile libre, mal lestée, devient un problème d'exploitation. On demande donc où est la terrasse : cour, toit, façade ouest, crête. La réponse change le système."],
              ["Les villas récentes ont de grandes baies. Le store vertical limite le soleil rasant sans obliger à vivre derrière un rideau intérieur épais. Il se combine, si besoin, à un store de pièce pour la nuit."],
            ],
          },
        ],
      },
    ],
  }),
  city({
    slug: "essaouira",
    area: "Essaouira",
    title: "Ombrage de terrasse à Essaouira | Terrastore",
    description:
      "Terrastore intervient à Essaouira en tenant compte des alizés. Terrasses de médina, villas et cafés : le vent décide avant le choix du parasol.",
    h1: "Ombrage à Essaouira, sous les alizés",
    eyebrow: "Côte atlantique",
    lede: "Terrastore intervient à Essaouira pour des terrasses, des villas et des cafés. Les alizés ne sont pas un détail climatique : ils écartent souvent le grand parasol laissé ouvert et rapprochent les solutions guidées ou structurées.",
    primaryQuery: "store Essaouira",
    imageId: "city-essaouira",
    related: [
      { href: "/store-banne", label: "Store banne", text: "À replier, avec une façade qui peut le porter." },
      { href: "/store-zip", label: "Store ZIP", text: "Toile guidée sur un côté de terrasse." },
      { href: "/pergola-bioclimatique", label: "Pergola", text: "Un volume tenu, plutôt qu'une toile libre." },
      { href: "/voile-ombrage", label: "Voile d'ombrage", text: "Possible seulement si les ancrages et le vent le permettent vraiment." },
    ],
    faqs: [
      { question: "Pourquoi déconseiller parfois le parasol ?", answer: "Parce qu'un parasol de grande toile, sur un toit de médina ou une terrasse ouverte aux alizés, passe sa vie fermé ou devient dangereux s'il reste ouvert. S'il est retenu, c'est avec un ancrage sérieux et une règle de fermeture. Ce n'est pas un interdit général." },
      { question: "La médina et les villas hors murs se traitent-elles pareil ?", answer: "Non. Dans la médina, les accès, les toits et les vis-à-vis commandent. Hors les murs, la parcelle est plus libre mais souvent plus exposée. On ne copie pas une solution de l'une à l'autre." },
    ],
    sections: [
      {
        id: "alizes",
        heading: "Le vent comme critère de choix",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Essaouira est connue pour un vent régulier. Un store banne doit pouvoir se replier vite. Un ZIP se discute parce que le guidage tient la toile mieux qu'une chute libre, dans la limite du système et du site. Une pergola fixe un cadre que le vent ne replie pas, ce qui rassure une exploitation quotidienne — café, riad, maison occupée à l'année."],
              ["L'air marin s'ajoute au vent. Les finitions et les toiles se choisissent en conséquence, sans publier ici une garantie de corrosion qui n'aurait pas été établie pour le système posé."],
            ],
          },
        ],
      },
      {
        id: "medina",
        heading: "Toits, cafés, villas",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Un café en terrasse haute n'a pas la place d'un socle de parasol dans le passage. Le store depuis le mur, ou une structure déjà prévue dans le gros œuvre, est souvent plus juste. Une villa en retrait de la côte peut, elle, accueillir un carport pour la voiture laissée au soleil et au sel."],
            ],
          },
        ],
      },
    ],
  }),
];
