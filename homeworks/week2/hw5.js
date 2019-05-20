function join(str, concatStr) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i === 0) result += concatStr;
    result += str[i];
  }
  return result;
}

function repeat(str, times) {
  let result = '';
  for (let i = 1; i <= times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join('abc', '!'));
console.log(repeat('yoyo', 2));
