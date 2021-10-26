// vue.config.js
const px2rem = require('postcss-px2rem-exclude')
const postcss = px2rem({
    remUnit: 75,
    exclude: /node_modules|folder_name/i
})

//webpack
const path = require('path')
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
	/**
	*部署应用包时的基本 URL
	*默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，
	*例如 https://www.my-app.com/。如果应用被部署在一个子路径上，
	*你就需要用这个选项指定这个子路径。
	*例如，如果你的应用被部署在 https://www.my-app.com/my-app/，
	*则设置 publicPath 为 /my-app/
	*/
  publicPath: '/',
  outputDir:'dist',
  chainWebpack: (config)=>{
    //别名配置
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
      .set('base', resolve('src/base'));

      
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    sourceMap: true,
    requireModuleExtension:true,
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target:'http://www.zigubao.cn', // 设置调用的接口域名和端口号 ( 设置代理目标)
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 这是一个通配符，设置完了之后每个接口都要在前面加上/api（特别注意这一点）
        }
      }
    }
  }


}