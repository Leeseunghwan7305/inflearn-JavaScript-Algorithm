function count(songs, capacity) {}

function solution(m, songs) {
  let memory = 0;
  let section = 0;
  let sum = 0;
  while (1) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (memory <= sum) {
        section++;
        if (memory < sum) i--;
        if (section > m) {
          memory++;
          break;
        }
        sum = 0;
      }
    }
    if (section == m) {
      return memory - 1;
    }
    section = 0;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
