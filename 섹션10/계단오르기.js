function solution(n) {
  let dp = Array.from({ length: 45 }, (v, i) => 0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp);
}
//var 함수스코프 let const 블록스코프
console.log(solution(45));
