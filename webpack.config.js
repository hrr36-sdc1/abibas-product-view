const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

let path = require('path');
//let SRC_DIR = path.join(__dirname, '/client/src');
//let DIST_DIR = path.join(__dirname, '/public');

const common = {
  context: __dirname + '/client',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        }
      },
    ],
  }
};
const client = {
  entry: './client.js',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
};
const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: __dirname + '/public',
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];

/*module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
*/