const path = require('path')
const webpack = require('webpack')

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'lib'),
    publicPath: '/',
  }, options.output),
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: {
    modules: ['src', 'node_modules'],
  },
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {},
})
