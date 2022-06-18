function solution(target, arr) {
  let rt = arr.length - 1;
  let lt = 0;
  arr.sort((a, b) => a - b);
  while (lt <= rt) {
    let mid = parseInt((rt + lt) / 2);
    if (target == arr[mid]) {
      return mid + 1;
    } else if (target > arr[mid]) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
