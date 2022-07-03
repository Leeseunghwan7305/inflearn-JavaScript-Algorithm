function solution(n, arr) {
  const ch = Array.from({ length: n + 1 }, () => 0);
  const list = Array.from(Array(n + 1), () => Array());
  console.log(list);
  console.log(ch);
  let count = 0;
  let path = [];
  for (let [a, b] of arr) {
    list[a].push(b);
  }
  console.log(list);
  function DFS(V) {
    if (V === n) {
      count++;
      console.log(path);
      return;
    } else {
      for (let i = 0; i < list[V].length; i++) {
        if (ch[list[V][i]] == 0) {
          ch[list[V][i]] = 1;
          path.push(list[V][i]);
          DFS(list[V][i]);
          path.pop();
          ch[list[V][i]] = 0;
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
