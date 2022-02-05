import type { NextPage, GetStaticPropsContext } from "next";
import MetaData from "../../components/MetaData";
import { DEV_API } from "../../constants";
import { getDevArticles } from "../../utils";
import { Article } from "../../types";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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
  const article: Article = await res.json();
  article.body_markdown = removeDevLinks(article.body_markdown);
  return {
    props: { article },
  };
}

function removeDevLinks(markdown: string): string {
  let finalString = markdown;
  const linkStart = /{% link/g;
  const endExp = /%}/g;
  let exists = true;
  while (exists) {
    const startIndex = finalString.search(linkStart);
    const endIndex = finalString.search(endExp);
    if (startIndex === -1) {
      exists = false;
    }
    finalString =
      finalString.slice(0, startIndex) + finalString.slice(endIndex + 2);
  }
  return finalString;
}

const Article: NextPage<PageProps> = ({ article, error }) => {
  return (
    <>
      <main className="mb-4 content-container bg-none">
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
            {article.cover_image && (
              <img
                src={article.cover_image}
                alt="cover image"
                className="w-full my-4 lg:my-10 rounded"
              />
            )}
            <div className="prose max-w-none markdown">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        language={"tsx"}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
                skipHtml
              >
                {article.body_markdown}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Article;
