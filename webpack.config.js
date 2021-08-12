const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/main.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: [/\.png/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: '[path][hash].[ext]',
                    esModule: false,
                },
            },
            {
                test: /\.(png|jpe?g|gif)$i/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                    }
                  }
                ]
              }
        ]
    },
    // resolve配置如何寻找模块对应的文件
    resolve: {
        // 配置引入文件名简写时，webpack的寻找顺序。例如./index, webpack会议./index.ts ./index.js顺序寻找
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        // 出现错误时是否在浏览器上出现遮罩层提示
        overlay: true,
        // 静态资源没参加打包时候，通过这个配置告诉server静态资源位置
        // contentBase: path.join(__dirname, './dist'),
        compress: true,
        open: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(['dist']),
       
    ]
}