let start = new Date();
function solution(arr) {
  //선택정렬 가장 작은걸 맨 앞으로 보낸다
  let answer = "";
  let min;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    min = 1000;
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    } //가장 작은 값을 찾음
    [arr[i], arr[index]] = [arr[index], arr[i]];
  } //가장작은값을 맨앞으로 옮겨줌
  console.log(arr);
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

let end = new Date(); // 측정 종료

console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.`);
