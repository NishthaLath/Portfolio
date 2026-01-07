import type { NextConfig } from "next";

const repoBasePath =
  process.env.NEXT_PUBLIC_BASEPATH ??
  (process.env.NODE_ENV === "production" ? "/Portfolio" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
