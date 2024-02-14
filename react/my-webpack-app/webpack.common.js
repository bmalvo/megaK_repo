const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
      test: /\.scss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\ts|tsx$/,
      use: 'ts-loader',
    },
    {
      test: /\.js|jsx$/i,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
};
