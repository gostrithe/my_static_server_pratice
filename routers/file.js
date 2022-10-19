/* 导入文件系统模块 文件操作API */
const fs = require('fs');
/* Node.js path 模块提供了一些用于处理文件路径的小工具 */
const path = require('path');

const handleRequest = (request, response) => {
    const reg2 = /\/file\/(.*)/;
    const picFileName = reg2.exec(request.url)[1];
    // __dirname全局变量 表示当前执行脚本所在的目录
    // D:\桌面\H5二阶段\我的二阶段\my_static_server_pratice\routers
    // console.log(__dirname);
    const joinPath = path.join(__dirname, '..', 'public', picFileName);
    // D:\桌面\H5二阶段\我的二阶段\my_static_server_pratice\public\img\huya.webp
    // console.log(joinPath);
    const picBuffer = fs.readFileSync(joinPath);
    // <Buffer 52 49 46 46 ba 8f 0a 00 57 45 42 50 56 50 38 20 ae 8f 0a 00 30 22 18 9d 01 2a 40 0b 80 07 3e 89 44 9b 4b 25 23 a6 2c a4 16 38 e1 90 11 09 65 62 02 f2 ... 692112 more bytes>
    // console.log(picBuffer);

    response.end(picBuffer);
};

module.exports = handleRequest;