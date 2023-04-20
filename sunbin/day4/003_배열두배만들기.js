// https://school.programmers.co.kr/learn/courses/30/lessons/120809

function solution(numbers) {
  const answer = [];
  numbers.forEach((value) => {answer.push(value*2)})
  return answer
}

// reduce 사용
function solutionB(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

// map 사용
function solutionC(numbers) {
    return numbers.map((v) => v*2)
}