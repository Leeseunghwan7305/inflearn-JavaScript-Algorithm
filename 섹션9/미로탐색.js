function solution(board) {
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  let count = 0;
  function DFS(x, y) {
    if (x == 6 && y == 6) {
      count++;
      return;
    } else {
      for (let i = 0; i < 4; i++) {
        // 좌표를 넘어가면 안됨
        if (
          x + dx[i] >= 0 &&
          x + dx[i] <= 6 &&
          y + dy[i] >= 0 &&
          y + dy[i] <= 6 &&
          board[x + dx[i]][y + dy[i]] == 0
        ) {
          board[x + dx[i]][y + dy[i]] = 1;
          DFS(x + dx[i], y + dy[i]);
          board[x + dx[i]][y + dy[i]] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  console.log(count);
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
