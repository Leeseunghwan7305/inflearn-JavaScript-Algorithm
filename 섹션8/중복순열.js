function solution(n, m) {
  let ch = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L == m) {
      console.log(ch);
      return;
    }
    for (let i = 1; i <= n; i++) {
      ch[L] = i;
      DFS(L + 1);
    }
  }
  console.log(DFS(0));
}

console.log(solution(3, 2));
