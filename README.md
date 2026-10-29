# Terrastore

Site de présentation et de demande d’étude pour Terrastore : carports, parasols, stores et pergolas au Maroc. Français, Next.js (App Router), contenu en TypeScript.

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev
```

Sous Windows, copiez `.env.example` vers `.env.local` à la main si `cp` n’est pas disponible.

Scripts : `dev`, `build`, `start`, `lint`, `typecheck`, `test:e2e`, `routes`.

`routes` régénère les fichiers `page.tsx` à partir des slugs de contenu. À lancer si vous ajoutez une page dans `src/content/pages` ou un guide.

## Configuration

Tout ce qui est public et incertain est dans `src/lib/site-config.ts` et les variables `NEXT_PUBLIC_*`. Les secrets du formulaire (`CONTACT_API_URL`, `CONTACT_API_KEY`) ne sont lus que par `src/app/api/contact/route.ts`.

Sans téléphone, e-mail ou WhatsApp, ces liens n’apparaissent pas. Sans API, le formulaire valide la saisie puis répond qu’aucun envoi n’a eu lieu.

## Contenu

- Pages : `src/content/pages/*.ts`
- Guides : `src/content/guides.ts`
- Registre et chantiers : `src/content/registry.ts` (`projects` reste vide tant qu’il n’y a pas de faits vérifiés)
- Images : `src/content/images.ts`

`/realisations` est en `noindex` tant que `projects` est vide, et absente du menu.

## Images

1. Placer le fichier dans `public/images/`.
2. Mettre son chemin dans `src` pour l’identifiant concerné.
3. `npm run build`.

Tant que `src` est `null`, un schéma d’intention s’affiche. Ce n’est pas une photographie de chantier. La liste de prise de vues est dans `docs/PHOTO_SHOTLIST.md`.

## Indexation

`NEXT_PUBLIC_SITE_INDEXABLE=false` par défaut.

L’indexation ne s’ouvre que si le drapeau vaut exactement `true`, que l’environnement Vercel n’est pas une prévisualisation, et que `NEXT_PUBLIC_SITE_URL` est un hôte définitif. `localhost` et `*.vercel.app` restent non indexables.

Cela agit sur la balise robots, `robots.txt`, le sitemap et l’en-tête `X-Robots-Tag`.

## Déploiement

1. Renseigner le domaine de production.
2. Laisser l’indexation sur `false` tant que les photos, le contact et les mentions légales ne sont pas confirmés.
3. Déployer (Vercel ou équivalent) avec ces variables.
4. Vérifier `/robots.txt` (`Disallow: /`) et une page (`noindex`).
5. Passer `NEXT_PUBLIC_SITE_INDEXABLE=true` seulement sur le domaine définitif, puis contrôler que le sitemap liste les URL canoniques et que les prévisualisations restent en `noindex`.

Le dépôt n’était pas relié à un hébergeur au moment de la construction du site.

## Documentation

- `docs/market-benchmark.md`
- `docs/SEO_MAP.md`
- `docs/PHOTO_SHOTLIST.md`
- `docs/CONTACT_INTEGRATION.md`
- `docs/LAUNCH_TODO.md`
- `docs/QA_REPORT.md`
