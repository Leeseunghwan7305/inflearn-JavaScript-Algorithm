//1.가위 2. 바위 3. 보

//1<2
//2<3
//3<1
function solution(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b[i]) {
      console.log("D");
    } else if (a[i] < b[i] || (a[i] == 3 && b[i] == 1)) {
      console.log("B");
    } else {
      console.log("A");
    }
  }
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
