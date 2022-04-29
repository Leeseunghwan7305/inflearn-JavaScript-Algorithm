function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != s[i].toLowerCase()) {
      answer += s[i].toLowerCase();
    } else {
      answer += s[i];
    }
  }
  if (answer == answer.split("").reverse().join("")) {
    console.log("Yes");
  } else {
    console.log("no");
  }
}

let str = "goooG";
console.log(solution(str));
