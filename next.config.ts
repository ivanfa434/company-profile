import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
};

export default nextConfig;
