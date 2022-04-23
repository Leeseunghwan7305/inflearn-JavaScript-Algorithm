function solution(s) {
  let answer = "";
  for (x of s) {
    if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
      x = x.toUpperCase();
    }
    answer += x;
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
