// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  const answer = [];
  const a = [...my_string].forEach((v) => {!answer.includes(v) ? answer.push(v) : 0})

  return answer.join("")
}