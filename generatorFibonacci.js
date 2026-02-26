//Fibonacci

function* fibonacci() {
  let first = 0;
  let second = 1;

  while (true) {
    yield first;
    let current = first;
    first = second;
    second = current + second;
  }
}

const generatorFibonacci = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(generatorFibonacci.next().value);
}
