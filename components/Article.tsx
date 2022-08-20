import Link from "next/link";
import { ArticleInList } from "../types";

export default function Article({ article }: { article: ArticleInList }) {
  const isExternal = !article.canonical_url.includes("dev.to");
  return (
    <Link
      passHref
      href={isExternal ? article.canonical_url : `/articles/${article.slug}`}
    >
      <a
        target={isExternal ? "_blank" : ""}
        className="group flex my-4 p-2 px-4 md:p-4 bg-slate-800 rounded-md shadow-md transform duration-100 outline-none focus:ring-4 hover:ring-4 ring-yellow-400"
      >
        <img
          className="rounded hidden md:block w-1/4 h-28 object-fill"
          alt="cover image"
          src={
            article.cover_image ||
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          }
        />
        <span className="flex flex-col md:ml-4">
          <span className="text-lg group-hover:underline">{article.title}</span>
          <span className="flex flex-row flex-wrap mt-1">
            {article.tag_list.slice(0, 4).map((item) => (
              <span
                className="mr-2 mb-2 text-sm text-yellow-400 bg-dark p-1 px-2 rounded"
                key={item}
              >
                {item}
              </span>
            ))}
          </span>
          <span className={"text-sm text-gray-400 mt-2 block"}>
            <span className="inline-block mr-4 text-gray-300">
              {article.reading_time_minutes} minute read
            </span>
            Published: {new Date(article.published_at).toDateString()}
          </span>
        </span>
      </a>
    </Link>
  );
}
