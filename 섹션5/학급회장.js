function solution(s) {
  let map = new Map();

  for (let x of s) {
    if (map.has(x)) {
      //존재한다면
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }
  let max = 0;
  let result = "";
  for (let [a, b] of map) {
    if (b > max) {
      max = b;
      result = a;
    }
  }
  return result;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
