const add = require('./hw5');

describe('hw_add', () => {
  test('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222');
  });
  test('should return correct answer when a=111111111111111111111111111111 and b=222222222222222222222222222222', () => {
    expect(add('111111111111111111111111111111', '222222222222222222222222222222')).toBe('333333333333333333333333333333');
  });
  test('should return correct answer when a=99 and b=909', () => {
    expect(add('99', '909')).toBe('1008');
  });
  test('should return correct answer when a=99 and b=909', () => {
    expect(add('099', '000909')).toBe('001008');
  });
  test('should return correct answer when a=3 and b=8', () => {
    expect(add('3', '8')).toBe('11');
  });
});
