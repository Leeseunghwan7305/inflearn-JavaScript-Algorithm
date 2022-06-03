//삽입 정렬 특징
//안정한 정렬방법
//자료의 수가 적을 경우 구현이 매우 간단
//이미 정렬되어 있는 경우나 자료의 수가 적은 정렬에 효율적

function solution2(arr) {
  //i==key
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        i = j;
      }
    }
  }
  return arr;
}

let arr2 = [11, 7, 5, 6, 10, 9];
// console.log(solution2(arr2));

function solution3(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    //i ==key
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
    console.log(arr);
  }
  return answer;
}

let arr3 = [11, 7, 5, 6, 10, 9];
console.log(solution3(arr3));
