function solution(n) {
  answer = "";
  function DFS(n) {
    if (n == 0) return;

    if (n % 2) {
      n = parseInt(n / 2);
      DFS(n);
      answer += 1;
    } else {
      n = parseInt(n / 2);
      DFS(n);
      answer += 0;
    }
  }
  DFS(n);
  return answer;
  //1011
}

console.log(solution(11));
