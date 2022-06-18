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
      return memory;
    }
    section = 0;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(solution(3, arr));

function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

function solution2(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(solution2(3, arr2));
