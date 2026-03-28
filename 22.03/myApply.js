Function.prototype.myApply = function (thisObj, [...args]) {
    const newThis = thisObj ?? globalThis;
    const sym = Symbol("apply");
    newThis[sym] = this;
    const result = newThis[sym](...args);
    delete newThis[sym];
    return result;
}
