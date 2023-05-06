// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  const total = (parseInt(hp / 5) + parseInt((hp % 5) / 3) + (hp % 5 % 3))

  return total;
}

console.log(solution(23))