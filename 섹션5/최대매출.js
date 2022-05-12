function solution(k, arr) {
  let pL = 0;
  let sum = 0;
  let max = 0;
  for (pL = 0; pL < arr.length; pL++) {
    let pR = pL + k - 1;
    sum = 0;
    for (let i = pL; i <= pR; i++) {
      sum += arr[i];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
