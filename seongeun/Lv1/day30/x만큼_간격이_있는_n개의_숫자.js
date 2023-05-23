// 이전 풀이
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 새 풀이
function solution(x, n) {
  return Array(n)
    .fill()
    .map((_, idx) => x * (idx + 1));
}
