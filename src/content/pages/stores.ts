import type { PageDoc } from "@/content/types";

const solutions = { name: "Solutions", href: "/solutions" };
const stores = { name: "Stores", href: "/stores" };

export const storePages: PageDoc[] = [
  {
    slug: "stores",
    kind: "hub",
    title: "Stores sur mesure au Maroc | Terrastore",
    description:
      "Stores extérieurs et intérieurs au Maroc : store banne, store ZIP, enrouleur, vénitien, jour et nuit. Terrastore sépare les usages avant de proposer un système.",
    h1: "Stores sur mesure au Maroc",
    eyebrow: "Extérieur et intérieur",
    lede: "Le mot store recouvre des ouvrages qui ne résolvent pas le même problème. Dehors, on coupe le soleil sur une terrasse ou devant un vitrage. Dedans, on dose la lumière, l'éblouissement et le vis-à-vis. Mélanger les deux dans un seul catalogue embrouille le choix.",
    primaryQuery: "stores Maroc",
    imageId: "store-banne",
    serviceType: "Stores",
    ctaTitle: "Dire où le soleil gêne",
    ctaText: "Façade, baie ou pièce : une photo et la ville suffisent pour orienter vers un store extérieur ou intérieur.",
    breadcrumbs: [solutions, stores],
    related: [
      { href: "/stores-exterieurs", label: "Stores extérieurs", text: "Terrasse et vitrage, avant d'entrer dans la pièce." },
      { href: "/store-banne", label: "Store banne", text: "Projection depuis la façade." },
      { href: "/store-zip", label: "Store ZIP", text: "Protection verticale guidée." },
      { href: "/stores-interieurs", label: "Stores intérieurs", text: "Lumière, éblouissement, intimité." },
      { href: "/conseils/store-banne-ou-store-zip", label: "Banne ou ZIP", text: "Le critère de l'orientation et du vent." },
    ],
    faqs: [
      { question: "Store banne ou store ZIP ?", answer: "Le banne se déploie à l'horizontale au-dessus d'une terrasse. Le ZIP descend à la verticale devant un vitrage, une pergola ou un côté exposé. L'un ombre le sol de la terrasse, l'autre coupe le soleil rasant et peut limiter le vis-à-vis." },
      { question: "Store intérieur ou extérieur ?", answer: "L'extérieur arrête le rayonnement avant la vitre : la pièce chauffe moins. L'intérieur règle la lumière une fois qu'elle est entrée, et traite l'intimité. Les deux se complètent souvent sur une grande baie." },
      { question: "Motorisation ou manœuvre manuelle ?", answer: "La motorisation se justifie sur une grande largeur, un usage fréquent, ou un store difficile d'accès. Elle n'est pas automatique sur tous les systèmes. On la retient selon le modèle et l'alimentation disponible en façade ou en tableau." },
    ],
    sections: [
      {
        id: "exterieur",
        heading: "Dehors : terrasse ou vitrage",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Les stores extérieurs se séparent en deux gestes. Le ", { href: "/store-banne", label: "store banne" }, " projette une toile depuis la façade pour couvrir une terrasse, une devanture ou un balcon profond. Le ", { href: "/store-zip", label: "store ZIP" }, " guide une toile verticalement, utile quand le soleil est bas ou quand un côté de pergola reste ouvert."],
              ["La page ", { href: "/stores-exterieurs", label: "stores extérieurs" }, " compare ces deux logiques avant le détail de chacune."],
            ],
          },
        ],
      },
      {
        id: "interieur",
        heading: "Dedans : lumière et vis-à-vis",
        imageId: "store-interior",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Les stores intérieurs — enrouleur, vénitien, jour et nuit — travaillent la pièce. Ils ne remplacent pas un store extérieur sur une baie plein sud, mais ils règlent l'éblouissement au bureau, la nuit dans une chambre, ou le regard depuis la rue."],
              ["Le détail des pièces est sur ", { href: "/stores-interieurs", label: "stores intérieurs" }, ", avec le guide ", { href: "/conseils/choisir-un-store-interieur", label: "choisir selon la pièce" }, "."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "stores-exterieurs",
    kind: "product",
    title: "Stores extérieurs au Maroc | Terrastore",
    description:
      "Store extérieur au Maroc : store banne de terrasse et store vertical ZIP. Terrastore distingue projection horizontale et protection de vitrage.",
    h1: "Stores extérieurs au Maroc",
    eyebrow: "Façade",
    lede: "Un store extérieur intercepte le soleil avant qu'il ne chauffe la baie ou la terrasse. Deux familles suffisent à décider : la projection horizontale du store banne, et la descente guidée du store vertical.",
    primaryQuery: "store extérieur Maroc",
    imageId: "store-banne",
    serviceType: "Store extérieur",
    ctaTitle: "Montrer la façade",
    ctaText: "Une photo de face et une photo de biais indiquent la largeur, les obstacles et le sens du soleil.",
    breadcrumbs: [solutions, stores, { name: "Stores extérieurs", href: "/stores-exterieurs" }],
    related: [
      { href: "/store-banne", label: "Store banne", text: "Couvrir la terrasse depuis le mur." },
      { href: "/store-zip", label: "Store ZIP", text: "Fermer un côté ou un vitrage." },
      { href: "/conseils/store-banne-ou-store-zip", label: "Comparer banne et ZIP", text: "Soleil haut, soleil bas, vent." },
    ],
    faqs: [
      { question: "Le store extérieur suffit-il sans store intérieur ?", answer: "Souvent pour la chaleur. Moins pour l'intimité nocturne ou l'éblouissement résiduel. On le dit pièce par pièce." },
      { question: "Peut-on motoriser un store extérieur ?", answer: "Selon le système retenu et l'arrivée électrique en façade. Ce n'est pas une option à ajouter en silence après la pose si le câble n'a pas été prévu." },
    ],
    sections: [
      {
        id: "deux",
        heading: "Projection ou verticale",
        blocks: [
          {
            type: "comparison",
            caption: "Deux stores extérieurs, deux problèmes.",
            columns: ["Store banne", "Store ZIP"],
            rows: [
              { label: "Mouvement", cells: ["Projection horizontale", "Descente verticale guidée"] },
              { label: "Protège", cells: ["La terrasse sous la toile", "Le vitrage ou le côté ouvert"] },
              { label: "Soleil bas", cells: ["Limité en rasant, sauf lambrequin si le système le prévoit", "Plus efficace sur la baie"] },
              { label: "Sol", cells: ["Dégagé", "Dégagé, guides en périphérie"] },
            ],
          },
          {
            type: "paragraphs",
            items: [
              ["On peut poser les deux sur la même maison : banne au-dessus de la terrasse, ZIP sur le pignon ou en fermeture de pergola. Ils ne se remplacent pas."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "store-banne",
    kind: "product",
    title: "Store banne au Maroc | Terrastore",
    description:
      "Store banne au Maroc pour terrasse de villa, café ou restaurant. Largeur, projection, coffre et motorisation s'étudient avec la façade.",
    h1: "Store banne au Maroc",
    eyebrow: "Terrasse",
    lede: "Le store banne déploie une toile au-dessus de la terrasse, depuis la façade. Il ombre sans poser de poteau au milieu du passage. La largeur, la projection et la manière dont la toile se range dépendent du mur et de l'exposition.",
    primaryQuery: "store banne Maroc",
    imageId: "store-banne",
    serviceType: "Store banne",
    ctaTitle: "Étudier le store de terrasse",
    ctaText: "Largeur approximative de la façade, profondeur de terrasse à couvrir, et une photo. Le coffre et la manœuvre viennent ensuite.",
    breadcrumbs: [solutions, stores, { name: "Store banne", href: "/store-banne" }],
    related: [
      { href: "/conseils/store-banne-ou-store-zip", label: "Banne ou ZIP", text: "Quand la projection ne suffit plus." },
      { href: "/store-zip", label: "Store ZIP", text: "Le complément vertical." },
      { href: "/parasols", label: "Parasols", text: "Si l'ombre ne peut pas partir du mur." },
    ],
    faqs: [
      { question: "Coffre, semi-coffre ou store ouvert ?", answer: "Le coffre intégral range toile et bras. Il protège mieux l'étoffe hors saison et donne une ligne plus nette en façade. Le semi-coffre protège surtout la toile. Un système plus ouvert reste plus compact. On ne retient un coffre que si le système proposé le prévoit et si le linteau a la place." },
      { question: "Manuel ou motorisé ?", answer: "La manivelle reste cohérente sur une petite largeur utilisée de temps en temps. La motorisation aide dès que la toile est large, haute, ou ouverte chaque jour. Elle suppose une alimentation. Un capteur de vent, s'il existe sur le système retenu, replie la toile quand les rafales montent." },
      { question: "Le banne coupe-t-il le soleil du soir ?", answer: "Il coupe le soleil qui tombe sur la terrasse sous sa projection. Le soleil très bas, face à la baie, passe parfois sous la toile. Un lambrequin ou un store vertical se discutent alors, seulement s'ils existent sur le système choisi." },
      { question: "Villa ou café ?", answer: "La villa cherche une ligne discrète et une manœuvre simple pour la famille. Le café cherche une largeur de service, une ouverture quotidienne et un repli rapide si le vent tourne. Le principe est le même, les sollicitations non." },
    ],
    sections: [
      {
        id: "facade",
        heading: "La façade décide avant la toile",
        imageId: "store-coffre",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le store se fixe sur un support réel : béton, maçonnerie, linteau, parfois une isolation par l'extérieur. Une belle toile sur une fixation faible ne tient pas la première saison de vent. On regarde aussi les volets, le débord de toit, les appliques et la descente d'eau : tout ce qui vole la place du coffre."],
              ["La projection — la profondeur sortie — se cale sur la terrasse utile, pas sur le maximum d'une fiche. Une toile trop profonde assombrit la pièce derrière et prend plus de vent. Une toile trop courte laisse la table au soleil à 15 h."],
            ],
          },
        ],
      },
      {
        id: "comparer",
        heading: "Store banne et store ZIP",
        blocks: [
          {
            type: "comparison",
            caption: "Même maison, deux questions différentes.",
            columns: ["Store banne", "Store ZIP"],
            rows: [
              { label: "Question", cells: ["Comment ombrer la terrasse ?", "Comment protéger la baie ou le côté ?"] },
              { label: "Fixation", cells: ["En façade, en hauteur", "En tableau ou entre montants"] },
              { label: "Vent", cells: ["La toile sortie prend le vent : elle se replie", "La toile guidée reste plus tenue, dans la limite du système"] },
              { label: "Vue", cells: ["Le ciel reste ouvert sous la rive", "Le vitrage est voilé quand le store est baissé"] },
            ],
          },
          {
            type: "paragraphs",
            items: [
              ["Le développement est dans le guide ", { href: "/conseils/store-banne-ou-store-zip", label: "store banne ou store ZIP" }, "."],
            ],
          },
        ],
      },
      {
        id: "usage",
        heading: "Maison, café, restaurant",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Devant une baie de séjour, le banne prolonge la pièce vers l'extérieur aux heures chaudes. Devant un café, il fabrique la terrasse commerciale. Dans les deux cas, la couleur de toile se choisit avec la façade : une toile très sombre absorbe, une toile très claire éblouit par réverbération. On le vérifie sur échantillon, pas sur un écran."],
              ["Aucune largeur maximale n'est affichée ici. Elle dépend du système retenu, du nombre de bras et du support."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "store-zip",
    kind: "product",
    title: "Store ZIP au Maroc | Terrastore",
    description:
      "Store ZIP et store vertical extérieur au Maroc : vitrages, pergolas et terrasses exposées au soleil rasant. Guidage latéral, sans classe de vent inventée.",
    h1: "Store ZIP au Maroc",
    eyebrow: "Protection verticale",
    lede: "Le store ZIP descend entre deux guides. La toile reste tenue sur les côtés, devant un vitrage, entre les poteaux d'une pergola ou sur un pignon exposé. Il traite le soleil bas et, selon la toile, une part du vis-à-vis.",
    primaryQuery: "store ZIP Maroc",
    imageId: "store-zip",
    serviceType: "Store ZIP",
    ctaTitle: "Décrire la baie ou le côté ouvert",
    ctaText: "Hauteur et largeur approximatives, plus une photo du vitrage ou de la pergola.",
    breadcrumbs: [solutions, stores, { name: "Store ZIP", href: "/store-zip" }],
    related: [
      { href: "/store-banne", label: "Store banne", text: "L'ombre horizontale de la terrasse." },
      { href: "/pergola-bioclimatique", label: "Pergola", text: "Les ZIP ferment souvent les côtés laissés ouverts." },
      { href: "/conseils/store-banne-ou-store-zip", label: "Banne ou ZIP", text: "Ne pas choisir l'un pour le travail de l'autre." },
    ],
    faqs: [
      { question: "En quoi le ZIP diffère-t-il d'un store banne ?", answer: "Le banne projette l'ombre au-dessus de la tête. Le ZIP couvre un plan vertical. Il n'ombre pas une table éloignée de la façade, sauf si cette table est justement derrière le vitrage qu'il protège." },
      { question: "Protège-t-il du vent ?", answer: "Le guidage latéral tient mieux la toile qu'un store simplement tombant. Cela ne constitue pas une certification de vent publiée ici. Le choix de toile et de pose se fait selon l'exposition du site et le système retenu." },
      { question: "Peut-il fermer une pergola ?", answer: "Oui lorsque les poteaux offrent un tableau propre et que le système est prévu pour cela. On vérifie la hauteur sous poutre et le passage quand le store est relevé." },
    ],
    sections: [
      {
        id: "vertical",
        heading: "Couper le soleil qui entre de côté",
        imageId: "store-zip-guide",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Le soleil de fin de journée ne tombe pas du zénith. Il entre sous un banne et derrière une pergola à lames ouvertes. Le store vertical le prend de face, sur le vitrage ou sur le côté ouvert. La pièce ou la terrasse reste utilisable sans fermer un mur."],
              ["Le guidage — le « zip » qui maintient la toile dans les coulisses — limite le battement. C'est le point qui le distingue d'un simple store à descente libre."],
            ],
          },
        ],
      },
      {
        id: "usages-zip",
        heading: "Vitrage, pergola, terrasse",
        imageId: "store-zip-pergola",
        blocks: [
          {
            type: "points",
            items: [
              { title: "Grande baie", text: "On réduit l'apport solaire avant la vitre, surtout à l'ouest." },
              { title: "Pergola", text: "Les côtés restent ouverts l'hiver et se ferment aux heures exposées." },
              { title: "Vis-à-vis", text: "Selon la toile, tamisante ou plus couvrante, on filtre le regard sans éteindre la pièce." },
              { title: "Restaurant", text: "Un côté de terrasse exposé au vent ou au soleil bas se traite sans construire une cloison." },
            ],
          },
        ],
      },
      {
        id: "limite",
        heading: "Ce que le ZIP ne fait pas",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Il ne remplace pas une toiture. Il ne couvre pas une cour à lui seul. Il ne devient pas une menuiserie étanche. S'il faut un toit, on regarde la ", { href: "/pergola-bioclimatique", label: "pergola bioclimatique" }, " ou la ", { href: "/pergola-retractable", label: "couverture rétractable" }, ", et le ZIP éventuellement en complément."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "stores-interieurs",
    kind: "product",
    title: "Stores intérieurs au Maroc | Terrastore",
    description:
      "Stores intérieurs au Maroc : enrouleur, vénitien, jour et nuit. Lumière, éblouissement et intimité pour villas, bureaux et hôtels.",
    h1: "Stores intérieurs au Maroc",
    eyebrow: "Lumière",
    lede: "Le store intérieur règle ce que la pièce fait de la lumière déjà entrée : éblouissement sur un écran, nuit dans une chambre, regard depuis la rue, douceur dans un séjour. Enrouleur, vénitien ou jour et nuit ne servent pas le même geste.",
    primaryQuery: "store intérieur Maroc",
    imageId: "store-interior",
    serviceType: "Store intérieur",
    ctaTitle: "Décrire la pièce et la baie",
    ctaText: "Pièce, orientation de la fenêtre et photo de la menuiserie. Nous orientons le type de store, pas une collection de tissus.",
    breadcrumbs: [solutions, stores, { name: "Stores intérieurs", href: "/stores-interieurs" }],
    related: [
      { href: "/conseils/choisir-un-store-interieur", label: "Choisir selon la pièce", text: "Chambre, séjour, bureau, salle de réunion." },
      { href: "/stores-exterieurs", label: "Stores extérieurs", text: "Quand il faut arrêter la chaleur avant la vitre." },
      { href: "/professionnels", label: "Bureaux et hôtels", text: "Répéter une solution sur plusieurs baies." },
    ],
    faqs: [
      { question: "Enrouleur, vénitien ou jour et nuit ?", answer: "L'enrouleur couvre la baie d'un seul geste, en toile tamisante ou plus occultante. Le vénitien oriente les lames et garde une vue filtrée. Le jour et nuit alterne des bandes plus ouvertes et plus fermées pour moduler sans changer de store." },
      { question: "Occultant ou tamisant ?", answer: "Occultant pour dormir ou projeter. Tamisant pour travailler à la lumière du jour sans reflet. Une même villa mélange souvent les deux, pièce par pièce." },
      { question: "Motorisé à l'intérieur ?", answer: "Utile sur une grande hauteur, une imposte difficile, ou un ensemble de baies que l'on veut commander ensemble. Seulement si le système retenu le prévoit et si l'alimentation est prévue." },
    ],
    sections: [
      {
        id: "types",
        heading: "Trois types, trois gestes",
        imageId: "store-jour-nuit",
        blocks: [
          {
            type: "points",
            items: [
              { title: "Enrouleur", text: "Une toile qui monte et descend. Lecture nette, entretien simple, choix du degré d'ouverture du tissu." },
              { title: "Vénitien", text: "Des lames qui pivotent. On coupe l'éblouissement tout en gardant un filet de vue et de lumière." },
              { title: "Jour et nuit", text: "Des bandes alternées. On passe d'une lumière filtrée à une occultation plus franche sans deuxième rideau." },
            ],
          },
        ],
      },
      {
        id: "pieces",
        heading: "Pièces de villa, bureaux, chambres d'hôtel",
        imageId: "store-venitien",
        blocks: [
          {
            type: "paragraphs",
            items: [
              ["Dans un séjour orienté ouest, l'enrouleur tamisant évite le reflet sur le sol poli en fin de journée. Dans une chambre, on cherche l'occultation du matin, surtout en été quand le soleil se lève tôt. Dans un bureau, le vénitien ou l'enrouleur screen limite le reflet sur l'écran sans éteindre la pièce."],
              ["Pour une chambre d'hôtel ou une salle de réunion, la répétition des baies compte autant que le tissu : mêmes chutes, mêmes hauteurs de coffre, commande compréhensible. Le guide ", { href: "/conseils/choisir-un-store-interieur", label: "store intérieur selon la pièce" }, " détaille ces cas."],
              ["Si la baie chauffe avant même d'être habillée, le store intérieur arrive trop tard pour la thermique. On le couple alors à un ", { href: "/store-zip", label: "store ZIP" }, " ou à un ", { href: "/store-banne", label: "store banne" }, "."],
            ],
          },
        ],
      },
    ],
  },
];
