import axios from "axios";
import type { NextPage, GetStaticPropsContext } from "next";
import MetaData from "../../components/MetaData";
import { DEV_API, getDevArticles } from "../../constants";

type PageParams = {
  slug: string;
};

interface Blog {
  title: string;
  id: number;
  slug: string;
}

interface PageProps {
  blog: Blog;
  error: boolean;
}

export async function getStaticPaths() {
  const data = await getDevArticles();
  return {
    paths: data.map((item: Blog) => ({ params: { slug: item.slug } })),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PageParams>) {
  const { slug } = params as PageParams;
  const res = await axios.get(
    `${DEV_API.baseUrl}/articles/${DEV_API.username}/${slug}`
  );
  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: { blog: res.data },
  };
}

const Blog: NextPage<PageProps> = ({ blog, error }) => {
  return (
    <main className="content-container">
      <MetaData title={`${blog?.title} | Anshuman Bhardwaj`} />
      {error ? <h1>No blogs found</h1> : blog?.title || "not found"}
    </main>
  );
};

export default Blog;
