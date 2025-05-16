import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "klientship.online",
        port: "",
        pathname: "/social-bubble/**",
      },
    ],
  },
};

export default nextConfig;
