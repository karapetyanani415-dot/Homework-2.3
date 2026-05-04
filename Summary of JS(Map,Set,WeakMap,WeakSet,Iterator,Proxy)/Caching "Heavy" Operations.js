const cache = new WeakMap()
function heavyCalc(obj) {
    if (cache.has(obj)) {
        return cache.get(obj);
    }

    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    cache.set(obj, obj.value);
    return obj.value;
}

// Input
const dataObj = { value: 10 };

// Expected Output
console.log(heavyCalc(dataObj));
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj));
// (Returns instantly) -> 100