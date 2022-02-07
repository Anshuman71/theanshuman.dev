import type { NextPage } from "next";
import Link from "next/link";
import MetaData from "../../components/MetaData";
import { ArticleInList } from "../../types";
import { getDevArticles } from "../../utils";
import Footer from "../../components/Footer";
import { useState } from "react";
import Article from "../../components/Article";

interface PageProps {
  articles: ArticleInList[];
  error: boolean;
}

export async function getStaticProps() {
  const data = await getDevArticles();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { articles: data },
  };
}

const BlogHome: NextPage<PageProps> = ({ articles }) => {
  const [search, setState] = useState("");

  function filterArticles(item: ArticleInList) {
    return (
      item.title.includes(search) ||
      item.tag_list.some((tag) => tag.includes(search))
    );
  }

  const filteredArticles = articles.filter(filterArticles);

  return (
    <>
      <main className="content-container">
        <MetaData title={`Blog | Anshuman Bhardwaj`} />
        <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>
          Recent Articles
        </h1>
        <hr />
        <div className="py-4 flex-1">
          <input
            type={"text"}
            placeholder="Search react..."
            value={search}
            onChange={(e) => setState(e.target.value)}
            className="w-full block md:w-1/2 lg:1/3 text-slate-800 mt-4 mb-6 mx-auto p-2  pl-6   rounded-lg outline-none ring-yellow-400 hover:ring-4 focus:ring-4"
          />
          {filteredArticles.length ? (
            filteredArticles.map((article) => (
              <Article key={article.id} article={article} />
            ))
          ) : (
            <div className="flex my-20 md:w-1/2 text-center mx-auto">
              <p className="text-slate-200 text-lg mr-1">
                Sorry, no matching article is currently available, but you can
                always{" "}
                <Link passHref href={"mailto:hi@theanshuman.dev"}>
                  <a className="rounded text-yellow-400 hover:underline text-lg">
                    request an article
                  </a>
                </Link>
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogHome;
