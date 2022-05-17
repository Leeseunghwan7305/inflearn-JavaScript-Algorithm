function solution(need, plan) {
  let num = 0;
  let answer = "YES";
  for (let i = 0; i < plan.length; i++) {
    if (plan[i] == need[num]) {
      num++;
    }
  }
  if (num == need.length) {
    return answer;
  }
  answer = "NO";
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
