import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ["images.unsplash.com", "images.pexels.com", "images.pexels.com"],
  },
};

export default nextConfig;
