var path = require( 'path' )
var nodeExternals = require( 'webpack-node-externals' )

var config = {
    target: 'node',

    entry: './test/server.js',

    externals: [ nodeExternals() ],

    output: {
        path: path.resolve('./test/dist'),
        filename: 'server.js',
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['env']
                }
            }
        }]
    },
    plugins: [
    ]
};

module.exports = config;
