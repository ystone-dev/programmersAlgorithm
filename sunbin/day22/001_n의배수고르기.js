// https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
  const answer = [];

  for (const i of numlist) {
    if (i % n === 0) {
      answer.push(i);
    }
  }

  return answer
}

// 다른 풀이: filter
function solutionB(n, numlist) {
  const answer = numlist.filter((value) => value % n === 0);
  
  return answer
}