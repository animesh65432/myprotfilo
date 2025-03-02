import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.wsj.net', "d1iiooxwdowqwr.cloudfront.net", "moneyview.in"]
  }
};

export default nextConfig;
