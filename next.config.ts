import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/videoplayer",
  images: { unoptimized: true },
};

export default nextConfig;
