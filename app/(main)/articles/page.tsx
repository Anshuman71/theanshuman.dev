import type { Metadata } from "next";
import { externalArticles, publishers } from "@/constants";
import { getArticles } from "@/utils";
import { ArticleInList } from "@/types";
import ArticlesList from "@/components/ArticlesList";
import Footer from "@/components/Footer";
import ExternalLink from "@/components/ExternalLink";

export const metadata: Metadata = {
  title: "Blog | Anshuman Bhardwaj",
};

export default async function ArticlesPage() {
  let articles: ArticleInList[] = [];
  try {
    const data = await getArticles();
    articles = [...externalArticles, ...data];
  } catch {}

  return (
    <main className="content-container">
      <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>
        Recent Articles
      </h1>
      <p className="text-lg">
        I&apos;m big on developer advocacy and part of the following programmes:
      </p>
      <div>
        {publishers.map((exp) => (
          <ExternalLink key={exp.url} {...exp} />
        ))}
      </div>
      <br />
      <hr />
      <ArticlesList articles={articles} />
      <Footer />
    </main>
  );
}