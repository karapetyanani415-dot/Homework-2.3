Function.prototype.myBind = function (thisObj, ...args) {
    const newThis = this;
    return function (...call) {
        const context = thisObj ?? globalThis;
        const sym = Symbol("bind");
        context[sym] = newThis;
        const result = context[sym](...args, ...call);
        delete context[sym];
        return result;
    }
}
