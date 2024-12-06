import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'chart.googleapis.com',
      pathname: '/chart', // You can specify the path if needed, or leave it as '/chart'
    }
  ]
};

export default nextConfig;