function solution(day, arr) {
  let result = 0;

  arr.map((v) => {
    if (v % 10 == day) {
      result++;
    }
  });
  return result;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr2));
