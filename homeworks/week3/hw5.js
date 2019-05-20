function add(a, b) {
  const result = [];
  const compareLength = a.length > b.length ? a.length : b.length;

  for (let i = 0; i < compareLength; i += 1) {
    const x = Number(a[a.length - i - 1]) || 0;
    const y = Number(b[b.length - i - 1]) || 0;
    result.push(x + y);
  }

  for (let i = 0; i < result.length; i += 1) {
    if (result[i] >= 10) {
      result[i] -= 10;
      if (i !== result.length - 1) {
        result[i + 1] += 1;
      } else {
        result.push(1);
      }
    }
  }
  return result.reverse().join('');
}

module.exports = add;
