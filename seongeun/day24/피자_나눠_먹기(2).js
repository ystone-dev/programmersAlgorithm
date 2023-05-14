// 이전 풀이
function solution(n) {
  let lcm = 1;

  for (let i = 6; i <= 6 * n; i++) {
    if (i % n === 0 && i % 6 === 0) {
      lcm = i;
      break;
    }
  }

  return lcm / 6;
}

// 새 풀이
function solution(n) {
  let answer = 1;
  while ((6 * answer) % n) {
    answer += 1;
  }
  return answer;
}
