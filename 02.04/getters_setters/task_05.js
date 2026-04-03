class Product {
  #_price;
  constructor(price) {
    this._price = price;
  }
  set _price(value) {
    this.#_price = value;
  }
  get price() {
    return this.#_price * 0.9;
  }
}

let p = new Product(100);
console.log(p._price); // 90
