/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.jsdelivr.net",
      "imgur.com",
      "blog.logrocket.com",
      "images.ctfassets.net",
      "uploads-ssl.webflow.com",
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};
