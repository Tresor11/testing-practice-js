const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const reverse = (string) => string.split('').reverse().join('');
const calculator = (() => {
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  return {
    add, substract, divide, multiply,
  };
})();
console.log(capitalize('tresoraaa'));
console.log(reverse('tresor'));
console.log(calculator.add(3, 2));
export { capitalize, reverse, calculator };