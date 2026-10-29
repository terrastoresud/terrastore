# Intégration du formulaire de contact

Le formulaire est prêt. Il ne transmet rien tant que les deux variables ci-dessous sont absentes. Dans ce cas, `POST /api/contact` répond **503** avec `code: "unconfigured"`. Aucun message n’est enregistré et l’interface ne dit pas que la demande est partie.

## Variables

```
CONTACT_API_URL=https://example-service.tld/hooks/terrastore
CONTACT_API_KEY=secret
```

Les deux sont obligatoires. L’URL doit être en `https`, sauf `http://localhost` ou `http://127.0.0.1` pour un essai local.

Le site envoie :

```json
{
  "name": "Nom",
  "phone": "+212…",
  "city": "Marrakech",
  "projectType": "Carport",
  "dimensions": "",
  "message": "…",
  "source": "terrastore-website"
}
```

En-têtes : `Content-Type: application/json` et `Authorization: Bearer <CONTACT_API_KEY>`.

`projectType` est l’une de ces valeurs : Carport, Parasol, Store extérieur, Store intérieur, Pergola, Projet professionnel, Autre.

## Où brancher un autre format

Toute la livraison est dans `deliver()` de `src/app/api/contact/route.ts`. Adaptez l’URL, les en-têtes ou le corps là, sans toucher au formulaire.

Le formulaire sait que l’envoi est actif seulement si les deux variables sont présentes au rendu serveur (`deliveryEnabled`).

## Déjà en place

- Validation navigateur et serveur (mêmes règles dans `src/lib/contact.ts`)
- Champ pot de miel `company` (rejeté, sans succès simulé)
- Plafond de taille du corps
- Limite de débit en mémoire (5 requêtes / 10 min / IP, via `x-forwarded-for`)
- Refus d’un doublon nom/téléphone+message pendant 10 minutes **après un envoi réellement accepté**
- Délai d’attente de 10 secondes vers l’API

La limite en mémoire ne survit pas à un redémarrage et n’est pas partagée entre plusieurs instances. Si le trafic le demande, remplacez `recent` par un store commun. Ne journalisez pas le message.

## Réponse attendue de l’API distante

Tout statut HTTP 2xx est traité comme un succès. Un autre statut, ou un délai dépassé, renvoie **502** au visiteur, sans le détail distant. Le visiteur peut alors renvoyer : l’échec n’est pas mémorisé comme un doublon.
