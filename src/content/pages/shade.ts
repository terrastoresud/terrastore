import type { PageDoc } from "@/content/types";

const solutions = { name: "Solutions", href: "/solutions" };

export const shadePages: PageDoc[] = [
  {
    slug: "carport-aluminium",
    kind: "product",
    title: "Carport aluminium sur mesure au Maroc | Terrastore",
    description:
      "Carport aluminium sur mesure au Maroc : simple ou double, adossé ou autoportant. Implantation, poteaux, allée et pose étudiés avec Terrastore.",
    h1: "Carport aluminium sur mesure au Maroc",
    eyebrow: "Carport aluminium",
    lede: "Un carport aluminium protège les véhicules du soleil et des intempéries sans fermer un garage. La structure se lit comme un plan devant la villa. La bonne configuration se décide sur le terrain : nombre de places, sens de circulation, portail, façade et évacuation de l'eau.",
    primaryQuery: "carport aluminium Maroc",
    imageId: "carport-hero",
    serviceType: "Carport aluminium",
    ctaTitle: "Étudier l'implantation du carport",
    ctaText: "Envoyez la ville, le nombre de véhicules, une dimension approximative et une photo de l'entrée ou du stationnement.",
    breadcrumbs: [solutions, { name: "Carport aluminium", href: "/carport-aluminium" }],
    related: [
      { href: "/abri-voiture", label: "Abri voiture", text: "Structure en console et couverture PVC : l'autre famille de stationnement couvert." },
      { href: "/conseils/comment-choisir-un-carport-aluminium", label: "Choisir un carport", text: "Les questions à trancher avant de comparer deux propositions." },
      { href: "/conseils/carport-adosse-ou-autoportant", label: "Adossé ou autoportant", text: "Quand la façade peut porter l'ouvrage, et quand il vaut mieux s'en détacher." },
      { href: "/conseils/carport-simple-ou-double", label: "Simple ou double", text: "Prévoir les portières, le passage et l'écart entre deux voitures." },
      { href: "/agadir", label: "Carport à Agadir", text: "Stationnement de villa et exposition côtière." },
      { href: "/casablanca", label: "Carport à Casablanca", text: "Villas, résidences et accès de véhicules." },
      { href: "/conseils/prix-dun-carport-au-maroc", label: "Ce qui fait varier le prix", text: "Les postes réels, sans grille tarifaire inventée." },
    ],
    faqs: [
      { question: "Carport simple ou double ?", answer: "On part des véhicules présents en même temps, pas du nombre de voitures du foyer. Deux places côte à côte demandent aussi l'espace d'ouverture des portières et un passage à pied. Si les voitures se succèdent dans une allée étroite, l'implantation peut être en longueur plutôt qu'en largeur." },
      { question: "Carport adossé ou autoportant ?", answer: "L'adossé s'appuie sur la façade et libère souvent un côté. Il suppose un mur capable de recevoir les fixations, hors des baies, des descentes d'eau et des réseaux. L'autoportant se tient seul : il convient quand le stationnement est éloigné de la maison, près du portail, ou quand la façade ne doit pas porter l'ouvrage." },
      { question: "Quelles mesures préparer ?", answer: "Une largeur et une profondeur approximatives de la zone, la distance au portail, le sens d'arrivée des voitures et une photo suffisent pour une première lecture. Les cotes définitives se valident au relevé, y compris le débattement des portières et la pente du sol." },
      { question: "Installez-vous un carport partout au Maroc ?", answer: "Terrastore intervient pour des projets sur l'ensemble du Maroc. L'étude tient compte de la ville, de l'exposition et de l'accès au chantier. Cela ne signifie pas qu'un showroom existe dans chaque ville." },
    ],
    sections: [
      {
        id: "definition",
        heading: "Un abri ouvert, calé sur la maison",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le carport aluminium couvre le stationnement sans le murer. On garde la ventilation, la vue sur le jardin ou la rue, et un accès direct à l'entrée. Devant une villa contemporaine, la structure se lit comme un plan horizontal : toiture, rive, poteaux. Pour une ombrière en console à couverture PVC, voir l'", { href: "/abri-voiture", label: "abri voiture" }, "."],
              ["Il ne s'agit pas d'un modèle catalogue posé tel quel. La largeur utile dépend des voitures réelles, le sens de la toiture dépend de la pente du terrain et de l'endroit où l'eau peut sortir, et la position des poteaux dépend du chemin que l'on emprunte pour descendre du véhicule."],
            ],
          },
        ],
      },
      {
        id: "simple-double",
        heading: "Simple ou double : compter les places utiles",
        imageId: "carport-double",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Un carport simple couvre une place. Un double en traite deux dans le même ouvrage, côte à côte ou, si l'allée est longue et étroite, l'une derrière l'autre. Le choix ne se résume pas à « une ou deux voitures ». Il faut savoir quelles voitures restent en même temps, et si un visiteur doit encore pouvoir se garer devant."],
              [
                "Le guide ",
                { href: "/conseils/carport-simple-ou-double", label: "carport simple ou double" },
                " détaille le passage des portières et la circulation.",
              ],
            ],
          },
          {
            type: "comparison",
            caption: "Lecture rapide : une place ou deux, dans le même ouvrage.",
            columns: ["Simple", "Double"],
            rows: [
              { label: "Usage", cells: ["Un véhicule au quotidien", "Deux véhicules présents ensemble"] },
              { label: "Point sensible", cells: ["Hauteur et sens d'arrivée", "Écart entre les voitures et débattement des portes"] },
              { label: "Poteaux", cells: ["Hors de la portière côté descente", "Hors des deux descentes et du passage central"] },
              { label: "Allée", cells: ["Souvent suffisante si le portail dégage", "À vérifier : croisement, marche arrière, pente"] },
            ],
          },
        ],
      },
      {
        id: "adosse",
        heading: "Adossé ou autoportant",
        imageId: "home-hero",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Adossé, le carport prend une ligne d'appui sur la façade. Le volume reste proche de la maison et le chemin vers la porte d'entrée est court. Encore faut-il que le mur accepte les fixations : maçonnerie, isolation, linteaux, volets et descentes d'eau se regardent avant de dessiner les platines."],
              ["Autoportant, l'ouvrage se tient sur ses propres poteaux. On le place près du portail, en recul de la façade, ou sur un parking qui n'est pas collé à la construction. Il demande plus de points d'ancrage au sol, et une lecture claire depuis la rue."],
              [
                "Le détail du choix est dans ",
                { href: "/conseils/carport-adosse-ou-autoportant", label: "adossé ou autoportant" },
                ".",
              ],
            ],
          },
          {
            type: "comparison",
            caption: "Le mode d'appui change l'implantation, pas seulement le dessin.",
            columns: ["Adossé", "Autoportant"],
            rows: [
              { label: "Appui", cells: ["Façade + poteaux avant", "Poteaux seuls"] },
              { label: "Utile si", cells: ["Le stationnement longe la maison", "Le parking est libre ou éloigné du mur"] },
              { label: "À vérifier", cells: ["Mur, baies, réseaux, descente d'eau", "Fondations, pente, vis-à-vis, portail"] },
            ],
          },
        ],
      },
      {
        id: "implantation",
        heading: "Portail, allée et place des poteaux",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["On commence par le trajet de la voiture, pas par la toiture. D'où vient-elle : rue, portail battant, portail coulissant, virage serré ? Un portail qui balaie l'intérieur de la parcelle mange une bande que le carport ne peut pas occuper. Un coulissant libère souvent cette bande, à condition que le rail reste accessible."],
              ["Les poteaux se placent en dehors de l'ouverture des portières et en dehors du chemin piéton vers l'entrée. Un poteau bien centré sur le dessin peut être exactement dans la porte du conducteur. On le décale, quitte à allonger une traverse."],
              ["La hauteur libre se juge véhicule chargé, coffre ouvert, et parfois un SUV ou une voiture plus haute que celle du jour du devis. Une pente d'allée relève ou abaisse un côté : la cote se prend au point haut du véhicule, pas seulement au seuil de la maison."],
            ],
          },
          {
            type: "points",
            items: [
              { title: "Descente du conducteur", text: "Prévoir le débattement complet de la portière, pas seulement la largeur de la carrosserie." },
              { title: "Passage vers l'entrée", text: "Le chemin à pied ne doit pas zigzaguer entre un poteau et un mur." },
              { title: "Sens de sortie", text: "La marche arrière vers le portail doit rester possible une fois la toiture en place." },
              { title: "Second véhicule", text: "S'il est garé derrière, il ne doit pas bloquer le premier à chaque sortie." },
            ],
          },
        ],
      },
      {
        id: "ancrage",
        heading: "Sol, ancrage et eau de toiture",
        imageId: "carport-detail",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["L'ancrage dépend du sol réel : dalle existante, pavés, terre, ou ouvrage à créer. Une platine sur une dalle trop mince ne tient pas le poteau. On le dit avant la pose, pas après. Les réseaux enterrés — eau, électricité, arrosage — se repèrent pour ne pas percer une conduite au moment des fondations."],
              ["L'eau de pluie doit quitter la toiture à un endroit choisi. Une rive qui déverse devant la porte, sur le trottoir du voisin ou dans une cour déjà inondable, annule le confort de l'abri. La pente de couverture et le point de rejet font partie de l'étude, au même titre que la teinte de l'aluminium."],
            ],
          },
          {
            type: "note",
            title: "Sans performance inventée",
            text: "La tenue au vent, le type de couverture et les sections se définissent selon le site et le système retenu. Terrastore ne publie pas de classe de vent générique : un parking ouvert à Agadir et une cour abritée à Marrakech ne se traitent pas de la même façon.",
          },
        ],
      },
      {
        id: "finition",
        heading: "Finition et lecture avec la façade",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["La finition se choisit avec les menuiseries, le portail et, s'il y en a une, la pergola de terrasse. Un carport n'a pas à crier une autre couleur que la maison. On regarde la rive de toiture depuis la rue : c'est souvent la ligne que l'on voit en arrivant."],
              ["Les options de couverture — toile, panneaux, lames ou autre système — ne sont retenues qu'après l'usage : ombre seule, pluie, ou les deux. Ce qui n'est pas confirmé pour le projet ne doit pas être promis dans le devis. La couverture utile est celle qui évacue l'eau et laisse passer le véhicule, pas celle d'une fiche produit."],
            ],
          },
        ],
      },
      {
        id: "exposition",
        heading: "Littoral, soleil et sites ouverts",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Sur le littoral atlantique, le vent et l'air salin comptent autant que le soleil. Un carport très ouvert, bien ancré, est souvent plus cohérent qu'une toile trop légère reprise d'un jardin intérieur. À l'intérieur des terres, le soleil haut et long — typique des plaines et de Marrakech — chauffe la carrosserie dès le milieu de matinée : l'orientation de la toiture et l'heure à laquelle la voiture est là changent l'intérêt de l'abri."],
              ["Les pages ", { href: "/agadir", label: "Agadir" }, ", ", { href: "/casablanca", label: "Casablanca" }, " et ", { href: "/essaouira", label: "Essaouira" }, " précisent ces contextes, sans prétendre qu'un bureau Terrastore y est ouvert."],
            ],
          },
        ],
      },
      {
        id: "pro",
        heading: "Maison et parking professionnel",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Pour une villa, on protège une ou deux voitures et on soigne l'arrivée. Pour un petit parking d'hôtel, de riad, de showroom ou de bureaux, on ajoute la rotation des véhicules, le croisement et parfois une place visiteur. Les portées et le nombre de poteaux se calent sur ces manœuvres."],
              ["Les projets à plusieurs ouvrages — carport, store de terrasse, pergola — se coordonnent pour que les hauteurs et les teintes se répondent. Le cadre de travail avec les architectes et les entreprises est décrit sur la page ", { href: "/professionnels", label: "professionnels" }, "."],
            ],
          },
        ],
      },
      {
        id: "envoi",
        heading: "Ce qu'il est utile d'envoyer",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "La ville", text: "Elle situe l'exposition, l'accès et le déplacement de l'équipe." },
              { title: "Le nombre de véhicules", text: "Ceux qui stationnent en même temps, avec leur gabarit si l'un est nettement plus haut ou plus long." },
              { title: "Une dimension approximative", text: "Largeur et profondeur de la zone, même au pas. Le relevé viendra ensuite." },
              { title: "Une photo", text: "L'entrée, le portail et la zone de stationnement, de jour. Deux clichés valent mieux qu'un plan incomplet." },
            ],
          },
          {
            type: "paragraphs",
            items: [
              ["Inutile de remplir une liste de quinze champs. Ces quatre éléments permettent de dire si le carport est adossé ou autoportant, simple ou double, et ce qu'il faut vérifier sur place."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "abri-voiture",
    kind: "product",
    title: "Abri voiture sur mesure au Maroc | Terrastore",
    description:
      "Abri voiture sur mesure au Maroc : ombrière parking en console, PVC anti-UV. Villa, entreprise, hôtel. Devis Terrastore.",
    h1: "Abri voiture sur mesure au Maroc",
    eyebrow: "Carports",
    lede: "Un abri voiture en console protège du soleil et de la pluie sans poteau devant les portières. Structure acier thermolaquée, couverture PVC : de la place unique de villa à l'ombrière parking d'entreprise.",
    primaryQuery: "abri voiture Maroc",
    imageId: "abri-residence",
    serviceType: "Abri voiture",
    ctaLabel: "Demander un devis",
    ctaHref: "/contact?projectType=Abri%20voiture",
    heroContactLinks: true,
    ctaTitle: "Demander une étude d'abri voiture",
    ctaText: "Ville, nombre de places et une photo du stationnement suffisent pour une première lecture.",
    breadcrumbs: [
      { name: "Carports", href: "/carport-aluminium" },
      { name: "Abri voiture", href: "/abri-voiture" },
    ],
    benefitsTitle: "Pourquoi un abri voiture en console",
    benefitsLede: "Ombre, pluie, circulation libre : six points qui guident le choix avant le devis.",
    benefits: [
      {
        icon: "sun",
        title: "Protection UV et chaleur",
        text: "La toile coupe le soleil sur la carrosserie et l'habitacle, utile dès le milieu de matinée au Maroc.",
      },
      {
        icon: "rain",
        title: "Protection pluie et grêle",
        text: "PVC étanche : l'eau s'évacue, la grêle est atténuée. Ce n'est pas un garage fermé.",
      },
      {
        icon: "architecture",
        title: "Sans poteau gênant",
        text: "Poteaux en retrait ou sur un seul côté. Portières et manœuvres restent libres.",
      },
      {
        icon: "fabric",
        title: "Design moderne",
        text: "Profils cintrés, blanc ou anthracite : lisible devant une villa comme un parking d'hôtel.",
      },
      {
        icon: "measure",
        title: "Une à plusieurs places",
        text: "Simple, double ou rangée continue. Largeur et avancée suivent les véhicules réels.",
      },
      {
        icon: "tools",
        title: "Montage rapide",
        text: "Après fondations, la pose d'un module reste courte. Le délai exact figure au devis.",
      },
    ],
    galleryTitle: "Où l'abri voiture trouve sa place",
    galleryLede: "Une image par usage : villa, résidence, parking, clinique, hôtel, concession.",
    gallery: [
      { imageId: "abri-villa", category: "Villas & résidences privées" },
      { imageId: "abri-detail", category: "Résidences fermées" },
      { imageId: "abri-parking", category: "Parkings d'entreprise" },
      { imageId: "abri-clinique", category: "Cliniques & administrations" },
      { imageId: "abri-hotel", category: "Hôtels" },
      { imageId: "abri-concession", category: "Concessions & showrooms" },
    ],
    related: [
      { href: "/carport-aluminium", label: "Carport aluminium", text: "Quand l'ossature aluminium devant la villa prime." },
      { href: "/voile-ombrage", label: "Voile d'ombrage", text: "Toile de terrasse ou de cour, pas de stationnement." },
      { href: "/pergola-bioclimatique", label: "Pergola", text: "Ombre de terrasse à lames, hors parking." },
      { href: "/professionnels", label: "Professionnels", text: "Hôtels, cliniques et showrooms avec l'équipe projet." },
    ],
    faqs: [
      {
        question: "Quel est le prix d'un abri voiture par place au Maroc ?",
        answer:
          "Le prix dépend du nombre de places, de l'avancée, de la finition (blanc, anthracite ou sur demande), des fondations et de l'accès. Sans photo ni relevé, une grille inventée n'aide pas. Une estimation suit l'étude ; le devis précise le montant.",
      },
      {
        question: "L'abri voiture résiste-t-il au vent ?",
        answer:
          "Oui si sections, fondations et exposition sont calées ensemble. Un parking ouvert sur le littoral ne se traite pas comme une cour abritée. Pas de classe de vent générique ici : elle se définit après lecture du site.",
      },
      {
        question: "Quelle est la durée de vie d'un abri voiture ?",
        answer:
          "Acier thermolaqué et PVC haute résistance tiennent plusieurs années sous le soleil marocain, avec entretien simple et pose correcte. La durée exacte suit le système retenu et figure au dossier, pas dans une promesse catalogue.",
      },
      {
        question: "Faut-il une autorisation pour poser un abri voiture ?",
        answer:
          "Selon la commune, la copropriété ou le cahier des charges d'une résidence fermée, une déclaration ou un accord peut être requis. Terrastore indique ce qu'il faut vérifier ; les démarches restent au maître d'ouvrage.",
      },
      {
        question: "Quel délai entre la commande et la pose ?",
        answer:
          "Après relevé et fondations, fabrication puis pose suivent la charge atelier et l'accès. Une villa et une rangée d'entreprise n'ont pas le même planning. Le délai contractuel est écrit sur le devis.",
      },
      {
        question: "Comment entretenir la couverture PVC ?",
        answer:
          "Rinçage à l'eau claire, contrôle des tensions et des platines. Pas de solvants agressifs. LED et récupération d'eau se vérifient comme le reste de l'ouvrage.",
      },
      {
        question: "Un seul abri peut-il couvrir plusieurs voitures ?",
        answer:
          "Oui : place simple, double face ou alignement continu. On part des véhicules présents en même temps, des portières et du sens d'arrivée.",
      },
    ],
    sections: [
      {
        id: "definition",
        heading: "Qu'est-ce qu'un abri voiture en console ?",
        imageId: "abri-hotel",
        layout: "split",
        blocks: [
          {
            type: "paragraphs",
            items: [
              [
                "L'abri voiture — parfois appelé ombrière parking — couvre une ou plusieurs places sans murer le volume. En structure console, les poteaux restent derrière ou sur un flanc : l'avant reste libre pour entrer, ouvrir les portes et descendre.",
              ],
              [
                "Au Maroc, l'enjeu n'est pas seulement l'ombre. Le soleil chauffe la carrosserie tôt ; la pluie et, parfois, la grêle sollicitent la couverture. Un PVC haute résistance anti-UV, tendu sur de l'acier galvanisé thermolaqué, répond à ces usages sans prétendre remplacer un garage fermé.",
              ],
              [
                "Le projet se cale sur le site : nombre de places, sens d'arrivée, nature du sol, teinte (blanc, anthracite ou sur demande). Terrastore étudie, fabrique et pose sur mesure, de Agadir au reste du pays.",
              ],
            ],
          },
        ],
      },
      {
        id: "technique",
        heading: "Structure, couverture et options",
        imageId: "abri-detail",
        layout: "split",
        blocks: [
          {
            type: "points",
            items: [
              {
                title: "Acier galvanisé thermolaqué",
                text: "Blanc, anthracite ou teinte sur demande. Profils cintrés en console, sans poteau devant les portières.",
              },
              {
                title: "Couverture PVC haute résistance",
                text: "Toile anti-UV, étanche, tendue. Elle ombre, limite la chaleur et évacue la pluie.",
              },
              {
                title: "Avancée jusqu'à ~5,8 m",
                text: "Selon le système. Largeur modulable : place simple, double, ou modules en ligne.",
              },
              {
                title: "Fondations béton armé",
                text: "Massifs dimensionnés pour la console. Une dalle trop mince ne tient pas l'ouvrage.",
              },
              {
                title: "Options",
                text: "Éclairage LED intégré, récupération des eaux pluviales dans les poteaux, choix de couleurs.",
              },
            ],
          },
          {
            type: "note",
            title: "Sans chiffre inventé",
            text: "Classe de vent, durée de vie hors contexte et prix au mètre linéaire générique n'ont pas de place ici. Ces données suivent le relevé.",
          },
        ],
      },
      {
        id: "comparaison",
        heading: "Abri voiture ou carport aluminium ?",
        blocks: [
          {
            type: "paragraphs",
            items: [
              [
                "Choisissez l'abri voiture quand vous voulez une ombrière parking modulaire, souvent en console, avec toile PVC. Orientez-vous vers le ",
                { href: "/carport-aluminium", label: "carport aluminium" },
                " quand la villa demande une ossature aluminium adossée ou autoportante, avec une lecture de toiture et de rive plus architecturale.",
              ],
            ],
          },
          {
            type: "comparison",
            caption: "Lecture rapide pour trancher avant l'étude.",
            columns: ["Abri voiture", "Carport aluminium"],
            rows: [
              { label: "Structure", cells: ["Acier thermolaqué, souvent en console", "Aluminium, adossé ou autoportant"] },
              { label: "Couverture", cells: ["PVC haute résistance tendu", "Selon système : panneaux, toile ou autre"] },
              { label: "Usage", cells: ["Villa, parking, hôtel, concession", "Villa et allée soignée devant façade"] },
              { label: "Point fort", cells: ["Modules, avancée, sans poteau gênant", "Dialogue menuiseries et plan de toiture"] },
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
                text: "Ville, nombre de places, photo du parking. Le type « Abri voiture » oriente la lecture.",
              },
              {
                title: "Étude du site",
                text: "Cotes, circulation, sol et réseaux. On valide avancée, largeur et fondations.",
              },
              {
                title: "Fabrication",
                text: "Ossature thermolaquée et PVC coupés pour le projet, options LED ou eau si retenues.",
              },
              {
                title: "Pose",
                text: "Ancrage béton armé, modules, tension de la toile, contrôle des hauteurs de passage.",
              },
            ],
          },
        ],
      },
    ],
  },
];
