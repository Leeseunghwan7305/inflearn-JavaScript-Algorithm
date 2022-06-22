function solution(n, m) {
  // 3  배열 2개
  let ch = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L == m) {
      console.log(ch);
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        ch[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
}

console.log(solution(3, 2));
