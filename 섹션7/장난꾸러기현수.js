function solution(arr) {
  let newArr = [];
  for (let x of arr) {
    newArr.push(x);
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (newArr[i] != arr[i]) {
      console.log(i + 1);
    }
  }
}

let arr = [120, 130, 150, 150, 130, 150];
//console.log(solution(arr));

//작은애부터 정렬
//현수는 짝꿍보다 키가 큼 근데 자리 바꿈
// let sortArr=arr.slice();
function solution2(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] <= arr[i] && arr[i] >= arr[i + 1]) {
      console.log(i + 1);
      break;
    }
  }
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i - 1] >= arr[i] && arr[i] <= arr[i + 1]) {
      console.log(i + 1);
      break;
    }
  }
}

let arr2 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution2(arr2));
