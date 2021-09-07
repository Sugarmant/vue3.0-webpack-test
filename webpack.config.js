const path = require('path');
//vue-loader@next版本之后需要引入这个插件
const { VueLoaderPlugin } = require('vue-loader')	
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',	//打包的入口
    //设置打包的出口
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
	//设置别名
    resolve:{
        alias: {
            '@': path.join(__dirname, 'src')
        },
    },
    //添加模块
    module:{
        rules:[
            {//设置.vue文件的解析规则
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {//设置css的解析规则
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                ]
            },
            {//设置加载图片资源的规则
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ]
            }
        ],
    },
    devtool: 'inline-source-map',
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./public/index.html'
        })
    ],
    devServer: {
        static:'./dist'
    }
};