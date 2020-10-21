const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // entry: './index.js',
  // entry: path.resolve(__dirname, 'index.js'),
  entry: {
    react: path.resolve(__dirname, 'src', 'react.js'),
    reactContact: path.resolve(__dirname, 'src', 'reactContact.js'),
    // index: path.resolve(__dirname, 'src', 'index.js'),
    // home: path.resolve(__dirname, 'src', 'home.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'/
    filename: 'js/[name].js',
    publicPath:'/', // used to CDN
    // chunkFilename:'js/[id].[chunkhash].js'
    chunkFilename:'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        // can use extra rules for support react, vue but is better in .babelrc
      },
      {
        test: /\.css$/,
        // use: 'css-loader'
        use: [
          'style-loader',
          // 'css-loader', not use with postcss because have conflicts
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // to asign lower priority
            }
          },
          'postcss-loader'
          /*
          {
            loader: MiniCSSExtractPlugin.loader, // replace style-loader in production
            options: {
              hmr: process.env.NODE_ENV === 'development', // to force use HMR in dev
            },
          },*/

        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          // loader: 'file-loader',
          options: {
            limit: 8192, // size in bytes
            // outputPath: 'assets/', for file-loader
          }
        }
      },
    ]
  },
  resolve: {
    // extensions: [".js", ".jsx"]
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    hot: true, // for HotModuleReplacementPlugin
    // open: true,
    port: 9000,
    historyApiFallback: true // to navigate in SPA
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    }),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path.resolve(__dirname, 'src', 'index.html'), // to work with template defined, but is optional
      chunks: ['commons', 'react', 'modules'], // to specificy chunks be imported
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path.resolve(__dirname, 'src', 'indexC.html'), // to work with template defined, but is optional
      chunks: ['commons', 'reactContact', 'modules'], // to specificy chunks be imported
      filename: 'indexC.html',
    }),

    /*
    Is good for prod, but in dev is more slow than inject with style-loader to reload
    in dev is more faster style-loader

    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
    */
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // where apply
      minSize: 0, // min size duplicate chunks to move to commons
      name: 'commons' // name to agrupate duplicated code
    }
  }
}


// webpack bundle analyzer
// tree shaking
// bundle hash contenthash