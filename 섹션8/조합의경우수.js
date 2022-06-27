function solution(n, r) {
  let answer = [];
  let ch = Array.from(Array(30), () => Array(30).fill(0));

  function DFS(n, r) {
    if (ch[n][r] > 0) return ch[n][r];
    if (r == 0 || n == r) {
      return 1;
    } else {
      return (ch[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
