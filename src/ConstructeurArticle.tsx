import { Route } from "react-router";
import Article from "./pages/Article";
import { listeArticles1 } from "./ConstructeurArticlePart1";
import { listeArticles2 } from "./ConstructeurArticlePart2";
import { listeArticles3 } from "./ConstructeurArticlePart3";

export function buildRoute() {
	return (
		listeArticles.map(article => (
			<Route key={article.titre} path={article.route}>
				<Article props={article} />
			</Route>
		))
	);
}

export const listeArticles = listeArticles1.concat(listeArticles2, listeArticles3);

export const mapArticles = new Map();
for(const articles of listeArticles) {
	mapArticles.set(articles.titre, articles);
}


