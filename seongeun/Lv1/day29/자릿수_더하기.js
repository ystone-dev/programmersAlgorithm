// 이전 풀이
function solution(n) {
  let answer = String(n)
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
  return answer;
}

// 새 풀이
function solution(n) {
  let answer = 0;

  while (n > 0) {
    answer += n % 10;
    n = Math.trunc(n / 10);
  }

  return answer;
}
