// function solution(arr) {
//   let sum = arr.reduce((pre, cur) => pre + cur);
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == sum - 100) {
//         for (let z = 0; z < arr.length; z++) {
//           console.log(arr[i], arr[j]);
//           if (arr[z] != arr[i] && arr[z] != arr[j]) result.push(arr[z]);
//         }
//       }
//     }
//   }
//   console.log(result);
// }

// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let array = arr;
    let n = array.splice(i, 1);
    console.log(arr);
    for (let j = i + 1; j < arr.length; j++) {
      let m = array.splice(j, 1);
      let sum = array.reduce((pre, cur) => pre + cur, 0);
      if (sum === 100) {
        return array;
      } else {
        array.splice(j, 0, m);
      }
    }
  }
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
