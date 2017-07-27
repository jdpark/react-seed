// © 2017 SRA International, Inc., a CSRA Company

const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
  return {
    entry: './init.js',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    resolve: {
      alias: {
        'jquery-ui': 'jquery-ui/ui'
      },
      extensions: ['.ts', '.js', '.jsx']
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
        { test: /\.(png|jpeg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }   // falls back to file-loader
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ],
    devtool: 'source-map'
  }
};
