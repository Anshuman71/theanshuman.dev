const { writeFileSync } = require("fs");
const PROD_URL = "https://theanshuman.dev";
const { format } = require("date-fns");
const axios = require("axios");
require("dotenv").config();

const DEV_API = {
  key: process.env.DEV_API_KEY,
  baseUrl: "https://dev.to/api",
  username: process.env.DEV_USERNAME,
};

async function getDevArticles() {
  const res = await axios.get(`${DEV_API.baseUrl}/articles/me/published`, {
    headers: {
      "api-key": DEV_API.key,
    },
  });
  return res.data;
}

async function generateSiteMap() {
  let blogs = await getDevArticles();

  blogs = blogs.map((item) => item.slug);
  const lastModified = format(new Date(), "yyyy-MM-dd");
  const file = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
        <loc>${PROD_URL}/</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>${PROD_URL}/articles</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>${PROD_URL}/services</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>${PROD_URL}/about</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.80</priority>
    </url>
     ${blogs
       .map((url) => {
         return `
       <url>
            <loc>${`${PROD_URL}/articles/${url}`}</loc>
            <lastmod>${lastModified}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.80</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
  writeFileSync("./public/sitemap.xml", file);
}

generateSiteMap();
