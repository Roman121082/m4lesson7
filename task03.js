'use strict';

let randomNumberArray3 = (elements, minNumber, maxNumber, stringEvenOrOdd) => {
  let randomArray = [];
  let randomArrayEven = [];
  let randomArrayOdd = [];

  for (let i = 0; i <= elements; i++) {
    let randomElement = (Math.round(Math.random() * (maxNumber - minNumber) + minNumber));

    if (randomElement % 2 == 0) {
      randomArrayEven.push(randomElement);
    }
    else if (randomElement % 2 !== 0) {
      randomArrayOdd.push(randomElement);
    }

    if (stringEvenOrOdd == 'even') {
      randomArray = randomArrayEven;
    }
    else if (stringEvenOrOdd == 'odd') {
      randomArray = randomArrayOdd
    }

  };

  return randomArray;
};

console.log(`четный/нечетный массив в диапазоне: `, randomNumberArray3(10, 30, 70, 'odd'));

