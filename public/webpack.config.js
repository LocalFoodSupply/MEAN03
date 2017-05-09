module.exports = {
    entry: "./public/app/bootstrap",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        watch: true,
        inline: true,
        colors: true,
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.ts/, loaders: ['ts-loader'],
              exclude: /node_modules/
        }]
    }
};