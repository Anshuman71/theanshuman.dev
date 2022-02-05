import type { NextPage, GetStaticPropsContext } from "next";
import MetaData from "../../components/MetaData";
import { DEV_API } from "../../constants";
import { getDevArticles } from "../../utils";
import { Article } from "../../types";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";

type PageParams = {
  slug: string;
};

interface PageProps {
  article: Article;
  error: boolean;
}

export async function getStaticPaths() {
  const data = await getDevArticles();
  return {
    paths: data.map((item: Article) => ({ params: { slug: item.slug } })),
    fallback: false, // false or 'blocking'
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
  const article = await res.json();
  return {
    props: { article },
  };
}

const Article: NextPage<PageProps> = ({ article, error }) => {
  return (
    <>
      <main className="mb-4 content-container">
        <MetaData
          title={`${article?.title} | Anshuman Bhardwaj`}
          description={article?.description || ""}
          keywords={(article?.tag_list as string) || ""}
        />
        {error ? (
          <h1 className="text-3xl lg:text-5xl mb-6 font-bold">
            No articles found
          </h1>
        ) : (
          <div>
            <h1 className="text-3xl lg:text-5xl mb-6 font-bold">
              {article.title}
            </h1>
            {article?.tags &&
              article?.tags?.map((item) => (
                <span
                  className="mr-2 text-sm text-yellow-400 bg-slate-700 p-1 px-2 rounded"
                  key={item}
                >
                  {item}
                </span>
              ))}
            {article.cover_image && (
              <img
                src={article.cover_image}
                alt="cover image"
                className="w-full my-10 rounded"
              />
            )}
            <div className="prose max-w-none lg:prose-lg text-gray-100 mx-auto pb-10">
              <ReactMarkdown>{article.body_markdown}</ReactMarkdown>
            </div>
          </div>
        )}
        <hr />
      </main>
      <Footer />
    </>
  );
};

export default Article;
