# Climadoux — suivi

## Fait (27/11/2026)
- [x] Socle Nuxt 4 SSR + Tailwind 4, design clair et chaleureux (≠ DomoKlub), menu translucide, mode réduit du mouvement.
- [x] 3 rubriques (chauffage d’appoint, humidificateur, purificateur) avec tableau comparatif, FAQ, JSON-LD.
- [x] 18 fiches produits, ASIN vérifiés un par un sur amazon.fr, source + date sur chaque fiche, forces/limites.
- [x] 7 guides (3 piliers + consommation, taux d’humidité, entretien, aération), sources officielles vérifiées.
- [x] Pages de confiance : à propos, méthode, affiliation (mention Partenaire Amazon), contact, mentions légales, confidentialité.
- [x] robots.txt / sitemap / llms.txt conditionnés à `SITE_LIVE` ; `check:content` et `check:seo` (36 pages OK).

## Pour mettre en ligne (à faire par l’éditeur)
- [ ] Acheter `climadoux.fr`.
- [ ] Créer un identifiant de suivi Amazon dédié (Partenaires → Gérer les identifiants de suivi), ex. `climadoux-21`, et ajouter le site dans la liste des sites du compte.
- [ ] Créer le dépôt GitHub, connecter Dokploy (voir README), variables d’environnement.
- [ ] Passer `NUXT_PUBLIC_SITE_LIVE=true`, Search Console + sitemap.

## Prochains contenus (après vérification SERP)
- [ ] Déshumidificateur : rubrique dédiée (forte demande hiver/printemps).
- [ ] « Chauffage d’appoint salle de bain » si la SERP justifie une page séparée.
- [ ] « Humidificateur chambre bébé » (prudence santé, sources pédiatriques).
- [ ] Comparatifs 1-vs-1 seulement si une intention distincte existe.
- [ ] Contrôle mensuel des ASIN et disponibilités (Rowenta Mini Excel en stock faible au 27/11).
