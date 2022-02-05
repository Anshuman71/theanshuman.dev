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
  blog: Article;
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
  const blog = await res.json();
  return {
    props: { blog },
  };
}

const Article: NextPage<PageProps> = ({ blog, error }) => {
  return (
    <>
      <main className="mb-4">
        <MetaData title={`${blog?.title} | Anshuman Bhardwaj`} />
        {error ? (
          <h1>No blogs found</h1>
        ) : (
          <div>
            <h1 className="text-3xl lg:text-5xl mb-6 font-bold">
              {blog.title}
            </h1>
            <div className="prose max-w-none lg:prose-lg text-gray-100 mx-auto pb-10">
              <ReactMarkdown>{blog.body_markdown}</ReactMarkdown>
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
