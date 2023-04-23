// https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
  let answer = '';
  for (const i of my_string) {
    answer = i + answer;
  }
  return answer
}

// 다른풀이
function solutionB(my_string) {
  const answer = [...my_string].reverse().join("");

  return answer
}

solution('sunbin')
