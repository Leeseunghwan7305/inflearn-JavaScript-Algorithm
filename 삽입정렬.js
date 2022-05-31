function solution(arr) {
  //정렬이 된쪽과
  //정렬이 되지 않은 쪽
  //key값은 2번째 인덱스부터 시작된다.
  //key값이 자료의 길이 만큼 이동되었을떄 정렬이 완성된다.

  let i, j, key;
  //j==key
  for (let j = 1; j < arr.length; j++) {
    key = arr[j];
    i = j - 1; //i== 정렬된 수중 제일 큰수의 인덱스
    while (i >= 0 && arr[i] >= key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];

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
console.log(solution2(arr2));
