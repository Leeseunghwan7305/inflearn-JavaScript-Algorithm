function compareMaps(map1, map2) {}
function solution(s, t) {
  let pL = 0;
  let pR = t.length;
  let number = 0;
  let Sanwer = "";
  let Tanwer = "";
  for (let i = pL; i < s.length; i++) {
    Sanwer = "";
    Tanwer = "";
    for (let j = 0; j < t.length; j++) {
      Sanwer += s[i + j];
      Tanwer += t[j];
    }
    sR = Sanwer.split("").sort().join("");
    tR = Tanwer.split("").sort().join("");
    console.log(sR);
    console.log(tR);
    if (sR == tR) {
      number++;
    }
  }
  return number;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
