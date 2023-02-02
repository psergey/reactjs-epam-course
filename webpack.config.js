const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
    console.log(env);
    console.log(argv);
    console.log(process.env);
    return {
        context: path.join(__dirname, 'src'),
        entry: './index.js',
        output: {
            filename: 'index_bundle.js',
            path: path.join(__dirname, 'build')
        },
        devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
        module: {
            rules: [
                {
                    test: /\.tsx|.js?$/,
                    exclude: /node_module/,
                    loader: 'babel-loader',
                }            
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        plugins: [
            new ESLintPlugin({
                extensions: ['ts', 'tsx']
              }),
            new HtmlWebPackPlugin({
                template: './index.html'
            })
        ]
    }
}