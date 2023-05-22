// 이전 풀이
function solution(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  var answer = sum / arr.length;
  return answer;
}

// 새 풀이
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}
