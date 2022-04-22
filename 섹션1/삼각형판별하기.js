function solution(a, b, c) {
  let answer = "YES";
  let sum = a + b + c;
  let max = Math.max(a, b, c);
  if (sum - max > max) {
    return answer;
  } else {
    answer = "NO";
    return answer;
  }
}

console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));
