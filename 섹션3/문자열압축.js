function solution(s) {
  let num = 1;
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      num++;
    } else {
      answer += s[i];

      if (num != 1) answer += num;
      num = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
