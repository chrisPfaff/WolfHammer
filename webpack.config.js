const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=app/img/[name].[ext]" },

      // {
      //   test: /\.(png|jp(e*)g|svg)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8000, // Convert images < 8kb to base64 strings
      //       name: 'img/[hash]-[name].[ext]'
      //     }
      //   }]
      // }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
  ]
};