// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  const newList = numbers.sort((a, b) => b - a);
  const answer = newList[0] * newList[1];

  return answer
}