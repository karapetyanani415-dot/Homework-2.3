let myRange = {
  from: 0,
  to: 7,
  [Symbol.iterator]() {
    let current = this.from;
    return {
      next: () => {
        if (current <= this.to) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};
console.log([...myRange]);
