var path = require('path')

exports.src = {
  root: path.resolve(__dirname, './src'),
  entry: path.resolve(__dirname, './src/js/index.js'),
  js: path.resolve(__dirname, './src/js'),
  styles: path.resolve(__dirname, './src/sass'),
}
exports.dist = {
  root: path.resolve(__dirname, './'),
  js: path.resolve(__dirname, './js'),
  styles: path.resolve(__dirname, './'),
  styleguide: path.resolve(__dirname, './styleguide')
}
