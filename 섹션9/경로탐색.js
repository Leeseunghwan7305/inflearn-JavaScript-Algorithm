function solution(n, arr) {
  //먼저 갈곳을 다 정해놓고 시작하기
  //거쳐간곳은 다시 가지않게 check하기

  let list = Array.from(Array(n + 1), () => Array(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  console.log(ch);
  let count = 0;
  for (let [a, b] of arr) {
    list[a].push(b);
  }
  console.log(list);
  function DFS(V) {
    if (V == n) {
      count++;
      return;
    } else {
      for (let i = 0; i < list[V].length; i++) {
        if (ch[[list[V][i]]] == 0) {
          ch[[list[V][i]]] = 1;
          DFS(list[V][i]);
          ch[[list[V][i]]] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  console.log(count);
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
