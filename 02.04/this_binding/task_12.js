const obj = {
  value: 1,
  add(x) {
    this.value += x;
    return this;
  },
};
console.log(obj.add(5).add(10)); //16
