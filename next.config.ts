import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const base = isProd ? "/videoplayers" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: base,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
};

export default nextConfig;
