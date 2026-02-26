// random number iterator

const iterable = {
  [Symbol.iterator]() {
    const iterator = {
      next() {
        return {
          value: Math.floor(Math.random() * 100),
          done: false,
        };
      },
    };
    return iterator;
  },
};

function randomNumbers(iterator, seconds) {
  const endTime = Date.now() + seconds * 1000;

  let total = 0;
  let count = 0;

  while (Date.now() < endTime) {
    const number = iterator.next();
    if (number.done) break;

    console.log(number.value);

    if (typeof number.value === "number") {
      total += number.value;
      count++;
    }
  }
  console.log("Total:", total, "Average:", total / count);
}

randomNumbers(iterable[Symbol.iterator](), 0.01);
