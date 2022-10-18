/* 导入模块 */
// Node.js 提供了 http 模块，http 模块主要用于搭建 HTTP 服务端和客户端
const http = require('http');
const path = require('path');
const fs = require('fs');

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

        case request.url.startsWith('/file/'):
            const reg2 = /\/file\/(.*)/;
            const picFileName = reg2.exec(request.url)[1];
            // __dirname全局变量 表示当前执行脚本所在的目录
            // D:\桌面\H5二阶段\我的二阶段\my_static_server_pratice
            console.log(__dirname);
            const joinPath = path.join(__dirname, 'public', 'img', picFileName);
            console.log(joinPath);
            const picBuffer = fs.readFileSync(joinPath)
            console.log(picBuffer);

            response.end(picBuffer);
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