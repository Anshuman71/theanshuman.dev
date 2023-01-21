import type { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import MetaData from "../../components/MetaData";
import { Article } from "../../types";
import Footer from "../../components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/outline";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github-dark.css";
import Script from "next/script";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { readdir, readFile } from "fs/promises";
const rehypePrettyCode = require("rehype-pretty-code");
import fs from "fs";

hljs.registerLanguage("typescript", typescript);

const options = {
  // Use one of Shiki's packaged themes
  theme: JSON.parse(fs.readFileSync("./public/theme.json", "utf-8")),
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node: any, id: string) {
    node.properties.className = ["word"];

    if (id) {
      const backgroundColor = {
        v: "rgb(196 42 94 / 59%)",
        s: "rgb(0 103 163 / 56%)",
        i: "rgb(100 50 255 / 35%)",
      }[id];

      const color = {
        v: "rgb(255 225 225 / 100%)",
        s: "rgb(175 255 255 / 100%)",
        i: "rgb(225 200 255 / 100%)",
      }[id];

      if (node.properties["data-rehype-pretty-code-wrapper"]) {
        node.children.forEach((childNode: any) => {
          childNode.properties.style = "";
        });
      }

      node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
    }
  },
};

type PageParams = {
  slug: string;
};

interface PageProps {
  article: Article & { tags: string[]; tag_list: string };
  error: boolean;
  source: any;
}

export async function getStaticPaths() {
  const res = await readdir(`./content`);
  return {
    paths: res.map((item: string) => ({
      params: { slug: item.replace(".mdx", "") },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PageParams>) {
  const { slug } = params as PageParams;
  const res = await readFile(`./content/${slug}.mdx`);
  const data = await serialize(res, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, options]],
      format: "mdx",
    },
    parseFrontmatter: true,
  });
  return {
    props: { source: data },
  };
}

const Article: NextPage<PageProps> = ({ error, source }) => {
  const { frontmatter } = source;
  return (
    <>
      <main className="mb-4 content-container bg-none">
        <MetaData
          title={`${frontmatter?.title} | Anshuman Bhardwaj`}
          description={frontmatter?.description || ""}
          imageUrl={frontmatter?.cover}
          keywords={(frontmatter?.tags as string) || ""}
          readingTime={frontmatter?.reading_time_minutes}
        />
        <Script
          async
          id="convertkit-box"
          data-uid="c1109ee281"
          src="https://anshuman-bhardwaj.ck.page/c1109ee281/index.js"
        />

        {error ? (
          <h1 className="text-3xl lg:text-5xl mb-6 font-bold">
            No articles found
          </h1>
        ) : (
          <div>
            <h1 className="text-3xl leading-[1.2] lg:text-5xl lg:leading-[1.4] mb-6 font-bold">
              {frontmatter?.title}
            </h1>
            <div className="flex flex-row flex-wrap">
              {frontmatter?.tags &&
                frontmatter?.tags.split(", ")?.map((item: string) => (
                  <span
                    className="mr-2 mb-2 text-sm text-yellow-600 bg-zinc-800 p-1 px-2 rounded"
                    key={item}
                  >
                    #{item}
                  </span>
                ))}
            </div>
            {frontmatter?.cover && (
              <img
                src={frontmatter?.cover}
                alt="cover image"
                className="w-full my-4 lg:my-10 rounded"
              />
            )}
            <div className="prose markdown">
              <MDXRemote {...source} />
            </div>
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
              "mt-8 py-2 underline underline-offset-4 text-yellow-500 tracking-wider inline-block"
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
