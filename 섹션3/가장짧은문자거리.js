function solution(s, t) {
  let num = 0;
  let arr = [];
  for (let x of s) {
    if (x != t) {
      num++;
      arr.push(num);
    } else {
      num = 0;
      arr.push(num);
    }
  }
  num = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != t) {
      num++;
      if (arr[i] > num) {
        arr[i] = num;
      }
    } else {
      num = 0;
    }
  }
  return arr;
}

let str = "teachermode";
console.log(solution(str, "e"));
