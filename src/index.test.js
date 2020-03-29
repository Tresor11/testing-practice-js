import { capitalize, reverse, calculator } from './index';

test('capitalize the first letter', () => {
  expect(capitalize('aron')).toBe('Aron');
});

test('capitalize the first letter', () => {
  expect(reverse('tresor')).toBe('rosert');
});

test('do basic operations', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.substract(3, 2)).toBe(1);
  expect(calculator.divide(12, 2)).toBe(6);
  expect(calculator.multiply(9, 2)).toBe(18);
});