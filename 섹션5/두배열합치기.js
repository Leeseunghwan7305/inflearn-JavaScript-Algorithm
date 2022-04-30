function solution(arr1, arr2) {
  let pU = 0;
  let pD = 0;
  let array = [];
  while (1) {
    if (arr1[pU] > arr2[pD]) {
      array.push(arr2[pD]);
      pD++;
    } else {
      array.push(arr1[pU]);
      pU++;
    }
    while (arr2.length == pD || arr1.length == pU) {
      if (arr2.length == pD) {
        array.push(arr1[pU++]);
      } else {
        array.push(arr2[pD++]);
      }
      if (arr2.length == pD && arr1.length == pU) {
        return array;
      }
    }
  }
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
