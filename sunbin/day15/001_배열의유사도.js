// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function soluttion(s1, s2) {
  let diff = s1.filter(item => s2.includes(item));

  return diff.length
}