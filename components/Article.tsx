import Link from "next/link";
import { ArticleInList } from "../types";
import Image from "next/image";
import { randomNumberBetween } from "../constants";
import ExternalLink from "../public/external.svg";
import DefaultImage from "../public/assets/default.jpg";

const gradientColors = [
  "from-[#D4145A] to-[#FBB03B]",
  "from-[#009245] to-[#FCEE21]",
  "from-[#662D8C] to-[#ED1E79]",
  "from-[#EE9CA7] to-[#FFDDE1]",
  "from-[#614385] to-[#516395]",
  "from-[#02AABD] to-[#00CDAC]",
  "from-[#FF512F] to-[#DD2476]",
  "from-[#FF5F6D] to-[#FFC371]",
  "from-[#11998E] to-[#38EF7D]",
  "from-[#C6EA8D] to-[#FE90AF]",
  "from-[#EA8D8D] to-[#A890FE]",
  "from-[#D8B5FF] to-[#1EAE98]",
  "from-[#FF61D2] to-[#FE9090]",
  "from-[#BFF098] to-[#6FD6FF]",
  "from-[#4E65FF] to-[#92EFFD]",
  "from-[#A9F1DF] to-[#FFBBBB]",
  "from-[#C33764] to-[#1D2671]",
];

const gradients = [
  "bg-gradient-to-bl",
  "bg-gradient-to-tl",
  "bg-gradient-to-br",
  "bg-gradient-to-tr",
];

export default function Article({ article }: { article: ArticleInList }) {
  const isExternal = !article.canonical_url.includes("theanshuman.dev");
  const gradientColor =
    gradientColors[randomNumberBetween(0, gradientColors.length - 1)];
  return (
    <Link
      passHref
      href={isExternal ? article.canonical_url : `/articles/${article.slug}`}
    >
      <a
        target={isExternal ? "_blank" : ""}
        key={article.slug}
        className={`group flex flex-col p-1  rounded-lg shadow-md transform duration-100 outline-none focus:ring-4 hover:ring-4 ring-yellow-500`}
      >
        <div className="h-full overflow-hidden rounded-b-lg">
          <div className="relative rounded-t-lg overflow-hidden h-[45vw] w-full md:h-52 xl:h-40">
            <Image
              alt={article.title}
              src={article.cover_image || DefaultImage}
              layout={"fill"}
              objectFit={"cover"}
            />
          </div>
          <div className="bg-zinc-800 p-4 h-full rounded-md rounded-t-none">
            <span className="flex flex-col flex-1 justify-between mb-4">
              <span className="text-xl block font-medium tracking-wider group-hover:underline">
                {article.title}{" "}
                {isExternal && <ExternalLink className="w-4 h-4 mb-1 inline" />}
              </span>
              <span className={"flex flex-col text-sm my-2 text-gray-400"}>
                <span className="mr-4 text-gray-300">
                  {article.reading_time_minutes} minute read
                </span>{" "}
                <span className="mr-4 mt-1 text-gray-300">
                  Published: {new Date(article.published_at).toDateString()}
                </span>
              </span>{" "}
              <span className="flex flex-row flex-wrap mt-2">
                {article.tag_list.slice(0, 3).map((item) => (
                  <span
                    className="p-1 px-2 rounded bg-zinc-900 mr-2 mb-2"
                    key={item}
                  >
                    <span className={`text-sm text-yellow-600`}>{item}</span>
                  </span>
                ))}
              </span>
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}
