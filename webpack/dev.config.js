const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const config = require('../config').webpack

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?${config.clientUrl}`,
    'webpack/hot/only-dev-server',
    './frontend/index.js'
  ],
  output: {
    path: config.outputPath,
    filename: config.outputFilename,
    publicPath: config.outputPublicPath
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader']
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: process.env.NODE_ENV
      })
    })
  ]
}
