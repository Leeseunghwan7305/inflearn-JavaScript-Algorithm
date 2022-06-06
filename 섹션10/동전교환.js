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

let arr = [1, 2, 5, 3, 8];
console.log(solution(23, arr));

function solution2(m, coin) {
  let dy = Array.from({ length: 15 }, (v, i) => 0);
  console.log(dy);

  for (let i = 0; i < arr.length; i++) {
    for (let j = m; j >= arr[i]; j--) {}
  }
}

let arr2 = [1, 2, 5, 3, 8];
console.log(solution2(23, arr2));
