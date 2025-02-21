const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true, //对所有依赖的 JavaScript 代码进行转译
  devServer: {
    host: "192.168.110.178", // 设置主机名，'192.168.110.178' 允许通过本机的 IP 访问
    port: 8080, // 设置端口号
  }
});
