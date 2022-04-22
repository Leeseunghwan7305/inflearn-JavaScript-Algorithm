function solution(a, b, c) {
  let min;
  if (a > b) min = b;
  else {
    min = a;
  }
  if (min > c) {
    min = c;
  } else {
    return min;
  }
  return min;
}
console.log(solution(6, 5, 11));
