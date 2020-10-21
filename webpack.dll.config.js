const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      // core dependencies
    ]
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // to export in js
    filename: 'js/[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]', // name
      path: path.join(__dirname, '[name]-manifest.json') // reference to libraries
    })
  ]
}
