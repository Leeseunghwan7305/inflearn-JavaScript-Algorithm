function solution(s, t) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == t) {
      result++;
    }
  }
  return result;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
