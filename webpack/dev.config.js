const webpack = require('webpack')
const path = require('path')
const env = require('../config/env')
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
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'frontend'),
      'node_modules'
    ],
    alias: {
      '~components': path.resolve(__dirname, '../frontend/views/components')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: env
    })
  ]
}
