function solution(times) {
  let person = 0;
  let end = 0;
  let start = 0;
  times.sort((a, b) => {
    if (a[1] != b[1]) return a[1] - b[1];
    else {
      return a[0] - b[0];
    }
  });
  console.log(times);

  for (let i = 0; i < times.length; i++) {}
}
let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
