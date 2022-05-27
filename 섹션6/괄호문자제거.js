function solution(s) {
  let stack = [];
  let result = [];
  for (let x of s) {
    if (x == "(") {
      //(일경우
      stack.push(x);
    } else if (x == ")") {
      //) 일경우
      stack.pop();
    } else if (stack.length == 0) {
      // 문자일경우
      result.push(x);
    }
  }
  return result.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
