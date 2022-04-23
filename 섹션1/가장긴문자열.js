function solution(s) {
  let max = 0;
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (max < s[i].length) {
      max = s[i].length;
      num = i;
    }
  }
  return s[num];
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
