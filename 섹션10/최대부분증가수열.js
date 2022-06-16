function solution(arr) {
  let dp = Array.from({ length: arr.length + 1 }, (v, i) => 0);

  console.log(dp);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return dp;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
