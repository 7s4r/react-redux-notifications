const path = require('path')
const webpack = require('webpack')

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]

module.exports = require('./base.config')({
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    'react-hot-loader/patch',
    path.resolve(process.cwd(), 'src/client.js'),
  ],
  output: {
    path: path.resolve(process.cwd(), 'tmp'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins,
  devtool: 'cheap-module-eval-source-map',
  debug: true,
})
