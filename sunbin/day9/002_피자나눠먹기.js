// https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) {
  let pizza = 1;
  while(n > (pizza*7)) {
    pizza++
  }

  return pizza
}


// 다른풀이
function solutionB(n) {
  const answer = Math.ceil(n / 7);

  return answer
}