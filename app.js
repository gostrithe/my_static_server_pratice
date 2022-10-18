/* 导入模块 */
// Node.js 提供了 http 模块，http 模块主要用于搭建 HTTP 服务端和客户端
const http = require('http');

const mathApi = require('./routers/math');

const requestListener = (request, response) => {
    switch (true) {
        case request.url.startsWith('/math/'):
            const reg = /\/math\/([a-z]+)\?a=(\d+)&b=(\d+)/;
            const [, method, a, b] = reg.exec(request.url);
            const result = mathApi[method](a * 1, b * 1);
            response.end(JSON.stringify({
                result
            }));
            break;

        default:
            response.end('404');
            break;
    }
};


const server = http.createServer(requestListener);

server.listen(8080,
    () => console.log('listening at 8080...')
);