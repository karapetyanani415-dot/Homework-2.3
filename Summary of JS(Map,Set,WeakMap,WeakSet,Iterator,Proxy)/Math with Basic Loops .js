function intersection(set1, set2) {
    return set1.intersection(set2)
}
function difference(set1, set2) {
    return set1.difference(set2)
}
// Input
const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

// Expected Output
console.log(intersection(setA, setB));
// Set(1) { 'games' }

console.log(difference(setA, setB));
// Set(2) { 'reading', 'music' }
