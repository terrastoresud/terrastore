import type { PageDoc } from "@/content/types";

const solutions = { name: "Solutions", href: "/solutions" };

export const shadePages: PageDoc[] = [
  {
    slug: "carport-aluminium",
    kind: "product",
    title: "Carport aluminium sur mesure au Maroc | Terrastore",
    description:
      "Carport et abri voiture aluminium au Maroc : simple ou double, adossé ou autoportant. Terrastore étudie l'implantation, les poteaux, l'allée et la pose.",
    h1: "Carport aluminium sur mesure au Maroc",
    eyebrow: "Abri voiture",
    lede: "Un carport protège les véhicules du soleil et des intempéries sans fermer un garage. En aluminium, il reste lisible devant une villa. La bonne configuration se décide sur le terrain : nombre de places, sens de circulation, portail, façade et évacuation de l'eau.",
    primaryQuery: "carport aluminium Maroc",
    imageId: "carport-hero",
    serviceType: "Carport aluminium",
    ctaTitle: "Étudier l'implantation du carport",
    ctaText: "Envoyez la ville, le nombre de véhicules, une dimension approximative et une photo de l'entrée ou du stationnement.",
    breadcrumbs: [solutions, { name: "Carport aluminium", href: "/carport-aluminium" }],
    related: [
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
              ["Le carport, ou abri voiture, couvre le stationnement sans le murer. On garde la ventilation, la vue sur le jardin ou la rue, et un accès direct à l'entrée. Devant une villa contemporaine, la structure aluminium se lit comme un plan horizontal : toiture, rive, poteaux."],
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
];
