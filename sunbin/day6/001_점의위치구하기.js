// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  const num1 = dot[0];
  const num2 = dot[1];

  const multiply = num1 * num2 > 0;

  return num1 > 0 ? multiply ? 1 : 4 : multiply ? 3 : 2
}