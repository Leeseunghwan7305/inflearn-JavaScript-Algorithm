function solution(arr) {
  let sum = 0;
  let sum2 = 0;
  let length = arr.length - 1;
  let result = 0;
  let ch = Array.from({ length: arr.length }, () => 0);
  let answer = "NO";
  function DFS(n) {
    if (n > ch.length - 1) {
      return;
    }
    if (n == ch.length - 1) {
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] == 1) {
          sum2 += arr[i];
        } else {
          sum += arr[i];
        }
      }
      console.log(sum, sum2);
      if (sum2 == sum) {
        answer = "Yes";
      }
      sum2 = 0;
      sum = 0;
    }
    ch[n] = 1;
    DFS(n + 1);
    ch[n] = 0;
    DFS(n + 1);
  }
  DFS(0);
  console.log(answer);
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
