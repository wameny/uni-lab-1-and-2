//days

function* dayGenerator() {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let i = 0;

  while (true) {
    if (i >= days.length) {
      i = 0;
      continue;
    } else {
      yield days[i];
      i++;
    }
  }
}

const day = dayGenerator();

for (let i = 0; i < 10; i++) {
  console.log(day.next().value);
}
