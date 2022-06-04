function solution(arr) {
  let max = 0;
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let number = 1;
    let imax = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (imax < arr[j]) {
        imax = arr[j];
        number++;
      } else {
        continue;
      }
    }
    if (max < number) {
      max = number;
    }
  }
  console.log(max);
}

let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(arr));
