// https://school.programmers.co.kr/learn/courses/30/lessons/120821

function solution(num_list) {
  return num_list.reverse()
}

// 다른 풀이
function solutionB(num_list) {
  const arr = [];
  num_list.forEach((value) => {
    arr.unshift(value)
  })
}


solution([1, 2, 3, 4, 5])