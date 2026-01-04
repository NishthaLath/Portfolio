import type { NextConfig } from "next";

const repoBasePath = process.env.NEXT_PUBLIC_BASEPATH || "";

const nextConfig: NextConfig = {
  output: "export",
  // Use an explicit env var when building for GitHub Pages (e.g. '/Portfolio').
  // Locally the basePath will be empty which makes `npm run dev` serve at '/'.
  basePath: repoBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
