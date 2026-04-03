class Rectangle {
  #_width;
  #_height;
  constructor(width, height) {
    this._height = height;
    this._width = width;
  }
  set _width(value) {
    this.#_width = value;
  }
  set _height(value) {
    this.#_height = value;
  }
  get area() {
    return this.#_height * this.#_width;
  }
}

let r = new Rectangle(5, 10);
console.log(r.area);
