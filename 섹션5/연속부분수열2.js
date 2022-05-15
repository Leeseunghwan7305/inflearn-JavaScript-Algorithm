function solution2(m, arr) {
  let pL = 0;
  let pR = 0;
  let max = 0;
  let result = 0;
  let num = 0;
  for (let pR = 0; pR < ab.length; pR++) {
    max += ab[pR];
    while (max > m) {
      max -= ab[pL++];
    }
    result += pR - pL + 1;
  }
  return result;
}
let ab = [1, 3, 1, 2, 3];
console.log(solution2(5, ab));
