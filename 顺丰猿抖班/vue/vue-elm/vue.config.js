// 跨域代理
// 脚手架
// 上线时无任何效果
// 开发时才能看到
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ustbhuangyi.com/sell/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}