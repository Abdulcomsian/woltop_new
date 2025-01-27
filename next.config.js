import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ['127.0.0.1', 'localhost','woltop.accrualdev.com'], // Add your external domain here
  },
};

export default config;
