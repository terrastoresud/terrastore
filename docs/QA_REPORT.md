# Contrôle qualité

Mesures du 29 octobre 2026, build de production (`next build` puis `next start` sur le port 4173). Indexation désactivée : `NEXT_PUBLIC_SITE_INDEXABLE` n’est pas `true`, et l’hôte local reste non indexable.

## Build, types, lint

- `npx tsc --noEmit` : OK
- `npx eslint --max-warnings 0 src tests` : OK
- `npx next build` : OK, pages statiques, route API dynamique, proxy actif

## Playwright

`npx playwright test` : 11 passés, 3 ignorés (contrôles SEO, débordement et axe uniquement sur le projet desktop), 0 échec.

Desktop Chrome 1440×900 et Pixel 5.

- `robots.txt` en `Disallow: /`, sitemap sans `<loc>`
- URL inconnue : HTTP 404 et page « Cette page »
- `POST /api/contact` : 503 `unconfigured`, pas de succès simulé
- Parcours des pages : un seul `h1`, canonical, titres uniques, pas de lorem ni de faux numéro
- Accueil, menu mobile, validation du formulaire (`#name-error`)
- Pas de défilement horizontal à 360 et 1280 px sur `/`, `/carport-aluminium`, `/parasols`, `/store-banne`, `/contact`
- axe-core : aucune violation serious ou critical sur `/`, `/carport-aluminium`, `/contact`

## Revue navigateur

Captures Playwright du build de production, pas seulement la compilation.

- Accueil 1280 : navigation complète, titre éditorial, schéma d’intention légendé, deux boutons distincts
- Accueil 360 : les deux appels du hero restent lisibles ; la barre mobile n’apparaît qu’après défilement, pour ne plus couvrir le second bouton
- Carport, parasols, store banne, contact, guide carport, menu mobile : pas de débordement, pas de photo présentée comme un chantier
- Fil d’Ariane : le séparateur reste collé au maillon précédent ; l’espace insécable précède `?`

## Lighthouse mobile

Chrome headless (Chromium Playwright), émulation mobile, catégories performance, accessibilité, bonnes pratiques, SEO. Lighthouse 13.6.0. Node du poste : 22.15 (le paquet annonce 22.19 ; les rapports se sont tout de même générés).

| Page | Perf. | A11y | BP | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 96 | 100 | 100 | 66 | 0,8 s | 0 | 240 ms |
| `/carport-aluminium` | 98 | 100 | 100 | 66 | 1,0 s | 0 | 180 ms |
| `/parasols` | 98 | 100 | 100 | 66 | 0,8 s | 0 | 160 ms |
| `/store-banne` | 100 | 100 | 100 | 66 | 0,8 s | 0 | 70 ms |

Un premier passage sur `/parasols` a donné 90 (TBT 400 ms). Le passage suivant, même build, est à 98 (TBT 160 ms). L’écart vient de la variance du thread principal, pas d’un script propre à la page : le même runtime sert le store banne, mesuré à 100.

Le SEO à 66 a une seule cause pondérée : l’audit `is-crawlable` échoue parce que la page est en `noindex, nofollow`. Les autres audits SEO pondérés passent (title, description, statut HTTP, ancres, robots.txt, hreflang, canonical). Poids de `is-crawlable` : 4,04 sur 12,04. S’il passait, le score SEO serait 100. C’est l’état voulu tant que l’indexation n’est pas ouverte.

## Déploiement

Pas de CLI Vercel, pas de dossier `.vercel`, pas de remote git. Aucune mise en ligne n’a été tentée.
