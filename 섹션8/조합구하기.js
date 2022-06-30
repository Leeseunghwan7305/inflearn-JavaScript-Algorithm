function solution(n, m) {
  //
  const tmp = Array.from({ length: m }, () => 0);
  let answer = [];
  console.log(tmp);
  function DFS(L, S) {
    if (L == m) {
      //answer.push(tmp.slice());
      console.log(tmp);
      //slice는 원본배열이 바뀌지 않는다.
      return;
    } else {
      for (let i = S; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  console.log(answer);
}

console.log(solution(4, 2));
