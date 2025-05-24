import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["127.0.0.1", "localhost", "dashboard.wolpin.app"],
    loader: "custom",
    loaderFile: "./src/lib/cloudflare-loader.js",
    path: "https://dashboard.wolpin.app/assets/wolpin_media/",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    ppr: true,
    // optimizeCss: true,
    // scrollRestoration: true,
    // Enable Turbopack
    // turbo: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  generateBuildId: async () => {
    return process.env.GIT_COMMIT_SHA || Date.now().toString();
  },
  headers: async () => {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/data/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=1800",
          },
        ],
      },
    ];
  },
  onDemandEntries: {
    maxInactiveAge: 3600 * 1000,
    pagesBufferLength: 10,
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
};

export default config;
