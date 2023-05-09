// 이전 풀이
function solution(n, t) {
  for (let i = 0; i < t; i++) {
    n *= 2;
  }
  return n;
}

// 새 풀이
function solution(n, t) {
  return n * 2 ** t;
}
