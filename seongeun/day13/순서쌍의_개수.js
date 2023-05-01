// 이전 풀이
function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    n % i || count++;
  }
  return count;
}

// 새 풀이
function solution(n) {
  let answer = 0;
  const sqrt = n ** 0.5;

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      if (i === sqrt) {
        answer += 1;
      } else {
        answer += 2;
      }
    }
  }
  return answer;
}
