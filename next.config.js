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
  redirects: [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "www.theanshuman.dev",
        },
      ],
      destination: "https://theanshuman.dev/:path*",
      permanent: true, // This sets up a 308 redirect, which is similar to 301 but preserves the HTTP method
      statusCode: 301, // This explicitly sets a 301 status code
    },
  ],
  images: {
    domains: [
      "media2.dev.to",
      "retool.com",
      "res.cloudinary.com",
      "cdn.jsdelivr.net",
      "hygraph.com",
      "clerk.dev",
      "clerk.com",
      "imgur.com",
      "blog.logrocket.com",
      "images.ctfassets.net",
      "uploads-ssl.webflow.com",
      "handsontable.com",
      "retool-blog.ghost.io",
      "og.railway.app",
    ],
  },
};
