import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["127.0.0.1", "localhost", 'dashboard.wolpin.app'],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
