function solution(meeting) {
  meeting.sort((a, b) => {
    if (a[1] != b[1]) return a[1] - b[1];
    else {
      return a[0] - b[0];
    }
  });
  let num = 0;
  let end = 0;
  console.log(meeting);
  for (let x of meeting) {
    if (x[0] >= end) {
      num++;
      end = x[1];
    }
  }
  return num;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
