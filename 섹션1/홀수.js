function solution(arr) {
  let stack = [];
  let sum = 0;
  let min = 9999;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      stack.push(arr[i]);
    }
  }
  sum = stack.reduce((pre, cur) => pre + cur, 0);
  min = Math.min(...stack);
  console.log(sum, min);
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
