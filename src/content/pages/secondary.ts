import type { PageDoc } from "@/content/types";

const solutions = { name: "Solutions", href: "/solutions" };

export const secondaryPages: PageDoc[] = [
  {
    slug: "solutions",
    kind: "hub",
    title: "Solutions d'ombrage sur mesure au Maroc | Terrastore",
    description:
      "Carports, parasols, stores et pergolas au Maroc. Terrastore oriente chaque projet selon l'exposition, l'usage et l'architecture existante.",
    h1: "Solutions d'ombrage et d'aménagement extérieur",
    eyebrow: "Terrastore",
    lede: "Carport, parasol, store ou pergola : le bon ouvrage est celui qui répond au soleil, au vent et à l'usage du lieu. Cette page sert à s'orienter. Le détail est sur chaque solution.",
    primaryQuery: "protection solaire Maroc",
    serviceType: "Protection solaire",
    ctaTitle: "Décrire le lieu avant le produit",
    ctaText: "Une photo et la ville permettent souvent d'écarter deux solutions sur trois.",
    breadcrumbs: [{ name: "Solutions", href: "/solutions" }],
    related: [
      { href: "/carport-aluminium", label: "Carports", text: "Stationnement ouvert, simple ou double." },
      { href: "/parasols", label: "Parasols", text: "Ombre mobile de terrasse." },
      { href: "/stores", label: "Stores", text: "Façade, vitrage et pièces." },
      { href: "/pergola-bioclimatique", label: "Pergolas", text: "Terrasse structurée pour la saison." },
      { href: "/voile-ombrage", label: "Voile d'ombrage", text: "Toile tendue pour cours, rooftops et jardins." },
    ],
    sections: [
      {
        id: "ordre",
        heading: "Par où commencer",
        blocks: [
          {
            type: "points",
            items: [
              { title: "La voiture chauffe devant la maison", text: "On regarde le carport : places, portail, poteaux." },
              { title: "La table ou le salon manque d'ombre mobile", text: "On compare parasol central et parasol déporté." },
              { title: "La terrasse est collée à la façade", text: "Le store banne part du mur et dégage le sol." },
              { title: "Le soleil rase la baie", text: "Le store ZIP descend devant le vitrage." },
              { title: "La terrasse doit rester habitable toute la saison", text: "La pergola structure l'espace ; la toile rétractable s'étudie si l'on veut pouvoir rouvrir le ciel." },
              { title: "Une cour ou un rooftop demande une ombre légère", text: "La voile d'ombrage tend une toile entre des points hauts, sans poteau au centre." },
              { title: "La pièce éblouit", text: "Le store intérieur règle la lumière déjà entrée." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "pergola-bioclimatique",
    kind: "product",
    title: "Pergola bioclimatique au Maroc | Terrastore",
    description:
      "Pergola bioclimatique au Maroc : lames orientables pour terrasses de villas et projets professionnels. Adossée ou autoportante, selon le relevé.",
    h1: "Pergola bioclimatique au Maroc",
    eyebrow: "Terrasse",
    lede: "La pergola bioclimatique couvre une terrasse avec des lames que l'on oriente. Ouvertes, elles laissent passer l'air et une part de lumière. Refermées, elles forment un toit plus continu et dirigent l'eau, selon le profil retenu. Ce n'est ni un parasol ni un carport.",
    primaryQuery: "pergola bioclimatique Maroc",
    imageId: "pergola-bio",
    serviceType: "Pergola bioclimatique",
    ctaTitle: "Étudier la terrasse",
    ctaText: "Profondeur, largeur approximative, et une photo de la façade ou du jardin.",
    breadcrumbs: [solutions, { name: "Pergola bioclimatique", href: "/pergola-bioclimatique" }],
    related: [
      { href: "/pergola-retractable", label: "Couverture rétractable", text: "Quand on veut pouvoir rouvrir entièrement le ciel." },
      { href: "/voile-ombrage", label: "Voile d'ombrage", text: "Ombre tendue plus légère, sans structure de pergola." },
      { href: "/conseils/pergola-bioclimatique-ou-retractable", label: "Bioclimatique ou rétractable", text: "Le critère d'usage, pas de mode." },
      { href: "/store-zip", label: "Stores ZIP latéraux", text: "Fermer un côté sans maçonner." },
      { href: "/carport-aluminium", label: "Carport", text: "Ne pas confondre terrasse et stationnement." },
    ],
    faqs: [
      { question: "Adossée ou autoportante ?", answer: "Adossée si la terrasse longe un mur capable de recevoir l'ouvrage. Autoportante si elle est au milieu du jardin, au bord d'une piscine éloignée de la façade, ou si le mur ne doit pas porter. Le relevé tranche." },
      { question: "La pergola est-elle étanche comme une pièce ?", answer: "Les lames fermées orientent l'eau vers les chéneaux lorsque le système est conçu pour cela. Ce n'est pas une véranda fermée. L'usage sous la pluie s'étudie avec le profil et les raccordements, sans promesse d'étanchéité absolue." },
      { question: "Peut-elle servir de carport ?", answer: "Une pergola dimensionnée pour des personnes assises n'est pas automatiquement un abri voiture. Hauteur de passage, manœuvre et chocs de portières diffèrent. Le stationnement se traite sur la page carport." },
    ],
    sections: [
      {
        id: "lames",
        heading: "Moduler, plutôt que seulement couvrir",
        imageId: "pergola-bio-lames",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Sous le soleil marocain, une toiture fixe assombrit parfois trop en hiver et pas assez aux heures où l'on voudrait encore de l'air. Les lames permettent de doser. Le degré d'ouverture, la motorisation et les options — éclairage, capteurs — existent selon le système retenu. Ils ne sont pas supposés présents sur chaque projet."],
              ["On compare avec une ", { href: "/pergola-retractable", label: "couverture textile rétractable" }, " si le souhait principal est de retrouver le ciel entier, et pas seulement une fente entre des lames."],
            ],
          },
        ],
      },
      {
        id: "lieux-pergola",
        heading: "Villa, hôtel, restaurant",
        imageId: "pergola-bio-hotel",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Autour d'une piscine ou d'une salle à manger extérieure, la pergola fixe un volume. En hospitalité, elle couvre un service sans dépendre de l'ouverture de plusieurs parasols. Les côtés peuvent recevoir un ", { href: "/store-zip", label: "store ZIP" }, " lorsque le soleil ou le vis-à-vis vient de biais."],
              ["Marrakech, Agadir ou la côte atlantique ne changent pas le principe, mais ils changent l'exposition. On le note dans les pages de territoire, sans y inventer de chantiers."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "pergola-retractable",
    kind: "product",
    title: "Pergola à couverture rétractable au Maroc | Terrastore",
    description:
      "Couverture textile rétractable au Maroc : ouvrir ou refermer le ciel d'une terrasse. Terrastore la compare à la pergola à lames, sans fiche technique inventée.",
    h1: "Couverture rétractable pour terrasse",
    eyebrow: "Toile",
    lede: "Une pergola à toile rétractable couvre la terrasse quand on la déploie et rend le ciel quand on la replie. Elle sert les lieux où l'on veut les deux, selon l'heure et la saison. Le système exact — toile, guidage, motorisation — se confirme au moment de l'étude.",
    primaryQuery: "pergola rétractable Maroc",
    imageId: "pergola-retractable",
    serviceType: "Pergola rétractable",
    ctaTitle: "Dire si le ciel doit se rouvrir",
    ctaText: "Si la terrasse doit tantôt être couverte, tantôt entièrement ouverte, décrivez cet usage.",
    breadcrumbs: [solutions, { name: "Couverture rétractable", href: "/pergola-retractable" }],
    related: [
      { href: "/pergola-bioclimatique", label: "Pergola bioclimatique", text: "Lames plutôt que toile." },
      { href: "/voile-ombrage", label: "Voile d'ombrage", text: "Toile tendue sans structure complète de pergola." },
      { href: "/conseils/pergola-bioclimatique-ou-retractable", label: "Comment choisir", text: "Air et pluie d'un côté, ciel ouvert de l'autre." },
      { href: "/store-banne", label: "Store banne", text: "Une projection plus légère, sans structure complète." },
    ],
    faqs: [
      { question: "Rétractable ou bioclimatique ?", answer: "La toile rétractable disparaît en grande partie une fois repliée. Les lames restent et s'orientent. On choisit la toile si l'ouverture du ciel est le critère principal, les lames si l'on veut doser lumière et pluie sans renoncer à la structure." },
      { question: "Est-ce un store banne ?", answer: "Non. Le store banne est porté par la façade et ses bras. La couverture rétractable s'inscrit dans une structure de pergola, avec des guides. Le vent et l'eau ne se gèrent pas de la même façon." },
    ],
    sections: [
      {
        id: "quand",
        heading: "Quand la toile a un sens",
        imageId: "pergola-retractable-cafe",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Une terrasse de soirée, un toit que l'on veut libre en hiver, un restaurant qui ouvre le ciel dès que la chaleur tombe : la rétractation sert ces usages. Elle demande une structure — poteaux, poutres, guides — et une toilette de la toile : tension, évacuation, repli par vent."],
              ["Terrastore n'affiche pas de portée maximale ni de classement de vent. Ces données suivent le système retenu après relevé. Le guide ", { href: "/conseils/pergola-bioclimatique-ou-retractable", label: "bioclimatique ou rétractable" }, " aide à formuler le besoin avant cette étape."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "voile-ombrage",
    kind: "product",
    title: "Voile d'ombrage sur mesure au Maroc | Terrastore",
    description:
      "Voile d'ombrage sur mesure au Maroc : toile tendue pour terrasses, riads, rooftops et piscines. Étude, fixations inox, pose professionnelle.",
    h1: "Voile d'ombrage sur mesure au Maroc",
    eyebrow: "Toile tendue",
    lede: "La voile d'ombrage tend une toile haute résistance entre des points choisis — façade, poteaux acier, structure existante. Elle ombre une terrasse, un patio ou un rooftop sans poteau au centre, à condition que la tension, la pente et le vent aient été étudiés sur place.",
    primaryQuery: "voile d'ombrage Maroc",
    imageId: "voile",
    serviceType: "Voile d'ombrage",
    ctaLabel: "Demander un devis",
    ctaHref: "/contact?projectType=Voile%20d%27ombrage",
    heroContactLinks: true,
    ctaTitle: "Étudier une toile tendue sur votre lieu",
    ctaText: "Envoyez la ville, une photo du volume à couvrir et les points d'accroche possibles. Nous revenons avec une lecture claire avant toute fabrication.",
    breadcrumbs: [solutions, { name: "Voile d'ombrage", href: "/voile-ombrage" }],
    benefitsTitle: "Ce que la toile tendue apporte",
    benefits: [
      {
        icon: "sun",
        title: "Protection UV",
        text: "Une toile bien tendue coupe le rayonnement direct sur la table, le salon ou le bord de piscine, sans fermer le volume comme un toit opaque.",
      },
      {
        icon: "architecture",
        title: "Design architectural",
        text: "Triangles, rectangles ou superposition : la géométrie suit le lieu. L'ombre devient une ligne lisible depuis la cour ou la rue.",
      },
      {
        icon: "fabric",
        title: "Toile haute résistance",
        text: "Toiles PEHD ou PVC selon l'usage, coupées sur mesure. La tension évite le flottement et les poches d'eau.",
      },
      {
        icon: "fixing",
        title: "Fixations inox",
        text: "Câbles, tendeurs, manilles et platines en inox pour tenir la charge et le climat, y compris près du littoral.",
      },
      {
        icon: "measure",
        title: "Sur mesure",
        text: "Chaque voile part du métrage réel : hauteurs d'ancrage, portées, obstacles et circulation sous l'ouvrage.",
      },
      {
        icon: "tools",
        title: "Installation professionnelle",
        text: "Pose, réglage de tension et contrôle des ancrages. Une voile mal tendue n'est ni stable ni durable.",
      },
    ],
    galleryTitle: "Restaurants, rooftops, villas et riads",
    gallery: [
      { imageId: "voile-restaurant", category: "Restaurants & cafés" },
      { imageId: "voile-lanternes", category: "Restaurants & cafés" },
      { imageId: "voile-rooftop-hotel", category: "Hôtels & rooftops" },
      { imageId: "voile-rooftop-riad", category: "Hôtels & rooftops" },
      { imageId: "voile-piscine", category: "Villas & piscines" },
      { imageId: "voile-villa", category: "Villas & piscines" },
      { imageId: "voile-patio", category: "Riads & patios" },
      { imageId: "voile-terrasse-riad", category: "Riads & patios" },
      { imageId: "voile-jardin", category: "Jardins & terrasses" },
      { imageId: "voile-mats", category: "Jardins & terrasses" },
    ],
    related: [
      { href: "/pergola-bioclimatique", label: "Pergola bioclimatique", text: "Quand il faut aussi gérer la pluie et doser la lumière avec des lames." },
      { href: "/pergola-retractable", label: "Couverture rétractable", text: "Rouvrir entièrement le ciel une fois la toile repliée." },
      { href: "/store-banne", label: "Store banne", text: "Projection depuis la façade, sans points d'ancrage multiples." },
      { href: "/parasols", label: "Parasols", text: "Ombre mobile, utile quand on veut pouvoir fermer par grand vent." },
      { href: "/parasol-deporte", label: "Parasol déporté", text: "Libérer le sol au centre sans tendre une toile périphérique." },
    ],
    faqs: [
      {
        question: "Quel est le prix d'une voile d'ombrage au Maroc ?",
        answer:
          "Le prix suit la surface, la forme, le nombre de points d'ancrage, la nécessité de poteaux et la difficulté d'accès. Sans relevé, une grille tarifaire inventée n'a pas de sens. Une photo et des cotes approximatives permettent une première estimation ; le devis suit l'étude.",
      },
      {
        question: "Une voile résiste-t-elle au vent ?",
        answer:
          "Une toile tendue prend beaucoup de surface. Sur un site abrité — cour de riad, patio — elle tient bien si les ancrages sont justes. Sur un front de mer, une colline ou à Essaouira, une voile permanente se discute franchement : un parasol que l'on ferme, ou une pergola, peut être plus adapté. On le tranche sur place.",
      },
      {
        question: "Quelle est la durée de vie d'une toile tendue ?",
        answer:
          "Elle dépend de l'exposition UV, du vent, de l'entretien et de la qualité de la tension. Une toile bien posée et nettoyée tient plusieurs saisons. On ne publie pas de garantie générique hors du système retenu pour le projet.",
      },
      {
        question: "Comment entretenir une voile d'ombrage ?",
        answer:
          "Un rinçage à l'eau claire, un balayage doux des poussières et le contrôle périodique des tendeurs suffisent en général. Évitez les solvants agressifs. En cas de tempête annoncée sur un site exposé, la dépose temporaire peut être prévue dès l'étude.",
      },
      {
        question: "Quel délai entre la commande et la pose ?",
        answer:
          "Après validation du relevé et de la coupe, la fabrication puis la pose se calent selon la charge atelier et l'accès au chantier. Un délai précis figure sur le devis ; il n'est pas le même pour une cour simple et un rooftop d'hôtel en activité.",
      },
      {
        question: "Fixation murale ou poteaux acier ?",
        answer:
          "Si des murs porteurs existent à la bonne hauteur, on s'y ancre. Sinon, des poteaux acier thermolaqués reprennent les angles libres, avec fondations adaptées. Mur trop mince, isolation, réseaux ou tronc d'arbre ne sont pas des ancrages par défaut : on les vérifie avant de dessiner la voile.",
      },
      {
        question: "La voile protège-t-elle de la pluie ?",
        answer:
          "Certaines toiles résistent à une averse si la forme évacue l'eau. Une voile n'est pas un toit. La poche d'eau est le risque principal : la coupe et les hauteurs d'ancrage doivent l'éviter. Pour une protection pluie plus continue, on regarde plutôt une pergola.",
      },
    ],
    sections: [
      {
        id: "technique",
        heading: "Matériaux, formes et couleurs",
        imageId: "voile-villa",
        blocks: [
          {
            type: "points",
            items: [
              {
                title: "Toiles PEHD ou PVC",
                text: "Le PEHD micro-aéré laisse passer une part d'air ; le PVC est plus fermé. Le choix suit l'usage, le climat et l'esthétique du lieu.",
              },
              {
                title: "Câbles et tendeurs inox",
                text: "La tension se règle point par point. L'inox tient mieux le sel et l'humidité qu'un acier ordinaire, surtout près de la côte.",
              },
              {
                title: "Poteaux acier thermolaqué",
                text: "Profils carrés ou rectangulaires, teinte anthracite ou assortie aux menuiseries, ancrés dans des fondations dimensionnées.",
              },
              {
                title: "Formes",
                text: "Triangle, carré, rectangle, ou superposition de plusieurs toiles à hauteurs décalées pour élargir l'ombre sans un seul grand panneau.",
              },
              {
                title: "Couleurs",
                text: "Crème, blanc, anthracite et teintes sobres qui suivent la façade. Une couleur criarde fatigue vite sous le soleil marocain.",
              },
              {
                title: "Entretien",
                text: "Nettoyage doux, contrôle des tendeurs, vigilance avant les coups de vent sur les sites ouverts.",
              },
            ],
          },
          {
            type: "note",
            title: "Sans performance inventée",
            text: "Classe de vent, facteur UV exact et durée de vie publiée hors contexte n'ont pas de place ici. Ces données suivent le système retenu après relevé.",
          },
        ],
      },
      {
        id: "ancrages",
        heading: "La forme suit les ancrages",
        imageId: "voile-rooftop-hotel",
        blocks: [
          {
            type: "paragraphs",
            items: [
              [
                "Triangle ou rectangle, la voile d'ombrage n'est belle que tendue. Les points ne sont pas à la même hauteur : la différence crée la pente qui évite la poche. Dans une cour de riad ou entre deux ailes de villa, les murs existent déjà. Dans un jardin ouvert ou sur un rooftop, il faut parfois des mâts, et donc des fondations.",
              ],
              [
                "Le vent prend une grande surface. Sur un site exposé — Essaouira, front de mer, colline — une voile permanente se discute franchement. Un ",
                { href: "/parasols", label: "parasol" },
                " que l'on ferme, ou une ",
                { href: "/pergola-bioclimatique", label: "pergola" },
                ", peut être plus sain. Le choix se fait sur place, pas sur une inspiration.",
              ],
            ],
          },
        ],
      },
      {
        id: "deroule",
        heading: "Comment le projet avance",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Contact",
                text: "Ville, photos du volume, usage (restaurant, villa, riad) et points d'accroche visibles. Le type « Voile d'ombrage » oriente déjà la lecture.",
              },
              {
                title: "Étude et métrage",
                text: "Relevé des hauteurs, portées, nature des murs ou du sol, exposition au vent. On valide la forme et le nombre de toiles.",
              },
              {
                title: "Fabrication",
                text: "Coupe sur mesure de la toile, préparation des fixations inox et, si besoin, des poteaux thermolaqués.",
              },
              {
                title: "Pose",
                text: "Ancrage, tension progressive, contrôle des pentes et de la circulation sous l'ouvrage. Ajustements finaux sur site.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "professionnels",
    kind: "b2b",
    title: "Projets professionnels d'ombrage au Maroc | Terrastore",
    description:
      "Terrastore accompagne architectes, hôtels, restaurants et entreprises sur les ouvrages d'ombrage au Maroc : étude, dimensions, finitions et pose.",
    h1: "Ouvrages d'ombrage pour projets professionnels",
    eyebrow: "Maîtrise d'œuvre et exploitants",
    lede: "Architectes, maîtres d'œuvre, promoteurs, entreprises et exploitants n'achètent pas un store : ils insèrent un ouvrage dans un chantier ou dans une terrasse qui doit rester en service. Le ton ici est celui du projet, pas celui du catalogue.",
    primaryQuery: "ombrage projet professionnel Maroc",
    imageId: "pro-project",
    serviceType: "Accompagnement de projet professionnel",
    ctaTitle: "Parler d'un projet professionnel",
    ctaText: "Plan, coupe ou simplement photos et cotes approximatives : nous disons ce qui peut s'étudier.",
    breadcrumbs: [{ name: "Professionnels", href: "/professionnels" }],
    related: [
      { href: "/carport-aluminium", label: "Carports", text: "Parkings de villa, d'hôtel ou de bureaux." },
      { href: "/parasol-professionnel", label: "Parasols professionnels", text: "Terrasses en exploitation." },
      { href: "/pergola-bioclimatique", label: "Pergolas", text: "Terrasses d'établissement." },
      { href: "/contact", label: "Contact projet", text: "Choisir « Projet professionnel » dans le formulaire." },
    ],
    faqs: [
      { question: "Fournissez-vous des plans ?", answer: "L'étude comprend les dimensions utiles au projet et la coordination de pose. Des fichiers CAO ou une note de calcul ne sont remis que s'ils sont réellement produits pour le dossier. Ils ne sont pas un livrable automatique." },
      { question: "Pouvez-vous intervenir dans un chantier en cours ?", answer: "Oui si les supports, les réservations et le planning le permettent. Mieux vaut en parler avant le carrelage définitif et les étanchéités, surtout pour les ancrages de pergola ou de carport." },
      { question: "Travaillez-vous hors des grandes villes ?", answer: "L'intervention couvre le Maroc selon le projet. Le déplacement et l'accès chantier font partie de l'étude, ils ne sont pas un détail après coup." },
    ],
    sections: [
      {
        id: "qui",
        heading: "À qui s'adresse cet accompagnement",
        blocks: [
          {
            type: "bullets",
            items: [
              "Architectes et architectes d'intérieur qui spécifient un ombrage sans le réduire à une fourniture.",
              "Maîtres d'œuvre et bureaux d'études qui coordonnent les réservations.",
              "Promoteurs et entreprises générales sur des villas ou des programmes.",
              "Hôtels, riads, restaurants, cafés et bureaux qui équipent une terrasse en service.",
            ],
          },
        ],
      },
      {
        id: "comment",
        heading: "Ce que l'on regarde ensemble",
        blocks: [
          {
            type: "points",
            items: [
              { title: "Usage", text: "Stationnement, couvert de salle, protection de baie, intimité." },
              { title: "Cotes", text: "Portées, hauteurs libres, ressauts, réseaux." },
              { title: "Supports", text: "Dalle, longrine, façade, étanchéité existante." },
              { title: "Finitions", text: "Teintes en rapport avec les menuiseries et le sol." },
              { title: "Séquence", text: "Ce qui se pose avant le second œuvre, et ce qui attend la fin de chantier." },
              { title: "Multiplication", text: "Plusieurs terrasses ou plusieurs places : répéter une décision, pas improviser à chaque niveau." },
            ],
          },
          {
            type: "paragraphs",
            items: [
              ["Le formulaire de contact comporte le type « Projet professionnel ». Joignez dans le message le stade du dossier : esquisse, appel d'offres, chantier ouvert, ou terrasse déjà exploitée."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "a-propos",
    kind: "about",
    title: "À propos de Terrastore | Protection solaire au Maroc",
    description:
      "Terrastore étudie et installe des carports, parasols, stores et pergolas sur mesure pour les projets résidentiels et professionnels au Maroc.",
    h1: "Terrastore, protection solaire au Maroc",
    eyebrow: "La maison",
    lede: "Terrastore configure et installe des solutions d'ombrage et d'aménagement extérieur pour les maisons et les projets professionnels, sur l'ensemble du Maroc. La marque visible est Terrastore. La société est une SARL à associé unique, immatriculée au registre du commerce d'Agadir sous le numéro 58317. Le siège est à Cité Lagouira.",
    primaryQuery: "Terrastore Maroc",
    serviceType: "Protection solaire",
    ctaTitle: "Parler d'un projet",
    ctaText: "Le premier échange sert à comprendre le lieu. Il ne suppose pas un dossier complet.",
    breadcrumbs: [{ name: "À propos", href: "/a-propos" }],
    related: [
      { href: "/solutions", label: "Les solutions", text: "Carports, parasols, stores, pergolas, voiles." },
      { href: "/professionnels", label: "Professionnels", text: "Architectes, chantiers, exploitants." },
      { href: "/contact", label: "Contact", text: "Décrire la ville et le besoin." },
    ],
    sections: [
      {
        id: "maniere",
        heading: "Une manière de travailler",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Comprendre le besoin", text: "Usage, ville, photos, dimensions approximatives." },
              { title: "Proposer une configuration", text: "Le système suit l'exposition et l'architecture, pas l'inverse." },
              { title: "Relever", text: "Les cotes utiles se confirment avant la commande." },
              { title: "Installer", text: "La pose tient compte de l'accès et des ouvrages déjà en place." },
            ],
          },
          {
            type: "paragraphs",
            items: [
              ["Terrastore ne publie pas de palmarès, de nombre de chantiers ni d'ancienneté commerciale tant que ces éléments ne sont pas établis pour le site. La confiance vient de la clarté du conseil et de la pose, pas d'un superlatif."],
            ],
          },
        ],
      },
      {
        id: "perimetre",
        heading: "Ce que le site couvre",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Les priorités sont le carport aluminium, les parasols contemporains et les stores, extérieurs comme intérieurs. Les pergolas et les voiles d'ombrage complètent l'offre lorsque le lieu les justifie."],
              ["L'intervention est nationale. Le siège est à Agadir, Cité Lagouira. Les pages de Marrakech, Casablanca, Rabat, Tanger et Essaouira décrivent un contexte de projet. Elles ne sont pas des adresses d'agences."],
            ],
          },
        ],
      },
    ],
  },
];
