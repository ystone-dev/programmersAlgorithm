function solution(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      answer.push(i);
    }
  }
  return answer.reduce((a, b) => a + b, 0);
}

// 다른 풀이법
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}
