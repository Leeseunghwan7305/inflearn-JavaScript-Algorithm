function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n >= 2) DFS(n - 1);
    answer += n;
  }
  DFS(n);
  console.log(answer);
}

solution(3);
