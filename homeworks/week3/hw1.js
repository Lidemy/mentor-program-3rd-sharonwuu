function stars(n) {
  const result = [];
  let star = '';
  for (let i = 0; i < n; i += 1) {
    result.push(star += '*');
  }
  return result;
}

module.exports = stars;
