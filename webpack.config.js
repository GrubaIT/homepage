const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: true
});

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    app: ["react-hot-loader/patch", "./src/App.jsx"],
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "node_modules/grommet"),
          path.resolve(__dirname, "src/styles")
        ],
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: [
                  "./node_modules",
                  "./node_modules/grommet/node_modules",
                  "./src/styles"
                ]
              }
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        use: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.htaccess/,
        include: [path.resolve(__dirname, 'src/server-config')],
        use: "file-loader?name=.htaccess"
      }
    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    overlay: true,
    hot: true,
    historyApiFallback: true
  }
};
