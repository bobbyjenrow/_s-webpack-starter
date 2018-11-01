const path = require('path');
const paths = {};
const devMode = process.env.NODE_ENV || 'development';

// Define Paths
paths.src = {
  root: path.resolve(__dirname, './src'),
  entry: path.resolve(__dirname, './src/js/index.js'),
  js: path.resolve(__dirname, './src/js'),
  styles: path.resolve(__dirname, './src/sass'),
}
paths.dist = {
  root: path.resolve(__dirname, './'),
  js: path.resolve(__dirname, './js'),
  styles: path.resolve(__dirname, './'),
  styleguide: path.resolve(__dirname, './styleguide')
}

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const KssWebpackPlugin = require('kss-webpack-plugin');
const kssConfig = {
  source: paths.dist.styles
};
const browserSyncConfig =  {
      proxy: 'http://test.test'
    }


module.exports = {
  mode: devMode,
  entry: paths.src.entry,
  output: {
    path: paths.dist.root,
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: paths.dist.styleguide,
    compress: true,
    hot: true,
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'default.css'}),
    new KssWebpackPlugin(kssConfig),
    new BrowserSyncPlugin(browserSyncConfig)
  ],
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.(sa|sc|c)ss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader', options: {importLoaders: 1}},
          {loader: 'import-glob-loader'},
          {loader: 'postcss-loader', options: {sourcemap:true}},
          {loader: 'sass-loader'}, // Enable For Sass
        ]
      }
    ]
  }

}
