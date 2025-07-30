import { Route } from "react-router";
import Article from "./pages/Article";

export function buildRoute() {
	return (
		listeArticles.map(article => (
			<Route key={article.titre} path={article.route}>
				<Article props={article} />
			</Route>
		))
	);
}

const J1 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique et recette de Tiramisu</h1><p>Vous trouverez dans cet article la<strong> fiche technique et la recette de tiramisu</strong>, le très célèbre et<span> délicieux dessert d’origine italienne. <strong>L’entremet façon tiramisu</strong> est à base de fromage <strong>Mascarpone</strong>, de <strong>crème fouettée</strong> et d’un <strong>appareil à bombe</strong>.</span></p>



	<p><span>Si c’est votre première visite de ce blog, sachez qu’il regroupe l’essentiel de ce qu’il faut savoir pour <strong>apprendre la cuisine de bases</strong> avec un contenu gratuit et de qualité. Vous pouvez découvrir par exemple <a href="https://cuisinedebase.com/les-25-recettes-a-maitriser-pour-obtenir-son-cap-cuisine/">les 25 recettes à maitriser</a> pour passer le <a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/">CAP cuisine en candidat libre</a> et le <a href="https://cuisinedebase.com/programme-dentrainement-et-dorganisation-pour-prparer-le-cap/">planning détaillé</a> pour les travailler.</span></p>
	
	
	
	<h2 className="sous_titre">Techniques à apprendre avec la recette de tiramisu</h2>
	
	
	
	<p><span>Pour réussir l’<strong>entremet façon tiramisu</strong>,  il faut travailler les <strong>techniques de base</strong> suivantes:</span></p>
	
	
	
	<ul className="wp-block-list"><li> <span>Monter une crème chantilly</span> </li></ul>
	
	
	
	<h2 className="sous_titre">La fiche technique de l’entremet façon tiramisu</h2>
	
	
	
	<p><span>Voici la <strong>fiche technique</strong> de réalisation du <strong>Tiramisu</strong>.</span></p>
	
	
	
	<h2 className="sous_titre">Denrées utiles pour le tiramisu</h2>
	
	
	
	<h2 className="sous_titre">Ingrédients pour la génoise</h2>
	
	
	
	<ul className="wp-block-list"><li>100 g de farine</li><li>3 oeufs</li><li>100 g de sucre semoule</li></ul>
	
	
	
	<h2 className="sous_titre">Ingrédients pour la punchage</h2>
	
	
	
	<ul className="wp-block-list"><li>100 ml d’eau</li><li>80 g de sucre</li><li>10 g de café lyophilisé</li><li>de la cannelle</li></ul>
	
	
	
	<h2 className="sous_titre">Appareil à bombe</h2>
	
	
	
	<ul className="wp-block-list"><li>4 jaunes d’oeufs</li><li>50 g de sucre</li><li>17 ml d’eau</li></ul>
	
	
	
	<h2 className="sous_titre">crème fouettée</h2>
	
	
	
	<ul className="wp-block-list"><li>400 ml de crème liquide</li><li>40 g de sucre semoule</li></ul>
	
	
	
	<h2 className="sous_titre">Lait collé</h2>
	
	
	
	<ul className="wp-block-list"><li>80 ml de lait</li><li>1 g d’agar-agar (ou équivalent de gélatine)</li><li>400 ml de mascarpone</li></ul>
	
	
	
	<h2 className="sous_titre">Technique de réalisation de ‘entrepôt façon tiramisu</h2>
	
	
	
	<h2 className="sous_titre">Confectionner la génoise</h2>
	
	
	
	<p>Après avoir mis en place le poste de travailler, on commence par faire la génoise. Et pour ce faire on suit les étapes suivantes:</p>
	
	
	
	<ul className="wp-block-list"><li>Chemiser le moule.&nbsp;</li><li>Blanchir les œufs avec le sucre dans un bassin.&nbsp;</li><li>Monter l’appareil en plaçant dans une sauteuse remplie d’eau chauffée à 80°C.&nbsp;</li><li>Retirer le bassin de la sauteuse lorsque la température de l’appareil atteint 45°C.&nbsp;</li><li>Continuer de fouetter énergiquement jusqu’à complet refroidissement de l’appareil.&nbsp;</li><li>Incorporer délicatement la farine tamisée et mélanger en soulevant l’appareil avec une écumoire.&nbsp;</li><li>Mouler la génoise et la marquer en cuisson à 220°C pendant une vingtaine de minutes</li></ul>
	
	
	
	<h2 className="sous_titre"><strong>Réaliser le sirop de punchage</strong></h2>
	
	
	
	<ul className="wp-block-list"><li>Faire bouillir l’eau avec le sucre</li><li>Ajouter le café</li></ul>
	
	
	
	<h2 className="sous_titre"><strong>Réaliser l’appareil à bombe</strong></h2>
	
	
	
	<ul className="wp-block-list"><li>Cuire le sucre et l’eau à 120°C</li><li>Battre les jaunes d’œufs en y versant petit à petit le sucre cuit</li><li>Fouetter l’appareil jusqu’au refroidissement complet&nbsp;</li></ul>
	
	
	
	<h2 className="sous_titre"><strong>Coller le lait</strong></h2>
	
	
	
	<ul className="wp-block-list"><li>Mélanger le Agar-agar au lait frais et porter à ébullition. Laisser refroidir</li></ul>
	
	
	
	<p>Ensuite <strong>monter la crème chantilly et la sucrer</strong>. Puis <strong>Réaliser l’assemblage</strong>.</p>
	
	
	
	<ul className="wp-block-list"><li>Incorporer délicatement le lait refroidi à la mascarpone, puis délicatement l’appareil à bombe puis la crème fouettée</li></ul>
	
	
	
	<p><strong>Réaliser le montage</strong></p>
	
	
	
	<ul className="wp-block-list"><li>Couper la génoise en 3 disques&nbsp;</li><li>Placer au fond d’un cercle le premier disque, puncher.</li><li>Verser le quart de l’appareil et lisser,&nbsp;</li><li>positionner le deuxième disque, puncher et verser de nouveau un quart de l’appareil et lisser,&nbsp;</li><li>puis positionner le troisième disque et terminer le montage et la décoration avec le reste de l’appareil.</li></ul>
	
	
	
	<p>Enfin, <strong>dresser </strong>le tiramisu.</p>
	
	
	
	<div className="post-image"><figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Tiramisu-2.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Tiramisu_thumb-2.png" alt="Tiramisu" title="Tiramisu"></img></a><figcaption>Fiche technique du tiramisu</figcaption></figure></div>
	
	
	
	<span>Consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dico culinaire</a> pour comprendre certains mots techniques</span></div></article>,

	titre: "Fiche technique et recette de Tiramisu",

	route: "/article/entremets-facon-tiramisu",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Tiramisu_thumb-2.png",

	lien: "https://cuisinedebase.com/entremets-facon-tiramisu/"

}

const J2 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique et recette de Choux à la crème pâtissière</h1><p>La<strong> pâte à choux</strong> figure parmi les classiques des pâtes qui figurent dans les épreuves du <strong>CAP cuisine candidat libre</strong>. En effet, elle est utilisée dans de nombreux desserts, comme les <strong>choux à la crème pâtissière</strong>,&nbsp; les <strong>éclairs</strong>, le <strong>Paris-Brest</strong>, le <strong>saint-Honoré</strong> et d’autres, …</p>



	<p><span>On fabrique les choux à partir de la <strong>pâte à choux</strong>. Les <strong>choux</strong> que l’on garnis de <strong>crème pâtissière</strong> aromatisée à la vanille est un pure plaisir raffiné.</span></p>
	
	
	
	<p><span>Si c’est votre première visite de ce blog, sachez qu’il regroupe l’essentiel de ce qu’il faut savoir pour apprendre la cuisine de bases avec un contenu gratuit et de qualité. Vous pouvez découvrir par exemple <a href="https://cuisinedebase.com/les-25-recettes-a-maitriser-pour-obtenir-son-cap-cuisine/">les 25 recettes à maitriser</a> pour passer le <a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/">CAP cuisine en candidat libre</a> et le <a href="https://cuisinedebase.com/programme-dentrainement-et-dorganisation-pour-prparer-le-cap/">planning détaillé</a> pour les travailler.</span></p>
	
	
	
	<h2 className="sous_titre">Techniques pour faire les choux à la crème pâtissière</h2>
	
	
	
	<p><span>Pour réussir la recette de <span><strong>choux à la crème pâtissière</strong></span> il faut travailler les techniques de base suivantes:</span></p>
	
	
	
	<ul className="wp-block-list"><li> <span>Glacer les choux</span> </li></ul>
	
	
	
	<h2 className="sous_titre">Fiche technique de choux à la crème pâtissière</h2>
	
	
	
	<p><span>Voici la <strong>fiche technique</strong> de réalisation des <strong>choux à la crème pâtissière</strong>.</span></p>
	
	
	
	<h2 className="sous_titre">Denrées Utiles pour la pâte à choux à la crème pâtissière</h2>
	
	
	
	<p><strong><u>Pâte à choux</u></strong></p>
	
	
	
	<ul className="wp-block-list"><li>250 ml d’Eau</li><li>5 g de Sel fin</li><li>10 g sucre semoule</li><li>80 g de Beurre&nbsp;</li><li>125 g de Farine</li><li>5 Œufs entiers</li></ul>
	
	
	
	<p><strong><u>Crème pâtissière</u></strong></p>
	
	
	
	<ul className="wp-block-list"><li>750 ml Lait</li><li>6 jaunes d’œufs</li><li>150 g de sucre semoule</li><li>100 g de Farine</li><li>La moitié d’une gousse de Vanille</li></ul>
	
	
	
	<p><strong><u>Dorure</u></strong></p>
	
	
	
	<ul className="wp-block-list"><li>Un Œuf</li></ul>
	
	
	
	<p><strong><u>Glaçage</u></strong></p>
	
	
	
	<ul className="wp-block-list"><li>150 g de Sucre glace</li></ul>
	
	
	
	<h2 className="sous_titre">TECHNIQUE DE RÉALISATION</h2>
	
	
	
	<p>On commence tout d’abord par <strong>mettre en place le poste de travail</strong>. Puis on enchaine par la <strong>confection de la pâte à choux</strong>, ensuite on réalise la <strong>crème pâtissière</strong>, puis <span>on garnit les choux et enfin on les dresse</span>.</p>
	
	
	
	<h2 className="sous_titre">Confectionner la pâte à choux</h2>
	
	
	
	<ul className="wp-block-list"><li>Porter à ébullition le mélange de l’eau, le sel, le sucre et le beurre découpé en petits morceaux</li><li>Ajouter la farine en une seule fois (hors du feu). Mélanger lentement au début puis vigoureusement jusqu’à incorporation complète de la farine</li><li>Dessécher la détrempe sur le feu pendant quelques secondes (30 secondes max)</li><li>Incorporer les œufs un par en remuant vigoureusement (utiliser si possible une machine). Vérifier la consistance</li></ul>
	
	
	
	<h2 className="sous_titre">Coucher les choux</h2>
	
	
	
	<ul className="wp-block-list"><li>Beurrer une plaque</li><li>Coucher les choux à l’aide d’une poche à douille ronde unie d’un cm de diamètre.</li><li>Dorer légèrement les choux et les faire cuire au four chauffé à 220°C pendant une vingtaine de minutes</li></ul>
	
	
	
	<h2 className="sous_titre">Réaliser la crème pâtissière</h2>
	
	
	
	<ul className="wp-block-list"><li>Mettre le lait à bouillir avec la vanille</li><li>Clarifier les œufs et blanchir les jaunes avec le sucre.&nbsp;</li><li>Ajouter la farine tamisée.&nbsp;</li><li>Verser progressivement une partie du lait puis mélanger.</li><li>Verser le mélange dans le reste du lait et remettre sur le feu en remuant sans arrêt jusqu’à épaississement du mélange.</li><li>Filmer et laisser refroidir</li></ul>
	
	
	
	<h2 className="sous_titre">Garnir et glacer les choux</h2>
	
	
	
	<ul className="wp-block-list"><li>Ouvrir les choux sur le côté et les garnir de crème à l’aide d’une poche à douille</li><li>Saupoudrer de sucre glace</li></ul>
	
	
	
	<h2 className="sous_titre">Dresser</h2>
	
	
	
	<ul className="wp-block-list"><li>Positionner avec harmonie les choux sur le plat de service</li></ul>
	
	
	<div className="post-image">
	<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Choux-creme-patissiere.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Choux-creme-patissiere_thumb.png" alt="Choux-creme-patissiere" title="Choux-creme-patissiere"></img></a><figcaption>Fiche technique de choux à la crème pâtissière</figcaption></figure></div>
	
	
	<span>Consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dico culinaire</a> pour comprendre certains mots techniques</span></div></article>,

	titre: "Fiche technique et recette de Choux à la crème pâtissière",

	route: "/article/fiche-technique-recette-choux-creme-patissiere",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Choux-creme-patissiere_thumb.png",

	lien: "https://cuisinedebase.com/fiche-technique-recette-choux-creme-patissiere/"

}

const J3 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique et recette de la tarte aux pommes</h1><p>La <strong>tarte aux pommes</strong> est réalisée à partir d’une <strong>pâte brisée</strong>, et elle est garnie d’une <strong>marmelade de pomme</strong> et des pommes coupées en tranches et positionnées en <strong>forme de rosace</strong>. La tarte est cuite dans un four à 200°C pendant une quarantaine de minutes.</p>



	<h2 className="sous_titre">Techniques de base de la tarte à la pomme </h2>
	
	
	
	<p><span>Pour réussir la <strong>tarte aux pommes</strong> il faut travailler les <strong>techniques de base</strong> suivantes:</span></p>
	
	
	
	<ul className="wp-block-list"><li>On commence par <span>réaliser une <strong>pâte brisée</strong></span></li><li>puis, on r<span>éalise une <strong>compote</strong> (<strong>marmelade</strong>)</span></li><li>ensuite, on <span><strong>fonce la tarte</strong></span></li><li>Et on g<span>arnit la tarte</span></li><li>Et enfin, on <span><strong>lustre</strong> la tarte</span></li></ul>
	
	
	
	<p><span>Si c’est votre première visite de ce blog, sachez qu’il regroupe l’essentiel de ce qu’il faut savoir pour <strong>apprendre la cuisine</strong> de bases avec un contenu gratuit et de qualité. Vous pouvez découvrir par exemple <a href="https://cuisinedebase.com/les-25-recettes-a-maitriser-pour-obtenir-son-cap-cuisine/">les 25 recettes à maitriser</a> pour passer le <a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/">CAP cuisine en candidat libre</a> et le <a href="https://cuisinedebase.com/programme-dentrainement-et-dorganisation-pour-prparer-le-cap/">planning détaillé</a> pour les travailler.</span></p>
	
	
	
	<h2 className="sous_titre">Fiche technique de la tarte aux pommes</h2>
	
	
	
	<p><span>Voici la fiche technique de réalisation de la <strong>tarte aux pommes</strong>.</span></p>
	
	
	<div className="post-image">
	<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/tarte-aux-pommes_thumb1.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/tarte-aux-pommes_thumb1_thumb.png" alt="tarte-aux-pommes_thumb1" title="tarte-aux-pommes_thumb1"></img></a></figure>
	</div>
	
	
	
	<span>Consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dico culinaire</a> pour comprendre certains mots techniques</span>
	
	
	
	<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre.</span></a></p>
	
	
	
	<p><span>Consultez le décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a><span>.</span></p>
	
	</div></article>,

	titre: "Fiche technique et recette de la tarte aux pommes",

	route: "/article/tarte-aux-pommes",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/tarte-aux-pommes_thumb1_thumb.png",

	lien: "https://cuisinedebase.com/tarte-aux-pommes/"

}

const J4 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Tartes feuilletées aux fruits rouges. Fiche technique et recette</h1>
	
	<p>Les <strong>tartes feuilletées aux fruits rouges</strong> sont fabriquées à partir de <strong>pâte feuilletée</strong>. Ensuite elles sont coupées en forme rectangulaire. On garnit les <strong>tartelettes aux fruits rouges </strong>d’une <strong>crème pâtissière</strong> et des fruits frais.</p>


<h2 className="sous_titre">Techniques de bases pour faire des tartes feuilletées</h2>



<p><span>Pour réussir les <span><strong>tartes feuilletées</strong></span> aux fruits, il faut travailler les <strong>techniques de base</strong> suivantes:</span></p>



<ul className="wp-block-list"><li><span>Réaliser une <strong>pâte feuilletée</strong></span></li><li><span>Réaliser une <strong>crème pâtissière</strong></span>&nbsp;</li><li><span>Réaliser un <strong>sirop</strong></span></li><li><span>Couper des <strong>tartes en bandes</strong></span></li><li><span><strong>Garnir</strong> la tarte</span></li><li><span><strong>Lustrer</strong> la tarte</span></li></ul>



<p><span>Si c’est votre première visite de ce blog, sachez qu’il regroupe l’essentiel de ce qu’il faut savoir pour apprendre la cuisine de bases avec un contenu gratuit et de qualité. Vous pouvez découvrir par exemple <a href="https://cuisinedebase.com/les-25-recettes-a-maitriser-pour-obtenir-son-cap-cuisine/">les 25 recettes à maitriser</a> pour passer le <a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/">CAP cuisine en candidat libre</a> et le <a href="https://cuisinedebase.com/programme-dentrainement-et-dorganisation-pour-prparer-le-cap/">planning détaillé</a> pour les travailler.</span></p>



<h2 className="sous_titre">Fiche technique des tartes feuilletés aux fruits</h2>



<p><span>Voici la <strong>fiche technique</strong> de réalisation des <strong>tartes feuilletées</strong> aux fruits rouges</span></p>



<h2 className="sous_titre">Denrées utiles pour la pâte feuilletée</h2>



<ul className="wp-block-list"><li>250 g de Farine</li><li>5 g Sel fin</li><li>200 g de Beurre</li><li>125 g d’Eau</li><li>125 g de Farine pour tourer</li></ul>



<h2 className="sous_titre">Crème pâtissière</h2>



<ul className="wp-block-list"><li>300 ml de Lait</li><li>3 Œufs (jaunes)</li><li>100 g de Sucre semoule</li><li>40 g de Farine</li><li>½ gousse de Vanille</li></ul>



<h2 className="sous_titre">Garniture pour tartes feuilletées aux fruits</h2>



<ul className="wp-block-list"><li>800 g de Cocktail de fruits rouges</li></ul>



<h2 className="sous_titre">Sirop</h2>



<ul className="wp-block-list"><li>800 ml d’Eau</li><li>600 g de Sucre semoule</li><li>50 g de Citron</li><li>½ gousse de Vanille</li></ul>



<h2 className="sous_titre">Finition</h2>



<ul className="wp-block-list"><li>140 g de Nappage rouge</li><li>Un œuf pour la dorure</li></ul>



<h2 className="soys_titre">Technique de réalisation des tartes feuilletées</h2>



<p><strong>Mettre en place le poste de travail</strong></p>



<h2 className="sous_titre">Réaliser la pâte feuilletée</h2>



<ul className="wp-block-list"><li>Mettre la farine en fontaine et lui incorporer progressivement l’eau, le sel et 20g de beurre fondu sans pétrir.</li><li>Rassembler en boule, fariner et inciser sur le dessus.</li><li>L’envelopper dans un film alimentaire et la réserver au frais.</li><li>Assouplir le beurre à l’aide d’un rouleau et lui donner une forme carrée.</li><li>Abaisser le pâton, puis envelopper le beurre avec. Abaisser de nouveau pour obtenir un rectangle d’environ 45 cm de longueur et 15 cm de largeur.</li><li>Plier le pâton en trois, le déplacer d’un quart de tour puis abaisser de nouveau de la forme d’un rectangle et replier en trois.</li><li>Envelopper le pâton et le réserver au frais pendant une trentaine de minutes.</li><li>Abaisser, plier, tourner d’un quart de tour et abaisser de nouveau et replier et réserver au frais pendant une trentaine de minutes puis donner les deux derniers tours</li></ul>



<h2 className="sous_titre">Réaliser le sirop pour tartes feuilletées </h2>



<ul className="wp-block-list"><li>Porter à ébullition l’eau, le sucre, les zestes de citron et la demi gousse de vanille coupée en 2 suivant la longueur</li></ul>



<p><strong>Préparer les fruits rouges</strong></p>



<h2 className="sous_titre">Réaliser la crème pâtissière</h2>



<ul className="wp-block-list"><li>Mettre le lait à bouillir avec la vanille</li><li>Clarifier les œufs et blanchir les jaunes avec le sucre.</li><li>Ajouter la farine tamisée.</li><li>Verser progressivement une partie du lait puis mélanger.</li><li>Verser le mélange dans le reste du lait et remettre sur le feu en remuant sans arrêt jusqu’à épaississement du mélange.</li></ul>



<p><strong>Dresser</strong>&nbsp;les <strong>tartes feuilletées aux fruits rouges&nbsp;</strong></p>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/tarte-aux-fruits-sur-pte-feuillete-2.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/tarte-aux-fruits-sur-pte-feuillete_thumb-2.png" alt="tarte aux fruits sur pâte feuilletée" title="tarte aux fruits sur pâte feuilletée"></img></a><figcaption>Fiche technique Tartes aux fruits pâte feuilletée</figcaption></figure></div>


<span>Consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dico culinaire</a> pour comprendre certains mots techniques</span>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre.</span></a></p>



<p><span>Consultez le décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a><span>.</span></p>
	
	</div></article>,

	titre: "Tartes feuilletées aux fruits rouges. Fiche technique et recette",

	route: "/article/tartes-feuilletees-fruits-rouges-fiche-technique-recette",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/tarte-aux-fruits-sur-pte-feuillete_thumb-2.png",

	lien: "https://cuisinedebase.com/tartes-feuilletees-fruits-rouges-fiche-technique-recette/"

}


const J5 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Comment faire la fiche technique des Œufs à la neige</h1>
	
	<p>Les <strong>œufs à la neige</strong> est un dessert qui se fait à partir de blancs d’œufs montés en neige puis pochés dans du lait bouilli. On peut aussi utiliser l’eau pour pocher les oeufs. La<strong> meringue ordinaire</strong> ainsi obtenue peut être servie avec une <strong>crème anglaise</strong> parfumée à la <strong>vanille</strong>.</p>



<h2 className="sous_titre">Techniques de base</h2>



<p><span>Pour réussir la recette d’<strong>œuf à la neige</strong> il faut travailler les <strong>techniques de base</strong> suivantes:</span></p>



<ul className="wp-block-list"><li><strong><span>Réaliser une meringue ordinaire</span> </strong></li><li><strong><span>monter des blancs d’œuf en neige</span> </strong></li><li><strong><span>Façonner en forme d’œufs avec 2 cuillères</span> </strong></li><li><strong><span>Réaliser une crème anglaise</span> </strong></li><li><strong><span>Clarifier des œufs</span> </strong></li><li><span><strong>Blanchir les jaunes d’œufs</strong></span></li></ul>



<p><span>Découvrez le <a href="https://cuisinedebase.com/programme-dentrainement-et-dorganisation-pour-prparer-le-cap/">programme d’entrainement</a> qui permet de travailler les techniques de base.</span></p>



<h2 className="sous_titre">Fiche technique des oeufs à la neige</h2>



<p><span>Voici la <strong>fiche technique</strong> de réalisation de ce dessert</span></p>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/04/oeufs-a-la-neige-1.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/04/oeufs-a-la-neige_thumb-1.png" alt="oeufs-a-la-neige" title="oeufs-a-la-neige"></img></a></figure></div>


<div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
<div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<figure className="wp-block-table is-style-stripes"><table><tbody><tr><td><strong>Denrées Utiles</strong></td></tr><tr><td><strong><u>Meringue</u></strong> </td></tr><tr><td>Œufs (blancs) ! pièce</td></tr><tr><td>Sel, à ne pas oublier</td></tr><tr><td>sucre semoule. 500 g.</td></tr><tr><td><strong><u>Crème anglaise</u></strong></td></tr><tr><td>Lait 500 ml</td></tr><tr><td>Œufs (jaunes). 4 pièces</td></tr><tr><td>sucre semoule. 100 g</td></tr><tr><td>Vanille. 1/2 gousse.</td></tr></tbody></table><figcaption>Tableau des denrées utiles</figcaption></figure>



<figure className="wp-block-table"><table><tbody><tr><td><strong>Mettre en place le poste de travail</strong></td><td></td></tr><tr><td><strong>Confectionner la meringue&nbsp;</strong></td><td></td></tr><tr><td>●&nbsp;&nbsp;Monter les blancs d’œufs avec une pincée de sel.●&nbsp;&nbsp;Les serrer en fin de montage avec 167g de sucre semoule●&nbsp;&nbsp;En fin du montage, incorporer délicatement le reste du sucre à l’aide d’une écumoire</td><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td><strong>Cuire la meringue ordinaire</strong></td><td></td></tr><tr><td>●&nbsp;&nbsp;Faire bouillir le lait avec un peu de sucre●&nbsp;&nbsp;Façonner les meringues en forme d’œuf à l’aide de 2 cuillères●&nbsp;&nbsp;Pocher les meringues dans le lait durant 1 minute de chaque côté</td><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td><strong>Réaliser la crème anglaise</strong></td><td></td></tr><tr><td>●&nbsp;&nbsp;Passer le lait au chinois étamine●&nbsp;&nbsp;Compléter la quantité de lait et le refaire bouillir avec la demi gousse de vanille●&nbsp;&nbsp;Blanchir les jaunes d’œufs et le sucre●&nbsp;&nbsp;Verser progressivement le lait sur les œufs et mélanger●&nbsp;&nbsp;Remettre le mélange à cuire sur un feu doux en remuant continuellement●&nbsp;&nbsp;Tamiser la crème et la refroidir rapidement</td><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td><strong>Dresser</strong></td><td></td></tr><tr><td>●&nbsp;&nbsp;Emplir à moitié le récipient de service avec la crème anglaise●&nbsp;&nbsp;Disposer délicatement les œufs à la neige</td><td></td></tr><tr><td></td></tr><tr><td></td></tr></tbody></table></figure>
</div>
</div>



<p><span>Consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dico culinaire</a> pour comprendre certains mots techniques</span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre.</span></a></p>



<p><span>Consultez le décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a><span>.</span></p>
	
	</div></article>,

	titre: "Comment faire la fiche technique des Œufs à la neige",

	route: "/article/fiche-technique-recette-oeufs-neige",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/04/oeufs-a-la-neige_thumb-1.png",

	lien: "https://cuisinedebase.com/fiche-technique-recette-oeufs-neige/"

}


const J6 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Recette facile du Gigot de 7 heures</h1>
	
	<p>La <strong>recette</strong> <strong>gigot de 7 heure</strong> est souvent réalisée avec des <strong>gigots d’agneaux</strong>. Les gigots sont cuits doucement et pendant 7 heures. la viande est <strong>aromatisée</strong> avec une <strong>garniture</strong> à base <strong>d’ail et des herbes aromatiques</strong>.</p>



<p><span>Les gigots sont très fondants et tellement bon!</span></p>



<h2 className="sous_titre">Les techniques de base pour faire ce plat</h2>



<p><span>Les techniques de base à apprendre pour réaliser le <strong>gigot 7 heures</strong> sont</span></p>



<ul className="wp-block-list"><li><span>Parer le gigot</span></li><li><span><strong>Ficeler le gigot</strong></span></li><li><span>Réaliser un <strong>fond blanc</strong> </span></li></ul>



<h2 className="sous_titre">La fiche technique du gigot de sept heures</h2>



<p><span>Voici la fiche technique de fabrication du <strong>gigot de 7 heures :</strong></span></p>



<h2 className="sous_titre">Denrées utiles :</h2>



<ul className="wp-block-list"><li>2 gigots d’agneau (2,8 kg)</li><li>500 ml de fond blanc</li></ul>



<h2 className="sous_titre">Garniture aromatique :</h2>



<ul className="wp-block-list"><li>200 g d’oignons ;</li><li>200 g de carottes ;</li><li>50 g d’ail ;</li><li>20 ml d’huile d’olive ;</li><li>1 bouquet garni ;</li><li>des grains de poivre noir ;</li><li>Et du gros sel.</li></ul>



<p>Du sel et du poivre pour l’assaisonnement.</p>



<h2 className="sous_titre">Technique de réalisation du gigot</h2>



<ol className="wp-block-list"><li>Mettre en place le plan de travail ;</li><li>Marquer un fond blanc ;</li><li>Préparer la garniture aromatique ;</li><li>Préparer les gigots : Les parer et les ficeler pour maintenir la viande durant la cuisson.</li><li><strong>Marquer les gigots</strong> en cuisson. <ul><li>Assaisonner les gigots ;</li><li>Faire dorer les gigots de chaque côté dans une cocotte ;</li><li>Ajouter la garniture ;</li><li>Laisser cuire pendant 3 minutes en retournant les gigots ;</li><li>Mouiller avec le fond blanc et placer dans le four préchauffé à 120°C. Puis laisser cuire pendant environ 7 heures</li></ul></li><li><strong>Découper les gigots</strong> en tranches puis dresser.</li></ol>


<div className="post-image">
<figure className="post-image"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Gigot-7-heures_thumb.png" alt="Gigot-7-heures" title="Gigot-7-heures"></img></figure>
</div>


<span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre.</span></a>



<p><span>Consultez le décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a><span>.</span></p>
	
	</div></article>,

	titre: "Recette facile du Gigot de 7 heures",

	route: "/article/gigot-de-7-heures",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Gigot-7-heures_thumb.png",

	lien: "https://cuisinedebase.com/gigot-de-7-heures/"

}

const J7 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique et recette de la Crème renversée au caramel</h1>
	
	<p>La <strong>crème renversée au caramel</strong> est tout simplement une crème prise sucrée (à base de lait, œufs et sucre). La crème est cuite dans des moules caramélisés et elle est servie renversée dans le plat.</p>



<h2 className="sous_titre">Techniques de base</h2>



<p><span>Les techniques à maîtriser pour réussir la crème renversée au caramel sont:</span></p>



<ul className="wp-block-list"><li><strong>Blanchir</strong>&nbsp;des œufs</li><li>Confectionner un appareil à&nbsp;<strong>crème brûlée</strong></li><li><span><span>Confectionner un caramel</span></span></li><li><span><span>Confectionner un <strong>appareil à crème prise</strong></span></span></li><li><strong>Chemiser&nbsp;</strong>avec le<strong>&nbsp;caramel</strong></li></ul>



<h2 className="sous_titre">Fiche technique de la crème renversée</h2>



<p>Voici la fiche technique de fabrication de la <span><span><strong>crème renversée au caramel</strong></span></span> :</p>



<h2 className="sous_titre">denrées utiles :</h2>



<ul className="wp-block-list"><li>1 litre de lait ;</li><li>6 oeufs ;</li><li>200 g de sucre semoule ;</li><li>Une demi gousse de vanille.</li></ul>



<p>Et pour confectionner le caramel :</p>



<ul className="wp-block-list"><li>140 g de sucre semoule ;</li><li>47 ml d’eau.</li></ul>



<h2 className="sous_titre">Techniques de réalisation de la crème renversée au caramel</h2>



<p><strong>Mettre en place le poste de travail</strong></p>



<p><strong>Confectionner le caramel</strong></p>



<ul className="wp-block-list"><li>Porter à ébullition l’eau et le sucre. Arrêter la cuisson dès obtention d’une teinte brune.</li><li>Dès que la température du caramel atteint 160°C, réduire le feu et surveiller la coloration.</li></ul>



<p><strong>Chemiser les moules avec le caramel</strong></p>



<p><strong>Confectionner l’appareil à crème prise</strong></p>



<ul className="wp-block-list"><li>Mettre le lait à bouillir avec la demi gousse de vanille coupée en 2.</li><li>Blanchir les œufs avec le sucre.</li><li>Verser le lait bouillant sur les œufs. (Progressivement et en remuant)</li></ul>



<p><strong>Marquer les crèmes en cuisson</strong></p>



<ul className="wp-block-list"><li>Verser l’appareil dans des moules caramélisés</li><li>Cuire les crèmes au bain-marie et au four à 180°C pendant 35 minutes.</li><li>Réserver au frais</li></ul>



<p><strong>Dresser</strong></p>



<p>Renverser la crème dans le plat de service.</p>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/creme-caramel-renversee.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/creme-caramel-renversee_thumb.png" alt="creme-caramel-renversee" title="creme-caramel-renversee"></img></a></figure>
</div>


Voici une <strong>astuce</strong> pour réussir la <span><span><strong>crème renversée au caramel</strong></span></span>. <em>À l’étape de la confection de l’appareil à crème, pour éviter une coagulation des œufs, verser le lait progressivement</em>



<p><span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span></p>



<p><span>Cliquez ici pour découvrir <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a>.</span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre.</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a>.</p>

	</div></article>,

	titre: "Fiche technique et recette de la Crème renversée au caramel",

	route: "/article/creme-renversee-au-caramel/",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/creme-caramel-renversee_thumb.png",

	lien: "https://cuisinedebase.com/creme-renversee-au-caramel/"

}

const J8 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">La fiche technique des Escalopes de volaille sautées</h1>
	
	<p>Dans cet article vous allez découvrir la recette ainsi que la fiche technique des <strong>escalopes de volaille</strong> sautées. Le type de volaille peut être soit le poulet ou la dinde. après avoir levé les escalope, ces dernières sont panées à l’anglaise puis sautées.</p>



<h2 className="sous_titre">Paner à l’anglaise les escalopes de volaille</h2>



<p><span><span>Pour <strong>paner les escalopes</strong>, on les passe successivement dans de la <strong>farine</strong>. Puis dans un mélange d’œufs entiers et d’huile assaisonné de sel et de poivre. Et enfin on les couvre avec de la mie de pain tamisé.</span></span></p>



<h2 className="sous_titre">Technique de base pour faire des escalopes de volaille</h2>



<p><span>Les techniques de base à maîtriser pour réussir les escalopes de volaille sautées sont:</span></p>



<ul className="wp-block-list"><li><span><span><strong>Parer les escalopes</strong></span></span></li><li><span><span>Préparer une <strong>panure à l’anglaise</strong></span></span></li><li><span><span><strong>Sauter</strong> les escalopes</span></span></li></ul>



<h2 className="sous_titre">Fiche technique des escalopes de poulet sautées</h2>



<p>Voici la fiche technique de fabrication des escalopes de poulets sautées:</p>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Escalope-poulet-volaille-dinde.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Escalope-poulet-volaille-dinde_thumb.png" alt="Escalope-poulet-volaille-dinde" title="Escalope-poulet-volaille-dinde"></img></a></figure>
</div>


<span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span>



<p><span>Cliquez ici pour découvrir <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a></span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"></a><span>épreuves pratiques</span></p>
	
	</div></article>,

	titre: "La fiche technique des Escalopes de volaille sautées",

	route: "/article/escalopes-de-volaille-sautees",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Escalope-poulet-volaille-dinde_thumb.png",

	lien: "https://cuisinedebase.com/escalopes-de-volaille-sautees/"

}

const J9 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">La fiche technique et recette pour faire un bon poulet rôti</h1>
	
	<p>Dans cet article vous allez découvrir une <span>méthode très simple</span> et qui marche à tous les coups pour faire un <strong>poulet rôti délicieux</strong>. <span>Le poulet est cuit au four pendant une cinquantaine de minutes.</span></p>


<div className="post-image">
<figure className="aligncenter size-medium is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg" alt="Gros poulet bien rôti dans son récipient de cuisson" className="wp-image-2462" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=1536%2C1536&amp;ssl=1 1536w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?w=2048&amp;ssl=1 2048w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=600%2C600&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?resize=90%2C90&amp;ssl=1 90w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg?w=1820&amp;ssl=1 1820w" sizes="(max-width: 300px) 100vw, 300px"></img><figcaption className="wp-element-caption">Poulet roti</figcaption></figure></div>


<h2 className="sous_titre">Comment accompagner le poulet rôti</h2>


<p>On peut utiliser plusieurs accompagnement pour le <strong>poulet rôti</strong>. Voici quelques <span>suggestions d’accompagnement: Le poulet peut être servis par exemple avec des </span>:</p>



<ul className="wp-block-list">
<li><span><strong>frittes allumettes</strong></span> ;</li>


<li><span>du <strong>riz pilaf</strong></span> ;</li>



<li>ou encore <span>des légumes cuits à la grec..</span></li>
</ul>



<h2 className="sous_titre">Les techniques de base de poulet rôti</h2>



<p>Voici quelques <span>techniques à maîtriser pour réussir la <strong>cuisson de poulets rôtis </strong>sont:</span></p>



<ul className="wp-block-list">
<li><span><strong>Habiller un poulet</strong></span> ;</li>



<li><span>Rôtir le poulet</span>.</li>
</ul>



<h2 className="sous_titre">Fiche technique de fabrication de poulets rôtis</h2>



<p>Voici la <strong>fiche technique de fabrication</strong> pour <strong>rôtir des poulets</strong>:</p>



<h2 className="sous_titre">Eléments de base pour 8 personnes :</h2>



<ul className="wp-block-list">
<li>2 poulets fermiers de 1 kg 400 chacun ;</li>



<li>80 g de beurre ;</li>



<li>Du sel et du poivre pour l’assaisonnement.</li>
</ul>



<h2 className="sous_titre">Technique de réalisation :</h2>



<ul className="wp-block-list">
<li>Mettre en place le <strong>poste de travail</strong> ;</li>



<li><strong>Habiller</strong> les poulets ;</li>



<li><strong>Assaisonner</strong> les poulets à l’intérieur et à l’extérieur ;</li>



<li>Placer les<strong> poulets avec les abattis</strong> sur la plaque à rôtir et badigeonner de beurre ;</li>



<li><strong>Cuire dans le four à 200°C</strong> pendant 55 minutes (20 minutes sur chaque côté et 15 minutes sur le dos) ;</li>



<li>Arroser fréquemment en fin de cuisson ;</li>



<li>Dresser les <strong>poulets rôtis</strong>.</li>
</ul>



<p><span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span></p>



<p>N’hésitez pas à rester un peu plus longtemps sur le blog. Vous trouverez une mine d’informations pour apprendre facilement les bases de la cuisine et obtenir des conseils pratiques pour préparer le <strong><a href="https://cuisinedebase.com/cles-succes-pour-reussir-cap-cuisine-candidat-libre/">CAP Cuisine en candidat libre</a></strong>. </p>



<p>Explorez nos articles riches en astuces culinaires et en techniques fondamentales qui vous aideront à perfectionner vos compétences en cuisine. Restez avec nous, partagez nos contenus avec vos proches et n’hésitez pas à laisser vos commentaires pour nous faire part de vos impressions. </p>



<p>Rejoignez-nous dans cette aventure culinaire et découvrez le plaisir de cuisiner avec confiance et expertise !.</p>

	</div></article>,

	titre: "La fiche technique et recette pour faire un bon poulet rôti",

	route: "/article/fiche-technique-recette-poulet-roti",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/06/Poulet-roti-1.jpeg",

	lien: "https://cuisinedebase.com/fiche-technique-recette-poulet-roti/"

}

const J10 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique de fabrication de steak sautés sauce poivre</h1>
	
	<p>Le <strong>steak sauté sauce poivre </strong>se fait de la manière suivante : on imprègne le steak de grains de poivre concassés (panné à la mignonnette), puis on le fait sauter à l’a point souhaité avec du beurre et de l’huile.</p>


<p><span>le <span><strong>steak sauté sauce poivre </strong></span> est ensuite nappé avec une sauce faite à partir des <strong>sucs de cuisson glacé</strong> avec un <strong>fond brun</strong> et lié avec de la <strong>crème</strong>.</span></p>



<h2 className="sous_titre">Technique de base steak sauté sauce poivre</h2>



<p><span>Les techniques à maîtriser pour réussir la le steak poivre sont:</span></p>



<ul className="wp-block-list"><li><span>Faire un <strong>fond brun</strong></span></li><li><span><strong>Paner à la mignonnette</strong> </span></li><li><span>Sauter des steaks</span></li><li><span>Faire une <strong>sauce poivre</strong></span></li></ul>



<h2 className="sous_titre">Fiche technique de steak sauté avec sauce poivre</h2>



<p>Voici la fiche technique de fabrication de steak poivre :</p>



<h2 className="sous_titre">Eléments de base pour 8 couverts</h2>



<ul className="wp-block-list"><li>1,2kg de contre filets (8 pièces de 150 g)</li><li>80 g de poivre en grain</li><li>40 ml d’huile</li><li>40 g de beurre</li></ul>



<h2 className="sous_titre">Sauce poivre</h2>



<ul className="wp-block-list"><li>Un demi litre de fond brun</li><li>100 ml de crème double</li><li>200 g de beurre</li></ul>



<h2 className="sous_titre">Technique de réalisation</h2>



<p>on commence par préparer le post de travail. Puis on prépare la viande, on concasse les grains de poivre et on pane les steak avec les grains. Ensuite on assaisonne de sel puis on fait sauter les steaks avec du beurre et de l’huile.</p>



<p>L’étape suivante consiste à fabriquer la sauce poivre. On commence par dégraisser le sautoir, puis on déglace avec une louche de fond brunet on laisse cuire un petit moment. On ajoute ensuite le reste du fond et laisse réduire. Et enfin on ajoute la crème et on laisse réduire jusqu’à la consistance souhaitée.</p>



<p>L’étape de dressage se fait en nappant uniformément les steaks avec la sauce.</p>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/steak-sauce-poivre.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/steak-sauce-poivre_thumb.png" alt="steak-sauce-poivre" title="steak-sauce-poivre"></img></a><figcaption><span><strong>steak sauté sauce poivre </strong></span></figcaption></figure></div>


<span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span>



<p><span>Cliquez ici pour découvrir <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a></span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"></a><span>épreuves pratiques</span></p>

	</div></article>,

	titre: "Fiche technique de fabrication de steak sautés sauce poivre",

	route: "/article/steak-sautes-avec-sauce-poivre",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/steak-sauce-poivre_thumb.png",

	lien: "https://cuisinedebase.com/steak-sautes-avec-sauce-poivre/"

}

const J11 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique et recette de la Blanquette de veau</h1>

	<div className="post-image">
	<a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/blanquette-veau-1.jpg"><img decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/blanquette-veau-1_thumb.jpg" alt="blanquette-veau-1" title="blanquette-veau-1"></img></a>		
	</div>

	<p>On réalise <span>La <strong>blanquette de veau</strong> avec du <strong>veau</strong>, du <strong>poulet</strong> ou de <strong>l’agneau</strong>. C’est des morceaux de <strong>viande sans os</strong>, pochés puis cuits dans un <strong>fond blanc</strong> avec leurs <strong>garnitures</strong> <strong>aromatiques</strong>. Le fond blanc est ensuite utilisé pour confectionner un <strong>velouté onctueux</strong> lié avec de la <strong>crème</strong> et des <strong>jaunes d’œufs</strong>.</span></p>



<h2 className="sous_titre">Techniques de base de la blanquette de veau</h2>



<p><span>Les <strong>techniques à maîtriser</strong> pour réussir la <strong>blanquette de veau</strong> sont:</span></p>



<ul className="wp-block-list"><li><span><strong>Parer et dégraisser</strong> des morceaux de viande</span></li><li><span>Faire un <strong>fond blanc</strong></span></li><li><span>Faire un <strong>roux blanc</strong></span></li><li><span>Faire un <strong>velouté lié à la crème</strong> et aux <strong>jaunes d’œufs</strong> </span></li></ul>



<p><iframe src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&amp;OneJS=1&amp;Operation=GetAdHtml&amp;MarketPlace=FR&amp;source=ac&amp;ref=qf_sp_asin_til&amp;ad_type=product_link&amp;tracking_id=yhiicham-21&amp;marketplace=amazon&amp;region=FR&amp;placement=B01HBGRA6M&amp;asins=B01HBGRA6M&amp;linkId=ba51fed6348336dd2e0e44d61e7e7bae&amp;show_border=false&amp;link_opens_in_new_window=false&amp;price_color=333333&amp;title_color=0066c0&amp;bg_color=ffffff">     </iframe></p>



<h2 className="sous_titre">Fiche technique de fabrication</h2>



<p>Voici la fiche technique de fabrication de la <strong>blanquette. Il est possible de la faire avec de la volaille, blanquette de poulet par exemple, ou avec de l’agneau, blanquette d’agneau dans ce cas. ou bien sur avec du veau.</strong></p>



<h2 className="sous_titre">Eléments de base :</h2>



<ul className="wp-block-list"><li>1 kg 600 de morceaux de veau sans os (épaule)</li><li>200 g de carottes</li><li>200 g d’oignons</li><li>100 g de céleri en branche</li><li>Et 200 g de blancs de poireaux</li></ul>



<p>Et pour le <strong>velouté</strong> :</p>



<ul className="wp-block-list"><li>60 g de beurre</li><li>60 g de farine</li><li>200 g de crème épaisse</li><li>2 jaunes d’oeufs</li><li>1 litre de fond blanc</li></ul>



<p>Et sel et poivre pour l’assaisonnement.</p>



<p>Pour les technique de réalisation, référez vous à la fiche technique ci dessous.</p>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Blanquette-de-veau.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Blanquette-de-veau_thumb.png" alt="Blanquette-de-veau" title="Blanquette-de-veau"></img></a></figure>
</div>


<span>Si vous ne comprenez pas certains mots dans la <strong>fiche technique</strong>, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span>

	</div></article>,

	titre: "Fiche technique et recette de la Blanquette de veau",

	route: "/article/blanquette-de-veau",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/blanquette-veau-1_thumb.jpg",

	lien: "https://cuisinedebase.com/blanquette-de-veau/"

}

const J12 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique de goujonnettes de poisson. Recette avec la sole</h1>

	<p>Pour faire des <strong>goujonnettes de poisson</strong>, il faut préparer des filets de poisson coupés en lanières. En effet, des morceaux de forme rectangulaire de 2 centimètres de largeur et 8 cm de longueur.</p>



<p><span>Avant de les frire dans un bain d’huile de friture chauffée à 180°C, les <strong>goujonnettes de poisson</strong> sont <strong>panées à l’anglaise</strong> : passées successivement dans de la farine, un mélange d’œufs entiers et d’huile assaisonné de sel et de poivre puis dans la mie de pain tamisé.</span></p>



<h2 className="sous_titre">Techniques de base pour <strong>goujonnettes de poisson</strong></h2>



<p><span>Les techniques à maîtriser pour réussir les <strong>goujonnettes de sole</strong> sont:</span></p>



<ul className="wp-block-list"><li><span>Habiller les soles</span></li><li><span>lever les filets de soles</span></li><li><span>paner à l’anglaise</span></li></ul>



<h2 className="sous_titre">Voici la fiche technique de fabrication de goujonnettes de poisson:</h2>



<h2 className="sous_titre">Eléments de base pour 8 personnes</h2>



<ul className="wp-block-list"><li>2 kg 600 de soles (4 poissons de 650 g chacun)</li><li>160 g de farine</li><li>40 ml d’huile</li><li>3 oeufs</li><li>400 g de pain de mie</li><li>de l’huile pour la friture</li><li>du sel et du poivre pour l’assaisonnement</li><li>et du citron et persil frisé pour la décoration.</li></ul>



<h2 className="sous_titre">Technique de réalisation de goujonnettes de poisson</h2>



<ul className="wp-block-list"><li>Mettre en place le poste de travail</li><li>Habiller les soles<ul><li>Arracher les peaux (grise et blanche)</li><li>Lever les filets</li><li>Détailler les goujonnettes (des bâtonnets de 2cm de largeur)</li></ul></li><li>Paner les goujonnettes à l’anglaise. Les passer successivement dans la farine, puis dans un mélange d’oeufs, d’huile de poivre et du sel et enfin dans la mie de pain tamisée.</li><li>Frire les goujonnettes</li><li>Dresser sur une feuille absorbante avec des rondelles de citron et une sauce.</li></ul>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/goujonnettes_sole.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/goujonnettes_sole_thumb.png" alt="goujonnettes_sole" title="goujonnettes_sole"></img></a></figure>
</div>


<span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span>



<p><span>Cliquez ici pour découvrir les <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a></span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a></p>

	</div></article>,

	titre: "Fiche technique de goujonnettes de poisson. Recette avec la sole",

	route: "/article/goujonnettes-de-poisson-fiche-technique-recette",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/goujonnettes_sole_thumb.png",

	lien: "https://cuisinedebase.com/goujonnettes-de-poisson-fiche-technique-recette/"

}

const J13 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique et recette de darnes de poisson pochées</h1>

	<p>Cuire des <strong>darnes de poisson pochées </strong>figure parmi les recettes de base qu’il faut apprendre pour passer le CAP cuisine.</p>


<h2 className="sous_titre">Les darnes de poisson pochées</h2>


<p><span>La<strong> découpe d’un poisson en darnes</strong> c’est tout simplement le découper en rondelles, plus ou moins épaisses selon la <strong>nature et la taille du poisson</strong>. une darne doit peser en général vers les 200g environ. </span></p>



<p><span>Pour <strong>pocher les darnes</strong>, on les positionne dans un récipient de cuisson, on les recouvre d’eau froide et on sale au gros sel. On monte la température progressivement sans atteindre l’ébullition, puis en fini la cuisson pendant quelques minutes à feu très doux.</span></p>



<p><span>Les <strong>darnes de poisson pochées</strong> sont servies avec une sauce comme la sauce au beurre fondu.</span></p>



<p><span>Les techniques à maîtriser pour réussir les <strong>darnes de poisson pochées</strong> sont:</span></p>



<ul className="wp-block-list"><li><span>Habillage de poisson</span></li><li><span>découpe de poisson en darnes</span></li><li><span>ficeler les darnes</span></li><li><span>pocher les darnes de poisson</span></li></ul>



<h2 className="sous_titre">Fiche technique de <strong>darnes de poisson pochées </strong></h2>



<p>Voici la<strong> fiche technique des darnes de colin pochées</strong>:</p>



<h2 className="sous_titre">Eléments de base:</h2>



<ul className="wp-block-list"><li>8 darnes de poisson de 200g chacune</li><li>Un citron</li><li>120 g de gros sel</li><li>Et du persil et citron pour la décoration.</li></ul>



<h2 className="sous_titre">Technique de réalisation des <strong>darnes de poisson pochées</strong></h2>



<ul className="wp-block-list"><li>Mettre en place le poste de travail</li><li>Habiller puis découper le poisson</li><li>Préparer les éléments de finition</li></ul>



<h2 className="sous_titre">Marquer les darnes de colin en cuisson</h2>



<p>On commence par peler et détailler le citron en tranches, puis on positionne les darnes dans le récipient de cuisson et on recouvre d’eau de froide. On ajoute le citron et le gros sel, puis on monte la température de l’eau à un niveau avoisinant l’ébullition puis on baisse le feu. Enfin, on laisse cuire pendant 7 minutes environ sans atteindre l’ébullition.</p>



<p>Puis on dresse les darnes de poissons pochées en les décorant avec du citron et du persil frisé.</p>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/poisson-poche.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/poisson-poche_thumb.png" alt="poisson-poche" title="poisson-poche"></img></a></figure>
</div>


<span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span>



<p><span>Cliquez ici pour découvrir les <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a></span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a></p>

	</div></article>,

	titre: "Fiche technique et recette de darnes de poisson pochées",

	route: "/article/darnes-de-poisson-pochees",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/poisson-poche_thumb.png",

	lien: "https://cuisinedebase.com/darnes-de-poisson-pochees/"

}

const J14 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fricassée de volaille à l’ancienne. La recette de CAP cuisine</h1>

	<p>La <strong>fricassée de volaille à l’ancienne</strong> est une recette ancienne. Elle peut être effectuée avec plusieurs viandes, comme le <strong>poulet</strong>, <strong>veau</strong> ou <strong>agneau</strong>. Les morceaux sont <strong>cuits en ragoût à blanc</strong> dans une <strong>sauce crémée</strong>.</p>


<div className="post-image">
<figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/Fricassee-volaille-edited.jpg?w=334&amp;ssl=1" alt="" className="wp-image-2488" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/Fricassee-volaille-edited.jpg?w=769&amp;ssl=1 769w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/Fricassee-volaille-edited.jpg?resize=225%2C300&amp;ssl=1 225w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/Fricassee-volaille-edited.jpg?resize=768%2C1024&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/Fricassee-volaille-edited.jpg?resize=600%2C801&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/Fricassee-volaille-edited.jpg?resize=45%2C60&amp;ssl=1 45w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/Fricassee-volaille-edited.jpg?resize=67%2C90&amp;ssl=1 67w" sizes="(max-width: 769px) 100vw, 769px"></img><figcaption><span>Fricassée de volaille à l’ancienne</span></figcaption></figure></div>


<h2 className="sous_titre">Technique de base de la fricassée de volaille à l’ancienne</h2>



<p><span>Les techniques à maîtriser pour réussir la fricassée de volaille sont:</span></p>



<ul className="wp-block-list"><li><span><strong>Habillage</strong> et <strong>découpe de poulet</strong></span></li><li><span>Préparation d’un <strong>fond blanc de volaille</strong></span></li><li><span>Escaloper les champignons</span></li><li><span><strong>Glaçage à blanc</strong> des oignons</span></li><li><span>Cuire un <strong>roux blanc</strong></span></li><li><span><strong>Ciseler</strong> les oignons</span></li></ul>



<h2 className="sous_titre">Fiche technique de la fricassée de volaille à l’ancienne</h2>



<p>Voici la <strong>fiche technique</strong> de fabrication de la <strong>fricassée de volaille:</strong></p>



<h2 className="sous_titre"><strong><u>Éléments de base</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>



<ul className="wp-block-list"><li>2,6 kg de Poulets (2 poulets)</li><li>0,08 kg Beurre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li>0,12 kg Oignon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li>0,06 kg de Farine&nbsp;&nbsp;</li><li>1,5 litre de Fond blanc de volaille</li></ul>



<p><strong><u>Finition sauce</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>



<p>0,3 litre de Crème double</p>



<p><strong><u>Garniture</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>



<ul className="wp-block-list"><li>0,25 kg de Champignons</li><li>0,02 kg de Beurre&nbsp;</li><li>0,05 kg de citron</li><li>0,25 kg de Petits oignons</li><li>0,02 kg de Beurre&nbsp;</li><li>Du sucre semoule</li></ul>



<p><strong><u>Assaisonnement&nbsp;</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>



<p>De Sel et Poivre&nbsp;</p>



<h2 className="sous_titre"><strong>Technique de réalisation</strong> de la fricassée de volaille à l’ancienne</h2>



<ol className="wp-block-list"><li><strong>Mettre en place le poste de travail</strong></li><li><strong>Habiller et découper les poulets</strong></li><li><strong>Marquer le fond blanc de volaille</strong></li><li><strong>Préparer la garniture</strong></li></ol>



<ul className="wp-block-list"><li>Escaloper les champignons et les cuire dans une petite quantité d’eau salée avec du beurre</li><li>Glacer à blanc les petits oignons</li></ul>



<h2 className="sous_titre"><strong>Marquer la fricassée en cuisson</strong></h2>



<ul className="wp-block-list"><li>Faire raidir les morceaux de poulets salés et poivrés (côté peau en premier)</li><li>Débarrasser les morceaux de poulets</li><li>Baisser le feu au minimum et ajouter les oignons finement ciselés et un peu de beurre</li><li>Ajouter la farine et cuire le roux blanc (quelques minutes)</li><li>Ajouter le fond blanc et porter à ébullition en mélangeant sans arrêt</li><li>Assaisonner et replacer les morceaux de poulet</li><li>Couvrir et cuire lentement</li></ul>



<p><strong>Terminer la sauce</strong></p>



<ul className="wp-block-list"><li>Ajouter la crème et réduire la sauce</li><li>Vérifier l’onctuosité et l’assaisonnement</li></ul>



<p><strong>Dresser</strong></p>



<ul className="wp-block-list"><li>Passer la sauce au chinois sur les morceaux</li><li>Ajouter les champignons et les petits oignons glacés</li></ul>



<p><span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span></p>



<p><span>Cliquez ici pour découvrir les <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a></span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a></p>

	</div></article>,

	titre: "Fricassée de volaille à l’ancienne. La recette de CAP cuisine",

	route: "/article/fricasse-de-volaille-ancienne",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/Fricassee-volaille-edited.jpg",

	lien: "https://cuisinedebase.com/fricasse-de-volaille-ancienne/"

}

const J15 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Recette Riz Pilaf : La Fiche technique de fabrication</h1>

	<p><span>La </span><strong><span>recette du riz pilaf</span></strong><span> figure parmi les fiches techniques classiques de <strong>l’épreuve du CAP cuisine</strong>. </span>Il est donc indispensable de prendre le temps pour maîtriser la <strong>fiche technique du riz pilaf</strong>.


<div className="post-image">
<figure className="aligncenter size-full"><img data-recalc-dims="1" decoding="async" width="233" height="192" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/04/riz-pilaf-boeuf-carotte_thumb-1.jpg?resize=233%2C192&amp;ssl=1" alt="Recette riz pilaf" className="wp-image-772"></img><figcaption>Recette riz pilaf</figcaption></figure></div>


<span>Vous pouvez consulter l’analyse des <strong><a href="https://cuisinedebase.com/epreuve-cap-cuisine-2021-les-sujets-de-lexamen-pratique/">sujets pratiques de la session 2021</a></strong> pour voir combien de fois la recette du riz pilaf est tombée. Vous pouvez aussi voir les <strong><a href="https://cuisinedebase.com/epreuves-pratiques-de-cap-cuisine-session-2020-candidat-libre/">épreuves de la session 2020</a></strong> ainsi que la <strong><a href="https://cuisinedebase.com/cap-cuisine-session-2019-le-point-sur-les-examens-pratiques-en-3-questions/">session 2019</a></strong>.</span></p>



<h2 className="sous_titre"><strong>Recette riz pilaf</strong></h2>



<p><span>Pourtant, la réalisation d’un riz pilaf n’est pas très compliquée. Il faut nacrer le riz avec des oignons, qu’on a sués préalablement au beurre. Ensuite, on finit la cuisson dans un four à 200°C pendant 18minutes. Pour mouiller le riz, on peut utiliser soit de l’eau chaude ou un fond de volaille, de veau ou autre, selon l’accompagnement souhaité.</span></p>



<p><span>La <strong>recette riz pilaf</strong> peut accompagner beaucoup de plats comme une darne de <strong>poisson pochée</strong>, <strong>côte de bœuf grillée</strong> ou encore des <strong>brochettes de poulet tandori</strong> …</span></p>



<h2 className="sous_titre">Technique de base du riz pilaf</h2>



<p>Les&nbsp;<strong>techniques de base</strong>&nbsp;à maîtriser pour réussir le&nbsp;<strong>riz pilaf&nbsp;</strong>sont:</p>



<ul className="wp-block-list"><li><strong>Ciseler les oignons</strong></li><li>Préparer un&nbsp;<strong>bouquet garni</strong></li><li><strong>Couper&nbsp;</strong>un papier sulfurisé<strong>&nbsp;en forme circulaire</strong></li><li><strong>Nacrer</strong>&nbsp;le riz</li></ul>



<h2 className="sous_titre">Fiche technique riz pilaf</h2>



<p><span>Voici la fiche technique de fabrication du Riz pilaf.</span></p>



<h2 className="sous_titre">Eléments de base</h2>



<ul className="wp-block-list"><li>440 g de Riz&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li>120 g de Beurre&nbsp;</li><li>160 g d’Oignon&nbsp;&nbsp;&nbsp;</li><li>Et un Bouquet garni</li><li>75 cl d’eau ou de fond pour le mouillement</li><li>Et sel poivre pour l’assaisonnement</li></ul>



<h2 className="sous_titre">Technique de réalisation</h2>



<ul className="wp-block-list"><li><strong>Mettre en place le poste de travail</strong></li><li><strong>Préparer les éléments de base</strong><ul><li><strong>Ciseler&nbsp;</strong>les oignons</li><li>Préparer le&nbsp;<strong>bouquet garni</strong></li><li>Couper un&nbsp;<strong>papier sulfurisé</strong>&nbsp;en forme circulaire au même diamètre que le récipient de cuisson</li></ul></li><li><strong>Marquer le riz en cuisson</strong><ul><li><strong>Suer les oignon</strong>s avec les 2/3 du&nbsp;<strong>beurre&nbsp;</strong>(80 g)</li><li>Ajouter le&nbsp;<strong>riz sec</strong>&nbsp;et le faire revenir doucement en le remuant sans arrêt jusqu’à obtention d’une&nbsp;<strong>teinte nacrée</strong>.</li><li>Ajouter l’<strong>eau chaude de mouillement</strong>&nbsp;et&nbsp;<strong>assaisonner</strong></li><li>Couvrir avec le&nbsp;<strong>papier sulfurisé</strong>&nbsp;et un couvercle</li><li>Mettre au four à&nbsp;<strong>200°C pendant 18 minutes</strong></li><li><strong>Sortir&nbsp;</strong>du four et&nbsp;<strong>laisser couvert</strong>&nbsp;pendant 5 minutes</li><li>Incorporer le reste du beurre&nbsp;</li></ul></li></ul>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/riz_pilaf.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/riz_pilaf_thumb.png?w=910&amp;ssl=1" alt="riz_pilaf" title="riz_pilaf"></img></a><figcaption>Recette riz pilaf</figcaption></figure></div>


<span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span>



<p><span>Cliquez ici pour découvrir les <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a></span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a></p>

	</div></article>,

	titre: "Recette Riz Pilaf : La Fiche technique de fabrication",

	route: "/article/fiche-technique-de-fabrication-riz-pilaf",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/04/riz-pilaf-boeuf-carotte_thumb-1.jpg",

	lien: "https://cuisinedebase.com/fiche-technique-de-fabrication-riz-pilaf/"

}

const J16 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique de fabrication et recette d’œufs farcis Chimay</h1>

	<p>Dans cet article vous trouverez la recette ainsi que la fiche technique de fabrication des <strong>œufs farcis chimay</strong>.</p>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/oeuf-farci-chimay-2.jpg?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/oeuf-farci-chimay-2_thumb.jpg?w=910&amp;ssl=1" alt="oeuf-farci-chimay" title="oeuf-farci-chimay"></img></a><figcaption><span>œufs farcis gratinés</span></figcaption></figure></div>


Pour préparer la recette <span><strong>œufs chimay</strong></span>, on cuit des oeufs durs. Puis on garnit les blancs avec une farce à base de Duxelles de champignon liée avec un peu de béchamel, et gratinés avec une sauce Mornay et gruyère.



<h2 className="sous_titre">Les technique de base des oeufs farcis gratinés</h2>



<p><span>Pour réussir les <strong>œufs chimay</strong>, il faut travailler les techniques de base suivantes:</span></p>



<ul className="wp-block-list"><li><span>Durcir des œufs</span></li><li><span>Faire une <strong>duxelles</strong> sèche</span></li><li><span>Réaliser une <strong>béchamel</strong></span></li><li><span>Réaliser une <strong>sauce Mornay</strong></span></li></ul>



<h2 className="sous_titre">Fiche technique de fabrication des oeufs Chimay</h2>



<p><span>Voici la fiche technique de fabrication des <strong>œufs farcis Chimay</strong>:</span></p>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/oeufs-farcis-chimay.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/oeufs-farcis-chimay_thumb.png" alt="oeufs-farcis-chimay" title="oeufs-farcis-chimay"></img></a></figure></div>



<span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span>



<p><span>Cliquez ici pour découvrir les <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a></span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span>CAP cuisine en candidat libre</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span>épreuves écrites</span></a><span> et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span>épreuves pratiques</span></a></p>

	</div></article>,

	titre: "Fiche technique de fabrication et recette d’œufs farcis Chimay",

	route: "/article/fiche-technique-fabrication-recette-oeufs-farcis-chimay",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/oeuf-farci-chimay-2_thumb.jpg?w=910&ssl=1",

	lien: "https://cuisinedebase.com/fiche-technique-fabrication-recette-oeufs-farcis-chimay/"

}

const J17 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique de fabrication du Navarin aux pommes</h1>

	<p>Le <strong>Navarin aux pommes</strong> est un ragout dont les éléments de base sont une épaule d’agneau parée et désossée cuite lentement dans une sauce de concentré de tomate aromatisée à l’ail et à un bouquet garni. Les éléments d’accompagnement sont des pommes de terre tournées cuites également dans la même sauce et des petits oignions glacés.</p>



<p><span>pour réussir le <strong>navarin aux pommes</strong>, il faut travailler les techniques de base suivantes:</span></p>



<ul className="wp-block-list"><li><span>Désosser la viande</span></li><li><span>Faire un bouquet garni</span></li><li><span>Rissoler la viande</span></li><li><span>Singer et torréfier</span></li><li><span>Tourner les pommes de terre</span></li></ul>



<h2 className="sous_titre">Fiche technique du navarin aux pommes</h2>



<p>Voici la fiche technique de fabrication du <strong>Navarin aux pommes</strong>:</p>



<p><strong><u>Éléments de base</u></strong></p>



<ul className="wp-block-list"><li>1.6 kg d’Épaule d’Agneau désossée</li><li>80 ml d’Huile</li><li>60 g de Farine</li><li>40 g. de Tomate concentrée</li><li>200 g de Carottes&nbsp;</li><li>200 g d’Oignons</li><li>30 g d’Ail&nbsp;</li><li>Un Bouquet garni</li></ul>



<p><strong><u>Garniture</u></strong></p>



<ul className="wp-block-list"><li>250 g de Petits oignons</li><li>1,6 kg de Pomme de terre</li><li>20 g de Beurre</li><li>Du Sucre semoule</li></ul>



<p><strong><u>Décor</u></strong></p>



<ul className="wp-block-list"><li>20 g de Persil</li></ul>



<p><strong><u>Assaisonnement</u></strong></p>



<ul className="wp-block-list"><li>Du sel et du poivre</li></ul>



<h2 className="sous_titre">Technique de réalisation du navarin</h2>



<p><strong>Mettre en place le poste de travail</strong></p>



<p><strong>Préparer et désosser la viande&nbsp;</strong></p>



<p><strong>Préparer la garniture arômatique</strong></p>



<div className="wp-block-group"><div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
<ul className="wp-block-list"><li>Carottes et oignons en mirepoix</li><li>Ail dégermé et écrasé</li></ul>



<p><strong>Marquer le Navarin en cuisson</strong></p>



<ul className="wp-block-list"><li>Rissoler la viande,&nbsp;<strong></strong></li><li>Ajouter la garniture aromatique<strong></strong></li><li>Singer et torréfier<strong></strong></li><li>Ajouter le concentré de tomate<strong></strong></li><li>Mouiller avec de l’eau froide<strong></strong></li><li>Porter à ébullition et ajouter l’ail et le bouquet garni</li></ul>



<p><strong>Préparer la garniture&nbsp;</strong></p>



<ul className="wp-block-list"><li>Tourner les pomme de terre</li><li>Hacher le persil</li></ul>



<p><strong>Décanter le navarin</strong></p>



<ul className="wp-block-list"><li>Ajouter les pomme de terre blanchies</li><li>assaisonner</li><li>Terminer la cuisson à couvert</li></ul>



<p><strong>Dresser</strong></p>
</div></div>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/navarin-pommes.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/navarin-pommes_thumb.png?" alt="navarin-pommes" title="navarin-pommes"></img></a></figure>
</div>


<em>La proportion de viande dans cette recette est de 200g de viande par personne. Si la viande contient des os, la proportion par personne passe à 300g.</em>



<p><em>Dans cette recette on a préféré utiliser des morceaux d’épaule d’agneau, il est également courant d’utiliser des morceaux de collier et de poitrine.</em><span ></span></p>



<p><span>Si vous ne comprenez pas certains mots dans la fiche technique, consultez le <a href="https://cuisinedebase.com/vocabulaire-culinaire-dictionnaire-de-la-cuisine/">dictionnaire des termes culinaires</a>.</span></p>



<p><span>Cliquez ici pour découvrir les <a href="https://cuisinedebase.com/cap-cuisine-en-candidat-libre-se-prparer-avec-une-cole-de-formation-des-groupes-de-discussion-ou-seul/">comment apprendre les techniques de base</a></span></p>



<p><span>Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span >CAP cuisine en candidat libre</span></a></p>



<p><span>Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span >épreuves écrites</span></a><span > et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span >épreuves pratiques</span>

	</a></p>
	</div></article>,

	titre: "Fiche technique de fabrication du Navarin aux pommes",

	route: "/article/fiche-technique-de-fabrication-du-navarin-aux-pommes",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/navarin-pommes_thumb.png?w=910&ssl=1",

	lien: "https://cuisinedebase.com/fiche-technique-de-fabrication-du-navarin-aux-pommes/"

}

const J18 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Recette de Crêpes farcies gratinées façon Picarde</h1>

	<p>La <strong>recette de crêpes farcies</strong> gratinées, ou crêpes farcies façon picarde est une préparation qui fait partie des <a href="https://cuisinedebase.com/25-fiches-techniques-pour-apprendre-a-cuisiner/">fiches techniques qu’il faut maîtriser pour préparer le CAP cuisine</a> en candidat libre. </p>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/crepe-ficelle-picarde-4.jpg"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/crepe-ficelle-picarde-4_thumb.jpg" alt="crepe-ficelle-picarde-farcie" title="crepe-ficelle-picarde-farcie"></img></a><figcaption>Crêpes farcies gratinées</figcaption></figure></div>


<h2 className="sous_titre"><strong>Recette de crêpes façon Picarde</strong><span ></span></h2>



<p>Pour faire la <strong>recette de crêpes farcies façon Piacrde</strong>, on confectionne au préalable une <strong>duxelles sèche</strong> de champignon. La farce contient, en plus de la duxelles de champignons, une <strong>sauce crème</strong> et du <strong>blanc de poulet</strong>. On gratine enfin les crêpes dans un four très chaud.</p>



<h2 className="sous_titre">Fiche technique de crêpes farcies</h2>



<p><span ><span >Voici la fiche technique de fabrication des&nbsp; crêpes farcies:</span></span></p>



<h2 className="sous_titre"><span ><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/crepe_farcie-picarde-ficelle.png?ssl=1"><img data-recalc-dims="1" decoding="async" title="crepe_farcie-picarde-ficelle" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/crepe_farcie-picarde-ficelle_thumb.png" alt="crepe_farcie-picarde-ficelle"></img></a></span></h2>



<h2 className="sous_titre">Sujets d’examen pour préparer le CAP cuisine</h2>



<p>Voilà c’est tout pour cette fiche technique. J’espère qu’elle vous aidera à aller de l’avant si vous préparez seul le CAP cuisine candidat libre. Si c’est le cas je vous invite aussi à consulter une analyse que j’ai effectuée sur les <a href="https://cuisinedebase.com/epreuve-cap-cuisine-2021-les-sujets-de-lexamen-pratique/">sujets de l’épreuve pratique EP2 de la session 2021</a>. </p>



<p>Vous trouverez dans ce post une analyse détaillée des&nbsp;<strong>sujets de l’épreuve CAP cuisine 2021 candidat libre</strong>. C’est un travail de titans qui a permis de rassembler&nbsp;<strong>tous les sujets des différentes académies</strong>&nbsp;de France. Et sans l’aide de mes différents amis et clients (qui se reconnaitront) je n’y serais pas parvenu tout seul. Alors, je tiens à vous remercier pour votre précieux coup de main.&nbsp;</p>



<p>Je vous propose aussi une sélection d’articles qui peuvent vous aider à préparer le CAP cuisine dans de bonnes conditions:</p>



<ul className="wp-block-list"><li>Tout d’abord, <span >Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span >CAP cuisine en candidat libre</span></a></li><li><span >Ensuite, Consultez aussi le décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span >épreuves écrites</span></a><span > </span></li><li>Puis le décryptage <span >des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span >épreuves pratiques</span>

	</a></li></ul>

	</div></article>,

	titre: "Recette de Crêpes farcies gratinées façon Picarde",

	route: "/article/fiche-technique-de-fabrication-crepes-farcies-gratinees/",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/crepe-ficelle-picarde-4.jpg",

	lien: "https://cuisinedebase.com/fiche-technique-de-fabrication-crepes-farcies-gratinees/"

}

const J19 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Recette de Potage Parmentier avec la Fiche technique</h1>

	<p>La <strong>recette de potage Parmentier</strong> est une préparation qui fait partie des recettes qu’il faut</p>



<p><span ><span >Le potage Parmentier est un potage de pomme de terre, blanc de poireau et de la crème. il se sert très chaud.</span></span></p>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/potage-parmentier-1.jpg"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/potage-parmentier-1_thumb.jpg" alt="potage-parmentier-1" title="potage-parmentier-1"></img></a><figcaption><strong>Recette de potage Parmentier</strong></figcaption></figure></div>


<h2 className="sous_titre"><strong>Techniques de base potage Parmentier</strong></h2>



<p>Pour réussir la <strong>recette de potage parmentier</strong>, il faut travailler&nbsp;<strong>les techniques de base suivantes</strong>:</p>



<ul className="wp-block-list"><li><strong>Éplucher et laver</strong>&nbsp;les poireaux</li><li><strong>Émincer finement</strong>&nbsp;les blancs de poireaux</li><li><strong>Éplucher et couper</strong>&nbsp;les pomme de terre en quartier</li></ul>



<h2 className="sous_titre">Fiche technique<strong> de potage Parmentier</strong></h2>



<p><span ><span >Voici la fiche technique de fabrication du potage Parmentier</span></span></p>


<div className="post-image">
<figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/potage-parmentier.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/potage-parmentier_thumb.png" alt="potage-parmentier" title="potage-parmentier"></img></a><figcaption>Fiche technique de potage Parmentier</figcaption></figure></div>


<h2 className="sous_titre">Le potage Julienne Darblay<span ></span></h2>


<p><em>Il est possible de transformer la <strong>fiche technique de potage Parmentier</strong> en <span >potage&nbsp;<u>Julienne Darblay</u></span>. Et Pour ce faire, changez la garniture par une garniture composée de&nbsp;<u>légumes coupés en julienne</u>&nbsp;(carottes, céleri, navet, blanc de poireaux).</em></p>



<p><em><u>Servir le potage brûlant</u>&nbsp;et ajouter la garniture au dernier moment</em></p>



<p><em>Les fécules de pomme de terre sont des&nbsp;<u>liants</u>, il ne faut donc pas laver les pommes de terre une fois découpées.</em></p>



<p><span >Vous pouvez retrouver l’ensemble de ces fiches techniques, assemblées dans un seul document, au format pdf en suivant le lien suivant : <a href="https://cuisinedebase.com/produit/25-fiches-techniques-pour-preparer-le-cap-cuisine/">Fiches techniques au format pdf</a>.</span></p>



<p><span >Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span >CAP cuisine en candidat libre</span></a></p>



<p><span >Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span >épreuves écrites</span></a><span > et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span >épreuves pratiques</span>

	</a></p>
	</div></article>,

	titre: "Recette de Potage Parmentier avec la Fiche technique",

	route: "/article/fiche-technique-fabrication-recette-potage-parmentier/",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/potage-parmentier-1_thumb.jpg",

	lien: "https://cuisinedebase.com/fiche-technique-fabrication-recette-potage-parmentier/"

}

const J20 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique de fabrication. Velouté dubarry</h1>

	<p>Le <strong>velouté Dubarry</strong> est un potage de chou-fleur lié à la crème et jaunes d’œufs. il se sert très chaud.</p>



<p>C’est un <strong>Potage onctueux</strong> où les choux-fleurs sont cuits dans un <strong>velouté de veau.</strong> Selon la liaison utilisée le potage prend l’appellation de <strong>crème Dubarry</strong> ou de <strong>velouté Dubarry</strong>.</p>



<h2 className="sous_titre"><strong>Techniques de base à travailler</strong></h2>



<p>Pour réussir le <strong>velouté Dubarry</strong> il faut travailler les&nbsp;<strong>techniques de base</strong>&nbsp;suivantes:</p>



<ul className="wp-block-list"><li>Émincer les poireaux</li><li>Couper un chou-fleur</li><li>Faire un fond blanc de veau</li></ul>



<h2 className="sous_titre">Quelques astuces et <strong>Informations complémentaires</strong></h2>



<p><em>La liaison de la <strong>crème Dubarry</strong> est à base de crème uniquement, tandis que la liaison du <strong>velouté Dubarry</strong> est à base de jaunes d’œufs et de crème.</em></p>



<h2 className="sous_titre">Fiche technique du velouté Dubarry</h2>



<p>Voici la <strong>fiche technique de fabrication du velouté Dubarry</strong>:</p>



<h2 className="sous_titre"><strong><u>Éléments de base</u></strong></h2>



<ul className="wp-block-list"><li>100 g de beurre</li><li>80 g de farine</li><li>160 g de blancs&nbsp;&nbsp;de&nbsp;&nbsp;poireau</li><li>2 litres de fond&nbsp;&nbsp;blanc&nbsp;&nbsp;de&nbsp;&nbsp;veau</li><li>1 kg de choux-fleurs</li></ul>



<h2 className="sous_titre"><strong><u>Liaison</u></strong></h2>



<ul className="wp-block-list"><li>200 ml Crème</li><li>2 œufs (jaunes)</li></ul>



<h2 className="sous_titre"><strong><u>Garniture</u></strong></h2>



<ul className="wp-block-list"><li>160 g de chou-fleur ( sommités )</li></ul>



<h2 className="sous_titre"><strong><u>Assaisonnement</u></strong></h2>



<ul className="wp-block-list"><li>du gros sel</li><li>du sel fin</li></ul>



<h2 className="sous_titre">Technique de réalisation du velouté</h2>



<p><strong>Mettre en place le poste de travail</strong><strong></strong></p>



<p><strong>Préparer les légumes</strong></p>



<ul className="wp-block-list"><li><strong>Émincer finement</strong> les blancs de poireau</li><li>Couper le chou-fleur en <strong>petits bouquets</strong></li><li>Prélever les <strong>sommités</strong></li><li><strong>Cuire</strong> les sommités <strong>à l’anglaise</strong></li></ul>



<p><strong>Marquer le potage en cuisson</strong></p>



<ul className="wp-block-list"><li>Suer au beurre les blancs de poireaux</li><li>Ajouter la farine</li><li>Cuire pendant 4min. Et laisser refroidir</li><li>Verser progressivement le fond blanc bouillant en remuant&nbsp;</li><li>A l’ébullition, ajouter les bouquets de chou-fleur et saler au gros sel</li><li>Cuire doucement à couvert pendant 40 min</li></ul>



<p><strong>Terminer le potage</strong></p>



<ul className="wp-block-list"><li>Mélanger les jaunes d’oeufs et la crème</li><li>Ajouter doucement la liaison en remuant&nbsp;</li><li>Reporter le velouté à ébullition et le mettre hors du feu immédiatement</li></ul>



<p><strong>Dresser</strong></p>



<ul className="wp-block-list"><li>Ajouter la garniture au potage,</li><li>Mélanger délicatement et dresser le potage</li></ul>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/veloute-dubarry.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/veloute-dubarry_thumb.png" alt="veloute-dubarry" title="veloute-dubarry"></img></a></figure>
</div>


<span >Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span >CAP cuisine en candidat libre</span></a>



<p><span >Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span >épreuves écrites</span></a><span > et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span >épreuves pratiques</span>

	</a></p>
	</div></article>,

	titre: "Fiche technique de fabrication. Velouté dubarry",

	route: "/article/fiche-technique-de-fabrication-veloute-dubarry",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/veloute-dubarry_thumb.png",

	lien: "https://cuisinedebase.com/fiche-technique-de-fabrication-veloute-dubarry/"

}

const J21 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">La recette des Omelettes roulées aux champignons</h1>

	<p>Les <strong>omelettes roulées</strong> sont obtenues avec un mélange d’œufs et d’une garniture qui donnera l’appellation de l’omelette. Comme par exemple : omelette aux fines herbes, aux fruits de mer, au jambon, ..</p>



<h2 className="sous_titre"><strong>Techniques de base pour omelettes roulées</strong></h2>



<p>Les techniques à maîtriser pour réussir les omelettes roulées aux champignons</p>



<ul className="wp-block-list"><li><strong>Éplucher&nbsp;</strong>les champignons</li><li><strong>Émincer&nbsp;</strong>les champignons</li><li><strong>Rouler&nbsp;</strong>et&nbsp;<strong>façonner&nbsp;</strong>une&nbsp;<strong>omelette</strong></li></ul>



<p>Et voici aussi quelques <strong>Informations complémentaires et Astuces</strong> pour bien maîtriser la recette d’omelette roulée.</p>



<p>Tout d’abord l<em>a proportion par personne des omelettes est de l’ordre de 3 œufs par personnes</em></p>



<p>Ensuite, il est conseillée de d<em>écoller rapidement les œufs qui commencent à coaguler sur les bords de la poêle en les ramenant vers le centre</em></p>



<p>➔ &nbsp;Enfin, sachez que s<em>i le beurre est trop chaud, l’omelette coagule rapidement et se ride.</em></p>



<h2 className="sous_titre">Fiche technique de omelettes aux champignons</h2>



<p>Les fiches techniques de fabrication sont très utiles dans la restauration, elles permettent, entre autres, de :</p>



<ul className="wp-block-list"><li>Contrôler le stock des produits</li><li>Connaître les compositions des plats</li><li>Renseigner les étapes et techniques de réalisation</li><li>Renseigner la chronologie des étapes</li><li>Aussi, on peut mettre le prix de la matière première</li><li>Renseigner le prix de revient par portion</li><li>etc….</li></ul>



<p>On peut ajouter bien évidemment toutes les informations que l’on juge utiles. </p>



<p>Les prix des matières premières ne sont pas renseignés car cela varie énormément en fonctions des produits eux même et des endroits, des périodes d’achat, …</p>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Omelette-champignons-1.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Omelette-champignons_thumb-1.png" alt="Omelette-champignons" title="Omelette-champignons"></img></a></figure>
</div>


<span >Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span >CAP cuisine en candidat libre</span></a>



<p><span >Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span >épreuves écrites</span></a><span > et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span >épreuves pratiques</span>

	</a></p>
	</div></article>,

	titre: "La recette des Omelettes roulées aux champignons",

	route: "/article/fiche-technique-recette-omelettes-roulees-champignons",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Omelette-champignons_thumb-1.png",

	lien: "https://cuisinedebase.com/fiche-technique-recette-omelettes-roulees-champignons/"

}

const J23 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique – Quiche au poulet</h1>

	<p>La <strong>fiche technique de la quiche</strong> figure parmi les plats de référence qui doivent être travaillés et maîtriser pour préparer le CAP cuisine. </p>



<div className="post-image"><figure className="aligncenter size-medium"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg" alt="Fiche technique de la quiche" className="wp-image-1915" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?resize=1536%2C1024&amp;ssl=1 1536w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?resize=600%2C400&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?resize=90%2C60&amp;ssl=1 90w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?resize=135%2C90&amp;ssl=1 135w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?w=1880&amp;ssl=1 1880w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg?w=1820&amp;ssl=1 1820w" sizes="(max-width: 300px) 100vw, 300px"></img><figcaption>Photo by Amanda Reed</figcaption></figure></div>



<h2 className="sous_titre">Quiche au poulet</h2>



<p><span >La <strong>quiche au poulet</strong> est une variante de la <strong>quiche Lorraine</strong>. C’est une <strong>tarte salée</strong> garnie de <strong>blancs de poulet</strong> taillées en petits cubes, du gruyère et de <strong>crème prise salée</strong>. </span></p>



<h2 className="sous_titre">Techniques de base</h2>



<p>Faire une quiche fait partie des <strong><a href="https://cuisinedebase.com/produit/fiche-de-revision-des-techniques-de-base/" target="_blank" rel="noopener noreferrer">techniques de base</a></strong> à maîtriser pour <strong>apprendre la cuisine</strong>. Voici quelques <strong>techniques</strong> qui sont nécessaires pour <strong>réussir la quiche</strong></p>



<ul className="wp-block-list"><li><strong>Lever</strong> des blancs de poulet</li><li><strong>Tailler</strong> des blancs de poulet en cubes</li><li>Confectionner la <strong>pâte brisée salée</strong></li><li>Foncer les <strong>quiches</strong></li><li>Confectionner une <strong>crème prise salée</strong></li></ul>



<h2 className="sous_titre">Fiche technique de fabrication</h2>



<p><span >Voici la <strong>fiche technique de fabrication</strong> de la <strong>quiche au poulet</strong>:</span></p>



<div className="post-image"><figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/quiche-au-poulet.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/quiche-au-poulet_thumb.png" alt="quiche-au-poulet" title="quiche-au-poulet"></img></a><figcaption>Fiche technique de fabrication de la quiche au poulet</figcaption></figure></div>



<span >Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span >CAP cuisine en candidat libre</span></a>



<p><span >Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span >épreuves écrites</span></a><span > et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span >épreuves pratiques</span>

	</a></p>
	</div></article>,

	titre: "Fiche technique – Quiche au poulet",

	route: "/article/fiche-technique-quiche-au-poulet/",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/10/pexels-photo-288264.jpeg",

	lien: "https://cuisinedebase.com/fiche-technique-quiche-au-poulet/"

}

const J24 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Fiche technique de fabrication. Soles meunière</h1>

	<p>La recette des soles meunières figure parmi les fiches techniques de fabrication qu’il faut absolument faire si vous préparer le <strong>CAP cuisine</strong> en candidat libre. En faisant cette fiche technique vous apprenez entre autre à <strong>préparer les&nbsp;soles&nbsp;</strong>sans forcément lever les filets. Et aussi à préparer un <strong>beurre meunière</strong>.</p>
<h2 className="sous_titre">La recette des Soles meunière</h2>
<p><span >Soles farinées et sautées à la poêle avec une coloration dorée, arrosées de jus de citron, nappées de beurre «noisette», et agrémentées de rondelles de citrons pelés à vif et de persil haché.</span></p>
<h2 className="sous_titre">La fiche technique de fabrication des soles meunières</h2>
<h2 className="sous_titre"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/soles-meuniere.png?ssl=1"><div><img data-recalc-dims="1" decoding="async" title="soles-meuniere" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/soles-meuniere_thumb.png" alt="soles-meuniere"></img></div></a></h2>
<span >Découvrez comment passer un </span><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/"><span >CAP cuisine en candidat libre</span></a>
<p><span >Consultez aussi notre décryptage des </span><a href="https://cuisinedebase.com/dcryptage-des-preuves-crites-du-cap-cuisine/"><span >épreuves écrites</span></a><span > et des </span><a href="https://cuisinedebase.com/dcryptage-de-lpreuve-pratique-du-cap-cuisine/"><span >épreuves pratiques</span>

	</a></p>
	</div></article>,

	titre: "Fiche technique de fabrication. Soles meunière",

	route: "/article/fiche-technique-de-fabrication-sole-meuniere",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/soles-meuniere_thumb.png",

	lien: "https://cuisinedebase.com/fiche-technique-de-fabrication-sole-meuniere/"

}

const J25 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">FICHE TECHNIQUE DE FABRICATION. Macédoine de légumes mayonnaise</h1>

	<p>La macédoine de <strong>légumes</strong> et un mélange de légumes <strong>coupés en dés</strong> ou en petits bâtonnets et liés à la <strong>sauce mayonnaise</strong>.</p>

<p>Les <strong>techniques à maîtriser</strong> pour réussir la macédoine sont: </p>
<ul>
<li><strong>Tailler les légumesen macédoine</strong>
</li><li>Faire une <strong>sauce mayonnaise</strong>
</li><li>Cuire à <strong>l’anglaise</strong>
</li><li>Cuire des <strong>œufs durs</strong></li>
</ul>
Voici la fiche technique de la macédoine :
<p><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/macedoine-de-legumes-mayonnaise.png?ssl=1"><div className="post-image"><img data-recalc-dims="1" decoding="async" title="macedoine-de-legumes-mayonnaise" alt="macedoine-de-legumes-mayonnaise" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/macedoine-de-legumes-mayonnaise_thumb.png"></img></div></a></p>
<p><a href="https://www.amazon.fr/gp/product/B002ZCKIBM/ref=as_li_qf_asin_il_tl?ie=UTF8&amp;tag=yhiicham-21&amp;creative=6746&amp;linkCode=as2&amp;creativeASIN=B002ZCKIBM&amp;linkId=d7f386b31a006287133fd136c11c2711">Couteaux de cuisine professionnels</a> </p>
<p><a href="https://www.amazon.fr/gp/product/B002ZCKIBM/ref=as_li_qf_asin_il_tl?ie=UTF8&amp;tag=yhiicham-21&amp;creative=6746&amp;linkCode=as2&amp;creativeASIN=B002ZCKIBM&amp;linkId=d7f386b31a006287133fd136c11c2711"><div className="post-image"><img data-recalc-dims="1" decoding="async" alt="Ross Henery Professional  9 couteaux de chef Ross Henery, lot de 9 pièces, couteaux de cuisine professionnels avec aiguiseur dans un étui de transport à fermeture éclair." src="https://i0.wp.com/images-na.ssl-images-amazon.com/images/I/71VjU4HxscL._SX450_.jpg?w=910&amp;ssl=1"></img></div></a></p>
<p>Cliquez ici pour découvrir <a href="https://cuisinedebase.com/les-25-recettes-a-maitriser-pour-obtenir-son-cap-cuisine/">les 25 recettes à maîtriser pour le CAP cuisine</a></p>

	</div></article>,

	titre: "FICHE TECHNIQUE DE FABRICATION. Macédoine de légumes mayonnaise",

	route: "/article/fiche-technique-de-fabrication-macedoine-de-legumes-mayonnaise/",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/macedoine-de-legumes-mayonnaise_thumb.png",

	lien: "https://cuisinedebase.com/fiche-technique-de-fabrication-macedoine-de-legumes-mayonnaise/"

}

const J26 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Comment faire et utiliser un Tableau d’Ordonnancement</h1>

	<p>Dans le tourbillon d’une <strong>cuisine professionnelle</strong> ou même dans le cadre plus détendu d’une cuisine domestique, <strong>la gestion du temps est la clé de la réussite</strong>. Les chefs étoilés, les apprentis cuisiniers et les passionnés de gastronomie partagent tous un défi commun : <strong>comment organiser efficacement la production culinaire</strong> dans les délais impartis et sans stress ?La réponse réside dans l’utilisation d’un outil simple mais puissant : <strong>le tableau d’ordonnancement</strong>. </p>


<div className="post-image">
<figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png" alt="tableau d'ordonnancement" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png?resize=1024%2C733&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png?resize=300%2C215&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png?resize=768%2C550&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png?resize=600%2C430&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png?resize=84%2C60&amp;ssl=1 84w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png?resize=126%2C90&amp;ssl=1 126w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png?w=1092&amp;ssl=1 1092w"></img></figure></div>


<h2 className="sous_titre">Pourquoi utiliser un <strong>tableau d’ordonnancement</strong></h2>



<p>Cet instrument de planification offre une vision claire et structurée du travail à accomplir. Il permet une répartition efficace du temps et des ressources. Dans cet article, nous allons explorer comment faire et utiliser un <strong>tableau d’ordonnancement</strong>. Dans le but d’optimiser la production en cuisine, que ce soit dans un environnement professionnel ou amateur.</p>



<h2 className="sous_titre">Ce qu’il faut faire avant de commencer la planification</h2>



<p>La première étape pour tirer le meilleur parti d’un <strong>tableau d’ordonnancement</strong> est de planifier avec précision. Pour ce faire, suivez les étapes suivantes :</p>



<ul className="wp-block-list">
<li>Avant de commencer toute préparation, prenez le temps de dresser une liste détaillée des recettes que vous avez l’intention de réaliser ;</li>



<li>Organisez les recettes selon leur niveau de difficulté et le temps nécessaire à leur préparation ;</li>



<li>Cette planification préliminaire vous aidera à prioriser les tâches et à répartir efficacement votre temps.</li>
</ul>



<h2 className="sous_titre">Gestion des Ingrédients :</h2>



<p>En parallèle avec la planification des recettes, établissez une liste complète des ingrédients nécessaires pour chaque plat. Assurez-vous de vérifier vos stocks et de faire les achats nécessaires avant de commencer la production.</p>



<h2 className="sous_titre">Planification des tâches dans le tableau d’ordonnancement :</h2>



<p> Une fois que vous savez ce que vous allez préparer et que vous avez établi votre liste d’ingrédients, vous pouvez commencer à <strong>déterminer l’ordre dans lequel vous allez les préparer.</strong> Il est important de savoir que certaines tâches peuvent être effectuées en parallèle, tandis que d’autres nécessitent une séquence spécifique. Organisez vos activités en fonction de la disponibilité des équipements, des <strong>temps de cuisson</strong> et des contraintes de température.</p>



<h2 className="sous_titre">Comment faire un tableau d’ordonnancement en cuisine</h2>



<p>La version simplifiée du tableau ressemble à une grille avec 2 colonnes et plusieurs lignes. Chaque ligne représente une étape de préparation. On divise le temps total de production, qui est généralement de 4 heures 30, en petits morceaux de 15 minutes. Donc, chaque ligne du tableau équivaut à 15 minutes. </p>



<p>Voici comment vous pourriez procéder pour créer un tel tableau :</p>



<ol className="wp-block-list">
<li><strong>Listez les recettes :</strong> Tout d’abord, listez toutes les recettes que vous prévoyez de cuisiner. Assurez-vous d’inclure tous les plats que vous voulez préparer, ainsi que les accompagnements et les desserts.</li>



<li><strong>Évaluez la complexité :</strong> Classez vos recettes par ordre de complexité, en commençant par les plus simples et en terminant par les plus complexes. Cela vous aidera à déterminer l’ordre dans lequel vous allez les préparer.</li>



<li><strong>Estimez le temps de préparation :</strong> Pour chaque recette, estimez le temps nécessaire à sa préparation. Tenez compte de toutes les étapes, y compris la préparation des ingrédients, la cuisson et le temps de repos éventuel.</li>



<li><strong>Identifiez les dépendances :</strong> Déterminez s’il y a des recettes qui dépendent les unes des autres. Par exemple, si une sauce doit mijoter pendant un certain temps avant d’être utilisée dans une autre recette, vous devrez tenir compte de cela dans votre ordonnancement.</li>



<li><strong>Soyez flexible :</strong> Gardez à l’esprit que les choses peuvent ne pas toujours se dérouler exactement comme prévu en cuisine. Soyez prêt à ajuster votre planification en fonction des imprévus ou des changements de dernière minute.</li>
</ol>



<h2 className="sous_titre">Le tableau d’ordonnancement pour les candidats libres au CAP cuisine</h2>



<p>L’ordonnancement en cuisine est un art qui consiste à découper les préparations de manière intelligente afin d’optimiser son temps. Il n’existe pas de méthode universelle pour le faire, chaque personne peut avoir une approche différente et efficace. L’essentiel est d’avoir une organisation cohérente qui vous convient. Il est recommandé de prévoir un peu plus de temps que nécessaire afin de ne pas être pris au dépourvu. </p>



<p>Pour les <strong><a href="https://cuisinedebase.com/aide-pour-preparer-le-cap-cuisine-candidat-libre/">candidats passant le CAP cuisine en candidat libre</a></strong>, il est crucial de comprendre que l’ordonnancement n’est pas seulement un document, mais un outil personnel de planification de la production culinaire. Il doit être en mesure de structurer votre épreuve, de vous fournir des repères temporels et de démontrer votre expertise au jury. En analysant attentivement chaque préparation, en anticipant les temps de cuisson, de repos et autres étapes, vous pourrez aborder l’épreuve avec confiance et augmenter vos chances de réussite. En somme, un bon ordonnancement est la clé pour entrer efficacement dans l’épreuve et conditionner votre succès.</p>

	</div></article>,

	titre: "Comment faire et utiliser un Tableau d’Ordonnancement",

	route: "/article/comment-faire-et-utiliser-un-tableau-dordonnancement",

	categorie: "5",

	sous_categorie: "-1",

	articlesConnexes: [],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/02/tableau-ordonnancement.png",

	lien: "https://cuisinedebase.com/comment-faire-et-utiliser-un-tableau-dordonnancement/"

}

const J27 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Sérénité en Cuisine : 3 Habitudes pour une vie équilibrée</h1>

<p>Dans le monde de la cuisine, chaque plat est une aventure culinaire et chaque recette une <strong>opportunité d’apprendre quelque chose de nouveau</strong>. Cependant, jongler entre les casseroles et les ingrédients peut parfois être stressant. Pourtant, adopter quelques <strong>habitudes zen</strong> peut vous apporter une <strong>sérénité en cuisine</strong>. Et vous permettre de savourer chaque instant passé derrière les fourneaux. Aujourd’hui, nous allons explorer trois habitudes simples qui, soutenues par des statistiques et des données, vous aideront à rester zen au quotidien.</p>


<div className="post-image">
<figure className="aligncenter size-medium"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?resize=300%2C300&amp;ssl=1" alt="" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?w=1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?resize=600%2C600&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png?resize=90%2C90&amp;ssl=1 90w" sizes="(max-width: 300px) 100vw, 300px"></img><figcaption className="wp-element-caption">La <strong>sérénité en cuisine</strong></figcaption></figure></div>


<h2 className="sous_titre">Planifier et Organiser Votre Cuisine :</h2>



<p>Selon une étude de&nbsp;<strong>l’American Psychological Association</strong>, le désordre dans l’environnement peut augmenter les niveaux de stress. En appliquant cette notion à votre espace de cuisine, il est clair qu’une <strong>cuisine bien organisée peut contribuer à votre sérénité</strong>. La planification joue également un rôle clé dans la réduction du stress.</p>



<p>Les données recueillies par le&nbsp;<strong>Food Marketing Institute</strong>&nbsp;montrent que la <a href="https://cuisinedebase.com/cap-cuisine-les-defis-du-candidat-libre/" target="_blank" rel="noopener noreferrer">planification des repas</a> peut non seulement vous faire gagner du temps, mais aussi réduire le gaspillage alimentaire. En ayant une liste d’achats préétablie et un plan de repas, vous êtes plus susceptible de faire des choix alimentaires sains et d’éviter le stress de la dernière minute.</p>



<h2 className="sous_titre">Établir une Routine Culinaire Relaxante :</h2>



<p>Les routines ont un impact considérable sur notre bien-être émotionnel. Une étude publiée dans le Journal of Behavioral Medicine a révélé que <strong>l’établissement de routines régulières peut améliorer la qualité du sommeil et réduire les niveaux de stress</strong>. Appliquer cette idée à la cuisine peut transformer cette activité en un moment de détente plutôt qu’une corvée quotidienne.</p>



<p>Selon les données du&nbsp;<strong>Journal of Nutrition Education and Behavior</strong>, les personnes qui établissent des routines culinaires régulières ont tendance à consommer des repas plus équilibrés et à avoir une meilleure santé globale. Créer une routine où vous cuisinez à des heures fixes et prenez le temps de savourer vos repas peut avoir un impact significatif sur votre bien-être.</p>



<p>Cet article participe à l’événement “<strong>3 habitudes pour être zen tous les jours</strong>” du&nbsp;<a href="https://habitudes-zen.net/" target="_blank" rel="noopener noreferrer">blog&nbsp;Habitudes Zen</a>. J’apprécie beaucoup ce blog, et en fait mon article préféré est&nbsp;<a href="https://habitudes-zen.net/100-phrases-positives-a-dire-a-ses-enfants/" target="_blank" rel="noopener noreferrer">celui-ci.</a></p>



<h2 className="sous_titre">Pratiquer la Pleine Conscience en Cuisine :</h2>



<p>La <strong>pleine conscience</strong>, également connue sous le terme de «&nbsp;<strong>mindfulness</strong>&nbsp;» en anglais, est une pratique qui consiste à être délibérément attentif et conscient de l’instant présent, sans jugement. Cette pratique est souvent associée à divers bénéfices, tels que la <strong>réduction du stress</strong>, l’amélioration de la <strong>concentration</strong> et une meilleure <strong>gestion des émotions.</strong></p>



<p>La pleine conscience, c’est bien plus qu’une simple tendance. Selon une étude menée par le <strong>National Center for</strong>&nbsp;<strong>Complementary and Integrative</strong>&nbsp;<strong>Health</strong>, la <strong>pratique régulière de la pleine conscience</strong> peut réduire le stress de manière significative. Appliquée à la cuisine, cette habitude consiste à être pleinement présent et conscient de chaque geste, chaque odeur et chaque saveur.</p>



<p>Beaucoup de <strong>travaux de recherches scientifiques</strong>&nbsp;montrent que la <strong>pleine conscience en cuisine</strong> peut également améliorer la satisfaction alimentaire et réduire les comportements alimentaires compulsifs. Ainsi, prendre le temps de sentir les ingrédients, de goûter chaque étape du processus et d’apprécier le moment présent peut non seulement améliorer votre expérience culinaire, mais aussi votre bien-être général.</p>



<h2 className="sous_titre">Les clés de la <strong>sérénité en cuisine</strong></h2>



<p>La cuisine peut être bien plus qu’une simple tâche quotidienne. En adoptant ces trois habitudes zen soutenues par des statistiques et des données, vous pouvez transformer votre expérience culinaire en une source de sérénité. La pleine conscience, la planification et l’établissement de routines sont autant de clés pour équilibrer votre vie quotidienne tout en explorant les délices de la cuisine. Alors, prenez le temps d’apprécier chaque moment derrière les fourneaux et laissez la sérénité s’inviter à votre table.</p>

</div></article>,

titre: "Sérénité en Cuisine : 3 Habitudes pour une vie équilibrée",

route: "/article/serenite-cuisine-habitude-vie-equilibree",

categorie: "5",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/01/chef-zen-attitude.png",

lien: "https://cuisinedebase.com/serenite-cuisine-habitude-vie-equilibree/"

}


const J28 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Les erreurs à éviter lors d’une reconversion professionnelle en cuisine</h1>
	
	<p>La <strong>cuisine et la restauration</strong> attirent de plus en plus de personnes qui cherchent à se <strong>reconvertir professionnellement</strong>. Cependant, cette transition peut s’avérer complexe et semée d’embûches si elle n’est pas bien préparée. En effet, changer de carrière pour travailler dans la cuisine ou la restauration nécessite non seulement des compétences spécifiques. Mais aussi une bonne connaissance des réalités du marché de l’emploi. Dans cet article, je vais passer en revue <strong>les erreurs les plus courantes à éviter lors d’une reconversion professionnelle en cuisine ou restauration</strong>. Et ce, afin de vous aider à réussir cette transition en toute sérénité.</p>


<div className="post-image">
<figure className="aligncenter size-full is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant-1.webp?resize=384%2C384&amp;ssl=1" alt="Erreurs à éviter lors d'une reconversion" className="wp-image-2785" width="384" height="384" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant-1.webp?w=512&amp;ssl=1 512w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant-1.webp?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant-1.webp?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant-1.webp?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant-1.webp?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant-1.webp?resize=90%2C90&amp;ssl=1 90w" sizes="(max-width: 384px) 100vw, 384px"></img><figcaption className="wp-element-caption"><strong>Erreurs à éviter lors d’une reconversion</strong></figcaption></figure></div>


<p>Voici les cinq erreurs à éviter lors d’une reconversion professionnelle dans le domaine de la cuisine restauration.</p>



<h2 className="sous_titre">Erreur à éviter lors d’une reconversion n°1 : Avoir une vision floue de son projet de reconversion</h2>



<p>Avant de vous lancer dans une <strong>reconversion professionnelle en cuisine ou restauration</strong>. Il est crucial d’avoir une vision claire de votre projet. Cela signifie que vous devez&nbsp;savoir&nbsp;exactement ce que vous voulez faire. Pourquoi vous voulez le faire et comment vous allez y parvenir. Sans une vision précise, vous risquez de vous éparpiller et de perdre du temps et de l’énergie dans des directions qui ne vous mèneront nulle part.</p>



<p>Pour éviter cette erreur, prenez le&nbsp;temps&nbsp;de réfléchir à vos motivations profondes, à vos compétences, à vos valeurs et à vos objectifs de carrière. Déterminez ensuite les étapes concrètes à suivre pour atteindre votre but.&nbsp;Telles que la formation, l’expérience professionnelle ou la création d’une entreprise.</p>



<h2 className="sous_titre">Erreur n°2 : Ne pas acquérir les compétences nécessaires</h2>



<p>Pour <strong>réussir votre reconversion professionnelle en cuisine ou restauration</strong>, il est indispensable <strong>d’acquérir les compétences nécessaires pour travailler dans ce secteur</strong>. Cela inclut des connaissances techniques. Telles que la maîtrise <strong><a href="https://cuisinedebase.com/la-listes-des-techniques-de-base-a-maitriser-pour-le-cap-cuisine/">des différentes techniques culinaires de vase</a></strong> et de la <strong>gestion d’un restaurant</strong>, ainsi que des compétences interpersonnelles, telles que la <strong>capacité à travailler en équipe</strong> et à communiquer efficacement avec les clients.</p>



<p>Pour acquérir ces compétences, vous pouvez suivre une <strong><a href="https://cuisinedebase.com/formation-cuisine-pas-chere/">formation professionnelle</a></strong>. Participer à des stages, travailler comme apprenti auprès d’un chef expérimenté ou encore <strong>prendre des cours en ligne</strong>. Il est important de choisir les moyens d’acquisition des compétences qui correspondent le mieux à vos besoins et à votre style d’apprentissage, afin d’être le plus efficace possible dans votre parcours de reconversion. D’ailleurs si vous avez un projet de <strong>passer le cap cuisine en candidat libre</strong>, <a href="https://cuisinedebase.com/coaching/">je peux vous coacher pour le préparer efficacement</a>.</p>



<h2 className="sous_titre">Erreur n°3 : Ne pas se former auprès des professionnels</h2>



<p>En plus d’acquérir les compétences nécessaires, il est également important de se former auprès de professionnels reconnus. Afin de <strong>réussir sa reconversion en cuisine ou restauration</strong>. Cela peut prendre différentes formes, telles que des <strong>stages en entreprise</strong>, des <strong>cours de cuisine avec des chefs renommés</strong>, des formations spécialisées en <strong>gestion de restaurant</strong>, ou encore des rencontres avec des professionnels pour obtenir des conseils et des retours d’expérience. En vous formant auprès des professionnels, vous pourrez non seulement acquérir des connaissances pratiques et théoriques, mais également développer un réseau de contacts dans le secteur. Cela pourra vous aider à trouver un emploi ou à démarrer votre propre entreprise. Assurez-vous de choisir des formations et des stages de qualité. Dispensés&nbsp;par des professionnels sérieux et reconnus, afin de maximiser vos chances de réussite.</p>



<h2 className="sous_titre">Erreur n°4 : Ne pas prendre en compte les réalités du marché du travail</h2>



<p>Une <strong>erreur courante lors d’une reconversion professionnelle en cuisine ou restauration</strong> est de sous-estimer les réalités du marché de l’emploi dans ce secteur. Bien que la cuisine et la restauration puissent sembler être des domaines en demande, la concurrence pour les postes les plus attractifs peut être féroce. Il est donc important de bien se renseigner sur les <strong>offres d’emploi disponibles</strong>, les exigences des employeurs et les <strong>salaires proposés avant de se lancer dans une reconversion</strong>. Il est également utile de savoir que certains postes peuvent être précaires, avec des horaires atypiques et des conditions de travail très difficiles. Pour éviter cette erreur, faites des recherches approfondies sur le marché de l’emploi en cuisine ou restauration. Consultez les offres d’emploi et les forums spécialisés. Et parlez à des professionnels du secteur pour obtenir des conseils et des avis.</p>



<h2 className="sous_titre">Erreur n°5 : Ne pas préparer son projet de reconversion financièrement</h2>



<p>Enfin, une erreur à éviter lors d’une reconversion professionnelle en cuisine ou restauration est de négliger l’importance de la pratique et de l’expérience. Même si vous avez suivi une <strong>formation professionnelle</strong> de qualité et acquis toutes les compétences nécessaires. Il est essentiel de mettre en pratique ces connaissances pour les perfectionner et les intégrer. Cela peut se faire en travaillant comme apprenti ou en stagiaire auprès d’un <strong>chef expérimenté</strong>. En participant à des compétitions culinaires ou en créant vos propres plats à la maison. Plus vous pratiquez et plus vous acquérez de l’expérience. Plus vous deviendrez compétent et confiant dans votre nouveau métier. Ne sous-estimez pas non plus l’importance de l’expérience professionnelle pour votre employabilité et votre réussite à long terme. Les employeurs sont souvent à la recherche de candidats ayant une expérience pertinente dans le secteur. Alors cherchez des opportunités pour travailler dans des restaurants, des hôtels ou des entreprises de traiteur afin d’accumuler de l’expérience.</p>



<h2 className="sous_titre">Les erreurs à éviter lors d’une reconversion professionnelle en cuisine ou restauration</h2>



<p>En conclusion, une <strong>reconversion professionnelle en cuisine ou restauration</strong> peut être une excellente opportunité pour ceux qui ont une passion pour la cuisine. Cependant, il y a des erreurs courantes à éviter pour maximiser vos chances de réussite. Nous avons vu qu’il est important </p>



<p>identifier les compétences nécessaires pour le métier ;</p>



<p>choisir une formation de qualité ;</p>



<p>se former auprès de professionnels reconnus ;</p>



<p>ne pas sous-estimer les réalités du marché de l’emploi ;</p>



<p>et ne pas négliger l’importance de la pratique et de l’expérience. </p>



<p>En évitant ces erreurs, vous pourrez non seulement atteindre vos objectifs professionnels, mais également trouver un épanouissement personnel. En travaillant dans un domaine qui vous passionne. N’oubliez pas que la réussite dépendra de votre détermination, de votre persévérance et de votre capacité à apprendre et à vous adapter aux réalités du secteur.</p>
	
	</div></article>,
	
	titre: "Les erreurs à éviter lors d’une reconversion professionnelle en cuisine",
	
	route: "/article/les-erreurs-a-eviter-lors-dune-reconversion-professionnelle-en-cuisine",
	
	categorie: "5",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant-1.webp",
	
	lien: "https://cuisinedebase.com/les-erreurs-a-eviter-lors-dune-reconversion-professionnelle-en-cuisine/"
	
}

const J29 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Cinq astuces pour réussir une formation accélérée de CAP cuisine</h1>
	
	<p>Le <strong>CAP cuisine</strong> est un diplôme de base qui permet de se lancer dans le monde de la cuisine. Toutefois, le temps nécessaire pour le préparer peut-être un véritable défi pour les personnes qui travaillent ou qui ont des obligations familiales. Heureusement, il existe des moyens de <strong>réussir une formation accélérée de CAP cuisine en candidat libre</strong>. Dans cet article, je vous partage cinq astuces pratiques pour vous aider à optimiser votre temps et à réussir votre <strong>formation accélérée de CAP cuisine</strong> en toute confiance.&nbsp;Et ce même si vous manquez de temps.</p>


<div className="post-image">
<figure className="aligncenter size-full is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1641734989_Female-chef-strong-with-a-four-hands.-_xl-beta-v2-2-2.png?resize=388%2C388&amp;ssl=1" alt="" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1641734989_Female-chef-strong-with-a-four-hands.-_xl-beta-v2-2-2.png?w=512&amp;ssl=1 512w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1641734989_Female-chef-strong-with-a-four-hands.-_xl-beta-v2-2-2.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1641734989_Female-chef-strong-with-a-four-hands.-_xl-beta-v2-2-2.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1641734989_Female-chef-strong-with-a-four-hands.-_xl-beta-v2-2-2.png?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1641734989_Female-chef-strong-with-a-four-hands.-_xl-beta-v2-2-2.png?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1641734989_Female-chef-strong-with-a-four-hands.-_xl-beta-v2-2-2.png?resize=90%2C90&amp;ssl=1 90w"></img><figcaption className="wp-element-caption">Formation accélérée de CAP cuisine</figcaption></figure></div>


<h2 className="sous_titre">Les défis de la formation accélérée de CAP cuisine :&nbsp;</h2>



<p>Cependant, les candidats peuvent rencontrer des défis lorsqu’ils suivent une <strong>formation accélérée de CAP cuisine</strong>. Tout d’abord, le temps peut être un facteur limitant. Les candidats doivent non seulement trouver le temps de suivre les cours et de pratiquer, mais ils doivent également gérer leur emploi du temps pour s’assurer qu’ils peuvent tout faire. Ensuite, il y a l’aspect pratique de la cuisine. Les candidats doivent s’entraîner régulièrement pour développer leurs compétences culinaires et être en mesure de maîtriser les techniques de base. Enfin, il y a le coût. Suivre une formation accélérée peut être plus cher que de suivre un cours traditionnel, ce qui peut rendre difficile pour certains candidats de poursuivre leurs études. C’est pourquoi il est important de trouver des astuces pour surmonter ces défis et réussir sa formation accélérée de CAP cuisine.</p>



<h2 className="sous_titre">De nombreuses&nbsp;connaissances et de compétences à acquérir</h2>



<p>D’autre part, la<strong> préparation de l’examen du CAP cuisine</strong> peut être difficile pour les candidats en raison de la quantité de connaissances et de compétences à acquérir. Les aspects les plus difficiles de l’examen peuvent être <strong><a href="https://cuisinedebase.com/la-listes-des-techniques-de-base-a-maitriser-pour-le-cap-cuisine/">les techniques culinaires de base</a></strong>, les recettes de base et les connaissances sur les produits de cuisine et les équipements. Pour surmonter ces défis, il est important de s’entraîner régulièrement, de pratiquer les techniques base jusqu’à ce qu’elles soient maîtrisées et de se familiariser avec les <strong><a href="https://cuisinedebase.com/les-25-recettes-a-maitriser-pour-obtenir-son-cap-cuisine/">recettes de base</a></strong>. Les candidats doivent également être conscients des ingrédients et des équipements utilisés en cuisine, et comprendre leur rôle et leur utilisation. Pour se préparer efficacement à l’examen, les candidats doivent se concentrer sur les sujets les plus importants et utiliser des ressources supplémentaires pour renforcer leurs connaissances.</p>



<p>Voici les cinq astuces qui peuvent vous aider à réussir une <strong>formation accélérée de CAP cuisine</strong>&nbsp;:</p>



<h2 className="sous_titre">Planning réaliste pour <strong>formation accélérée de CAP cuisine</strong></h2>



<p>Lorsque vous suivez une <strong>formation accélérée de CAP cuisine</strong>, il est important d’avoir un plan d’étude réaliste. Cela signifie que vous devez planifier vos études en fonction de votre emploi du temps et de vos obligations personnelles. Commencez par identifier les moments où vous êtes disponible pour étudier et pratiquez la cuisine, et déterminez combien de temps vous pouvez y consacrer chaque jour ou chaque semaine.</p>



<p>Ensuite, établissez un calendrier d’étude réaliste en tenant compte de la durée de la formation et des sujets à couvrir. Répartissez le temps de manière équilibrée pour chaque sujet, en accordant plus de temps aux sujets qui vous posent le plus de difficultés. Il est important de se donner suffisamment de temps pour réviser et pratiquer avant l’examen final.</p>



<p>N’oubliez pas de prendre en compte les jours de congé et les moments de pause pour éviter la fatigue et le surmenage. En établissant un plan d’étude réaliste, vous serez en mesure de gérer votre temps efficacement et d’atteindre vos objectifs dans les délais impartis.</p>



<h2 className="sous_titre">Établissez des priorités.</h2>



<p>Lorsque vous manquez de temps pour préparer le CAP cuisine, vous devez être capable de gérer efficacement vos occupations pour vous concentrer sur les tâches les plus importantes. Pour cela, il est important d’établir des priorités.</p>



<p>Tout d’abord, concentrez-vous sur les compétences et les connaissances les plus importantes pour réussir l’examen. Il est essentiel de comprendre les fondamentaux de la cuisine, tels que la préparation des aliments, les techniques de cuisson et les règles d’hygiène et de sécurité alimentaire.</p>



<p>Ensuite, identifiez les sujets qui vous posent le plus de difficultés et concentrez-vous sur eux en premier. Cela peut inclure des techniques de cuisine spécifiques, des recettes particulières ou des connaissances théoriques plus complexes.</p>



<p>Il est également important de tenir compte de vos objectifs personnels et professionnels. Par exemple, si vous souhaitez travailler dans un domaine culinaire spécifique, concentrez-vous sur les compétences requises pour ce domaine en particulier.</p>



<p>En établissant des priorités claires, vous pouvez vous concentrer sur les tâches les plus importantes, ce qui vous permettra de gérer efficacement votre temps et d’atteindre vos objectifs de manière plus rapide et plus efficace.</p>



<h2 className="sous_titre">Faites des exercices pratiques et des examens blancs réguliers</h2>



<p>La pratique est essentielle pour réussir une <strong>formation accélérée de CAP</strong> cuisine. Pour maîtriser les compétences requises pour l’examen, il est important de s’exercer régulièrement en utilisant les techniques apprises. Vous pouvez vous entraîner à préparer des plats et des recettes de base.</p>



<p>En plus de la pratique régulière, il est également conseillé de <strong>faire des examens blancs régulièrement</strong>. Cela vous permettra de vous familiariser avec le format de l’examen et de vous entraîner à <strong>gérer votre temps efficacement</strong>. Les examens blancs vous donneront également l’occasion de voir où vous en êtes dans votre préparation. Et de déterminer les domaines où vous devez encore travailler.</p>



<p>Les exercices pratiques et les examens blancs sont complémentaires et vous aideront à mieux comprendre les erreurs que vous pourriez commettre et à les corriger avant l’examen. En effectuant des exercices pratiques régulièrement et en faisant des examens blancs, vous pourrez perfectionner vos compétences culinaires, gagner en confiance et être mieux préparé pour <strong>réussir l’examen de CAP cuisine</strong>.</p>



<h2 className="sous_titre">Utilisez les ressources disponibles.</h2>



<p>Il est important de tirer parti de toutes les ressources disponibles pour réussir une&nbsp;<strong>formation accélérée de CAP cuisine</strong>. Cela peut inclure des livres, des guides de préparation à l’examen, des vidéos, des tutoriels en ligne, des forums et groupes de discussion.</p>



<p>Les manuels de cuisine peuvent vous aider à acquérir des connaissances théoriques et pratiques sur les différentes techniques de base de cuisine et les éléments de base. Voici ma sélection de 6 livres pour préparer le CAP cuisine en candidat libre.</p>



<p>Les guides de préparation à l’examen vous donneront des informations spécifiques sur le format de l’examen et les compétences évaluées. Voici des articles qui détaillent le déroulement des examens de CAP cuisine.</p>



<p>Les vidéos de cuisine et les tutoriels en ligne peuvent vous montrer comment préparer des plats spécifiques et vous donner des astuces et des conseils pour perfectionner vos compétences. Voici une chaine YouTube qui fait très bien ce genre de travail.</p>



<p>En outre, les forums et groupes de discussion dans les réseaux sociaux vous permettent d’interagir avec d’autres candidats. Et de partager des idées, des conseils et des astuces sur la préparation de l’examen. Cela peut être particulièrement utile si vous êtes un candidat libre et que vous n’avez pas accès à une formation structurée.</p>



<p>En utilisant toutes les ressources disponibles, vous pourrez maximiser vos chances de réussir l’examen de CAP cuisine et d’obtenir votre diplôme dans les délais impartis.</p>



<h2 className="sous_titre">Prenez soin de vous :&nbsp;</h2>



<p>Lorsqu’on suit une formation accélérée de CAP cuisine, il est facile de se laisser absorber par les entrainements pratiques et préparations théoriques. Et de négliger son propre bien-être. Cependant, il est important de prendre soin de soi pour réussir tous les examens de manière générale.</p>



<p>Prendre soin de soi peut inclure les points suivants&nbsp;:</p>



<ul className="wp-block-list">
<li>Manger sainement&nbsp;;</li>



<li>Faire de l’exercice régulièrement&nbsp;;</li>



<li>Dormir suffisamment&nbsp;;</li>



<li>Gérer son stress</li>



<li>Prendre des pauses régulières.</li>
</ul>



<p>En effet, une alimentation saine et équilibrée peut améliorer la concentration et la mémoire, tandis que l’exercice physique peut réduire le stress et améliorer le sommeil. De plus, prendre des pauses régulières peut aider à prévenir l’épuisement professionnel et à maintenir une productivité élevée.</p>



<p>Il est également important de se donner du temps pour des activités non liées au CAP cuisine. Comme passer du temps avec sa famille et ses amis, regarder un film, ou pratiquer un passe-temps. Ces moments de détente peuvent aider à maintenir un bon équilibre entre la vie professionnelle et la vie privée. Ce qui est crucial pour réussir dans sa préparation du diplôme de cuisine et dans sa carrière de cuisinier professionnel.</p>



<p>Je vous encourage à travailler dur pour réussir le CAP cuisine. Et je vous à mettre en pratique les astuces présentées pour améliorer votre préparation de l’examen.</p>



<h2 className="sous_titre">Coaching pour <strong>formation accélérée de CAP cuisine</strong></h2>



<p>Si&nbsp;vous êtes actuellement en train de préparer votre&nbsp;<strong>CAP cuisine en accéléré</strong>&nbsp;et que vous avez besoin d’aide supplémentaire pour réussir, je suis là pour vous aider. En tant que coach spécialisé dans la formation accélérée de CAP cuisine, je peux vous fournir des astuces et des stratégies supplémentaires pour optimiser votre temps, renforcer vos compétences culinaires, et réussir l’examen avec succès.</p>



<p>En tant que coach, je peux vous offrir un <strong>programme personnalisé</strong> qui répondra à vos besoins spécifiques. Je peux vous aider à élaborer un plan d’étude efficace, à identifier vos forces et vos faiblesses, à vous donner des conseils pour améliorer vos compétences culinaires, et à vous préparer pour l’examen avec des exercices pratiques et des examens blancs.</p>



<p>En outre, en travaillant avec un coach spécialisé, vous bénéficierez d’un soutien professionnel et d’un accompagnement tout au long de votre préparation, ce qui peut vous aider à rester motivé, confiant et concentré sur votre objectif de réussir le CAP cuisine en accéléré.</p>



<p>Si vous êtes intéressé à en savoir plus sur mes services de coaching, n’hésitez pas à me contacter pour une consultation gratuite.</p>

	</div></article>,
	
	titre: "Cinq astuces pour réussir une formation accélérée de CAP cuisine",
	
	route: "/article/inq-astuces-pour-reussir-une-formation-acceleree-de-cap-cuisine/",
	
	categorie: "5",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1641734989_Female-chef-strong-with-a-four-hands.-_xl-beta-v2-2-2.png",
	
	lien: "https://cuisinedebase.com/cinq-astuces-pour-reussir-une-formation-acceleree-de-cap-cuisine/"
	
}

const J30 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Reconversion professionnelle en cuisine ou restauration : Comment la réussir</h1>

<p>La reconversion professionnelle est une décision importante et peut être un grand défi pour quiconque souhaite se lancer dans un nouveau domaine. Cependant, cette transition peut être très gratifiante. Notamment pour les personnes qui souhaitent changer de carrière et poursuivre leur passion en tant que cuisinier ou restaurateur, . Dans cet article, je vais examiner les étapes à suivre pour réussir sa <strong>reconversion professionnelle en cuisine</strong> ou restauration.</p>



<p>Mais au tout début, je vais vous présenter en quoi consiste le travail d’un cuisinier et celui d’un restaurateur.</p>


<div className="post-image">
<figure className="aligncenter size-full is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant.webp?resize=384%2C384&amp;ssl=1" alt="reconversion professionnelle en cuisine restaurant" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant.webp?w=512&amp;ssl=1 512w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant.webp?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant.webp?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant.webp?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant.webp?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/1-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant.webp?resize=90%2C90&amp;ssl=1 90w"></img><figcaption className="wp-element-caption"><strong>reconversion professionnelle en cuisine</strong></figcaption></figure></div>


<h2 className="sous_titre">Le travail du restaurateur</h2>



<p>Le travail d’un restaurateur consiste à gérer et à exploiter un restaurant. En veillant à ce que les clients aient une expérience culinaire agréable et mémorable. Le restaurateur doit être en mesure de planifier et de superviser toutes les activités de son restaurant. Notamment la gestion des menus, la coordination du personnel de cuisine et de salle, la gestion des stocks et des finances. Ainsi que la communication avec les fournisseurs et les clients. Pour cela, le restaurateur doit posséder des compétences en gestion et en leadership. Ainsi qu’une connaissance approfondie de l’industrie de la restauration. Il doit être capable de prendre des décisions rapides et efficaces. Tout en s’assurant que son restaurant fonctionne de manière rentable. En plus de cela, le restaurateur doit être en mesure de gérer les relations avec les clients. Et de fournir un service exceptionnel pour garantir que les clients reviennent. Le travail d’un restaurateur peut être très exigeant et stressant. Mais pour ceux qui sont passionnés par l’industrie de la restauration, c’est une carrière enrichissante et stimulante.</p>



<h2 className="sous_titre">Le travail de cuisinier</h2>



<p>Le travail d’un cuisinier est très exigeant et demande une grande attention aux détails. Le cuisinier est responsable de la préparation des aliments, de la création de recettes et de la gestion des menus. Il doit aussi gérer l’approvisionnement des ingrédients et de la supervision de la cuisine. Pour cela, le cuisinier doit posséder des compétences culinaires avancées. Telles que la connaissance des <a href="https://cuisinedebase.com/la-listes-des-techniques-de-base-a-maitriser-pour-le-cap-cuisine/">différentes techniques de cuisine</a>. La capacité à équilibrer les saveurs et les textures. Ainsi que la maîtrise des <a href="https://cuisinedebase.com/differentes-methodes-de-cuisson-comment-maitriser/">différentes cuissons</a>. Il doit également être capable de travailler rapidement et efficacement, tout en assurant la qualité des plats qu’il prépare. En plus de cela, le cuisinier doit être capable de travailler en équipe, de communiquer efficacement avec les autres membres de la cuisine et de gérer son temps de manière efficace. Le travail d’un cuisinier peut être très stressant et peut exiger de longues heures, mais pour ceux qui sont passionnés par la cuisine, c’est une carrière très enrichissante et gratifiante.</p>



<h2 className="sous_titre">Les étapes à suivre pour réussir sa <strong>reconversion professionnelle en cuisine</strong></h2>



<h2 className="sous_titre">Identifiez votre passion pour la cuisine ou la restauration&nbsp;</h2>



<p>La première étape pour réussir sa reconversion professionnelle est de s’assurer que vous êtes passionné par le domaine de la cuisine ou de la restauration. Prenez le temps de réfléchir à ce qui vous attire dans ce domaine, à vos compétences et à votre expérience antérieure. Cela vous aidera à identifier si c’est une passion que vous souhaitez poursuivre comme carrière.</p>



<h2 className="sous_titre">Les formations en cuisine</h2>



<p>Une fois que vous avez identifié votre passion pour la cuisine ou la restauration, il est important de faire des recherches sur les différentes options de formation disponibles. Il existe plusieurs options pour se former dans ce domaine, notamment des cours professionnels, des programmes de formation, des stages et des apprentissages. Faites des recherches approfondies pour trouver la meilleure option pour vous.</p>



<p>Vous pouvez consulter cet article dans lequel j’explique ….</p>



<h2 className="sous_titre">Acquérez des compétences et de l’expérience&nbsp;</h2>



<p>Une fois que vous avez choisi la formation que vous allez suivre, il est temps d’acquérir des compétences et de l’expérience. Assurez-vous de suivre la formation avec diligence et de mettre en pratique les compétences apprises en travaillant dans un restaurant ou une cuisine professionnelle. Cela vous aidera à acquérir l’expérience dont vous avez besoin pour réussir dans ce domaine.</p>



<p>Voici la liste des techniques pro……</p>



<h2 className="sous_titre">Construisez votre réseau professionnel&nbsp;</h2>



<p>Construire un réseau professionnel est important dans tous les domaines, y compris la cuisine et la restauration. Connectez-vous avec des professionnels de l’industrie, assistez à des événements de l’industrie et rejoignez des groupes de réseaux sociaux pour vous connecter avec d’autres professionnels de l’industrie. Cela vous aidera à vous faire connaître dans le domaine et à trouver des opportunités professionnelles.</p>



<h2 className="sous_titre">Trouvez un mentor&nbsp;</h2>



<p>Trouver un mentor peut être très bénéfique pour réussir dans la cuisine ou la restauration. Un mentor peut vous aider à apprendre les ficelles du métier, vous donner des conseils pratiques et vous guider dans votre carrière. Recherchez un mentor dans votre réseau professionnel ou au sein de votre programme de formation.</p>



<h2 className="sous_titre">Soyez prêt à travailler dur&nbsp;</h2>



<p>Enfin, être prêt à travailler dur est essentiel pour réussir dans la cuisine ou la restauration. Ce domaine est connu pour être exigeant, avec des heures de travail longues et des conditions difficiles. Cependant, si vous êtes passionné par ce que vous faites, cela en vaudra la peine.</p>



<h2 className="sous_titre">Réussir sa <strong>reconversion professionnelle en cuisine</strong></h2>



<p>En conclusion, la <strong>reconversion professionnelle en cuisine</strong> ou restauration peut être une décision gratifiante pour ceux qui sont passionnés par ce domaine. En suivant les étapes décrites ci-dessus, vous pouvez réussir dans cette carrière stimulante et exigeante.</p>

</div></article>,

titre: "Reconversion professionnelle en cuisine ou restauration : Comment la réussir",

route: "/article/reussir-reconversion-professionnelle-en-cuisine-restaurant/",

categorie: "5",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/2-draw-me-a-portrait-of-robert-deniro-disguised-as-a-restaurant-chef-in-a-large-restaurant.webp",

lien: "https://cuisinedebase.com/reussir-reconversion-professionnelle-en-cuisine-restaurant/"

}

const J31 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Comment améliorer la saveur de vos plats avec les herbes et les épices</h1>

<p>L’utilisation des herbes et des épices peut transformer un plat ordinaire en une expérience culinaire extraordinaire. Les herbes aromatiques fraîches ou séchées. Les épices moulues, grillées ou encore infusées sont des ingrédients incontournables pour ajouter de la saveur, de l’arôme et de la couleur à vos plats. Cependant, il est facile de se perdre dans la variété d’herbes et d’épices disponibles sur le marché. Et de ne pas savoir comment les utiliser efficacement. Dans cet article, je vais vous donner des conseils pratiques pour utiliser <a href="https://cuisinedebase.com/les-secrets-des-herbes-aromatiques-en-cuisine/">les herbes aromatiques</a> et les épices dans votre cuisine afin&nbsp;<strong>d’améliorer la saveur</strong> de vos plats. Que vous soyez débutant ou cuisinier expérimenté, ces astuces vous aideront à devenir un pro des herbes et des épices.</p>


<div className="post-image">
<figure className="aligncenter size-full is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/epices-en-cuisine.webp?resize=256%2C256&amp;ssl=1" alt="Les épices pour améliorer la saveur des plats" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/epices-en-cuisine.webp?w=512&amp;ssl=1 512w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/epices-en-cuisine.webp?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/epices-en-cuisine.webp?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/epices-en-cuisine.webp?resize=100%2C100&amp;ssl=1 100w" sizes="(max-width: 256px) 100vw, 256px"></img><figcaption className="wp-element-caption"> Améliorer la saveur des plats</figcaption></figure></div>


<h2 className="sous_titre">Améliorer la saveur en combinant différentes herbes et épices</h2>



<p>Les herbes et les épices peuvent être utilisées individuellement pour ajouter de la saveur à un plat. Mais leur combinaison peut également créer des&nbsp;<strong>saveurs complexes et uniques</strong>. Il est important de comprendre les associations entre différentes herbes et épices pour créer des saveurs harmonieuses et équilibrées. Par exemple, la combinaison de thym, de romarin et d’ail ajoute une saveur robuste aux viandes grillées. Tandis que le mélange de coriandre, de cumin et de paprika apporte une saveur épicée à votre plat. En outre, l’utilisation de différentes herbes et épices à différentes étapes de la préparation du plat peut également&nbsp;<strong>améliorer la saveur</strong>. Par exemple, l’ajout de thym et de laurier en début de cuisson des soupes ou des ragoûts permet à leurs saveurs de se développer et de se fondre dans le plat. Tandis que l’ajout de basilic frais à la fin de la préparation d’une sauce tomate donne une saveur fraîche et aromatique. En expérimentant avec différents mélanges d’herbes et d’épices, vous pouvez créer des saveurs complexes et surprenantes qui feront ressortir le meilleur de vos plats.</p>



<h2 className="sous_titre">Améliorer la saveur sans masquer le goût des ingrédients principaux</h2>



<p>Le dosage des herbes et des épices est crucial pour ne pas masquer la saveur des ingrédients principaux de votre plat. Il est important de se rappeler que les herbes et les épices doivent être utilisées pour&nbsp;<strong>améliorer la saveur</strong>&nbsp;des ingrédients et non pour les submerger. Que ce soit pour les herbes aromatiques ou les épices moulues, commencez toujours par de toutes petites doses (une demi-cuillère à café par exemple). Puis ajustez selon vos préférences de goût. N’oubliez pas que les épices grillées ou torréfiées ont un goût plus intense que les épices non traitées. Il est important de goûter le plat tout au long de la préparation et d’ajouter les herbes et les épices progressivement pour éviter d’en ajouter trop et de&nbsp;<strong>masquer la saveur des ingrédients principaux</strong>. Avec un dosage approprié, les herbes et les épices peuvent&nbsp;<strong>améliorer la saveur</strong>&nbsp;de vos plats sans dominer leur goût.</p>



<h2 className="sous_titre">S’adapter aux différents types de cuisine</h2>



<p>L’utilisation des herbes et des épices varie selon les différentes cuisines du monde. Par exemple, la cuisine asiatique utilise souvent des herbes telles que la coriandre, la menthe, le basilic thaï et le gingembre frais. Et ce dans le but de créer des saveurs complexes et équilibrées. La cuisine méditerranéenne utilise souvent des herbes comme le romarin, le thym, le basilic et l’origan. Afin de rehausser la saveur de plats tels que les pâtes, les pizzas et les viandes grillées. La cuisine indienne utilise une variété d’épices. Telles que la cardamome, le cumin, la cannelle et le curcuma pour <a href="https://cuisinedebase.com/epices-en-cuisine-comment-booster-la-saveur-de-vos-recettes/">créer des plats épicés et aromatiques</a>. Il est important de comprendre les herbes et les épices les plus couramment utilisées dans chaque cuisine. Cela permet de créer des saveurs authentiques. Cependant, il est également important de ne pas craindre d’expérimenter et de combiner différents types d’herbes et d’épices. C’est la clé pour&nbsp;<strong>créer des saveurs uniques et personnelles</strong>.</p>



<h2 className="sous_titre">Expérimenter pour créer des plats savoureux et originaux.</h2>



<p>En conclusion, les herbes et les épices peuvent ajouter une richesse de saveurs et d’arômes à vos plats. Ils peuvent aussi transformer un plat ordinaire en quelque chose de spécial. Il n’y a pas de règles strictes en matière de combinaisons d’herbes et d’épices. Alors n’hésitez pas à expérimenter et à trouver les combinaisons qui fonctionnent le mieux pour vos plats. En gardant à l’esprit les conseils pour doser correctement et combiner les herbes et les épices. Vous pouvez créer des plats délicieux et originaux qui émerveilleront vos papilles gustatives. Alors, n’hésitez plus, sortez vos épices et vos herbes préférées, et commencez à cuisiner !</p>

</div></article>,

titre: "Comment améliorer la saveur de vos plats avec les herbes et les épices",

route: "/article/comment-ameliorer-la-saveur-de-vos-plats-avec-les-herbes-et-les-epices/",

categorie: "5",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/04/epices-en-cuisine.webp",

lien: "https://cuisinedebase.com/comment-ameliorer-la-saveur-de-vos-plats-avec-les-herbes-et-les-epices/"

}

const J32 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Idée recettes pour repas de fêtes de fin d’année. Noël et nouvel an</h1>

<p>À l’approche des<strong> fêtes de fin d’année</strong>, nous sommes nombreux à vouloir faire des petits <strong>plats et repas de fêtes.</strong> Pour nous faire plaisir, mais aussi faire plaisir à nos proches. Mais avec la hausse des prix dans quasiment tous les domaines, le <strong>budget</strong> ne cesse de se <strong>serrer</strong> de plus en plus. Alors j’ai pensé qu’un article qui regroupe quelques <strong>recettes festives</strong> et <strong>pas chères</strong> pourrait vous intéresser.</p>


<div className="post-image">
<figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/04/20181110_225330.jpg?resize=407%2C229&amp;ssl=1" alt="repas de fêtes" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/04/20181110_225330.jpg?w=1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/04/20181110_225330.jpg?resize=600%2C338&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/04/20181110_225330.jpg?resize=300%2C169&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/04/20181110_225330.jpg?resize=768%2C432&amp;ssl=1 768w" sizes="(max-width: 407px) 100vw, 407px"></img><figcaption>Repas de fêtes de fin d’année</figcaption></figure></div>


<p>Mais avant de commencer, sachez que je participe avec cet article a un événement interblogueur organisé par Julie&nbsp;l’auteure de&nbsp;<a href="https://petits-plats-faciles.com/"><u>Petits Plats Faciles</u></a>, un blog culinaire dédié à la cuisine facile, rapide et économique. J’ai particulièrement aimé cet article qui donne des <a href="https://petits-plats-faciles.com/que-faire-avec-du-pain-dur/" target="_blank" rel="noopener noreferrer">idées de recette avec du pain dur</a>.</p>



<h2 className="sous_titre"><strong>Recettes d’entrée pour les repas de fêtes de fin d’année&nbsp;</strong></h2>



<p>Les professionnels de cuisine parlent de <strong>fiche technique</strong> plutôt que de recettes. Alors on ne va pas dérober à la règle et je vous donnerai aussi des fiches techniques d’<strong>entrée pour Noël et le jour de l’an</strong>.</p>



<h2 className="sous_titre"><strong>Idee de recette d’entrées pour les repas de fêtes</strong></h2>



<p>Les <strong>crustacés ainsi que les produits de la mer</strong> sont des stars pendant les fêtes de fin d’année. On essaie de les utiliser dans beaucoup de recettes, principalement dans des amuses bouches. Cependant, les <strong>produits de la mer </strong>sont souvent <span>très onéreux</span>. Mais pas de panique, voici une idée d’<strong>entrée pour cette période de fêtes</strong> très riche en goût et pas très chère. Pour mettre un peu de <span>saveur maritime</span> dans votre repas, je vous propose de faire des <strong>mini quiches scandinaves</strong>. C’est des quiches à base de <strong>saumon</strong>. Vous pouvez utiliser du saumon fumé ou des pavés de saumon coupés en dés. Vous pouvez substituer le saumon à de la truite pour baisser un peu plus la facture 😉</p>



<p>Voici la fiche technique pour faire des mini quiches. Des petits emportes pièces et des petits cercles, ou moules, sont nécessaires.</p>


<h2 className="sous_titre">Des fruits et légumes dans les repas de fin d’année</h2>



<p>La période de Noël est le moment de l’année où on devient un peu schizophrène, du moins c’est ce que je pense. On veut bien manger mais sans prendre de volume ou de poids. C’est pour cela que je vous propose une autre entrée avec plein de légumes… Une autre idée bon marché et qui permet d’avoir un peu de nourriture saine dans votre <strong>repas de fêtes</strong>.</p>



<p>Effectivement, vous pouvez tailler des légumes en bâtonnets, de 5 millimètres d’épaisseur. Et pour ce faire, vous pouvez utiliser des carottes, des navets, des concombres, ou tout autre légume que vous pouvez manger cru et couper en bâtonnets. </p>



<p>Pour accompagner les légumes, vous pouvez faire une sauce mayonnaise dont voici la recette : </p>



<p>Alors, comme<strong> éléments de base</strong> vous avez besoin de :</p>



<ul className="wp-block-list"><li>2 jaunes d’œufs&nbsp;</li><li>300ml d’huile</li><li>20g de moutarde</li><li>Du vinaigre, du sel et du piment de&nbsp;Cayenne</li></ul>



<p>Et, en ce qui concerne la technique de fabrication, commencez par réunir dans un récipient en inox les jaunes d’œufs, la moutarde, le vinaigre et, éventuellement le piment de Cayenne. Ensuite, fouettez à l’aide d’un petit fouet en incorporant progressivement l’huile jusqu’à obtenir l’onctuosité d’une sauce mayonnaise. Puis vérifiez l’assaisonnement.</p>



<h2 className="sous_titre"><strong>Plats pas cher pour repas de fêtes de fin d’année</strong></h2>



<p>Place maintenant au plat principal. Et là encore je vous propose de faire une recette toute simple mais qui plaira forcément à vos convives. C’est de préparer des&nbsp;<strong>escalopes de volaille</strong>, puis de les paner à l’anglaise et enfin de les sauter. Tout d’abord vous commencez par lever des filets de volaille, poulet ou dinde selon votre préférence. Puis pour&nbsp;<strong>paner les escalopes</strong>, vous les passez successivement dans de la&nbsp;<strong>farine</strong>. Puis dans un mélange d’œufs entiers et d’huile assaisonné de sel et de poivre. Ensuite vous les couvrez avec de la mie de pain tamisée. Et enfin vous sautez les escalopes de volaille avec un peu de beurre et d’huile.</p>



<p>Les <strong>escalopes de volaille</strong> s’accompagnent très bien avec du <strong>riz pilaf</strong> ou des pommes de terre écrasées.</p>



<p><strong>Dessert pour les fêtes de fin d’année&nbsp;</strong></p>



<p>Et pour le dessert je vous propose de faire des verrines de <a href="https://cuisinedebase.com/mousse-au-chocolat/" target="_blank" rel="noopener noreferrer">mousse au chocolat</a>. Ainsi vous pouvez utiliser les blancs d’oeufs mis de côté suite à la confection de la mayonnaise. De cette manière vous luterez contre le gaspillage et vous réduirez à la même occasion le prix par portion de votre <strong>repas de fête de fin d’année</strong>.</p>

</div></article>,

titre: "Idée recettes pour repas de fêtes de fin d’année. Noël et nouvel an",

route: "/article/idee-recettes-repas-fetes-fin-annee-noel-nouvel-an",

categorie: "5",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/04/20181110_225330.jpg",

lien: "https://cuisinedebase.com/idee-recettes-repas-fetes-fin-annee-noel-nouvel-an/"

}

const J33 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Challenge CAP cuisine candidat libre session 2023</h1>
	
	<p>Vous êtes nombreux à vouloir passer cette année le CAP cuisine en candidat libre. Et vous êtes nombreux à vous poser des questions sur la méthode adéquate pour bien préparer l’épreuve pratique (EP2) «&nbsp;réalisation de la production de cuisine&nbsp;». Si vous vous reconnaissez dans ces phrases alors le&nbsp;<strong>challenge CAP cuisine</strong>&nbsp;est fait pour vous.</p>


<div className="post-image">
<figure className="aligncenter size-medium"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=300%2C169&amp;ssl=1" alt="challenge CAP cuisine" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=300%2C169&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=1024%2C577&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=768%2C433&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=1536%2C865&amp;ssl=1 1536w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=1360%2C765&amp;ssl=1 1360w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=600%2C338&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=106%2C60&amp;ssl=1 106w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?resize=160%2C90&amp;ssl=1 160w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png?w=1640&amp;ssl=1 1640w" sizes="(max-width: 300px) 100vw, 300px"></img><figcaption><strong>Challenge CAP cuisine</strong></figcaption></figure></div>


<h2 className="sous_titre">Organisation du challenge CAP cuisine</h2>



<p>Le&nbsp;<strong>challenge CAP cuisine</strong>&nbsp;se passe sur facebook via le&nbsp;<a href="https://www.facebook.com/groups/425950957956742/">groupe privé cuisine de base</a>. Demandez votre adhésion au groupe tant que c’est encore possible&nbsp;!</p>



<p>Voici l’organisation de ce challenge&nbsp;:</p>



<ul className="wp-block-list"><li>lundi : je poste le&nbsp;<strong>défi de la semaine</strong>&nbsp;: (2 fiches techniques)</li><li>Tous les membres du groupe peuvent participer aux défis</li><li>Toutes les&nbsp;<strong>questions</strong>&nbsp;sont les bienvenues, je compte sur vous pour les&nbsp;<strong>poser et répondre</strong>&nbsp;si vous connaissez la réponse</li><li>Chaque&nbsp;<strong>1er lundi du mois</strong>&nbsp;je vous propose un examen blanc à faire selon les conditions réelles (je compte sur vous pour les respecter 🙂)</li><li>Chacun est libre de&nbsp;<strong>partager ses réalisations</strong>&nbsp;/ conseils / difficultés / bons moments …</li></ul>



<p>Le début des entrainements commencera&nbsp;<strong>lundi 29 aout</strong>.</p>



<p>Les personnes qui nous rejoindront au cours de l’année vous êtes évidemment les bienvenues, vous pouvez&nbsp;<strong>reprendre les défis</strong>depuis le début ou participer directement au&nbsp;<strong>défi en cours.</strong></p>



<h2 className="sous_titre">Avant de commencer le défi CAP cuisine</h2>



<p>Il y a certaines choses qui sont essentielles à connaitre pour pouvoir passer le <strong>CAP cuisine en candidat libre</strong>.</p>



<p>Tout d’abord la procédure pour s’inscrire en tant que <strong>candidat libre</strong>&nbsp;:</p>



<figure className="wp-block-embed is-type-wp-embed is-provider-cuisine-de-base wp-block-embed-cuisine-de-base"><div className="wp-block-embed__wrapper">
<blockquote className="wp-embedded-content" data-secret="pqJA0EogXA"><a href="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/">Comment Faire L’inscription CAP Cuisine Candidat Libre</a></blockquote><iframe loading="lazy" className="wp-embedded-content" sandbox="allow-scripts" security="restricted" title="«&nbsp;Comment Faire L’inscription CAP Cuisine Candidat Libre&nbsp;» — Cuisine De Base" src="https://cuisinedebase.com/comment-passer-son-cap-cuisine-en-candidat-libre/embed/#?secret=8UCWR83LkV#?secret=pqJA0EogXA" data-secret="pqJA0EogXA" width="600" height="224"></iframe>
</div></figure>



<p>Ensuite, le matériel nécessaire pour <strong>préparer le CAP cuisine seul </strong>dans sa cuisine, ou même avec une école ou organisme de formation&nbsp;:</p>



<figure className="wp-block-embed is-type-wp-embed is-provider-cuisine-de-base wp-block-embed-cuisine-de-base"><div className="wp-block-embed__wrapper">
<blockquote className="wp-embedded-content" data-secret="sftg5FHFzd"><a href="https://cuisinedebase.com/materiels-du-cuisinier-coutellerie-mallette-de-cuisine/">Matériels du cuisinier, coutellerie, mallette de cuisine</a></blockquote><iframe loading="lazy" className="wp-embedded-content" sandbox="allow-scripts" security="restricted" title="«&nbsp;Matériels du cuisinier, coutellerie, mallette de cuisine&nbsp;» — Cuisine De Base" src="https://cuisinedebase.com/materiels-du-cuisinier-coutellerie-mallette-de-cuisine/embed/#?secret=Q7xwPJJph2#?secret=sftg5FHFzd" data-secret="sftg5FHFzd" width="600" height="224"></iframe>
</div></figure>



<h2 className="sous_titre">Des livres pour préparer le CAP cuisine</h2>



<p>Puis, il est essentiel de se faire aider de certains livres. Et à la tête de ces livres bien sûr, l’indétrônable ouvrage la&nbsp;<strong>cuisine de référence</strong>.&nbsp;</p>



<p>&nbsp;<a href="https://cuisinedebase.com/livre-avoir-pour-apprendre-les-bases-de-la-cuisine-cap-cuisine/">6 Livres pour préparer le CAP cuisine en candidat libre.</a></p>



<p>Il est aussi important de savoir à «&nbsp;quelle sauce vous allez être mangé&nbsp;»&nbsp;😊. De comprendre les différentes épreuves de l’examen CAP cuisine et les conditions pour se faire dispenser des épreuves des matières générales, pour ne passer que les matières professionnelles.</p>



<p>Voici une vidéo YouTube qui traite de ce sujet.</p>



<figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div className="wp-block-embed__wrapper">
<iframe loading="lazy" title="CAP cuisine examen pratique, écrit et oral" width="910" height="512" src="https://www.youtube.com/embed/ttL9rD0nJIo?start=5&amp;feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
</div></figure>



<p>Puis, de jeter un coup d’œil sur les sujets des épreuves professionnelles des années passées.&nbsp;</p>



<p>Voici une autre vidéo YouTube qui explique le déroulement des épreuves professionnelles, EP1, EP2 et PSE.</p>



<figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div className="wp-block-embed__wrapper">
<iframe loading="lazy" title="CAP cuisine candidat libre. Les épreuves professionnelles. EP1, EP2 et PSE" width="910" height="512" src="https://www.youtube.com/embed/pHGy2WBEnPc?start=883&amp;feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
</div></figure>



<p>Et une analyse des sujets des trois dernières années de l’épreuve EP2 (réalisation de la production de cuisine)</p>



<ul className="wp-block-list"><li><a href="https://cuisinedebase.com/epreuve-cap-cuisine-2021-les-sujets-de-lexamen-pratique/">Épreuve CAP cuisine 2021. Les sujets de l’examen pratique</a></li><li><a href="https://cuisinedebase.com/epreuves-pratiques-de-cap-cuisine-session-2020-candidat-libre/">Les épreuves pratiques de CAP cuisine session 2020 (Candidat libre)</a></li><li><a href="https://cuisinedebase.com/cap-cuisine-session-2019-le-point-sur-les-examens-pratiques-en-3-questions/">CAP cuisine Session 2019. Sujets et analyse de l’épreuve pratique</a></li></ul>



<p>Aussi une proposition de correction de l’épreuve professionnelle EP1 (organisation de la production de cuisine)</p>



<ul className="wp-block-list"><li><a href="https://cuisinedebase.com/correction-epreuve-ep1-2021-examen-cap-cuisine/">Correction de l’épreuve EP1 2021. Examen CAP cuisine</a></li><li><a href="https://cuisinedebase.com/correction-epreuve-ep1-2020-organisation-production-cap-cuisine/">Épreuve CAP cuisine. Sujet et Correction de l’épreuve EP1 2020.</a></li><li><a href="https://cuisinedebase.com/correction-ep1-organisation-de-la-production-de-cuisine-session-2019/">Correction EP1 Organisation de la production de cuisine session 2019</a></li></ul>



<h2 className="sous_titre">Semaine 1 du challenge CAP cuisine</h2>



<p>Lors de ce premier défi, on va essayer de travailler les <strong>techniques de base</strong> suivantes&nbsp;:</p>



<ul className="wp-block-list"><li>Tailler des légumes&nbsp;;</li><li>Faire une <strong>sauce mayonnaise</strong>&nbsp;;</li><li>Monder des tomates&nbsp;;</li><li><strong>Cuire</strong> des légumes <strong>à l’anglaise</strong>&nbsp;;</li><li>Cuire des <strong>œufs durs</strong>&nbsp;;</li><li>Faire une <strong>pâte brisée</strong> sucrée&nbsp;;</li><li>Foncer la tarte&nbsp;;</li><li>Confectionner une <strong>marmelade</strong>.</li></ul>



<p>Les 2 fiches techniques qui permettent de travailler ces techniques de base sont&nbsp;:</p>



<p>Macédoine de légumes&nbsp;:&nbsp;<a href="https://cuisinedebase.com/fiche-technique-de-fabrication-macedoine-de-legumes-mayonnaise/">https://cuisinedebase.com/fiche-technique-de-fabrication-macedoine-de-legumes-mayonnaise/</a></p>



<p>Et tarte aux pommes&nbsp;:&nbsp;<a href="https://cuisinedebase.com/tarte-aux-pommes/">https://cuisinedebase.com/tarte-aux-pommes/</a></p>



<p>En complément, voici un article qui détaille les différence entre les coupes des légumes&nbsp;:&nbsp;<a href="https://cuisinedebase.com/techniques-de-base-tailles-des-legumes/">https://cuisinedebase.com/techniques-de-base-tailles-des-legumes/</a></p>



<p>Pour aller plus loin, on peut faire une <strong>jardinière de légumes</strong>.</p>
	
	</div></article>,
	
	titre: "Challenge CAP cuisine candidat libre session 2023",
	
	route: "/article/challenge-cap-cuisine-candidat-libre-session-2023",
	
	categorie: "5",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Objectif-CAP-cuisine-v2.png",
	
	lien: "https://cuisinedebase.com/challenge-cap-cuisine-candidat-libre-session-2023/"
	
}

const J34 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Les matières générales dans l’examen CAP cuisine</h1>

<p>Bonjour, c’est Hicham de cuisine de base, j’espère que vous allez bien. Bienvenue sur ma chaîne cuisine de base une nouvelle vidéo sur les questions réponses que je vous ai promis. Dans cette nouvelle vidéo, je vais vous détailler les épreuves des <strong>matières générales</strong>.</p>



<figure className="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div className="wp-block-embed__wrapper">
<iframe title="CAP cuisine candidat libre. Les épreuves générales. Maths, science, Français Anglais, EPS." src="https://www.youtube.com/embed/QU0vobX6Dqg?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
</div><figcaption>Epreuve CAP cuisine <strong>matières générales</strong></figcaption></figure>



<p>Donc nous avons vu dans une vidéo précédente sur <a href="https://cuisinedebase.com/epreuves-pratiques-de-cap-cuisine-session-2020-candidat-libre/">toutes les épreuves de CAP cuisine</a>, que les matières générales sont au nombre de 4&nbsp;:</p>



<ul className="wp-block-list"><li>donc vous avez français histoire géo, enseignement moral et civique,&nbsp;</li><li>puis langue vivante, étrangère</li><li>et Maths physique-chimie&nbsp;</li><li>et enfin éducation physique et sportive,&nbsp;</li><li>sans compter l’épreuve facultative, qui est une épreuve de langue vivante.&nbsp;</li></ul>


<div className="post-image">
<figure className="aligncenter size-full is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?resize=414%2C311&amp;ssl=1" alt="Examen CAP cuisine" className="wp-image-2527" width="414" height="311" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?w=1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?resize=300%2C225&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?resize=768%2C576&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?resize=600%2C450&amp;ssl=1 600w" sizes="(max-width: 414px) 100vw, 414px"></img><figcaption>Toutes les épreuves CAP cuisine</figcaption></figure></div>


Donc je vais détailler l’ensemble de ces 5 épreuves de matière générale, et je vous ai aussi montré La durée de chacune de ces épreuves, ainsi que le coefficient de chacune de ces épreuves&nbsp;:



<ul className="wp-block-list"><li>donc français, histoire géo, on a vu que ça a duré 2h15 avec un coefficient 3.&nbsp;</li><li>La langue vivante étrangère c’est 20 Min avec un coefficient 1</li><li>&nbsp;L’EPS éducation physique et sportive c’est coefficient 1</li><li>et l’épreuve de mathématiques physique-chimie c’est une épreuve écrite et elle va durer 2h et son coefficient est 2</li></ul>



<h2 className="sous_titre">Français, histoire, géographie et enseignement moral et civique</h2>



<p>OK donc maintenant, dans cette vidéo, on va voir un peu plus en détail les attentes derrière ces épreuves et concrètement, comment elles se déroulent.&nbsp;</p>



<p>Voilà donc là la première épreuve c’est que je vais vous détailler est français, histoire, géographie et enseignement moral et civique. Cette épreuve est composée de 2 épreuves.&nbsp;</p>



<h2 className="sous_titre">Épreuve écrite de français histoire géo EMC</h2>



<p>une première épreuve français qui est sur 10 points. C’est une épreuve écrite qui dure 2 heures. Elle est composée de 2 parties&nbsp;:&nbsp;</p>



<ul className="wp-block-list"><li>Dans la première partie le candidat doit répondre par écrit sur un texte fictionnel à des questions de vocabulaire et de compréhension.</li><li>Une 2e partie, c’est une rédaction, 15 à 20 lignes, donc on va vous demander de faire une production rédactionnelle de 15 à 20 lignes selon des consignes bien déterminées.&nbsp;</li></ul>



<h2 className="sous_titre">Épreuve orale de français histoire géo EMC</h2>



<p>Puis, une deuxième épreuve qui va durer 15 Min et elle va se dérouler de. La manière suivante. Donc, le candidat en fait vous. Vous devez vous présenter avec 2 dossiers. Un premier dossier à dominante histoire, et le 2e dossier à dominante géographie. Ces dossiers doivent comporter au maximum 3 pages. D’accord, 3 pages au maximum le jury, il va choisir un de ses dossiers. Dans les 3 pages, il va y avoir normalement des schémas, il y aura des figures, des illustrations, du texte et ainsi de suite… Donc il va choisir un de ces 2 dossiers et il va vous demander de lui présenter, donc vous aurez 5 Min pour présenter ce dossier et 10 min d’entretien. Donc sous forme de questions-réponses. Le jury va vous poser certaines questions par rapport à ce dossier et vous devez lui répondre. Voilà et donc en tout cette épreuve va durer 15 Min.</p>



<h2 className="sous_titre">Mathématiques sciences physiques et chimiques</h2>



<h2 className="sous_titre">Épreuve de mathématiques. Matières générales</h2>



<p>Ensuite c’est l’épreuve de mathématiques, sciences physiques et chimiques. Vous avez une partie de maths et une partie de physique chimie, la partie de maths, c’est une partie écrite, donc vous aurez 2 à 3 exercices avec des questions de difficulté progressive. Je vous mettrai un lien pour avoir le programme de mathématiques par exemple. Mais tout de même, sachez que les exercices vont être des exercices de résolution de de problèmes simples. Qui vont demander des compétences relatives par exemple, des problèmes de proportionnalité, des problèmes de résolution, de problèmes de premier degré. Des problèmes de pourcentage aussi, ça peut être des problèmes de pourcentage. Voilà, c’est des choses qui sont relativement simples, mais qui demandent quand même un certain temps de préparation.&nbsp;</p>



<h2 className="sous_titre">Épreuve de physique chimie. Matières générales</h2>



<p>Ensuite, la 2e partie, c’est physique chimie, c’est une partie aussi écrite et donc elle va se composer de 2 parties différentes ou 2 exercices selon les épreuves.&nbsp;</p>



<p>Donc, le premier exercice avec une expérience ou un protocole. Donc on va vous demander d’analyser une expérience par exemple ou de proposer un protocole expérimental qui permet de répondre à une problématique. Et la 2e partie ou le 2<sup>ème</sup>&nbsp;exercice, on va vous donner des questions sur des grandeurs liées par une relation. Par exemple la vitesse. Regarder la vitesse est liée à la durée et à la distance par exemple. Donc on va vous donner une grandeur et on va vous demander de calculer l’autre grandeur et ainsi de suite. Donc ça, c’est un exemple qui m’est venu en tête, mais il peut y avoir plusieurs autres exemples. Il y en a plusieurs. Voilà donc cette épreuve va durer 2h et a un coefficient 1.</p>



<h2 className="sous_titre">Ne pas passer les épreuves de Matières générales</h2>



<p>Je ne l’ai pas dit au début, mais sachez que ces épreuves, ces épreuves de matière générale, vous pouvez vous faire dispenser de ces épreuves de matière générale. Vous pouvez vous faire dispenser de Math français, histoire géo EMC. Enfin, toutes les épreuves de matière générale. Si vous avez un niveau bac ou un niveau supérieur ? Donc. C’est très important de le savoir.&nbsp;</p>



<p>Bon c’est en fonction de votre stratégie, hein, ça peut être une stratégie pour avoir justement des notes très élevées. C’est un risque à prendre. Vous pouvez ne pas vous faire dispenser de ces matières justement pour avoir des notes très élevées comme ça vous augmenterez votre chance d’avoir le&nbsp;<strong>diplôme de CAP cuisine</strong>, mais sachez quand même que l’épreuve la plus importante, c’est l’EP2 comme je l’ai développé dans une vidéo précédente.</p>



<h2 className="sous_titre">Éducation physique et sportive</h2>



<p>Ensuite éducation physique et sportive. Donc là on arrive à l’épreuve d’éducation physique et sportive. Le candidat choisi 2 épreuves à partir d’une liste prédéfinie. Chaque épreuve est notée sur 20. La note finale est la moyenne des 2 notes. Là je vous donne la liste des couples d’activités qui sont proposées&nbsp;:</p>



<ul className="wp-block-list"><li>donc demi-fond. Badminton ensemble,&nbsp;</li><li>demi-fond et tennis de table, ensemble&nbsp;</li><li>gymnastique au sol et tennis de table, ensemble&nbsp;</li><li>sauvetage et badminton ensemble,&nbsp;</li><li>gymnastique au sol et badminton ensemble.&nbsp;</li></ul>



<p>Voilà donc ce sont les couples d’activités qui vous seront proposés. Vous choisirez un couple d’activités. Et chacune de ces activités sera notée sur 20 et votre note finale, elle sera la moyenne de ces 2 notes.&nbsp;</p>



<h2 className="sous_titre">Épreuves de Matières générales de la langue vivante</h2>



<p>Ensuite ensuite bah vous avez les épreuves de la langue vivante. Celle-ci va durer 20 Min. Donc, vous avez une un temps de présentation. Donc c’est soit vous allez parler d’une activité professionnelle. Ou bien de votre parcours personnel professionnel, soit vous allez parler de l’activité de cuisinier ou enfin une activité qui est en relation avec la cuisine, en tout cas. Et après les membres du jury vont vous poser certaines questions pour créer un échange. En tout cas, il y aura un échange entre vous et le jury pour pour évaluer vos compétences en langue vivante.&nbsp;</p>



<h2 className="sous_titre">Épreuve facultative de langue vivante</h2>



<p>Voilà donc ça, c’est pour la langue vivante. L’épreuve obligatoire après, vous avez une 2e épreuve qui est facultative, de langue vivante. Elle est organisée quasiment de la même manière que l’épreuve obligatoire. Mais si vous voulez plus de renseignements Quant au passage de cette épreuve facultative, vous pouvez consulter <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000604088/" target="_blank" rel="noopener noreferrer">les références</a> que vous avez devant vos yeux. En voilà donc, c’est des références qui sont faciles à retrouver sur Internet. Vous pouvez avoir plus de détails pour cette épreuve facultative de langue vivante.&nbsp;</p>



<h2 className="sous_titre">Examen CAP cuisine</h2>



<p>Voilà un petit récapitulatif donc pour toutes les épreuves de CAP cuisine, un petit récapitulatif que vous allez trouver sur cette page que je vous ai mis ici&nbsp;:</p>



<ul className="wp-block-list"><li>EP2 la plus importante qui a coefficient 13 et qui dure 5h.&nbsp;</li><li>EP1 un, qui est une épreuve professionnelle qui va durer 2h avec un coefficient 4&nbsp;</li><li>et PSE coefficient un.&nbsp;</li></ul>



<p>Donc ça quoi qu’il en soit, vous allez passer ces 3 épreuves là. Les 4 autres épreuves, que vous pouvez vous faire dispenser, si vous faites les choses correctement, si vous vous demandez la dispense et si vous fournissez les preuves nécessaires.</p>



<p>Voilà si vous avez encore des questions, n’hésitez pas à me les poser. Je vous donne rendez-vous à la prochaine vidéo à une autre question. D’ici là, portez vous bien et cuisinez bien merci. C’était Hicham de cuisine de base. Au revoir.</p>

</div></article>,

titre: "Les matières générales dans l’examen CAP cuisine",

route: "/article/epreuves-matieres-generales-examen-cap-cuisine",

categorie: "5",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png",

lien: "https://cuisinedebase.com/epreuves-matieres-generales-examen-cap-cuisine/"

}

const J35 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Epreuves EP1 EP2 PSE dans le Podcast CAP cuisine</h1>

<div className="mejs-inner"><div className="mejs-mediaelement"><figure><audio className="wp-audio-shortcode" id="audio-2529-1_html5" preload="none" src="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/04-EP1-EP2-PSE.mp3?_=1"><source type="audio/mp3" src="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/04-EP1-EP2-PSE.mp3?_=1"></source></audio></figure></div><div className="mejs-layers"><div className="mejs-poster mejs-layer"></div></div><div className="mejs-controls"><div className="mejs-button mejs-playpause-button mejs-play"></div></div></div>

<p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/04-EP1-EP2-PSE.mp3" >Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/04-EP1-EP2-PSE.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="04-EP1-EP2-PSE.mp3">Download</a> (Duration: 24:33 — 14.9MB)</p><p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p>
<p>Dans ce nouvel épisode du podcast cuisine de base, je réponds à toutes les questions liées aux&nbsp;<strong>épreuves EP1 EP2 PSE</strong> de la partie professionnelle du <strong>CAP cuisine . </strong></p>


<div className="post-image">
<figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png?resize=331%2C331&amp;ssl=1" alt="CAP cuisine EP1 EP2 PSE" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png?resize=600%2C600&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png?w=1080&amp;ssl=1 1080w" sizes="(max-width: 331px) 100vw, 331px"></img><figcaption>CAP cuisine épreuves EP1 EP2 PSE</figcaption></figure></div>


<ul className="wp-block-list"><li><strong>EP1</strong> (Organisation de la production de cuisine), </li><li><strong>EP2</strong> (Réalisation de la production de cuisine), </li><li>PSE (Prévention Santé Environnement). </li></ul>



<p>Vous trouverez dans cet épisode : des informations sur les durées des examens, les coefficients de l’épreuve EP2 ainsi que l’EP1 et la PSE. Comment se déroulent concrètement ces épreuves…</p>



<p>Vous découvrirez aussi pourquoi est-il important de tenir un journal personnelle. Et comment anticiper les réponses à certaines questions de <strong>l’épreuves pratique EP2</strong>. Et comment ce journal personnel peut se transformer en <strong>carnet personnelle de technique professionnelle</strong>. Ce document est autorisé lors de l’épreuve pratique de <strong>CAP cuisine candidat libre</strong> ou pas d’ailleurs.</p>



<p>Les examens <strong>CAP cuisine EP1, EP2 et PSE</strong> sont notées par compétences. Alors, dans cet épisode je vous détaille toutes les compétences évaluée de chacune des épreuves. Compétence 1 et 2 pour l’épreuve EP1. Puis, compétence 3, 4, 5 et 6 pour l’épreuve EP2. Et enfin les notions et pratiques attendues par l’épreuve PSE (Prévention Santé et Environnement).</p>



<p>Vous trouverez aussi l’importance du tableau d’ordonnancement et son utilité pour bien gérer le temps imparti de l’<strong>épreuve pratique EP2</strong></p>



<p>A la fin de l’épisode je vous donnerez une analyse constructive des <strong>épreuves EP1 et EP2 de la session 2021</strong>.</p>



<p>Continuez à me poser vos questions soit directement dans les commentaires en dessous des articles soit directement via la <a href="https://cuisinedebase.com/questions-cap-cuisine-candidat-libre/">page dédiées aux question réponse</a>.</p>

</div></article>,

titre: "Epreuves EP1 EP2 PSE dans le Podcast CAP cuisine",

route: "/article/epreuves-ep1-ep2-pse-podcast-cap-cuisine",

categorie: "5",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-4.-EP1-EP2-PSE.png",

lien: "https://cuisinedebase.com/epreuves-ep1-ep2-pse-podcast-cap-cuisine/"

}

const J36 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Les épreuves professionnelles CAP cuisine</h1>

<p>Dans cette vidéo de la série questions réponses, je réponds à toutes les questions relatives aux&nbsp;<strong>épreuves professionnelles CAP cuisine</strong>. EP1 (Organisation de la production de cuisine), EP2(Réalisation de la production de cuisine), PSE (Prévention Santé Environnement). Les durées des épreuves, les coefficients. Comment se déroulent concrètement ces épreuves. Bon visionnage / lecture.</p>



<figure className="wp-block-embed aligncenter is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div className="wp-block-embed__wrapper">
<iframe title="CAP cuisine candidat libre. Les épreuves professionnelles. EP1, EP2 et PSE" width="910" height="512" src="https://www.youtube.com/embed/pHGy2WBEnPc?start=3&amp;feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
</div><figcaption>Vidéo épreuves professionnelles CAP cuisine</figcaption></figure>



<p>Bonjour, c’est Hicham de cuisine de base, j’espère que vous allez bien. Bienvenue sur ma chaîne. Une nouvelle vidéo sur les questions réponses si vous avez des questions, n’hésitez pas à les poser. Je répondrai et vous notifierai.&nbsp;</p>



<h2 className="sous_titre">Les épreuves professionnelles CAP cuisine</h2>


<div className="post-image">
<figure className="aligncenter size-full is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?resize=532%2C399&amp;ssl=1" alt="Examen CAP cuisine" className="wp-image-2527" width="532" height="399" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?w=1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?resize=300%2C225&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?resize=768%2C576&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png?resize=600%2C450&amp;ssl=1 600w" sizes="(max-width: 532px) 100vw, 532px"></img><figcaption>Toutes les épreuves CAP cuisine</figcaption></figure></div>


Dans une vidéo précédente, nous avons vu nous avons vu que le&nbsp;<strong>nombre d’épreuves</strong>&nbsp;de CAP cuisine était au nombre de 7 épreuves. Et nous avons vu que&nbsp;



<ul className="wp-block-list"><li>l’épreuve EP2, donc la&nbsp;<strong>réalisation de la production de cuisine,</strong>&nbsp;est l’épreuve la plus importante avec un coefficient de 13. C’est une épreuve pratique qui dure 5h et son coefficient est 13.&nbsp;</li><li>Ensuite, l’épreuve professionnelle EP1, qui est une épreuve écrite qui dure 2h00 et son coefficient est 4.&nbsp;</li></ul>



<h2 className="sous_titre">Détails des épreuves professionnelles CAP cuisine</h2>



<p>Maintenant dans cette vidéo, nous allons détailler les épreuves professionnelles. Montrer les attentes en fait, derrière ces épreuves, EP1, EP2 et PSE. Donc je vais vous montrer, d’abord les compétences attendues, puis, les compétences évaluées de chacune de ces épreuves. Et enfin, le déroulement de ces épreuves. Concrètement, comment ces épreuves se déroulent-elles ?</p>



<h2 className="sous_titre">L’épreuve EP1 CAP cuisine</h2>



<p>Alors, on va commencer par l’EP1&nbsp;:&nbsp;<strong>organisation de la production de cuisine</strong>. Deux&nbsp;<strong>compétences sont évaluées</strong>&nbsp;durant cette épreuve&nbsp;:</p>



<ul className="wp-block-list"><li>La&nbsp;<strong>première compétence</strong>&nbsp;est&nbsp;: réceptionner, contrôler et stocker les marchandises, donc dans le respect de la réglementation en vigueur et en appliquant les techniques de prévention des risques liés à l’activité.&nbsp;</li><li>D’accord, ensuite la&nbsp;<strong>2<sup>ème</sup>&nbsp;compétence</strong>, c’est la&nbsp;<strong>compétence 2</strong>, c’est collecter l’ensemble des informations et organiser sa production culinaire dans le respect des consignes et du temps imparti.</li></ul>



<p>Je vous montrerai ensuite une un exemple d’épreuves EP1 pour que vous sachiez. À quoi elle ressemble ? Sachez aussi que l’épreuve est sous la forme d’une étude de cas mobilisant cuisine, gestion appliquée et sciences appliquées. Donc il y a 3 modules, on va dire qu’ils sont mobilisés durant cette épreuve.&nbsp;</p>



<h2 className="sous_titre">Exemple d’épreuve EP1 CAP cuisine</h2>



<p>En ensuite donc là pour vous montrer un exemple d’EP1. Comme vous pouvez le voir l’épreuve.&nbsp;<strong>Organisation de la production de la cuisine</strong>&nbsp;dure 2h et son coefficient est 4. L’épreuve se compose de 11 pages donc. Conseil, il faut vérifier que vous avez le nombre exact des feuilles, donc 11 sur 11. Tout ça prend quelques secondes hein. Vous vérifiez que vous avez de nombres exacts de pages ?</p>



<p>Donc sur la page 2 vous avez une situation, une étude de cas&nbsp;: donc vous êtes embauché comme cuisinier au sein de l’Auberge du parc suite à. Situé à acambaro en Haute Marne, Monsieur dutremble le gérant et chef de cuisine dans cet établissement … Enfin bref, vous avez la situation ici vous avez le menu proposé et vous allez normalement travailler sur ce menu. D’accord ? Ensuite, bah là tout simplement vous continuez. Ça c’est quoi ? C’est un bon de livraison. Ensuite, vous avez un bon. Et la première question va vérifier la livraison. Contrôler la livraison s’il n’y a pas des anomalies entre la commande et la livraiso. Ensuite, 2e question et ainsi de suite…</p>



<h2 className="sous_titre">Correction <strong>épreuves professionnelles CAP cuisine</strong> (EP1)</h2>



<p>Sachez que vous pouvez trouver la&nbsp;<strong><a href="https://cuisinedebase.com/correction-epreuve-ep1-2021-examen-cap-cuisine/">Correction EP1 session 2021 de cette épreuve</a></strong>&nbsp;sur le site <strong>cuisine de base</strong>. Vous pouvez la télécharger, je vous mettrai le lien dans. Dans la description de la vidéo.&nbsp;</p>



<p>Voilà donc là. Donc la première, c’est. La première question sont relatives à. À la réception enfin, contrôle de stock et tout ça là, ça va. Hé ça, c’est l’organisation de la production.&nbsp;</p>



<h2 className="sous_titre">Détail de l’épreuve EP2 CAP cuisine</h2>



<p>Ensuite, 2e épreuve, c’est. L’EP2. Qui est la&nbsp;<strong>réalisation de la production de cuisine</strong>. Comme j’ai dit cette épreuve, elle va durer 5h et à un coefficient 13. Les compétences évaluées dans cette épreuve sont les suivantes&nbsp;:</p>



<ul className="wp-block-list"><li>donc c’est la&nbsp;<strong>compétence 3&nbsp;</strong>préparer, organiser et maintenir en état son poste de travail.&nbsp;</li><li>Ensuite, la&nbsp;<strong>compétence. 4</strong>&nbsp;maîtriser les techniques culinaires de base et réaliser une production dans le respect des consignes et des règles d’hygiène et de sécurité.&nbsp;</li><li>Ensuite la&nbsp;<strong>compétence 5</strong>&nbsp;analyser, contrôler la qualité de sa production, dresser et participer à la distribution salon le contexte professionnel.&nbsp;</li><li>Et enfin la&nbsp;<strong>compétence 6</strong>&nbsp;donc communiquer en fonction du contexte professionnel et en respectant les usages de la profession.&nbsp;</li></ul>



<p>Voilà donc en tout, il y a 4 compétences qui sont évaluées dans cette épreuve de&nbsp;<strong>réalisation de la production de cuisine</strong>.&nbsp;</p>



<h2 className="sous_titre">Déroulement de l’épreuve EP2 CAP cuisine</h2>



<p>Ensuite. Le déroulement de l’épreuve. Vous avez une situation professionnelle et à partir de cette situation professionnelle, on va vous demander certaines tâches, de mobiliser certaines compétences, certaines notions que vous aurez apprises. Donc vous serez noté par rapport à ces notions. Ces notions sont les suivantes&nbsp;:</p>



<ul className="wp-block-list"><li>contrôler les denrées,&nbsp;</li><li>mettre en place et maintenir en état son espace de travail,&nbsp;</li><li>mettre en œuvre,</li><li>Mettre en œuvre les bonnes pratiques d’hygiène, de sécurité et de santé, ça c’est très, très important de nettoyer derrière soi, désinfecter le poste de travail, le maintenir en état</li><li>Ensuite, mettre en œuvre les bonnes pratiques en matière de développement durable. Tout ce qui est de tri quand vous pensez au tri, s’il y a des cartons. Recyclable, il faut les mettre dans la partie recyclable. Voilà. Faut essayer au maximum de son intégrité en terme de développement durable et.&nbsp;</li><li>Réaliser les techniques de base&nbsp;</li><li>Utiliser et mettre en valeur les produits de sa région,&nbsp;</li><li>choisir et mettre en place les matériels de dressage. Donc c’est à vous de les choisir. C’est donc des fois ils sont y a des fois ils sont spécifiés dans les fiches techniques, mais des fois non, donc il va falloir savoir quel matériel de dressage faut-il choisir pour dresser sa production.&nbsp;</li><li>Dresser les préparations culinaires,&nbsp;</li><li>évaluer la qualité de ses préparations culinaires,&nbsp;</li><li>envoyer ses préparations culinaires,&nbsp;</li><li>communiquer dans le cadre d’une situation professionnelle&nbsp;</li><li>et enfin rendre compte de son activité.&nbsp;</li></ul>



<p>Voilà donc ça, c’est un ensemble de compétences que vous devez acquérir pendant votre préparation du CAP cuisine.&nbsp;</p>



<h2 className="sous_titre">Durée épreuve pratique EP2 CAP cuisine</h2>



<p>Okay ensuite, donc là l’épreuve. Concrètement, vous avez 5h pour faire l’épreuve, ces 5h. sont composées de la manière suivante, donc vous avez 3 parties&nbsp;:</p>



<ul className="wp-block-list"><li>La première partie, elle, va durer 20 Min et c’est une partie écrite, elle n’est pas évaluée d’accord, elle n’est pas évaluée. Vous allez découvrir en fait pendant ces 20 min, les 2 fiches techniques. Ça va être donc un plat, puis soit un dessert soit une entrée d’accord. Un plat principal c’est obligatoire et soit un dessert ou une entrée. Et sachez qu’il y a obligatoirement une pâte de base. Donc pendant ces 20 Min là vous allez avoir 2 fiches techniques de production et un tableau d’ordonnancement pour planifier votre production. Il faut savoir que vous avez droit à votre&nbsp;<strong>carnet individuel</strong>, votre&nbsp;<strong>carnet personnel de recettes personnelles</strong>&nbsp;pour notes personnelles. Ce que je conseille, c’est maintenir en fait un journal tout le long de votre préparation de CAP, vous mettez dedans toutes les informations utiles et ce carnet personnel en fait, il vous sera utile pendant ces 5h d’évaluation.&nbsp;</li><li>Ensuite, pendant 10 minutes les. Vous allez contrôler, vérifier la mise en place de votre poste de travail. Vous allez regarder s’il vous manque des denrées, il faut aller les chercher, le matériel et ainsi de suite.&nbsp;</li><li>Et puis la dernière partie, la partie 3 elle-même, elle se composé de 2 phases. La première phase donc, c’est la phase de production culinaire. Elle va durer 4h et 20. Et la 2e phrase, C’est une phrase à un compte rendu d’activité et il va durer 10 Min.</li></ul>



<h2 className="sous_titre">Exemple épreuve pratique EP2 CAP cuisine</h2>



<p>OK. Voilà donc un exemple&nbsp;<strong><a href="https://cuisinedebase.com/epreuve-cap-cuisine-2021-les-sujets-de-lexamen-pratique/">d’épreuve des sujets de la session 2021</a></strong>&nbsp;? Les compétences visées sont les suivantes, compétences 3, 4, 5 et 6.&nbsp;<strong>carnet personnelle de technique professionnelle</strong>&nbsp;autorisé, donc ça c’est très important. C’est pour ça que je vous demande de tenir un carnet personnel dans lequel vous rentrez vos propres notes en fait ça soit quand même manuscrit, hein ? Cette ce garder vos propres notes techniques professionnelles donc. Vous pouvez mettre dedans. Grammage, je, je ne sais pas tout ce qui vous semble utile et vous pouvez le garder avec vous. Ça serait quand même dommage de ne pas se servir d’un carnet alors que vous vous y avez droit ?&nbsp;</p>



<p>Voilà donc là comme je vous ai montré, donc là c’est. l’organisation en fait de l’épreuve. Là, dans cette épreuve, vous avez 2 fiches technique&nbsp;</p>



<ul className="wp-block-list"><li>pavé de merlu sauce vin blanc. Julien de Légumeries Pilaf donc pour 4 personnes.&nbsp;</li><li>Et entremets aux poires pour 8 personnes, d’accord ?&nbsp;</li></ul>



<p>Voilà donc la fiche technique, vous pouvez le voir, elle n’est pas aussi complète que les fiches techniques que l’on a l’habitude de voir sur&nbsp;<strong>la cuisine de référence</strong>&nbsp;ou sur d’autres supports de cours que vous avez l’habitude d’utiliser notamment, j’attire votre attention, par exemple ici sur l’étape 7 de la réalisation des&nbsp;<strong>techniques de réalisation</strong>, on vous met&nbsp;:&nbsp;<strong>marquer en cuisson le riz pilaf</strong>. D’accord, marquer en cuisson le riz pilaf. On vous dit pas comment le faire, donc là, c’est à vous de savoir donc là si vous avez un carnet individuel personnel et Ben je. Conseil de mettre les informations relatives à comment cuire un pilaf. C’est une recette qui tombe assez souvent dans les épreuves pratiques donc, voilà un exemple de choses à mettre dans votre carnet personnel.&nbsp;</p>



<h2 className="sous_titre">Détail de l’épreuve EP2 session 2021</h2>



<p>Voilà donc ça, c’est la première fiche technique. Ensuite vous aurez la 2e fiche technique pareil donc. Confectionner cuire la génoise. On ne vous dit pas comment. Donc ça, c’est la&nbsp;<strong>pâte de base à réaliser</strong>&nbsp;pour cette épreuve et ainsi de suite. Donc là pareil si vous avez votre carnet personnel avec des informations relatives au pattes de base, aux cuissons de base, aux sauces, et ainsi de suite. Je vous conseille d’en avoir un, ça va vous permettre, même dans votre vie professionnelle future, ça va vous servir. Vos réalisations et vos productions d’autre.&nbsp;</p>



<p>Ensuite, donc là, vous avez le tableau simplifié d’ordonnancement. C’est un tableau simplifié hein ? Donc vous commencez donc là si c’est le matin ? Enfin la façon. Ils ont mis 8h40 ou 14h40 selon si vous commencez le matin ou l’après-midi. Donc si ça commence à 8h40 donc vous allez prendre 9h donc ça c’est la première partie. De 20 Min, 2e partie de 10 Min. Voilà et ensuite à 10h par exemple, vous allez commencer les 4h20 et à 10h, donc là vous allez dire par quoi commencer, par comment remplir un tableau. Demande annoncement y a pas une règle unique.</p>



<p>Mais il y a quand même certaines choses qui sont évidentes. Si vous avez des pâtes qui doivent pousser, donc commencer par les pâtes parce que y a un temps de pouce. Si vous avez des fonds à réaliser enfin des cuissons qui sont longues dans le temps. Vous allez commencer par ces cuissons. C’est à vous d’organiser en fait votre préparation. C’est pour ça qu’on vous donne 20 Min au début pour justement réfléchir à toutes ces choses-là. </p>



<p>D’accord, vous mettez une organisation dans ce tableau et vous essayer de la respecter au mieux que vous pouvez d’accord. A l’issue de ces 4h20, vous allez devoir dresser, envoyer et les 10 dernières minutes, ça va être le compte rendu d’activité, c’est un entretien avec le jury. Il va vous poser certaines questions relatives, notamment à certains de vos choix, pourquoi vous avez fait tel ou tel choix ? Autre. Voilà donc. il faut être à l’aise faut pas avoir peur et il faut avoir confiance en soi</p>



<h2 className="sous_titre">Épreuve CAP cuisine PSE</h2>



<p>Et bah la dernière épreuve professionnelle, c’est l’épreuve. PSE donc, c’est prévention, santé environnement. C’est une épreuve qui fait partie de l’épreuve EP2 qui a un coefficient 13. Il mais en rajoutant PSE ça va être coefficient 14 et c’est une épreuve écrite qui va durer 1h. Et qui a un coefficient, un. D’accord, elle n’est pas très compliquée cette épreuve. Vous serez évalué sur, par exemple,&nbsp;<strong>conduire une démarche d’analyse de situation</strong>. En utilisant une&nbsp;<strong>approche par le risque</strong>, et ou une&nbsp;<strong>démarche de résolution de problème</strong>. d’accord on va vous demander de proposer des&nbsp;<strong>mesures de prévention adaptées</strong>&nbsp;mobiliser des&nbsp;<strong>connaissances scientifiques et juridiques</strong>.</p>



<h2 className="sous_titre">Déroulement de l’épreuve prévention santé environnement</h2>



<p>A agir de façon efficace face à une situation d’urgence. Donc, l’évaluation porte notamment sur des&nbsp;<strong>règles d’hygiène</strong>, règles,&nbsp;<strong>d’ergonomie</strong>,&nbsp;<strong>organisation et optimisation du poste de travail</strong>. Et la PRP, prévention des risques liés à l’activité physique. </p>



<p>Donc, concrètement, vous allez avoir une situation professionnelle composée de 2 parties. Voilà donc, cette épreuve est sur 20, et elle est composée de 2 Parties: la première partie sur 10 points, une 2e partie aussi sur 10 points donc. </p>



<p>La première partie, c’est une situation de vie quotidienne où professionnelle, vous aurez une situation et vous allez avoir plusieurs questions, questions qui sont liées au pas entre elles et ces questions. Elles sont relatives à la santé, la consommation et le parcours professionnel.</p>



<p>Ensuite donc, la 2e partie qui est qui est sur 10 points aussi, elle porte sur une situation d’environnement professionnel, elle-même est composée de 2 parties, une première partie sur 8 points, une 2e partie sur 2. la première partie sur 8 points, donc c’est tout simplement. Vous allez avoir appliquer. À faire une application de la démarche d’approche par des risques et les connaissances relatives à l’environnement professionnel. Voilà donc vous avez une situation, vous avez une situation. D’appliquer en fait cette démarche. Et la 2e partie, c’est expliquer la conduite à tenir dans une situation d’urgence, voir si vous êtes en fait. Vous avez une situation d’urgence, Comment allez-vous vous comporter ? Tout simplement. Donc, c’est une épreuve qui relativement simple. C’est du bon sens, mais il y a quand même une préparation.&nbsp;</p>



<h2 className="sous_titre">Synthèse des <strong>épreuves professionnelles CAP cuisine</strong></h2>



<p>Voilà donc. Voilà, c’était les 3 épreuves que je voulais vous montrer. Qui qui sont des épreuves professionnelles ? Tout un chacun doit dépasser, hein ? Les élèves qui sont qui sont en cours toute l’année, qui ne sont pas en candidat libre. Eux, ils passent certaines de ses épreuves. Il est passé son contrôle en cours de formation. Vous qui êtes candidat libre, c’est des épreuves ponctuelles, donc vous aurez une une convocation et vous serez convoqué à une date et une heure précises pour passer ces épreuves. Voilà donc si vous avez encore des questions par rapport à ces épreuves pratiques professionnelles et ces épreuves professionnelles. Pratiques écrites. N’hésitez pas à m’en faire part.&nbsp;</p>



<p>Voilà, j’espère que j’ai répondu à certaines de vos interrogations relatives à ces preuves de CAP cuisine, je vous souhaite une bonne journée. Bonne préparation. J’espère que vous concrétisez vos projets relatifs au CAP cuisine.&nbsp;</p>

</div></article>,

titre: "Les épreuves professionnelles CAP cuisine",

route: "/article/les-epreuves-professionnelles-cap-cuisine/",

categorie: "5",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/Infographie-Examen-CAP-cuisine.png",

lien: "https://cuisinedebase.com/les-epreuves-professionnelles-cap-cuisine/"

}

const J37 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Cuisine de base ou bases de la cuisine? quelques témoignages qui réchauffent le coeur!</h1>

<p>Ce n’est pas dans mes habitudes, mais je me suis dit qu’il faut absolument que je partage cela avec vous. Plusieurs années après sa création, et le blog cuisinedebase.com continue à vous fournir l’essentiel des informations pour apprendre les <strong>bases de la cuisine</strong> ou pour passer le CAP cuisine en candidat libre.</p>



<div className="post-image"><figure className="aligncenter"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/performance-google-2.jpg?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/performance-google_thumb-2.jpg?w=910&amp;ssl=1" alt="performance google" title="performance google"></img></a><figcaption>Meilleur site sur les bases de la cuisine</figcaption></figure></div>



<h2 className="sous_titre">Livres numériques pour CAP cuisine</h2>



<p>Les produits payants que vous pouvez trouver dans ce blog, généralement des <a href="https://cuisinedebase.com/categorie-produit/livres-ebook-pdf/">livres numériques à télécharger en format pdf</a>. Ces produits sont élaborés par mes propres moyens dont l’objectif est de vous aider à atteindre, mieux et rapidement vos objectifs. </p>



<p>Il y’a aussi quelques produits d’affiliation que vous pouvez trouver par exemple dans la <a href="https://cuisinedebase.com/livre-avoir-pour-apprendre-les-bases-de-la-cuisine-cap-cuisine/">sélection de livres pour CAP cuisine</a>. </p>



<h2 className="sous_titre">Témoignages bases de la cuisine</h2>



<p>Mais il y a quand même quelques choses qui me motive pour continuer à maintenir le site à jour et de vous offrir mes meilleurs <strong>retours d’expériences</strong>. On peut être riche parce qu’on a réussi à accumuler beaucoup d’argent dans son compte en banque, cela est évident, mais moi je définie la richesse autrement…</p>



<p>Peu importe que ce blog s’appelle <strong>cuisine de base</strong> ou <strong>bases de la cuisine</strong>, du moment que vous y trouvez votre bonheur et que vous me partager vos réussites grâce aux informations que vous y avez pu trouver, <u>c’est ce qui m’enrichit</u> et qui me permet de continuer l’aventure.</p>



<p>Et <u>je suis devenue très riche</u> avec mon blog, et tout cela <u>grâce à vous chères lectrices chers lecteurs</u>, alors je tiens à vous dire <strong>MERCI ! </strong></p>



<p>J’ai sélectionner pour vous quelques témoignages que j’ai reçus récemment, je ne peux tout mettre car c’est des images et que cela alourdi le chargement de la page, je vous demande donc de <strong>continuer à m’enrichir</strong> avec vos <strong>meilleurs témoignages</strong> en laissant un <strong>commentaire</strong>!</p>


<div className="post-image">
<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/01/commentaire-avis-positifs-1-1.jpg?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/01/commentaire-avis-positifs-1_thumb-1.jpg?w=910&amp;ssl=1" alt="commentaire avis positifs (1)" title="commentaire avis positifs (1)"></img></a></figure>



<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/01/commentaire-avis-positifs-2-1.jpg?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/01/commentaire-avis-positifs-2_thumb-1.jpg?w=910&amp;ssl=1" alt="commentaire avis positifs (2)" title="commentaire avis positifs (2)"></img></a></figure>



<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/image-1.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/image_thumb-1.png?w=910&amp;ssl=1" alt="image" title="image"></img></a></figure>



<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/01/commentaire-avis-positifs-4-1.jpg?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/01/commentaire-avis-positifs-4_thumb-1.jpg?w=910&amp;ssl=1" alt="commentaire avis positifs (4)" title="commentaire avis positifs (4)"></img></a></figure>



<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/01/commentaire-avis-positifs-5-1.jpg?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/01/commentaire-avis-positifs-5_thumb-1.jpg?w=910&amp;ssl=1" alt="commentaire avis positifs (5)" title="commentaire avis positifs (5)"></img></a></figure>



<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/donnat-1.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/donnat_thumb-1.png?w=910&amp;ssl=1" alt="donnat" title="donnat"></img></a></figure>




<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/Eric-2.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/Eric_thumb-2.png?w=910&amp;ssl=1" alt="Eric" title="Eric"></img></a></figure>



<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/ibrahima-2.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/ibrahima_thumb-2.png?w=910&amp;ssl=1" alt="ibrahima" title="ibrahima"></img></a></figure>




<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/ibrahima2-2.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/ibrahima2_thumb-2.png?w=910&amp;ssl=1" alt="ibrahima2" title="ibrahima2"></img></a></figure>




<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/isabelle-2.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/isabelle_thumb-2.png?w=910&amp;ssl=1" alt="isabelle" title="isabelle"></img></a></figure>




<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/louise-1.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/louise_thumb-1.png?w=910&amp;ssl=1" alt="louise" title="louise"></img></a></figure>



<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/miriem-2.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/miriem_thumb-2.png?w=910&amp;ssl=1" alt="miriem" title="miriem"></img></a></figure>




<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/temoignage-bertrand-1.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/temoignage-bertrand_thumb-1.png?w=910&amp;ssl=1" alt="temoignage-bertrand" title="temoignage-bertrand"></img></a></figure>




<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/temoignage-sabria-2.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/temoignage-sabria_thumb-2.png?w=910&amp;ssl=1" alt="temoignage-sabria" title="temoignage-sabria"></img></a></figure>



<figure className="post-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/xavier-2.png?ssl=1"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/xavier_thumb-2.png?w=910&amp;ssl=1" alt="xavier" title="xavier"></img></a></figure>
</div>


<strong>Et vous, avez vous quelques choses à me dire?</strong>

</div></article>,

titre: "Cuisine de base ou bases de la cuisine? quelques témoignages qui réchauffent le coeur!",

route: "/article/cuisine-de-base-ou-bases-de-la-cuisine-quelques-tmoignages-qui-rchauffent-le-cur",

categorie: "5",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/10/performance-google_thumb-2.jpg",

lien: "https://cuisinedebase.com/cuisine-de-base-ou-bases-de-la-cuisine-quelques-tmoignages-qui-rchauffent-le-cur/"

}

const J38 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Dans les Coulisses de l’Épreuve EP2 du CAP Cuisine : Le Témoignage d’une Candidate Libre</h1>
	
	<span className="mejs-offscreen"></span><div id="mep_0" className="mejs-container mejs-container-keyboard-inactive wp-audio-shortcode mejs-audio" role="application" aria-label=""><div className="mejs-inner"><div className="mejs-mediaelement"><audio className="wp-audio-shortcode" id="audio-3163-1_html5" preload="none" src="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2024/06/07-Retour-experience-EP2-Interview-IA.mp3?_=1"><source type="audio/mpeg" src="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2024/06/07-Retour-experience-EP2-Interview-IA.mp3?_=1"></source><a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2024/06/07-Retour-experience-EP2-Interview-IA.mp3">https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2024/06/07-Retour-experience-EP2-Interview-IA.mp3</a></audio></div><div className="mejs-layers"><div className="mejs-poster mejs-layer"></div></div><div className="mejs-controls"><div className="mejs-button mejs-playpause-button mejs-play"></div></div></div></div>
	
	<p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2024/06/07-Retour-experience-EP2-Interview-IA.mp3" >Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2024/06/07-Retour-experience-EP2-Interview-IA.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="07-Retour-experience-EP2-Interview-IA.mp3">Download</a> (Duration: 11:01 — 7.5MB)<p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p></p>


<div className="post-image">
<figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=910%2C910&amp;ssl=1" alt="" className="wp-image-3164" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=600%2C600&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?resize=90%2C90&amp;ssl=1 90w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png?w=1080&amp;ssl=1 1080w" sizes="(max-width: 910px) 100vw, 910px"></img></figure></div>


Ou le télécharger sur votre téléphone ou tablette pour l’écouter plus tard, même sans connexion internet. Il suffit de cliquer sur le bouton Download ou télécharger.



<p>Voici les cinq points essentiels que vous apprendrez avec cette interview :</p>



<ol className="wp-block-list">
<li><strong>Préparation et Ordonnancement :</strong> L’importance de dresser un tableau d’ordonnancement et de bien planifier la production avant de commencer l’épreuve. Julie souligne combien il est crucial de lister tout le matériel nécessaire à l’avance pour éviter les pertes de temps.</li>



<li><strong>Adaptation et Réactivité :</strong> L’aptitude à s’adapter rapidement aux imprévus en cuisine. Julie raconte ses erreurs et comment elle a dû ajuster ses plans en cours de route, soulignant la nécessité de lancer les cuissons longues dès que possible.</li>



<li><strong>Connaissance des Équipements :</strong> La familiarisation avec les équipements professionnels, tels que les veilleuses des gazinières, les plaques coupe-feu et les fours à montée rapide de température. Julie partage ses découvertes et leur importance pour une gestion efficace en cuisine.</li>



<li><strong>Gestion de l’Hygiène :</strong> La gestion équilibrée des pratiques d’hygiène, évitant de perdre du temps inutilement tout en respectant les normes essentielles. Julie explique comment son obsession pour l’hygiène a parfois été contre-productive.</li>



<li><strong>Mentalité Positive et Sens de l’Humour :</strong> L’importance de rester positif, flexible et de garder son sens de l’humour malgré les erreurs et le stress. Julie encourage les futurs candidats à aborder l’épreuve avec confiance et à apprendre de chaque expérience, bonne ou mauvaise.</li>
</ol>



<p>Pour avoir une idée sur l’épreuve d’EP2, vous pouvez voir des <a href="https://cuisinedebase.com/produit/sujets-ep2-epreuve-cap-cuisine-2021/">exemples de sujets d’EP2 des années passées dans cet article</a>.</p>

	</div></article>,
	
	titre: "Dans les Coulisses de l’Épreuve EP2 du CAP Cuisine : Le Témoignage d’une Candidate Libre",
	
	route: "/article/coulisse-epreuve-ep2-cap-cuisine-temoignage-candidature-libre",
	
	categorie: "2",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/06/episode-7.-Temoignages-EP2-CAP-cuisine-candidat-libre.png",
	
	lien: "https://cuisinedebase.com/coulisse-epreuve-ep2-cap-cuisine-temoignage-candidature-libre/"
	
}

const J39 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Podcast. Correction de l’épreuve EP1 session 2006</h1>

<div id="mep_0" className="mejs-container wp-audio-shortcode mejs-audio" role="application" aria-label=""></div><div className="mejs-inner"></div><div className="mejs-mediaelement"></div><audio className="wp-audio-shortcode" id="audio-2684-1_html5" preload="none" src="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2023/03/06-Correction-EP1-Session-2006.mp3?_=1"><source type="audio/mpeg" src="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2023/03/06-Correction-EP1-Session-2006.mp3?_=1"></source><a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2023/03/06-Correction-EP1-Session-2006.mp3">https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2023/03/06-Correction-EP1-Session-2006.mp3</a></audio>

<p></p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2023/03/06-Correction-EP1-Session-2006.mp3">Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2023/03/06-Correction-EP1-Session-2006.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="06-Correction-EP1-Session-2006.mp3">Download</a> (Duration: 26:43 — 22.9MB)<p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p>
<p>Vous pouvez écouter le&nbsp;<strong>podcast correction de l’épreuve EP1</strong>&nbsp;directement sur cette page en appuyant sur le bouton en forme de triangle.</p>


<div className="post-image">
<figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png" alt="Miniature Podcast correction épreuve EP1 2006" className="wp-image-2686" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png?resize=600%2C600&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png?resize=90%2C90&amp;ssl=1 90w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png"></img></figure></div>


Ou le télécharger sur votre téléphone ou tablette pour l’écouter plus tard, même sans connexion internet. Il suffit de cliquer sur le bouton Download ou télécharger.


<p>Dans cet épisode réservé à la correction de l’épreuve EP1, je répond à toutes les questions de de la session 2006.</p>



<p>Vous découvrirez quelles sont les mesures de sécurité et d’hygiène. Comment calculer l’apport énergétique de 100g de viande ainsi que plusieurs autres questions sur la science et technologie culinaire.</p>



<p>Vous pouvez aussi <a href="https://cuisinedebase.com/produit/corrige-de-epreuve-ep1-session-2006-cap-cuisine/" target="_blank" rel="noopener noreferrer">télécharger le corrigé en pdf qui correspond à cette épreuve EP1</a> en suivant le lien.</p>

</div></article>,

titre: "Podcast. Correction de l’épreuve EP1 session 2006",

route: "/article/podcast-correction-epreuve-ep1-session-2006",

categorie: "2",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2023/03/episode-6-correction-EP1-2006.png",

lien: "https://cuisinedebase.com/podcast-correction-epreuve-ep1-session-2006/"

}

const J40 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Podcast épisode 5. Accompagnement CAP cuisine</h1>

<p></p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/12/05-Je-vous-coach-pour-preparer-le-CAP-cuisine_transcode.mp3">Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/12/05-Je-vous-coach-pour-preparer-le-CAP-cuisine_transcode.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="05-Je-vous-coach-pour-preparer-le-CAP-cuisine_transcode.mp3">Download</a> (Duration: 6:25 — 7.4MB)<p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a>

S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p>


<div className="post-image">
<figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=283%2C283&amp;ssl=1" alt="" className="wp-image-2607" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=600%2C600&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?resize=90%2C90&amp;ssl=1 90w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png?w=1080&amp;ssl=1 1080w" sizes="(max-width: 283px) 100vw, 283px"></img><figcaption>Accompagnement candidat libre</figcaption></figure></div>


Ou le télécharger sur votre téléphone ou tablette pour l’écouter plus tard, même sans connexion internet. Il suffit de cliquer sur le bouton Download ou télécharger.


<p>Voici les questions traitées dans cet épisode:</p>



<ul className="wp-block-list"><li>Le déroulement de l’offre d’accompagnement ;&nbsp;</li><li>Comment établir un planning d’entrainement ;&nbsp;</li><li>Le prix de l’offre.</li></ul>



<p>Voici la page qui détaille le <a href="https://cuisinedebase.com/coaching/">coaching CAP cuisine en candidat libre</a>.</p>

</div></article>,

titre: "Podcast épisode 5. Accompagnement CAP cuisine",

route: "/article/podcast-episode-5-accompagnement-cap-cuisine/",

categorie: "2",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/12/episode-5.-Le-Coaching.png",

lien: "https://cuisinedebase.com/podcast-episode-5-accompagnement-cap-cuisine/"

}

const J41 = {

contenu: <article><div className="post-content"><h1 className="titre_article">Podcast épreuves CAP cuisine. Professionnelles et générales</h1>

<div className="mejs-inner"><div className="mejs-mediaelement"><audio className="wp-audio-shortcode" id="audio-2516-1_html5" preload="none" src="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/03-Pdcast-Toutes-les-epreuves-CAP-cuisine.mp3?_=1"><source type="audio/mpeg" src="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/03-Pdcast-Toutes-les-epreuves-CAP-cuisine.mp3?_=1"></source><a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/03-Pdcast-Toutes-les-epreuves-CAP-cuisine.mp3">https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/03-Pdcast-Toutes-les-epreuves-CAP-cuisine.mp3</a></audio></div><div className="mejs-layers"><div className="mejs-poster mejs-layer"></div></div><div className="mejs-controls"><div className="mejs-button mejs-playpause-button mejs-play"></div>

<p></p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/03-Pdcast-Toutes-les-epreuves-CAP-cuisine.mp3" className="powerpress_link_pinw" target="_blank" title="Play in new window" rel="noopener noreferrer">Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/08/03-Pdcast-Toutes-les-epreuves-CAP-cuisine.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="03-Pdcast-Toutes-les-epreuves-CAP-cuisine.mp3">Download</a> (Duration: 11:37 — 10.0MB)

<p></p>S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a>
<p>Un nouvel épisode de podcast de cuisine de base. Cette fois ci le sujet est : <strong>podcast épreuves CAP cuisine</strong> candidat libre.</p>


<div className="post-image">
<figure className="aligncenter size-medium is-resized" id="Epreuves-CAP-cuisine"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=225%2C225&amp;ssl=1" alt="Podcast CAP cuisine. Les épreuves professionnelles et générales" className="wp-image-2518" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=600%2C600&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=60%2C60&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?resize=90%2C90&amp;ssl=1 90w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png?w=1080&amp;ssl=1 1080w" sizes="(max-width: 225px) 100vw, 225px"></img><figcaption>Podcast CAP cuisine. Les épreuves professionnelles et générales </figcaption></figure></div></div></div>



<p>Ou le télécharger sur votre téléphone ou tablette pour l’écouter plus tard, même sans connexion internet. Il suffit de cliquer sur le bouton Download ou télécharger.</p>



<p>Voici les questions traitées dans cet épisode:</p>



<ul className="wp-block-list"><li>Combien d’épreuves Y’A T il pour passer le CAP cuisine.&nbsp;</li><li>Quelles sont les différentes formes des épreuves,&nbsp;</li><li>les durées, les coefficients ?&nbsp;</li><li>Quelles sont les épreuves auxquelles on peut demander une dispense et comment faire pour demander cette dispense</li></ul>



<p>Ecoutez aussi le<a href="https://cuisinedebase.com/podcast-stage-cap-cuisine-candidat-libre/"> podcast sur le stage de CAP cuisine</a>, obligatoire ou facultatif?</p>



<p>&nbsp;la première des épreuves, c’est l’épreuve que l’on appelle EP1, qui est une&nbsp;<strong>épreuve professionnelle</strong>&nbsp;et qui s’appelle&nbsp;<strong>l’organisation de la production de cuisine</strong>. </p>



<p>la 2e épreuve, elle s’appelle EP 2. C’est une&nbsp;<strong>épreuve</strong>&nbsp;également&nbsp;<strong>professionnelle</strong>&nbsp;et c’est la&nbsp;<strong>réalisation de la production de cuisine</strong>. Ensuite, il y a la PSE&nbsp;<strong>prévention santé environnement</strong>. Je vous détaillerai chacune de ces épreuves. Mais là, on va juste les citer. Et puis les compter pour savoir combien d’épreuves au total nous sommes amenés à passer pour avoir le CAP cuisine.&nbsp;</p>



<p>Donc ensuite on a des&nbsp;<strong>épreuves générales</strong>, alors dans les épreuves générales,</p>



<p>Je vous souhaite une bonne écoute et n’hésitez pas de poser vos questions sur le CAP cuisine.</p>

</div></article>,

titre: "Podcast épreuves CAP cuisine. Professionnelles et générales",

route: "/article/podcast-epreuves-cap-cuisine-professionnelles-generales",

categorie: "2",

sous_categorie: "-1",

articlesConnexes: [],

image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/08/episode-3.-Toutes-les-epreuves-CAP-cuisine-1.png",

lien: "https://cuisinedebase.com/podcast-epreuves-cap-cuisine-professionnelles-generales/"

}

const J42 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Podcast stage CAP cuisine candidat libre</h1>
	
	<p></p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/07/Podcast-Foire-aux-questions-Stage.mp3" className="powerpress_link_pinw" target="_blank" title="Play in new window" rel="noopener noreferrer">Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/07/Podcast-Foire-aux-questions-Stage.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="Podcast-Foire-aux-questions-Stage.mp3">Download</a> (Duration: 10:26 — 6.7MB)<p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p>
<p>Un nouvel épisode de podcast de cuisine de base. Cette fois ci le sujet est : podcast stage CAP cuisine candidat libre.</p>


<div className="post-image">
<figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png?resize=349%2C349&amp;ssl=1" alt="" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png?resize=600%2C600&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png?resize=100%2C100&amp;ssl=1 100w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png?w=1080&amp;ssl=1 1080w" sizes="(max-width: 349px) 100vw, 349px"></img><figcaption>Podcast CAP cuisine</figcaption></figure></div>



Ou le télécharger sur votre téléphone ou tablette pour l’écouter plus tard, même sans connexion internet. Il suffit de cliquer sur le bouton Download ou télécharger.



<p>Voici les questions traitées dans cet épisode:</p>



<ul className="wp-block-list"><li>Est-il obligatoire de faire un stage pour avoir le diplôme quand on est candidat libre?</li><li>Quel type de stage et dans quel type d’établissement de restauration pour que l’expérience soit valorisée?</li><li>Comment gérer les stages pratiques avec une vie de famille</li><li>… plus d’autres remarques et conseils sur le stage</li></ul>
	
	</div></article>,
	
	titre: "Podcast stage CAP cuisine candidat libre",
	
	route: "/article/podcast-stage-cap-cuisine-candidat-libre/",
	
	categorie: "2",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/07/episode-2.-Le-stage.png",
	
	lien: "https://cuisinedebase.com/podcast-stage-cap-cuisine-candidat-libre/"
	
}

const J43 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Les techniques à apprendre pour préparer le CAP cuisine. Podcast.</h1>
	
	<p></p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/05/podcast-les-25-recettes-et-techniques-de-base.mp3" className="powerpress_link_pinw" target="_blank" title="Play in new window" rel="noopener noreferrer">Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2022/05/podcast-les-25-recettes-et-techniques-de-base.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="podcast-les-25-recettes-et-techniques-de-base.mp3">Download</a> (Duration: 32:55 — 18.3MB)<p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p>
<p> Bonjour et bienvenu Dans ce nouvel épisode de cuisine de base. Dans cet épisode vous découvrirez les <strong>techniques à apprendre</strong> pour le CAP cuisine en candidat libre.</p>



<div className="post-image"><figure className="aligncenter size-full"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/06/Cuisine_thumb.jpg?resize=288%2C164&amp;ssl=1" alt="" className="wp-image-987"></img><figcaption>Podcast. Techniques apprendre en cuisine</figcaption></figure></div>



Vous pouvez aussi le télécharger sur votre téléphone ou tablette et l’écouter plus tard même sans connexion internet.



<p>Voici le liens dont je parle dans cet épisode:</p>



<p><a href="https://cuisinedebase.com/les-25-recettes-a-maitriser-pour-obtenir-son-cap-cuisine/">Les 25 fiches techniques pour préparer le CAP cuisine.</a></p>



<a href="https://cuisinedebase.com/produit/25-fiches-techniques-pour-preparer-le-cap-cuisine/">Les fiches techniques au format pdf à télécharger.</a>

	</div></article>,
	
	titre: "Les techniques à apprendre pour préparer le CAP cuisine. Podcast.",
	
	route: "/article/podcast-cuisine-de-base-techniques-apprendre-preparer-cap-cuisine",
	
	categorie: "2",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/06/Cuisine_thumb.jpg",
	
	lien: "https://cuisinedebase.com/podcast-cuisine-de-base-techniques-apprendre-preparer-cap-cuisine/"
	
}

const J44 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Podcast CAP cuisine. Quoi faire après la formation de CAP cuisine?</h1>
	
	<p></p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2019/11/podcast-3-quoi-faire-apres-cap-cuisine.mp3" className="powerpress_link_pinw" target="_blank" title="Play in new window" rel="noopener noreferrer">Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2019/11/podcast-3-quoi-faire-apres-cap-cuisine.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="podcast-3-quoi-faire-apres-cap-cuisine.mp3">Download</a> (Duration: 13:40 — 8.4MB)<p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p>

<p>Chères lectrices, Chers lecteurs,</p>



<p>Voici le troisième épisode de ma série de <strong>podcast CAP cuisine</strong> sur <strong>l’apprentissage de la cuisine de base</strong>.</p>



<div className="post-image"><figure className="aligncenter size-full"><img data-recalc-dims="1" decoding="async" width="300" height="266" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/11/logo-podcast-cuisine-de-base.jpg?resize=300%2C266&amp;ssl=1" alt="" className="wp-image-1242"></img><figcaption>podcast CAP cuisine</figcaption></figure></div>



Dans cet épisode je vous parle de certaines <strong>activités que l’on peut exercer après avoir obtenu le CAP cuisine</strong>.



<p>Etre <strong>commis de cuisine</strong> n’est pas la seule voie à empreinter avec un CAP cuisine. Je vous livre le <u>résultat de mes prospections</u>. Je vous parle des différentes activités que l’on peut faire une fois la formation de cuisinier est terminée. (<strong>CAP cuisine ou autres formations</strong>).</p>



<p>N’hésitez pas à me faire des retours et remarques. Et n’hésitez pas à me faire part des <strong>sujets</strong> que vous voulez que je traite dans cette série de podcast.</p>



<p>Je vous souhaite une bonne écoute!</p>



<p>Pour écouter <a href="https://cuisinedebase.com/podcast-2-les-qualites-comportements-et-traits-de-caractere-d-un-bon-cuisinier/">l’ancien épisode du <strong>podcast CAP cuisine</strong></a></p>



<p>Grâce à ce podcast CAP cuisine, vous pourrez découvrir <strong>l’essentiel des posts</strong> après un <strong>diplôme de CAP cuisine</strong>. Il est aussi question d’apprentissage des bases de la cuisine, d’organisation, des astuces, etc. </p>



<p>Le podcast vous pouvez le télécharger, ainsi vous pourrez l’écouter <strong>dans vos déplacements en voiture, métro, train.</strong>.. Ainsi vous pouvez découvrir le meilleur du blog Cuisine De Base. J’ai la conviction que le fait de s’habituer d’écouter des podcasts pendant nos temps de déplacement est l’<strong>un de meilleurs moyens de gagner du temps tous les jours</strong>.</p>



<p>Voici les sources citées dans ce podcast:</p>



<h2 className="sous_titre"><a href="https://www.amazon.fr/gp/product/B07SSQRQF4/ref=as_li_qf_asin_il_tl?ie=UTF8&amp;tag=yhiicham-21&amp;creative=6746&amp;linkCode=as2&amp;creativeASIN=B07SSQRQF4&amp;linkId=134b5bbc347372d355912ab75a94dfe3">Le business plan pour créer une activité de chef cuisinier indépendant en partant de zéro</a></h2>



<a href="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&amp;OneJS=1&amp;Operation=GetAdHtml&amp;MarketPlace=FR&amp;source=ac&amp;ref=qf_sp_asin_til&amp;ad_type=product_link&amp;tracking_id=yhiicham-21&amp;marketplace=amazon&amp;region=FR&amp;placement=B07SSQRQF4&amp;asins=B07SSQRQF4&amp;linkId=5008e3ba6c56d011c47e367904109caf&amp;show_border=false&amp;link_opens_in_new_window=false&amp;price_color=333333&amp;title_color=0066c0&amp;bg_color=ffffff">     </a>



<p>Tout commentaires et feedbacks seront très appréciés.</p>



<p>Pour Écouter le podcast en live, <a href="https://media.blubrry.com/cuisinedebase/p/cuisinedebase.com/wp-content/uploads/2019/11/podcast-3-quoi-faire-apres-cap-cuisine.mp3" target="_blank" rel="noopener noreferrer">lancez tout simplement le lecteur au dessus de ce post</a>.</p>

	</div></article>,
	
	titre: "Podcast CAP cuisine. Quoi faire après la formation de CAP cuisine?",
	
	route: "/article/podcast3-quoi-faire-aprs-une-formation-de-cap-cuisine",
	
	categorie: "2",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/11/logo-podcast-cuisine-de-base.jpg",
	
	lien: "https://cuisinedebase.com/podcast3-quoi-faire-aprs-une-formation-de-cap-cuisine/"
	
}

const J45 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Podcast 2. Les qualités, comportements et traits de caractère d’un bon cuisinier</h1>
	
	<p></p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2019/11/podcast-2.mp3" className="powerpress_link_pinw" target="_blank" title="Play in new window" rel="noopener noreferrer">Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2019/11/podcast-2.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="podcast-2.mp3">Download</a> (Duration: 15:05 — 9.5MB)<p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p>
<p>Chers lecteurs, voici le deuxième épisode de ma série de podcast sur <strong>l’apprentissage de la cuisine de base</strong>. Ce deuxième épisode révèle les qualités d’un <strong>bon cuisinier</strong>.</p>



<p>Dans cet épisode je vous parle des <strong>traits de caractères</strong> et des <strong>qualités</strong> d’un <strong>bon cuisinier</strong>. Ainsi que le <strong>comportements</strong> qu’un <strong>bon cuisinier</strong> devrait avoir ou acquérir pour exercer son métier. Je vous parlerai également de la <strong>tenu vestimentaire</strong> et de sa composition, ainsi de certaines <strong>règles d’hygiène et de sécurité alimentaire</strong>…</p>



<p>N’hésitez pas à me faire des retours et remarques. Et n’hésitez pas à me faire part des <strong>sujets</strong> que vous voulez que je traite dans cette série de podcast.</p>



<p>Je vous souhaite une bonne écoute!</p>



<p>Pour écouter l’épisode précédent, <a href="https://cuisinedebase.com/podcast-introduction-lapprentissage-de-la-cuisine/">voici le lien</a></p>



<p>Vous pourrez grâce aux podcasts de <em>Cuisine De Base </em><strong>écouter l’essentiel des s</strong>ujets pour apprendre les bases de la cuisine. Aussi vous saurez davantage sur l’organisation et les astuces, etc. Vous pouvez télécharger ce podcast pour l’écouter <strong>dans vos déplacements en voiture, métro, train ou tout ce que vous voulez</strong>. Ainsi vous découvrirez le meilleur du blog Cuisine De Base. J’ai la conviction que le fait de s’habituer d’écouter des podcasts pendant nos temps de déplacement est <strong>un de meilleurs moyens de gagner du temps tous les jours</strong>.</p>



<p>Tout commentaires et feedbacks seront très appréciés.</p>



<p>Pour Écouter le podcast en live, <a href="https://cuisinedebase.com/wp-content/uploads/2019/11/podcast-2.mp3" target="_blank" rel="noopener noreferrer">lancez tout simplement le lecteur au dessus de ce post</a>.</p>


	</div></article>,
	
	titre: "Podcast 2. Les qualités, comportements et traits de caractère d’un bon cuisinier",
	
	route: "/article/podcast-2-les-qualites-comportements-et-traits-de-caractere-d-un-bon-cuisinier/",
	
	categorie: "2",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2019/11/logo-podcast-cuisine-de-base.jpg",
	
	lien: "https://cuisinedebase.com/podcast-2-les-qualites-comportements-et-traits-de-caractere-d-un-bon-cuisinier/"
	
}

const J46 = {

	contenu: <article><div className="post-content"><h1 className="titre_article">Podcast. Comment apprendre à cuisiner</h1>
	
	<p></p>Podcast: <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2019/10/podcast-1.mp3" className="powerpress_link_pinw" target="_blank" title="Play in new window" rel="noopener noreferrer">Play in new window</a> | <a href="https://media.blubrry.com/cuisinedebase/cuisinedebase.com/wp-content/uploads/2019/10/podcast-1.mp3" className="powerpress_link_d" title="Download" rel="nofollow" download="podcast-1.mp3">Download</a> (Duration: 29:53 — 19.8MB)<p className="powerpress_links powerpress_subscribe_links">S'inscrire au podcast via une plateforme <a href="https://podcasts.apple.com/us/podcast/cuisine-de-base/id1621607272?mt=2&amp;ls=1" className="powerpress_link_subscribe powerpress_link_subscribe_itunes" target="_blank" title="Subscribe on Apple Podcasts" rel="noopener noreferrer">Apple Podcasts</a> | <a href="https://open.spotify.com/show/1O0MAaNoqUfcUvPfMxFVkW" className="powerpress_link_subscribe powerpress_link_subscribe_spotify" target="_blank" title="Subscribe on Spotify" rel="noopener noreferrer">Spotify</a> | <a href="https://www.deezer.com/show/3644957" className="powerpress_link_subscribe powerpress_link_subscribe_deezer" target="_blank" title="Subscribe on Deezer" rel="noopener noreferrer">Deezer</a> | <a href="https://cuisinedebase.com/feed/podcast/" className="powerpress_link_subscribe powerpress_link_subscribe_rss" target="_blank" title="Subscribe via RSS" rel="noopener noreferrer">RSS</a></p>
<p>Chers lecteurs, j’inaugure avec ce post mon premier podcast, qui est un résumé de ce que un cuisinier devrait savoir avant de commencer sa formation de cuisine. Le podcast s’intitule <strong>comment apprendre à cuisiner</strong>.</p>



<div className="post-image"><figure className="aligncenter size-large is-resized"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg?resize=348%2C522&amp;ssl=1" alt="" srcSet="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg?resize=683%2C1024&amp;ssl=1 683w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg?resize=200%2C300&amp;ssl=1 200w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg?resize=768%2C1152&amp;ssl=1 768w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg?resize=600%2C900&amp;ssl=1 600w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg?resize=40%2C60&amp;ssl=1 40w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg?resize=60%2C90&amp;ssl=1 60w, https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg?w=1000&amp;ssl=1 1000w" sizes="(max-width: 348px) 100vw, 348px"></img><figcaption><strong>comment apprendre à cuisiner</strong></figcaption></figure></div>



On peut se poser la question pourquoi un podcast ?



<p>Hé bien je pense aux plus “overbookés” d’entre vous qui n’ont pas le temps de lire les publications en entier ou même de les lire tout court. Vous pourrez grâce aux podcasts de <em>Cuisine De Base </em><strong>écouter l’essentiel des posts</strong> qui pourront vous montrer <strong>comment apprendre à cuisiner</strong>. Vous trouverez aussi des conseils relatifs à l’apprentissage des bases de la cuisine, d’organisation, des astuces, etc. </p>



<p>Le podcast <strong>comment apprendre à cuisiner</strong> est plus facile à consulter <strong>dans vos déplacements en voiture, métro, train ou tout ce que vous voulez</strong>. Ainsi vous pourrez découvrir le meilleur du blog <strong>Cuisine De Base</strong>. </p>



<p>J’ai la conviction que le fait de s’habituer d’écouter des podcasts pendant nos temps de déplacement est <strong>un de meilleurs moyens de gagner du temps tous les jours</strong>.</p>



<p>C’est mon tout premier, je vous demande donc d’être indulgent . Tout commentaires et feedbacks seront très appréciés.</p>



<p>Pour écouter les autres <a href="https://cuisinedebase.com/category/podcasts/">podcasts de cuisine de base</a> cliquez ici.</p>

	</div></article>,
	
	titre: "Podcast. Comment apprendre à cuisiner",
	
	route: "/article/podcast-introduction-lapprentissage-de-la-cuisine",
	
	categorie: "2",
	
	sous_categorie: "-1",
	
	articlesConnexes: [],
	
	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/01/Podcast-micro-voix.jpeg",
	
	lien: "https://cuisinedebase.com/podcast-introduction-lapprentissage-de-la-cuisine/"
	
}

export const listeArticles = [J1, J2, J3, J4, J5];
