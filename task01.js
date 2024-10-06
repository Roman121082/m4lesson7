'use strict';

const randomNumberArray = (elements) => {
  let randomArray = [];

  for (let i = 0; i <= elements; i++)

    randomArray.push(Math.ceil(Math.random() * 100));
  return randomArray;
}
console.log('случайные числа от 1 до 100:  ' + randomNumberArray(1000));
