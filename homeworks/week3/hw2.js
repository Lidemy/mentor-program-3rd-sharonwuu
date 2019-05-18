function alphaSwap(str) {
  let n = str;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      n = n.replace(n[i], str[i].toLowerCase());
    } else {
      n = n.replace(n[i], str[i].toUpperCase());
    }
  }
  return n;
}

module.exports = alphaSwap;
