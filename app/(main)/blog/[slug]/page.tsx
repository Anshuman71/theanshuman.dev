import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";

import TopAppBar from "@/components/new/TopAppBar";
import Footer from "@/components/new/Footer";
import BottomNavBar from "@/components/new/BottomNavBar";
import { removeDevLinks } from "@/utils";

type PageParams = {
  slug: string;
};

type ArticleFrontmatter = {
  title?: string;
  description?: string;
  cover_image?: string;
  published_at?: string;
  reading_time_minutes?: number;
  tags?: string;
};

export const dynamicParams = false;

function BlogMdxImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt, className, style, ...rest } = props;
  const imageSrc = typeof src === "string" ? src : "";
  const isGif = /giphy\.com\/media|media\d*\.giphy\.com/i.test(imageSrc);

  return (
    <img
      {...rest}
      src={src}
      alt={alt || ""}
      className={[className, isGif ? "block" : ""].filter(Boolean).join(" ")}
      style={
        isGif
          ? {
              ...style,
              width: "min(100%, 256px)",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }
          : style
      }
    />
  );
}

async function getArticle(slug: string) {
  try {
    const rawContent = await readFile(`./content/${slug}.mdx`, "utf-8");
    const { data, content } = matter(rawContent);

    return {
      frontmatter: data as ArticleFrontmatter,
      content: removeDevLinks(content),
    };
  } catch {
    return null;
  }
}

function getArticleTags(tags?: string) {
  return String(tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function formatPublishedDate(date?: string) {
  if (!date) return null;

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;

  return format(parsed, "MMM d, yyyy");
}

export async function generateStaticParams() {
  const entries = await readdir("./content");

  return entries
    .filter((entry) => entry.endsWith(".mdx"))
    .map((entry) => ({
      slug: entry.replace(".mdx", ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Blog | Anshuman Bhardwaj",
    };
  }

  const { frontmatter } = article;
  const title = frontmatter.title || "Blog";
  const description =
    frontmatter.description ||
    "Articles and notes by Anshuman Bhardwaj on engineering, frontend systems, and the web.";
  const image = frontmatter.cover_image || "/me.jpeg";

  return {
    title: `${title} | Anshuman Bhardwaj`,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://theanshuman.dev/blog/${slug}`,
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content } = article;
  const tags = getArticleTags(frontmatter.tags);
  const publishedDate = formatPublishedDate(frontmatter.published_at);
  const readingTime = frontmatter.reading_time_minutes;

  return (
    <>
      <TopAppBar currentRoute="feed" />

      <main className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,215,0,0.22), transparent 26%), radial-gradient(circle at 85% 10%, rgba(139,240,136,0.22), transparent 20%), linear-gradient(180deg, #f9f9f9 0%, #f3f3f3 100%)",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col gap-16 px-6 py-10 md:px-8 md:py-16">
          <section className="space-y-8">
            <Link
href="/feed"

              className="inline-flex items-center gap-3 border-2 border-black bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.08em] neubrutal-shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-container"
            >
              <span className="material-symbols-outlined text-xl">
                arrow_back
              </span>
              Back to feed
            </Link>

            <div className="border-4 border-black bg-primary-container p-6 neubrutal-shadow-xl md:p-10">
              <div className="mb-6 flex flex-wrap gap-3">
                {tags.map((tag, index) => {
                  const accentClass =
                    index % 3 === 0
                      ? "bg-white"
                      : index % 3 === 1
                        ? "bg-secondary-container"
                        : "bg-tertiary-container";

                  return (
                    <span
                      key={tag}
                      className={`border-2 border-black px-3 py-1 text-sm font-black uppercase tracking-[0.08em] text-black ${accentClass}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
                <div className="space-y-6">
                  <h1 className="font-display-lg text-5xl uppercase leading-[0.95] tracking-[-0.05em] text-black md:text-7xl">
                    {frontmatter.title}
                  </h1>
                  {frontmatter.description ? (
                    <p className="max-w-3xl border-l-8 border-black pl-5 text-lg font-medium leading-8 text-on-primary-fixed">
                      {frontmatter.description}
                    </p>
                  ) : null}
                </div>

                <div className="border-4 border-black bg-white p-5 neubrutal-shadow">
                  <p className="text-sm font-black uppercase tracking-[0.1em] text-on-surface-variant">
                    Written by
                  </p>
                  <p className="mt-2 text-2xl font-black uppercase text-black">
                    Anshuman
                  </p>
                  <div className="mt-6 border-t-4 border-black pt-4 text-sm font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                    {publishedDate ? <p>{publishedDate}</p> : null}
                    {readingTime ? <p className="mt-2">{readingTime} min read</p> : null}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {frontmatter.cover_image ? (
            <figure className="space-y-4">
              <div className="overflow-hidden border-4 border-black bg-white neubrutal-shadow-xl">
                <img
                  src={frontmatter.cover_image}
                  alt={frontmatter.title || "Article cover image"}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="border-l-4 border-primary pl-4 text-sm font-black uppercase tracking-[0.08em] text-on-surface-variant">
                From the archive: {frontmatter.title}
              </figcaption>
            </figure>
          ) : null}

          <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <article className="border-4 border-black bg-white p-6 neubrutal-shadow-xl md:p-10">
              <div className="blog-prose">
                <MDXRemote
                  source={content}
                  components={{
                    img: BlogMdxImage,
                  }}
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
            </article>

            <aside className="space-y-6">
              <div className="border-4 border-black bg-tertiary-container p-6 neubrutal-shadow">
                <p className="text-sm font-black uppercase tracking-[0.1em]">
                  Why this matters
                </p>
                <p className="mt-4 text-lg font-medium leading-8 text-on-tertiary-container">
                  Practical engineering notes, straight from shipped work and
                  hard-earned mistakes.
                </p>
              </div>

              <div className="border-4 border-black bg-secondary-container p-6 neubrutal-shadow">
                <p className="text-sm font-black uppercase tracking-[0.1em]">
                  Article signals
                </p>
                <div className="mt-5 space-y-4">
                  <div className="border-2 border-black bg-white px-4 py-3">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-on-surface-variant">
                      Topics
                    </p>
                    <p className="mt-2 text-lg font-black uppercase text-black">
                      {tags.length}
                    </p>
                  </div>
                  <div className="border-2 border-black bg-white px-4 py-3">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-on-surface-variant">
                      Reading time
                    </p>
                    <p className="mt-2 text-lg font-black uppercase text-black">
                      {readingTime ? `${readingTime} minutes` : "Short read"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-black p-6 text-white neubrutal-shadow">
                <p className="text-sm font-black uppercase tracking-[0.1em] text-primary-container">
                  Keep reading
                </p>
                <p className="mt-4 text-lg font-medium leading-8 text-stone-200">
                  More articles on JavaScript, React, Next.js, and developer
                  workflow are in the archive.
                </p>
                <Link
                  href="/feed"
                  className="mt-6 inline-flex items-center gap-2 border-2 border-white bg-primary-container px-4 py-3 text-sm font-black uppercase tracking-[0.1em] text-black transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore archive
                  <span className="material-symbols-outlined text-lg">
                    north_east
                  </span>
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
