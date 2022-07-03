function solution() {
  let queue = [];
  queue.push(1);
  let answer = "";
  while (queue.length) {
    let stack = queue.shift();

    if (stack > 7) {
      return console.log(answer.trim());
    }

    answer += stack + " ";

    queue.push(stack * 2);
    queue.push(stack * 2 + 1);
  }
}
console.log(solution());
