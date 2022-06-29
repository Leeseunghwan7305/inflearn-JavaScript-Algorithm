function solution(m, arr) {
  let ch = Array.from({ length: arr.length }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  console.log(tmp);
  console.log(ch);
  function DFS(L) {
    if (L == tmp.length) {
      console.log(tmp);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] == 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

//2개 숫자 == tmp ==2개
//입력하는예제 3개 == ch == 3개
