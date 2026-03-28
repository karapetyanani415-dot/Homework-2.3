Function.prototype.myCall = function (thisObj, ...args) {
    const newThis = thisObj ?? globalThis;
    const sym = Symbol("call");
    newThis[sym] = this;
    const result = newThis[sym](...args);
    delete newThis[sym];
    return result;
}