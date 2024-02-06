'use strict';

let randomNumberArray3 = (elements, minNumber, maxNumber, stringEvenOrOdd) => {
  const randomArray = [];

  if (stringEvenOrOdd = 'even') {
    for (let i = 1; i <= elements; i++) {
      let randomElement = (Math.round(Math.random() * (maxNumber - minNumber) + minNumber));
      if (randomElement % 2 == 0) {
        randomArray.push(randomElement);
      };
    };
  }

  if (stringEvenOrOdd = 'odd') {
    for (let i = 1; i <= elements; i++) {
      let randomElement = (Math.round(Math.random() * (maxNumber - minNumber) + minNumber));
      if (randomElement % 2 !== 0) {
        randomArray.push(randomElement);
      };
    };
  }

  console.log(stringEvenOrOdd);
  return randomArray;
};

console.log(`четный/нечетный массив в диапазоне: "${randomNumberArray3(5, 30, 70, 'odd')}"`);

