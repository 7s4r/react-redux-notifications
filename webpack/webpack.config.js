const path = require('path')
const webpack = require('webpack')

const ip = process.env.IP || '0.0.0.0'
const port = (+process.env.PORT + 1) || 3001
const DEBUG = `'${process.env.NODE_ENV}'` !== 'production'

const config = {
  devtool: DEBUG ? 'eval' : false,
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../src/index'),
  ],
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'app.[hash].js',
    publicPath: DEBUG ? `http://${ip}:${port}/` : '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
}

if (DEBUG) {
  config.entry.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ])
}

module.exports = config
