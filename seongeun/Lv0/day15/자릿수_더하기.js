// 이전 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += +cur), 0);
}

// 새 풀이
function solution(n) {
  let answer = 0;
  n = n.toString();

  for (let item of n) {
    answer += +item;
  }

  return answer;
}
