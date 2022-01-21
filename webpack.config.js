const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public" },
      ],
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                decorators: true,
              },
            }
          }
        }
      }
    ]
  },

};