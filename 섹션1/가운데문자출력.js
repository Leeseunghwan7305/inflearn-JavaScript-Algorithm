function solution(s) {
  let result = "";
  if (s.length % 2 == 0) {
    result += s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)];
    return result;
  } else {
    result += s[parseInt(s.length / 2)];
    return result;
  }
}
console.log(solution("study"));
console.log(solution("good"));
