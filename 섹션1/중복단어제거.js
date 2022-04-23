function solution(s) {
  let array = [];
  for (x of s) {
    if (!array.includes(x)) {
      array.push(x);
    }
  }
  return array.join(" ");
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
