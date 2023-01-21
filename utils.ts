import { ArticleInList } from "./types";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

export function removeDevLinks(markdown: string): string {
  let finalString = markdown;
  const linkStart = /{% /g;
  const endExp = /%}/g;
  let exists = true;
  while (exists) {
    const startIndex = finalString.search(linkStart);
    const endIndex = finalString.search(endExp);
    if (startIndex === -1) {
      exists = false;
    } else {
      finalString =
        finalString.slice(0, startIndex - 1) + finalString.slice(endIndex + 2);
    }
  }
  return finalString;
}

export async function getArticles() {
  const res = await readdir("./content");
  const articles = await Promise.all(
    res.map((item) => readFile(`./content/${item}`, { encoding: "utf8" }))
  );
  return articles.map((item) => {
    const data = matter(item).data;
    data.tag_list = data.tags.split(", ");
    return data as ArticleInList;
  });
}
