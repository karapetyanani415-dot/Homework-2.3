class Cart {
  #_total;
  constructor() {
    this.#_total = 0;
  }
  get _total() {
    return this.#_total;
  }
  set _total(value) {
    this.#_total += value;
  }
}

let cart = new Cart();
cart._total = 100;
cart._total = 50;
console.log(cart._total); // 150
