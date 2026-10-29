# Carte SEO

35 URL sont prévues pour l’indexation **lorsque** `NEXT_PUBLIC_SITE_INDEXABLE=true` et que `NEXT_PUBLIC_SITE_URL` est le domaine définitif (pas `localhost`, pas `*.vercel.app`). Tant que ce n’est pas le cas : `noindex, nofollow`, `robots.txt` en `Disallow: /`, sitemap vide, en-tête `X-Robots-Tag`.

`/realisations` reste hors index et hors sitemap tant qu’aucun chantier vérifié n’est dans `src/content/registry.ts`.

Une intention principale par URL. Les guides répondent à une question de choix et renvoient vers la page commerciale, ils ne la dupliquent pas.

| Route | Rôle | Intention | Requête principale | Title | H1 |
| --- | --- | --- | --- | --- | --- |
| `/` | Accueil | Découverte + devis | carport parasol store Maroc | Carports, parasols et stores sur mesure au Maroc \| Terrastore | Carports, parasols et stores sur mesure au Maroc |
| `/solutions` | Orientation | Choisir une famille | protection solaire Maroc | Solutions d'ombrage sur mesure au Maroc \| Terrastore | Solutions d'ombrage et d'aménagement extérieur |
| `/carport-aluminium` | Offre P0 | Transactionnelle | carport aluminium Maroc | Carport aluminium sur mesure au Maroc \| Terrastore | Carport aluminium sur mesure au Maroc |
| `/parasols` | Offre P0 | Découverte catégorie | parasol Maroc | Parasols modernes et professionnels au Maroc \| Terrastore | Parasols modernes et professionnels au Maroc |
| `/parasol-deporte` | Offre P0 | Transactionnelle | parasol déporté Maroc | Parasol déporté au Maroc \| Terrastore | Parasol déporté au Maroc |
| `/parasol-professionnel` | Offre P0 | B2B hospitality | parasol professionnel Maroc | Parasol professionnel au Maroc \| Terrastore | Parasol professionnel pour terrasses au Maroc |
| `/stores` | Hub | Séparer intérieur / extérieur | stores Maroc | Stores sur mesure au Maroc \| Terrastore | Stores sur mesure au Maroc |
| `/stores-exterieurs` | Hub | Banne vs vertical | store extérieur Maroc | Stores extérieurs au Maroc \| Terrastore | Stores extérieurs au Maroc |
| `/store-banne` | Offre P0 | Transactionnelle | store banne Maroc | Store banne au Maroc \| Terrastore | Store banne au Maroc |
| `/store-zip` | Offre P0 | Transactionnelle | store ZIP Maroc | Store ZIP au Maroc \| Terrastore | Store ZIP au Maroc |
| `/stores-interieurs` | Offre | Lumière intérieure | store intérieur Maroc | Stores intérieurs au Maroc \| Terrastore | Stores intérieurs au Maroc |
| `/pergola-bioclimatique` | Offre secondaire | Terrasse à lames | pergola bioclimatique Maroc | Pergola bioclimatique au Maroc \| Terrastore | Pergola bioclimatique au Maroc |
| `/pergola-retractable` | Offre secondaire | Toile qui s'ouvre | pergola rétractable Maroc | Pergola à couverture rétractable au Maroc \| Terrastore | Couverture rétractable pour terrasse |
| `/voile-ombrage` | Offre secondaire | Toile tendue | voile d'ombrage Maroc | Voile d'ombrage au Maroc \| Terrastore | Voile d'ombrage au Maroc |
| `/professionnels` | B2B | Projet prescrit | ombrage projet professionnel | Projets professionnels d'ombrage au Maroc \| Terrastore | Ouvrages d'ombrage pour projets professionnels |
| `/conseils` | Index guides | Information | conseils carport store parasol | Conseils pour choisir carport, parasol et store \| Terrastore | Conseils pour décider |
| `/contact` | Conversion | Devis | étude projet Terrastore | Demander une étude \| Terrastore | Étudier un projet |
| `/a-propos` | Marque | Navigationnelle | Terrastore Maroc | À propos de Terrastore \| Protection solaire au Maroc | Terrastore, protection solaire au Maroc |
| `/agadir` | Zone | Locale, sans agence | carport / store Agadir | Carports, parasols et stores à Agadir \| Terrastore | Protection solaire à Agadir |
| `/marrakech` | Zone | Locale | parasol / pergola Marrakech | Parasols, pergolas et stores à Marrakech \| Terrastore | Ombrage pour villas et riads à Marrakech |
| `/casablanca` | Zone | Locale | carport Casablanca | Carports et stores à Casablanca \| Terrastore | Carports et terrasses à Casablanca |
| `/rabat` | Zone | Locale | store / pergola Rabat | Stores et pergolas à Rabat \| Terrastore | Terrasses et villas à Rabat |
| `/tanger` | Zone | Locale | terrasse Tanger | Terrasses et villas à Tanger \| Terrastore | Terrasses exposées à Tanger |
| `/essaouira` | Zone | Locale, vent | ombrage Essaouira | Ombrage de terrasse à Essaouira \| Terrastore | Ombrage à Essaouira, sous les alizés |
| `/mentions-legales` | Légal | Confiance | mentions légales | Mentions légales \| Terrastore | Mentions légales |
| `/politique-confidentialite` | Légal | Confiance | confidentialité | Politique de confidentialité \| Terrastore | Politique de confidentialité |

## Guides

| Route | Question | Page commerciale liée | Ne pas cannibaliser |
| --- | --- | --- | --- |
| `/conseils/comment-choisir-un-carport-aluminium` | Ordre des décisions | `/carport-aluminium` | La page offre reste la cible « carport aluminium Maroc » |
| `/conseils/carport-adosse-ou-autoportant` | Mode d'appui | `/carport-aluminium` | Pas une deuxième page « carport Maroc » |
| `/conseils/carport-simple-ou-double` | Places et portières | `/carport-aluminium` | Idem |
| `/conseils/prix-dun-carport-au-maroc` | Postes de prix, sans montant | `/carport-aluminium` | Aucune fourchette inventée |
| `/conseils/parasol-deporte-ou-mat-central` | Position du mât | `/parasol-deporte`, `/parasols` | La page déporté garde l’intention transactionnelle |
| `/conseils/parasol-professionnel-hotel-restaurant` | Exploitation | `/parasol-professionnel` | Pas une liste de faux établissements |
| `/conseils/store-banne-ou-store-zip` | Horizontal vs vertical | `/store-banne`, `/store-zip` | Chaque produit garde sa requête |
| `/conseils/choisir-un-store-interieur` | Pièce par pièce | `/stores-interieurs` | Le hub stores ne répète pas le guide |
| `/conseils/pergola-bioclimatique-ou-retractable` | Lames vs toile | les deux pages pergola | Ni l’une ni l’autre ne vise « carport » |

## Maillage

- Carport → trois guides carport, prix, Agadir, Casablanca, contact.
- Parasols → déporté, professionnel, guide mât, Marrakech.
- Banne ↔ ZIP ↔ guide comparatif ↔ pergola quand le toit manque.
- Villes → l’ouvrage le plus plausible localement, pas les six produits à chaque fois.
- Guides → page commerciale, jamais l’inverse seulement dans le menu.

## Schéma

Accueil : `Organization` + `WebSite`. Pages d’offre et villes : `Service` + `WebPage` + `BreadcrumbList`, `areaServed` Maroc ou la ville. Guides : `Article` + fil d’Ariane. Pas de `LocalBusiness`, pas d’avis, pas de prix, pas de note.

## Canonical et variantes

Pas de slash final. Canonical = chemin sur `metadataBase`. Une seule H1. Open Graph généré (mot-symbole, titre, fond papier, filet ocre). Pas de liste de villes dans un bloc caché.
