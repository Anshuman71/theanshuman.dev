/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "retool.com",
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
};
