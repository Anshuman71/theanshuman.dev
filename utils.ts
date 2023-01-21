import { DEV_API } from "./constants";

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
