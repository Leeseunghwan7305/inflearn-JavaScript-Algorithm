function solution(s) {
  let result = new Set(s);
  result = [...result].join("");
  return result;
}
console.log(solution("ksekkset"));
