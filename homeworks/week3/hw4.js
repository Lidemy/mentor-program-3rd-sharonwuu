function isPalindromes(str) {
  return str.toUpperCase() === str.toUpperCase().split('').reverse().join('');
}

module.exports = isPalindromes;
