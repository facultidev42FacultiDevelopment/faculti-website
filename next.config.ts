import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // Add this new pattern for faculti.net
      {
        protocol: "https",
        hostname: "faculti.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;