/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "cdn.jsdelivr.net"],
  },
  experimental: {
    scrollRestoration: true,
  },
};
