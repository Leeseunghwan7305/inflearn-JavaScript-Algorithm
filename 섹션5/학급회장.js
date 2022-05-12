function solution(s) {
  let array = new Map(); //맵을 만듦

  for (let kk of s) {
    if (!array.has(kk)) {
      array.set(kk, 1);
    } else {
      array.set(kk, array.get(kk) + 1);
    }
  }
  let max = 0;
  let answer = "";
  console.log(array.values());

  for (let [key, value] of array.entries()) {
    //키 , value값 한번에 가져오기
    if (value > max) {
      answer = key;
      max = value;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
