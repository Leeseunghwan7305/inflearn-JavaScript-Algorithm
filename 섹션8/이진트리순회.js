function solution(n) {
  function DFS(n) {
    if (n > 7) return;

    console.log(n);
    DFS(n * 2);
    DFS(n * 2 + 1);
  }
  console.log(DFS(n));
}
console.log(solution(1));
