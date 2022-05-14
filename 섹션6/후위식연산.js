function solution(s) {
  let stack = [];
  let result = 0;
  let a = 0;
  let b = 0;
  for (let x of s) {
    result = 0;
    if (Number(x)) {
      stack.push(x);
    } else {
      b = Number(stack.pop());
      a = Number(stack.pop());
      if (x == "+") {
        result += a + b;
      } else if (x == "*") {
        result += a * b;
      } else if (x == "-") {
        result += a - b;
      } else {
        result += a / b;
      }
      stack.push(result);
    }
  }
  return result;
}

let str = "352+*9-";
console.log(solution(str));
