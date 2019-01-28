const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    // 'public/bundle': './src/index.js',
    // '_server/build/public/bundle': './src/index.js',
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    // path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  // devtool: devMode ? 'inline-source-map' : 'source-map',
  devtool: devMode ? 'cheap-module-source-map' : 'hidden-source-map',
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                /* For all available AntD LESS Variables, see https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less */
                'primary-color': '#C9793A',
                'link-color': '#1DA57A',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
};
