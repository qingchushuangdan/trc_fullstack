const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        loader: 'babel-loader',//使用什么加载器
        exclude: /node_modules/ //不编译node-modules里的
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  // resolve: {
  //   alias: {
  //     "vue": 'vue/dist/vue.js'
  //   }
  // }
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: '8888',
    open: true,
    hot: true
  }
}