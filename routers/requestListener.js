const mathApi = require('./math');
const handleRequest = require('./file');

const requestListener = (request, response) => {
    // 路由分配
    // 根据不同的url响应不同的内容
    switch (true) {
        case request.url.startsWith('/math/'):
            mathApi.handler(request, response);
            break;

        case request.url.startsWith('/file/'):
            handleRequest(request, response);
            break;

        default:
            response.end('404');
            break;
    }
};

module.exports = requestListener