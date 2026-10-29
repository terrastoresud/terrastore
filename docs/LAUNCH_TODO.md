# Ce qui reste au propriétaire

Uniquement des éléments qui ne peuvent pas être inventés. Le site les lit depuis la configuration. Tant qu’ils sont vides, ils ne s’affichent pas.

1. **Téléphone** — `NEXT_PUBLIC_PHONE`
2. **WhatsApp** — `NEXT_PUBLIC_WHATSAPP` (chiffres internationaux, sans texte autour)
3. **E-mail de contact** — `NEXT_PUBLIC_CONTACT_EMAIL`
4. **API du formulaire** — `CONTACT_API_URL` et `CONTACT_API_KEY` (voir `docs/CONTACT_INTEGRATION.md`)
5. **Adresse, raison sociale, RC, ICE, IF, directeur de publication** — à confirmer avant publication. Des annuaires publics citent « Terrastore du Sud » (Agadir) avec des adresses qui ne concordent pas. Rien de tout cela n’est affiché. Renseignez les champs de `src/lib/site-config.ts` seulement après validation, et n’activez un `LocalBusiness` qu’à ce moment-là.
6. **Photographies de chantier** — liste et noms de fichiers dans `docs/PHOTO_SHOTLIST.md`. Les remplacer dans `src/content/images.ts` (`src`).
7. **Logo officiel** — le fichier source n’était pas dans le dépôt. Le site utilise un mot-symbole typographique et une icône géométrique temporaire (`src/app/icon.svg`). Remplacez-la par le symbole du logo, sans le redessiner.
8. **Domaine de production** — `NEXT_PUBLIC_SITE_URL` (hôte définitif, pas une URL `*.vercel.app`)
9. **Indexation** — `NEXT_PUBLIC_SITE_INDEXABLE=true` seulement sur ce domaine, après photos et mentions légales
10. **Mesure d’audience** — `NEXT_PUBLIC_GA_ID` si vous la souhaitez. Le bandeau de consentement n’apparaît qu’alors.
11. **Search Console** — `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
12. **Hébergeur** — à inscrire dans les mentions légales au moment de la mise en production
13. **Déclaration CNDP** — à référencer si le traitement définitif du formulaire l’exige. Le site ne prétend pas qu’elle existe.
