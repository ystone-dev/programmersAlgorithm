// 이전 풀이
function solution(n) {
  let i = 1;
  while (1) {
    if (n % i === 1) return i;
    i++;
  }
}

// 새 풀이
function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) return i;
  }
}
