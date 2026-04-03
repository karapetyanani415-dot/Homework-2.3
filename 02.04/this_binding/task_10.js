function show() {
  return this.name;
}

const a = { name: "A" };
const b = { name: "B" };
const fn = show.bind(a);

console.log(fn.call(b)); //A
