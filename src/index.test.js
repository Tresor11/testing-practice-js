import {
  capitalize, reverse, calculator, caesarCipher, arrAnalyser,
} from './index';

test('capitalize the first letter', () => {
  expect(capitalize('aron')).toBe('Aron');
});

test('reverse the string', () => {
  expect(reverse('tresor')).toBe('rosert');
});

test('Returns cipher with x letters ahead', () => {
  expect(caesarCipher('defend', 1)).toBe('efgfoe');
  expect(caesarCipher('femia', 5)).toBe('kjrnf');
  expect(caesarCipher('microverse', 24)).toBe('kgapmtcpqc');
});

test('do basic operations', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.substract(3, 2)).toBe(1);
  expect(calculator.divide(12, 2)).toBe(6);
  expect(calculator.multiply(9, 2)).toBe(18);
});

test('analyse an array', () => {
  const result = arrAnalyser([1, 8, 3, 4, 2, 6]);
  expect(result.max).toBe(8);
  expect(result.min).toBe(1);
  expect(result.average).toBe(4);
  expect(result.size).toBe(6);
});