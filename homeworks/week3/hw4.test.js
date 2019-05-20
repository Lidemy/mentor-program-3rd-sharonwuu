const isPalindromes = require('./hw4');

describe('hw4_isPalindromes', () => {
  test('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('abcdcba')).toBe(true);
  });
  test('should return correct answer when str = abBA', () => {
    expect(isPalindromes('abBA')).toBe(true);
  });
  test('should return correct answer when str = Ab1,1bA', () => {
    expect(isPalindromes('Ab1,1bA')).toBe(true);
  });
  test('should return correct answer when str = RR,RRr', () => {
    expect(isPalindromes('RR,RRr')).toBe(false);
  });
  test('should return correct answer when str = 123', () => {
    expect(isPalindromes('123')).toBe(false);
  });
  test('should return correct answer when str = 1', () => {
    expect(isPalindromes('1')).toBe(true);
  });
  test('should return correct answer when str = 101', () => {
    expect(isPalindromes('101')).toBe(true);
  });
  test('should return correct answer when str = 魯拉啦滷', () => {
    expect(isPalindromes('魯拉啦滷')).toBe(false);
  });
  test('should return correct answer when str = 魯拉拉魯', () => {
    expect(isPalindromes('魯拉拉魯')).toBe(true);
  });
});
