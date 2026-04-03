class BankAccount {
  #_balance;
  constructor() {
    this.#_balance = 0; // ?(# aranc sra chi ashxatum isk dranov ashxatum inchu?)
  }
  get _balance() {
    return this.#_balance;
  }
  set _balance(value) {
    if (value <= 0) {
      console.log("cant be negative balance");
      return;
    }
    this.#_balance += value;
  }
}

let acc = new BankAccount();
acc._balance = 100;
acc._balance = -50;
console.log(acc._balance); // 100
