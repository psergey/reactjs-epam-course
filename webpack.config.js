const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => {
  return {
    context: path.join(__dirname, 'src'),
    entry: './index.tsx',
    output: {
      filename: 'bundle.[fullhash].js',
      path: path.resolve(__dirname, 'build')
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/source'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/source'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new ESLintPlugin({ extensions: ['tsx', 'ts'] }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
        filename: 'index.html',
        manifest: path.resolve(__dirname, 'public', 'manifest.json')
      })
    ]
  };
};
