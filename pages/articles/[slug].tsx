import type { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import MetaData from "../../components/MetaData";
import { DEV_API } from "../../constants";
import markdownToHtml, { getDevArticles, removeDevLinks } from "../../utils";
import { Article } from "../../types";
import Footer from "../../components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/outline";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("typescript", typescript);

type PageParams = {
  slug: string;
};

interface PageProps {
  article: Article & { tags: string[]; tag_list: string };
  error: boolean;
}

export async function getStaticPaths() {
  const data = await getDevArticles();
  return {
    paths: data.map((item: Article) => ({ params: { slug: item.slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PageParams>) {
  const { slug } = params as PageParams;
  const res = await fetch(
    `${DEV_API.baseUrl}/articles/${DEV_API.username}/${slug}`
  );
  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  const article: Article = await res.json();
  article.body_markdown = removeDevLinks(article.body_markdown);
  article.body_html = await markdownToHtml(article.body_markdown);
  return {
    props: { article },
  };
}

const Article: NextPage<PageProps> = ({ article, error }) => {
  return (
    <>
      <main className="mb-4 content-container bg-none">
        <MetaData
          title={`${article?.title} | Anshuman Bhardwaj`}
          description={article?.description || ""}
          canonicalLink={article?.canonical_url}
          keywords={(article?.tag_list as string) || ""}
          readingTime={article.reading_time_minutes}
        />
        {error ? (
          <h1 className="text-3xl lg:text-5xl mb-6 font-bold">
            No articles found
          </h1>
        ) : (
          <div>
            <h1 className="text-3xl lg:text-5xl mb-6 font-bold">
              {article?.title}
            </h1>
            <div className="flex flex-row flex-wrap">
              {article?.tags &&
                article?.tags?.map((item) => (
                  <span
                    className="mr-2 mb-2 text-sm text-yellow-400 bg-slate-700 p-1 px-2 rounded"
                    key={item}
                  >
                    #{item}
                  </span>
                ))}
            </div>
            {article?.cover_image && (
              <img
                src={article.cover_image}
                alt="cover image"
                className="w-full my-4 lg:my-10 rounded"
              />
            )}
            <div
              className="prose markdown"
              dangerouslySetInnerHTML={{ __html: article?.body_html }}
            />
          </div>
        )}
        <img
          alt="captain-america waving off"
          className={"w-full md:w-96"}
          src="https://media.giphy.com/media/kRkJXYahXjSE0/giphy.gif"
        />
        <Link href={"/articles"} passHref>
          <a
            className={
              "mt-8 px-4 py-2 uppercase rounded border border-slate-400 text-yellow-400 tracking-wider inline-block"
            }
          >
            <ArrowLeftIcon className={"mr-2 h-4 inline"} />
            Return to All Articles
          </a>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Article;
