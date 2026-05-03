import { MetadataRoute } from "next";
import { readdir } from "fs/promises";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const PROD_URL = "https://www.theanshuman.dev";
  const lastModified = new Date();

  let blogs: string[] = [];
  try {
    const files = await readdir("./content");
    blogs = files.map((item) => item.replace(".mdx", ""));
  } catch {}

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${PROD_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${PROD_URL}/articles`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${PROD_URL}/services`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${PROD_URL}/about`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogs.map((slug) => ({
    url: `${PROD_URL}/articles/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}