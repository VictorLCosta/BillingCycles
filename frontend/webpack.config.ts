import path from 'path'
import { Configuration, ProvidePlugin } from 'webpack'

const config: Configuration = {
    entry: "./src/index.tsx",
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
                            "@babel/preset-typescript",
                        ]
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", "js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    plugins: [
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    
}

export default config