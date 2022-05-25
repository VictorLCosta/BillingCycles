const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            modules: path.resolve(__dirname, '..', './node_modules'),
            jquery: 'modules/jquery/src/jquery.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            devServer: true
        })
    ],
    devServer: {
        static: path.join(__dirname, "..", "build"),
        compress: true,
        port: 8000,
    }
}