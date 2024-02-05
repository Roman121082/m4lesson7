'use strict';

const randomNumberArray = (elements) => {
  let randomElement = [];

  for (let i = 2; i <= elements; ++i) {

    randomElement.push(Math.round(Math.random() * elements));

    return randomElement;
  }
}

console.log(`случайное число от 1 до 100: "${randomNumberArray(100)}"`);