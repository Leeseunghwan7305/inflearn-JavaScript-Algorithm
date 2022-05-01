function solution(m, arr) {
  let pL = 0;
  let pR = 0;
  let sum = 0;
  let num = 0;
  let len = arr.length;

  while (pL != len && pR != len) {
    sum = 0;
    for (let j = pL; j <= pR; j++) {
      sum += arr[j];
    }
    if (sum > 6) {
      pL++;
    } else if (sum < 6) {
      pR++;
    } else {
      num++;
      pR++;
    }
  }
  return num;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
