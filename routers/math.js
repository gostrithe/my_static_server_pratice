const add = (a, b) => a + b;
const pow = (a, n) => {
    const aTemp = a;
    for (let i = 0; i < n - 1; i++) {
        a *= aTemp;
    }
    return a;
};
const mathApi = {
    add,
    pow
}

const handler = (request, response) => {
    const reg = /\/math\/([a-z]+)\?a=(\d+)&b=(\d+)/;
    const [, method, a, b] = reg.exec(request.url);
    const result = mathApi[method](a * 1, b * 1);

    response.end(JSON.stringify({
        result
    }));
};

module.exports = {
    handler
};