let arr = [
  { name: "Anna", age: 17 },
  { name: "John", age: 20 },
  { name: "Ani", age: 18 },
  { name: "James", age: 10 },
];

console.log(arr.filter((e) => e.age >= 18).map((e) => e.name));
