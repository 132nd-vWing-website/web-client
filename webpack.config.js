const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      manifest: path.resolve(__dirname, 'src/manifest.json'),
      // chunks: ['runtime', 'react'],
    }),
  ],
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: './chunks/[name].chunk.js',
  },
  optimization: {
    runtimeChunk: true, // 'single'
    splitChunks: {
      chunks: 'async',
      maxInitialRequests: Infinity,
      minSize: 0,
      name: false, // false
      cacheGroups: {
        'initial-react': {
          name: 'react',
          test: /[\\/]node_modules[\\/]react.*?[\\/]/,
          chunks: 'initial',
          priority: 3,
        },
        'initial-antd': {
          name: 'antd',
          test: /[\\/]node_modules[\\/]antd.*?[\\/]/,
          chunks: 'initial',
          priority: 3,
        },
        vendor: {
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 2,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
        'heavy-vendor-pdf': {
          name: 'heavy-pdf',
          test: /[\\/]node_modules[\\/]pdf.*?[\\/]/,
          chunks: 'initial',
          priority: 1,
        },
      },
    },
  },
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
        // use: ['babel-loader'],
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
