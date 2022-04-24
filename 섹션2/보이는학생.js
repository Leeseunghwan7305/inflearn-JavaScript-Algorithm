function solution(arr) {
  let max = arr[0];
  let num = 1;
  for (let x of arr) {
    if (max < x) {
      max = x;
      num++;
    }
  }
  return num;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
