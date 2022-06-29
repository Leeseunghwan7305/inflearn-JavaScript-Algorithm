function solution(n, r) {
  let dy = Array.from(Array(30), () => Array(30).fill(0));
  console.log(dy);

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (r == n || r == 0) {
      return 1;
    } else {
      return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  let answer = DFS(5, 3);
  return answer;
}

// n 과 r 을 기록할 2차원 배열을 만들어야한다.

console.log(solution(5, 3));
