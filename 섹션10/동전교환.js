function solution(m, coin) {
  let length = coin.length - 1;
  let result = 0;
  coin.sort((a, b) => a - b);
  while (m != 0) {
    result += parseInt(m / coin[length]);
    m %= coin[length];
    if (m < coin[length]) {
      length--;
    }
  }
  return result;
}

function solution2(m, coin) {
  let dy = Array.from({ length: m + 1 }, (v, i) => 1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}

let arr2 = [1, 2, 5];
console.log(solution2(15, arr2));
