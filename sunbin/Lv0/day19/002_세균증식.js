// https://school.programmers.co.kr/learn/courses/30/lessons/120910


function solution(n, t) {
  let answer = n;
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }

  return answer
}

// 다른 풀이: 제곱
function solution(n, t) {
  return n * (2 ** t)
}