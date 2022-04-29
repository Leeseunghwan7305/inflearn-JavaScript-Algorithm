function solution(s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-z]/g, "");
  console.log(s);
  let len = s.length;
  let answer = "Yes";
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) {
      answer = "No";
      return answer;
    }
  }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
