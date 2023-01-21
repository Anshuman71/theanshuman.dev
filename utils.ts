import { DEV_API } from "./constants";
import rehypeHighlight from "rehype-highlight";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, {})
    .use(rehypeDocument)
    .use(rehypeHighlight, { subset: false, plainText: ["txt", "text"] })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

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

export async function getDevArticles() {
  const res = await fetch(`${DEV_API.baseUrl}/articles/me/published`, {
    headers: {
      "api-key": DEV_API.key,
    },
  });
  return res.json();
}
