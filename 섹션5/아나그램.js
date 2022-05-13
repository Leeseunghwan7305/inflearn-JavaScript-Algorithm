function solution(str1, str2) {
  let answer = "YES";
  newStr1 = str1.split("").sort();
  console.log(newStr1);
  newStr2 = str2.split("").sort();
  console.log(newStr2);
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) answer = "NO";
    return answer;
  }
  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
