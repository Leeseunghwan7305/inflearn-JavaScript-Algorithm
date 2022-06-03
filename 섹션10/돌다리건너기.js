function solution(n) {
  let dp = Array.from({ length: 45 }, (v, i) => 0);

  dp[1] = 1;
  dp[2] = 2;
  for (let i = 2; i <= n; i++) {
    dp[i + 1] = dp[i] + dp[i - 1];
  }
  return dp;
}

console.log(solution(7));
