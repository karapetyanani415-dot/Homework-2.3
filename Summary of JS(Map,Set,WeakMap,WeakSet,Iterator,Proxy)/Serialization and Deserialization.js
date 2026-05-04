function mapToJson(map) {
    return JSON.stringify(Object.fromEntries(map))
}
function jsonToMap(jsonStr) {
    return new Map(Object.entries(JSON.parse(jsonStr)))
}


// Input
const myMap = new Map([['a', 1], ['b', 2]]);

// Expected Output
const jsonStr = mapToJson(myMap);
console.log(jsonStr);
// '{"a":1,"b":2}' OR '[["a",1],["b",2]]' (depends on implementation)

const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap);
// Map(2) { 'a' => 1, 'b' => 2 }


