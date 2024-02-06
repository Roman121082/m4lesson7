'use strict';

const randomNumberArray = (elements) => {
  const randomArray = [];

  for (let i = 1; i <= elements; i++)
    randomArray.push(Math.round(Math.random() * 100));

  return randomArray;
}

console.log(`случайные числа от 1 до 100: "${randomNumberArray(10)}"`);
