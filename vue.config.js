module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://api.doujin365.cn/', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }