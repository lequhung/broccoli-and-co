const dirs = require('./paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    polyfills: dirs.POLYFILLS,
    index: dirs.ENTRY_POINT
  },
  output: {
    path: dirs.BUILD,
    filename: '[name].bundle.[fullhash:8].js',
    chunkFilename: '[name].chunk.[chunkhash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('ts-loader')
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
