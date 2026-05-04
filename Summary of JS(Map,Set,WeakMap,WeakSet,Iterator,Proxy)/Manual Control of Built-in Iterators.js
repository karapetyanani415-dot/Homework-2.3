
// Input
const mixedMap = new Map([
    [1, 'num'],
    ['str', 'text'],
    [true, false]
]);
let iterator = mixedMap.entries()
let result = iterator.next()
while (!result.done) {
    let [key, value] = result.value
    if (typeof value === "string") {
        console.log(result.value)
    }
    result = iterator.next()
}
// Expected Output in console
// [1, 'num']
// ['str', 'text']