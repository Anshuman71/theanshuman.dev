/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "theanshuman.dev",
          },
        ],
        destination: "https://www.theanshuman.dev/:path*",
        permanent: true,
        statusCode: 301,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media2.dev.to" },
      { protocol: "https", hostname: "retool.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "hygraph.com" },
      { protocol: "https", hostname: "clerk.dev" },
      { protocol: "https", hostname: "*.clerk.dev" },
      { protocol: "https", hostname: "clerk.com" },
      { protocol: "https", hostname: "imgur.com" },
      { protocol: "https", hostname: "blog.logrocket.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "uploads-ssl.webflow.com" },
      { protocol: "https", hostname: "handsontable.com" },
      { protocol: "https", hostname: "retool-blog.ghost.io" },
      { protocol: "https", hostname: "og.railway.app" },
      { protocol: "https", hostname: "upsun.com" },
      { protocol: "https", hostname: "media.giphy.com" },
    ],
  },
};

module.exports = nextConfig;