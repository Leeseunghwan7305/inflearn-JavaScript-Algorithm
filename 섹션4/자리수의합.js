function solution(n, arr) {
  console.time("시작");
  let max = 0;
  let a = 0;
  let result = 0;
  for (let x of arr) {
    a = x
      .toString()
      .split("")
      .reduce((pre, cur) => pre / 1 + Number(cur));
    if (max < a) {
      max = a;
      result = x;
    } else if (max == a) {
      if (result < x) {
        result = x;
        max = a;
      }
    }
  }
  return result;
}

let arr = [128, 460, 603, 40];
console.log(solution(4, arr));
console.timeEnd("시작");
