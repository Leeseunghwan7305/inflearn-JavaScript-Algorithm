function solution(test) {
  let flag = 1;

  for (let a = 1; a <= 4; a++) {
    for (let b = 1; b <= 4; b++) {
      flag = 1;
      if (a == b) {
        continue;
      } else {
        for (let i = 0; i < test.length; i++) {
          for (let j = 0; j < test[i].length; j++) {
            if (test[i][j] == a) {
              flag = 1;
              break;
            } else if (test[i][j] == b) {
              flag = 0;
              break;
            }
          }
          if (!flag) {
            break;
          }
        }
        if (flag) {
          console.log(a, b);
        }
      }
    }
  }
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
