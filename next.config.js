import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["127.0.0.1", "localhost", "woltop.accrualdev.com", 'web.wolpin.in', 'dashboard.wolpin.in'], // Add your external domain here
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint errors during build
  },
};

export default config;
