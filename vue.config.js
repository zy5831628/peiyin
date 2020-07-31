module.exports = {
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://biz.iflytts.com',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}