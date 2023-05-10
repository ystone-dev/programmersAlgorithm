// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  const answer = my_string
    .split("")
    .map(Number)
    .filter((item) => !isNaN(item))
    .sort((a, b) => a - b);
  return answer;
}
