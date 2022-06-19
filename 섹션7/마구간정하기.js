function count(stable, dist) {
  let current = stable[0];
  let c = 1;
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - current >= dist) {
      current = stable[i];
      c++;
    }
  }
  return c;
}
function solution(c, stable) {
  stable.sort((a, b) => a - b);
  console.log(stable);
  let answer = 0;
  //mid == 마구간 말 간의 최대 거리
  let lt = stable[0];
  let rt = stable[stable.length - 1];
  console.log(lt, rt);
  let mid = 0;
  while (lt <= rt) {
    mid = parseInt((lt + rt) / 2);

    if (count(stable, mid) < c) {
      rt = mid - 1;
    } else {
      answer = mid;
      lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
