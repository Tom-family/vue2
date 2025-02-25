node：v14.15.0
vue：@vue/cli 5.0.8

<!-- 使用 Vue CLI 配置代理 -->

vue.config.js 默认不能 API 请求转发
1.devServer.proxy

2.使用 http-proxy-middleware 与 Live Server 配合
npm install http-proxy-middleware --save-dev 3.配置 proxy-server.js：
// proxy-server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 设置 API 请求转发
app.use('/api', createProxyMiddleware({
target: 'http://backend-api-server.com', // 后端 API 地址
changeOrigin: true,
pathRewrite: {
'^/api': '', // 可选，去掉请求中的 `/api` 前缀
},
}));

// 设置静态文件目录，通常是构建的 dist 文件夹
app.use(express.static('dist'));

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Proxy server is running at http://localhost:${PORT}`);
});


4.通过命令启动代理服务器：
node proxy-server.js