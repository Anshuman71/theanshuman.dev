import type { NextPage } from "next";
import Link from "next/link";
import MetaData from "../../components/MetaData";
import { Article } from "../../types";
import { getDevArticles } from "../../utils";
import Footer from "../../components/Footer";
import { useState } from "react";

interface PageProps {
  articles: Article[];
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

  function filterArticles(item: Article) {
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
        <h1 className={"text-gray-100 text-3xl md:text-6xl mb-6"}>Blog</h1>
        <hr />
        <div className="py-4 min-h-[60vh]">
          <input
            type={"text"}
            placeholder="Search react..."
            value={search}
            onChange={(e) => setState(e.target.value)}
            className="w-full block md:w-1/2 lg:1/3 text-slate-800 mt-4 mb-6 mx-auto pl-6 p-2 outline-none rounded-lg ring-yellow-400 hover:ring-4 focus:ring-4"
          />
          {filteredArticles.length ? (
            filteredArticles.map((article) => (
              <Link passHref href={`/blog/${article.slug}`} key={article.id}>
                <a className="group flex my-4 py-2 md:p-4 bg-slate-800 rounded transform duration-100 outline-none hover:-translate-y-[2px] focus:ring-4 hover:ring-4 ring-yellow-400">
                  <img
                    className="rounded hidden md:block w-1/4 h-28 object-fill"
                    alt="cover image"
                    src={
                      article.cover_image ||
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    }
                  />
                  <span className="flex flex-col ml-4">
                    <span className="text-lg group-hover:underline">
                      {article.title}
                    </span>
                    <span className="mt-1">
                      {article.tag_list.slice(0, 4).map((item) => (
                        <span
                          className="mr-2 text-sm text-yellow-400 bg-slate-700 p-1 px-2 rounded"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </span>
                    <span className={"text-sm text-gray-400 mt-2 block"}>
                      {new Date(article.published_at).toDateString()}
                    </span>
                  </span>
                </a>
              </Link>
            ))
          ) : (
            <p className="text-slate-200 text-lg">No Articles found</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogHome;
