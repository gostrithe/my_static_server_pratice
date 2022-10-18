const add = (a, b) => a + b;
const pow = (a, n) => {
    for (let i = 0; i < n - 1; i++) {
        a *= a;
    }
    return a;
};

module.exports = {
    add,
    pow
};