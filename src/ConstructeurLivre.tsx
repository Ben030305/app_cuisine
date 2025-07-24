import { Route } from "react-router";
import Livre from "./pages/Livre";

export function buildRouteLivre() {
	return (
		listeLivres.map(livre => (
			<Route key={livre.titre} path={livre.route}>
				<Livre props={livre} />
			</Route>
		))
	);
}

export const listeLivres = [
	{
		titre: "25 Fiches techniques pour préparer le CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/05/miniature-25-2.png",
		lien: "https://cuisinedebase.com/produit/25-fiches-techniques-pour-preparer-le-cap-cuisine/",
		route: "/livre/25-fiches-techniques-pour-preparer-le-cap-cuisine",
		tarif:11,
		description:
			<div>
				<p><b>Si vous préparez le CAP cuisine, alors ces 25 fiches techniques doivent vous intéresser :</b></p>
				<ul>
					<li>Descriptions des <strong>techniques de base</strong>,</li>
					<li><strong>Conseils</strong> et astuces,</li>
					<li><strong>Pdf</strong> consultable sur téléphone, tablette et ordinateur.</li>
				</ul>
				<p><span>BONUS1</span>: Je vous offre en bonus les <strong>annales des années passées</strong> !</p>
				<p><span>BONUS2</span>: Je vous offre en bonus les <strong>Fiches techniques en format Excel</strong> !</p>
			</div>
	},
	{
		titre: "Correction de l’épreuve EP1 CAP cuisine 2021",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/04/Correction-EP1-2021-CAP-cuisine-examen-ecrit.png",
		lien: "https://cuisinedebase.com/produit/correction-de-lepreuve-ep1-cap-cuisine-2021-telecharger-le-pdf/",
		route:"/livre/correction-de-lepreuve-ep1-cap-cuisine-2021",
		tarif:7,
		description:
		<div>
			<p><span>Vous êtes <strong>candidat libre au CAP cuisine</strong>, ou vous vous projetez de le devenir ?</span></p>
			<p>La correction<strong> de l’épreuve écrite EP1</strong> qui se trouve dans ce document peut vous aider à réussir plus facilement cette épreuve. 
			Le document comporte toutes les réponses des questions de l’épreuve EP1 session 2021. Vous pouvez aussi télécharger le sujet de cette épreuve si vous voulez le travailler tout seul. </p>
			<p><span>Le livre est en <strong>format numérique</strong> que vous pouvez télécharger sur votre ordinateur, tablette et/ou téléphone portable. </span> 
			<span>Une fois téléchargé, le livre vous appartiendra et vous pourrez le consulter à tout moment même sans connexion Internet !</span></p>
			<p><span>BONUS1</span>: Je vous offre en bonus les <strong>annales des années passées</strong> !</p>
			<p><span>BONUS2</span>: Je vous offre en bonus les <strong>Fiches techniques en format Excel</strong> !</p>
		</div>
	},
	{
		titre: "Correction EP1 2024 CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2025/04/Correction-EP1-2024-Miniature.png",
		lien: "https://cuisinedebase.com/produit/correction-ep1-2024-cap-cuisine/",
		route:"/livre/correction-ep1-2024-cap-cuisine/",
		tarif:7,
		description:
		<p>Dans ce corrigé, vous trouverez des <strong>réponses détaillées</strong> et des <strong>explications claires</strong> pour chaque question de l’examen EP1 session 2024.</p>
	},
	{
		titre: "Corrigé de l’épreuve EP1 Session 2006 CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/06/Corrig-miniature.png",
		lien: "https://cuisinedebase.com/produit/corrige-de-epreuve-ep1-session-2006-cap-cuisine/",
		route:"/livre/corrige-de-epreuve-ep1-session-2006-cap-cuisine",
		tarif:7,
		description:
			<div>
			<p>Le document que vous avez entre les mains est le corrigé de l’épreuve pratique EP1, Approvisionnement et organisation de la production culinaire.</p>
			<p>Il est organisé de la manière suivante :</p>
			<ul>
			<li>Une page de questions, puis une page de réponses,</li>
			<li>La page ou l’ensemble de pages de questions servent à :
			<ul>
			<li>expliquer et donner les détails d’une situation,</li>
			<li>poser une ou plusieurs questions en relation avec cette situation.</li>
			</ul>
			</li>
			<li>Dans les pages de réponses on peut trouver :
			<ul>
			<li>Les réponses aux questions,</li>
			<li>Des éléments pour mieux comprendre les questions et les réponses attendues.</li>
			</ul>
			</li>
			<li>Vous pouvez imprimer ce document puis répondre directement dans les cases prévues à cet effet,</li>
			<li>Sinon, vous pouvez répondre directement dans le document en utilisant un outil qui permet de modifier les pdf,</li>
			<li>Ou sinon, vous pouvez répondre oralement ou sur une feuille de papier puis comparez vos réponse avec le corrigé proposé.</li>
			</ul>
			</div>
	},
	{
		titre: "Corrigé de l’épreuve EP1 Session 2019 CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2021/05/Correction-annale-Epreuve-EP1-Organisation-production-cuisine-CAP-session-2019.png",
		lien: "https://cuisinedebase.com/produit/corrige-epreuve-ep1-session-2019-cap-cuisine/",
		route:"/livre/corrige-epreuve-ep1-session-2019-cap-cuisine",
		tarif:7,
		description:
			<div>
			<p>Le document que vous avez entre les mains est le corrigé de l’épreuve pratique EP1, Approvisionnement et organisation de la production culinaire.</p>
			<ul>
			<li>Dans les pages de réponses vous pouvez trouver :
			<ul>
			<li>Les réponses aux questions,</li>
			<li>Des éléments pour mieux comprendre les questions et les réponses attendues.</li>
			</ul>
			</li>
			<li>Vous pouvez imprimer ce document puis répondre directement dans les cases prévues à cet effet,</li>
			<li>Sinon, vous pouvez répondre directement dans le document en utilisant un outil qui permet de modifier les pdf,</li>
			<li>Ou sinon, vous pouvez répondre oralement ou sur une feuille de papier puis comparez vos réponse avec le corrigé proposé.</li>
			</ul>
			</div>
	},
	{
		titre: "Corrigé EP1 2020. Organisation de la production de cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2021/05/Correction-EP1-session-2020-organisation-production-cuisine.png",
		lien: "https://cuisinedebase.com/produit/corrige-epreuve-ep1-2020-cap-organisation-production-cuisine/",
		route:"/livre/corrige-epreuve-ep1-2020-cap-organisation-production-cuisine",
		tarif:7,
		description:
			<div>
			<p>Le document que vous avez entre les mains est le corrigé de l’épreuve pratique EP1, Approvisionnement et organisation de la production culinaire.</p>
			<ul>
			<li>Dans les pages de réponses vous pouvez trouver :
			<ul>
			<li>Les réponses aux questions,</li>
			<li>Des éléments pour mieux comprendre les questions et les réponses attendues.</li>
			</ul>
			</li>
			<li>Vous pouvez imprimer ce document puis répondre directement dans les cases prévues à cet effet,</li>
			<li>Sinon, vous pouvez répondre directement dans le document en utilisant un outil qui permet de modifier les pdf,</li>
			<li>Ou sinon, vous pouvez répondre oralement ou sur une feuille de papier puis comparez vos réponse avec le corrigé proposé.</li>
			</ul>
			</div>
	},
	{
		titre: "Corrigé EP1 2022 CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/03/Corrige-EP1-2022-CAP-cuisine.png",
		lien: "https://cuisinedebase.com/produit/corrige-ep1-2022-cap-cuisine/",
		route:"/livre/corrige-ep1-2022-cap-cuisine",
		tarif:7,
		description:
			<div>
				<p>Caractéristiques du corrigé EP1 2022 CAP Cuisine :
			<ul>
				<li><strong>Corrigé détaillé</strong> : Nous avons passé en revue toutes les questions posées lors de l’épreuve EP1 et fourni des corrections précises et détaillées pour chacune d’entre elles.</li>
				<li><strong>Adapté aux candidats libres</strong> : Que vous soyez en formation ou que vous révisiez par vous-même, notre corrigé est conçu pour répondre à vos besoins spécifiques en tant que candidat libre.</li>
				<li><strong>Conseils pratiques pour réussir</strong> : En plus des corrections, nous vous donnons des conseils utiles pour vous aider à aborder l’épreuve avec confiance et à maximiser vos chances de réussite.</li>
			</ul>
			</p>
			</div>
	},
	{
		titre: "Corrigé EP1 2023 CAP cuisine – Réponses et Explications",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/04/Corrige-EP1-2023.png",
		lien: "https://cuisinedebase.com/produit/corrige-ep1-2023-cap-cuisine-candidat-libre/",
		route:"/livre/corrige-ep1-2023-cap-cuisine-candidat-libre",
		tarif:7,
		description:
			<p>Dans ce corrigé, vous trouverez des <strong>réponses détaillées</strong> et des <strong>explications claires</strong> pour chaque question de l’examen EP1 session 2023.</p>
	},
	{
		titre: "Corrigé Mathématiques et Physique-Chimie 2023 CAP Groupement 2",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/05/Corrige-Math-science-2023.png",
		lien: "https://cuisinedebase.com/produit/corrige-mathematiques-physique-chimie-2023-cap-groupement-2/",
		route:"/livre/corrige-mathematiques-physique-chimie-2023-cap-groupement-2",
		tarif:11,
		description:
			<p>Dans ce corrigé, vous trouverez des <strong>réponses détaillées</strong> et des <strong>explications claires</strong> pour chaque question de l’examen <strong>Mathématiques et Physique-Chimie</strong> de la session 2023.</p>
	},
	{
		titre: "Les bases de la cuisine professionnelle",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/08/les-base-de-cuisine-fiche.png",
		lien: "https://cuisinedebase.com/produit/fiche-de-revision-des-techniques-de-base/",
		route:"/livre/fiche-de-revision-des-techniques-de-base",
		tarif:17,
		description:
			<div>
			<p><i>Chères lectrices, chers lecteurs,</i></p>
			<p><i>C’est avec un grand plaisir que je vous </i><i>ai préparé ce </i><i>livret </i><i>qui regroupe quelques principales techniques </i><i>de base en cuisine. J’espère très sincèrement qu’il vous sera bénéfique pour aller de l’avant et concrétiser vos projets d’apprentissage de la cuisine !</i></p>
			<p>Vous trouverez dans ce livret le contenu suivant :</p>
			<ul>
			<li>Préparation des légumes,</li>
			<li>Garnitures,</li>
			<li>Poissons et crustacés,</li>
			<li>Volailles,</li>
			<li>Les pâtes de base,</li>
			<li>Les crèmes de base,</li>
			<li>Les sauces,</li>
			<li>Le matériel de cuisine,</li>
			<li>Les locaux,</li>
			<li>Fiche d’organisation du travail.</li>
			</ul>
			<p><span>BONUS1</span>: Je vous offre en bonus les <strong>annales des années passées</strong> !</p>
			<p><span>BONUS2</span>: Je vous offre en bonus les <strong>Fiches techniques en format Excel</strong> !</p>
			<p>Ce produit est sous forme d’un <strong>livre numérique</strong> au format pdf que vous pouvez télécharger et lire sur votre <strong>ordinateur</strong>, <strong>tablette</strong> ou <strong>téléphone portable</strong> (ou les trois).
			Une fois téléchargé, le livre vous appartiendra et vous pourrez le consulter à tout moment et même <strong>sans connexion internet</strong> !</p>
			</div>
	},
	{
		titre: "Sujets EP2 épreuve CAP cuisine 2021",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/04/verrine-fraise-vanille-citron-vert.jpg",
		lien: "https://cuisinedebase.com/produit/sujets-ep2-epreuve-cap-cuisine-2021/",
		route:"/livre/sujets-ep2-epreuve-cap-cuisine-2021",
		tarif:8.5,
		description:
			<div>
			<p><span>Vous êtes <strong>candidat libre au CAP cuisine</strong>, ou vous vous projetez de le devenir ?</span></p>
			<p>La liste des <strong>sujets de l’épreuve pratique EP2</strong> qui sont dans ce document peut vous aider à réussir plus facilement cette épreuve. 
			La liste contient <strong>35 fiches techniques</strong>: des entrées, des plats et des desserts. voir la liste complète plus bas dans la description du produit.</p>
			<p><span>Le livre est en <strong>format numérique</strong> que vous pouvez télécharger sur votre ordinateur, tablette ou/et téléphone portable. </span>
			<span>Une fois téléchargé, le livre vous appartiendra et vous pourrez le consulter à tout moment même sans connexion Internet !</span></p>
			<p><span>BONUS1</span>: Je vous offre en bonus les <strong>annales des années passées</strong> !</p>
			<p><span>BONUS2</span>: Je vous offre en bonus les <strong>Fiches techniques en format Excel</strong> !</p>
			</div>
	}
];
