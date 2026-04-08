function checkProperty(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return "own"
    } else if (key in obj) {
        return "inherited"
    } else {
        return "not found"
    }
}


const animal = {
    eats: true
};
const dog = Object.create(animal);
dog.name = "Rex";
console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found


const obj = Object.create(null);
obj.value = 10;
console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited