class Counter {
  #_count;
  constructor(count) {
    this.#_count = count;
  }
  get _count() {
    return this.#_count;
  }
  increment() {
    return ++this.#_count;
  }
}

let c = new Counter(5);
console.log(c._count); // 5
console.log(c.increment()); // 6
console.log(c.increment()); // 7
