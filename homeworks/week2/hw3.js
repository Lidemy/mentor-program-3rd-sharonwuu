function reverse(str) {
  let ans = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    ans += str[i];
  }
  console.log(ans);
}
reverse('hello');
