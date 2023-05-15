// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  const answer = String(order).replace(/[^3|^6|^9]/gm, '').length

  return answer
}

// 다른 풀이: mathAll
function solutionB(order) {
  const answer = [...order.toString().matchAll(/[3|6|9]/g)].length;

  return answer
}