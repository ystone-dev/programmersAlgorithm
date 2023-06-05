// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let answer = num;
  let count = 0;

  while (answer != 1) {
    if (count == 500) {
      return -1
    } else {
      if (answer % 2 === 0) {
        answer = answer / 2
      } else {
        answer = answer * 3 + 1
      }
      count++;
    }
  }

  return count
}

// 다른 풀이: if 조건문 안에서 ++가능
function solutionB(num) {
  let count = 0;
  while (num !== 1){
      if(count++ === 500) return -1;
      num = num % 2 ? num * 3 + 1 : num / 2;
  }
  return count;
}