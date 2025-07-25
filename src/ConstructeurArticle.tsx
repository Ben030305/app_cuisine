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


export const cocotte = {

	contenu: <article id="post-3219" className="cocotte">


		<div className="post-image">
			<img src="https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2025/01/Cocotte-en-Fonte.jpg?resize=1024%2C765&amp;ssl=1" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Cocotte en fonte" decoding="async" />			</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi la Cocotte en Fonte Est Indispensable dans Votre Cuisine</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Bienvenue sur Cuisine de Base !
					Si vous &ecirc;tes nouveau ici, vous voudrez sans doute lire mon livre "Le kit du candidat libre au CAP cuisine". <a href="https://hyoussef.activehosted.com/f/7">Cliquez ici pour télécharger gratuitement le livre!</a> 🙂</p></div><div className="wwsgd_return_visitor"><p>Bienvenue sur Cuisine de Base !
						Comme ce n'est pas la 1ère fois que vous venez ici, vous voudrez sans doute lire mon livre "LES 25 RECETTES INCONTOURNABLES POUR DECROCHER VOTRE CAP CUISINE". <a href="https://amzn.to/48TCpJ0">Cliquez ici pour d&eacute;couvrir le livre!</a> 🙂</p></div>

			</div>
		</div>

	</article>,

	titre: "Réussir un diplôme en candidat libre malgré un emploi du temps chargé : les secrets de ceux qui ont réussi",

	route: "/article/cocotte",

	date: "",

	categorie: "1",

	sous_categorie: "1",

	articlesConnexes: [1, 2],

	image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2025/01/Cocotte-en-Fonte.jpg?resize=1024%2C765&amp;ssl=1",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'
}


export const banane = {

	contenu: <article id="post-3219" className="banane">


		<div className="post-image">
			<img src="https://i.pinimg.com/736x/dc/1f/2f/dc1f2f178687d19ad2c4970ac6d24a20.jpg" alt="Banane" decoding="async" />
		</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi la Banane Est Indispensable dans Votre Cuisine</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Ceci est une banane</p></div>

			</div>
		</div>

	</article>,

	titre: "banane",

	route: "/article/banane",

	date: "",

	categorie: "1",

	sous_categorie: "2",

	articlesConnexes: [0, 2],

	image: "assets/banane.jpg",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const haricot = {

	contenu: <article id="post-3219" className="haricot">


		<div className="post-image">
			<img src="https://media02.stockfood.com/largepreviews/NDQ2NDUyNw==/00144017-A-Single-Green-Bean.jpg" alt="Cocotte en fonte" decoding="async" />
		</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi le Haricot Est Indispensable dans Votre Cuisine</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Ceci est un haricot</p></div>

			</div>
		</div>

	</article>,

	titre: "haricot",

	route: "/article/haricot",

	date: "",

	categorie: "3",

	sous_categorie: "5",

	articlesConnexes: [0, 1],

	image: "assets/haricot.png",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const chien = {

	contenu: <article id="post-3219" className="chien">


		<div className="post-image">
			<img src="https://cdn.futura-sciences.com/sources/images/actu/esperance-vie-chiens-chiot-golden-retriever.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Chien" decoding="async" />			</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi le Chien Est Indispensable dans Votre Vie</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-le-chien-est-indispensable-dans-votre-vie/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Bienvenue sur Cuisine de Base !
					Si vous &ecirc;tes nouveau ici, vous voudrez sans doute lire mon livre "Le kit du candidat libre au CAP cuisine". <a href="https://hyoussef.activehosted.com/f/7">Cliquez ici pour télécharger gratuitement le livre!</a> 🙂</p></div><div className="wwsgd_return_visitor"><p>Bienvenue sur Cuisine de Base !
						Comme ce n'est pas la 1ère fois que vous venez ici, vous voudrez sans doute lire mon livre "LES 25 RECETTES INCONTOURNABLES POUR DECROCHER VOTRE CAP CUISINE". <a href="https://amzn.to/48TCpJ0">Cliquez ici pour d&eacute;couvrir le livre!</a> 🙂</p></div>

			</div>
		</div>

	</article>,

	titre: "chien",

	route: "/article/chien",

	date: "",

	categorie: "2",

	sous_categorie: "-1",

	articlesConnexes: [1, 2],

	image: "https://cdn.futura-sciences.com/sources/images/actu/esperance-vie-chiens-chiot-golden-retriever.jpg",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const chat = {

	contenu: <article id="post-3219" className="chat">


		<div className="post-image">
			<img src="https://images.ctfassets.net/denf86kkcx7r/57uYN7JlyDtQ91KvRldrm9/0a0656983993f5e09c4daa0a4fd8f5e6/comment-punir-son-chat-91" alt="Chat" decoding="async" />			</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi le Chat Est Indispensable dans Votre chambre</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Bienvenue sur Cuisine de Base !
					Si vous &ecirc;tes nouveau ici, vous voudrez sans doute lire mon livre "Le kit du candidat libre au CAP cuisine". <a href="https://hyoussef.activehosted.com/f/7">Cliquez ici pour télécharger gratuitement le livre!</a> 🙂</p></div><div className="wwsgd_return_visitor"><p>Bienvenue sur Cuisine de Base !
						Comme ce n'est pas la 1ère fois que vous venez ici, vous voudrez sans doute lire mon livre "LES 25 RECETTES INCONTOURNABLES POUR DECROCHER VOTRE CAP CUISINE". <a href="https://amzn.to/48TCpJ0">Cliquez ici pour d&eacute;couvrir le livre!</a> 🙂</p></div>

			</div>
		</div>

	</article>,

	titre: "chat",

	route: "/article/chat",

	date: "",

	categorie: "2",

	sous_categorie: "-1",

	articlesConnexes: [5, 6],

	image: "https://images.ctfassets.net/denf86kkcx7r/57uYN7JlyDtQ91KvRldrm9/0a0656983993f5e09c4daa0a4fd8f5e6/comment-punir-son-chat-91",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const perroquet = {

	contenu: <article id="post-3219" className="perroquet">


		<div className="post-image">
			<img src="https://www.tropical-parc.com/usermedia/photo-634214380368437500-1.jpg?dummy=0&h=800" alt="Perroquet" decoding="async" />			</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi le Perroquet Est Indispensable dans Votre Cage à oiseaux</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Bienvenue sur Cuisine de Base !
					Si vous &ecirc;tes nouveau ici, vous voudrez sans doute lire mon livre "Le kit du candidat libre au CAP cuisine". <a href="https://hyoussef.activehosted.com/f/7">Cliquez ici pour télécharger gratuitement le livre!</a> 🙂</p></div><div className="wwsgd_return_visitor"><p>Bienvenue sur Cuisine de Base !
						Comme ce n'est pas la 1ère fois que vous venez ici, vous voudrez sans doute lire mon livre "LES 25 RECETTES INCONTOURNABLES POUR DECROCHER VOTRE CAP CUISINE". <a href="https://amzn.to/48TCpJ0">Cliquez ici pour d&eacute;couvrir le livre!</a> 🙂</p></div>

			</div>
		</div>

	</article>,

	titre: "perroquet",

	route: "/article/perroquet",

	date: "",

	categorie: "1",

	sous_categorie: "3",

	articlesConnexes: [1, 7],

	image: "https://www.tropical-parc.com/usermedia/photo-634214380368437500-1.jpg?dummy=0&h=800",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const canard = {

	contenu: <article id="post-3219" className="canard">


		<div className="post-image">
			<img src="https://www.la-coccinelle.fr/wp-content/uploads/2020/06/canard-explication-tte-modeler-du-mot-canard.jpeg" alt="Canard" decoding="async" />			</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi le Canard Est Indispensable dans Votre piscine</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Bienvenue sur Cuisine de Base !
					Si vous &ecirc;tes nouveau ici, vous voudrez sans doute lire mon livre "Le kit du candidat libre au CAP cuisine". <a href="https://hyoussef.activehosted.com/f/7">Cliquez ici pour télécharger gratuitement le livre!</a> 🙂</p></div><div className="wwsgd_return_visitor"><p>Bienvenue sur Cuisine de Base !
						Comme ce n'est pas la 1ère fois que vous venez ici, vous voudrez sans doute lire mon livre "LES 25 RECETTES INCONTOURNABLES POUR DECROCHER VOTRE CAP CUISINE". <a href="https://amzn.to/48TCpJ0">Cliquez ici pour d&eacute;couvrir le livre!</a> 🙂</p></div>

			</div>
		</div>

	</article>,

	titre: "canard",

	route: "/article/canard",

	date: "",

	categorie: "1",

	sous_categorie: "4",

	articlesConnexes: [3, 9],

	image: "https://www.la-coccinelle.fr/wp-content/uploads/2020/06/canard-explication-tte-modeler-du-mot-canard.jpeg",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const koala = {

	contenu: <article id="post-3219" className="koala">


		<div className="post-image">
			<img src="https://www.pandaclub.ch/wp-content/uploads/2019/06/Medium_WW236934.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Koala" decoding="async" />			</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi le Koala Est Indispensable dans Votre Jardin</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Bienvenue sur Cuisine de Base !
					Si vous &ecirc;tes nouveau ici, vous voudrez sans doute lire mon livre "Le kit du candidat libre au CAP cuisine". <a href="https://hyoussef.activehosted.com/f/7">Cliquez ici pour télécharger gratuitement le livre!</a> 🙂</p></div><div className="wwsgd_return_visitor"><p>Bienvenue sur Cuisine de Base !
						Comme ce n'est pas la 1ère fois que vous venez ici, vous voudrez sans doute lire mon livre "LES 25 RECETTES INCONTOURNABLES POUR DECROCHER VOTRE CAP CUISINE". <a href="https://amzn.to/48TCpJ0">Cliquez ici pour d&eacute;couvrir le livre!</a> 🙂</p></div>

			</div>
		</div>

	</article>,

	titre: "koala",

	route: "/article/koala",

	date: "",

	categorie: "3",

	sous_categorie: "6",

	articlesConnexes: [1, 5],

	image: "https://www.pandaclub.ch/wp-content/uploads/2019/06/Medium_WW236934.jpg",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const panda = {

	contenu: <article id="post-3219" className="panda">


		<div className="post-image">
			<img src="https://www.europe1.fr/lmnr/var/europe1/storage/media/image/2025/02/15/11/le-panda-geant-n-est-plus-en-danger-mais-reste-menace.jpg?VersionId=wbkAx2q8tla7ApuRokVdH0djhK3eyqqb" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Cocotte en fonte" decoding="async" />			</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi le Panda Est Indispensable sur Votre bambou</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Bienvenue sur Cuisine de Base !
					Si vous &ecirc;tes nouveau ici, vous voudrez sans doute lire mon livre "Le kit du candidat libre au CAP cuisine". <a href="https://hyoussef.activehosted.com/f/7">Cliquez ici pour télécharger gratuitement le livre!</a> 🙂</p></div><div className="wwsgd_return_visitor"><p>Bienvenue sur Cuisine de Base !
						Comme ce n'est pas la 1ère fois que vous venez ici, vous voudrez sans doute lire mon livre "LES 25 RECETTES INCONTOURNABLES POUR DECROCHER VOTRE CAP CUISINE". <a href="https://amzn.to/48TCpJ0">Cliquez ici pour d&eacute;couvrir le livre!</a> 🙂</p></div>

			</div>
		</div>

	</article>,

	titre: "panda",

	route: "/article/panda",

	date: "",

	categorie: "4",

	sous_categorie: "-1",

	articlesConnexes: [4, 2],

	image: "https://www.europe1.fr/lmnr/var/europe1/storage/media/image/2025/02/15/11/le-panda-geant-n-est-plus-en-danger-mais-reste-menace.jpg?VersionId=wbkAx2q8tla7ApuRokVdH0djhK3eyqqb",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const raccoon = {

	contenu: <article id="post-3219" className="raccoon">


		<div className="post-image">
			<img src="https://content.imageresizer.com/images/memes/Evil-Plotting-Raccoon-meme-1l3qc.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Cocotte en fonte" decoding="async" />			</div>


		<div className="post-content">

			<header className="entry-header">

				<h1 className="entry-title">Pourquoi le Raccoon Est Indispensable dans Votre Cuisine</h1>
				<div className="entry-meta post-details"><span className="posted-on meta-date">Publié le <a href="https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/" rel="bookmark" aria-label="Publié le"><time className="entry-date published" dateTime=""></time><time className="updated" dateTime=""></time></a></span><span className="posted-by meta-author"> par <span className="author vcard"><a className="url fn n" href="https://cuisinedebase.com/author/admin7879/" title="Afficher tous les articles par " rel="author"></a></span></span></div>
			</header>

			<div className="entry-content clearfix">

				<div className="wwsgd_new_visitor"><p>Bienvenue sur Cuisine de Base !
					Si vous &ecirc;tes nouveau ici, vous voudrez sans doute lire mon livre "Le kit du candidat libre au CAP cuisine". <a href="https://hyoussef.activehosted.com/f/7">Cliquez ici pour télécharger gratuitement le livre!</a> 🙂</p></div><div className="wwsgd_return_visitor"><p>Bienvenue sur Cuisine de Base !
						Comme ce n'est pas la 1ère fois que vous venez ici, vous voudrez sans doute lire mon livre "LES 25 RECETTES INCONTOURNABLES POUR DECROCHER VOTRE CAP CUISINE". <a href="https://amzn.to/48TCpJ0">Cliquez ici pour d&eacute;couvrir le livre!</a> 🙂</p></div>

			</div>
		</div>

	</article>,

	titre: "raccoon",

	route: "/article/raccoon",

	date: "",

	categorie: "3",

	sous_categorie: "5",

	articlesConnexes: [7, 8],

	image: "https://content.imageresizer.com/images/memes/Evil-Plotting-Raccoon-meme-1l3qc.jpg",

	lien: 'https://cuisinedebase.com/pourquoi-la-cocotte-en-fonte-est-indispensable-dans-votre-cuisine/'

}

export const listeArticles = [cocotte, banane, haricot, chien, chat, perroquet, canard, koala, panda, raccoon];
