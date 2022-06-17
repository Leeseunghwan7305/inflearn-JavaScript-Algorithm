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
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
