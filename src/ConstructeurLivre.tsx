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
		`
			Si vous préparez le CAP cuisine, alors ces 25 fiches techniques doivent vous intéresser

			+ Descriptions des techniques de base.

			+ Conseils et astuces.

			+ Format pdf consultable sur téléphone, tablette et ordinateur.

			BONUS1 : Je vous offre en bonus les annales des années passées!

			BONUS2 : Je vous offre en bonus les Fiches techniques en format Excel!
		`
	},
	{
		titre: "Correction de l’épreuve EP1 CAP cuisine 2021. Télécharger le pdf",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/04/Correction-EP1-2021-CAP-cuisine-examen-ecrit.png",
		lien: "https://cuisinedebase.com/produit/correction-de-lepreuve-ep1-cap-cuisine-2021-telecharger-le-pdf/",
		route:"/livre/correction-de-lepreuve-ep1-cap-cuisine-2021-telecharger-le-pdf",
		tarif:7,
		description:
		`
			Vous êtes candidat libre au CAP cuisine, ou vous vous projetez de le devenir?

			La correction de l’épreuve écrite EP1 qui se trouve dans ce document peut vous aider à réussir plus facilement cette épreuve.

			Le document comporte toutes les réponses des questions de l’épreuve EP1 session 2021. Vous pouvez aussi télécharger le sujet de cette épreuve si vous voulez le travailler tout seul.

			Le livre est en format numérique que vous pouvez télécharger sur votre ordinateur, tablette ou/et téléphone portable.

			Une fois téléchargé, le livre vous appartiendra et vous pourrez le consulter à tout moment même sans connexion Internet !

			BONUS1 : Je vous offre en bonus les annales des années passées!

			BONUS2 : Je vous offre en bonus les Fiches techniques en format Excel!
		`
	},
	{
		titre: "Correction EP1 2024 CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2025/04/Correction-EP1-2024-Miniature.png",
		lien: "https://cuisinedebase.com/produit/correction-ep1-2024-cap-cuisine/",
		route:"/livre/correction-ep1-2024-cap-cuisine/",
		tarif:7,
		description:
		`
			Dans ce corrigé, vous trouverez des réponses détaillées et des explications claires pour chaque question de l’examen EP1 session 2024.
		`
	},
	{
		titre: "Corrigé de l’épreuve EP1 Session 2006 CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/06/Corrig-miniature.png",
		lien: "https://cuisinedebase.com/produit/corrige-de-epreuve-ep1-session-2006-cap-cuisine/",
		route:"/livre/corrige-de-epreuve-ep1-session-2006-cap-cuisine",
		tarif:7,
		description:
		`
			Le document que vous avez entre les mains est le corrigé de l’épreuve pratique EP1, Approvisionnement et organisation de la production culinaire

			Il est organisé de la manière suivante:

			Une page de questions, puis une page de réponses
			La page ou l’ensemble de pages de questions servent à
				expliquer et donner les détails d’une situation,
				poser une ou plusieurs questions en relation avec cette situation
			Dans les pages de réponses on peut trouver
				Les réponses aux questions
				Des éléments pour mieux comprendre les questions et les réponses attendues
			Vous pouvez imprimer ce document puis répondre directement dans les cases prévues à cet effet
			Sinon, vous pouvez répondre directement dans le document en utilisant un outil qui permet de modifier les pdf
			Ou sinon, vous pouvez répondre oralement ou sur une feuille de papier puis comparez vos réponse avec le corrigé proposé
		`
	},
	{
		titre: "Corrigé de l’épreuve EP1 Session 2019 CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2021/05/Correction-annale-Epreuve-EP1-Organisation-production-cuisine-CAP-session-2019.png",
		lien: "https://cuisinedebase.com/produit/corrige-epreuve-ep1-session-2019-cap-cuisine/",
		route:"/livre/corrige-epreuve-ep1-session-2019-cap-cuisine",
		tarif:7,
		description:
		`
			Le document que vous avez entre les mains est le corrigé de l’épreuve pratique EP1, Approvisionnement et organisation de la production culinaire

			Dans les pages de réponses vous pouvez trouver
				Les réponses aux questions
				Des éléments pour mieux comprendre les questions et les réponses attendues
			Vous pouvez imprimer ce document puis répondre directement dans les cases prévues à cet effet
			Sinon, vous pouvez répondre directement dans le document en utilisant un outil qui permet de modifier les pdf
			Ou sinon, vous pouvez répondre oralement ou sur une feuille de papier puis comparez vos réponse avec le corrigé proposé.
		`
	},
	{
		titre: "Corrigé EP1 2020. Organisation de la production de cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2021/05/Correction-EP1-session-2020-organisation-production-cuisine.png?zoom=2&resize=300%2C300&ssl=1",
		lien: "https://cuisinedebase.com/produit/corrige-epreuve-ep1-2020-cap-organisation-production-cuisine/",
		route:"/livre/corrige-epreuve-ep1-2020-cap-organisation-production-cuisine",
		tarif:7,
		description:
		`
			Le document que vous avez entre les mains est le corrigé de l’épreuve pratique EP1, Approvisionnement et organisation de la production culinaire

			Dans les pages de réponses vous pouvez trouver
				Les réponses aux questions
				Des éléments pour mieux comprendre les questions et les réponses attendues
			Vous pouvez imprimer ce document puis répondre directement dans les cases prévues à cet effet
			Sinon, vous pouvez répondre directement dans le document en utilisant un outil qui permet de modifier les pdf
			Ou sinon, vous pouvez répondre oralement ou sur une feuille de papier puis comparez vos réponse avec le corrigé proposé.
		`
	},
	{
		titre: "Corrigé EP1 2022 CAP cuisine",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/03/Corrige-EP1-2022-CAP-cuisine.png",
		lien: "https://cuisinedebase.com/produit/corrige-ep1-2022-cap-cuisine/",
		route:"/livre/corrige-ep1-2022-cap-cuisine",
		tarif:7,
		description:
		`
			Caractéristiques du corrigé EP1 2022 CAP Cuisine :

			– Corrigé détaillé : Nous avons passé en revue toutes les questions posées lors de l’épreuve EP1 et fourni des corrections précises et détaillées pour chacune d’entre elles.
			– Adapté aux candidats libres : Que vous soyez en formation ou que vous révisiez par vous-même, notre corrigé est conçu pour répondre à vos besoins spécifiques en tant que candidat libre.
			– Conseils pratiques pour réussir : En plus des corrections, nous vous donnons des conseils utiles pour vous aider à aborder l’épreuve avec confiance et à maximiser vos chances de réussite.
		`
	},
	{
		titre: "Corrigé EP1 2023 CAP cuisine – Réponses et Explications",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/04/Corrige-EP1-2023.png",
		lien: "https://cuisinedebase.com/produit/corrige-ep1-2023-cap-cuisine-candidat-libre/",
		route:"/livre/corrige-ep1-2023-cap-cuisine-candidat-libre",
		tarif:7,
		description:
		`
			Dans ce corrigé, vous trouverez des réponses détaillées et des explications claires pour chaque question de l’examen EP1 session 2023.
		`
	},
	{
		titre: "Corrigé Mathématiques et Physique-Chimie 2023 CAP Groupement 2",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2024/05/Corrige-Math-science-2023.png?resize=300%2C300&ssl=1",
		lien: "https://cuisinedebase.com/produit/corrige-mathematiques-physique-chimie-2023-cap-groupement-2/",
		route:"/livre/corrige-mathematiques-physique-chimie-2023-cap-groupement-2",
		tarif:11,
		description:
		`
			Dans ce corrigé, vous trouverez des réponses détaillées et des explications claires pour chaque question de l’examen Mathématiques et Physique-Chimie de la session 2023.
		`
	},
	{
		titre: "Les bases de la cuisine professionnelle",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2020/08/les-base-de-cuisine-fiche.png?resize=300%2C300&ssl=1",
		lien: "https://cuisinedebase.com/produit/fiche-de-revision-des-techniques-de-base/",
		route:"/livre/fiche-de-revision-des-techniques-de-base",
		tarif:17,
		description:
		`
			Chères lectrices, chers lecteurs,

			C’est avec un grand plaisir que je vous ai préparé ce livret qui regroupe quelques principales techniques de base en cuisine. J’espère très sincèrement qu’il vous sera bénéfique pour aller de l’avant et concrétiser vos projets d’apprentissage de la cuisine!

			vous trouverez dans ce livret le contenu suivant:

				Préparation des légumes
				Garnitures
				Poissons et crustacés
				Volailles
				Les pâtes de base
				Les crèmes de base
				Les sauces
				Le matériel de cuisine
				Les locaux
				Fiche d’organisation du travail

			BONUS1 : Je vous offre en bonus les annales des années passées!

			BONUS2 : Je vous offre en bonus les Fiches techniques en format Excel!

			Ce produit est sous forme d’un livre numérique  au format pdf que vous pouvez télécharger et lire sur votre ordinateur, tablette ou téléphone portable. (ou les trois)

			Une fois téléchargé, le livre vous appartiendra et vous pourrez le consulter à tout moment et même sans connexion internet!
		`
	},
	{
		titre: "sujets EP2 épreuve CAP cuisine 2021",
		image: "https://i0.wp.com/cuisinedebase.com/wp-content/uploads/2022/04/verrine-fraise-vanille-citron-vert.jpg?zoom=2&resize=300%2C300&ssl=1",
		lien: "https://cuisinedebase.com/produit/sujets-ep2-epreuve-cap-cuisine-2021/",
		route:"/livre/sujets-ep2-epreuve-cap-cuisine-2021",
		tarif:8.5,
		description:
		`
			Vous êtes candidat libre au CAP cuisine, ou vous vous projetez de le devenir?

			La liste des sujets de l’épreuve pratique EP2 qui sont dans ce document peut vous aider à réussir plus facilement cette épreuve.

			La liste contient 35 fiches techniques: des entrées, des plats et des desserts. voir la liste complète plus bas dans la description du produit.

			Le livre est en format numérique que vous pouvez télécharger sur votre ordinateur, tablette ou/et téléphone portable.

			Une fois téléchargé, le livre vous appartiendra et vous pourrez le consulter à tout moment même sans connexion Internet !

			BONUS1 : Je vous offre en bonus les annales des années passées!

			BONUS2 : Je vous offre en bonus les Fiches techniques en format Excel!
		`
	}
];
