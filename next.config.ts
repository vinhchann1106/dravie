import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // cho phép tất cả domain https
      },
      {
        protocol: "http",
        hostname: "**", // cho phép cả http (nếu cần)
      },
    ],
  },
};

export default nextConfig;
