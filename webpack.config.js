const path = require('path')
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode:"development",
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"main.js"
    },
    module:{
rules:[
{
    test:/\.css$/,
    use:[
        'style-loader',
        // MiniCssExtractPlugin.loader,
        'css-loader'
    ]
}
]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'style.css'
    })],
    devServer:{
        static: {
            directory: path.join(__dirname, "dist")
          },
        compress:true,
        port:3500
    }
}