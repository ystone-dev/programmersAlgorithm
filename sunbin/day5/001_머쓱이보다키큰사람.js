// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  const newArray = [];
  
  array.forEach(element => {
      if (element > height) {
        newArray.push(element);
      }
  });
  return newArray.length
}

// 다른 풀이
function solutionB(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}

solution([149, 180, 192, 170]	, 167);
solution([180, 120, 140], 190);