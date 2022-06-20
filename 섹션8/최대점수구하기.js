function solution(m, ps, pt) {
  let ch = Array.from({ length: ps.length }, () => 0);
  console.log(ch);

  let max = 0;
  let result = 0;
  function DFS(n, time, score) {
    if (time > m || n > ch.length) {
      return;
    }
    if (n == ch.length) {
      max = Math.max(max, score);
    }

    DFS(n + 1, time + pt[n], score + ps[n]);

    DFS(n + 1, time, score);
  }
  DFS(0, 0, 0);
  console.log(max);
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
