// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  let answer = 0;
  const target = String(n).split("");

  for (const i of target) {
    answer += Number(i)
  }

  return answer


}


// 다른풀이: reduce
function solutionB(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
