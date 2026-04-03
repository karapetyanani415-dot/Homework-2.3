const obj = {
  value: 100,
  get() {
    function inner() {
      return this.value;
    }
    return inner.call(this);
  },
};

console.log(obj.get());
