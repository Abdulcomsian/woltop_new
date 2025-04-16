import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["127.0.0.1", "localhost", "dashboard.wolpin.app"],
    // unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/cloudflare-loader.js",
    path: "https://dashboard.wolpin.app/assets/wolpin_media/",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
