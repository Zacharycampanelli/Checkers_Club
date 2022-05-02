// Inside of webpack.config.js:
const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack config...
  plugins: [
    // Other plugins...
    new InjectManifest({
      // These are some common options, and not all are required.
      // Consult the docs for more info.
      exclude: [/.../, '...'],
      maximumFileSizeToCacheInBytes: ...,
      swSrc: 'service-worker.js',
    }),
  ],
};