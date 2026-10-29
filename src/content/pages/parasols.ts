import type { PageDoc } from "@/content/types";

const solutions = { name: "Solutions", href: "/solutions" };
const parasols = { name: "Parasols", href: "/parasols" };

export const parasolPages: PageDoc[] = [
  {
    slug: "parasols",
    kind: "product",
    title: "Parasols modernes et professionnels au Maroc | Terrastore",
    description:
      "Parasols de terrasse au Maroc : mât central, déporté, grand format. Terrastore choisit le système selon la zone à ombrer, le soleil et l'ancrage.",
    h1: "Parasols modernes et professionnels au Maroc",
    eyebrow: "Ombrage mobile",
    lede: "Un parasol de terrasse n'est pas un accessoire de jardin posé au hasard. C'est un plan d'ombre mobile : on le choisit selon la surface à couvrir, la course du soleil, la place des meubles et la manière dont le mât, le lest ou l'ancrage tiennent le site.",
    primaryQuery: "parasol Maroc",
    imageId: "parasol-hero",
    serviceType: "Parasol",
    ctaTitle: "Décrire la terrasse à ombrer",
    ctaText: "Une photo de la table ou du salon, la ville et l'usage — maison, café ou hôtel — permettent de distinguer mât central et mât déporté.",
    breadcrumbs: [solutions, parasols],
    related: [
      { href: "/parasol-deporte", label: "Parasol déporté", text: "Le mât quitte le centre de la table et libère le plateau." },
      { href: "/parasol-professionnel", label: "Parasol professionnel", text: "Terrasses de cafés, restaurants, hôtels et riads." },
      { href: "/conseils/parasol-deporte-ou-mat-central", label: "Déporté ou central", text: "Comment trancher selon le mobilier et le soleil." },
      { href: "/marrakech", label: "Terrasses à Marrakech", text: "Grand soleil, villas, riads et hôtels." },
    ],
    faqs: [
      { question: "Parasol déporté ou à mât central ?", answer: "Le mât central traverse la zone d'ombre. Il convient quand la table est prévue pour lui, ou quand on ombre un salon sans chercher à dégager tout le plateau. Le déporté reporte le mât sur le côté : la table, les chaises et le passage restent libres. Le choix dépend aussi du lest et du vent." },
      { question: "Quelle taille pour un restaurant ?", answer: "On part du nombre de tables à couvrir en service, de la circulation du personnel et de la possibilité d'ancrer ou de lester chaque mât. Un grand format mal placé gêne plus qu'il n'ombre. Le format se retient après lecture de la terrasse, pas d'après une dimension catalogue." },
      { question: "Comment traiter le vent ?", answer: "L'exposition du site, la fréquence d'ouverture et le mode de fixation priment. Un parasol se ferme quand le vent monte. L'ancrage fixe et le lest mobile ne se valent pas. Aucune classe de vent n'est affichée ici : elle dépend du système retenu et du lieu." },
      { question: "Socle ou fixation au sol ?", answer: "Un socle ou un lest permet de déplacer le parasol, au prix d'un poids à maîtriser sur la dalle ou le platelage. Une fixation au sol libère le passage et tient mieux un usage quotidien, si la structure de la terrasse l'autorise. Les deux s'étudient selon le système." },
    ],
    sections: [
      {
        id: "choix",
        heading: "Choisir d'après la terrasse, pas d'après une photo",
        blocks: [
          {
            type: "points",
            items: [
              { title: "Zone à ombrer", text: "Table, transats, comptoir ou îlot de salon : on dessine l'ombre utile, pas le diamètre commercial." },
              { title: "Course du soleil", text: "Une terrasse ouest reçoit le soleil bas en fin de journée. L'ombre doit pouvoir se déplacer, selon le système retenu." },
              { title: "Mobilier", text: "Le mât ne doit pas couper la table ni le passage du service." },
              { title: "Vent", text: "Un toit-terrasse et une cour fermée ne demandent pas le même ancrage." },
              { title: "Usage", text: "Une villa ouvre le parasol le week-end. Un restaurant l'ouvre et le ferme chaque service." },
              { title: "Entretien", text: "Housse, lavage de toile et hivernage se prévoient si la terrasse est exposée." },
            ],
          },
        ],
      },
      {
        id: "familles",
        heading: "Trois familles, des usages distincts",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le parasol à mât central pose l'appui au milieu de l'ombre. Il est lisible, souvent plus simple à lester, et convient à une table percée ou à un salon où le mât ne gêne pas."],
              ["Le parasol déporté place le mât en périphérie. Le plateau reste entier. C'est le geste utile au bord d'une piscine, devant un salon bas, ou sur une table de restaurant que l'on ne veut pas trouer. La page ", { href: "/parasol-deporte", label: "parasol déporté" }, " entre dans ce choix."],
              ["Le grand format professionnel couvre plusieurs tables ou un linéaire de terrasse. Il se juge à l'exploitation : ouverture quotidienne, circulation, remplacement de toile, ancrage répété. Voir ", { href: "/parasol-professionnel", label: "parasol professionnel" }, "."],
            ],
          },
          {
            type: "note",
            title: "Rotation, inclinaison, systèmes télescopiques",
            text: "Ces mouvements existent sur certains systèmes du marché. Terrastore ne les annonce que s'ils font partie du système retenu pour le projet. Ils ne sont pas une option universelle.",
          },
        ],
      },
      {
        id: "ancrage",
        heading: "Ancrage, lest et dalle",
        imageId: "parasol-detail",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Un parasol tient par son mât. Le mât tient par un fourreau scellé, une platine, ou un lest. Sur une dalle de villa, on vérifie l'épaisseur et les réseaux. Sur une terrasse d'hôtel déjà carrelée, on préfère parfois un lest pour ne pas reprendre l'étanchéité — à condition que le poids reste compatible avec le plancher."],
              ["Au bord d'une piscine, le pied ne doit pas devenir un obstacle pour les pieds nus, ni un point qui concentre l'eau. On le décale du cheminement."],
            ],
          },
        ],
      },
      {
        id: "maroc",
        heading: "Maisons, cafés et soleil marocain",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["À Marrakech, l'ombre de milieu de journée est courte et dure : la toile travaille longtemps. Sur la côte, le vent décide souvent avant le dessin. Dans une cour de riad, le parasol complète un patio déjà cadré par les murs ; le mât déporté évite de poser un pied au centre d'un sol que l'on veut garder libre."],
              ["Quand l'ombre doit rester en place toute la saison, une ", { href: "/pergola-bioclimatique", label: "pergola" }, " ou un ", { href: "/store-banne", label: "store banne" }, " est parfois plus juste. Le parasol reste l'ombrage que l'on peut replier et, selon le système, déplacer."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "parasol-deporte",
    kind: "product",
    title: "Parasol déporté au Maroc | Terrastore",
    description:
      "Parasol déporté au Maroc pour terrasse, piscine et restaurant. Le mât latéral libère la table. Terrastore étudie l'orientation, le lest et l'exposition.",
    h1: "Parasol déporté au Maroc",
    eyebrow: "Mât latéral",
    lede: "Le parasol déporté décale le mât hors de la zone d'ombre. La table, les fauteuils ou les transats restent sous la toile sans pied au milieu. C'est un choix d'usage avant d'être un choix de forme.",
    primaryQuery: "parasol déporté Maroc",
    imageId: "parasol-offset",
    serviceType: "Parasol déporté",
    ctaTitle: "Voir si le déporté convient",
    ctaText: "Photo de la terrasse, position de la table et ville : nous disons si le mât latéral a une place, et comment le tenir.",
    breadcrumbs: [solutions, parasols, { name: "Parasol déporté", href: "/parasol-deporte" }],
    related: [
      { href: "/conseils/parasol-deporte-ou-mat-central", label: "Déporté ou mât central", text: "Le critère du mobilier et du passage." },
      { href: "/parasol-professionnel", label: "Usage professionnel", text: "Quand la terrasse sert tous les jours." },
      { href: "/voile-ombrage", label: "Voile d'ombrage", text: "Une autre façon de libérer le sol, sans mât central." },
    ],
    faqs: [
      { question: "Pourquoi sortir le mât de la table ?", answer: "Un mât au centre coupe le plateau, gêne les plats et oblige parfois à percer la table. Sur le côté, le mât laisse le repas, le salon ou les transats continus. Il faut en échange une place pour le pied, hors du passage." },
      { question: "Peut-on suivre le soleil ?", answer: "Certains systèmes permettent une rotation ou une inclinaison. Ce n'est pas systématique. On le confirme selon le modèle retenu, après avoir vu d'où vient le soleil en fin de journée." },
      { question: "Base mobile ou ancrage fixe ?", answer: "La base mobile sert si l'on déplace vraiment le parasol. Sur une terrasse de restaurant ou au bord d'une piscine très passante, un ancrage fixe libère le sol et limite le risque de pied qui bouge. Le poids d'un lest se vérifie avec la dalle." },
      { question: "Maison ou café : le même parasol ?", answer: "Non. La maison ouvre moins souvent et peut accepter un format plus léger. Le café demande une manœuvre quotidienne, un passage de service et un ancrage pensé pour être sollicité. Le principe du mât déporté reste le même ; la structure, non." },
    ],
    sections: [
      {
        id: "espace",
        heading: "Le mât libère le plateau",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Sous un parasol central, le meilleur de l'ombre est aussi l'endroit du pied. On compose avec. Le déporté inverse la logique : l'ombre est un rectangle ou un carré libre, et l'effort mécanique passe par un bras."],
              ["Cela sert une table à manger, un salon bas que l'on ne veut pas fragmenter, et une rangée de transats le long d'un bassin. Le bras doit toutefois avoir de la place : un mur trop proche, une jardinière ou une marche peuvent empêcher le mât de se poser là où le dessin le voudrait."],
            ],
          },
        ],
      },
      {
        id: "soleil",
        heading: "Ombre, heure et orientation",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le soleil ne reste pas au zénith. En fin de journée, il rase la terrasse et passe sous une toile trop haute ou trop reculée. On regarde l'heure à laquelle la terrasse est vraiment utilisée. Une villa occupée après 16 h n'a pas le même besoin qu'un déjeuner de restaurant."],
              ["Si le système retenu permet de tourner ou d'incliner la toile, ce mouvement sert à suivre ce décalage. S'il ne le permet pas, on place le mât du bon côté dès le départ — en général du côté où le bras peut encore couvrir la table quand le soleil descend."],
            ],
          },
        ],
      },
      {
        id: "tenir",
        heading: "Tenir le mât : lest, plot, dalle",
        imageId: "parasol-detail",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le bras crée un porte-à-faux. Le pied travaille davantage qu'un mât central de même toile. D'où l'importance du lest ou de l'ancrage, et du refus de poser un grand déporté sur un socle sous-dimensionné « en attendant »."],
              ["Sur une terrasse exposée — toit, front de mer, colline — on prévoit la fermeture par vent établi. Le parasol n'est pas une pergola. Il se replie. Cette limite fait partie du conseil, pas d'une réserve cachée."],
            ],
          },
        ],
      },
      {
        id: "usages",
        heading: "Piscine, salon, table de restaurant",
        blocks: [
          {
            type: "points",
            items: [
              { title: "Piscine", text: "Le mât sort du bord du bassin. On évite un socle sur le chemin mouillé." },
              { title: "Salon de jardin", text: "L'ombre couvre le canapé sans pied entre les fauteuils." },
              { title: "Table", text: "Le plateau reste libre pour le service et les plats." },
              { title: "Plusieurs modules", text: "Deux déportés peuvent se répondre si les mâts ne se gênent pas et si les toiles ne se battent pas au vent." },
            ],
          },
          {
            type: "paragraphs",
            items: [
              ["Pour une terrasse exploitée chaque jour, poursuivre sur ", { href: "/parasol-professionnel", label: "le parasol professionnel" }, ". Pour comparer avec le mât central, le ", { href: "/conseils/parasol-deporte-ou-mat-central", label: "guide de choix" }, " reprend les cas limites."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "parasol-professionnel",
    kind: "product",
    title: "Parasol professionnel au Maroc | Terrastore",
    description:
      "Parasols professionnels pour cafés, restaurants, hôtels et riads au Maroc. Terrastore étudie la circulation, l'ancrage et l'usage quotidien.",
    h1: "Parasol professionnel pour terrasses au Maroc",
    eyebrow: "Hospitalité",
    lede: "Sur une terrasse qui sert tous les jours, le parasol est un outil de salle autant qu'un ombrage. Il doit couvrir les tables, laisser passer le service, s'ouvrir et se fermer sans théâtre, et tenir un ancrage sollicité.",
    primaryQuery: "parasol professionnel Maroc",
    imageId: "parasol-pro",
    serviceType: "Parasol professionnel",
    ctaTitle: "Parler d'une terrasse professionnelle",
    ctaText: "Nombre de tables, photo de la terrasse et ville. Nous regardons la circulation avant le diamètre de la toile.",
    breadcrumbs: [solutions, parasols, { name: "Parasol professionnel", href: "/parasol-professionnel" }],
    related: [
      { href: "/conseils/parasol-professionnel-hotel-restaurant", label: "Choisir pour un hôtel ou un restaurant", text: "Les critères d'exploitation, pas de décoration." },
      { href: "/professionnels", label: "Projets professionnels", text: "Coordination quand l'ombrage s'inscrit dans un chantier." },
      { href: "/store-banne", label: "Store banne", text: "Quand l'ombre doit venir de la façade plutôt que d'un mât." },
      { href: "/marrakech", label: "Marrakech", text: "Riads, hôtels et grandes terrasses ensoleillées." },
    ],
    faqs: [
      { question: "Quel format pour une terrasse de restaurant ?", answer: "On couvre les tables réellement dressées, en laissant un passage pour le service entre les mâts. Un seul très grand parasol n'est pas toujours mieux que deux modules : l'un peut se fermer si le vent monte sur un côté, l'autre rester ouvert." },
      { question: "Comment gérer l'ouverture quotidienne ?", answer: "Le geste doit être simple pour l'équipe en salle, pas seulement pour l'installateur le jour de la pose. On vérifie la hauteur des bras, le rangement de la toile fermée et l'endroit où l'on circule quand tout est replié." },
      { question: "Et le vent sur une terrasse ouverte ?", answer: "On identifie le côté exposé, on décide ce qui est ancré et ce qui doit être fermé, et on ne laisse pas une toile grande ouverte « parce que le service a commencé ». Le niveau de tenue dépend du système retenu et du site." },
      { question: "Peut-on personnaliser aux couleurs de l'établissement ?", answer: "Seulement si le système de toile retenu le permet. Terrastore ne promet pas une teinte ou un marquage qui n'aurait pas été confirmé avec le fournisseur du système." },
    ],
    sections: [
      {
        id: "exploitation",
        heading: "Ce qui change quand la terrasse travaille",
        blocks: [
          {
            type: "points",
            items: [
              { title: "Service", text: "Les mâts et les socles ne coupent pas le chemin plateau-cuisine-table." },
              { title: "Tables", text: "L'ombre tombe sur les places assises, pas à côté, à l'heure du service principal." },
              { title: "Ouverture", text: "Le personnel répète le geste chaque jour. Il doit rester évident." },
              { title: "Fermeture", text: "Le soir, la toile repliée ne barre pas une issue ni une vitrine." },
              { title: "Remplacement", text: "Une toile de terrasse s'use. On prévoit comment la changer sans arrêter la salle une semaine." },
              { title: "Ancrage", text: "Un lest que l'on déplace sans cesse finit par blesser le carrelage et fatiguer l'équipe." },
            ],
          },
        ],
      },
      {
        id: "lieux",
        heading: "Cafés, restaurants, hôtels, riads",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Un café de rue ombre un linéaire étroit : le déporté ou un store banne en façade se comparent vite, parce que le trottoir ne pardonne pas un socle mal placé."],
              ["Un restaurant de villa ou d'hôtel a souvent plus de profondeur. Plusieurs parasols peuvent composer une salle extérieure, à condition que les toiles ne se chevauchent pas au point de faire des poches d'eau ou de battre l'une contre l'autre."],
              ["Dans un riad, la cour est déjà un volume. Le parasol y est ponctuel : il ombre une table sans prétendre couvrir tout le patio. Une voile ou une pergola prend le relais si l'ombre doit devenir permanente."],
              ["Terrastore ne publie pas de liste de clients. Un établissement se cite lorsqu'il a autorisé la référence, pas avant."],
            ],
          },
        ],
      },
      {
        id: "comparer",
        heading: "Parasol, store ou pergola",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le parasol se replie et se remplace relativement vite. Il laisse le ciel ouvert le soir. Il demande de la discipline par vent."],
              ["Le ", { href: "/store-banne", label: "store banne" }, " part de la façade et dégage le sol. Il est souvent plus juste sur un linéaire collé au bâtiment."],
              ["La ", { href: "/pergola-bioclimatique", label: "pergola" }, " structure la terrasse pour la saison entière. Elle se justifie quand l'ombre, et parfois la pluie, doivent être là sans manœuvre quotidienne de toiles indépendantes."],
            ],
          },
          {
            type: "paragraphs",
            items: [
              ["Le guide ", { href: "/conseils/parasol-professionnel-hotel-restaurant", label: "parasol pour hôtel ou restaurant" }, " reprend ces arbitrages du point de vue de l'exploitant."],
            ],
          },
        ],
      },
    ],
  },
];
