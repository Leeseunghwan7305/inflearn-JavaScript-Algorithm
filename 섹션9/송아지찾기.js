function solution(s, e) {
  let ch = Array.from({ length: 1001 }, () => 0);
  let dt = Array.from({ length: 1001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  dt[s] = 0;
  while (queue.length) {
    let V = queue.shift();

    for (let nx of [V + 1, V - 1, V + 5]) {
      if (nx > 0 && nx <= 100000 && ch[nx] == 0) {
        ch[nx] = 1;
        queue.push(nx);
        dt[nx] = dt[V] + 1;
        if (nx == e) {
          return dt[V] + 1;
        }
      }
    }
  }
}

console.log(solution(8, 3));
//앞으로 1 뒤로 1 앞으로 5
