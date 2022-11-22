import Link from "next/link";
import { ArticleInList } from "../types";
import Image from "next/image";

export default function Article({ article }: { article: ArticleInList }) {
  const isExternal = !article.canonical_url.includes("dev.to");
  return (
    <Link
      passHref
      href={isExternal ? article.canonical_url : `/articles/${article.slug}`}
    >
      <a
        target={isExternal ? "_blank" : ""}
        className="group flex flex-col p-2 px-4 md:p-4 bg-slate-800 rounded-md shadow-md transform duration-100 outline-none focus:ring-4 hover:ring-4 ring-yellow-400"
      >
        <div className="relative rounded overflow-hidden object-cover w-full h-56 lg:h-40">
          <Image
            alt="cover image"
            src={
              article.cover_image ||
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            }
            layout={"fill"}
            objectFit={"cover"}
          />
        </div>
        <span className="flex flex-col flex-1 justify-between my-4">
          <span className="text-xl block sm:h-20 font-medium tracking-wider group-hover:underline">
            {article.title}
          </span>
          <span className={"flex flex-col text-sm my-2 text-gray-400 block"}>
            <span className="mr-4 text-gray-300">
              {article.reading_time_minutes} minute read
            </span>{" "}
            <span className="mr-4 mt-1 text-gray-300">
              Published: {new Date(article.published_at).toDateString()}
            </span>
          </span>{" "}
          <span className="flex flex-row flex-wrap mt-2">
            {article.tag_list.slice(0, 4).map((item) => (
              <span
                className="mr-2 mb-2 text-sm text-yellow-400 bg-dark p-1 px-2 rounded"
                key={item}
              >
                {item}
              </span>
            ))}
          </span>
        </span>
      </a>
    </Link>
  );
}
