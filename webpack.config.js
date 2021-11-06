const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './docs/scripts'),
  },
  resolve: {
    fallback: { 
      assert: require.resolve('./node_modules/assert'),
      buffer: require.resolve('./node_modules/buffer-from'),
      console: require.resolve('./node_modules/console-browserify'),
      constants: require.resolve('./node_modules/constants-browserify'),
      crypto: require.resolve('./node_modules/crypto-browserify'),
      domain: require.resolve('./node_modules/domain-browser'),
      events: require.resolve('./node_modules/events'),
      http: require.resolve('./node_modules/stream-http'),
      https: require.resolve('./node_modules/https-browserify'),
      os: require.resolve('./node_modules/os-browserify/browser'),
      path: require.resolve('./node_modules/path-browserify'),
      punycode: require.resolve('./node_modules/punycode'),
      process: require.resolve('./node_modules/process/browser'),
      querystring: require.resolve('./node_modules/querystring-es3'),
      stream: require.resolve('./node_modules/stream-browserify'),
      string_decoder: require.resolve('./node_modules/string_decoder'),
      sys: require.resolve('./node_modules/util'),
      timers: require.resolve('./node_modules/timers-browserify'),
      tty: require.resolve('./node_modules/tty-browserify'),
      url: require.resolve('./node_modules/url'),
      util: require.resolve('./node_modules/util'),
      vm: require.resolve('./node_modules/vm-browserify'),
      zlib: require.resolve('./node_modules/browserify-zlib')
    }
  },
  stats: {
    errorDetails: true
  },
  mode: 'production'
};
