function solution(test) {
  let count = 0;
  let result = 0;
  for (let k = 1; k <= 4; k++) {
    for (let j = 1; j <= 4; j++) {
      // (1,1) , (1,2)...(3,1),(3,2)..(4,4)
      let count = 0;
      for (let i = 0; i < test.length; i++) {
        // 이차원배열 다 접근하기
        for (let z = 0; z < test[0].length; z++) {
          if (test[i][z] == j) {
            //j(멘티)가 먼저 나왔네? count 안하고 다음줄로
            break;
          }
          if (test[i][z] == k) {
            count++;
          }
        }
      }
      if (count == test.length) {
        result++;
      }
    }
  }
  return result;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
