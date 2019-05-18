const alphaSwap = require('./hw2');

describe('hw2_alphaSwap', () => {
  test('should return correct string when input = `nick`', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
  test('should return correct string when input = `NiCk`', () => {
    expect(alphaSwap('NiCk')).toBe('nIcK');
  });
  test('should return correct string when input = `,HeLLo999`', () => {
    expect(alphaSwap(',HeLLo999')).toBe(',hEllO999');
  });
});
