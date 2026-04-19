let account = {
  balance: 0,
  currency: "",
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `Account Balance ${this.balance} ${this.currency}`;
    } else {
      return this.balance;
    }
  },
};
console.log(+account);         
console.log(String(account));   
console.log(account + 500);  