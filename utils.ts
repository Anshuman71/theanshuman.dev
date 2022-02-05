import { DEV_API } from "./constants";

export async function getDevArticles() {
  const res = await fetch(`${DEV_API.baseUrl}/articles/me/published`, {
    headers: {
      "api-key": DEV_API.key,
    },
  });
  return res.json();
}
