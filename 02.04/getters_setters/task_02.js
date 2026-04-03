class Account {
  #_password;
  constructor(password) {
    this._password = password;
  }
  set _password(value) {
    if (value.length <= 6) {
      console.log("Password too short");
      return;
    }
    this.#_password = value;
  }
  get _password() {
    return this.#_password;
  }
}

let acc = new Account("123");
console.log(acc._password); // undefined
acc._password = "1234567";
console.log(acc._password); // 1234567
