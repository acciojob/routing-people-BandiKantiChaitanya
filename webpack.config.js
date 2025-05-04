const path = require("path");
const HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname,"/dist"),
        filename: "index_bundle.js",
        publicPath: '/',
    },
    module:{
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true, // ensures client-side routing works
        open: true,
        hot: true,
        port: 8080,
    }
};
