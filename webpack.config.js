const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
  ],
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: './chunks/[name].chunk.js',
  },
  // devtool: devMode ? 'cheap-module-source-map' : 'hidden-source-map',
  devtool: devMode ? 'cheap-module-source-map' : 'source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    proxy: {
      '/api/v1': 'http://localhost:5000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/preset-react'],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                /* For all available AntD LESS Variables, see https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less */
                // 'primary-color': '#C9793A',
                // 'link-color': '#1DA57A',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
        use: 'url-loader',
      },
    ],
  },
};
