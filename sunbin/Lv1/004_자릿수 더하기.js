// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map(Number)
    .reduce((cur, acc) => cur + acc, 0);
  answer;

  return answer;
}
