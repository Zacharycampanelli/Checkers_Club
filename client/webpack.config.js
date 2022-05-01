const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack config...
  plugins: [
    // Other plugins...
    new GenerateSW({
      // These are some common options, and not all are required.
      // Consult the docs for more info.
      exclude: [/.../, '...'],
      maximumFileSizeToCacheInBytes: ...,
      navigateFallback: '...',
      runtimeCaching: [{
        // Routing via a matchCallback function:
        urlPattern: ({request, url}) => ...,
        handler: '...',
        options: {
          cacheName: '...',
          expiration: {
            maxEntries: ...,
          },
        },
      }, {
        // Routing via a RegExp:
        urlPattern: new RegExp('...'),
        handler: '...',
        options: {
          cacheName: '...',
          plugins: [..., ...],
        },
      }],
      skipWaiting: ...,
    }),
  ],
};