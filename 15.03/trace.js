function trace(cb) {
    function wrapper(...args) {
        let output = cb(...args);
        wrapper.history.push({
            args: args,
            output: output
        });
        return output;
    }
    wrapper.history = [];
    return wrapper;
}

function foo(a, b) {
    return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); 
console.log(tracedFunc(2, 4, 6));
console.log(tracedFunc.history); 

