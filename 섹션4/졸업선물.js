function solution(m, product) {
  let sale = 0;
  let num = 1;
  let sum = m;
  let maxnum = 0;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < product.length; i++) {
    sum = m;
    num = 1;
    sale = parseInt(product[i][0] / 2) + product[i][1];
    sum -= sale;
    for (let j = 0; j < product.length; j++) {
      if (i == j) {
        continue;
      } else {
        sum -= product[j][0] + product[j][1];
        num++;
        if (sum < 0) {
          num -= 1;
          if (maxnum < num) {
            maxnum = num;
          }
        }
      }
    }
  }
  return maxnum;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
