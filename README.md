# Site Bot Yo-kai

Site statique officiel de Yo-Bot, prêt pour GitHub Pages ou tout autre
hébergement de fichiers HTML. Aucun token Discord ni secret n’est nécessaire
dans ce dépôt.

## Structure

- `index.html` : accueil et invitation Discord
- `commands.html` : commandes publiques, administrateur et équipe Yo-Bot
- `changelog.html` : historique des versions
- `privacy.html` : politique de confidentialité
- `terms.html` : conditions d’utilisation
- `site.js` : langue du site, alias localisé et recherche des commandes
- `style.css` : identité Yo-kai Watch et mise en page responsive
- `assets/` : avatar, décors et illustrations

## Tester en local

Ouvrir `index.html` dans un navigateur. Le site ne demande ni compilation ni
dépendance JavaScript.

Le sélecteur de langue de la page des commandes mémorise le choix uniquement
dans le navigateur. Parmi les commandes présentées, seul le nom de
`/bingo-kai` change selon la langue sélectionnée.

## Lier le bouton Discord aux logs

Après la publication du site, définir l’URL complète de `changelog.html` dans
la variable d’environnement du bot :

```bat
setx YO_BOT_CHANGELOG_URL "https://mattheube.github.io/Yo-Bot/changelog.html"
```

Fermer puis relancer la fenêtre de Yo-Bot. Le bouton **Voir tous les logs**
apparaîtra dans le panneau des mises à jour et dans les publications créées
avec `/setup help` ou actualisées avec `/update-help`.

## Sécurité

Le site est entièrement statique. Ne jamais y ajouter le token de Yo-Bot, un
Client Secret Discord, une clé Cloudflare ou le contenu d’un fichier `.env`.
