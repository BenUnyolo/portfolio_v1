const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCssExtractPlugin({})],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: "global",
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-preset-env"),
                  require("postcss-import"),
                  require("postcss-mixins"),
                  require("postcss-simple-vars"),
                  require("postcss-nested"),
                  require("autoprefixer"), // adds vendor prefixes
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
