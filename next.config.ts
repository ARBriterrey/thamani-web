import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GH_PAGES === 'true' ? '/thamani-web' : '',
};

export default nextConfig;
