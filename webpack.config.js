const path = require('path');

module.exports = (env, argv) => ({
    entry: './src/index.ts',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    devtool: argv.mode === 'development' ? 'eval-cheap-module-source-map' : undefined,
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?!jsx?|tsx?).+$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    target: 'node',
    resolve: {
        extensions: ['.ts', '.tsx', '.js','.jsx', '.json']
    }
});
