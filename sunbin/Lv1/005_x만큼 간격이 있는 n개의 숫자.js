// https://school.programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function solution(x, n) {
  const answer = [];
  for (let i = x; i <= n; i++) {
    answer.push(i)
    
  }
  return answer
}

// 다른 풀이: Array, fill, map
function solutionB(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
