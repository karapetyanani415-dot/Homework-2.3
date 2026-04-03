class Car {
  #_speed;
  constructor(speed) {
    this._speed = speed;
  }
  set _speed(value) {
    if (value >= 200) {
      console.log("too fast");
      return;
    }
    this.#_speed = value;
  }
  get _speed() {
    return this.#_speed;
  }
}

let car = new Car(180);
console.log(car._speed); // 180
car._speed = 220; // too fast
console.log(car._speed);
