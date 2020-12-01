const path = require('path')
module.exports = {
  mode: 'production',
  entry: './lib/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  target: 'node',
  node: false,
}