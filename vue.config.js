const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true, //对所有依赖的 JavaScript 代码进行转译
  outputDir: "dist", //输出路径
  publicPath: './',
  // configureWebpack: {
  //   devtool: 'cheap-module-source-map', // 启用 Source Map
  // },
  devServer: {
    host: "192.168.110.178", // 设置主机名，'192.168.110.178' 允许通过本机的 IP 访问
    port: 8080, // 设置端口号
    proxy: {
      "/api": {
        target: "http://150.158.92.141:9009/api",
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    client: {
      overlay: false, // 当出现编译错误或警告时，在浏览器中禁止显示全屏覆盖。
    },
  },
  // 配置 webpack
  configureWebpack: {
    output: {
      filename: "js/[name].[contenthash:8].js", // JS 文件名添加哈希值
      chunkFilename: "js/[name].[contenthash:8].js", // 异步加载的 JS 文件名添加哈希值
    },
  },
  // 配置 CSS
  css: {
    extract: {
      filename: "css/[name].[contenthash:8].css", // CSS 文件名添加哈希值
      chunkFilename: "css/[name].[contenthash:8].css", // 异步加载的 CSS 文件名添加哈希值
    },
  },
});
