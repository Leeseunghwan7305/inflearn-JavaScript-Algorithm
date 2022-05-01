function solution(arr1, arr2) {
  let newArr = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let pL = 0;
  let pR = 0;
  console.log(arr1);
  console.log(arr2);
  while (pL < arr1.length && pR < arr2.length) {
    if (arr1[pL] == arr2[pR]) {
      newArr.push(arr1[pL]);
      console.log(pL);
      console.log(pR);
      pL++;
      pR++;
    } else if (arr1[pL] < arr2[pR]) {
      pL++;
    } else {
      pR++;
    }
  }

  return newArr;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
