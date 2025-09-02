/** @type {import('next').NextConfig} */
export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;

module.exports =nextConfig