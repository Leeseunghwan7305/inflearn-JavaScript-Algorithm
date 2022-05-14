function solution(s) {
  let stack = [];
  let answer = "YES";
  if (s.length % 2 != 0 || s[0] == ")") {
    answer = "NO";
    return answer;
  }
  for (let x of s) {
    if (x == "(") {
      stack.push(x);
    } else if (x == ")") {
      if (stack.length == 0) {
        answer = "NO";
        return answer;
      }
      stack.pop();
    }
    if (stack.lenght > 0) {
      answer = "NO";
      return answer;
    }
  }
  return answer;
}

let a = "(())()";
console.log(solution(a));
