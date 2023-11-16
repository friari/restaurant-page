const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: './src',
  },
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // fonts
        type: 'asset/resource' // font asset type
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
}