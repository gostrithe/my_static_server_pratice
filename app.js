/* 导入模块 */
// Node.js 提供了 http 模块，http 模块主要用于搭建 HTTP 服务端和客户端
const http = require('http');

const requestListener = require('./routers/requestListener')

const server = http.createServer(requestListener);

server.listen(8080,
    () => console.log('listening at 8080...')
);