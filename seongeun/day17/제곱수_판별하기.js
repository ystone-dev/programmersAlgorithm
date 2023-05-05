// 이전 풀이
function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 1 : 2;
}

// 새 풀이
function solution(n) {
  return Number.isInteger(n ** 0.5) ? 1 : 2;
}
