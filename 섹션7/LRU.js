function solution(size, arr) {
  let cash = [];

  for (let i = 0; i < arr.length; i++) {
    if (cash.length < 5) {
      if (cash.includes(arr[i])) {
        cash.splice(i, 1);
        cash.unshift(arr[i]);
      } else {
        cash.unshift(arr[i]);
      }
    } else {
      cash.pop();
      cash.unshift(arr[i]);
    }
  }
  return cash;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

//miss
//hit
//만약 배열에 같은수가 있다면 그 수를 뺴고 맨앞으로
//배열에 같은수가 없다면 맨앞에
//배열이 꽉찼다면 맨뒤에 수를 빼고 앞에

function solution2(size, arr2) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution2(5, arr2));
