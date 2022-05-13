function solution(n, arr) {
  let max = 0;
  let a = 0; //자릿수의합
  let result = 0; //자릿수의합이 가장크고 가장 큰값
  for (let x of arr) {
    a = x
      .toString()
      .split("")
      .reduce((pre, cur) => pre + Number(cur), 0);
    if (max < a) {
      max = a;
      result = x;
    } else if (max == a) {
      if (result < x) {
        result = x;
      }
    }
  }
  return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
