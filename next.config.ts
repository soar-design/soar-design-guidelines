import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@mostaphaqammari/soar-ds"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "uat-client.soar.inc",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
