import "./src/env.js";
import webpack from "webpack";

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
  // Webpack customizations (only needed if you have specific optimizations)
  webpack: (config, { isServer, dev }) => {
    config.optimization.usedExports = true;

    if (!dev && !isServer) {
      config.optimization.concatenateModules = true;
      config.optimization.minimizer.forEach((plugin) => {
        if (plugin.constructor.name === "TerserPlugin") {
          plugin.options.terserOptions.compress.drop_console = true;
        }
      });
    }

    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 244 * 1024,
      minSize: 20 * 1024,
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 20,
          reuseExistingChunk: true,
        },
        framework: {
          test: /[\\/]node_modules[\\/](react|react-dom|next|@next)[\\/]/,
          name: "framework",
          chunks: "all",
          priority: 30,
          enforce: true,
        },
        commons: {
          name: "commons",
          minChunks: 2,
          chunks: "async",
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    };

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      layers: true,
    };

    config.snapshot = {
      ...config.snapshot,
      managedPaths: [/^(.+?[\\/]node_modules[\\/])/],
      immutablePaths: [/^(.+?[\\/]public[\\/])/],
    };

    config.devtool = dev ? "eval-cheap-module-source-map" : false;

    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    );

    return config;
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
};

export default config;
