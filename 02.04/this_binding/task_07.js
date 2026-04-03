function show() {
  return this.name;
}
const obj = { name: "Test" };
const bound = show.bind(obj);
// ❗ What will this return?
console.log(bound.call({ name: "Wrong" })); // Test
