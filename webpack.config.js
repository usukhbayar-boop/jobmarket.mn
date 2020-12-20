const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'signin.html',
        template: './src/signin.html'
      }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
};