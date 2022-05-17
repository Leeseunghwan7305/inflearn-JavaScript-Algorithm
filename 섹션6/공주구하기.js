function solution(n, k) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  console.log(array);

  while (array.length != 1) {
    let cut = array.splice(0, (k - 1) % array.length); //splice는 자른값을 반환
    array.shift();
    array = [...array, ...cut];
    console.log(array);
  }
}

console.log(solution(8, 3));
