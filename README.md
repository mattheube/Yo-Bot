# Site Bot Yo-kai

Site statique officiel de Yo-Bot. Il peut être publié tel quel sur GitHub Pages
ou tout autre hébergement de fichiers HTML.

## Structure

- `index.html`: accueil et invitation Discord
- `commands.html`: liste publique des commandes
- `changelog.html`: historique des versions
- `privacy.html`: politique de confidentialité
- `terms.html`: conditions d'utilisation
- `style.css`: styles communs et responsive
- `assets/`: avatar et illustrations

## Tester en local

Ouvrir directement `index.html` dans un navigateur. Aucun build et aucune
dépendance JavaScript ne sont nécessaires.

## Lier le bouton Discord aux logs

Après la publication du site, définir l'URL complète de `changelog.html` dans
la variable d'environnement du bot:

```bat
setx YO_BOT_CHANGELOG_URL "https://votre-site.example/changelog.html"
```

Fermer puis relancer la fenêtre de Yo-Bot. Le bouton **Voir tous les logs**
apparaîtra alors dans le panneau des mises à jour et dans les publications
créées avec `/setup help` ou actualisées avec `/update-help`.

Le token Discord n'est jamais nécessaire dans les fichiers du site.
