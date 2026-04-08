class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce() {
        return `my name is ${this.name} and i'm ${this.age} years old`
    }
}
class Student {
    constructor(name, age, university) {
        this.name = name
        this.age = age
        this.university = university
    }
    study() {
        return `${this.name} is studying`
    }
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

let st = new Student("Alex", 24, "Stanford");
console.log(st.introduce());