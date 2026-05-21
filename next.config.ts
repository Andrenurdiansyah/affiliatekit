/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  compress: true,
  reactStrictMode: true,

  devIndicators: false,
};

module.exports = nextConfig;