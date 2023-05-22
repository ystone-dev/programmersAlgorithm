// 이전 풀이
function solution(n) {
  let answer = 0;
  for (i = 0; i <= n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}

// 새 풀이
function solution(n) {
  let answer = 0;

  let i = 1;
  while (i <= n ** 0.5) {
    if (n % i === 0) {
      answer += i;
      answer += n / i;
    }

    i += 1;
  }
  i -= 1;

  return i ** 2 === n ? answer - i : answer;
}
