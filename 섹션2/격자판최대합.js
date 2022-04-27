function solution(arr) {
  //행의 합 구하기
  let garoMax = 0;
  let seroMax = 0;
  let degacMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let garo = 0;
    let sero = 0;
    for (let j = 0; j < arr.length; j++) {
      garo += arr[i][j];
      sero += arr[j][i];
    }
    if (garoMax < garo) garoMax = garo;
    if (seroMax < sero) seroMax = sero;
  }
  let degac = 0;
  let degac2 = 0;
  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    degac += arr[i][j];
    degac2 += arr[i][4 - j];
  }
  if (degac < degac2) {
    return Math.max(garoMax, seroMax, degac2);
  } else {
    return Math.max(garoMax, seroMax, degac);
  }
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
