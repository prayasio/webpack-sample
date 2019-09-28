const path = require('path');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    devServer: {
        contentBase: './dist',
        port: 8080
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { exclude: /node_modules/, test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
}