// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  let answer = 0;
  const target = String(n).split("");

  for (const i of target) {
    answer += Number(i)
  }

  return answer
seongeun/day15/자릿수_더하기.js

}


// 다른풀이: reduce
function solutionB(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// Array.from() 
function solutionC(n) {
  let result = 0;
  const arr = Array.from(String(n), Number);
  arr.map(item => result += item );
  return result;
}