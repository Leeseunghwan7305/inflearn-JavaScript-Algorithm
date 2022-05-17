function solution(s) {
  let stack = [];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
    } else {
      //레이저 일떄
      stack.pop();
      if (s[i - 1] == "(") {
        result += stack.length;
      }
      //닫힘 쇠막대기일때
      if (s[i - 1] == ")") {
        result += 1;
      }
    }
  }
  return result;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
