const webpack = require('webpack');
module.exports = {
  //reactStrictMode: true,
  images: {
    domains: ['saksiam.com'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
    return config;
  }
}
