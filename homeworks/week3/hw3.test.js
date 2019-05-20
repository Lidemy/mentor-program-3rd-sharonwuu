const isPrime = require('./hw3');

describe('hw3_isPrime', () => {
  test('should return correct answer when n = 0', () => {
    expect(isPrime(0)).toBe(false);
  });
  test('should return correct answer when n = 1', () => {
    expect(isPrime(1)).toBe(false);
  });
  test('should return correct answer when n = 2', () => {
    expect(isPrime(2)).toBe(true);
  });
  test('should return correct answer when n = 3', () => {
    expect(isPrime(3)).toBe(true);
  });
  test('should return correct answer when n = 4', () => {
    expect(isPrime(4)).toBe(false);
  });
  test('should return correct answer when n = 11', () => {
    expect(isPrime(11)).toBe(true);
  });
  test('should return correct answer when n = 20', () => {
    expect(isPrime(20)).toBe(false);
  });
  test('should return correct answer when n = 37', () => {
    expect(isPrime(37)).toBe(true);
  });
});
