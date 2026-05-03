import {
  experiences,
  externalArticles,
  NUM_TO_WORD,
  publishers,
} from "@/constants";
import { getArticles } from "@/utils";
import { ArticleInList } from "@/types";
import HomeContent from "@/components/HomeContent";
import { generateMetadata } from "@/components/MetaData";

export { generateMetadata };

export default async function Home() {
  let articles: ArticleInList[] = [];
  try {
    const data = await getArticles();
    const topArticlesFromDev = data
      .sort(
        (a: ArticleInList, b: ArticleInList) =>
          b.positive_reactions_count - a.positive_reactions_count
      )
      .slice(0, 2);
    articles = [...externalArticles, ...topArticlesFromDev];
  } catch {}

  const experienceInYears =
    `${NUM_TO_WORD[new Date().getFullYear() - 2020]} years` || "a decade";

  return (
    <HomeContent
      articles={articles}
      experienceInYears={experienceInYears}
      experiences={experiences}
      publishers={publishers}
    />
  );
}