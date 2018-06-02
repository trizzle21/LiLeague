const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
          test: /\.js$/, 
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react"]
          }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        }
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    host:"0.0.0.0",
    publicPath: '/',
    contentBase: './dist',
    hot: true
  },    
  watchOptions: {
    poll: true,
    ignored: /node_modules/

  }

};
