function solution(m, arr) {
  let dp = Array.from({ length: m + 1 }, () => 999);

  dp[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j <= m; j++) {
      dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1);
    }
  }
  console.log(dp);
  console.log(dp[15]);
}

let arr = [1, 2, 5];
console.log(solution(15, arr));

function solution2(m, arr) {
  let sum = 0;
  let result = 100;
  function DFS(L, sum) {
    if (sum > m) {
      sum = 0;
      return;
    }
    if (sum == m) {
      result = Math.min(result, L);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  console.log(result);
}

let arr2 = [1, 2, 5];
console.log(solution2(15, arr2));
