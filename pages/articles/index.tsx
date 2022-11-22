import type { NextPage } from "next";
import Link from "next/link";
import MetaData from "../../components/MetaData";
import { ArticleInList } from "../../types";
import { getDevArticles } from "../../utils";
import Footer from "../../components/Footer";
import { useState } from "react";
import Article from "../../components/Article";
import { SearchIcon } from "@heroicons/react/outline";
import { externalArticles, publishers } from "../../constants";
import SectionHeading from "../../components/SectionHeading";
import ExternalLink from "../../components/ExternalLink";
import Section from "../../components/Section";

interface PageProps {
  articles: ArticleInList[];
  error: boolean;
}

enum SORT_TYPE {
  published_at = "published_at",
  reading_time_minutes = "reading_time_minutes",
  page_views_count = "page_views_count",
  positive_reactions_count = "positive_reactions_count",
}

export async function getStaticProps() {
  const data = await getDevArticles();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { articles: [...externalArticles, ...data] },
  };
}

const BlogHome: NextPage<PageProps> = ({ articles }) => {
  const [search, setState] = useState("");
  const [sort, setSort] = useState(SORT_TYPE.published_at);

  function filterArticles(item: ArticleInList) {
    return (
      item.title.includes(search) ||
      item.tag_list.some((tag) => tag.includes(search))
    );
  }

  const filteredArticles = articles.filter(filterArticles).sort((a, b) => {
    if (sort === SORT_TYPE.published_at) {
      return new Date(b[sort]).getTime() - new Date(a[sort]).getTime();
    }
    return Number(b[sort]) - Number(a[sort]);
  });

  return (
    <>
      <main className="content-container">
        <MetaData title={`Blog | Anshuman Bhardwaj`} />
        <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>
          Recent Articles
        </h1>
        <p className="text-lg">
          I&apos;m big on developer advocacy and part of the following
          programmes:
        </p>
        <div>
          {publishers.map((exp) => (
            <ExternalLink key={exp.url} {...exp} />
          ))}
        </div>
        <br />
        <hr />
        <div className="py-4 flex-1">
          <div
            className={
              "flex flex-col sm:flex-row sm:justify-between mt-6 mb-10"
            }
          >
            <div
              className={
                "relative mb-4 sm:mb-0 sm:w-1/2 sm:mr-10 sm:max-w-[450px]"
              }
            >
              <input
                type={"text"}
                placeholder="Search keywords..."
                value={search}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-dark border-2 border-slate-800 text-slate-300 p-2 pl-6 rounded-lg outline-none ring-yellow-400 hover:ring-2 focus:ring-2"
              />
              <SearchIcon
                className={"text-slate-400 h-6 w-6 absolute right-4 top-2.5"}
              />
            </div>
            <select
              className={
                "sm:w-1/2 sm:max-w-[200px] p-2 rounded text-slate-300 bg-dark border-2 border-slate-800 shadow-slate-800 outline-none focus:ring-2 ring-yellow-400"
              }
              value={sort}
              onChange={(e) => setSort(e.target.value as SORT_TYPE)}
            >
              <option className={"p-2"} value={SORT_TYPE.published_at}>
                Published
              </option>
              <option className={"p-2"} value={SORT_TYPE.page_views_count}>
                Popular
              </option>
              <option
                className={"p-2"}
                value={SORT_TYPE.positive_reactions_count}
              >
                Most loved
              </option>
              <option className={"p-2"} value={SORT_TYPE.reading_time_minutes}>
                Reading time
              </option>
            </select>
          </div>

          {filteredArticles.length ? (
            <div
              className={
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6"
              }
            >
              {filteredArticles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
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
