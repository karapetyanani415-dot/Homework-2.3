// 1 with class
// class Animal {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
//     sleep() {
//         return `${this.name} is sleeping`
//     }
// }
// class Dog {
//     constructor(name, age, breed) {
//         this.name = name
//         this.age = age
//         this.breed = breed
//     }
//     makeSound() {
//         return "Woof!"
//     }
// }
// class Puppy {
//     constructor(name, age, breed, owner) {
//         this.name = name
//         this.age = age
//         this.breed = breed
//         this.owner = owner
//     }
//     play() {
//         return `${this.owner} is playing`
//     }
// }
// Object.setPrototypeOf(Dog.prototype, Animal.prototype)
// Object.setPrototypeOf(Puppy.prototype, Animal.prototype)
// Object.setPrototypeOf(Puppy.prototype, Dog.prototype)
// console.log(Animal.prototype)

// let dog1 = new Dog("Buddy", 3, "Labrador")
// console.log(dog1.eat())       
// console.log(dog1.sleep())   

// let puppy = new Puppy("Buddy", 3, "Labrador", "James")
// console.log(puppy.eat())
// console.log(puppy.makeSound())
// console.log(puppy.play())



// 2 with constructor function
function Animal(name, age) {
    this.name = name
    this.age = age
}
Animal.prototype.eat = function () {
    return `${this.name} is eating`
}
Animal.prototype.sleep = function () {
    return `${this.name} is sleeping`
}
function Dog(name, age, breed) {
    Animal.call(this, name, age)
    this.breed = breed
}
Dog.prototype.makeSound = function () {
    return "Woof!"
}
function Puppy(name, age, breed, owner) {
    Dog.call(this, name, age, breed)
    this.owner = owner
}
Puppy.prototype.play = function () {
    return `${this.owner} is playing`
}
Dog.prototype.__proto__ = Animal.prototype
Puppy.prototype.__proto__ = Animal.prototype
Puppy.prototype.__proto__ = Dog.prototype


let dog1 = new Dog("Buddy", 3, "Labrador")
console.log(dog1.eat())       
console.log(dog1.sleep())   

let puppy = new Puppy("Buddy", 3, "Labrador", "James")
console.log(puppy.eat())
console.log(puppy.makeSound())
console.log(puppy.play())
