const path = require('path');
//vue-loader@next版本之后需要引入这个插件
const { VueLoaderPlugin } = require('vue-loader')	
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.ts',	//打包的入口
    //设置打包的出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
	//设置别名
    resolve:{
        alias: {
            '@': path.join(__dirname, 'src')
        },
        extensions: ['vue', '.js', '.ts']
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
            // {
            //     test:/\.ts$/,
            //     exclude:/node_modules/,
            //     // enforce:"pre",
            //     loader:'tslint-loader'
            // },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options:{
                    transpileOnly: true,
                    appendTsSuffixTo:[/\.vue$/],
                    happyPackMode: true
                }
            },
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