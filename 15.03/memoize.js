function factorial(a) {
    let res = 1;
    for (let i = 2; i <= a; ++i) {
        res *= i;
    }
    return res;
}
function memoize(cb) {
    let arr = []
    return function (x) {
        if (x in arr) {
            return arr[x]
        }
        return arr[x] = cb(x)
    }
}
const foo = memoize(factorial);
console.log(foo(5));
console.log(foo(5)); 
