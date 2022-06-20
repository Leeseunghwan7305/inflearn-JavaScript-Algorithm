function solution(c, arr) {
  let max = 0;
  let ch = Array.from({ length: arr.length + 1 }, () => 0);
  let sum = 0;
  console.log(ch);
  function DFS(n) {
    if (n >= ch.length) {
      return;
    }
    if (n == ch.length - 1) {
      for (let i = 0; i < ch.length - 1; i++) {
        if (ch[i] == 1) {
          sum += arr[i];
        }
      }
      if (max < sum && sum < c) {
        max = sum;
      }
      sum = 0;
    }

    ch[n] = 1;
    DFS(n + 1);
    ch[n] = 0;
    DFS(n + 1);
  }
  DFS(0);
  console.log(max);
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
