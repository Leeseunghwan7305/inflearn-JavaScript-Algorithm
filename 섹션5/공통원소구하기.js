function solution(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr.sort((a, b) => a - b).join(" ");
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
