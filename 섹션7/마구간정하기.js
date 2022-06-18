function count(stable, dist) {}
function solution(c, stable) {
  stable.sort((a, b) => a - b);
  console.log(stable);
  let lt = 0;
  let rt = stable.length - 1;
  c = c - 2;
  let arr = [];
  for (let i = 0; i < c; i++) {
    let mid = Math.floor((rt + lt) / 2);
    arr.push(Math.abs(stable[mid] - stable[lt]));
    arr.push(Math.abs(stable[mid] - stable[rt]));

    rt = mid;
    lt = mid;
  }
  return Math.min(...arr);
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
