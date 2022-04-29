function solution(str) {
  //   str = str.replace(/[^0-9]/g, "");
  //   console.log(parseInt(str));
  let answer = "";
  for (x of str) {
    if (Number(x) == x) {
      answer += x;
    }
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
