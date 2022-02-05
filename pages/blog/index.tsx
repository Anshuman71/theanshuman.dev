import type { NextPage } from "next";
import Link from "next/link";
import MetaData from "../../components/MetaData";
import { getDevArticles } from "../../constants";

interface Blog {
  title: string;
  id: number;
  slug: string;
}

interface PageProps {
  blogs: Blog[];
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
    props: { blogs: data },
  };
}

const BlogHome: NextPage<PageProps> = ({ blogs, error }) => {
  return (
    <main className="content-container">
      <MetaData title={`Blog | Anshuman Bhardwaj`} />
      {error ? (
        <h1>No blogs found</h1>
      ) : (
        blogs.map((article) => (
          <Link passHref href={`/blog/${article.slug}`} key={article.id}>
            <a className="my-2 block">{article.title}</a>
          </Link>
        ))
      )}
    </main>
  );
};

export default BlogHome;
