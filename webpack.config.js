const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = (env, args) => {
  return {
    context: path.join(__dirname, 'src'),
    entry: './index.tsx',
    output: {
      filename: 'bundle.[fullhash].js',
      path: path.resolve(__dirname, 'build')
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true
    },
    devtool: isDevelopment ? 'eval' : 'source-map',
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
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
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
      }),
      new BundleAnalyzerPlugin()
    ]
  };
};
