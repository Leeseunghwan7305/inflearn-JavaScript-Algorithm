function solution(m, arr) {
  let pL = 0;
  let pR = 0;
  let sum = 0;
  let num = 0;
  for (let pR = 0; pR < arr.length; pR++) {
    sum += arr[pR];
    if (sum == m) {
      num++;
    }
    while (sum >= m) {
      sum -= arr[pL++];

      if (sum == m) num++;
    }
  }
  console.log(num);
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
