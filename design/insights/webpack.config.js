const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/ts/main.ts'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './js/dashboard.js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/dashboard.css'
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.ejs'
    })
  ],
  resolve: {
    extensions: [
      '.ts',  // for ts-loader
      '.js'   // for style-loader
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[name].[ext]',
            outputPath: './',
            publicPath: path => '.' + path
          }
        }
      },
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader'
      }
    ]
  }
}