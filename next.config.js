/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.jsdelivr.net",
      "hygraph.com",
      "clerk.dev",
      "imgur.com",
      "blog.logrocket.com",
      "images.ctfassets.net",
      "uploads-ssl.webflow.com",
      "handsontable.com",
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};
