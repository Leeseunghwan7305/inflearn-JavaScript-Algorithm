function solution(s) {
  let stack = [];
  let result = [];
  for (let x of s) {
    if (x == "(") {
      stack.push(x);
    } else if (x == ")") {
      stack.pop();
    } else if (stack.length == 0) {
      result.push(x);
    }
  }
  return result.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
