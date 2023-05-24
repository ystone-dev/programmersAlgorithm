// 이전 풀이
function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

// 새 풀이
function solution(n) {
  const sqrt = Math.sqrt(n);

  if (sqrt % 1 === 0) {
    return (sqrt + 1) ** 2;
  }
  return -1;
}
