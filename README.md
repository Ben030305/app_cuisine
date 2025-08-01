# Application mobile Cuisine de Base

Ce dépôt regroupe l'intégralité de notre production et de l'application android Cuisine de Base, qui est une adaptation sous format android du site [Cuisine de Base](https://cuisinedebase.com/). Cette application permet donc la lecture d'articles de cuisine, leur filtrage par catégorie ou recherche par leur titre, leur téléchargement sous la forme d'une page HTML (fonction encore expérimentale), ainsi que la consultation d'une sélection d'Ebooks (donc l'achat se fait via le site internet).

## Pour commencer

Afin de pouvoir utiliser l'application, vous trouverez dans le dossier *build* la dernière version stable développée par notre équipe, nommée *Cuisine_de_base-v0.90.apk*, qu'il faut ensuite installer sur votre mobile ou sur un émulateur android. 
Il est à noter que sur votre mobile, l'installation ne sera pas possible sans désactiver la mesure de sécurité inhérente à android concernant l'installation de fichiers .apk de sources extérieures.
Une autre façon de tester l'application est de le faire via émulateur, tel que [Bluestacks](https://www.bluestacks.com/fr/index.html), ou encore en lançant la commande ``npm run android`` après avoir installé [Android Studio](https://developer.android.com/studio?hl=fr).

### Installation et Démarrage

Afin d'installer cette application, 2 possibilités s'offrent à vous :
- Installer le build directement, il suffit de télécharger et installer le fichier app-v0.90.apk directement.
- Télécharger tout le contenu du dépôt et lancer la commande ``npm run build && ionic serve`` pour lancer la version web de l'application, ou ``npm run android`` pour lancer la version mobile sur Android Studio.

## Fabriqué avec

Nous avons utilisé ces différents frameworks et langages afin de produire notre application :

* [Ionic](https://ionicframework.com/) 
* [Capactitor](https://capacitorjs.com/) 
* [React](https://fr.react.dev/)
* [Typescript](https://www.typescriptlang.org/)

## Auteurs

* **Houssaïne Ahamada** _alias_ [@HoussaineA](https://github.com/HoussaineA)
* **Jessim Ben Rejeb** _alias_ [@Jessim-BENREJEB](https://github.com/Jessim-BENREJEB)
* **Benjamin Benamari** _alias_ [@Ben030305](https://github.com/Ben030305)
