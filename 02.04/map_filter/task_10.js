let arr = [
  { name: "Anna", age: 17 },
  { name: "John", age: 20 },
];

console.log(
  arr
    .filter((person) => person.age >= 18)
    .map((person) => `${person.name} is ${person.age} years old`),
);
