import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'quickchart.io',
      pathname: '/barcode',
    }
  ]
};

export default nextConfig;