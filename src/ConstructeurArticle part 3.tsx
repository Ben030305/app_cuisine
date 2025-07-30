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
	<figure className="wp-block-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/tarte-aux-pommes_thumb1.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/tarte-aux-pommes_thumb1_thumb.png" alt="tarte-aux-pommes_thumb1" title="tarte-aux-pommes_thumb1"></img></a></figure>
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
<figure className="wp-block-image"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/12/Gigot-7-heures_thumb.png" alt="Gigot-7-heures" title="Gigot-7-heures"></img></figure>
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
<figure className="wp-block-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/creme-caramel-renversee.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/creme-caramel-renversee_thumb.png" alt="creme-caramel-renversee" title="creme-caramel-renversee"></img></a></figure>
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
<figure className="wp-block-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Escalope-poulet-volaille-dinde.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Escalope-poulet-volaille-dinde_thumb.png" alt="Escalope-poulet-volaille-dinde" title="Escalope-poulet-volaille-dinde"></img></a></figure>
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
<figure className="wp-block-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Blanquette-de-veau.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/Blanquette-de-veau_thumb.png" alt="Blanquette-de-veau" title="Blanquette-de-veau"></img></a></figure>
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
<figure className="wp-block-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/goujonnettes_sole.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/goujonnettes_sole_thumb.png" alt="goujonnettes_sole" title="goujonnettes_sole"></img></a></figure>
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
<figure className="wp-block-image"><a href="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/poisson-poche.png"><img data-recalc-dims="1" decoding="async" src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2018/11/poisson-poche_thumb.png" alt="poisson-poche" title="poisson-poche"></img></a></figure>
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


export const listeArticles = [J16];
