const withOffline = require("next-offline");
const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [withOptimizedImages],
  [
    withOffline,
    {
      workboxOpts: {
        swDest: process.env.NEXT_EXPORT
          ? "service-worker.js"
          : "static/service-worker.js",
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "offlineCache",
              expiration: {
                maxEntries: 200,
              },
            },
          },
        ],
      },
      async rewrites() {
        return [
          {
            source: "/service-worker.js",
            destination: "/_next/static/service-worker.js",
          },
        ];
      },
    },
  ],
]);
