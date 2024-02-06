'use strict';

const randomNumberArray2 = (elements, minNumber, maxNumber) => {
  const randomArray = [];

  for (let i = 1; i <= elements; i++)
    randomArray.push(Math.round(Math.random() * (maxNumber - minNumber) + minNumber));

  return randomArray;
}

console.log(`случайные числа в диапазоне: "${randomNumberArray2(10, 70, 30)}"`);
