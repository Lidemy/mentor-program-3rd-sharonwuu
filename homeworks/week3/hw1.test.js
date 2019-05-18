const stars = require('./hw1');

describe('hw1_stars', () => {
  test('should return correct array when n = 1', () => {
    expect(stars(1)).toEqual(['*']);
  });
  test('should return correct array when n = 3', () => {
    expect(stars(3)).toEqual(['*', '**', '***']);
  });
});
