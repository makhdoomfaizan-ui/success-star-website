import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "success-star-website";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
