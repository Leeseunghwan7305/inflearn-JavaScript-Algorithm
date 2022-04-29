function solution(arr) {
  let answer = "";
  let flag = 1;
  for (x of arr) {
    x = x.toString().split("").reverse().join("");
    x = parseInt(x);
    if (x == 1) {
      flag = 0;
    }
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        flag = 0;
        break;
      }
    }
    if (flag) {
      answer += x + " ";
    }
    flag = 1;
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
