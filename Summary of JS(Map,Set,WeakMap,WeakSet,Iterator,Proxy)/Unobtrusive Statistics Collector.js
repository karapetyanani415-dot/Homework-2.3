let map = new WeakMap()
function trackAccess(obj) {
    map.set(obj, 0)
    return new Proxy(obj, {
        get(target, prop) {
            map.set(target, map.get(target) + 1)
            return Reflect.get(target, prop)
        }
    })
}
function getStats(obj) {
    return map.get(obj)
}

// Input
const original = { a: 1, b: 2 };
const proxy = trackAccess(original);

// Actions (reading properties via proxy):
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

// Expected Output
console.log(getStats(original));
// 3