import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const PROD_URL = "https://www.theanshuman.dev";
  const lastModified = new Date();

  return [
    { url: `${PROD_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${PROD_URL}/feed`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}