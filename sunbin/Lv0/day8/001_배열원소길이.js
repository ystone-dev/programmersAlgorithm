// https://school.programmers.co.kr/learn/courses/30/lessons/120854

function solution(strlist) {
  const answer = [];

  strlist.forEach(el => {
    answer.push(el.length);
  });

  return answer
}


// 다른풀이: map
function solutionB(strlist) {
  return strlist.map((el) => el.length)
}

// 다른풀이: reduce
function solutionC(strlist) {
  return strlist.reduce((a, b) => [...a, b.length], [])
}