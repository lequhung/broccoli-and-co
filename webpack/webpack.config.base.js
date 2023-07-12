const dirs = require('./paths');

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
    publicPath: '/',
    // https://github.com/webpack/webpack-dev-middleware/issues/861
    // currently, there is a defect in webpack5 as it does not clean the output folder
    // CleanWebpackPlugin also does not work with webpack 5
    // We clean the output folders manually using commands in package.json
    clean: true
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
