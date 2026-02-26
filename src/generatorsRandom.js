//random number generator

function* randomNum(max = 100) {
  while (true) {
    yield Math.floor(Math.random() * max);
  }
}

const generatorRandom = randomNum();

for (let i = 0; i < 10; i++) {
  console.log(generatorRandom.next().value);
}
