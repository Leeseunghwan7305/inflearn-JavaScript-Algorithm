function solution(n, k, arr, m) {
  //5개의 숫자 중 3개를 뽑아서 합이 m인 조합

  const tmp = Array.from({ length: k }, () => 0);
  console.log(tmp);
  let count = 0;

  function DFS(L, S, SUM) {
    if (L == k) {
      if (SUM % m == 0) {
        count++;
      }
    } else {
      for (let i = S; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, SUM + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  console.log(count);
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
