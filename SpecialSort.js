function solution(arr) {
  let minus = [];
  let plus = [];
  for (let x of arr) {
    if (x >= 0) {
      plus.push(x);
    } else {
      minus.push(x);
    }
  }
  console.log(plus);
  console.log(minus);
  let result = [...minus, ...plus];
  return result;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

function solution2(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution2(arr2));
