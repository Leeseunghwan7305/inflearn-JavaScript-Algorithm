function solution(m, arr) {
  let pL = 0;
  let pR = 0;
  let sum = 0;
  let len = arr.length;
  let num = 0;
  while (pL != arr.length && pR != arr.length) {
    sum = 0;
    for (let i = pL; i <= pR; i++) {
      sum += arr[i];
    }
    console.log(sum);
    if (sum <= 5) {
      pR++;
      num++;
    } else {
      pL++;
    }
  }
  while (pL <= arr.length) {
    pL++;
    if (sum <= 5) {
      num++;
    }
  }
  while (pR <= arr.length) {
    pR++;
    if (sum <= 5) num++;
  }
  console.log(num);
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
