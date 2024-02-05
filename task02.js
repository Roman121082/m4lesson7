'use strict';


const randomNumber = (elements, minNumber, maxNumber) => {
  let newRandomNumber = [];

  for (minNumber = 31; minNumber <= maxNumber; ++minNumber) {

    newRandomNumber.push(Math.round(Math.random() * elements));

    return newRandomNumber;
  }
}

console.log(`случайное число: "${randomNumberArray(41, 31, 70)}"`);