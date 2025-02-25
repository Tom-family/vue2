const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// 设置 API 请求转发
app.use('/api', createProxyMiddleware({
  target: 'http://150.158.92.141:9009/api', // 后端 API 地址
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // 可选，去掉请求中的 `/api` 前缀
  },
}));

// 设置静态文件目录，通常是构建的 dist 文件夹
app.use(express.static('dist'));

// 添加一个处理所有路由的 catch-all 路由，将所有请求返回 index.html  避免刷新页面Cannot GET /home
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});