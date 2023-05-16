// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
  let answer = 0;
  
  for (let i = 0; i < n + 1; i++) {
    const arr = [];
    for (let j = 1; j < i + 1; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }
    if (arr.length >= 3) {
      answer++;
    }
  }
  return answer;
}
