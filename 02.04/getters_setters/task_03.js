class Temperature {
  #_celsius;
  constructor(celsius) {
    this._celsius = celsius;
  }
  get _celsius() {
    return this.#_celsius * 1.8 + 32;
  }
  set _celsius(value) {
    this.#_celsius = value;
  }
}

const temp = new Temperature(0);
console.log(temp._celsius); // 32
temp._celsius = 100;
console.log(temp._celsius); // 212
