function solution(arr) {
  let score = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      score++;
      result += score;
    } else {
      score = 0;
    }
  }
  return result;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
