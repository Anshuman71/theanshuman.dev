import { MDXRemote } from "next-mdx-remote/rsc";
import { readdir, readFile } from "fs/promises";
import Footer from "@/components/new/Footer";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import type { Metadata } from "next";
import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";

type PageParams = {
  slug: string;
};

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const rawContent = await readFile(`./content/${slug}.mdx`, "utf-8");
    const { data: fm } = matter(rawContent);

    return {
      title: `${fm?.title || ""} | Anshuman Bhardwaj`,
      description: (fm?.description as string) || "",
      openGraph: {
        type: "article",
        title: (fm?.title as string) || "Article",
        description: (fm?.description as string) || "",
        images: fm?.cover_image ? [{ url: fm.cover_image as string }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: (fm?.title as string) || "Article",
        description: (fm?.description as string) || "",
        images: fm?.cover_image ? [fm.cover_image as string] : [],
      },
    };
  } catch {
    return { title: "Article | Anshuman Bhardwaj" };
  }
}

export async function generateStaticParams() {
  const res = await readdir(`./content`);
  return res.map((item: string) => ({
    slug: item.replace(".mdx", ""),
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const rawContent = await readFile(`./content/${slug}.mdx`, "utf-8");
  const { data: fm, content } = matter(rawContent);

  return (
    <main className="mb-4 content-container bg-none">
      {fm?.title && (
        <h1 className="text-3xl leading-[1.2] lg:text-5xl lg:leading-[1.4] mb-6 font-bold">
          {String(fm.title)}
        </h1>
      )}
      <div className="flex flex-row flex-wrap">
        {fm?.tags &&
          String(fm.tags)
            .split(", ")
            ?.map((item: string) => (
              <span
                className="mr-2 mb-2 text-sm text-yellow-600 bg-zinc-800 p-1 px-2 rounded"
                key={item}
              >
                #{item}
              </span>
            ))}
      </div>
      {fm?.cover_image && (
        <img
          src={String(fm.cover_image)}
          alt="cover image"
          className="w-full my-4 lg:my-10 rounded"
        />
      )}
      <div className="prose markdown">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  { theme: "github-dark", keepBackground: true },
                ],
              ],
            },
          }}
        />
      </div>
      <img
        alt="captain-america waving off"
        className={"w-full md:w-96"}
        src="https://media.giphy.com/media/kRkJXYahXjSE0/giphy.gif"
      />
      <Link
        href={"/articles"}
        className={
          "mt-8 py-2 underline underline-offset-4 text-yellow-500 tracking-wider inline-block"
        }
      >
        <ArrowLeftIcon className={"mr-2 h-4 inline"} />
        Return to All Articles
      </Link>
      <Footer />
    </main>
  );
}
