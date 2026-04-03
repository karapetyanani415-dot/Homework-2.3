class Email {
  #_email;
  constructor(email) {
    this._email = email;
  }
  set _email(value) {
    if (!value.includes("@")) {
      console.log("invalid email");
      return;
    }
    this.#_email = value;
  }
  get _email() {
    return this.#_email;
  }
}

let e = new Email("anun");
console.log(e._email); // undefined
e._email = "anun@gmail.com";
console.log(e._email); // test@gmail.com
