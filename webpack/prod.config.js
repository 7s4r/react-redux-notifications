const path = require('path')
const webpack = require('webpack')

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
]

module.exports = require('./base.config')({
  entry: [
    'babel-polyfill',
    path.resolve(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: 'index.js',
  },
  plugins,
})
