/* eslint-disable no-plusplus */
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const reverse = (string) => string.split('').reverse().join('');

const caesarCipher = (string, shift) => {
  let caeserString = '';
  for (let i = 0; i < string.length; i++) {
    const specialchar = string[i].charCodeAt();
    if (specialchar >= 65 && specialchar <= 90) {
      caeserString += String.fromCharCode(((string.charCodeAt(i) + shift - 65) % 26) + 65);
    } else if (specialchar >= 97 && specialchar <= 122) {
      caeserString += String.fromCharCode(((string.charCodeAt(i) + shift - 97) % 26) + 97);
    } else {
      caeserString += string[i];
    }
  }
  return caeserString;
};

const calculator = (() => {
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  return {
    add, substract, divide, multiply,
  };
})();

const arrAnalyser = (arr) => {
  const max = Math.max(...arr);
  const size = arr.length;
  const average = (arr.reduce((a, b) => a + b)) / size;
  const min = Math.min(...arr);
  return {
    min, max, average, size,
  };
};

export {
  capitalize, reverse, calculator, caesarCipher, arrAnalyser,
};