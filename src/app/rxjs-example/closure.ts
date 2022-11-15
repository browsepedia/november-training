const createNumberGenerator = function (startFrom: number, step = 1) {
  let _startFrom = startFrom;

  return {
    next: () => {
      const returnValue = _startFrom;
      _startFrom += step;
      return returnValue;
    },
    reset: () => {
      _startFrom = startFrom;
    },
  };
};

const generator = createNumberGenerator(5, 25);
const generator2 = createNumberGenerator(10);

console.log(generator.next());
console.log(generator.next());
generator.reset();
console.log(generator.next());
console.log(generator.next());
